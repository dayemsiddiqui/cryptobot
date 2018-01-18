import { Router } from 'express'
import Bot from '../models/botModel'

const bot = Router()

bot.get('/', (req, res) => {
  Bot.find()
        .then(bots => {
          return res.status(200).json(bots)
        })
        .catch((err) => {
          return res.status(400).json(err)
        })
})

export default bot
