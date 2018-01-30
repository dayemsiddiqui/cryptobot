// 'use strict';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '../styles/index.scss';
import '../styles/style.css';
import {add, subtract, multiply, divide,  numComp, averageComp, comparator, boolComp, candleBreaker} from './components';
import { macd, cci, dema, ppo, rsi, s_rsi, tsi } from './indicators';
import {readPrice, buyCoins, sellCoins} from './read';
import {app_data, account} from './account';
import {initReview, reviewTransactions} from './review';
var components = [numComp,add, subtract, multiply, divide, averageComp, readPrice, comparator, buyCoins, sellCoins, boolComp, candleBreaker, macd, cci, dema, ppo, rsi, s_rsi, tsi];
const get = require('simple-get');
import axios from 'axios';


var menu = new D3NE.ContextMenu({
                // 'Actions':{
                //     'Action': function(){alert('Subitem selected');}
                // },
                Candlestick: {
                	Price: readPrice,
                },
                Arithematic:{
                	Add: add,
                	Subtract: subtract,
                	Multiply: multiply,
                	Divide: divide,
                	Average: averageComp,
                },
                Conditionals:{
                	Comparator: comparator,
                	If: comparator,
                },
                Indicators:{
                	MACD: macd,
                	RSI: rsi,
                	'Stochastic RSI': s_rsi,
                	TSI: tsi,
                	DEMA: dema,
                	CCI: cci,
                	PPO: ppo,
                },
                Market:{
                	'Buy': buyCoins,
                	'Sell': sellCoins,
                },
                Misc:{
                	'Candlestick Breaker': candleBreaker,
                	'Number': numComp,
                	'Boolean': boolComp,
                },
           });
var container = document.querySelector('#d3ne');
var execute = document.querySelector('#execute');
var setting = document.querySelector('#setting');
var modal = document.querySelector('#settingModal');
var confirm = document.querySelector('#settingConfirm');
var cancel = document.querySelector('#settingCancel');

var isOpen = false;
var inStudio = true;
var isExecuting = false;
$('#insight').hide();
var editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);

var engine = new D3NE.Engine('demo@0.1.0', components);


async function startProcess() {
			// console.log("In Loop Async");
    		await engine.abort();            
    		var status = await engine.process(editor.toJSON());            
		};

setting.addEventListener('click',() => {
	if(!isOpen){
		modal.className += " is-active";	
	}else{
		modal.className = "modal";
	}
	
});

confirm.addEventListener('click',() => {
		account.balance = parseInt($('#balance').val());
		if(!account.balance){
			account.balance = 0;
		}
		account.bitcoins = parseInt($('#coins').val());
		account.transactions = [];
		modal.className = "modal";
});

cancel.addEventListener('click',() => {
		modal.className = "modal";
});
$('#report').click(function(){
	if(inStudio){
		$('#report > span').text('Back');
		initReview();
		inStudio = false;
	}else{
		$('#report > span').text('View Report');
		inStudio = true;
	}
	
	$('#studio').toggle();
	$('#insight').toggle();
});

$("#review").click(function(){
	reviewTransactions(3000);
});

function executionScript(){
	for(let i = 0; i < app_data.price_api.length; i++){
		startProcess();
	}
	app_data.step = 0;
	alert("Exeution Complete");
}

function fetchData(params, callback){
	isExecuting = true;
	var url = 'https://min-api.cryptocompare.com/data/histominute?fsym='+ params.f_curr +'&tsym=' + params.t_curr + '&limit=' + params.limit +'&aggregate=3&e=' + params.exchange;
	axios.get(url)
	  .then(function (response) {
	    console.log("Response", response.data.Data);
	    app_data.price_api = response.data.Data; 
	    callback();
	    isExecuting = false;
	  })
	  .catch(function (error) {
	    console.log(error);
	    isExecuting = false;
	  });
}


execute.addEventListener('click',() => {
	if(isExecuting) return;
	fetchData({limit: 200, f_curr: 'BTC', t_curr: 'USD', exchange: 'CCCAGG'}, executionScript);
}, false);


