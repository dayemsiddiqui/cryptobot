import api from './api'

export default {
  login (payload) {
    return api().post('auth/login', payload)
  }
}
