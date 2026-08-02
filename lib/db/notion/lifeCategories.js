const LIFE_CATEGORY_NAMES = new Set([
  '生活记录',
  '生活',
  '碎碎念',
  '随笔',
  '心情随笔'
])

const getValues = value => {
  if (Array.isArray(value)) return value
  if (typeof value === 'string') return [value]
  return []
}

export const isLifePost = post => {
  const categories = getValues(post?.category)
  const tags = getValues(post?.tags)
  return [...categories, ...tags].some(value =>
    LIFE_CATEGORY_NAMES.has(String(value).trim())
  )
}
