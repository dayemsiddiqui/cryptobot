import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import User from '../models/userModel'
import passport from 'passport'
import config from '../config'


let findUser = (username) => {
  return User.findOne({ username })
  .then(user => {
    if (user) throw new Error('User already exists')
  })
  .catch((err) => {
    throw new Error(err.message)
  })
}

module.exports = {

	test: (req, res) => {
	  res.status(200).json({ message: 'Hello sweetie', auth: req.isAuthenticated() })
	},

	login: (req, res) => {
	  if (!req.body.username || !req.body.password) {
	    return res.status(400).json({ message: 'Missing required fields' })
	  }
	  User.findOne({ username: req.body.username })
	  .then(user => {
	    if (!user) return res.status(400).json({ message: 'No user' })
	    bcrypt.compare(req.body.password, user.password, (err, result) => { // eslint-disable-line handle-callback-err
	      if (result) {
	        const token = jwt.sign({id: req.body.username, iss: config.issuer}, config.jwtSecret)
	        return res.status(200).json({ message: 'ok', token })
	      } else {
	        return res.status(400).json({ message: 'Bad password' })
	      }
	    })
	  })
	  .catch((err) => {
	    return res.status(400).json(err)
	  })
	},

	register: (req, res) => {
	  if (!req.body.username || !req.body.password) {
	    return res.status(400).json({ message: 'Missing required fields' })
	  }

	  findUser(req.body.username)
	  .then(() => {
	    let user = new User({ username: req.body.username, password: req.body.password })
	    user.save()
	    .then(() => {
	      res.status(200).json(user)
	    })
	    .catch(err => {
	      res.status(400).json(err)
	    })
	  })
	  .catch((err) => {
	    res.status(400).json({ message: err.message })
	  })
	},

	isLogged: (req, res) => {
	  jwt.verify(req.headers['authorization'], config.jwtSecret, (err, decoded) => {
	    if (err) return res.status(401).json({ message: 'Not logged', isLogged: false })
	    else return res.status(200).json({ message: 'Logged', isLogged: true })
	  })
	},

	// Helper route for frontend validation
	validateUser: (req, res) => {
		let username = req.body.username
		User.findOne({ username })
	  .then(user => {
	    if (user) {
		    res.status(200).json({
	    		valid: false,
	    		message: "Username is already taken."
		    })
	    } else {
		    res.status(200).json({
	    		valid: true,
	    		message: "Username doesn't exist."
		    })
	    }
	  })
	  .catch((err) => {
	    res.status(200).json({
    		valid: true,
    		message: err.message
	    })
	  })
	}

}