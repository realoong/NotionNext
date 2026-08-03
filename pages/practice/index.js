import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { isBrowser } from '@/lib/utils'
import { DynamicLayout } from '@/themes/theme'
import { useEffect } from 'react'

export default function PracticeIndex(props) {
  useEffect(() => {
    if (isBrowser && window.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.slice(1))
        element?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }, 300)
    }
  }, [])

  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutPractice' {...props} />
}
