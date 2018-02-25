const state = {
  token: null
}

const getters = {
  getToken: state => {
    return state.token
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

const actions = {
  setToken: ({commit}, token) => {
    commit('setToken', token)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
