<template>
  <div class="editor">
    <Node v-bind:nodes="data" />
  </div>
</template>
<script>
  
  import Node from './Node.vue'

  export default {
    components: {
      Node
    },

    data () {
      return {
        data: [{
          input: [{type: "number"}], output: [{type: "number"}, {type: "boolean"}]
        },{
          input: [{type: "number"}, {type: "number"}], output: [{type: "number"}, {type: "number"}, {type: "boolean"}]
        }],
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

</style>
