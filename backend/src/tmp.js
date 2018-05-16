import mongoose from 'mongoose'

import User from './models/userModel'

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/woxcut')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection Error:'))

db.on('open', () => {
  User.findOne({})
    .then((user) => {
      console.log(`${user.username}`)
      console.log(`${user.exchanges[0].api.secret}`)
      mongoose.connection.close()
    }).catch(err => {
      console.log(err)
      mongoose.connection.close()
    })
})
