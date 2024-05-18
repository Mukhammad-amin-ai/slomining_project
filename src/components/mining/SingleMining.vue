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
            <div class="term_content">${{ item.contract_price }}</div>
          </div>
        </div>
        <div class="item_right_body">
          <div class="item_term">
            <div class="term_title">Daily Rewards</div>
            <div class="term_content">
              ${{ item.daily_rewards }}
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
            <!--            <router-link :to="{ path: '/dashboard/deposit', query: { id: item.id } }">-->
            <ButtonComponent text="Buy Now" @click="buyProduct" class="default_black buyBtn" />
            <!--            </router-link>-->
          </div>
          <!--          <div @click="showModal = true" v-if="isLogin">-->
          <!--            <router-link :to="{ path: '/dashboard/deposit', query: { id: item.id } }">-->
          <!--              <ButtonComponent text="Buy Now" class="default_black buyBtn" />-->
          <!--            </router-link>-->
          <!--          </div>-->
          <router-link v-else to="/sign-in">
            <ButtonComponent text="Buy now" class="default_white ml-1 buyBtn" />
          </router-link>
          <router-link :to="'/product-detail/' + item._id">
            <ButtonComponent text="See more" class="default_white ml-1 seeBtn" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/mini_components/ButtonComponent.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'


export default {
  name: 'SingleMining',
  components: { ButtonComponent },
  props: {
    item: Object,
    userId: String
  },
  data() {
    return {
      isLogin: localStorage.getItem('isLogin'),
      showModal: false,
      type: 'text',
      base_url: import.meta.env.VITE_BASE_URL,
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
  methods: {
    async buyProduct() {
      Swal.fire({
        text: `Dou you want to Buy`,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: '#4466f2',
        cancelButtonText: 'No',
        cancelButtonColor: '#f31616',
        reverseButtons: false
      }).then(async (result) => {
        if (result.isConfirmed) {
          const token = localStorage.getItem('jwt_token').replace(/^"(.*)"$/, '$1')
          let obj = {
            idOfProduct: this.item._id,
            type: 'Miner',
            time: new Date().getHours(),
            minute: new Date().getMinutes(),
            hours:this.item.contract_timer
          }
          try {
            let response = await axios.put(`${this.base_url}api/purchase/${this.userId}`, obj, { headers: { Authorization: `Bearer ${token}` } })
            if (response.data.message === 'Product purchased successfully') {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer
                  toast.onmouseleave = Swal.resumeTimer
                }
              })
              await Toast.fire({
                icon: 'success',
                title: 'You Successfully buy contract'
              })
            }
            window.location.reload()
            console.log(response.data)
          } catch (error) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer
                toast.onmouseleave = Swal.resumeTimer
              }
            })
            await Toast.fire({
              icon: 'error',
              title: 'You Don`t have enough money'
            })
            console.error('error buying product', error)
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.buyBtn {
  background-color: grey;
  color: #fff !important;
  font-family: Montserrat-Bold;
  padding: 16px;
  width: 130%;
}

.seeBtn {
  color: #fff !important;
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

@media screen and (max-width: 1300px) {
  .btns {
    gap: 20px;
  }

  .buyBtn,
  .seeBtn {
    width: 100%;
  }

}

@media screen and (max-width: 1000px) {
  .buyBtn,
  .seeBtn {
    width: 100%;
  }
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
