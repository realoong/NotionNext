import DarkModeButton from '@/components/DarkModeButton'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { title: '首页', href: '/' },
  { title: '生活', href: '/category/生活记录' },
  { title: '思考', href: '/#featured' },
  { title: '项目', href: '/#projects' },
  { title: '探索', href: '/#exploration' },
  { title: '关于', href: '/about' }
]

export const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [router.asPath])

  return (
    <header className='loonge-header'>
      <div className='loonge-container loonge-header-inner'>
        <SmartLink href='/' className='loonge-brand' aria-label='龙哥首页'>
          {siteConfig('AUTHOR', '龙哥')}
        </SmartLink>

        <nav className='loonge-nav' aria-label='主导航'>
          {NAV_ITEMS.map(item => (
            <SmartLink
              key={item.title}
              href={item.href}
              className={router.asPath === item.href ? 'active' : ''}
            >
              {item.title}
            </SmartLink>
          ))}
          <DarkModeButton className='loonge-theme-button' />
        </nav>

        <button
          type='button'
          className='loonge-menu-button'
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`loonge-mobile-nav ${open ? 'open' : ''}`}
        aria-label='移动端导航'
      >
        {NAV_ITEMS.map(item => (
          <SmartLink key={item.title} href={item.href}>
            {item.title}
          </SmartLink>
        ))}
        <DarkModeButton className='loonge-theme-button' />
      </nav>
    </header>
  )
}
