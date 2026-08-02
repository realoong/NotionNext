import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'

const DEFAULT_LIFE_ENTRY = {
  id: 'homepage-refresh-note',
  title: '本来想换张照片，最后把首页重做了',
  publishDay: '2026.08.02',
  publishDate: new Date('2026-08-02T12:00:00+08:00').getTime(),
  summary:
    '今天折腾了一下个人首页，原本只是想换张照片，结果导航、模块、照片一起动了个遍。做完看着还行，至少以后想写点什么有地方放了。先记一笔，免得过两天又忘了自己今天都折腾了啥。'
}

const getPostTime = post => {
  const value =
    post?.publishDate || post?.date?.start_date || post?.lastEditedDate
  if (typeof value === 'number') return value
  const time = Date.parse(value || '')
  return Number.isFinite(time) ? time : 0
}

const getLegacyVideoUrl = post => {
  const ext = post?.ext && typeof post.ext === 'object' ? post.ext : {}
  const candidate =
    post?.videoUrl || post?.video || ext.videoUrl || ext.video || ''
  return typeof candidate === 'string' ? candidate.trim() : ''
}

const getPostDate = post => post?.publishDay || post?.lastEditedDay || '最近'

const getEntryHref = post => {
  if (
    typeof post?.href === 'string' &&
    post.href.trim() &&
    post.href.trim() !== '/'
  ) {
    return post.href
  }
  if (typeof post?.slug === 'string' && post.slug.trim()) {
    return `/article/${post.slug}`
  }
  return ''
}

const LifeEntryMedia = ({ post }) => {
  const media = Array.isArray(post?.media) ? post.media : []
  const legacyVideoUrl = getLegacyVideoUrl(post)

  if (media.length) {
    return (
      <div className='loonge-life-entry-media'>
        {media.map((item, index) =>
          item.type === 'video' ? (
            <video
              key={`${item.src}-${index}`}
              className='loonge-life-entry-video'
              controls
              preload='metadata'
              src={item.src}
            />
          ) : (
            <LazyImage
              key={`${item.src}-${index}`}
              src={item.src}
              alt={post.title || '生活记录'}
              className='loonge-life-entry-image'
            />
          )
        )}
      </div>
    )
  }

  if (legacyVideoUrl) {
    return (
      <video
        className='loonge-life-entry-video'
        controls
        preload='metadata'
        src={legacyVideoUrl}
      />
    )
  }

  if (post?.pageCoverThumbnail) {
    return (
      <LazyImage
        src={post.pageCoverThumbnail}
        alt={post.title || '生活记录'}
        className='loonge-life-entry-image'
      />
    )
  }

  return null
}

const LifeEntry = ({ post }) => {
  const href = getEntryHref(post)
  const title = post.title || '生活记录'

  return (
    <article className='loonge-life-entry'>
      <div className='loonge-life-entry-date'>
        <span>{getPostDate(post)}</span>
        <i aria-hidden='true' />
      </div>
      <div className='loonge-life-entry-card'>
        <div className='loonge-life-entry-meta'>生活记录</div>
        <LifeEntryMedia post={post} />
        <h2>{href ? <SmartLink href={href}>{title}</SmartLink> : title}</h2>
        <p>{post.summary || '记录此刻的想法与观察。'}</p>
        {href ? (
          <SmartLink className='loonge-text-link' href={href}>
            查看详情
          </SmartLink>
        ) : null}
      </div>
    </article>
  )
}

export default function LifeTimeline({ posts = [] }) {
  const hasDefaultEntry = posts.some(post => post?.id === DEFAULT_LIFE_ENTRY.id)
  const entries = [
    ...(hasDefaultEntry ? posts : [...posts, DEFAULT_LIFE_ENTRY])
  ].sort((a, b) => getPostTime(b) - getPostTime(a))

  return (
    <main className='loonge-life-page'>
      <div className='loonge-container'>
        <header className='loonge-life-page-intro'>
          <div className='loonge-index'>LIFE /</div>
          <h1>生活</h1>
          <p>记录运动、阅读，以及那些当下想到的事。</p>
        </header>

        <div className='loonge-life-timeline'>
          {!entries.length ? (
            <div className='loonge-life-empty'>
              <strong>生活记录正在积累中。</strong>
              <p>这里会按时间记录文字、图片、视频和日常片段。</p>
            </div>
          ) : (
            entries.map((post, index) => (
              <LifeEntry
                key={post.id || post.slug || `${post.title}-${index}`}
                post={post}
              />
            ))
          )}
        </div>
      </div>
    </main>
  )
}
