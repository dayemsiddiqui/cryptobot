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




        </el-row>

        <hr>

        <el-row type="flex" justify="center">
          <el-col :span="12">
            <div class="category">
              Last  | High | Low | 24 Hour Volume | Weighted Average
            </div>
          </el-col>
        </el-row>

        <hr>


        <el-row type="flex" justify="space-around">
          
          <el-col :span="8">
        

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
                      <div class="input-group">
                        <span class="input-group-addon">Buy</span>
                        <input type="number"
                                 name="buyC1"
                                 v-validate="modelValidations.buyC1"
                                 v-model="model.buyC1"
                                 class="form-control">
                        <span class="input-group-addon"><i :class="getCurrencyIcon()"></i></span>
                        <small class="text-danger" v-show="buyC1.invalid">
                          {{ getError('amount to buy') }}
                        </small>

                        </div>
                        
                      <div class="input-group">

                        <el-select
                          class="select-info"
                          size="large"
                          placeholder="First Currency"
                          v-model="model.c1buyList">
                            <el-option
                              v-for="item in model.currencies"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                      </div>
                    </div>

                      <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon">with</span>
                        <input type="number"
                                 name="buyC2"
                                 v-validate="modelValidations.buyC2"
                                 v-model="model.buyC2"
                                 class="form-control">
                        <span class="input-group-addon"><i :class="getCurrencyIcon()"></i></span>
                      </div>
                      


                      <div class="input-group">
                      <small class="text-danger" v-show="buyC2.invalid">
                        {{ getError('buy with currency') }}
                      </small>
                      <el-select
                        class="select-info"
                        size="large"
                        placeholder="First Currency"
                        v-model="model.c2buyList">
                          <el-option
                            v-for="item in model.currencies"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </div>
                    </div>

                  <button  type="button" v-on:click="confirmTransaction('buy')" class="btn btn-fill btn-info">
                        BUY
                  </button>

                </form>

              </v-tab>

              <v-tab title="Sell" icon="ti-export">

                <form>
                  <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon">Sell</span>
                        <input type="number"
                                 name="sellC1"
                                 v-validate="modelValidations.sellC1"
                                 v-model="model.sellC1"
                                 class="form-control">
                        <span class="input-group-addon"><i :class="getCurrencyIcon()"></i></span>
                        <small class="text-danger" v-show="sellC1.invalid">
                          {{ getError('amount to sell') }}
                        </small>

                        </div>

                      <div class="input-group">

                        <el-select
                          class="select-info"
                          size="large"
                          placeholder="Currency to sell"
                          v-model="model.c1sellList">
                            <el-option
                              v-for="item in model.currencies"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                      </div>
                    </div>

                      <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon">for</span>
                        <input type="number"
                                 name="sellC2"
                                 v-validate="modelValidations.sellC2"
                                 v-model="model.sellC2"
                                 class="form-control">
                        <span class="input-group-addon"><i :class="getCurrencyIcon()"></i></span>
                      </div>

                      <div class="input-group">
                      <small class="text-danger" v-show="sellC2.invalid">
                        {{ getError('sell for amount') }}
                      </small>
                      <el-select
                        class="select-info"
                        size="large"
                        placeholder="Currency to buy"
                        v-model="model.c2sellList">
                          <el-option
                            v-for="item in model.currencies"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </div>
                    </div>

                  <button  type="button" v-on:click="confirmTransaction('sell')" class="btn btn-fill btn-info">
                        SELL
                  </button>

                </form>

              </v-tab>

            </vue-tabs>
          </el-col>

          <el-col :span="4">
            <p>Trading Pairs:</p>
          </el-col>
        </el-row>

      </div> <!-- end card-content -->

    </div> <!-- end card -->

</template>


<script>
  import {mapFields} from 'vee-validate'
  import swal from 'sweetalert2'
  import Transactions from 'src/services/Transactions'

  export default {
    computed: {
      ...mapFields(['buyC1', 'buyC2', 'sellC1', 'sellC2', 'c1buyList', 'c2buyList', 'c1sellList', 'c2sellList'])
    },
    created () {
      // runs after component is created
    },
    data () {
      return {
        tabTitles: ['Buy', 'Sell'],
        currentTab: '',
        currentTabColor: '',
        model: {

          buyC1: '',
          buyC2: '',
          sellC1: '',
          sellC2: '',
          c1buyList: '',
          c2buyList: '',
          c1sellList: '',
          c2sellList: '',
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
      getCurrencyIcon () {
        return 'fa fa-btc'
      },
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
      },
      confirmTransaction (action) {
        swal({
          html:
            '<p>Are you sure you want to place this order?</p>',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          reverseButtons: true,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return new Promise((resolve) => {
              let payload
              if (action === 'buy') {
                payload = {
                  buy_amount: this.buyC1,
                  buy_currency: this.c1buyList,
                  sell_currency: this.c2buyList,
                  type: action
                }
              } else if (action === 'sell') {
                payload = {
                  sell_amount: this.sellC1,
                  buy_currency: this.c1sellList,
                  sell_currency: this.c2sellList,
                  type: action
                }
              } else {
                console.log('Action type is: ', action)
              }
              resolve(Transactions.placeOrder(payload))
            })
          },
          allowOutsideClick: () => !swal.isLoading()
        }).then((result) => {
          console.log(result)
          if (result.data === 'success') {
            swal({
              type: 'success',
              confirmButtonText: 'OK',
              text: 'Order placed Successfully'
            })
          } else {
            swal({
              type: 'error',
              text: `Order Failed: ${result.data.error}
              Please verify whether you have suffcient funds.`
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

  @import url("//unpkg.com/empty-cells: ;lement-ui@2.0.4/lib/theme-chalk/index.css");


</style>
