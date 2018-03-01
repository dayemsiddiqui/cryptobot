// Common mutations goes here
const resetUserInstance = state => {
  state.isUserLoggedIn = false
  state.token = null
  state.user = null
}

export default {
  resetUserInstance
}
