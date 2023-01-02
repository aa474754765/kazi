import { isJSON } from './common'

export function validateJson (rule, value, callback) {
  if (value && !isJSON(value)) {
    callback(new Error('Json格式不正确'))
  } else {
    callback()
  }
}
