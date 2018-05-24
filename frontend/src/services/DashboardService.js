import api from './api'

const resource = 'dashboard'

export default {
  fetchPortfolioData () {
    return api().get(`${resource}/portfolio`)
  }
}
