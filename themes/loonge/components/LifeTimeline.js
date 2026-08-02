import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'

const DEFAULT_LIFE_ENTRY = {
  id: 'homepage-refresh-note',
  title: '今天，先给自己的小站发条朋友圈',
  publishDay: '2026.08.02',
  publishDate: new Date('2026-08-02T12:00:00+08:00').getTime(),
  summary:
    '今天给个人首页做了次“大扫除”：模块重新排了排，照片换了张顺眼的，连“生活”也单独留了个位置。折腾到最后发现，做网站和收拾房间差不多——本来只想挪个小东西，最后连墙都想刷一遍。以后这里就当我的小朋友圈吧，想到什么记什么，看到什么拍什么，偶尔发点不太正经的碎碎念。先把第一条发出来，给今天留个脚印。',
  href: '/'
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
          <p>这里就当我的小朋友圈，想到什么记什么，先留下来再说。</p>
        </header>

        <div className='loonge-life-timeline'>
          {!entries.length ? (
            <div className='loonge-life-empty'>
              <strong>生活记录正在积累中。</strong>
              <p>这里会按时间记录文字、图片、视频和日常片段。</p>
            </div>
          ) : (
            entries.map((post, index) => (
              <article
                key={post.id || post.slug || `${post.title}-${index}`}
                className='loonge-life-entry'
              >
                <div className='loonge-life-entry-date'>
                  <span>{getPostDate(post)}</span>
                  <i aria-hidden='true' />
                </div>
                <div className='loonge-life-entry-card'>
                  <div className='loonge-life-entry-meta'>生活记录</div>
                  <LifeEntryMedia post={post} />
                  <h2>
                    <SmartLink
                      href={post.href || `/article/${post.slug || ''}`}
                    >
                      {post.title || '生活记录'}
                    </SmartLink>
                  </h2>
                  <p>{post.summary || '记录此刻的想法与观察。'}</p>
                  <SmartLink
                    className='loonge-text-link'
                    href={post.href || `/article/${post.slug || ''}`}
                  >
                    查看详情
                  </SmartLink>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
