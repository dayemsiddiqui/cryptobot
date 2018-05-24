// TODO

import * as D3NE from 'd3-node-editor'

// import sockets
import { anyTypeSocket } from '../Sockets'

const componentEMA = new D3NE.Component('Buy', {
  builder (node, editor) {
    let Input = new D3NE.Input('Any', anyTypeSocket)
    let Output = new D3NE.Output('Any', anyTypeSocket)

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
