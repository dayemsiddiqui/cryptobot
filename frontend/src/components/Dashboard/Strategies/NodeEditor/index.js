import * as D3NE from 'd3-node-editor'

// Import all Components here
import { componentCandlestick } from './Nodes/GetCandlesticks.js'
import { componentRealtimeCandlesticks } from './Nodes/RealtimeCandlesticks.js'
// Import all indicators here
import { componentRSIIndicator } from './Indicators/RSI.js'
import { componentEMAIndicator } from './Indicators/EMA.js'

let container, components, menu, editor, engine

const nodeEditor = (selector) => {
  container = document.getElementById(selector)

  // Add all nodes here
  components = [
    componentCandlestick,
    componentRealtimeCandlesticks,
    componentEMAIndicator,
    componentRSIIndicator
  ]

  menu = new D3NE.ContextMenu({
    Indicators: {
      EMA: componentEMAIndicator,
      RSI: componentRSIIndicator
    },
    Nodes: {
      ICandlesticks: componentCandlestick,
      RCandlesticks: componentRealtimeCandlesticks
    }
  })

  editor = new D3NE.NodeEditor('Strategy@0.1.0', container, components, menu)
  engine = new D3NE.Engine('Strategy@0.1.0', components)

  // events
  editor.eventListener.on('change', async () => {
    await engine.abort()
    await engine.process(editor.toJSON())
  })

  editor.eventListener.on('nodecreate', (node, persistent) => {
  })

  // build nodes
  let candlesticksNode = componentCandlestick.builder(componentCandlestick.newNode(), editor)
  let realtimeCandlesticksNode = componentRealtimeCandlesticks.builder(componentRealtimeCandlesticks.newNode(), editor)
  let RSIIndicatorNode = componentRSIIndicator.builder(componentRSIIndicator.newNode(), editor)
  let EMAIndicatorNode = componentEMAIndicator.builder(componentEMAIndicator.newNode(), editor)

  // set node position
  candlesticksNode.position = [0, 0]
  realtimeCandlesticksNode.position = [300, 240]
  RSIIndicatorNode.position = [600, 240]
  EMAIndicatorNode.position = [0, 0]

  // add nodes to the editor
  editor.addNode(realtimeCandlesticksNode)
  editor.addNode(RSIIndicatorNode)

  editor.view.zoomAt(editor.nodes)
  // editor.eventListener.trigger('change')
  editor.view.resize()
  // editor.selectNode(candlesticksNode)

  // return editor
}

module.exports = {
  nodeEditor
}
