import axios from 'axios'
import { store } from '../store/store'

let instance = axios.create({
  baseURL: 'http://localhost:8080/api'
})

if (store.getters.getToken) instance.defaults.headers.common['Authorization'] = store.getters.getToken

module.exports = instance
