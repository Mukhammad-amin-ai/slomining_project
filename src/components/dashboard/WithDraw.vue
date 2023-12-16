<template>
  <div class="deposit">
    <div class="contant">
      <h2>Withdraw</h2>
      <div class="deposit-container">
        <loadingComp />
        <p>Amount (USDT)</p>
        <form @submit.prevent="convert">
          <input type="text" placeholder="Pleace enter amount" v-model="this.amount">
        </form>
        <p>Withdraw Address</p>
        <form>
          <input type="text" placeholder="Pleace enter address" v-model="this.adress">
        </form>
        <p>Deposit Network</p>
        <div class="crypto d-flex">
          <div class="item" @click="convert('USDT')">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-t.svg" alt="">
              </div>
              <p>USDT-TRC20</p>
            </div>
          </div>
          <div class="item" @click="convert('USDT')">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-t.svg" alt="">
              </div>
              <p>USDT-ERC20</p>
            </div>
          </div>
          <div class="item" @click="convert('LTC')">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-L.svg" alt="">
              </div>
              <p>LTC-Litecoin</p>
            </div>
          </div>
          <div class="item" @click="convert('ETH')">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/etherum.svg" alt="">
              </div>
              <p>ETH-ERC20</p>
            </div>
          </div>
          <div class="item" @click="convert('BTC')">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/btc.svg" alt="">
              </div>
              <p>BTC-Bitcoin</p>
            </div>
          </div>
        </div>
        <n-alert  type="error" v-if="alertM">
          Balance is insufficient!
        </n-alert>
        <div class="btn-container">
          <div class="price-amout " :style="{ width: width }">
            <h4>{{ this.price }}</h4>
          </div>

          <button class="next" @click="alertFunc">Submit</button>
        </div>
      </div>
      <h2>
        Withdraw Records
      </h2>
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
          <p style="color: red;"> Please enter Amount（USDT）</p>
        </n-card>
      </n-modal>

    </div>
  </div>
</template>

<script>
import loadingComp from '@/components/mini_components/loading-comp.vue'
import { NCard } from 'naive-ui';
import { NModal } from 'naive-ui';
import { NAlert } from 'naive-ui';
export default {
  name: "DepositComponent",
  components: {
    loadingComp,
    NModal,
    NCard,
    NAlert
  },
  data() {
    return {
      adress: "",
      amount: '',
      crypto: "",
      text: '',
      price: '',
      width: "",
      class1: "",
      showModal: false,
      alertM: false,
    }
  },
  methods: {
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
    },
    alertFunc(){
      if(this.adress !== ''){
        this.alertM = true
      }
    }

  },
}
</script>

<style scoped>
.borderclas {
  border: 1px solid #000;
}

.price-amout {
  display: flex;
  align-items: center;
}

.deposit {
  margin: 10px 0 0 30px;
  width: 100%;
  height: auto;
}

.contant {
  width: 1144px;
  /* height: 784px; */
  height: auto;
}

.deposit-container {
  position: relative;
  margin: 30px 0;
  width: 100%;
  height: auto;
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

.deposit-container input[type="text"] {
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

.deposit-container input[type="text"]:focus {
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
  transition: all .3s ease;
}

.btn-container {
  width: 100%;
  height: auto;
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
  transition: all .3s;
  padding: 10px 14px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
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

@media screen and (max-width:1024px) {
  .deposit {
    margin: 0 !important;
  }

  .contant {
    width: 100%;
  }
}

@media screen and (max-width:768px) {
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

@media screen and (max-width:700px) {
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

@media screen and (max-width:600px) {
  .item {
    width: 45% !important;
  }

  .next {
    width: 200px;
  }
}

@media screen and (max-width:320px) {
  .next {
    width: 100px;
  }
}
</style>