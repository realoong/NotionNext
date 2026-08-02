import { fetchNotionPageBlocks, formatNotionBlock } from './getPostBlocks'
import { adapterNotionBlockMap } from '@/lib/utils/notion.util'

const getBlockSource = (block, blockMap) => {
  return (
    blockMap?.signed_urls?.[block?.id] ||
    block?.properties?.source?.[0]?.[0] ||
    block?.format?.display_source ||
    ''
  )
}

export async function enrichLifePosts(posts = []) {
  return Promise.all(
    posts.map(async post => {
      if (!post?.id) return post

      try {
        const rawBlockMap = await fetchNotionPageBlocks(
          post.id,
          'life-timeline'
        )
        const blockMap = adapterNotionBlockMap(rawBlockMap)
        if (!blockMap?.block) return post

        const formattedBlocks = formatNotionBlock(blockMap.block)
        const media = Object.values(formattedBlocks)
          .map(entry => entry?.value || entry)
          .filter(block => block && ['image', 'video'].includes(block.type))
          .map(block => ({
            type: block.type,
            src: getBlockSource(block, blockMap)
          }))
          .filter(item => item.src)
          .slice(0, 4)

        return media.length ? { ...post, media } : post
      } catch (error) {
        console.warn('[生活记录] 读取媒体失败:', post.id, error)
        return post
      }
    })
  )
}
