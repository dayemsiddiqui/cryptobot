import passport from 'passport'
import { Strategy as JwtStrategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import config from './config'
import User from './models/userModel'

var opts = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.jwtSecret,
	issuer: config.issuer
}

// jwt strategy
passport.use('jwt', new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({username: jwt_payload.id})
    .then(user => {
        if (user) return done(null, user)
        else return done(null, false)
    })
    .catch(err => done(err, false))
}))