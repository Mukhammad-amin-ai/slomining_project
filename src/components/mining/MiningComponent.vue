<template>
  <div class="mining_parent transparent">
    <div class="container transparent">
      <div class="start_title">CHOOSE MINING CONTRACTS</div>
      <div class="start_box_description">
        We offer a variety of cloud mining investment contracts, ensuring stable and reliable
        profits.
      </div>
      <div class="mining_items">
        <div v-for="item in data" :key="item">
          <SingleMining :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/static/data.js'
import SingleMining from '@/components/mining/SingleMining.vue'

export default {
  name: 'MiningComponent',
  components: { SingleMining },
  data() {
    return {
      data
    }
  }
}
</script>

<style scoped></style>
