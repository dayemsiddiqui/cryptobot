import { Router } from 'express'

import binanceController from '../controllers/binance.js'

const binance = Router()

binance.get('/candles/:starttime/:endtime/:symbol', binanceController.candles)

export default binance