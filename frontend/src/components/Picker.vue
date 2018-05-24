<template>
  <div>
    <!-- <img src="static/img/image3.jpg"> -->

    <canvas v-on:click="getRGB" width="600" height="440" id="canvas_picker"></canvas>
    <div id="hex">HEX: <input type="text"></input></div>
    <div id="rgb">RGB: <input type="text"></input></div>
    <div id="hsl">HSL: <input type="text"></input></div>
  </div>
</template>
<script>
  let canvas
  export default {
    components: {
    },

    mounted: () => {
      canvas = document.getElementById('canvas_picker').getContext('2d')
      let img = new Image()
      img.src = 'static/img/image3.jpg'
      img.addEventListener('load', () => {
        canvas.drawImage(img, 0, 0)
      }, false)
    },

    methods: {
      getRGB: (event) => {
        let x = event.pageX - event.target.offsetLeft
        let y = event.pageY - event.target.offsetTop
        let imgData = canvas.getImageData(x, y, 1, 1).data
        // console.log(event)
        console.log(event.target.offsetLeft)
        console.log(event.target.offsetTop)
        console.log(imgData)
      }
    },

    data () {
      return {
      }
    }
  }

</script>
<style></style>
