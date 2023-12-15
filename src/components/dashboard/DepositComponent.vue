<template>
  <div class="deposit">
    <div class="contant">
      <tabReusable title="Deposit"  tab="Cryptocurrency "/>
    </div>
  </div>
</template>

<script>
import tabReusable from '../mini_components/tab-reusable.vue';
export default {
  name: "DepositComponent",
  components: {
    tabReusable,
  }
}
</script>

<style scoped>
.deposit {
  margin: 10px 0 0 64px;
  width: 100%;
  height: auto;
}
.contant{
  width: 1144px;
  height: 784px;
}

</style>