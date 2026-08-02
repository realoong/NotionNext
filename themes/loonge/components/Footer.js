import CopyRightDate from '@/components/CopyRightDate'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

const FOOTER_LINKS = [
  { title: '生活', href: '/#life' },
  { title: '思考', href: '/#featured' },
  { title: '项目', href: '/#projects' },
  { title: '探索', href: '/#exploration' },
  { title: '关于', href: '/about' }
]

export const Footer = () => (
  <footer className='loonge-footer'>
    <div className='loonge-container loonge-footer-grid'>
      <div>
        <SmartLink href='/' className='loonge-footer-brand'>
          {siteConfig('AUTHOR', '龙哥')}
        </SmartLink>
        <p>AI × Engineering × Life</p>
      </div>
      <nav aria-label='页脚导航'>
        {FOOTER_LINKS.map(item => (
          <SmartLink key={item.title} href={item.href}>
            {item.title}
          </SmartLink>
        ))}
      </nav>
      <div className='loonge-copyright'>
        <CopyRightDate />
        <span>保留所有权利</span>
      </div>
    </div>
  </footer>
)
