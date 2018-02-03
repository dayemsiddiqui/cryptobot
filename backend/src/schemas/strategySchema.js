import { Schema } from 'mongoose'
// import bcrypt from 'bcrypt-nodejs'

const strategySchema = new Schema({
  data: Schema.Types.Mixed // data from nodeeditor
})

export default strategySchema
