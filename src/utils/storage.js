export function setStorage(STORAGE_KEY, data) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function addArrayStorage(STORAGE_KEY, newItem) {
  const data = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || []
  data.push(newItem)
  setStorage(STORAGE_KEY, data)
}

export function updateArrayStorage(STORAGE_KEY, id, updateItem) {
  const data = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
  const index = data.findIndex(i => i.id === id)
  if (index >= 0) {
    data.splice(index, 1, updateItem)
  }
  setStorage(STORAGE_KEY, data)
}

export function deleteArrayStorage(STORAGE_KEY, id) {
  const data = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
  const index = data.findIndex(i => i.id === id)
  if (index >= 0) {
    data.splice(index, 1)
  }
  setStorage(STORAGE_KEY, data)
}

export function getStorage(STORAGE_KEY) {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY))
}
