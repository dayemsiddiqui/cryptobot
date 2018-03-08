import { Router } from 'express'
import Exchange from '../models/exchangeModel'

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
  console.log(req.body)
})

export default exchange
