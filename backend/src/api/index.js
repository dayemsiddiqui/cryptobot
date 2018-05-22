import { version } from '../../package.json'
import { Router } from 'express'
// import facets from './facets'
import bots from './bots'
import exchanges from './exchanges'
import transactions from './transactions'
import auth from './auth'

export default ({ config, db }) => {
  let api = Router()

  // mount the facets resource
  // api.use('/facets', facets({ config, db }))
  api.use('/auth', auth)
  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version })
  })

  // api routes
  api.use('/bots', bots)

   // api routes
  api.use('/exchanges', exchanges)

  api.use('/transactions', transactions)

  return api
}
