<template>
    <div>
        <!--Bot cards-->
        <div class="col-md-6">
            <div
              :class="strategy.type=='Premium'?'premium-tint card':'card'"
              v-for="strategy in strategies"
              v-on:click="handleCurrentStrategy(strategy)"
            >
                <div class="card-content">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="row">
                                <!-- <div class="col-lg-6 col-md-6 col-sm-6"> -->
                                <div class="">
                                    <!-- <strategy-card> -->
                                    <div slot="content">
                                        <div class="col-md-2">
                                            <div class="strategy-type">
                                                <el-tag
                                                    :key="strategy.type"
                                                    :type="strategy.type=='Premium'?'success':'primary'">
                                                    <b>{{strategy.type}}</b>
                                                </el-tag>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <p>
                                                <b>{{ strategy.name }}</b>
                                            </p>
                                            <el-tag
                                                :key="exchange"
                                                v-for="exchange in strategy.exchanges"
                                                v-if="exchange.support==1" type="info"
                                            >
                                                {{ exchange.name }}
                                            </el-tag>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="text-center">
                                                {{ strategy.popularity }} / 10
                                            </div>
                                            <el-progress :show-text="false" :stroke-width="18" :percentage="strategy.popularity*10" :status="progressBarStatus(strategy.popularity)"></el-progress>
                                            <p class="text-center text">Popularity</p>
                                        </div>
                                    </div>
                                    <div slot="footer">
                                    </div>
                                    <!-- </strategy-card> -->
                                </div>
                                <div class="col-lg-6">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="card-footer">
                      <hr/>
                      <slot name="footer"></slot>
                    </div> -->
                </div>
            </div>
            <!-- <div class="btn big-add-button">
                <i class="ti-plus"></i>
            </div> -->
        </div>

        <div
          class="col-md-6"
          v-show="isSelected"
          >
           <div class="card">
            <div class="card-content">
              <div class="row">
                <div class="col-md-12">
                <br>
                  <h4 class="title">{{ strategy_detail.name }}</h4>
                  <p>
                    <el-tag type="success">{{ strategy_detail.version }}</el-tag>
                    <!-- <el-tag type="info">Open-Source</el-tag> -->
                    <el-tag type="success"><i class="fa fa-user"></i> {{ strategy_detail.owner_user }}</el-tag>
                    <el-tag :key="strategy_detail.type" :type="strategy_detail.type=='Premium'?'success':'primary'">
                        <b>{{strategy_detail.type}}</b>
                    </el-tag>
                    <em class="text-muted">Updated {{ strategy_detail.last_updated }}</em>
                  </p>
                  <hr>
                  <h5><b>Introduction</b></h5>
                  <p v-for="intro in strategy_detail.introduction">
                    {{ intro }}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <hr>
              <div class="row">
                <div class="col-md-8">
                  <p><el-tag :key="exchange" v-for="exchange in strategy_detail.exchanges" v-if="exchange.support==1" type="info">
                    {{ exchange.name }}
                  </el-tag>
                </p>
                </div>
                <div class="col-md-4 text-right">
                  <button class="btn btn-primary">More Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import StrategyCard from 'components/UIComponents/Cards/StrategyCard.vue'

// TODO: to implement a moving arrow for strategy
// list (check sidebar moving arrow for example)

