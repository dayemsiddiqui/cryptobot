import api from './api'

export default {
  fetchBots () {
    return api().get('bots')
  }
}
