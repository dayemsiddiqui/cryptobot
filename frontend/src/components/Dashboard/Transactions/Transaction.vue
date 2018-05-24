<template>
  <div>
    <!--Stats cards-->
    <div class="row">
    
      <div class="table-striped el-table--fit el-table--enable-row-hover el-table--enable-row-transition">
        <el-table :data="tableData">
          <el-table-column type="index">

          </el-table-column>
          <el-table-column prop="name"
                           label="Exchange Name">
          </el-table-column>
          <el-table-column prop="type"
                           label="Type">
          </el-table-column>

          <el-table-column prop="b_currency"
                           label="Currency">
          </el-table-column>

          <el-table-column prop="b_amount"
                           label="Buy">
          </el-table-column>

          <el-table-column prop="s_currency"
                           label="Currency">
          </el-table-column>

          <el-table-column prop="s_amount"
                           label="Sell">
          </el-table-column>

          <el-table-column prop="date"
                           label="Date">
          </el-table-column>
        <!--   <el-table-column
            label="Actions">
            <template slot-scope="props">
              <a class="btn btn-simple btn-warning btn-xs btn-icon edit" @click="handleEdit(props.$index, props.row)"><i class="ti-pencil-alt"></i></a>
              <a class="btn btn-simple btn-danger btn-xs btn-icon remove"  @click="handleDelete(props.$index, props.row)"><i class="ti-close"></i></a>
            </template>
          </el-table-column> -->
        </el-table>
      </div>

    </div>


  </div>
</template>
<script>

  export default {
    components: {
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        tableData: [
        {name: 'Polonix', type: 'Trade', b_currency: 'ETH', b_amount: '0.2', s_currency: 'BTC', s_amount: '0.02', date: '26/Dec/2017'},
        {name: 'Kraken', type: 'Trade', b_currency: 'LTC', b_amount: '0.5', s_currency: 'BCH', s_amount: '0.3', date: '2/Jan/2018'},
        {name: 'Coinbase', type: 'Deposit', b_currency: 'USD', b_amount: '300', s_currency: '', s_amount: '', date: '3/Jan/2018'},
        {name: 'Bitfinex', type: 'Trade', b_currency: 'BTC', b_amount: '0.015', s_currency: 'ETH', s_amount: '21', date: '22/Feb/2018'},
        {name: 'Bittrex', type: 'Withdraw', b_currency: '', b_amount: '', s_currency: 'BTC', s_amount: '0.5', date: '2/Mar/2018'}
        ]
      }
    },

    methods: {
      handleDelete (index, row) {
        console.log('Index and Props', index, row)
        this.tableData = this.tableData.filter((value, arrInd) => arrInd !== index)
        this.$notify({
          component: {
            template: `<span>Transaction has been removed</span>`
          },
          horizontalAlign: 'right', // right | center | left
          verticalAlign: 'bottom', // top | bottom
          type: 'danger'  // info | success | warning | danger
        })
      }
    }
  }

</script>
<style>

</style>
