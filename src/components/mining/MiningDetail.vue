<template>
  <div class="mining_detail">
    <div class="container">
      <router-link to="/">
        <button class="go">Go Back</button>
      </router-link>
      <div class="mining_detail_card">
        <div class="detail_card_left">
          <img
            :src="product.image"
            :alt="product.name"
            class="detail_card_left_image img-fluid rounded"
          />
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
          <button class="buy" @click="showModal = true">Buy now</button>
        </div>
      </div>
      <div class="detail_card_right_name mb-1">detail</div>
      <div class="line"></div>
      <div class="product_detail" v-html="product.detail"></div>
    </div>

    <n-modal v-model:show="showModal" transform-origin="center" style="margin: auto">
      <n-card
        style="width: 100%; max-width: 900px; min-width: 350px"
        title="Checkout"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <template #header-extra>
          <div @click="showModal = false" style="cursor: pointer">
            <img alt="close" src="@/assets/images/x.svg" style="width: 20px" />
          </div>
        </template>
        <div class="add_cart_section" style="display: grid; grid-template-columns: 1fr 1fr">
          <div class="left_side">
            <img :src="product.image" :alt="product.name" class="item_card_image" />
          </div>
          <div class="right_side ml-1 d-flex flex-column">
            <div class="quantity">Quantity</div>
            <div class="count">
              <div class="dec" @click="dec">-</div>
              <div class="count_item">{{ count }}</div>
              <div class="inc" @click="inc">+</div>
            </div>
            <label for="verify" class="form_label">New password</label>

            <div class="password relative w100">
              <input :type="type" id="verify" placeholder="******" class="form_input w100" />
              <div class="eyes" @click="changeType">
                <img v-if="type === 'text'" src="@/assets/icons/eye-open.svg" alt="" />
                <img v-else src="@/assets/icons/slash.svg" alt="" />
              </div>
            </div>
            <div class="amount_parent d-flex justify-content-between mt-2">
              <div class="amount_price medium d-flex justify-content-start flex-column">
                Amount <br />
                <span class="text-green d-flex justify-content-center center">
                  = {{ product.contract_price }} USDT
                  <img
                    style="width: 20px; margin-left: 5px; margin-bottom: 2px"
                    src="@/assets/svg/crypto-t.svg"
                    alt=""
                  />
                </span>
              </div>
              <div class="submit-form ">
                <button type="button" class="send">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <template #footer> </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script>
import data from '@/static/data'
import { NCard, NModal } from 'naive-ui'
export default {
  name: 'MiningDetail',
  data() {
    return {
      data,
      product: {},
      showModal: false,
      count:1,type: 'text',

    }
  },
  components: { NModal, NCard },
  created() {
    const productId = this.$route.params.id
    this.product = this.getProductDetails(productId)
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
    }
  }
}
</script>

<style scoped>
.go {
  width: auto;
  padding: 8px 12px;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
  border-radius: 7px;
  border: 1px solid #1c2b46;
  text-transform: uppercase;
  transition: 0.2s linear all;
  cursor: pointer;
  color: #fff;
  background-color: #1c2b46;
  transition: 0.3s linear all;
  cursor: pointer;
}

.go:hover {
  background-color: #fff;
  color: #000;
}

.buy {
  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: transparent;
  margin-top: 20px;
  transition: 0.3s linear all;
}

.buy:hover {
  background-color: #1c2b46;
  color: #fff;
  cursor: pointer;
}
</style>
