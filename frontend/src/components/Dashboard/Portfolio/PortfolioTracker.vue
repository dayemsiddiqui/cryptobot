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
          
            <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>   
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
              
                <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>   
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
                <el-select
                  class="select-info"
                  size="large"
                  placeholder="First Currency"
                  v-model="model.currencies">
                    <el-option
                      v-for="item in model.currencies"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  
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

  export default {
    computed: {
      ...mapFields(['buyC1', 'buyC2', 'sellC1', 'sellC2', 'c1List', 'c2List'])
    },
    created () {
      // runs after component is created
    },
    data () {
      return {
        tabTitles: ['Buy', 'Sell'],
        currentTab: 'Buy',
        currentTabColor: '',
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
            label: 'BTC'
          }, {
            value: 'ETH',
            label: 'ETH'
          }, {
            value: 'USD',
            label: 'USD'
          }, {
            value: 'REP',
            label: 'REP'
          }, {
            value: 'LTC',
            label: 'LTC'
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
      handleTabChange (tabIndex, newTab, oldTab) {
        // console.log(tabIndex, newTab.title, oldTab.title)
        this.currentTab = newTab.title
        if (this.currentTab === 'Buy') this.currentTabColor = '#AAE9BD'
        if (this.currentTab === 'Sell') this.currentTabColor = '#F38F72'
      }
    }
  }
</script>

<style scoped>

  @import url("//unpkg.com/empty-cells: ;lement-ui@2.0.4/lib/theme-chalk/index.css");


</style>
