<template>
  <div class="card">
    <div class="card-content">
      <div class="row">
        
        <div class="col-md-6">
          <el-select class="select-box select-primary"
                     size="large"
                     placeholder="Select Exchange"
                     style="width:100%"
                     v-model="exchange.selected">
            <el-option v-for="option in exchange.exchanges"
                       class="select-primary"
                       :value="option.value"
                       :label="option.label"
                       :key="option.label">
            </el-option>
          </el-select> <!--  end exchange select  -->
        </div> <!--  end col-md-2  -->

        <div class="col-md-6">
          <el-select class="select-primary select-box"
                     size="large"
                     placeholder="Select Strategy"
                     style="width:100%"
                     v-model="strategy.selected">
            <el-option v-for="option in strategy.strategies"
                       class="select-primary"
                       :value="option.value"
                       :label="option.label"
                       :key="option.label">
            </el-option>
          </el-select> <!--  end strategy select  -->
        </div> <!--  end col-md-2  -->
      </div> <!-- end row -->

      <div v-if="strategy.selected && exchange.selected" class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="card">
            <form method="" action="">
              <div class="card-header text-center">
                <h2 class="card-title">
                  Parameters ({{ strategy.selected }}/{{ exchange.selected }})
                </h2>
              </div>

              <div class="card-content">
                <div class="form-group">
                  <label>Short</label>
                  <input type="text" placeholder="Value" class="form-control">
                </div>

                <div class="form-group">
                  <label>Down</label>
                  <input type="text" placeholder="Value" class="form-control">
                </div>

                <div class="form-group">
                  <label>Up</label>
                  <input type="text" placeholder="Value" class="form-control">
                </div>

                <div class="form-group">
                  <label>Long</label>
                  <input type="text" placeholder="Value" class="form-control">
                </div>

                <hr>

                <div class="form-group">
                  <label>Candle Size Duration</label>
                  <input type="text" placeholder="Hours" class="form-control">
                </div>

                <div class="form-group">
                  <label>Warmup Period</label>
                  <input type="text" placeholder="Hours" class="form-control">
                </div>

                <button id="backtest-btn" type="submit" class="btn btn-fill btn-info center-block">Backtest</button>

              </div> <!-- end card-content div-->
            </form> <!-- end form div-->
          </div> <!-- end card div-->
        </div> <!--  end col-md-12  -->
      </div> <!--  end row  -->
    
    </div> <!-- end main card-content div -->
  </div> <!-- end main card div -->

</template>

<script>

  export default {
    components: {
    },
    data () {
      return {
        exchange: {
          selected: '',
          exchanges: [
            {value: 'Bittrex', label: 'Bittrex'},
            {value: 'Bitstamp', label: 'BitStamp'},
            {value: 'UrduBit', label: 'UrduBit'},
            {value: 'Coinbase', label: 'Coinbase'}
          ]
        },
        strategy: {
          selected: '',
          strategies: [
            {value: 'DEMA', label: 'DEMA'},
            {value: 'MACD', label: 'MACD'},
            {value: 'RSI', label: 'RSI'},
            {value: 'TSI', label: 'TSI'}
          ]
        }
      }
    }
  }

</script>

<style scoped>
  #backtest-btn {
    /*margin: auto;*/
  },
  .select-box{
    /*width: 100%;*/
  },
  .card{
    /*min-height: 100%; */
  }
</style>
