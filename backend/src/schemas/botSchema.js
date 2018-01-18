import { Schema } from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const botSchema = new Schema({
  id: Number,
  hover: Boolean,
  name: {
    data: String,
    edit: Boolean
  },
  image: String,
  status: String,
  strategy: String,
  exchange: String,
  uptime: Number, // convert this into appropriate time interval client side,
  profits: {
    last24hours: Number, // calculate this dynamically,
    last7days: Number // calculate this dynamically as well
  }
})

export default botSchema
