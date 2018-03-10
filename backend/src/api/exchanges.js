import { Router } from 'express'
import Exchange from '../models/exchangeModel'
// import User from '../models/userModel'

// import binance from 'node-binance-api'

const exchange = Router()

exchange.get('/', (req, res) => {
  Exchange.find()
        .then(exchanges => {
          return res.status(200).json(exchanges)
        })
        .catch((err) => {
          return res.status(400).json(err)
        })
})

exchange.post('/connect', (req, res) => {
  // run checks to ensure that the key is valid
  // binance.options({
  //   'APIKEY': req.body.BINANCEAPIKEY,
  //   'APISECRET': req.body.BINANCEAPISECRET,
  //   'test': true
  // }, (result) => {
  //   console.log(result)
  // })

  /// // enter the API keys into db
  /// // user.exchanges

  // console.log(req.body)
  // if (req.body) {
  //   setTimeout(() => {
  //     return res.status(200).json('success')
  //   }, 2000)
  // }
})

export default exchange
