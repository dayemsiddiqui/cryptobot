import { Router } from 'express'
import authController from '../controllers/auth.js'
import passport from 'passport'
import jwtStrategy from '../passport.js'

const auth = Router()

auth.get('/test', passport.authenticate('jwt', { session: false }), authController.test)

auth.post('/login', authController.login)

auth.post('/register', authController.register)

auth.get('/isLogged', authController.isLogged)

export default auth
