<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="exchange in exchangeCards">
        <exchange-card>
          <div class="icon-big text-center" :class="`icon-${exchange.type}`" slot="header">
            <i :class="exchange.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{exchange.title}}</p>
            {{exchange.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="exchange.footerIcon"></i> {{exchange.footerText}}
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
            title: 'Capacity',
            value: '105GB',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          },
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Revenue',
            value: '$1,345',
            footerText: 'Last day',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'danger',
            icon: 'ti-pulse',
            title: 'Errors',
            value: '23',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            type: 'info',
            icon: 'ti-twitter-alt',
            title: 'Followers',
            value: '+45',
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
