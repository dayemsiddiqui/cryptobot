import {numSocket, priceArray, boolSocket, price_candle, indicator} from './sockets';
// load the module and display its version


const average = (arr) => { return arr.reduce( ( p, c ) => parseInt(p) + parseInt(c), 0 ) / arr.length; };

// ARITHEMATIC COMPONENTS

var macd = new D3NE.Component('MACD',{
    builder(node){
		var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
        	node.data.setValue = (val) => {
        		element.value = val;
        	};
     	});
    	return node
    		  .addControl(numControl)
			    .addOutput(new D3NE.Output('Indicator',indicator))
		      .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       console.log("Inputs", inputs);
       var sum = parseInt(inputs[0][0]) + parseInt(inputs[1][0]);
       console.log("Add", sum);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var cci = new D3NE.Component('CCI',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Indicator',indicator))
          .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       console.log("Inputs", inputs);
       var sum = parseInt(inputs[0][0]) + parseInt(inputs[1][0]);
       console.log("Add", sum);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var dema = new D3NE.Component('DEMA',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Indicator',indicator))
          .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       console.log("Inputs", inputs);
       var sum = parseInt(inputs[0][0]) + parseInt(inputs[1][0]);
       console.log("Add", sum);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var ppo = new D3NE.Component('PPO',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Indicator',indicator))
          .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       console.log("Inputs", inputs);
       var sum = parseInt(inputs[0][0]) + parseInt(inputs[1][0]);
       console.log("Add", sum);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var rsi = new D3NE.Component('RSI',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Indicator',indicator))
          .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       console.log("Inputs", inputs);
       var sum = parseInt(inputs[0][0]) + parseInt(inputs[1][0]);
       console.log("Add", sum);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var s_rsi = new D3NE.Component('Stochastic RSI',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Indicator',indicator))
          .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       console.log("Inputs", inputs);
       var sum = parseInt(inputs[0][0]) + parseInt(inputs[1][0]);
       console.log("Add", sum);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var tsi = new D3NE.Component('TSI',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Indicator',indicator))
          .addInput(new D3NE.Input('Candlestick',price_candle));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       console.log("Inputs", inputs);
       var sum = parseInt(inputs[0][0]) + parseInt(inputs[1][0]);
       console.log("Add", sum);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});


export { macd, cci, dema, ppo, rsi, s_rsi, tsi};