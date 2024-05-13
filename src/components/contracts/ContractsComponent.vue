<template>
  <div class="start_and_mining">
    <div class="mining_parent pt-0 transparent">
      <div class="container transparent">
        <div class="start_title bigger"> MINING CONTRACTS</div>
        <div class="start_box_description bigger2">
          We offer a variety of cloud mining investment contracts, <br> ensuring stable and reliable profits.
        </div>
        <div class="mining_items">
          <SingleMining v-for="(item, index) in products" :key="item" :item="item" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" :data-aos-delay="index + '50'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/static/data.js'
import SingleMining from '@/components/mining/SingleMining.vue'
import { mapState } from 'vuex'

export default {
  name: 'MiningComponent',
  components: { SingleMining },
  data() {
    return {
      data,
      product: []
    }
  },
  computed: {
    ...mapState('Api', ['products'])
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch('Api/fetchProduct')
    }
  },
  mounted() {
    this.fetchProducts()
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
