<template>
  <div class="card">
    <div class="card-content">
      <div class="row">
        <div class="col-xs-12">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'exchange-card'
  }

</script>
<style scoped>
  .card-content{
    min-height: 80px
  }
</style>
