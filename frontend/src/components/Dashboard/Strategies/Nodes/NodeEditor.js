import * as D3NE from 'd3-node-editor'

// Import all Components here
import { componentCandlestick } from './GetCandlesticks.js'

let container, components, menu, editor, engine

const nodeEditor = (selector) => {
  container = document.getElementById(selector)

  // Add all nodes here
  components = [componentCandlestick]

  menu = new D3NE.ContextMenu({
    GetCandlesticks: componentCandlestick
  })

  editor = new D3NE.NodeEditor('Strategy@0.1.0', container, components, menu)
  engine = new D3NE.Engine('Strategy@0.1.0', components)

  editor.eventListener.on('change', async () => {
    await engine.abort()
    await engine.process(editor.toJSON())
  })

  let candlesticksNode = componentCandlestick.builder(componentCandlestick.newNode(), editor)

  candlesticksNode.position = [500, 240]

  editor.addNode(candlesticksNode)

  editor.view.zoomAt(editor.nodes)
  // editor.eventListener.trigger('change')
  editor.view.resize()
  editor.selectNode(candlesticksNode)

  return editor
}

module.exports = {
  nodeEditor
}
