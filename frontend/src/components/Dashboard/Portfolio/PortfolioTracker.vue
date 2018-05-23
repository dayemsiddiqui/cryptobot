<template>

  <div class="row">
    <div class="row">
      <div class="card">
          <div class="card-header">
            <h4 class="card-title">My Current Holdings</h4>
            <p class="category">See your current investments</p>
          </div>
          <hr>
          <div class="card-content">
          
            <column-chart :data="portfolioData"></column-chart>   
          </div> <!-- end card-content -->
      </div> <!-- end card -->
    </div>

    <div class="row">
      <div class="col-sm-6">
          <div class="card">
              <div class="card-header">
                <h4 class="card-title">My Current Holdings</h4>
                <p class="category">See your current investments</p>
              </div>
              <hr>
              <div class="card-content">
              
                <column-chart :data="portfolioData"></column-chart>   
              </div> <!-- end card-content -->
          </div> <!-- end card -->
      </div>
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
