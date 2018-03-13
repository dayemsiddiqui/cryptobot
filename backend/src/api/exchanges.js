import { Router } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import Exchange from '../models/exchangeModel'
import User from '../models/userModel'

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
  jwt.verify(req.headers['authorization'], config.jwtSecret, (err, payload) => {
    if (err) return res.status(401).json({message: 'Invalid Token'})
    else {
      if (!req.body.publickey || !req.body.secretkey) {
        return res.status(400).json({message: 'Missing Required Fields'})
      } else {}

      let exchange = {
        exchange_id: req.body.exchange_id,
        api: {
          public: req.body.publickey,
          secret: req.body.secretkey
        },
        is_configured: true
      }
      User.findOne({ username: payload.username })
      .then(user => {
        user.exchanges.push(exchange)
        user.save()
        .then(() => {
          res.status(200).json('success')
        })
        .catch(err => {
          res.status(400).json({ error: err })
        })
      })
    }
  })

  // console.log(req.body)
  // if (req.body) {
  //   setTimeout(() => {
  //     return res.status(200).json('success')
  //   }, 2000)
  // }
})

export default exchange
