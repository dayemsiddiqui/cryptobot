<template>
    <div>
        <!--Bot cards-->
        <div class="col-md-6">
            <div :class="strategy.type=='Premium'?'premium-tint card':'card'" v-for="strategy in strategies">
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
                                                <el-tag :key="strategy.type" :type="strategy.type=='Premium'?'success':'primary'">
                                                    <b>{{strategy.type}}</b>
                                                </el-tag>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <p>
                                                <b>{{ strategy.name }}</b>
                                            </p>
                                            <el-tag :key="exchange" v-for="exchange in strategy.exchanges" v-if="exchange.support==1" type="info">
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

        <div class="col-md-6">
          <div class="card">
            <div class="card-content">
              <div class="row">
                <div class="col-md-12">
                <br>
                  <h4 class="title">Panda Bear</h4>
                  <p>
                    <el-tag type="success">v29.8</el-tag>
                    <el-tag type="info">Open-Source</el-tag>
                    <el-tag type="success"><i class="fa fa-user"></i> smat26</el-tag>
                    <el-tag :key="strategies[1].type" :type="strategies[1].type=='Premium'?'success':'primary'">
                        <b>{{strategies[1].type}}</b>
                    </el-tag>
                    <em class="text-muted">Updated 3 days ago</em>
                  </p>
                  <hr>
                  <h5><b>Introduction</b></h5>

                  <p>Most people want their bot to be as simple to configure, as possible. This bot is the complete opposite: it has so many configurable parameters, one can go crazy, analyzing them all (and more to come in future versions).</p>

                  <p>It is called "constructor", as there is no predefined behavior for this bot: almost any indicator-based strategy can be configured here. This is probably the most versatile script here and with proper configuration can emulate many other bots. Due to the comprehensive (and expanding) set of parameters, this is also probably the most hard to configure bot here. Your luck may vary, so make sure to test your settings.</p>
                  <h5><b>Main Features</b></h5>

                  <p>Almost any indicator-based strategy can be implemented. Full list of features can be seen in the comments below, so this is a simplified list. Many features are unique to this bot. If you see a feature that is not implemented, please write a suggestion in the forum.</p>
                  <ul>
                      <li>Many oscillators: Stochastic, RSI, MFI, Laguerre-based LRSI/LMFI, Fisher Transform. Signal trigger based on early or late crossing of the configured threshold line or, alternatively, based on crossing with its MA.</li>
                      <li>Stochastic and Inverse Fisher Transform can be used to normalize oscillators (for example, to get StochRSI and similar strategies). Both input and result for oscillators can be smoothed with Moving Averages.</li>
                      <li>Trading can be made just with crossing and/or oscillator signals, or they can combine signals for less false trades and better responsiveness (more combination algorithms to come).</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <hr>
              <div class="row">
                <div class="col-md-8">
                  <p><el-tag :key="exchange" v-for="exchange in strategies[1].exchanges" v-if="exchange.support==1" type="info">
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

    data() {
        return {
            strategies: [{
                name: 'Golden Dragon : The Altcoin and Bitcoin Bot',
                type: 'Premium',
                exchanges: [{
                    name: "Poloniex",
                    support: 1,
                }, {
                    name: "Bitstamp",
                    support: 1,
                }, {
                    name: "GDAX",
                    support: 1,
                }, {
                    name: "Huobi",
                    support: 0,
                }, {
                    name: "OkCoin.cn",
                    support: 0,
                }, {
                    name: "WEX.NZ",
                    support: 1,
                }, {
                    name: "CEX.IO",
                    support: 0,
                }, {
                    name: "Bitfinex",
                    support: 0,
                }, {
                    name: "Kraken",
                    support: 0,
                }, {
                    name: "Bittrex",
                    support: 0,
                }, {
                    name: "Binance",
                    support: 0,
                }, {
                    name: "Quoine",
                    support: 0,
                }, {
                    name: "Cryptsy",
                    support: 0
                }],
                price: {
                    amount: 0.005,
                    currency: "btc"
                },
                popularity: 9.8
            }, {
                name: 'Panda Bear',
                type: 'Free',
                exchanges: [{
                    name: "Poloniex",
                    support: 1,
                }, {
                    name: "Bitstamp",
                    support: 1,
                }, {
                    name: "GDAX",
                    support: 1,
                }, {
                    name: "Huobi",
                    support: 0,
                }, {
                    name: "OkCoin.cn",
                    support: 1,
                }, {
                    name: "WEX.NZ",
                    support: 0,
                }, {
                    name: "CEX.IO",
                    support: 0,
                }, {
                    name: "Bitfinex",
                    support: 0,
                }, {
                    name: "Kraken",
                    support: 0,
                }, {
                    name: "Bittrex",
                    support: 0,
                }, {
                    name: "Binance",
                    support: 0,
                }, {
                    name: "Quoine",
                    support: 0,
                }, {
                    name: "Cryptsy",
                    support: 1
                }],
                price: {
                    amount: 0.005,
                    currency: "btc"
                },
                popularity: 5.8
            }, {
                name: 'Golden Dragon : The Altcoin and Bitcoin Bot',
                type: 'Premium',
                exchanges: [{
                    name: "Poloniex",
                    support: 1,
                }, {
                    name: "Bitstamp",
                    support: 1,
                }, {
                    name: "GDAX",
                    support: 1,
                }, {
                    name: "Huobi",
                    support: 0,
                }, {
                    name: "OkCoin.cn",
                    support: 0,
                }, {
                    name: "WEX.NZ",
                    support: 1,
                }, {
                    name: "CEX.IO",
                    support: 0,
                }, {
                    name: "Bitfinex",
                    support: 0,
                }, {
                    name: "Kraken",
                    support: 0,
                }, {
                    name: "Bittrex",
                    support: 0,
                }, {
                    name: "Binance",
                    support: 0,
                }, {
                    name: "Quoine",
                    support: 0,
                }, {
                    name: "Cryptsy",
                    support: 0
                }],
                price: {
                    amount: 0.005,
                    currency: "btc"
                },
                popularity: 7.2
            }, {
                name: 'Golden Dragon : The Altcoin and Bitcoin Bot',
                type: 'Premium',
                exchanges: [{
                    name: "Poloniex",
                    support: 1,
                }, {
                    name: "Bitstamp",
                    support: 1,
                }, {
                    name: "GDAX",
                    support: 1,
                }, {
                    name: "Huobi",
                    support: 0,
                }, {
                    name: "OkCoin.cn",
                    support: 0,
                }, {
                    name: "WEX.NZ",
                    support: 1,
                }, {
                    name: "CEX.IO",
                    support: 0,
                }, {
                    name: "Bitfinex",
                    support: 0,
                }, {
                    name: "Kraken",
                    support: 0,
                }, {
                    name: "Bittrex",
                    support: 0,
                }, {
                    name: "Binance",
                    support: 0,
                }, {
                    name: "Quoine",
                    support: 0,
                }, {
                    name: "Cryptsy",
                    support: 0
                }],
                price: {
                    amount: 0.005,
                    currency: "btc"
                },
                popularity: 9
            }, {
                name: 'Ultimate Moving Average Xing (Open-Source)',
                type: 'Free',
                exchanges: [{
                    name: "Poloniex",
                    support: 1
                }, {
                    name: "Bitstamp",
                    support: 0
                }, {
                    name: "GDAX",
                    support: 1
                }, {
                    name: "Huobi",
                    support: 0
                }, {
                    name: "OkCoin",
                    support: 0
                }, {
                    name: "WEX",
                    support: 0
                }, {
                    name: "CEX",
                    support: 0
                }, {
                    name: "Bitfinex",
                    support: 1
                }, {
                    name: "Kraken",
                    support: 0
                }, {
                    name: "Bittrex",
                    support: 0
                }, {
                    name: "Binance",
                    support: 0
                }, {
                    name: "Quoine",
                    support: 0
                }, {
                    name: "Cryptsy",
                    support: 0
                }],
                popularity: 3.0
            }]
        }
    },

    methods: {
        progressBarStatus: function(val) {
          if (val <= 3) {
            return 'exception'
          } else if (val > 3 && val < 6) {
            return ''
          } else {
            return 'success'
          }
        },

        handleCurrentChange(val) {
            val ? this.isSelected = true : this.isSelected = false;
            this.selectedStrategy = val;
        },

        tableRowClassName(row, rowIndex) {

            // console.log(row.type);

            if (row.type === 'Purchased') {
                return 'purchased';
            } else if (row.type === 'Premium') {
                return 'premium';
            } else {
                return 'free';
            }
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
