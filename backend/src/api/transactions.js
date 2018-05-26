import { Router } from 'express'
import transactionController from '../controllers/transactions.js'



const transactions = Router()

transactions.get('/testTransaction', transactionController.test)
transactions.post('/trade', transactionController.trade)


export default transactions
