// https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-01-01&end=2017-12-31
import {numSocket, priceArray, boolSocket, price_candle} from './sockets';
import { buy, sell, logAccount } from './account';
import { average } from './utility';
import {app_data} from './account';

export const readPrice = new D3NE.Component('Price',{
    builder(node){

    	return node
			  .addOutput(new D3NE.Output('Candlestick',price_candle));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       // var sum = parseInt(inputs[0][0]) + parseInt(inputs[1][0]);
       // node.data.setValue(sum);
       console.log("Step", app_data.step);
       outputs[0] = app_data.price_api[app_data.step];
       app_data.step++;
   }
});

export const buyCoins = new D3NE.Component('Buy',{
    builder(node){
      var numControl = new D3NE.Control('<input type="text" placeholder="No. of coins">',(element, control)=>{
            // control.putData('num', 1) 
            element.addEventListener("change", () => {
              node.data.coins = parseInt(element.value);
            });
         });

    	return node
          .addControl(numControl)
          .addInput(new D3NE.Input('Boolean',boolSocket))
          .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs){
      if(inputs[0][0] == true){
        buy(node.data.coins, inputs[1][0]);  
      }
      logAccount();
   }
});

export const sellCoins = new D3NE.Component('Sell',{
    builder(node){
      var numControl = new D3NE.Control('<input type="text" placeholder="No. of coins">',(element, control)=>{
            // control.putData('num', 1) 
            element.addEventListener("change", () => {
              node.data.coins = parseInt(element.value);
            });
         });

      return node
          .addControl(numControl)
          .addInput(new D3NE.Input('Boolean',boolSocket))
          .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs){
      if(inputs[0][0] == true){
        sell(node.data.coins, inputs[1][0]);  
      }
      logAccount();
   }
});
