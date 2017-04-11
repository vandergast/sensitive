export const sensitive = (content, words) => (
  content.replace(
    new RegExp(words.join('|'), 'ig'),
    '***'
  )
)
