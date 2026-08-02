import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { enrichLifePosts } from '@/lib/db/notion/getLifePostMedia'
import { isLifePost } from '@/lib/db/notion/lifeCategories'
import { fetchLegacyLifeNotes } from '@/lib/db/notion/legacyLifeNotes'
import { DynamicLayout } from '@/themes/theme'

/**
 * 分类页
 * @param {*} props
 * @returns
 */
export default function Category(props) {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPostList' {...props} />
}

export async function getStaticProps({ params: { category }, locale }) {
  const from = 'category-props'
  let props = await fetchGlobalAllData({ from, locale })

  // 过滤状态
  const publishedPosts = props.allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
  // 生活页兼容之前使用过的“碎碎念 / 心情随笔 / 随笔”等分类。
  if (category === '生活记录') {
    const currentLifePosts = publishedPosts.filter(isLifePost)
    const legacyLifePosts = await fetchLegacyLifeNotes()
    const currentIds = new Set(currentLifePosts.map(post => post?.id))
    props.posts = [
      ...currentLifePosts,
      ...legacyLifePosts.filter(post => !currentIds.has(post?.id))
    ]
  } else {
    props.posts = publishedPosts.filter(
      post => post && post.category && post.category.includes(category)
    )
  }

  if (category === '生活记录') {
    props.posts = await enrichLifePosts(props.posts)
  }

  // 处理文章页数
  props.postCount = props.posts.length
  // 处理分页
  const POST_LIST_STYLE = siteConfig(
    'POST_LIST_STYLE',
    'page',
    props?.NOTION_CONFIG
  )
  if (POST_LIST_STYLE === 'scroll') {
    // 滚动列表 给前端返回所有数据
  } else if (POST_LIST_STYLE === 'page') {
    // 生活页是时间线，需要一次展示完整迁移记录；其它分类继续按常规分页。
    if (category !== '生活记录') {
      props.posts = props.posts?.slice(
        0,
        siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
      )
    }
  }

  delete props.allPages

  props = { ...props, category }

  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}

export async function getStaticPaths() {
  const from = 'category-paths'
  const { categoryOptions } = await fetchGlobalAllData({ from })
  const categories = Array.isArray(categoryOptions) ? categoryOptions : []
  return {
    paths: categories.map(category => ({
      params: { category: category?.name }
    })),
    fallback: true
  }
}
