import User from '../models/userModel'
import jwt from 'jsonwebtoken'
import config from '../config'



module.exports = {

	test: (req, res) => {
	  res.status(200).json({ message: 'Buy and Sell', auth: req.isAuthenticated() })
	},

	trade: (req, res) => {
		jwt.verify(req.headers['authorization'], config.jwtSecret, (err, payload) => {
	    if (err) return res.status(401).json({message: 'Invalid Token'})
	    else {
	      if (!req.body.publickey || !req.body.secretkey) {
	        return res.status(400).json({message: 'Missing Required Fields'})
	      } else {


	      }
	      //Place order to binance here
	      let transaction = {
	        exchange_id : req.body.exchange_id,
		    type : req.body.type,
		    buy_currency: req.body.buy_currency,
		    sell_currency: req.body.sell_currency,
		    buy_amount: req.body.buy_amount,
		    sell_amount: req.body.buy_amount,
		    datetime : Date
	      	}
	      	User.findByIdAndUpdate(
		        { username: payload.username },
		        {$push: {"transactions": transaction}},
		        {safe: true, new : true},
		        function(err, model) {
		            console.log(err)
		        }
		    )
	      	.then(() => {
	          res.status(200).json('success')
	        })
	        .catch(err => {
	          res.status(400).json({ error: err })
	        })
	    }
	  })
	}
}