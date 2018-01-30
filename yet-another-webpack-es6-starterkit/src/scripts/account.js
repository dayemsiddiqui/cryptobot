export var account = {
	balance: 100000,
	transactions: [],
	bitcoins: 0
};

export var app_data = {
	price_api: [
	[1,2,3,4,5],
	[4,5,32,32,5],
	[11,22,3,4,52],
	[11,2,43,44,53],
	],
	step: 0,
};

export function buy(bitcoin, price){
	var cost = price.close * bitcoin;
	account.bitcoins = account.bitcoins + bitcoin;
	account.balance = account.balance - cost;
	account.transactions.push({balance: account.balance, bitcoins: account.bitcoins, coins: bitcoin, avg_price: price.close, action: 'buy'});
}

export function sell(bitcoin, price){
	if(account.bitcoins < bitcoin){
		console.log("Error: Dont have enough bitcoins. Ignoring transactions");
		return;
	}
	var cost = price.close * bitcoin;
	account.bitcoins = account.bitcoins - bitcoin;
	account.balance = account.balance + cost;
	account.transactions.push({balance: account.balance, bitcoins: account.bitcoins, coins: bitcoin, avg_price: price.close, action: 'sell'});
}

export function logAccount(){
	console.log("Account", account);
}