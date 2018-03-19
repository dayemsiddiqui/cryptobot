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
                <!-- <button class="btn btn-disabled btn-fill" disabled="">Disable</button> -->
                <button class="btn btn-success btn-fill" v-on:click="showSwal(exchange._id)">Connect</button>
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

  import swal from 'sweetalert2'

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
      showSwal (exchangeId) {
        swal({
          html: '<div class="form-group">' +
              '<label>Enter your Exchange API keys</label>' +
            '<p><input required id="keypub" type="text" placeholder="Public Key" class="form-control" /></p>' +
            '<p><input required id="keysec" type="text" placeholder="Secret Key" class="form-control" /></p>' +
            '</div>',
          showCancelButton: true,
          confirmButtonText: 'Connect',
          reverseButtons: true,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return new Promise((resolve) => {
              let payload = {
                publickey: document.getElementById('keypub').value,
                secretkey: document.getElementById('keysec').value,
                exchange_id: exchangeId
              }
              resolve(ExchangeService.connect(payload))
            })
          },
          allowOutsideClick: () => !swal.isLoading()
        }).then((result) => {
          console.log(result)
          if (result.data === 'success') {
            swal({
              type: 'success',
              confirmButtonText: 'OK',
              text: 'Connection Successful'
            })
          } else {
            swal({
              type: 'error',
              text: `Connection Failed: ${result.data.error}
              Please check your keys and try again.`
            })
          }
        })
      },

      async getAllExchanges () {
        const response = await ExchangeService.fetchAllExchanges()
        this.exchangeCards = response.data
        console.log(this.$store.getters.getUser.exchanges[0]) // this should not be undefined
        this.loading = false
      }
    }
  }

</script>
<style>
.exchange-logo {
  width: 75%;
}


</style>
