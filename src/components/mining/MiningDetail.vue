<template>
  <div class="mining_detail">
    <div class="container">
      <div class="mining_detail_card">
        <div class="detail_card_left">
          <img :src="product.image" :alt="product.name" class="detail_card_left_image img-fluid rounded" />
        </div>
        <div class="detail_card_right d-flex flex-column justify-content-start">
          <div class="detail_card_right_name">
            {{ product.name }}
          </div>
          <div class="item_right_heading">
            <div class="item_term">
              <div class="term_title">Contract Term</div>
              <div class="term_content">
                {{ product.contract_term }}
              </div>
            </div>
            <div class="item_term">
              <div class="term_title">Contract Price</div>
              <div class="term_content">
                {{ product.contract_price }}
              </div>
            </div>
          </div>
          <div class="item_right_body">
            <div class="item_term">
              <div class="term_title">Daily Rewards</div>
              <div class="term_content">
                {{ product.daily_rewards }}
              </div>
            </div>
          </div>
          <div class="item_right_footer">
            <div class="item_card_volume">
              Volume <span class="volume_value text-green">{{ product.volume }}%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_card_right_name mb-1">detail  </div>
          <div class="line">
          </div>
      <div class="product_detail" v-html="product.detail">

      </div>
    </div>
  </div>
</template>

<script>
import data from '@/static/data'
export default {
  name: 'MiningDetail',
  data() {
    return {
      data,
      product: {}
    }
  },
  created() {
    const productId = this.$route.params.id
    productId
    this.product = this.getProductDetails(productId)
  },
  methods: {
    getProductDetails(productId) {
      return data.find((item) => item.id === +productId)
    }
  }
}
</script>

<style scoped></style>
