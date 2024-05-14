<template>
  <div class="mining_parent transparent">
    <div class="container transparent">
      <div class="start_title">CHOOSE MINING CONTRACTS</div>
      <div class="start_box_description">
        We offer a variety of cloud mining investment contracts, ensuring stable and reliable
        profits.
      </div>
      <div class="mining_items">
        <SingleMining v-for="(item, index) in products" :key="item" :userId="userId" :item="item" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" :data-aos-delay="index + '50'" />
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
      data
    }
  },
  computed:{
    ...mapState('Api',['products']),
    ...mapState('Api',['userId'])
  },
  methods:{
     fetchProducts(){
      this.$store.dispatch('Api/fetchProduct')
       this.$store.dispatch('Api/fetchData')
    }
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style scoped></style>
