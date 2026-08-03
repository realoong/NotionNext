import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'
import { useMemo, useState } from 'react'
import { PRACTICE_FILTERS, PRACTICES } from '../data'

const practiceHref = item => `/practice#practice-${item.id}`

const PracticeCard = ({ item }) => (
  <article id={`practice-${item.id}`} className='loonge-archive-card'>
    <SmartLink
      href={practiceHref(item)}
      className='loonge-archive-card-cover group'
    >
      <LazyImage
        priority
        src={item.image}
        alt={item.title}
        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
      />
    </SmartLink>
    <div className='loonge-archive-card-body'>
      <div className='loonge-archive-card-meta'>
        <span>
          {item.kind} · {item.status}
        </span>
        <time>{item.date}</time>
      </div>
      <h2>
        <SmartLink href={practiceHref(item)}>{item.title}</SmartLink>
      </h2>
      <p>{item.description}</p>
      <div className='loonge-archive-card-tags' aria-label='内容标签'>
        {item.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  </article>
)

export default function PracticeArchive() {
  const [activeFilter, setActiveFilter] = useState(PRACTICE_FILTERS[0])
  const filters = useMemo(() => {
    const tags = PRACTICES.flatMap(item => item.tags || [])
    return [...PRACTICE_FILTERS, ...Array.from(new Set(tags))]
  }, [])
  const visibleItems = useMemo(
    () =>
      activeFilter === '全部'
        ? PRACTICES
        : PRACTICES.filter(
            item =>
              item.kind === activeFilter || item.tags?.includes(activeFilter)
          ),
    [activeFilter]
  )

  return (
    <main className='loonge-archive-page loonge-practice-page'>
      <div className='loonge-container'>
        <header className='loonge-archive-intro'>
          <div className='loonge-index'>PRACTICE /</div>
          <h1>实践</h1>
          <p>
            把项目做出来，也把探索过程留下来，记录真实的尝试、验证和阶段性成果。
          </p>
        </header>

        <div className='loonge-archive-toolbar'>
          <div className='loonge-archive-filters' aria-label='实践分类筛选'>
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
            {visibleItems.length} 条记录
          </span>
        </div>

        {visibleItems.length ? (
          <div className='loonge-archive-grid'>
            {visibleItems.map(item => (
              <PracticeCard key={item.id} item={item} />
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
