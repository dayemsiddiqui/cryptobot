<template>
  <div class="card">
      <div class="card-header">
        <h4 class="card-title">Manual Buy/Sell</h4>
        <p class="category">Allows you to manually make a Buy and Sell Order apart from your running bot</p>
      </div>
      <div class="col-md-offset-1">
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
      <el-select
        class="select-info col-md-offset-1"
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
      <div>
      Last  | High | Low | 24 Hour Volume | Weighted Average
      </div>
      </div>
      <vue-tabs class="card-content row" direction="vertical" v-model="currentTab">
        <v-tab title="Buy">
        <form class="form-horizontal">
          <fieldset>
            <div class="form-group">
              <div class="col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">I want to buy</span>
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
              <div class="col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">I want to buy</span>
                  <input type="number"
                           name="buyC2"
                           v-validate="modelValidations.buyC2"
                           v-model="model.buyC2"
                           class="form-control">
                  <span class="input-group-addon">$</span>
                      
                </div>
                <small class="text-danger" v-show="buyC2.invalid">
                  {{ getError('buyC2') }}
                </small>
              </div>
            </div>
            <button type="submit" class="btn btn-fill btn-info">
                  BUY
                </button>
          </fieldset>
        </form>
        </v-tab>
        <v-tab title="Sell">
        <form class="form-horizontal">
          <fieldset>
            <div class="form-group">
              <div class="col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">I want to sell</span>
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
              <div class="col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">I want to sell</span>
                  <input type="number"
                           name="sellC2"
                           v-validate="modelValidations.sellC2"
                           v-model="model.sellC2"
                           class="form-control">
                  <span class="input-group-addon">$</span>
                      
                </div>
                <small class="text-danger" v-show="sellC2.invalid">
                  {{ getError('sellC2') }}
                </small>
              </div>
            </div>
            <button type="submit" class="btn btn-fill btn-info">
                  SELL
                </button>
          </fieldset>
        </form>
        </v-tab>
      </vue-tabs>
    </div>
  </div>
</template>
<script>
import {mapFields} from 'vee-validate'

export default {
  computed: {
      ...mapFields(['buyC1','buyC2','sellC1','sellC2','c1List','c2List'])
    },
  data() {
    return {
      tabTitles: ['Buy', 'Sell'],
      currentTab: 'Buy',
      model:{
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
      modelValidations:{
        buyC1 :{
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
    }
  }

}
</script>

