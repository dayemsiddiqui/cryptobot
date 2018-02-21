import Vue from 'vue'
import Vuex from 'vuex'

// Common
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

// Modules
import token from './modules/token'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  getters,
  mutations,
  actions,
  modules: {
    token,
    user
  }
})
