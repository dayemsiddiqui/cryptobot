import botSchema from '../schemas/botSchema'
import mongoose from 'mongoose'

const Bot = mongoose.model('bot', botSchema)
export default Bot
