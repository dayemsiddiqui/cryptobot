const state = {
  isUserLoggedIn: false
}

const getters = {
  isUserLoggedIn: state => state.isUserLoggedIn
}

const mutations = {
  setIsUserLoggedIn: (state, isUserLoggedIn) => {
    state.isUserLoggedIn = isUserLoggedIn
  }
}

const actions = {
  setIsUserLoggedIn: ({commit}, isUserLoggedIn) => {
    commit('setIsUserLoggedIn', isUserLoggedIn)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
