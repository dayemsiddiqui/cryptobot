<template>
  <div>
    <!--Bot cards-->
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6" v-for="strategy in strategyList">
        <strategy-card>
          <div slot="content">
            <div class="col-lg-7 col-sm-7 text-left">
              <div class="row">
                <div class="row">
                  <div class="pull-left">
                    <div class="col-sm-12">
                      <div v-on:mouseenter="bot.hover= !bot.hover" v-on:mouseleave="bot.hover= !bot.hover">
                        <div v-show="bot.name.edit==false">
                          <p>Name: <b>{{bot.name.data}}</b>
                          <span v-on:click="bot.name.edit=true" v-show="bot.hover"><i class="ti-pencil"></i></span></p>
                        </div>
                        <div  v-show = "bot.name.edit==true">
                          <label>Name: </label>
                          <!-- <span style="font-size: 16px">Name: </span> -->
                          <input
                              v-model = "bot.name.data"
                              v-on:blur="bot.name.edit=false; $emit('update')"
                              @keyup.enter = "bot.name.edit=false; $emit('update')"
                          >
                        </div>
                      </div>

                      <p>Strategy: <b>{{bot.strategy}}</b></p>
                      <p>Exchange: <b>{{bot.exchange}}</b></p>
                      <p>Status: <b>{{bot.status}}</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-sm-5 text-right">
              <div class="row">
                <div class="col-sm-12">
                  <button class="btn btn-icon btn-info"><i class="ti-search"></i></button>
                  <router-link :to="{name: 'Bot Detail', params: {'id': bot.id}}" class="btn btn-icon btn-instagram"><i class="ti-pencil"></i></router-link>
                  <button class="btn btn-icon"><i class="ti-control-pause"></i></button>
                  <button class="btn btn-icon btn-google"><i class="ti-close"></i></button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <br>
                  <p>Last 24 Hours: <b v-bind:class="bot.profits.last24hours<0?'red':'green'">{{bot.profits.last24hours}}%</b><br>
                  Last 7 Days: <b v-bind:class="bot.profits.last7days<0?'red':'green'">{{bot.profits.last7days}}%</b></p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="text-right" slot="footer">
            <em>uptime: {{bot.uptime}}</em>
          </div> -->
        </bot-card>
      </div>
      <div class="col-lg-6">
        <div class="btn big-add-button">
          <i class="ti-plus"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<!--
    * This is mois's stuff, commenting it to experiment with
    * my own strategy list design.


<template>

  <el-row :gutter="40">

    <el-col :span="12">

      <el-table 
        class="table table-no-bordered table-hover"
        :data="strategyList"
        highlight-current-row
        :row-class-name="tableRowClassName" 
        @current-change="handleCurrentChange">

        <el-table-column type="index">
        </el-table-column>
        
        <el-table-column prop="name"
                         label="Strategy">
        </el-table-column>

        <el-table-column prop="type"
                         label="Type">
        </el-table-column>

      </el-table>

    </el-col>


    <el-col :span="12">

      <div v-bind:class="isSelected ? 'card' : ''">
       <el-row>
        <div class="card-header text-center">
          <h1 class="card-title">
            {{ selectedStrategy.name }}
          </h1>
        </div>

        <div class="card-content text-center">
          {{ selectedStrategy.type }}
        </div>

       </el-row>
      </div>

    </el-col>

  </el-row>

</template>
-->
<script>

  import Vue from 'vue'
  import 'element-ui/lib/theme-default/index.css'
  import {Row, Col, Table, TableColumn} from 'element-ui'

  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Table)
  Vue.use(TableColumn)


  export default {
    data () {
      return {
        isSelected: false,
        selectedStrategy: {
          name: '',
          type: ''
        },
        strategies: [{
          name: 'CCI',
          type: 'Free'
        }, {
          name: 'DEMA',
          type: 'Free'
        }, {
          name: 'MACD',
          type: 'Free'
        }, {
          name: 'PPO',
          type: 'Premium'
        }, {
          name: 'RSI',
          type: 'Premium'
        }, {
          name: 'StochRSI',
          type: 'Premium'
        }, {
          name: 'TSI',
          type: 'Purchased'
        }, {
          name: 'UO',
          type: 'Purchased'
        }, {
          name: 'XYZ',
          type: 'Purchased'
        }]
      }
    },

    methods: {
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