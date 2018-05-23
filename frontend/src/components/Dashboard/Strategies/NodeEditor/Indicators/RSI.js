// Relative strength index - RSI

import * as D3NE from 'd3-node-editor'

// import sockets
import { candlesticksSocket, indicatorsSocket } from '../Sockets'

const componentRSIIndicator = new D3NE.Component('RSI', {
  builder (node, editor) {
    let candlesticksInput = new D3NE.Input('Candlesticks', candlesticksSocket)
    let indicatorsOutput = new D3NE.Output('RSI indicator', indicatorsSocket)

    return node
      .addInput(candlesticksInput)
      .addOutput(indicatorsOutput)
  },

  worker (node, inputs, outputs) {
  }
})

module.exports = {
  componentRSIIndicator
}
