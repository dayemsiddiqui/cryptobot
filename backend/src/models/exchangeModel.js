import exchangeSchema from '../schemas/exchangeSchema'
import mongoose from 'mongoose'

const Exchange = mongoose.model('exchange', exchangeSchema)
export default Exchange
