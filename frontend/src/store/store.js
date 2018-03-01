import Vue from 'vue'
import Vuex from 'vuex'

// Common
import actions from './actions'
import mutations from './mutations'
// import * as getters from './getters'

// Module states
import token from './modules/token'
import user from './modules/user'
import isUserLoggedIn from './modules/isUserLoggedIn'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // getters,
  mutations,
  actions,
  modules: {
    token,
    user,
    isUserLoggedIn
  }
})
