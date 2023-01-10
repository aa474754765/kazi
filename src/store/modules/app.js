const state = {
  device: 'desktop',
  fullSrceen: false,
  language: ''
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  TOGGLE_SCREEN_STATUS: (state) => {
    state.fullSrceen = !state.fullSrceen
  },
  CHANGE_LANGUAGE: (state, language) => {
    state.language = language
  }
}

const actions = {
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  toggleScreenStatus({ commit }) {
    commit('TOGGLE_SCREEN_STATUS')
  },
  changeLanguage({ commit }, language) {
    commit('CHANGE_LANGUAGE', language)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
