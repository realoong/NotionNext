import SmartLink from '@/components/SmartLink'
import { EXPLORATIONS } from '../data'

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

export default function ExplorationPage() {
  return (
    <main className='loonge-directory-page loonge-exploration-page'>
      <div className='loonge-container'>
        <header className='loonge-directory-intro'>
          <div className='loonge-index'>EXPLORATION /</div>
          <h1>探索</h1>
          <p>
            围绕 AI Agent、FDE
            与个人知识系统，持续拆解问题、动手验证，并记录阶段性结论。
          </p>
        </header>

        <div className='loonge-directory-list'>
          {EXPLORATIONS.map(item => (
            <article
              key={item.id}
              id={`exploration-${item.id}`}
              className='loonge-directory-item'
            >
              <div className='loonge-directory-number'>{item.number}</div>
              <div className='loonge-directory-main'>
                <div className='loonge-directory-item-heading'>
                  <h2>{item.title}</h2>
                  <span className='loonge-exploration-pill'>
                    <i /> {item.status}
                  </span>
                </div>
                <p>{item.text}</p>
                <div className='loonge-directory-tags'>
                  {item.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <SmartLink className='loonge-directory-arrow' href='/archive'>
                <Arrow />
                <span className='sr-only'>查看相关思考</span>
              </SmartLink>
            </article>
          ))}
        </div>

        <div className='loonge-directory-note'>
          探索不急着给出标准答案，先把问题拆开，把验证过程留下来。
        </div>
      </div>
    </main>
  )
}
