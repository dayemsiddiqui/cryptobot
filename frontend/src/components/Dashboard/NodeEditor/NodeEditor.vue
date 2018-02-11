<template>
  <div>

  <div id="d3ne" class="node-editor" style="background: red; height: 1000px;" v-on:click="save"></div>

  </div>
</template>
<script>

  var D3NE = require("d3-node-editor");
  export default {
    components: {
      // D3NE
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        // lib: D3NE
      }
    },
    created() {

     },
     methods: {
      save: function(){
        console.log("Library",  JSON.stringify(D3NE, null, 2))
      }
     },
    mounted () {
      console.log("Component Mounted", typeof(D3NE), D3NE)

      // var numSocket = Socket('number', 'Number value', 'hint');
      // var numComp = new D3NE.Component('Number',{
      //     builder(node) {
      //         var out = new D3NE.Output('Number',numSocket); 
      //         var numControl = new D3NE.Control('<input type="number">',(element, control)=>{
      //             control.putData('num', 1);
      //          });

      //         return node
      //                   .addControl(numControl)
      //                   .addOutput(out);
      //     },
      //     worker(node, inputs, outputs){
      //         outputs[0] = node.data.num;
      //   }
      // });
      // var components = [numComp];

      // var menu = new D3NE.ContextMenu({
      //                 'Actions':{
      //                     'Action': function(){alert('Subitem selected');}
      //                 },
      //                 'Nodes':{
      //                     'Number': numComp, 
      //                 }
      //            });
      // var container = document.querySelector('#d3ne');
      // var editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);

      // var engine = new D3NE.Engine('demo@0.1.0', components);

      // editor.eventListener.on('change', async () => {
      //     await engine.abort();            
      //     var status = await engine.process(editor.toJSON());            
      // });
    }
  }

</script>
<style>

</style>
