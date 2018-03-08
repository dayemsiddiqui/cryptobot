import mongoose from 'mongoose'

import Exchange from './models/exchangeModel'

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/woxcut')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection Error:'))

db.on('open', () => {
  for (let exchange of exchanges) {
    new Exchange(exchange).save()
          .then(() => {
            if (exchanges[exchanges.length - 1] === exchange) {
              mongoose.connection.close()
            }
          })
          .catch(err => {
            console.log(err)
          })

    // Maintain loop state
/*        (function(ex) {
            new Exchange({ name: ex }).save()
            .then(function() {
                console.log(ex)
                if(exchanges[exchanges.length - 1] == ex) {
                    mongoose.connection.close()
                }
            })
            .catch(function(err) {
                console.log(err)
            })
        })(ex) */
  }
})

// Add exchanges here
let exchanges = [{
  name: 'Binance',
  logo: 'binance.svg'
},
{
  name: 'Bitstamp',
  logo: 'bitstamp.png'
}
]
// var exchanges = ['Binanace', 'Bitstamp', 'Kraken', 'Bitfinex', 'Bittrex']
