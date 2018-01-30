import {app_data, account} from './account';

function getCurrentCapital(){
	return Math.floor(account.balance + (account.bitcoins * account.transactions[account.transactions.length - 1].avg_price));
}

function getInitialCapital(){
	return Math.floor(account.transactions[0].balance + (account.transactions[0].bitcoins * account.transactions[0].avg_price));
}

function getNotification(id){
	if(account.transactions[id].action == 'buy'){
		return "<div class='notification is-success'>Bought " + account.transactions[id].coins + " bitcoins for price $" + account.transactions[id].avg_price + "</div>";
	}else{
		return "<div class='notification is-danger'>Sold " + account.transactions[id].coins + " bitcoins for price $" + account.transactions[id].avg_price + "</div>";
	}
}

export function initReview(){
	if(account.transactions.length <= 0){
		alert("No Transactions Avaliable");
		return;
	}
	var currentCapital = $('#currentCapital');
	var initialCapital = $('#initialCapital');
	var currentCoins = $('#bitcoins');

	currentCapital.text('$'+getCurrentCapital());
	initialCapital.text('$'+getInitialCapital());
	currentCoins.text(account.bitcoins);

}

function priceChart(){
	Highcharts.setOptions({
    global: {
        useUTC: false
    }
	});
var counter = 0;

Highcharts.chart('container', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = account.transactions[counter].avg_price;
                        if(counter < account.transactions.length){
                        	counter++;
                        }
                    series.addPoint([x, y], true, true);
                }, 3000);
            }
        }
    },
    title: {
        text: 'Bitcoin Transaction Price'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Transaction Price',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: i
                });
            }
            return data;
        }())
    }]
});
}



function balanceChart(){
	Highcharts.setOptions({
    global: {
        useUTC: false
    }
	});
var counter = 0;

Highcharts.chart('containerBalance', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = account.transactions[counter].balance * (account.transactions[counter].bitcoins * account.transactions[counter].avg_price);
                        if(counter < account.transactions.length){
                        	counter++;
                        }
                    series.addPoint([x, y], true, true);
                }, 3000);
            }
        }
    },
    title: {
        text: 'Current Capitalization'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Transaction Price',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: i
                });
            }
            return data;
        }())
    }]
});
}


export function reviewTransactions(speed){
	if(account.transactions.length <= 0){
		alert("No Transactions Avaliable");
		return;
	}

	var currentCapital = $('#currentCapital');
	var initialCapital = $('#initialCapital');
	var currentCoins = $('#bitcoins');
	var notificationCenter = $('#notificationCenter');

	priceChart();
	balanceChart();
	for(let i = 0; i < account.transactions.length; i++){
		setTimeout( function timer(){
	        notificationCenter.prepend(getNotification(i)).fadeIn('slow');
	    }, i*speed );
		

	}
}