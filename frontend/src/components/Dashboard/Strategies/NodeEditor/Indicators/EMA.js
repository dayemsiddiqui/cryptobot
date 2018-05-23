// TODO

import * as D3NE from 'd3-node-editor'

// import sockets
import { candlesticksSocket, indicatorsSocket } from '../Sockets'

const componentEMAIndicator = new D3NE.Component('EMA', {
  builder (node, editor) {
    let candlesticksInput = new D3NE.Input('Candlesticks', candlesticksSocket)
    let indicatorsOutput = new D3NE.Output('EMA Indicator', indicatorsSocket)

    return node
      .addInput(candlesticksInput)
      .addOutput(indicatorsOutput)
  },

  worker (node, inputs, outputs) {
  }
})

module.exports = {
  componentEMAIndicator
}
