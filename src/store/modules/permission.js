const state = {
  roles: ['Admin', 'Manager', 'Guest']
}

const mutations = {
  ADD_ROLE: (state, role) => {
    state.roles = state.roles.concat(role)
  }
}

const actions = {
  addRole({ commit }, role) {
    commit('ADD_ROLE', role)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
