<template>
  <div>
    <!--Stats cards-->
    <!--
          {
            type: 'warning',
            icon: 'fa fa-btc',
            title: 'Current Coins',
            value: '105 BTC',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          },
     -->
    <div class="row">
      
      <div class="col-lg-3 col-sm-6">
        <stats-card>
          <div class="icon-big text-center icon-warning" slot="header">
            <i class="fa fa-btc"></i>
          </div>
          <div class="numbers" slot="content">
            <p>Current Coins</p>
            123 BTC
          </div>
          <div class="stats" slot="footer">
            <span class="pull-left">
              <i class="ti-reload"></i> Updated 2 mins ago
            </span>
            <span class="pull-right">
              <select class="" name="" id="">
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
            </span>
          </div>
        </stats-card>
      </div>

      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

     <!--Stats cards-->
    <div class="row">
      <div class="col-lg-6 col-sm-6">
        <chart-card :chart-data="portfolioChart.data" :chart-options="portfolioChart.options" :chart-type="portfolioChart.type">
            <span slot="title">Current Portfolio</span>
            <span slot="title-label" class="label label-success">
              +18%
            </span>
            <h6 slot="subtitle">
              <i class="fa fa-circle text-info"></i> Open
              <i class="fa fa-circle text-danger"></i> Bounce
              <i class="fa fa-circle text-warning"></i> Unsubscribe
              <!-- total earnings <span class="text-muted">in last</span> ten <span class="text-muted">quarters</span> -->
            </h6>
            <div slot="footer-title">
              Financial Statistics
            </div>
            <button slot="footer-right" class="btn btn-info btn-fill btn-icon btn-sm">
              <i class="ti-plus"></i>
            </button>
          </chart-card>

      </div>
        
      <div class="col-lg-6 col-sm-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">
            Current Balance
            </h4>
            <!-- <p class="category">All products that were shipped</p> -->
          </div>
          <div class="card-content">
            <div class="row">
              <!-- <div class="col-md-7"> -->
                <!-- <world-map></world-map> -->
              <!-- </div> -->
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <td><strong>Currency</strong></td>
                        <td><strong>Amount</strong></td>
                        <td><strong>Value in BTC</strong></td>
                        <td><strong>Price in BTC</strong></td>
                        <td><strong>Trend</strong></td>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="row in balanceData">
                          <td>{{row.currency}}</td>
                          <td>{{row.amount}}</td>
                          <td>{{row.value}}</td>
                          <td>{{row.price}}</td>
                          <td>{{row.trend}}</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
        <!-- <div class="col-lg-8 col-sm-12"> -->
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Top Performing Bots</h4>
              <!-- <p class="category">All products that were shipped</p> -->
            </div>
            <div class="card-content">
              <div class="row">
                <!-- <div class="col-md-7"> -->
                  <!-- <world-map></world-map> -->
                <!-- </div> -->
                <div class="col-md-12">
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                      <tr>
                        <td>
                          <!-- <div class="flag">
                            <img src="static/img/flags/US.png">
                          </div> -->
                        </td>
                        <td>Stipmunk68</td>
                        <td class="text-right">
                          <span class="green">+2.920</span>
                        </td>
                        <td class="text-right">
                          <span class="red">-53.23%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <!-- <div class="flag">
                            <img src="static/img/flags/DE.png">
                          </div> -->
                        </td>
                        <td>bot123-Hfscn7</td>
                        <td class="text-right">
                          <span class="green">+1.300</span>
                        </td>
                        <td class="text-right">
                          <span class="green">20.43%</span>
                        </td>
                      </tr><tr>
                        <td>
                          <!-- <div class="flag">
                            <img src="static/img/flags/DE.png">
                          </div> -->
                        </td>
                        <td>Crupyds-Yqwn65</td>
                        <td class="text-right">
                          <span class="red">-0.9</span>
                        </td>
                        <td class="text-right">
                          <span class="red">-22.98%</span>
                        </td>
                      </tr><tr>
                        <td>
                          <!-- <div class="flag">
                            <img src="static/img/flags/DE.png">
                          </div> -->
                        </td>
                        <td>RadioMonkey21</td>
                        <td class="text-right">
                          <span class="green">+1.300</span>
                        </td>
                        <td class="text-right">
                          <span class="green">20.43%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <!-- <div class="flag">
                            <img src="static/img/flags/DE.png">
                          </div> -->
                        </td>
                        <td>Uii2d20</td>
                        <td class="text-right">
                          <span class="green">+8.300</span>
                        </td>
                        <td class="text-right">
                          <span class="green">+89.43%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <!-- <div class="flag">
                            <img src="static/img/flags/DE.png">
                          </div> -->
                        </td>
                        <td>khBvWjaqcePiE6</td>
                        <td class="text-right">
                          <span class="green">+8.300</span>
                        </td>
                        <td class="text-right">
                          <span class="green">+89.43%</span>
                        </td>
                      </tr>
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <chart-card :chart-data="earningsChart.data" :chart-options="earningsChart.options">
            <span slot="title">$34,657</span>
            <span slot="title-label" class="label label-success">
              +18%
            </span>
            <h6 slot="subtitle">
              total earnings <span class="text-muted">in last</span> ten <span class="text-muted">quarters</span>
            </h6>
            <div slot="footer-title">
              Financial Statistics
            </div>
            <button slot="footer-right" class="btn btn-info btn-fill btn-icon btn-sm">
              <i class="ti-plus"></i>
            </button>
          </chart-card>
        </div>
    </div>


  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import VueChartist from 'v-chartist'

  import DashboardService from 'src/services/DashboardService'

  // import Loading from 'src/components/Dashboard/Layout/LoadingMainPanel.vue'

  /*
  const WorldMap = () => ({
    component: import('./../Maps/WorldMap.vue'),
    loading: Loading,
    delay: 200
  })
  */
  
  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard,
      'vue-chartist': VueChartist
      // WorldMap
    },

    methods: {
      async getPortfolioData () {
        let response = await DashboardService.fetchPortfolioData()
        this.portfolioChart.data = response.data
      }
    },

    mounted () {
      this.getPortfolioData()
    },

    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        data: {
          // labels: ['BTC', 'LTC', 'ETH', 'USDT'],
          series: [20, 10, 30, 40]
        },
        options: {
          // donut: true,
          donutWidth: 120,
          donutSolid: true,
          startAngle: 360,
          showLabel: true,
          fullWidth: true
        },
        statsCards: [
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
            icon: '',
            title: 'No. Of Bots',
            value: '8',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          }
        ],
        earningsChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            series: [
              [230, 340, 400, 300, 570, 500, 800]
            ]
          },
          options: {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40,
              showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
              line: 'ct-line ct-green'
            }
          }
        },
        portfolioChart: {
          data: {
            labels: ['ETH', 'BTC', 'XRP', 'BCH'],
            series: [12, 36, 12, 40]
          },
          type: 'Pie',
          options: {
            height: '320px',
            donut: true,
            donutWidth: 90
            // startAngle: 270
            // total: 360
          }
        },
        balanceData: [{
          currency: 'LTC',
          amount: 147,
          value: 147,
          price: 147,
          trend: 5 + '%'
        }]

      }
    }
  }

</script>
<style>

</style>
