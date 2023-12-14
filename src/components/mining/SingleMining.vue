<template>
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
          <div class="term_content">
            {{ item.contract_price }}
          </div>
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
      <div class="item_right_footer">
        <ButtonComponent text="Order Now" class="default_black" />
        <ButtonComponent text="See more" class="default_white" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/mini_components/ButtonComponent.vue'

export default {
  name: 'SingleMining',
  components: { ButtonComponent },
  props: {
    item: Object
  }
}
</script>

<style scoped></style>
