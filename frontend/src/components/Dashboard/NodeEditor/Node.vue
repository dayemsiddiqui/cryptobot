<template>
  <div id="drawing">
    <div class="draggable" v-for="node in nodes">
      <p> </p>
      
      <div v-for="con in node.output">
        <p ><div class="socket output"></div><br></p>
      </div>     
  
      <div v-for="aussi in node.input">
        <p><div class="socket input"></div><br></p>   
      </div>  
    </div>
  </div>
</template>
<script>
  
  const interact = require('interactjs');
  const SVG = require('svg.js');
  export default {
    props: ['nodes'],
    components: {

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
      joinNodes: function(){
       var draw = SVG('drawing')
       draw.line(0, 0, 500, 500).stroke({ width: 2 })
      }
     },
    mounted () {
      

      // target elements with the "draggable" class
      interact('.draggable')
        .draggable({
          // enable inertial throwing
          inertia: true,
          // keep the element within the area of it's parent
          restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          },
          // enable autoScroll
          autoScroll: true,

          // call this function on every dragmove event
          onmove: dragMoveListener,
          // call this function on every dragend event
          onend: function (event) {
            // var textEl = event.target.querySelector('p');

            // textEl && (textEl.textContent =
            //   'moved a distance of '
            //   + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            //                Math.pow(event.pageY - event.y0, 2) | 0))
            //       .toFixed(2) + 'px');
          }
        });

        function dragMoveListener (event) {
          var target = event.target,
              // keep the dragged position in the data-x/data-y attributes
              x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
              y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          // translate the element
          target.style.webkitTransform =
          target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        }

        // this is used later in the resizing and gesture demos
        window.dragMoveListener = dragMoveListener;
    }
  }

</script>
<style>
.draggable{
  width: 200px;
  height: auto;
  background-color: #2ecc71;
  color: white;
  padding: 25px;
  border-radius: 15px;
  overflow: visible;
}
.socket {
  width: 25px;
  height: 25px;
  background-color: red;
  border-radius: 150px;
  border-color: black;
  border-style: solid;
}

.input{
  float: left;
  margin-left: -35px;
}

.output{
  float: right;
  margin-right: -35px;
}
</style>