export default {
  components: {
    StrategyCard
  },

  methods: {
    progressBarStatus: function (val) {
      if (val <= 3) {
        return 'exception'
      } else if (val > 3 && val < 6) {
        return ''
      } else {
        return 'success'
      }
    },

    handleCurrentStrategy (strategy) {
      this.isSelected = true
      this.strategy_detail = {
        name: strategy.name,
        version: strategy.version,
        owner_user: strategy.owner_user,
        last_updated: strategy.last_updated,
        introduction: strategy.introduction,
        type: strategy.type,
        exchanges: strategy.exchanges
      }
    }
  },

  data () {
    return {
      isSelected: false,
      strategy_detail: {
        name: '',
        version: '',
        owner_user: '',
        last_updated: '',
        introduction: '',
        type: '',
        exchanges: ''
      },
      strategies: [{
        name: ' 🐲 Golden Dragon : The Altcoin and Bitcoin Bot',
        type: 'Premium',
        version: 'v5.8',
        owner_user: 'spokzers',
        introduction: ['The Golden Dragon chooses wisely! This Alt-coin and Bitcoin trading bot automatically trades the "best" settings for you. No more guesswork. Unlike other bots, which run the same settings, this clever beast chooses the appropriate timing. It analyzes every tick. It places trades chunk by chunk based on the number of orders you specify.', '311,220.17% in BTC/USD backtest. (Over three hundred thousand percent.)', 'It traded one thousand dollars to three million dollars (1000 USD to 3,097,747.02 USD) in backtesting.'],
        last_updated: '3 days ago',
        exchanges: [{
          name: 'Poloniex',
          support: 1
        }, {
          name: 'Bitstamp',
          support: 1
        }, {
          name: 'GDAX',
          support: 1
        }, {
          name: 'Huobi',
          support: 0
        }, {
          name: 'OkCoin.cn',
          support: 0
        }, {
          name: 'WEX.NZ',
          support: 1
        }, {
          name: 'CEX.IO',
          support: 0
        }, {
          name: 'Bitfinex',
          support: 0
        }, {
          name: 'Kraken',
          support: 0
        }, {
          name: 'Bittrex',
          support: 0
        }, {
          name: 'Binance',
          support: 0
        }, {
          name: 'Quoine',
          support: 0
        }, {
          name: 'Cryptsy',
          support: 0
        }],
        price: {
          amount: 0.005,
          currency: 'btc'
        },
        popularity: 9.8
      }, {
        name: '🐼 Trading Panda',
        type: 'Free',
        version: 'v1.48',
        owner_user: 'codingpanda213',
        introduction: ["The bot tries to trade often and quickly and make a little gains with each trade. It's not trying to make you rich over night but aims for consistent results in most conditions.", 'It does so by buying in a local low and setting a sell order right after, this means that the bot is never selling at a loss and you pay on most exchanges less/no fees as a maker.', "Additional each bot is slightly randomised to make sure two bots won't interfere with each other "],
        last_updated: '9 hours ago',
        exchanges: [{
          name: 'Poloniex',
          support: 1
        }, {
          name: 'Bitstamp',
          support: 1
        }, {
          name: 'GDAX',
          support: 1
        }, {
          name: 'Huobi',
          support: 0
        }, {
          name: 'OkCoin.cn',
          support: 1
        }, {
          name: 'WEX.NZ',
          support: 0
        }, {
          name: 'CEX.IO',
          support: 0
        }, {
          name: 'Bitfinex',
          support: 0
        }, {
          name: 'Kraken',
          support: 0
        }, {
          name: 'Bittrex',
          support: 0
        }, {
          name: 'Binance',
          support: 0
        }, {
          name: 'Quoine',
          support: 0
        }, {
          name: 'Cryptsy',
          support: 1
        }],
        price: {
          amount: 0.005,
          currency: 'btc'
        },
        popularity: 5.8
      }, {
        name: ' 🐭 Ultimate Moving Average Xing (Open-Source)',
        type: 'Free',
        version: 'v1.0',
        owner_user: 'Ferretz',
        introduction: ['Free, (newly) open-source and donation-based customizable (Types and Ratios) MA Crossing bot with the following extra features:', '  1. Many Moving Averages to chose from for defining your own rules', '  2. Different threshold if the move is profitable (based on the last operation)', '  3. Buy at market price or at defined limit price (% of market price)', '  4. MA Delta and thresholds are rendered on graph for easy finetuning of the MA parameters (Type, Short, Long, Profitable threshold, Unprofitable threshold) to get the desired behaviour for a specific market', 'It will perform only 1 BUY or SELL operation at the time, wait until conditions are met to perform the opposite operation and wait again until the next good moment (or if the situation is getting too bad).'],
        last_updated: '2 Months ago',

        exchanges: [{
          name: 'Poloniex',
          support: 1
        }, {
          name: 'Bitstamp',
          support: 0
        }, {
          name: 'GDAX',
          support: 1
        }, {
          name: 'Huobi',
          support: 0
        }, {
          name: 'OkCoin',
          support: 0
        }, {
          name: 'WEX',
          support: 0
        }, {
          name: 'CEX',
          support: 0
        }, {
          name: 'Bitfinex',
          support: 1
        }, {
          name: 'Kraken',
          support: 0
        }, {
          name: 'Bittrex',
          support: 0
        }, {
          name: 'Binance',
          support: 0
        }, {
          name: 'Quoine',
          support: 0
        }, {
          name: 'Cryptsy',
          support: 0
        }],
        popularity: 3.0
      }]
    }
  }
}
</script>
<style>
@import url("//unpkg.com/element-ui@2.0.4/lib/theme-chalk/index.css");

/* oldlace */

.el-table .free {
    background: #f0f9eb;
}


/* green */

.el-table .premium {
    background: #fdf5e6;
}


/* black */

.el-table .purchased {
    background: #e3e3e3;
}


/* for selected row */

.el-table .current-row {
    background: none;
}
</style>
