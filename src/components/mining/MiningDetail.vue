<template>
  <div class="mining_detail">
    <div class="container">
      <router-link to="/">
        <button class="go">Go Back</button>
      </router-link>
      <div class="mining_detail_card">
        <div class="detail_card_left">
          <img :src="products.image" :alt="products.name" class="detail_card_left_image img-fluid rounded" />
        </div>
        <div class="detail_card_right d-flex flex-column justify-content-start">
          <div class="detail_card_right_name">
            {{ products.name }}
          </div>
          <div class="item_right_heading">
            <div class="item_term">
              <div class="term_title">Contract Term</div>
              <div class="term_content">
                {{ products.contract_term }}
              </div>
            </div>
            <div class="item_term">
              <div class="term_title">Contract Price</div>
              <div class="term_content">
                {{ products.contract_price }}
              </div>
            </div>
          </div>
          <div class="item_right_body">
            <div class="item_term">
              <div class="term_title">Daily Rewards</div>
              <div class="term_content">
                {{ products.daily_rewards }}
              </div>
            </div>
            <div class="item_term mt-2">
              <div class="term_title">3 Days Fixed Return:</div>
              <div class="term_content">
                {{ products.fixed_rewards }}
              </div>
            </div>
          </div>
          <div class="item_right_footer">
            <div class="item_card_volume" style="color: #fff;">
              <div class="liquid-bar" :style="{ width: product.volume + '%' }"></div>
              Volume <span class="volume_value ">{{ product.volume }}%</span>
            </div>
          </div>
          <router-link :to="{ path: '/dashboard/deposit', query: { id: this.products._id } }">

            <ButtonComponent text="Buy now" class="default_black mt-1 color" style="width: 150px " />
          </router-link>
        </div>
      </div>
      <div class="detail_card_right_name mb-1">detail</div>
      <div class="line"></div>
      <div class="product_detail" v-html="products.detail"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import data from '@/static/data'
import ButtonComponent from '@/components/mini_components/ButtonComponent.vue'
export default {
  name: 'MiningDetail',
  data() {
    return {
      data,
      product: {},
      showModal: false,
      count: 1,
      type: 'text',
      base_url:import.meta.env.VITE_BASE_URL,
      products:[],
      id:""
    }
  },
  components: {
    ButtonComponent
  },
  created() {
    this.id = this.$route.params.id
    // const productId = this.$route.params.id
    // this.product = this.getProductDetails(productId)
  },
  computed: {
    liquidWidth() {
      return `${this.product.volume}%`
    }
  },
  methods: {
    getProductDetails(productId) {
      return data.find((item) => item.id === +productId)
    },
    changeType() {
      if (this.type === 'text') {
        this.type = 'password'
      } else {
        this.type = 'text'
      }
    },
    dec() {
      if (this.count > 0) {
        this.count--
      }
    },
    inc() {
      this.count++
    },
    async getProductById(){
      try{
        let response = await axios.get(`${this.base_url}api/products/${this.id}`)
        console.log(response.data)
        this.products = response.data
      }catch(error){
        console.error('Problem with fetching By Id',error)
      }
    }
  },
  mounted() {
    this.getProductById()
  }
}
</script>

<style scoped>
.go {
  width: auto;
  padding: 8px 12px;
  font-family: Montserrat-Regular, sans-serif;
  font-size: 16px;
  border-radius: 7px;
  border: 1px solid #000;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s linear all;
  color: #fff;
  background-color: #000;
}

.color {
  color: #fff !important;
}
</style>
