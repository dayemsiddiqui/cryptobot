import api from './api'

const resource = 'transactions'

export default {

  placeOrder(payload) {
    return api().post(`${resource}/trade`, payload)
  }
}
