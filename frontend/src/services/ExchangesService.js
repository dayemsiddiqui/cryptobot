import api from './api'

const resource = 'exchanges'

export default {
  fetchAllExchanges () {
    return api().get(resource)
  },

  connect (payload) {
    return api().post(`${resource}/connect`, payload)
  }
}
