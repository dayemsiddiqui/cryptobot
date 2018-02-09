import { Schema } from 'mongoose'

const botSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'user' },
  name: String,
  currency: String,
  strategy_id: { type: Schema.Types.ObjectId, ref: 'strategy' }, // fk
  exchange_id: { type: Schema.Types.ObjectId, ref: 'exchange' }, // fk
  image: { type: String, default: 'bitcrime.png' }, // randomize this
  transactions: [{
    date: Date,
    currency: String,
    amount: Number,
    fee: Number,
    balance: Number
  }]
})

export default botSchema
