<template>
  <div>
    <div class="mining_item_card">
      <div class="item_card_left">
        <img draggable="false" :src="item.image" :alt="item.name" class="item_card_image" />
        <div class="item_card_name">
          {{ item.name }}
        </div>
        <div class="item_card_volume">
          <div class="liquid-bar" :style="{ width: item.volume + '%' }"></div>
          Volume <span class="volume_value">{{ item.volume }}%</span>
        </div>
        <div class="item_card_sold">(Sold out at 100%)</div>
      </div>
      <div class="item_card_right">
        <div class="item_right_heading">
          <div class="item_term">
            <div class="term_title">Contract Term</div>
            <div class="term_content">
              {{ item.contract_term }}
            </div>
          </div>
          <div class="item_term">
            <div class="term_title">Contract Price</div>
            <div class="term_content">$ {{ item.contract_price }}</div>
          </div>
        </div>
        <div class="item_right_body">
          <div class="item_term">
            <div class="term_title">Daily Rewards</div>
            <div class="term_content">
              <!-- {{ item.daily_rewards }} -->
              {{ dealyRewardCount(item.daily_rewards) }}
            </div>
          </div>
        </div>
        <div class="item_right_footer d-flex justify-content-start">
          <div @click="showModal = true" v-if="isLogin">
            <ButtonComponent text="Buy Now" class="default_black" />
          </div>
          <router-link v-else to="/sign-in">
            <ButtonComponent text="Buy now" class="default_white ml-1" />
          </router-link>
          <router-link :to="'/product-detail/' + item.id">
            <ButtonComponent text="See more" class="default_white ml-1" />
          </router-link>
        </div>
      </div>
    </div>
    <n-modal v-model:show="showModal" transform-origin="center" style="margin: auto">
      <n-card style="width: 100%; max-width: 900px; min-width: 350px" title="Checkout" :bordered="false" size="huge"
        role="dialog" aria-modal="true">
        <template #header-extra>
          <div @click="showModal = false" style="cursor: pointer">
            <img alt="close" src="@/assets/images/x.svg" style="width: 20px" />
          </div>
        </template>
        <div class="add_cart_section" style="display: grid; grid-template-columns: 1fr 1fr">
          <div class="left_side">
            <img :src="item.image" :alt="item.name" class="item_card_image" />
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
            <div class="amount_parent d-flex justify-content-between">
              <div class="amount_price medium d-flex justify-content-start flex-column">
                Amount <br />
                <span class="text-green d-flex justify-content-center center">
                  = {{ item.contract_price }} USDT
                  <img style="width: 20px; margin-left: 5px; margin-bottom: 2px" src="@/assets/svg/crypto-t.svg" alt="" />
                </span>
              </div>
              <div class="submit-form">
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
import ButtonComponent from '@/components/mini_components/ButtonComponent.vue'
import { NModal } from 'naive-ui'
import { NCard } from 'naive-ui'
export default {
  name: 'SingleMining',
  components: { ButtonComponent, NModal, NCard },
  props: {
    item: Object
  },
  data() {
    return {
      isLogin: localStorage.getItem('isLogin'),
      showModal: false,
      type: 'text',
      count: 1,
      bodyStyle: {
        width: '600px'
      },
      segmented: {
        content: 'soft',
        footer: 'soft'
      },
      dailyrewards: ''
    }
  },
  mounted() {

  },
  methods: {
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


     dealyRewardCount(option) {
       this.$store.dispatch('dailyReward')
      this.dailyrewards = this.$store.state.dailyReward * option
      return `(${this.dailyrewards}) BTC = $ ${option}`
    }
  }
}
</script>

<style scoped></style>
