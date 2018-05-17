import axios from 'axios'
// Vuex store
import { store } from '../store/store'

export default () => axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {'authorization': store.getters.getToken ? store.getters.getToken : 'None'}
})
