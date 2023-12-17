<template>
  <div class="start_and_mining">
    <div class="mining_parent pt-0 transparent">
      <div class="container transparent">
        <div class="start_title bigger"> MINING CONTRACTS</div>
        <div class="start_box_description bigger2">
          We offer a variety of cloud mining investment contracts, <br> ensuring stable and reliable profits.
        </div>
        <div class="mining_items">
          <SingleMining v-for="(item, index) in data" :key="item" :item="item" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" :data-aos-delay="index + '50'" />
        </div>
        <!-- <div class="text-center d-flex justify-content-center center text-white">{{ data?.length }} records</div> -->

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

<style scoped>
.bigger {
  font-size: 35px;
}

.bigger2 {
  font-size: 18px;

}
</style>
