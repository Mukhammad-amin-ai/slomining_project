<template>
  <div class="deposit">
    <div class="contant">
      <tabReusable title="Deposit" tab="Cryptocurrency " />
      <div class="deposit-container">
        <loadingComp />
        <p>Amount (USDT)</p>
        <form @submit.prevent="convert">
          <input type="text" v-model="this.amount" placeholder="Pleace enter amount" />
        </form>
        <p>Deposit Network</p>
        <div class="crypto d-flex">
          <div class="item">
            <div class="item-container" @click="convert('USDT')">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-t.svg" alt="" />
              </div>
              <p>USDT-TRC20</p>
            </div>
          </div>
          <div class="item">
            <div class="item-container" @click="convert('USDT')">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-t.svg" alt="" />
              </div>
              <p>USDT-ERC20</p>
            </div>
          </div>
          <div class="item">
            <div class="item-container" @click="convert('LTC')">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-L.svg" alt="" />
              </div>
              <p>LTC-Litecoin</p>
            </div>
          </div>
          <div class="item">
            <div class="item-container" @click="convert('ETH')">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/etherum.svg" alt="" />
              </div>
              <p>ETH-ERC20</p>
            </div>
          </div>
          <div class="item" @click="convert('BTC')" :class="class1">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/btc.svg" alt="" />
              </div>
              <p>BTC-Bitcoin</p>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <div class="price-amout" :style="{ width: width }">
            <h4>{{ this.price }}</h4>
          </div>
          <button class="next" @click="showDeposit">Next</button>
        </div>
      </div>
      <h2>Deposit Records</h2>
      <div class="table-response">
        <table class="table-info">
          <thead>
            <tr>
              <th>Date</th>
              <th>Currency</th>
              <th>Status</th>
              <th>Amount</th>
              <th>USDT</th>
              <th>Balance</th>
              <th>Type</th>
              <th>Wallet Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <n-modal v-model:show="showModal">
        <n-card style="width: 600px" title="Warning" :bordered="false" size="huge" role="dialog" aria-modal="true">
          <template #header-extra>
            <div @click="showModal = false" style="cursor: pointer">
              <img alt="close" src="@/assets/images/x.svg" style="width: 20px" />
            </div>
          </template>
          <p style="color: red">Please enter Amount（USDT）</p>





        </n-card>
      </n-modal>
      <n-modal v-model:show="show" transform-origin="center" style="margin: auto">
        <n-card style="width: 100%; max-width: 1000px; min-width: 350px" title="Checkout" :bordered="false" size="huge"
          role="dialog" aria-modal="true">
          <template #header-extra>
            <div @click="show = false" style="cursor: pointer">
              <img alt="close" src="@/assets/images/x.svg" style="width: 20px" />
            </div>
          </template>
          <div class="heading_deposit">
            <div class="deposit_text">
              Please transfer to the following address <br />

              The system will automatically confirm the receipt on the memory block chain and post
              it to your account balance. <br />

              Minimum deposit amount: <span class="text-green text-bold"> $50</span>, amount less
              than <span class="text-green text-bold"> $50</span> will not be credited to your
              account. <br />

              Every transfer in will be recorded on the memory block chain and cannot be tampered
              with <br />
            </div>
          </div>
          <div class="add_cart_section d-flex justify-content-start">
            <div class="left_side">
              <img src="@/assets/images/qr.png" alt="" class="img-fluid" />
            </div>
            <div class="right_side ml-1 mt-2 d-flex flex-column">
              <div class="transfer">Transfer Address</div>

              <div class="right_heading d-flex justify-content-start center pointer"
                @click="copiedText('TL7g5C19vLgKXK8Rf7sMSSqsw4wusUvSoe')">
                <div class="copied_text mt-1">TL7g5C19vLgKXK8Rf7sMSSqsw4wusUvSoe</div>

                <svg class="copied_img ml-1" style="width: 20px" data-v-653498c4="" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                    d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z">
                  </path>
                  <path fill="currentColor"
                    d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z">
                  </path>
                </svg>
              </div>

              <div class="transfer">Convert</div>

              <div class="right_heading d-flex justify-content-start center pointer text-green">
                <div class="copied_text mt-1">{{ price }} </div>
              </div>
              <div class="submit-form mt-2 d-flex flex-column">
                <div class="mt-4">
                  <span>{{ uploadedFileName }}</span>
                </div>
                <input class="d-none" type="file" id="img" ref="imgFile" accept="image/*" @change="handleImageUpload" />
                <img class="uploaded-img" v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
                <label for="img" class="send d-flex mt-1 text-center justify-content-center" style="width: 250px;"> +
                  upload screen</label>
              </div>
            </div>
          </div>
          <template #footer>

            <div class="deposit_footer_text d-flex justify-content-start center">
              <svg style="width: 20px; margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path fill="currentColor"
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z">
                </path>
              </svg>
              Please transfer the exact amount to address
            </div>
          </template>
        </n-card>
      </n-modal>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import tabReusable from '../mini_components/tab-reusable.vue'
