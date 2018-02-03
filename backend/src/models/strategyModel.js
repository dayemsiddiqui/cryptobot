import strategySchema from '../schemas/strategySchema'
import mongoose from 'mongoose'

const Strategy = mongoose.model('strategy', strategySchema)
export default Strategy
