<template>
  <div>
    <div id="nodeEditor" class="node-editor">
    </div>
  </div>
</template>

<script>
  import { nodeEditor } from './Nodes/NodeEditor.js'

  export default {
    mounted () {
      nodeEditor('nodeEditor')
    },

    computed: { },

    data () { },

    methods: { }
  }
</script>

<style>
  #nodeEditor{
     position: relative;
     height: 800px;
  }

  .socket.number, .socket.output{
      background: #96b38a
  }

  input[type=date]::-webkit-inner-spin-button, 
  input[type=date]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
</style>
