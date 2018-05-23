<template>

  <div class="row">
    <div class="row">
      <div class="col-sm-6">
          <div class="card">
              <div class="card-header">
                <h4 class="card-title">Add Investment</h4>
                <p class="category">Add Investment to your current portfolio</p>
              </div>
              <hr>
              <div class="card-content">
                <v-select label="label" v-model="selected" :options="model.currencies" placeholder="Select a currency"></v-select>
                <br>   
                <input type="number" v-model="amount" placeholder="Quantity" style="width: 100%;" /> 
                <br><br>
                <button class="btn btn-primary btn-sm" @click="add">Add Investment</button>          
                  
              </div> <!-- end card-content -->
          </div> <!-- end card -->
      </div>
      <div class="col-sm-6">
        <div class="card">
            <div class="card-header">
              <h4 class="card-title">My Total Worth</h4>
              <p class="category">Total Worth of your portfolio</p>
            </div>
            <hr>
            <div class="card-content">
              <h1>${{ assetValue }}</h1>
            </div> <!-- end card-content -->
        </div> <!-- end card -->
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
          <div class="card">
              <div class="card-header">
                <h4 class="card-title">My Current Holdings In Dollars</h4>
                <p class="category">See your current assets worth</p>
              </div>
              <hr>
              <div class="card-content">
              
                <column-chart :data="portfolioWorth"></column-chart>   
              </div> <!-- end card-content -->
          </div> <!-- end card -->
      </div>

      <div class="col-sm-6">
        <div class="card">
            <div class="card-header">
              <h4 class="card-title">My Current Holdings In Coins</h4>
              <p class="category">See your current investments</p>
            </div>
            <hr>
            <div class="card-content">
            
              <column-chart :data="portfolioData"></column-chart>   
            </div> <!-- end card-content -->
        </div> <!-- end card -->
      </div>
     
    </div>
    
    <div class="row">
      <div class="col-sm-6">
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
    </div>

  </div>

</template>


<script>

  import Vue from 'vue'
  import {Row, Col} from 'element-ui'
  import {VueTabs, VTab} from 'vue-nav-tabs'
  import {mapFields} from 'vee-validate'
  
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(VueTabs)
  Vue.use(VTab)
  
  // eslint-disable-next-line 
  Vue.component('v-select', VueSelect.VueSelect)
  export default {
    computed: {
      ...mapFields(['buyC1', 'buyC2', 'sellC1', 'sellC2', 'c1List', 'c2List'])
    },
    created () {
      // https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BTC,REP&tsyms=USD
      setInterval(function () {
        // method to be executed;
        this.fetchPrice()
      }.bind(this), 10000)
    },
    data () {
      return {
        selected: '',
        amount: '',
        tabTitles: ['Buy', 'Sell'],
        currentTab: 'Buy',
        currentTabColor: '',
        holdings: {},
        portfolioData: [],
        portfolioWorth: [],
        assetValue: 0,
        priceList: {
          BTC: 254.5,
          ETH: 256.5,
          REP: 12,
          LTC: 75
        },
        model: {

          buyC1: '',
          buyC2: '',
          sellC1: '',
          sellC2: '',
          c1List: '',
          c2List: '',
          exchange: '',

          currencies: [{
            value: 'BTC',
            label: 'Bitcoin'
          }, {
            value: 'ETH',
            label: 'Etheruem'
          }, {
            value: 'REP',
            label: 'Ripple'
          }, {
            value: 'LTC',
            label: 'Litecoin'
          }]
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
        })
      },
      assetCalculator () {
        if (this.portfolioWorth.length !== 0) {
          var sum = 0
          for (var i = 0; i < this.portfolioWorth.length; i++) {
            sum += this.portfolioWorth[i][1]
          }
          this.assetValue = sum
        }
      },
      fetchPrice () {
        console.log('Fetched Prices')
        var keys = Object.keys(this.holdings)
        var holdingsPrice = {}
        if (keys.length !== 0) {
          for (var i = 0; i < keys.length; i++) {
            holdingsPrice[keys[i]] = this.priceList[keys[i]] * this.holdings[keys[i]]
            console.log('Asset Value', keys[i], this.holdings[keys[i]])
          }
        }
        var priceKeys = Object.keys(holdingsPrice)
        var data = []
        for (var j = 0; j < priceKeys.length; j++) {
          data.push([keys[j], holdingsPrice[priceKeys[j]]])
        }
        console.log('Transformed', data)
        this.portfolioWorth = data
        this.assetCalculator()
      },
      transform () {
        console.log(Object.keys(this.holdings))
        var keys = Object.keys(this.holdings)
        var data = []
        for (var i = 0; i < keys.length; i++) {
          data.push([keys[i], this.holdings[keys[i]]])
        }
        console.log('Transformed', data)
        this.portfolioData = data
      },
      handleTabChange (tabIndex, newTab, oldTab) {
        // console.log(tabIndex, newTab.title, oldTab.title)
        this.currentTab = newTab.title
        if (this.currentTab === 'Buy') this.currentTabColor = '#AAE9BD'
        if (this.currentTab === 'Sell') this.currentTabColor = '#F38F72'
      },
      add () {
        console.log('Added the investment', this.amount, this.selected.value)
        if (this.holdings[this.selected.value]) {
          this.holdings[this.selected.value] += parseInt(this.amount)
        } else {
          this.holdings[this.selected.value] = parseInt(this.amount)
        }
        this.amount = ''
        this.selected = ''
        this.transform()
      }

    }
  }
</script>

<style scoped>

  @import url("//unpkg.com/empty-cells: ;lement-ui@2.0.4/lib/theme-chalk/index.css");


</style>
