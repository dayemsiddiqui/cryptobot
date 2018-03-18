<template>
  <div class="editor" @contextmenu.prevent="$refs.ctxMenu.open">
    <Node v-bind:nodes="strategy.nodeData" />
  <context-menu id="context-menu" ref="ctxMenu">
    <li v-on:click="addNode(addTemplate)">Add</li>
    <li v-on:click="addNode(subtractTemplate)">Subtract</li>
    <li v-on:click="addNode(multiplyTemplate)">Multiply</li>
    <li v-on:click="addNode(divideTemplate)">Divide</li>
  </context-menu>
  </div>
  
</template>
<script>
  
  import Node from './Node.vue'
  import contextMenu from 'vue-context-menu'

  export default {
    components: {
      Node,
      contextMenu
    },
    mounted(){

    },
    methods: {
      addNode: function(item){
        item.id = this.strategy.nodeCount;
        this.strategy.nodeCount++;
        for(var i = 0; i < item.input.length; i++){
          item.input[i].id = this.strategy.socketCount;
          this.strategy.socketCount++;
        }
        for(var i = 0; i < item.output.length; i++){
          item.output[i].id = this.strategy.socketCount;
          this.strategy.socketCount++;
        }
        this.strategy.nodeData.push(item);
        console.log("Added")
      }
    },
    data () {
      return {
        addTemplate: {
          title: "Add",
          input: [{type: "number"}, {type: "number"}], 
          output: [{type: "number"}],
          fields: [],
        },
        subtractTemplate: {
          title: "Subtract",
          input: [{type: "number"}, {type: "number"}], 
          output: [{type: "number"}],
          fields: [],
        },
        multiplyTemplate: {
          title: "Multiply",
          input: [{type: "number"}, {type: "number"}], 
          output: [{type: "number"}],
          fields: [],
        },
        divideTemplate: {
          title: "Divide",
          input: [{type: "number"}, {type: "number"}], 
          output: [{type: "number"}],
          fields: [],
        },
        strategy: {
          socketCount: 0,
          nodeCount: 0,
          nodeData: [],
          name: "Strategy Name"
        }
      }
    },

  }

</script>
<style>
.editor{
  min-width: 100%;
  min-height: 100vh;
  border: 25px;
}
ul.ctx-menu > li{
  font-size: 20px;
}

ul.ctx-menu > li:hover{
  font-size: 20px;
  background-color: #f1f2f6;
}
</style>
