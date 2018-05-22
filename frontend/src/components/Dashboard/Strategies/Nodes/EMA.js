// TODO

import * as D3NE from 'd3-node-editor'

// import sockets
import { candlesticks, indicators } from '../Sockets'

const componentEMA = new D3NE.Component('EMA', {
  builder (node, editor) {
    let candlesticksInput = new D3NE.Input('Candlesticks', candlesticks)
    let indicatorsOutput = new D3NE.Output('EMA', indicators)

    return node
      .addInput(candlesticksInput)
      .addOutput(indicatorsOutput)
  },

  worker (node, inputs, outputs) {
    console.log(inputs)
  }
})

module.exports = {
  componentEMA
}
