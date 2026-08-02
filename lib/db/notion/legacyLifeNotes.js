import { fetchNotionPageBlocks, formatNotionBlock } from './getPostBlocks'
import { adapterNotionBlockMap } from '@/lib/utils/notion.util'

// 这是旧站保存碎碎念的 Notion 页面，页面本身是 Draft，所以不会出现在普通文章列表里。
export const LEGACY_LIFE_PAGE_ID = 'af7a6de4cd5b4b4dad5190706ff551f3'

const DATE_PATTERN =
  /(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2})[:：](\d{2})/

const normalizeId = value =>
  String(value || '')
    .replace(/-/g, '')
    .toLowerCase()

const unwrapBlock = entry => entry?.value?.value || entry?.value || entry

const getText = value => {
  if (typeof value === 'string') return value
  if (!Array.isArray(value)) return ''

  return value
    .map(item => {
      if (Array.isArray(item)) return typeof item[0] === 'string' ? item[0] : ''
      return typeof item === 'string' ? item : ''
    })
    .join('')
}

const getBlockText = (blockMap, blockId, seen = new Set()) => {
  if (!blockId || seen.has(blockId)) return ''
  seen.add(blockId)

  const block = unwrapBlock(blockMap?.block?.[blockId])
  if (!block) return ''

  const text = ['title', 'caption', 'text']
    .map(key => getText(block.properties?.[key]))
    .filter(Boolean)

  const children = Array.isArray(block.content)
    ? block.content
        .map(childId => getBlockText(blockMap, childId, seen))
        .filter(Boolean)
    : []

  return [...text, ...children].join('\n')
}

const getBlockSource = (blockMap, block) =>
  blockMap?.signed_urls?.[block?.id] ||
  block?.properties?.source?.[0]?.[0] ||
  block?.format?.display_source ||
  ''

const getBlockMedia = (blockMap, blockId, seen = new Set()) => {
  if (!blockId || seen.has(blockId)) return []
  seen.add(blockId)

  const block = unwrapBlock(blockMap?.block?.[blockId])
  if (!block) return []

  const media = []
  if (['image', 'video'].includes(block.type)) {
    const src = getBlockSource(blockMap, block)
    if (src) media.push({ type: block.type, src })
  }

  if (Array.isArray(block.content)) {
    block.content.forEach(childId => {
      media.push(...getBlockMedia(blockMap, childId, seen))
    })
  }

  return media
}

const getRootBlock = blockMap => {
  const entries = Object.entries(blockMap?.block || {})
  const exact = entries.find(
    ([id]) => normalizeId(id) === normalizeId(LEGACY_LIFE_PAGE_ID)
  )
  if (exact) return unwrapBlock(exact[1])

  return entries
    .map(([, entry]) => unwrapBlock(entry))
    .find(block => block?.type === 'page' && Array.isArray(block.content))
}

const formatDate = match => {
  const [, year, month, day, hour, minute] = match
  const paddedMonth = String(month).padStart(2, '0')
  const paddedDay = String(day).padStart(2, '0')
  const publishDay = `${year}.${paddedMonth}.${paddedDay}`
  const publishDate = new Date(
    `${year}-${paddedMonth}-${paddedDay}T${hour.padStart(2, '0')}:${minute}:00+08:00`
  ).getTime()

  return { publishDay, publishDate }
}

const getTitle = text => {
  const firstLine = text.replace(/\s+/g, ' ').trim()
  if (!firstLine) return '碎碎念'
  return firstLine.length > 36 ? `${firstLine.slice(0, 36)}…` : firstLine
}

const toLifeEntry = (blockMap, blockId) => {
  const text = getBlockText(blockMap, blockId)
    .replace(/^💡\s*Loonge\s*/i, '')
    .trim()
  const dateMatch = text.match(DATE_PATTERN)
  if (!dateMatch) return null

  const body = text.slice(dateMatch.index + dateMatch[0].length).trim()
  if (!body) return null

  const { publishDay, publishDate } = formatDate(dateMatch)
  const media = getBlockMedia(blockMap, blockId)
  return {
    id: `legacy-life-${blockId}`,
    title: getTitle(body),
    publishDay,
    publishDate,
    summary: body,
    ...(media.length ? { media } : {}),
    legacy: true
  }
}

export async function fetchLegacyLifeNotes() {
  try {
    const rawBlockMap = await fetchNotionPageBlocks(
      LEGACY_LIFE_PAGE_ID,
      'legacy-life-notes'
    )
    const adapted = adapterNotionBlockMap(rawBlockMap)
    if (adapted?.block) adapted.block = formatNotionBlock(adapted.block)

    const root = getRootBlock(adapted)
    const childIds = Array.isArray(root?.content) ? root.content : []

    return childIds.map(id => toLifeEntry(adapted, id)).filter(Boolean)
  } catch (error) {
    console.warn('[生活记录] 读取旧碎碎念失败:', error)
    return []
  }
}
