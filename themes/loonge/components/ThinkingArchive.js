import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'
import { useMemo, useState } from 'react'

const getPostCategories = post => {
  const values = []
  if (typeof post?.category === 'string' && post.category.trim()) {
    values.push(post.category.trim())
  }
  if (Array.isArray(post?.tags)) {
    post.tags.forEach(tag => {
      const value = typeof tag === 'string' ? tag : tag?.name
      if (value && !values.includes(value)) values.push(value)
    })
  }
  return values
}

const postHref = post => post?.href || `/article/${post?.slug || ''}`

const ArchiveCard = ({ post }) => (
  <article className='loonge-archive-card'>
    <SmartLink
      href={postHref(post)}
      className='loonge-archive-card-cover group'
    >
      {post?.pageCoverThumbnail ? (
        <LazyImage
          src={post.pageCoverThumbnail}
          alt={post.title}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
        />
      ) : (
        <span aria-hidden='true'>{post?.title?.slice(0, 1) || '思'}</span>
      )}
    </SmartLink>
    <div className='loonge-archive-card-body'>
      <div className='loonge-archive-card-meta'>
        <span>{post?.category || '思考'}</span>
        <time>{post?.publishDay || post?.lastEditedDay || '最近'}</time>
      </div>
      <h2>
        <SmartLink href={postHref(post)}>{post?.title}</SmartLink>
      </h2>
      <p>{post?.summary || '记录思考、研究与实践中的关键发现。'}</p>
    </div>
  </article>
)

export default function ThinkingArchive({ posts = [] }) {
  const [activeFilter, setActiveFilter] = useState('全部')
  const filters = useMemo(() => {
    const names = posts.flatMap(getPostCategories).filter(Boolean)
    return ['全部', ...Array.from(new Set(names))]
  }, [posts])
  const visiblePosts = useMemo(
    () =>
      activeFilter === '全部'
        ? posts
        : posts.filter(post => getPostCategories(post).includes(activeFilter)),
    [activeFilter, posts]
  )

  return (
    <main className='loonge-archive-page'>
      <div className='loonge-container'>
        <header className='loonge-archive-intro'>
          <div className='loonge-index'>THOUGHT /</div>
          <h1>思考</h1>
          <p>
            把读到的、想到的和做过的事情写下来，沉淀对技术、工作与长期成长的理解。
          </p>
        </header>

        <div className='loonge-archive-toolbar'>
          <div className='loonge-archive-filters' aria-label='思考分类筛选'>
            {filters.map(filter => (
              <button
                key={filter}
                type='button'
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className='loonge-archive-count'>
            {visiblePosts.length} 篇记录
          </span>
        </div>

        {visiblePosts.length ? (
          <div className='loonge-archive-grid'>
            {visiblePosts.map(post => (
              <ArchiveCard key={post.id || post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className='loonge-archive-empty'>
            这个分类还没有记录，先留个位置。
          </div>
        )}
      </div>
    </main>
  )
}
