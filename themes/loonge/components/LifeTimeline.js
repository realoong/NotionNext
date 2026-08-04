import { useEffect, useState } from 'react'

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

const getPostMedia = post => {
  const media = Array.isArray(post?.media)
    ? post.media.filter(
        item => item?.src && ['image', 'video'].includes(item.type)
      )
    : []

  if (media.length) return media.slice(0, 9)

  const legacyVideoUrl = getLegacyVideoUrl(post)
  if (legacyVideoUrl) return [{ type: 'video', src: legacyVideoUrl }]

  if (post?.pageCoverThumbnail) {
    return [{ type: 'image', src: post.pageCoverThumbnail }]
  }

  return []
}

const LifeEntryMedia = ({ media, title, onOpenImage }) => {
  if (!media.length) return null

  return (
    <div
      className='loonge-life-entry-media'
      data-count={Math.min(media.length, 9)}
      aria-label={media.length > 1 ? '生活记录图片' : '生活记录图片预览'}
    >
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
          <button
            key={`${item.src}-${index}`}
            type='button'
            className='loonge-life-entry-media-button'
            onClick={() => onOpenImage(item.src)}
            aria-label={`查看${title || '生活记录'}图片`}
          >
            <LazyImage
              src={item.src}
              alt={title || '生活记录'}
              className='loonge-life-entry-image'
            />
          </button>
        )
      )}
    </div>
  )
}

const LifeImageLightbox = ({ src, onClose }) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = event => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className='loonge-life-lightbox'
      role='dialog'
      aria-modal='true'
      aria-label='查看生活记录图片'
      onClick={event => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button
        type='button'
        className='loonge-life-lightbox-close'
        onClick={onClose}
        aria-label='关闭图片预览'
      >
        ×
      </button>
      <img src={src} alt='生活记录原图' />
    </div>
  )
}

const LifeEntry = ({ post, onOpenImage }) => {
  const href = getEntryHref(post)
  const title = post.title || '生活记录'
  const media = getPostMedia(post)

  return (
    <article className='loonge-life-entry'>
      <div className='loonge-life-entry-date'>
        <span>{getPostDate(post)}</span>
        <i aria-hidden='true' />
      </div>
      <div className='loonge-life-entry-card'>
        <div
          className={`loonge-life-entry-content${
            media.length ? ' loonge-life-entry-content--with-media' : ''
          }`}
        >
          <div className='loonge-life-entry-copy'>
            <div className='loonge-life-entry-meta'>生活记录</div>
            <h2>{href ? <SmartLink href={href}>{title}</SmartLink> : title}</h2>
            <p>{post.summary || '记录此刻的想法与观察。'}</p>
            {href ? (
              <SmartLink className='loonge-text-link' href={href}>
                查看详情
              </SmartLink>
            ) : null}
          </div>
          <LifeEntryMedia
            media={media}
            title={title}
            onOpenImage={onOpenImage}
          />
        </div>
      </div>
    </article>
  )
}

export default function LifeTimeline({ posts = [] }) {
  const [selectedImage, setSelectedImage] = useState('')
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
          <p>记录日常里的片段、观察与偶尔冒出来的想法。</p>
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
                onOpenImage={setSelectedImage}
              />
            ))
          )}
        </div>
      </div>
      {selectedImage ? (
        <LifeImageLightbox
          src={selectedImage}
          onClose={() => setSelectedImage('')}
        />
      ) : null}
    </main>
  )
}
