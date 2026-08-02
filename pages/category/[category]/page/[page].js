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

export async function getStaticProps({ params: { category, page } }) {
  const from = 'category-page-props'
  let props = await fetchGlobalAllData({ from })

  // 过滤状态类型
  const publishedPosts =
    props.allPages?.filter(
      page => page.type === 'Post' && page.status === 'Published'
    ) || []
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
  // 处理文章页数
  props.postCount = props.posts.length
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
  // 处理分页
  props.posts = props.posts.slice(
    POSTS_PER_PAGE * (page - 1),
    POSTS_PER_PAGE * page
  )

  if (category === '生活记录') {
    props.posts = await enrichLifePosts(props.posts)
  }

  delete props.allPages
  props.page = page

  props = { ...props, category, page }

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
  const { categoryOptions, allPages, NOTION_CONFIG } = await fetchGlobalAllData(
    {
      from
    }
  )
  const paths = []

  categoryOptions?.forEach(category => {
    // 过滤状态类型
    const categoryPosts = allPages
      ?.filter(page => page.type === 'Post' && page.status === 'Published')
      .filter(
        post => post && post.category && post.category.includes(category.name)
      )
    // 处理文章页数
    const postCount = categoryPosts.length
    const totalPages = Math.ceil(
      postCount / siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
    )
    if (totalPages > 1) {
      for (let i = 1; i <= totalPages; i++) {
        paths.push({ params: { category: category.name, page: '' + i } })
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}
