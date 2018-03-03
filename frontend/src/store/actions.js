// Common actions goes here

export default {
  resetUserStates: state => {
    state.commit('setIsUserLoggedIn', false)
    state.commit('setUser', null)
    state.commit('setToken', null)
  }
}
