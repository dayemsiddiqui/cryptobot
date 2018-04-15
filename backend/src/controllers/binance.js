import { get5minuteCandleSticks } from '../exchanges/binance'

module.exports = {

	candles: (req, res) => {
		if (req.params.starttime.length === 13 && req.params.endtime.length === 13) {

			get5minuteCandleSticks(parseInt(req.params.starttime), parseInt(req.params.endtime), req.params.symbol)
			.then((candlesticks) => {
				res.json({
					candlesticks
				})
			})

		} else {
			res.json({
				'err': 'Invalid params'
			})
		}
	}
	
}