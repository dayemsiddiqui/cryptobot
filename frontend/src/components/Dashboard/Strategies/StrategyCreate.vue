<template>
  <div>
    <div id="nodeEditor" class="node-editor">
    </div>
  </div>
</template>

<script>
  import * as D3NE from 'd3-node-editor'

  let numSocket = new D3NE.Socket('number', 'Number value', 'hint')

  let componentNum = new D3NE.Component('Number', {
    builder (node) {
      let out1 = new D3NE.Output('Number', numSocket)
      let numControl = new D3NE.Control('<input type="number">', (el, c) => {
        el.value = c.getData('num') || 1

        function update () {
          c.putData('num', parseFloat(el.value))
        }

        el.addEventListener('input', () => {
          update()
          editor.eventListener.trigger('change')
        })

        // prevent node movement when selecting text in the input field
        el.addEventListener('mousedown', e => { e.stopPropagation() })
        update()
      })

      return node.addControl(numControl).addOutput(out1)
    },

    worker (node, inputs, outputs) {
      outputs[0] = node.data.num
    }
  })

  let componentAdd = new D3NE.Component('Add', {
    builder (node) {
      let inp1 = new D3NE.Input('Number', numSocket)
      let inp2 = new D3NE.Input('Number', numSocket)
      let out = new D3NE.Output('Number', numSocket)

      let numControl = new D3NE.Control('<input readonly type="number">', (el, control) => {
        control.setValue = val => {
          el.value = val
        }
      })

      return node
      .addInput(inp1)
      .addInput(inp2)
      .addControl(numControl)
      .addOutput(out)
    },

    worker (node, inputs, outputs) {
      let sum = inputs[0][0] + inputs[1][0]
      editor.nodes.find(n => n.id === node.id).controls[0].setValue(sum)
      outputs[0] = sum
    }
  })

  let menu = new D3NE.ContextMenu({
    Values: {
      Value: componentNum,
      Action: () => {
        alert('ok')
      }
    },
    Add: componentAdd
  })

  let container, components, editor, engine, nn, n1, n2, add

  export default {
    mounted () {
      container = document.getElementById('nodeEditor')
      components = [componentNum, componentAdd]
      editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu)

      nn = componentNum.newNode()
      nn.data.num = 2
      n1 = componentNum.builder(nn)
      n2 = componentNum.builder(componentNum.newNode())
      add = componentAdd.builder(componentAdd.newNode())

      n1.position = [80, 200]
      n2.position = [80, 400]
      add.position = [500, 240]

      editor.connect(n1.outputs[0], add.inputs[0])
      editor.connect(n2.outputs[0], add.inputs[1])

      editor.addNode(n1)
      editor.addNode(n2)
      editor.addNode(add)
      //  editor.selectNode(tnode)
      engine = new D3NE.Engine('demo@0.1.0', components)

      editor.eventListener.on('change', async () => {
        await engine.abort()
        await engine.process(editor.toJSON())
      })

      editor.view.zoomAt(editor.nodes)
      editor.eventListener.trigger('change')
      editor.view.resize()
    },

    computed: { },

    data () { },

    methods: { }
  }
</script>

<style>
  #nodeEditor{
     position: relative;
    height: 100%
  }

  .socket.number{
      background: #96b38a
  }
</style>
