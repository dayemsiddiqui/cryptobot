<template>

  <el-row :gutter="40">

    <el-col :span="12">

      <el-table 
        class="table table-no-bordered table-hover"
        :data="strategyList"
        highlight-current-row
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

    </el-col> <!-- end el-col -->


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
      </div>  <!-- end card div -->

    </el-col> <!-- end el-col -->

  </el-row> <!-- end el-row -->

</template>

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
        strategyList: [{
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
          type: 'Free'
        }, {
          name: 'RSI',
          type: 'Free'
        }, {
          name: 'StochRSI',
          type: 'Free'
        }, {
          name: 'TSI',
          type: 'Free'
        }, {
          name: 'UO',
          type: 'Free'
        }]
      }
    },

    methods: {
      handleCurrentChange(val) {
        val ? this.isSelected = true : this.isSelected = false;
        this.selectedStrategy = val;
        console.log(this.selectedStrategy);
      }
    }
  }

</script>

<style scoped>

</style>