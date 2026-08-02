import SmartLink from '@/components/SmartLink'

const ABOUT_SECTIONS = [
  {
    title: '我正在关注什么',
    items: [
      {
        title: '人工智能',
        text: '关注大模型、AI Agent、RAG 和智能工具，思考 AI 如何真正进入工作与生活，而不仅仅停留在概念和演示层面。'
      },
      {
        title: '工程实践',
        text: '关注软件工程、系统建设、技术体系和复杂问题的解决方法，把想法逐步变成稳定、可维护、能够长期使用的产品。'
      },
      {
        title: '知识与成长',
        text: '持续构建个人知识系统，尝试借助 AI 改进学习、记录、整理和行动，让知识真正产生复用价值。'
      },
      {
        title: '生活本身',
        text: '技术之外，我喜欢乒乓球、阅读和观察日常。运动让我保持节奏，阅读让我看见更大的世界，生活提醒我保持真实和好奇。'
      }
    ]
  }
]

export default function AboutPage() {
  return (
    <main className='loonge-about-page'>
      <div className='loonge-container'>
        <header className='loonge-about-intro'>
          <div className='loonge-index'>ABOUT /</div>
          <h1>关于龙哥</h1>
          <p className='loonge-about-lead'>持续学习，认真实践，保持好奇。</p>
          <p>
            我是龙哥，一名长期在技术与业务交汇处工作的 IT 从业者，来自西安。
          </p>
          <p>
            我关注人工智能、软件工程和复杂问题的解决方式，也在持续探索：如何把新的技术、清晰的思考和可靠的工程，转化为真实可用的结果。
          </p>
        </header>

        {ABOUT_SECTIONS.map(section => (
          <section key={section.title} className='loonge-about-section'>
            <h2>{section.title}</h2>
            <div className='loonge-about-grid'>
              {section.items.map((item, index) => (
                <article key={item.title} className='loonge-about-card'>
                  <div className='loonge-about-card-number'>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className='loonge-about-section loonge-about-belief'>
          <div>
            <div className='loonge-index'>MY VIEW /</div>
            <h2>我相信</h2>
          </div>
          <div className='loonge-about-belief-copy'>
            <p>
              学习不是为了积累更多标签，而是为了更好地理解问题、做出判断并完成行动。
            </p>
            <p>真正有价值的内容，应该来自实践，也应该能够回到实践。</p>
          </div>
        </section>

        <section className='loonge-about-closing'>
          <p>
            这个网站记录我的研究、项目、思考和生活，希望这些真实的积累，能够与同样关注技术、成长和长期主义的人产生连接。
          </p>
          <p>欢迎交流。</p>
          <SmartLink className='loonge-text-link' href='/'>
            回到首页
          </SmartLink>
        </section>
      </div>
    </main>
  )
}
