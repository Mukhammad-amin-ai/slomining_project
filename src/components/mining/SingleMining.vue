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
              {{ item.daily_rewards }} $
            </div>
          </div>
          <div class="item_term mt-2">
            <div class="term_title">3 Days Fixed Rewards:</div>
            <div class="term_content">
              {{ item.fixed_rewards }}
            </div>
          </div>
        </div>

        <div class="item_right_footer d-flex justify-content-start btns">
          <div @click="showModal = true" v-if="isLogin">
            <router-link :to="{ path: '/dashboard/deposit', query: { id: item.id } }">
              <ButtonComponent text="Buy Now" class="default_black buyBtn" />
            </router-link>
          </div>
          <router-link v-else to="/sign-in">
            <ButtonComponent text="Buy now" class="default_white ml-1 buyBtn" />
          </router-link>
          <router-link :to="'/product-detail/' + item.id">
            <ButtonComponent text="See more" class="default_white ml-1 seeBtn" />
          </router-link>
        </div>
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
  // computed: {
  //   computedDelayRewardCount() {
  //     const option = this.item.daily_rewards;
  //     // console.log(option);
  //     this.$store.dispatch('dailyReward');

  //     return `(${this.dailyrewards}) BTC = $ ${option}`;
  //   }
  // },
  // mounted() {
  //   this.fetchDailyReward();
  // },
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

    // dealyRewardCount(option) {
    //   this.$store.dispatch('dailyReward')
    //   this.dailyrewards = this.$store.state.dailyReward * option
    //   this.dailyrewards = this.dailyrewards.toString().slice(0, 10)
    //   return `(${this.dailyrewards}) BTC = $ ${option}`;
    // }
    // async fetchDailyReward() {
    //   await this.$store.dispatch('dailyReward');
    //   const option = this.item.daily_rewards;
    //   this.dailyrewards = this.$store.state.dailyReward * option;
    //   this.dailyrewards = this.dailyrewards.toString().slice(0, 10);
    // },
    // delayRewardCount() {
    //   const option = this.item.daily_rewards;
    //   // console.log(option);
    //   return `(${this.dailyrewards}) BTC = $ ${option}`;
    // }


  }
}
</script>

<style scoped>
.buyBtn {
  background-color: #148db3;
  color: #fff !important;
  font-family: Montserrat-Bold;
  padding: 16px;
  width: 130%;
}

.seeBtn {
  padding: 16px;
  width: 130%;
  font-family: Montserrat-Bold;
}

.buyBtn:hover {
  color: #000 !important;
}

.btns {
  margin-bottom: 30px;
  gap: 40px;
}

@media screen and (max-width: 768px) {
  .btns {
    gap: 0;
  }

  .buyBtn,
  .seeBtn {
    width: 100%;
  }
}
</style>
