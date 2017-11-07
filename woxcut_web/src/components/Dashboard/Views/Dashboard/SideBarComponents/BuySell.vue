<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="exchange in exchangeCards">
        <exchange-card>

          <div class="icon-big text-center" :class="`icon-${exchange.type}`" slot="header">
            <!-- <i :class="exchange.icon"></i> -->
            <img :src="`static/img/${exchange.logo}.png`" alt="">
          </div>
            <br>
            <br>
            <br>
          <div class="text-center" slot="content">
            <br>
            <p>{{exchange.title}}</p>
            {{exchange.value}}
            <br>
            <br>
          </div>
          <div class="text-center" slot="footer">
            <button class="btn btn-disabled btn-fill" disabled="">Disable</button>
            <button class="btn btn-success btn-fill">Activate</button>
            <!-- <i :class="exchange.footerIcon"></i> {{exchange.footerText}} -->
          </div>
        </exchange-card>
      </div>
    </div>
  </div>
  
</template>

<script>

  import ExchangeCard from 'components/UIComponents/Cards/ExchangeCard.vue'

  export default {
    components: {
      ExchangeCard
    },
    /**
     * Chart data used to render Exchange, charts. Should be replaced with server data
     */
    data () {
      return {
        exchangeCards: [
          {
            type: 'warning',
            icon: 'ti-server',
            title: 'BitStamp',
            logo: 'Bitstamp',
            value: 'Status: Connected',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          }
        ]
      }
    }
  }

</script>

<style>

</style>