import { NCard } from 'naive-ui'
import { NModal } from 'naive-ui'
import loadingComp from '@/components/mini_components/loading-comp.vue'
import Swal from 'sweetalert2'
export default {
  name: 'DepositComponent',
  components: {
    tabReusable,
    loadingComp,
    NCard,
    NModal
  },
  data() {
    return {
      amount: '',
      crypto: '',
      text: '',
      price: '',
      width: '',
      class1: '',
      show: false,
      showModal: false,
      imageUrl: '',
      uploadedFileName: '',
      uploadedFile: ''
    }
  },

  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.uploadedFileName = file.name
        this.uploadedFile = file
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imageUrl = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    showDeposit() {
      if (this.amount !== '') {
        this.show = true
      }
    },
    copiedText(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
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
          Toast.fire({
            icon: 'success',
            title: 'Token Copied.'
          })
        })
        .catch((err) => {
          console.error(err)
        })
    },
    async convert(option) {
      if (this.amount === '') {
        this.showModal = true
      } else {
        this.width = '50%'
        this.class = 'borderclas'
        await this.$store.dispatch('convert', option)
        this.text = this.amount * this.$store.state.convert
        this.price = `${this.amount} USDT = ${this.text} ${option}`
      }
    }
  }
}
</script>

<style scoped>
.deposit_footer_text {
  background: var(--depost_bg);
  color: vaR(--depost_tex);
  padding: 10px;
  border-radius: 8px;
}

.uploaded-img {
  height: 200px;
  width: 200px;
  object-fit: contain;
}

.deposit_text {
  font-family: Montserrat-Medium, sans-serif, sans-serif, sans-serif;
  line-height: 40px;
  font-size: 16px;
}

.transfer {
  font-family: Montserrat-Medium, sans-serif;
  font-size: 14px;
}

.copied_text {
  font-size: 18px;
}

.heading_deposit {
  background: var(--deposit);
  border-radius: 16px;
  padding: 20px 10px;
}

.borderclas {
  border: 1px solid #000;
}

.deposit {
  margin: 10px 0 0 30px;
  width: 100%;
  height: auto;
}

.contant {
  width: 1144px;
  height: 784px;
}

.deposit-container {
  position: relative;
  margin: 30px 0;
  width: 100%;
  height: 500px;
  background-color: #f8f9fc;
  border-radius: 16px;
  padding: 21px;
}

h2 {
  font-family: Montserrat-Extra-Bold, sans-serif;
  font-size: 32px;
  color: var(--blue);
  margin-bottom: 24px;
}

p {
  font-family: Montserrat-Medium, sans-serif;
  font-size: 15px;
  color: rgb(51, 57, 71);
  line-height: 21px;
  padding-bottom: 10px;
}

form {
  width: 100%;
  height: auto;
  padding-bottom: 20px;
}

.deposit-container input[type='text'] {
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #fff;
  border: none;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 15px;
  color: rgb(28, 42, 70);
  border-radius: 6px;
}

.deposit-container input[type='text']:focus {
  outline-color: #59adda;
}

.crypto {
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 30px;
}

.item {
  flex: 0 0 auto;
  width: 23%;
}

.image {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.item-container {
  background: #fff;
  border-radius: 4px;
  padding: 1.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.btn-container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}

.price-amout {
  display: flex;
  align-items: center;
}

.next {
  width: 300px;
  height: auto;
  padding: 0 16px;
  background-color: #697386;
  border-radius: 10px;
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  color: var(--white);
  transition: all 0.3s;
  padding: 10px 14px;
  border: none;
  cursor: pointer;
}

.table-response {
  width: 100%;
  height: auto;
  overflow-x: auto;
}

.table-info {
  width: 100%;
  height: auto;
  border: 1px solid var(--text_gray);
  border-radius: 5px;
}

thead {
  width: 100%;
  height: auto;
}

th {
  padding: 0.875rem 1.25rem;
  font-family: Montserrat-Bold, sans-serif;
  color: rgb(33, 37, 41);
  font-size: 15.008px;
  line-height: 26px;
}

h4 {
  color: #198754;
}

@media screen and (max-width: 1024px) {
  .deposit {
    margin: 0 !important;
  }

  .contant {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .contant {
    width: 90%;
  }

  .table-info {
    width: 90% !important;
  }

  th {
    padding: 0.875rem 1rem;
  }
}

@media screen and (max-width: 700px) {
  .contant {
    height: auto;
  }

  .deposit-container {
    height: auto;
  }

  .crypto {
    justify-content: unset !important;
    gap: 10px;
  }
}

@media screen and (max-width: 600px) {
  .item {
    width: 45% !important;
  }

  .next {
    width: 200px;
  }
}

@media screen and (max-width: 320px) {
  .next {
    width: 100px;
  }
}
</style>
