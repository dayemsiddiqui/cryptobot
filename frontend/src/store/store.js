import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

// Common
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// Module states
import token from './modules/token'
import user from './modules/user'
import isUserLoggedIn from './modules/isUserLoggedIn'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3 }), // use 'secure: true' over https
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  getters,
  mutations,
  actions,
  modules: {
    isUserLoggedIn,
    user,
    token
  }
})
