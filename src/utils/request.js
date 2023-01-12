// create an axios instance
const instance = axios.create({
  baseURL: '', // url = base url + request url
  timeout: 5000 // request timeout
})

axios.interceptors.request.use(function(config) {
  return config
}, function(error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response) {
  return response.data
}, function(error) {
  return Promise.reject(error)
})

export default instance
