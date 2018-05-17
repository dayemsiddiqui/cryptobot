import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'
import config from './config'
import User from './models/userModel'

var jwtOpts = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.jwtSecret,
  issuer: config.issuer
}

// jwt strategy
passport.use('jwt', new JwtStrategy(jwtOpts, function (jwtPayload, done) {
  User.findOne({username: jwtPayload.id})
    .then(user => {
      if (user) return done(null, user)
      else return done(null, false)
    })
    .catch(err => done(err, false))
}))

// local strategy - do we really need this?
passport.use('local', new LocalStrategy({
  usernameField: 'email'
}, function (jwtPayload, done) {

}))
