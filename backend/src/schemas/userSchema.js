import { Schema } from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const userSchema = new Schema({
  username: { type: String, minlength: [5, 'Username must be longer than 7 character'] }, // change min length
  password: { type: String, minlength: [5, 'Password must be longer than 7 character'] }, // change min length
  email: String,
  strategies: {
    user_defined: [{ type: Schema.Types.ObjectId, ref: 'strategy' }], // todo: add defaults
    purchased: [{ type: Schema.Types.ObjectId, ref: 'strategy' }] //
  },
  bots: [
    {
      name: String,
      strategy_id: { type: Schema.Types.ObjectId, ref: 'strategy' }, // fk
      exchange_id: { type: Schema.Types.ObjectId, ref: 'exchange' }, // fk
      currency: String,
      image: {type: String, default: 'bitcrime.png'} // randomize this
    } // todo: bot types: {arbitrage, marginal} //check hasbot for reference
  ],
  exchanges: [{
    exchange_id: { type: Schema.Types.ObjectId, ref: 'exchange' }, // fk
    api: {
      public: { type: String, minlength: [32, 'API Key invalid'] }, // user
      secret: { type: String, minlength: [32, 'API Key invalid'] } //
    },
    is_configured: Boolean
  }]
})

userSchema.pre('save', function (next) {
  let user = this
  let saltRounds = 5

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

export default userSchema
