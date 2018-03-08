import api from './api'

export default {
  checkIfUserUnique (payload) {
    return api().post('auth/validateuser', payload)
  },

  register (payload) {
    return api().post('/auth/register', payload)
  }
}
