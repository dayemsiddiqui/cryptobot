import * as D3NE from 'd3-node-editor'
import moment from 'moment'

import api from 'src/services/api'

// socket name, description, hint
let output = new D3NE.Socket('candlesticks', 'Candlesticks', 'Outputs candlesticks in the provided range')
let currencyInput = `
<select>
<option value="BTCUSDT">Bitcoin</option>
<option value="LTCUSDT">Litecoin</option>
<option value="XRPUSDT">Ripple</option>
</select>`
let startDateInput = `<input id="startDate" type="date">`
let endDateInput = `<input id="endDate" type="date">`

const componentCandlestick = new D3NE.Component('Get Candlesticks', {
  builder (node, editor) {
    let candlesticksOutput = new D3NE.Output('Candlesticks', output)
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
    let startDateControl = new D3NE.Control(startDateInput, (element, control) => {
      element.value = control.getData('startDate') || 1499990400000

      function update () {
        // unix timestamp in miliseconds
        let startDate = moment(element.value).valueOf()
        control.putData('startDate', startDate)
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
    let endDateControl = new D3NE.Control(endDateInput, (element, control) => {
      element.value = control.getData('endDate') || 1516460405000

      function update () {
        // unix timestamp in miliseconds
        let endDate = moment(element.value).valueOf()
        control.putData('endDate', endDate)
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
            .addControl(startDateControl)
            .addControl(endDateControl)
            .addOutput(candlesticksOutput)
  },

  worker (node, inputs, outputs) {
    // let [starttime, endtime, symbol] = [1499990400000, 1516460405000, node.data.currency]
    let [starttime, endtime, symbol] = [node.data.startDate, node.data.endDate, node.data.currency]
    if (!isNaN(starttime) && !isNaN(endtime)) {
      api().get(`/binance/candles/${starttime}/${endtime}/${symbol}`)
      .then((response) => {
        outputs[0] = response.data
        console.log(outputs[0])
      })
    }
  }
})

module.exports = {
  componentCandlestick
}

// JS Reflection

/* // Get the Object's methods names:
function getMethodsNames(obj = this) {
    return Object.keys(this)
        .filter((key) => typeof this[key] === 'function');
}

// Get the Object's methods (functions):
function getMethods(obj = this) {
    return Object.keys(this)
        .filter((key) => typeof this[key] === 'function')
        .map((key) => this[key]);
} */
