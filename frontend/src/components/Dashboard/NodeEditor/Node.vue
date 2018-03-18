<template>
  <div id="drawing">
    <div class="draggable" v-for="node in nodes">
      <h5>{{ node.title }}</h5>  
      <div v-for="con in node.output">
        <p ><div v-bind:id="con.id" class="socket output"></div><br></p>
      </div>     
  
      <div v-for="con in node.input">
        <p><div v-bind:id="con.id" class="socket input"></div><br></p>   
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
        pair: {},
        connections: [],
      }
    },
    created() {

     },
     methods: {
      joinNodes: function(elm1, elm2){
       var draw = SVG('drawing')
       new LeaderLine(
            document.getElementById(elm1),
            document.getElementById(elm2)
          );  
       var pos1 = $("#"+elm1).position();
       var pos2 = $("#"+elm2).position();
       console.log(pos1)
       var offsetX = 296;
       var offsetY = 110; 
       draw.line(pos1.left - offsetX, pos1.top - offsetY - 500, 500, 500).stroke({ width: 2 })
      },
     },
    mounted () {
      
      $( "#drawing" ).mousemove(function( event ) {
        
        // console.log(event.pageX + ", " + event.pageY);
        
      });
      $( ".socket" ).click($.proxy(function( event ) {
         console.log("Click Target", event.target);
         if(event.target.classList.contains( "input" )){
            //Write the logic here for storing connections
            this.pair.input = event.target.id
         }
         if(event.target.classList.contains( "output" )){
            //Write the logic here for storing connections
            this.pair.output = event.target.id
         }

         if(this.pair.input && this.pair.output){
          this.connections.push(this.pair);
          this.joinNodes(this.pair.input, this.pair.output);
          
          this.pair = {};
         }

         console.log(this.connections, this.pair)
      }, this));

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
  padding-top: 1px;
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
