<template>
  <div>
    <div class="topbar">
      <router-link to="/overview" class="sidebar-normal">
        <button type="button" class="btn btn-sm btn-primary btn-fill btn-move-left"><span class="btn-label"><i class="ti-angle-left"></i></span>
                Back to Dashboard
              </button>
      </router-link>
    </div>
    <iframe src="https://cryptowat.ch" class="chart-iframe" frameborder="0"></iframe>
  </div>
</template>
<script>
  export default {
    components: {
    },

    mounted: () => {
    },

    data () {
      return {

      }
    }
  }

</script>
<style>

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
