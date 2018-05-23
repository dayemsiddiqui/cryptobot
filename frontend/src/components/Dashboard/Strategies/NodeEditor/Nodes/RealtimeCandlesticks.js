import * as D3NE from 'd3-node-editor'

import { candlesticksSocket } from '../Sockets'

// import sockets

let currencyInput = `
<select>
<option value="BTCUSDT">Bitcoin</option>
<option value="LTCUSDT">Litecoin</option>
<option value="XRPUSDT">Ripple</option>
</select>`

let intervalInput = `
<select>
<option value="1m">1m</option>
<option value="3m">3m</option>
<option value="5m">5m</option>
</select>`

const componentRealtimeCandlesticks = new D3NE.Component('Realtime Candlesticks', {
  builder (node, editor) {
    let candlesticksOutput = new D3NE.Output('Candlesticks', candlesticksSocket)
    let currencyControl = new D3NE.Control(currencyInput, (element, control) => {
      element.value = control.getData('currency') || 'BTCUSDT'

      function update () {
        control.putData('currency', element.value)
      }

      element.addEventListener('input', () => {
        update()
        // make sure the editor obj has a change eventlistener
        editor.eventListener.trigger('change')
      })

      // prevent node movement when selecting text in the input field
      element.addEventListener('mousedown', e => { e.stopPropagation() })
      update()
    })
    let intervalControl = new D3NE.Control(intervalInput, (element, control) => {
      element.value = control.getData('interval') || '1m'

      function update () {
        control.putData('interval', element.value)
      }

      element.addEventListener('input', () => {
        update()
        // make sure the editor obj has a change eventlistener
        editor.eventListener.trigger('change')
      })

      // prevent node movement when selecting text in the input field
      element.addEventListener('mousedown', e => { e.stopPropagation() })
      update()
    })
    return node
      .addControl(currencyControl)
      .addControl(intervalControl)
      .addOutput(candlesticksOutput)
  },

  async worker (node, inputs, outputs) {
    // let [interval, symbol] = [node.data.interval, node.data.currency]
  }
})

module.exports = {
  componentRealtimeCandlesticks
}
