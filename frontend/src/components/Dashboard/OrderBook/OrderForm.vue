<template>

  <div class="card">

      <div class="card-header">
        <h4 class="card-title">Manual Buy/Sell</h4>
        <p class="category">Allows you to manually make a Buy and Sell Order apart from your running bot</p>
      </div>

      <hr>

      <div class="card-content">

        <el-row type="flex" justify="center">

          <el-col :span="6">
            <el-select
              class="select-info select-danger"
              size="large"
              placeholder="Exchange"
              v-model="model.exchange">
                <el-option
                  v-for="item in model.exchanges"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-col>

          <el-col :span="6">
            <el-select
              class="select-info"
              size="large"
              placeholder="First Currency"
              v-model="model.c1List">
                <el-option
                  v-for="item in model.currencies"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-col>

          <el-col :span="6">
            <el-select
              class="select-info"
              size="large"
              placeholder="Second Currency"
              v-model="model.c2List">
                <el-option
                  v-for="item in model.currencies"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
          </el-col>



          </el-col>

        </el-row>

        <hr>

        <el-row type="flex" justify="center">
          <el-col :span="6">
            <div class="category">
              Last  | High | Low | 24 Hour Volume | Weighted Average
            </div>
          </el-col>
        </el-row>

        <hr>


        <el-row type="flex" justify="space-around">

          <el-col :span="12">

            <vue-tabs
              :activeTabColor = "currentTabColor"
              type="tabs"
              @tab-change="handleTabChange"
              class="card-content row"
              direction="vertical"
              v-model="currentTab">

              <v-tab title="Buy" icon="ti-import">

                <form>

                  <div class="form-group">

                    <div>

                      <div class="input-group">
                        <span class="input-group-addon">I want to Buy</span>
                        <input type="number"
                                 name="buyC1"
                                 v-validate="modelValidations.buyC1"
                                 v-model="model.buyC1"
                                 class="form-control">
                        <span class="input-group-addon">฿</span>
                      </div>

                      <small class="text-danger" v-show="buyC1.invalid">
                        {{ getError('buyC1') }}
                      </small>
                    </div>

                  </div>

                  <button type="submit" class="btn btn-fill btn-info">
                        BUY
                  </button>

                </form>

              </v-tab>

              <v-tab title="Sell" icon="ti-export">

                <form>

                    <div class="form-group">

                      <div>
                        <div class="input-group">
                          <span class="input-group-addon">I want to Sell</span>
                          <input type="number"
                                   name="sellC1"
                                   v-validate="modelValidations.sellC1"
                                   v-model="model.sellC1"
                                   class="form-control">
                          <span class="input-group-addon">฿</span>

                        </div>
                        <small class="text-danger" v-show="sellC1.invalid">
                          {{ getError('sellC1') }}
                        </small>
                      </div>

                    </div>

                    <button type="submit" class="btn btn-fill btn-info">
                          SELL
                    </button>

                </form>

              </v-tab>

            </vue-tabs>

          </el-col>

        </el-row>

      </div> <!-- end card-content -->

    </div> <!-- end card -->

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
          }],

          exchanges: [{
            value: 'Kraken',
            label: 'Kraken'
          }, {
            value: 'BitStamp',
            label: 'BitStamp'
          }, {
            value: 'Gadex',
            label: 'Gadex'
          }, {
            value: 'Poloniex',
            label: 'Poloniex'
          }, {
            value: 'Coinbase',
            label: 'Coinbase'
          }]
        },
        modelValidations: {
          buyC1: {
            required: true
          },
          buyC2: {
            required: true
          },
          sellC1: {
            required: true
          },
          sellC2: {
            required: true
          }

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
