import router, { allRoutes } from '@/router'
import { getRolePath } from '@/router/utils'

function pathInChildern(route, accessPaths) {
  let result = false
  if (route.children) {
    result = route.children.some(item => accessPaths.includes(item.path) || pathInChildern(item, accessPaths))
  }
  return result
}

function filterRoutes(routes, accessPaths) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (accessPaths.includes(tmp.path) || pathInChildern(tmp, accessPaths)) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children, accessPaths)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  permission_routes: [],
  access_paths: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.permission_routes = routes
  }
}

const actions = {
  generateRoutes({ commit }, roleName) {
    return new Promise(resolve => {
      const accessPaths = getRolePath(roleName)
      const routes = filterRoutes(allRoutes, accessPaths)
      // refresh the routes based on the routes by role
      // eslint-disable-next-line new-cap, no-undef
      router.matcher = new VueRouter({
        routes: routes
      }).matcher
      commit('SET_ROUTES', routes)
      resolve(routes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
