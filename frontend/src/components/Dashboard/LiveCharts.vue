<template>
  <!-- <div>
    <div class="topbar">
      <span class="right">Back to Dashboard</span>
    </div>
    <iframe src="https://www.cryptowat.ch" width="100%" height="100vh"></iframe>
  </div> -->
  <div ref="chart" id="chart-container"></div>
</template>
<script>
  import CryptowatchEmbed from 'cryptowatch-embed'

  export default {
    components: {
    },

    mounted: () => {
      // let chartContainer = this.$ref.chart
      let chart = new CryptowatchEmbed('bitfinex', 'btcusd', {
        presetColorScheme: 'delek'
      })

      chart.mount('#chart-container')
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
    position: relative;
  }

  body {
    margin: 0;
    padding: 0;
  }

</style>
