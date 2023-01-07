const state = {
  roles: [],
  currentRole: 'admin'
}

const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  ADD_ROLE: (state, role) => {
    state.roles = state.roles.concat(role)
  },
  SET_ROLE: (state, role) => {
    state.currentRole = role
  }
}

const actions = {
  setRoles({ commit }, roles) {
    commit('SET_ROLES', roles)
  },
  addRole({ commit }, role) {
    commit('ADD_ROLE', role)
  },
  setCurrentRole({ commit }, role) {
    commit('SET_ROLE', role)
  },
  changeRole({ commit, dispatch }, role) {
    commit('SET_ROLE', role)
    dispatch('permission/generateRoutes', role, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
