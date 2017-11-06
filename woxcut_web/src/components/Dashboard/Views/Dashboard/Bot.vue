<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6" v-for="bot in botCards">
        <bot-card>
          <div slot="content">
            <div class="col-lg-7 col-sm-7 text-left">
              <div class="row">
                <div class="bot-avatar pull-left">
                  <img :src="`static/img/bot-avatars/${bot.image}`">
                </div>
                <div class="row">
                  <div class="pull-left">
                    <div class="col-sm-12">
                      <p>Name: <b>{{bot.name}}</b></p>
                      <p>Strategy: <b>{{bot.strategy}}</b></p>
                      <p>Exchange: <b>{{bot.exchange}}</b></p>
                      <p>Status: <b>{{bot.status}}</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-sm-5 text-right">
              <div class="row">
                <div class="col-sm-12">
                  <button class="btn btn-icon"><i class="ti-search"></i></button>
                  <button class="btn btn-icon"><i class="ti-control-pause"></i></button>
                  <button class="btn btn-icon"><i class="ti-pencil"></i></button>
                  <button class="btn btn-icon"><i class="ti-close"></i></button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <br>
                  <p>Last 24 Hours: <b>{{bot.profits.last24hours}}</b><br>
                  Last 7 Days: <b>{{bot.profits.last7days}}</b></p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="text-right" slot="footer">
            <em>uptime: {{bot.uptime}}</em>
          </div> -->
        </bot-card>
      </div>
    </div>
  </div>
</template>
<script>
  import BotCard from 'components/UIComponents/Cards/BotCard.vue'

  export default {
    components: {
      BotCard
    },
    /**
     * Chart data used to render Exchange, charts. Should be replaced with server data
     */
    data () {
      return {
        botCards: [
          {
            name: "B1tZ-Cr1M3",
            image: "bitcrime.png",
            status: "Running",
            strategy: "DEMA",
            exchange: "GDAX",
            uptime: "1507050618", // convert this into appropriate time interval client side,
            profits: {
              last24hours: "-10%", // calculate this dynamically,
              last7days: "13%" // calculate this dynamically as well
            }
          },
          {
            name: "B1tZ-Cr1M3",
            image: "002-robot-2.png",
            status: "Running",
            strategy: "DEMA",
            exchange: "GDAX",
            uptime: "1507050618", // convert this into appropriate time interval client side,
            profits: {
              last24hours: "-10%", // calculate this dynamically,
              last7days: "13%" // calculate this dynamically as well
            }
          },
          {
            name: "B1tZ-Cr1M3",
            image: "001-robot.png",
            status: "Running",
            strategy: "DEMA",
            exchange: "GDAX",
            uptime: "1507050618", // convert this into appropriate time interval client side,
            profits: {
              last24hours: "-10%", // calculate this dynamically,
              last7days: "13%" // calculate this dynamically as well
            }
          },
            {
            name: "B1tZ-Cr1M3",
            image: "003-robot-1.png",
            status: "Running",
            strategy: "DEMA",
            exchange: "GDAX",
            uptime: "1507050618", // convert this into appropriate time interval client side,
            profits: {
              last24hours: "-10%", // calculate this dynamically,
              last7days: "13%" // calculate this dynamically as well
            }
          }
        ]
      }
    }
  }

</script>
<style>

</style>
