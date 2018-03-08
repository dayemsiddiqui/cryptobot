<template>
  <div>
    <!--Exchange cards-->
    <div class="row">
      <div class="col-lg-4 col-sm-6" v-for="exchange in exchangeCards">
        <exchange-card>
          <div class="row" slot="content">
            <div class="col-sm-6">
              <div class="text-left">
                <!-- <i :class="exchange.icon"></i> -->
                <img class="exchange-logo" :src="`static/img/exchange-logos/${exchange.logo}`" alt="">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="text-right">
                <button class="btn btn-disabled btn-fill" disabled="">Disable</button>
                <button class="btn btn-success btn-fill" :if="is_configured">Connect</button>
                <!-- <i :class="exchange.footerIcon"></i> {{exchange.footerText}} -->
              </div>
            </div>
          </div>
        </exchange-card>
      </div>
    </div>
  </div>
</template>
<script>
  import ExchangeCard from 'components/UIComponents/Cards/ExchangeCard.vue'
  import ExchangeService from 'src/services/ExchangesService'

  export default {
    components: {
      ExchangeCard
    },
    /**
     * Chart data used to render Exchange, charts. Should be replaced with server data
     */

    mounted () {
      this.getAllExchanges()
    },

    data () {
      return {
        is_configured: false,
        exchangeCards: []
      }
    },

    methods: {
      async getAllExchanges () {
        const response = await ExchangeService.fetchAllExchanges()
        this.loading = false
        this.exchangeCards = response.data
      }
    }
  }

</script>
<style>
.exchange-logo {
  width: 75%;
}


</style>
