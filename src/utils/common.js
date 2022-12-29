export function deepClone (obj) {
  let result = Array.isArray(obj) ? [] : {}
  for (let i in obj) {
    if (!!obj[i] && typeof obj[i] === 'object') {
      result[i] = deepClone(obj[i])
    } else {
      result[i] = obj[i]
    }
  }
  return result
}
