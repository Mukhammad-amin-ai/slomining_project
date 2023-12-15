<template>
  <div>
    <div class="mining_item_card">
      <div class="item_card_left">
        <img :src="item.image" :alt="item.name" class="item_card_image" />
        <div class="item_card_name">
          {{ item.name }}
        </div>
        <div class="item_card_volume">
          Volume <span class="volume_value text-green">{{ item.volume }}%</span>
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
              {{ item.daily_rewards }}
            </div>
          </div>
        </div>
        <div class="item_right_footer d-flex justify-content-start">
          <div @click="showModal = true">
            <ButtonComponent text="Order Now" class="default_black" />
          </div>
          <router-link :to="'/product-detail/' + item.id">
            <ButtonComponent text="See more" class="default_white ml-1" />
          </router-link>
        </div>
      </div>
    </div>
    <n-modal v-model:show="showModal" transform-origin="center" style="margin: auto">
      <n-card
        style="width: 600px; min-width: 600px"
        title="Checkout

"
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
            <img :src="item.image" :alt="item.name" class="item_card_image" />
          </div>
          <div class="right_side ml-1 d-flex flex-column">
            <div class="quantity">Quantity</div>
            <div class="count">
              <div class="dec" @click="dec">-</div>
              <div class="count_item">{{ count }}</div>
              <div class="inc" @click="inc">+</div>
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
      showModal: false,
      count: 0,
      bodyStyle: {
        width: '600px'
      },
      segmented: {
        content: 'soft',
        footer: 'soft'
      }
    }
  },
  methods: {
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

<style scoped></style>
