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

export function isJSON (str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  return false
}
