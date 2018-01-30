import {numSocket, priceArray, boolSocket, price_candle} from './sockets';

const average = (arr) => { return arr.reduce( ( p, c ) => parseInt(p) + parseInt(c), 0 ) / arr.length; };

// ARITHEMATIC COMPONENTS

var add = new D3NE.Component('Add',{
    builder(node){
		var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
        	node.data.setValue = (val) => {
        		element.value = val;
        	};
     	});
    	return node
    		  .addControl(numControl)
			    .addOutput(new D3NE.Output('Number',numSocket))
		      .addInput(new D3NE.Input('Number',numSocket))
		      .addInput(new D3NE.Input('Number',numSocket));
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

var subtract = new D3NE.Component('Subtract',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Number',numSocket))
          .addInput(new D3NE.Input('Number',numSocket))
          .addInput(new D3NE.Input('Number',numSocket));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       var sum = parseInt(inputs[0][0]) - parseInt(inputs[1][0]);
       console.log("Subtract", sum);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var multiply = new D3NE.Component('Multiply',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Number',numSocket))
          .addInput(new D3NE.Input('Number',numSocket))
          .addInput(new D3NE.Input('Number',numSocket));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       var sum = parseInt(inputs[0][0]) * parseInt(inputs[1][0]);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var divide = new D3NE.Component('Divide',{
    builder(node){
    var numControl = new D3NE.Control('<input class="input" disabled>',(element, control)=>{
          node.data.setValue = (val) => {
            element.value = val;
          };
      });
      return node
          .addControl(numControl)
          .addOutput(new D3NE.Output('Number',numSocket))
          .addInput(new D3NE.Input('Numerator',numSocket))
          .addInput(new D3NE.Input('Denominator',numSocket));
    },
    worker(node, inputs, outputs, editor){
       // await asyncTask();
       var sum = parseInt(inputs[0][0]) / parseInt(inputs[1][0]);
       node.data.setValue(sum);
       outputs[0] = sum;
   }
});

var averageComp = new D3NE.Component('Average',{
    builder(node) {
        var out = new D3NE.Output('Number',numSocket); 
        var numControl = new D3NE.Control('<input disabled type="number">',(element, control)=>{
            node.data.setValue = (val) => {
              element.value = val;
            };
         });

        return node
                  .addControl(numControl)
                  .addOutput(out)
                  .addInput(new D3NE.Input('Price',priceArray));
    },
    worker(node, inputs, outputs){



        var prices = inputs[0][0];
        console.log("Average Price", average(prices));
        var avg = average(prices);
        node.data.setValue(avg);
        outputs[0] = avg;
  }
});

// Miscellenous

var numComp = new D3NE.Component('Number',{
    builder(node) {
        var out = new D3NE.Output('Number',numSocket); 
        var numControl = new D3NE.Control('<input type="number">',(element, control)=>{
            // control.putData('num', 1);
            element.addEventListener("change", () => {
            	control.putData('num', element.value);
            });
         });

        return node
                  .addControl(numControl)
                  .addOutput(out);
                  // .addInput(new D3NE.Input('Number',numSocket));
    },
    worker(node, inputs, outputs){
        console.log("Outputs", outputs);
        outputs[0] = node.data.num;
  }
});

var boolComp = new D3NE.Component('Boolean',{
    builder(node) {
        var out = new D3NE.Output('Boolean',boolSocket); 
        var numControl = new D3NE.Control('<select><option value="0">False</option> <option value="1">True</option></select>',(element, control)=>{
            // control.putData('num', 1);
            element.addEventListener("change", () => {
              control.putData('num', element.options[element.selectedIndex].value);
            });
         });

        return node
                  .addControl(numControl)
                  .addOutput(out);

                  // .addInput(new D3NE.Input('Number',numSocket));
    },
    worker(node, inputs, outputs){
        console.log("Outputs", outputs);
        console.log("Data Num Val", node.data.num);
        if(node.data.num == 1){
          console.log("In True");
          outputs[0] = true;
        }else{
          console.log("In False");
          outputs[0] = false;
        }
  }
});


var candleBreaker = new D3NE.Component('Candle Breaker',{
    builder(node) {
        var open = new D3NE.Output('Open',numSocket); 
        var close = new D3NE.Output('Close',numSocket); 
        var high = new D3NE.Output('High',numSocket); 
        var low = new D3NE.Output('Low',numSocket); 
        var vol_from = new D3NE.Output('Volume From',numSocket); 
        var vol_to = new D3NE.Output('Volume To',numSocket); 

        return node
                  .addOutput(open)
                  .addOutput(close)
                  .addOutput(high)
                  .addOutput(low)
                  .addOutput(vol_from)
                  .addOutput(vol_to)
                  .addInput(new D3NE.Input('Price',price_candle));
                  // .addInput(new D3NE.Input('Number',numSocket));
    },
    worker(node, inputs, outputs){
        console.log("Inputs in candle Breaker", inputs);
        var candle = inputs[0][0];
        outputs[0] = candle.open;
        outputs[1] = candle.close;
        outputs[2] = candle.high;
        outputs[3] = candle.low;
        outputs[4] = candle.volumefrom;
        outputs[5] = candle.volumeto;
  }
});





var comparator = new D3NE.Component('Comparator',{
    builder(node) {
        var val1 = new D3NE.Control('<input disabled type="text">',(element, control)=>{
            // control.putData('num', 1);
            node.data.setValue = (val) => {
              element.value = val;
            };
         });

        var val2 = new D3NE.Control('<input disabled type="text">',(element, control)=>{
            // control.putData('num', 1);
            node.data.setEval = (val) => {
              element.value = val;
            };
         });

        var numControl = new D3NE.Control('<select><option>Select Operation</option><option value="0">Greater Than</option> <option value="1">Less Than</option> <option value="2">Equal</option></select>',(element, control)=>{
            // control.putData('num', 1);
            element.addEventListener("change", () => {
              control.putData('num', element.options[element.selectedIndex].value);
            });
         });

        return node
                  .addControl(val1)
                  .addControl(val2)
                  .addOutput(new D3NE.Output('Boolean',boolSocket))
                  .addInput(new D3NE.Input('Number',numSocket))
                  .addInput(new D3NE.Input('Number',numSocket));
    },
    worker(node, inputs, outputs){
      node.data.setValue(inputs[0][0]);
      node.data.setEval(inputs[1][0]);
      var answer = false;
      switch (node.data.num) {
          case 0:
              if(inputs[0][0] > inputs[1][0]) answer = true;
              break;
          case 1:
              if(inputs[0][0] < inputs[1][0]) answer = true;
              break;
          case 2:
              if(inputs[0][0] == inputs[1][0]) answer = true;
              break;
      }

      outputs[0] = answer;
  }
});

export {numComp, boolComp, candleBreaker, add, subtract, multiply, divide, averageComp, comparator};