<template>
  <div class='last-component'>
    <div class="container">
      <h1>Latest Transaction</h1>
      <div class="transaction-table">
        <div class="table-deposit" data-aos-duration="600" data-aos="fade-up"
             data-aos-anchor-placement="center-bottom">
          <div class="table-header">
            <h2>Last Deposit</h2>
          </div>
          <div class="table-container">
            <div class="table-item" v-for="item in deposit" :key="item">
              <div class="email">
                <h3>{{ item.email }}</h3>
              </div>
              <div class="amount">
                <h4>{{ item.amount }}</h4>
              </div>
              <div class="date">
                <h3>{{ item.date }}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="table-withdraw" data-aos-duration="800" data-aos="fade-up"
             data-aos-anchor-placement="center-bottom">
          <div class="table-header">
            <h2>Last Withdraw</h2>
          </div>
          <div class="table-container">
            <div class="table-item" v-for="item in withDraw" :key="item">
              <div class="email">
                <h3>{{ item.email }}</h3>
              </div>
              <div class="amount">
                <h4>{{ item.amount }}</h4>
              </div>
              <div class="date">
                <h3>{{ item.date }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deposit: [],
      withDraw: []
    }
  },
  methods: {
    generateFakeDeposit() {
      const prefixes = ['johndoe', 'janedoe', 'testuser', 'user123', 'graham', 'leanne', 'kulas', 'hildegard']
      const domains = ['gmail', 'yahoo', 'hotmail', 'outlook', 'yandex']
      const prefixDomains = ['com', 'ru', 'uz', 'kz', 'tjk', 'uk', 'us']
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      const domain = domains[Math.floor(Math.random() * domains.length)]
      const dot = prefixDomains[Math.floor(Math.random() * prefixDomains.length)]
      return `${prefix}****@${domain}.${dot}`
    },
    generateFakeWithDraw() {
      const prefixes = ['johndoe', 'testuser', 'user123', 'ervin ', 'howell', 'victor ', 'plains']
      const domains = ['gmail', 'yahoo', 'hotmail', 'outlook', 'yandex']
      const prefixDomains = ['com', 'ru', 'uz', 'kz', 'tjk', 'uk', 'us']
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      const domain = domains[Math.floor(Math.random() * domains.length)]
      const dot = prefixDomains[Math.floor(Math.random() * prefixDomains.length)]
      return `${prefix}****@${domain}.${dot}`
    },
    generateRandomNumber() {
      const integerPart = Math.floor(Math.random() * 10001)
      const decimalPartLength = Math.floor(Math.random() * 5) + 1 // Random length between 1 and 5
      const decimalPart = Math.random().toFixed(decimalPartLength).substring(2) // Generate decimal part
      const crypto = ['USDT', 'BTC', 'SOL', 'ETH', 'BNB']
      const randomCrypto = crypto[Math.floor(Math.random() * crypto.length)]
      return parseFloat(`${integerPart}.${decimalPart} `) + ' ' + randomCrypto
    },
    generatorFunc() {
      for (let i = 0; i < 5; i++) {
        const obj = {
          email: this.generateFakeDeposit(),
          amount: this.generateRandomNumber(),
          date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        }
        this.deposit.push(obj)
      }
      for (let i = 0; i < 5; i++) {
        const obj = {
          email: this.generateFakeDeposit(),
          amount: this.generateRandomNumber(),
          date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        }
        this.withDraw.push(obj)
      }
    }
  },
  mounted() {
    this.generatorFunc()
  }
}
</script>

<style scoped>
.last-component {
  width: 100%;
  height: auto;
}

.last-component .container h1 {
  text-align: center;
}

.transaction-table {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.table-deposit, .table-withdraw {
  width: 50%;
  height: auto;
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -1.52%, hsla(0, 0%, 100%, 0.024) 104.35%);
  border-radius: 20px;
}

.table-header {
  margin-bottom: 10px;
}

.table-item {
  width: 100%;
  height: auto;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.email h3 {
  color: #3b71fe;
  font-weight: 500;
  margin-bottom: 5px;
}

.amount h4 {
  color: #e88d38;
  margin-bottom: 5px;
}

.date h3 {
  font-weight: 500;

}

@media screen and (max-width: 1500px) {
  .transaction-table {
    justify-content: center;
  }

  .table-deposit, .table-withdraw {
    width: 45%;
  }
}

@media screen and (max-width: 900px) {
  .transaction-table {
    flex-direction: column;
    gap: 10px;
  }

  .table-deposit, .table-withdraw {
    width: 90%;
  }
}

</style>