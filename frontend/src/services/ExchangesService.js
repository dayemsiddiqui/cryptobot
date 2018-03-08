import api from './api'

export default {
  fetchAllExchanges () {
    console.log('api')
    return api().get('exchanges')
  }
}
