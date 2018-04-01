import * as D3NE from 'd3-node-editor'

// socket name, description, hint
let output = new D3NE.Socket('candlesticks', 'Candlesticks', 'Outputs candlesticks in the provided range')
let currencyInput = `
<select>
<option value="btc">Bitcoin</option>
<option value="ltc">Litecoin</option>
<option value="xpr">Ripple</option>
</select>`

const componentCandlestick = (editor) => {
  return new D3NE.Component('Get Candlesticks', {
    builder (node) {
      let candlesticksOutput = new D3NE.Output('Out', output)
      let currencyControl = new D3NE.Control(currencyInput, (element, control) => {
        element.value = control.getData('currency') || 'btc'

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
      return node.addControl(currencyControl).addOutput(candlesticksOutput)
    },

    worker (node, inputs, outputs) {
      outputs[0] = node.data.currency
    }
  })
}

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
