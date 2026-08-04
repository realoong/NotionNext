import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { MODULES, PRACTICES } from '../data'

const Arrow = ({ className = '' }) => (
  <svg
    aria-hidden='true'
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M5 12h14M14 7l5 5-5 5' />
  </svg>
)

const HeroModules = () => (
  <nav className='loonge-hero-modules' aria-label='内容模块'>
    {MODULES.map(item => (
      <SmartLink
        key={item.number}
        href={item.href}
        className='loonge-hero-module'
      >
        <div className='loonge-hero-module-meta'>
          <span>{item.number}</span>
          <Arrow className='h-4 w-4' />
        </div>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </SmartLink>
    ))}
  </nav>
)

const SectionHeading = ({
  index,
  title,
  description,
  action,
  href,
  titleHref
}) => (
  <div className='loonge-section-heading'>
    <div>
      {titleHref ? (
        <SmartLink className='loonge-section-heading-title' href={titleHref}>
          {index ? <div className='loonge-index'>{index} /</div> : null}
          <h2>{title}</h2>
        </SmartLink>
      ) : (
        <>
          {index ? <div className='loonge-index'>{index} /</div> : null}
          <h2>{title}</h2>
        </>
      )}
      {description ? <p>{description}</p> : null}
    </div>
    {action && href ? (
      <SmartLink className='loonge-text-link' href={href}>
        {action}
        <Arrow className='h-4 w-4' />
      </SmartLink>
    ) : null}
  </div>
)

const getPostHref = post => post?.href || `/article/${post?.slug || ''}`

const getPublishedPosts = pages => {
  if (!Array.isArray(pages)) return []
  return pages
    .filter(
      page =>
        page &&
        (!page.type || page.type === 'Post') &&
        (!page.status || page.status === 'Published')
    )
    .sort((a, b) => (b.publishDate || 0) - (a.publishDate || 0))
}

