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