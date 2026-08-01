import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const DIRECTIONS = [
  {
    number: '01',
    title: 'AI Explorer',
    text: '探索前沿 AI 技术，理解智能的边界，并思考其真实价值与影响。',
    href: '/tag/AI'
  },
  {
    number: '02',
    title: 'Engineering Practice',
    text: '以工程思维构建可靠、可扩展的产品，将想法落地为解决方案。',
    href: '/category/工程实践'
  },
  {
    number: '03',
    title: 'Life & Growth',
    text: '保持好奇与学习，在运动、阅读和日常观察中持续成长。',
    href: '/category/生活记录'
  }
]

const EXPLORATIONS = [
  {
    number: '01',
    title: 'AI Agent',
    status: '探索中',
    text: '从模型能力到 Agent 系统，探索 AI 真正落地的方式。',
    href: '/tag/AI Agent'
  },
  {
    number: '02',
    title: 'FDE',
    status: '研究中',
    text: '研究 Forward Deployed Engineer 模式，以及 AI 时代工程角色的变化。',
    href: '/tag/FDE'
  },
  {
    number: '03',
    title: 'Personal Knowledge System',
    status: '建设中',
    text: '连接想法、资料与行动，构建可持续的个人知识与工作系统。',
    href: '/tag/知识管理'
  }
]

const PROJECTS = [
  {
    name: 'AI Agent 实践',
    description: '围绕工具调用、记忆、计划与执行的工程化探索。',
    href: '/tag/AI Agent'
  },
  {
    name: '个人知识系统',
    description: '用 AI 连接知识采集、加工、沉淀与复用。',
    href: '/tag/知识管理'
  },
  {
    name: '工程方法与工具',
    description: '复杂系统建设中的方法、规范与效率工具。',
    href: '/category/工程实践'
  }
]

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

const SectionHeading = ({ index, title, description, action, href }) => (
  <div className='loonge-section-heading'>
    <div>
      {index ? <div className='loonge-index'>{index} /</div> : null}
      <h2>{title}</h2>
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
  return pages.filter(
    page =>
      page &&
      (!page.type || page.type === 'Post') &&
      (!page.status || page.status === 'Published')
  )
}

const FeaturedContent = ({ posts }) => {
  const featured = posts.slice(0, 3)

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
          <div className='loonge-meta'>{lead.category || '精选内容'}</div>
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

export default function HomePage(props) {
  const posts = getPublishedPosts(props?.allNavPages || props?.posts)
  const latestPosts = posts.slice(0, 4)

  return (
    <div className='loonge-home'>
      <section className='loonge-hero'>
        <div className='loonge-container loonge-hero-grid'>
          <div className='loonge-hero-copy'>
            <h1>{siteConfig('LOONGE_HERO_NAME', '龙哥', CONFIG)}</h1>
            <div className='loonge-hero-line'>AI × Engineering × Life</div>
            <p>{siteConfig('LOONGE_HERO_DESCRIPTION', null, CONFIG)}</p>
            <div className='loonge-actions'>
              <SmartLink
                className='loonge-button loonge-button-primary'
                href='/about'
              >
                了解我
              </SmartLink>
              <SmartLink
                className='loonge-button loonge-button-secondary'
                href='#exploration'
              >
                查看探索
              </SmartLink>
            </div>
          </div>
          <div className='loonge-portrait-frame'>
            <div className='loonge-portrait-shape' aria-hidden='true' />
            <LazyImage
              priority
              src={siteConfig(
                'LOONGE_HERO_IMAGE',
                '/images/loonge-hero.png',
                CONFIG
              )}
              alt='龙哥'
              className='loonge-portrait'
            />
          </div>
        </div>
      </section>

      <section className='loonge-section loonge-directions'>
        <div className='loonge-container loonge-directions-grid'>
          <SectionHeading title='我的方向' />
          {DIRECTIONS.map(item => (
            <SmartLink
              key={item.number}
              href={item.href}
              className='loonge-direction'
            >
              <div className='loonge-number'>{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </SmartLink>
          ))}
        </div>
      </section>

      <section id='exploration' className='loonge-section loonge-exploration'>
        <div className='loonge-container'>
          <SectionHeading
            index='01'
            title='当前探索'
            description='面向未来的长期课题，持续深入与验证。'
          />
          <div className='loonge-exploration-track'>
            {EXPLORATIONS.map(item => (
              <SmartLink
                key={item.number}
                href={item.href}
                className='loonge-exploration-item'
              >
                <div className='loonge-track-number'>{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className='loonge-text-link'>
                  {item.status}
                  <Arrow className='h-4 w-4' />
                </span>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <section className='loonge-section loonge-featured-section'>
        <div className='loonge-container'>
          <SectionHeading
            index='02'
            title='精选内容'
            description='思考、研究与实践的记录。'
            action='查看全部内容'
            href='/archive'
          />
          <FeaturedContent posts={posts} />
        </div>
      </section>

      <section className='loonge-section loonge-projects'>
        <div className='loonge-container'>
          <SectionHeading
            title='公开项目'
            description='一些正在构建的项目与实践。'
            action='访问 GitHub'
            href={siteConfig('CONTACT_GITHUB', 'https://github.com/realoong')}
          />
          <div className='loonge-project-list'>
            {PROJECTS.map((project, index) => (
              <SmartLink
                key={project.name}
                href={project.href}
                className='loonge-project-row'
              >
                <span className='loonge-project-mark'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Arrow className='h-5 w-5' />
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <section className='loonge-section loonge-life'>
        <div className='loonge-container loonge-life-grid'>
          <div className='loonge-life-copy'>
            <SectionHeading index='03' title='生活窗口' />
            <p>
              乒乓球让我保持专注与节奏，阅读让我看见更大的世界，日常观察提醒我保持好奇与真诚。
            </p>
            <SmartLink className='loonge-text-link' href='/category/生活记录'>
              更多生活记录
              <Arrow className='h-4 w-4' />
            </SmartLink>
          </div>
          <div className='loonge-life-image'>
            <LazyImage
              src='/images/loonge-life.png'
              alt='书房与乒乓球桌'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </section>

      <section className='loonge-section loonge-latest'>
        <div className='loonge-container loonge-latest-grid'>
          <SectionHeading
            index='04'
            title='最新记录'
            description='记录思考，沉淀过程，分享真实的实践与见解。'
            action='查看全部记录'
            href='/archive'
          />
          <div className='loonge-latest-list'>
            {latestPosts.length ? (
              latestPosts.map(post => (
                <SmartLink
                  key={post.id || post.slug}
                  href={getPostHref(post)}
                  className='loonge-latest-row'
                >
                  <span>
                    {post.publishDay || post.lastEditedDay || '最近更新'}
                  </span>
                  <span>{post.category || '记录'}</span>
                  <h3>{post.title}</h3>
                  <Arrow className='h-5 w-5' />
                </SmartLink>
              ))
            ) : (
              <div className='loonge-latest-empty'>
                <span>内容连接后，最新文章会自动出现在这里。</span>
                <SmartLink className='loonge-text-link' href='/archive'>
                  浏览归档
                  <Arrow className='h-4 w-4' />
                </SmartLink>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
