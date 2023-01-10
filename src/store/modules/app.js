const state = {
  device: 'desktop',
  fullSrceen: false
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  TOGGLE_SCREEN_STATUS: (state) => {
    state.fullSrceen = !state.fullSrceen
  }
}

const actions = {
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  toggleScreenStatus({ commit }) {
    commit('TOGGLE_SCREEN_STATUS')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
