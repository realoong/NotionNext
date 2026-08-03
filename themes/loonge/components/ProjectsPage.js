import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { PROJECTS } from '../data'

const Arrow = () => (
  <svg
    aria-hidden='true'
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

export default function ProjectsPage() {
  return (
    <main className='loonge-directory-page'>
      <div className='loonge-container'>
        <header className='loonge-directory-intro'>
          <div className='loonge-index'>PROJECTS /</div>
          <h1>项目</h1>
          <p>
            把想法变成可以使用的东西，记录从问题、设计到实现与复盘的完整过程。
          </p>
          <SmartLink
            className='loonge-text-link'
            href={siteConfig(
              'CONTACT_GITHUB',
              'https://github.com/realoong',
              CONFIG
            )}
          >
            访问 GitHub <Arrow />
          </SmartLink>
        </header>

        <div className='loonge-directory-list'>
          {PROJECTS.map(project => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className='loonge-directory-item'
            >
              <div className='loonge-directory-number'>{project.number}</div>
              <div className='loonge-directory-main'>
                <div className='loonge-directory-item-heading'>
                  <h2>{project.name}</h2>
                  <span>{project.status}</span>
                </div>
                <p>{project.description}</p>
                <div className='loonge-directory-tags'>
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className='loonge-directory-arrow' aria-hidden='true'>
                <Arrow />
              </div>
            </article>
          ))}
        </div>

        <div className='loonge-directory-note'>
          新项目会先在这里留下位置，再逐步补上过程、链接和复盘。
        </div>
      </div>
    </main>
  )
}
