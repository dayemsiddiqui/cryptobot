<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <el-table :data="tableData">
        <el-table-column type="index">

        </el-table-column>
        <el-table-column prop="name"
                         label="Exchange Name">
        </el-table-column>
        <el-table-column prop="type"
                         label="Type">
        </el-table-column>
        <el-table-column prop="amount"
                         label="Amount">
        </el-table-column>
        <el-table-column prop="status"
                         label="Status">
        </el-table-column>
        <el-table-column
          label="Actions">
          <template slot-scope="props">
            <a class="btn btn-simple btn-warning btn-xs btn-icon edit" @click="handleEdit(props.$index, props.row)"><i class="ti-pencil-alt"></i></a>
            <a class="btn btn-simple btn-danger btn-xs btn-icon remove"  @click="handleDelete(props.$index, props.row)"><i class="ti-close"></i></a>
          </template>
        </el-table-column>
      </el-table>

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
        {name: 'Polonix', type: 'Buy', amount: '$500', status: 'completed'},
        {name: 'Kraken', type: 'Sell', amount: '$540', status: 'pending'},
        {name: 'Coinbase', type: 'Buy', amount: '$56', status: 'cancelled'},
        {name: 'Bitfinex', type: 'Sell', amount: '$78', status: 'completed'},
        {name: 'Bittrex', type: 'Buy', amount: '$976', status: 'cancelled'}
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