const FeaturedContent = ({ posts }) => {
  const featured = posts.slice(0, 4)

  if (!featured.length) {
    return (
      <div className='loonge-featured-empty'>
        <div className='loonge-featured-art' aria-hidden='true'>
          <span>AI</span>
          <span>01</span>
        </div>
        <div>
          <div className='loonge-meta'>深度研究</div>
          <h3>AI Agent 深度研究</h3>
          <p>
            从模型、架构到工程落地，梳理 AI Agent
            的关键能力、设计取舍与实践路径。
          </p>
          <SmartLink className='loonge-text-link mt-8' href='/tag/AI Agent'>
            查看专题
            <Arrow className='h-4 w-4' />
          </SmartLink>
        </div>
      </div>
    )
  }

  const [lead, ...rest] = featured
  return (
    <div className='loonge-featured'>
      <SmartLink
        className='loonge-featured-lead group'
        href={getPostHref(lead)}
      >
        <div className='loonge-featured-image'>
          {lead.pageCoverThumbnail ? (
            <LazyImage
              src={lead.pageCoverThumbnail}
              alt={lead.title}
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]'
            />
          ) : (
            <div className='loonge-featured-art' aria-hidden='true'>
              <span>AI</span>
              <span>01</span>
            </div>
          )}
        </div>
        <div className='loonge-featured-copy'>
          <div className='loonge-meta'>{lead.category || '思考'}</div>
          <h3>{lead.title}</h3>
          <p>{lead.summary || '记录思考、研究与实践中的关键发现。'}</p>
          <div className='loonge-post-foot'>
            <span>{lead.publishDay || lead.lastEditedDay || ''}</span>
            <Arrow className='h-5 w-5' />
          </div>
        </div>
      </SmartLink>

      <div className='loonge-featured-list'>
        {rest.map(post => (
          <SmartLink
            key={post.id || post.slug}
            className='loonge-featured-row group'
            href={getPostHref(post)}
          >
            <div className='loonge-featured-thumb'>
              {post.pageCoverThumbnail ? (
                <LazyImage
                  src={post.pageCoverThumbnail}
                  alt={post.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              ) : (
                <span aria-hidden='true'>
                  {post.title?.slice(0, 1) || '记'}
                </span>
              )}
            </div>
            <div className='min-w-0 flex-1'>
              <div className='loonge-meta'>{post.category || '记录'}</div>
              <h3>{post.title}</h3>
              <div className='loonge-post-foot'>
                <span>{post.publishDay || post.lastEditedDay || ''}</span>
                <Arrow className='h-5 w-5' />
              </div>
            </div>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

const PracticeContent = () => {
  const featured = PRACTICES.slice(0, 4)
  const [lead, ...rest] = featured

  return (
    <div className='loonge-featured'>
      <SmartLink
        className='loonge-featured-lead group'
        href={`/practice#practice-${lead.id}`}
      >
        <div className='loonge-featured-image'>
          <LazyImage
            priority
            src={lead.image}
            alt={lead.title}
            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]'
          />
        </div>
        <div className='loonge-featured-copy'>
          <div className='loonge-meta'>
            {lead.kind} · {lead.status}
          </div>
          <h3>{lead.title}</h3>
          <p>{lead.description}</p>
          <div className='loonge-post-foot'>
            <span>{lead.date}</span>
            <Arrow className='h-5 w-5' />
          </div>
        </div>
      </SmartLink>

      <div className='loonge-featured-list'>
        {rest.map(item => (
          <SmartLink
            key={item.id}
            className='loonge-featured-row group'
            href={`/practice#practice-${item.id}`}
          >
            <div className='loonge-featured-thumb'>
              <LazyImage
                priority
                src={item.image}
                alt={item.title}
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='min-w-0 flex-1'>
              <div className='loonge-meta'>
                {item.kind} · {item.status}
              </div>
              <h3>{item.title}</h3>
              <div className='loonge-post-foot'>
                <span>{item.date}</span>
                <Arrow className='h-5 w-5' />
              </div>
            </div>
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

export default function HomePage(props) {
  const posts = getPublishedPosts(props?.allNavPages || props?.posts)

  return (
    <div className='loonge-home'>
      <section className='loonge-hero'>
        <div className='loonge-container loonge-hero-grid'>
          <div className='loonge-hero-copy'>
            <h1>{siteConfig('LOONGE_HERO_NAME', 'Loong', CONFIG)}</h1>
            <div className='loonge-hero-line'>AI × Engineering × Life</div>
            <p>{siteConfig('LOONGE_HERO_DESCRIPTION', null, CONFIG)}</p>
            <div className='loonge-actions'>
              <SmartLink
                className='loonge-button loonge-button-primary'
                href='/about'
              >
                关于我
              </SmartLink>
              <SmartLink
                className='loonge-button loonge-button-secondary'
                href='#practice'
              >
                查看实践
              </SmartLink>
            </div>
          </div>
          <div className='loonge-portrait-frame'>
            <div className='loonge-portrait-shape' aria-hidden='true' />
            <LazyImage
              priority
              src={siteConfig(
                'LOONGE_HERO_IMAGE',
                '/images/loonge-hero-color.png',
                CONFIG
              )}
              alt='龙哥'
              className='loonge-portrait'
            />
          </div>
          <HeroModules />
        </div>
      </section>

      <section id='life' className='loonge-section loonge-life'>
        <div className='loonge-container'>
          <SectionHeading
            index='01'
            title='生活'
            titleHref='/category/生活记录'
            description='记录日常里的片段、观察与偶尔冒出来的想法，给真实生活留个位置。'
            action='查看生活记录'
            href='/category/生活记录'
          />

          <div className='loonge-life-grid'>
            <SmartLink
              className='loonge-life-image group'
              href='/category/生活记录'
              aria-label='进入生活记录'
            >
              <LazyImage
                src='/images/loonge-life.png'
                alt='书房与乒乓球桌'
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]'
              />
            </SmartLink>
            <div className='loonge-life-details'>
              <div className='loonge-meta'>LIFE LOG / 01</div>
              <h3>把生活留下来</h3>
              <p>
                运动、阅读、工作之外，也记录路过的风景、突然的念头和还没想明白的小事。
              </p>
              <SmartLink className='loonge-text-link' href='/category/生活记录'>
                进入生活记录
                <Arrow className='h-4 w-4' />
              </SmartLink>
            </div>
          </div>
        </div>
      </section>

      <section id='featured' className='loonge-section loonge-featured-section'>
        <div className='loonge-container'>
          <SectionHeading
            index='02'
            title='思考'
            description='把读到的、想到的和做过的事情写下来，沉淀对技术、工作与长期成长的理解。'
            action='查看全部思考'
            href='/archive'
          />
          <FeaturedContent posts={posts} />
        </div>
      </section>

      <section id='practice' className='loonge-section loonge-featured-section'>
        <div className='loonge-container'>
          <SectionHeading
            index='03'
            title='实践'
            description='把项目做出来，也把探索过程留下来，记录真实的尝试、验证和阶段性成果。'
            action='查看全部实践'
            href='/practice'
          />
          <PracticeContent />
        </div>
      </section>
    </div>
  )
}
