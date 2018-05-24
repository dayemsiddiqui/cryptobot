import { Router } from 'express'
// import jwt from 'jsonwebtoken'
// import config from '../config'
// import User from '../models/userModel'
// import Binance from 'binance-api-node'

const dashboard = Router()

dashboard.get('/portfolio', (req, res) => {
  let data = {
    labels: ['ETH', 'BTC', 'XRP', 'BCH'],
    series: [12, 36, 12, 40]
  }
  return res.status(200).json(data)
})
/*
dashboard.post('/connect', (req, res) => {
  // run checks to ensure that the key is valid
  // Authenticated client, can make signed calls
  const client = Binance({
    apiKey: req.body.publickey,
    apiSecret: req.body.secretkey
  })

  client.accountInfo().then(info => console.log(info))

  /// // enter the API keys into db
  /// // user.dashboards

  jwt.verify(req.headers['authorization'], config.jwtSecret, (err, payload) => {
    if (err) return res.status(401).json({message: 'Invalid Token'})
    else {
      if (!req.body.publickey || !req.body.secretkey) {
        return res.status(400).json({message: 'Missing Required Fields'})
      } else {}

      let dashboard = {
        dashboard_id: req.body.dashboard_id,
        api: {
          public: req.body.publickey,
          secret: req.body.secretkey
        },
        is_configured: true
      }
      User.findOne({ username: payload.username })
      .then(user => {
        user.dashboards.push(dashboard)
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

dashboard.post('/disconnect', (req, res) => {
  return res.status(200).json('success')
})
*/
export default dashboard
