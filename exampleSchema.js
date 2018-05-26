users: [{
	name: "Asad",
	email: "sposkes@fmaic.om",
	strategies: { //user-defiend
		strategy_id:[{id: 123123}, 1231241, 1235123, 123566],
		bought_strats: [858, 96806, 2]
	},
	bots: [
		{
			name: "Bitasdas",
			strategy: 123123123,
			exchange_id: <exchange_id>,
			currency: "BTC"
		} // onhold: currency and exhcnage to be saved in bots or not
	],
	exchanges: [
		{
			exchange_id: 1,
			api_key: "123123123123123", //user
			api_secret: "123123123123123"
			is_configured: true,
		}
	],
	// dashboard: { // ON-HOLD
	// 	widgets
	// }
	transactions: [
		{
			// get from ahsan
		}
	]
}]
,
exchanges: [
	{
		id: 1
		name: "GDAX",
		hamariAPIKEYs: [1231, 123123] // close security checks
	} // onhold: exchange currency pairs and minimalOrders -- check gekko/exchanges/bitstamp.js:237 for reference
]

{
	market: {
		strategies: [
		{
				strategy_id: 123123,
				info:{}
			]
		}
	}
}

strategies: [ // general collection of strats
	{
		id:123123,
		strategey_data: {//nodeeditor}
	}
],