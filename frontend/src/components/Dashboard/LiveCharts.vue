<template>
  <div>
    <div class="topbar">
      <span class="right">Back to Dashboard</span>
    </div>
    <iframe src="https://www.cryptowat.ch" class="iframe"></iframe>
  </div>
  <!-- <div ref="chart" id="chart-container"></div> -->
</template>
<script>
  import CryptowatchEmbed from 'cryptowatch-embed'

  export default {
    components: {
    },

    mounted: () => {
      // let chartContainer = this.$ref.chart
      /*
      let chart = new CryptowatchEmbed('bitfinex', 'btcusd', {
        presetColorScheme: 'delek'
      })

      chart.mount('#chart-container')
      */
    },

    data () {
      return {

      }
    }
  }

</script>
<style>

  #chart-container {
    height: 100vh;
  }

  .topbar {
    top: 0;
    background-color: #165a54;
    height: 40px;
    color: white;
    line-height: 20px;
    font-size: 20px;
    vertical-align: middle;
    padding: 7px;
    font-weight: 500;
    position: relative;
  }

  .iframe {
    height: 100vh;
    width: 100%;
  }

</style>
