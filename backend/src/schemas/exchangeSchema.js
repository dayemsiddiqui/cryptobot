import { Schema } from 'mongoose'
// import bcrypt from 'bcrypt-nodejs'

const exchangeSchema = new Schema({
  name: String
    // api: [1231, 123123] // close security checks
    // onhold: exchange currency pairs and minimalOrders -- check gekko/exchanges/bitstamp.js:237 for reference
})

export default exchangeSchema
