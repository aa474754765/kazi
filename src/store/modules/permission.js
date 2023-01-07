import { allRoutes } from '@/router'

function filterRoutes(routes, accessedRoutes) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (!tmp.requiredPermission || accessedRoutes.includes(tmp.path)) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children, accessedRoutes)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = filterRoutes(allRoutes, routes)
  }
}

const actions = {
  generateRoutes({ commit }, roleName) {
    return new Promise(resolve => {
      const accessedRoutes = (window.localStorage.getItem('role-' + roleName) || '').split(',').filter(i => i)
      if (roleName === 'admin') {
        accessedRoutes.push('/permission')
      }
      const routes = filterRoutes(allRoutes, accessedRoutes)
      commit('SET_ROUTES', accessedRoutes)
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
