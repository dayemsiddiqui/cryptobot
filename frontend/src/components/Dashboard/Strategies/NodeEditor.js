import * as D3NE from 'd3-node-editor'

// Import all Components here
import { componentCandlestick } from './Nodes/GetCandlesticks.js'
import { componentEMA } from './Indicators/EMA.js'

let container, components, menu, editor, engine

const nodeEditor = (selector) => {
  container = document.getElementById(selector)

  // Add all nodes here
  components = [
    componentCandlestick,
    componentEMA
  ]

  menu = new D3NE.ContextMenu({
    Indicators: {
      EMA: componentEMA
    },
    Nodes: {
      Candlesticks: componentCandlestick
    }
  })

  editor = new D3NE.NodeEditor('Strategy@0.1.0', container, components, menu)
  engine = new D3NE.Engine('Strategy@0.1.0', components)

  editor.eventListener.on('change', async () => {
    await engine.abort()
    await engine.process(editor.toJSON())
  })

  // build nodes
  let candlesticksNode = componentCandlestick.builder(componentCandlestick.newNode(), editor)
  let EMANode = componentEMA.builder(componentEMA.newNode(), editor)

  candlesticksNode.position = [300, 240]
  EMANode.position = [600, 240]

  // add nodes to the editor
  editor.addNode(candlesticksNode)
  editor.addNode(EMANode)

  editor.view.zoomAt(editor.nodes)
  // editor.eventListener.trigger('change')
  editor.view.resize()
  editor.selectNode(candlesticksNode)

  // return editor
}

module.exports = {
  nodeEditor
}
