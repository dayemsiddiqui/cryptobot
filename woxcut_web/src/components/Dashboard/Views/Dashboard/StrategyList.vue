<template>

  <div class="card">

    <div class="card-header">
      <h4 class="card-title">Strategy List</h4>
      <p class="category">List of Strategies</p>
    </div>

    <div class="card-content row">

      <div class="col-sm-12">

        <el-table class="table table-no-bordered table-hover"
                  :data="strategies">

          <el-table-column type="index">
          </el-table-column>
          
          <el-table-column prop="name"
                           label="Strategy">
          </el-table-column>

          <el-table-column prop="type"
                           label="Type">
          </el-table-column>

          <el-table-column
            label="Actions">
            <template scope="props">
              <a class="btn btn-simple btn-info btn-xs btn-icon like" @click="handleLike(props.$index, props.row)"><i class="ti-heart"></i></a>
              <a class="btn btn-simple btn-warning btn-xs btn-icon edit" @click="handleEdit(props.$index, props.row)"><i class="ti-pencil-alt"></i></a>
              <a class="btn btn-simple btn-danger btn-xs btn-icon remove"  @click="handleDelete(props.$index, props.row)"><i class="ti-close"></i></a>
            </template>
          </el-table-column>

        </el-table>

      </div> <!-- end col-sm-12 -->
    </div> <!-- end card-content row -->

  </div> <!-- end card -->

</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      strategies: [
      {
        name: CCI,
        type: Free
      },
      {
        name: DEMA,
        type: Free
      },
      {
        name: MACD,
        type: Free
      },
      {
        name: PPO,
        type: Free
      },
      {
        name: RSI,
        type: Free
      },
      {
        name: StochRSI,
        type: Free
      },
      {
        name: TSI,
        type: Free
      },
      {
        name: UO,
        type: Free
      },
    ]
  }
},
  methods: {
    handleLike (index, row) {
      alert(`Your clicked on Like button`)
    },
    handleEdit (index, row) {
      alert(`Your want to edit ${row.name}`)
    },
    handleDelete (index, row) {
      alert(`Your want to delete ${row.name}`)
    }
  }
}

</script>

<style scoped>

</style>
