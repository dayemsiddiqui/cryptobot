import { Router } from 'express'
import transactionController from '../controllers/transactions.js'



const transaction = Router()

transaction.post('/test-transaction', transactionController.test)
transaction.post('/trade', transactionController.trade)


export default transaction
