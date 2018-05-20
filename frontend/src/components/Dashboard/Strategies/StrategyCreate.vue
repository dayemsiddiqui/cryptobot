<template>
  <div>
    <div class="topbar">
      <router-link to="/overview" class="sidebar-normal">
        <button type="button" class="btn btn-sm btn-primary btn-fill btn-move-left"><span class="btn-label"><i class="ti-angle-left"></i></span>
                Back to Dashboard
              </button>
      </router-link>
    </div>
    <div id="nodeEditor" class="node-editor"></div>
  </div>
</template>

<script>
  // import { nodeEditor } from './Nodes/NodeEditor.js'
  import { nodeEditors } from './NodeEditor_s/index.js'

  export default {
    mounted () {
      nodeEditors('nodeEditor')
    },

    computed: { },

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

  body {
    width: 100%;
    padding:0px;
    margin: 0px;
  }

  .topbar {
    top: 0;
    background-color: #165a54;
    height: 45px;
    color: white;
    line-height: 20px;
    font-size: 20px;
    vertical-align: middle;
    padding: 7px;
    font-weight: 500;
    position: relative;
  }

  .chart-iframe {
    display: block;
    height: calc(100vh - 45px);
    width: 100%;
  }

</style>
