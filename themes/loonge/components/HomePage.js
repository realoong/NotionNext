import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const MODULES = [
  {
    number: '01',
    title: '生活',
    text: '记录运动、阅读与日常观察，留下真实的生活片段。',
    href: '/category/生活记录'
  },
  {
    number: '02',
    title: '思考',
    text: '记录阅读、研究与实践中的想法和判断。',
    href: '#featured'
  },
  {
    number: '03',
    title: '项目',
    text: '把想法做成可以使用的项目与工具。',
    href: '#projects'
  },
  {
    number: '04',
    title: '探索',
    text: '持续跟进 AI Agent、FDE 与知识系统。',
    href: '#exploration'
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
                '/images/loonge-hero-white-shirt.png',
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
        <div className='loonge-container loonge-life-grid'>
          <div className='loonge-life-copy'>
            <SectionHeading
              index='01'
              title='生活'
              titleHref='/category/生活记录'
            />
            <p>
              乒乓球让我保持专注与节奏，阅读让我看见更大的世界，日常观察提醒我保持好奇与真诚。
            </p>
          </div>
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
        </div>
      </section>

      <section id='featured' className='loonge-section loonge-featured-section'>
        <div className='loonge-container'>
          <SectionHeading
            index='02'
            title='思考'
            description='把读到的、想到的和做过的事情写下来，沉淀对技术、工作与长期成长的理解。'
            action='查看全部内容'
            href='/archive'
          />
          <FeaturedContent posts={posts} />
        </div>
      </section>

      <section id='projects' className='loonge-section loonge-projects'>
        <div className='loonge-container'>
          <SectionHeading
            index='03'
            title='项目'
            description='把想法变成可以使用的东西，记录从问题、设计到实现与复盘的完整过程。'
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

      <section id='exploration' className='loonge-section loonge-exploration'>
        <div className='loonge-container'>
          <SectionHeading
            index='04'
            title='探索'
            description='围绕 AI Agent、FDE 与个人知识系统，持续拆解问题、动手验证，并记录阶段性结论。'
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
                <span className='loonge-text-link loonge-exploration-status'>
                  <span className='loonge-status-dot' aria-hidden='true' />
                  {item.status}
                  <Arrow className='h-4 w-4' />
                </span>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
