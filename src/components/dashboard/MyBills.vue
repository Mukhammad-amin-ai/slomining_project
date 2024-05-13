<template>
  <div class="my-bills-parent">
    <div class="bills-select">
      <select name="date" id="date">
        <option value="all" selected>All</option>
        <option value="withdrawal">Withdrawal</option>
        <option value="deposit">Deposit</option>
        <option value="capital">Capital</option>
        <option value="buy">Buy</option>
        <option value="reward">Reward</option>
        <option value="slomming">SLOMMING</option>
      </select>
    </div>
    <div class="bills-table">
      <table class="table">
        <thead class="thead">
          <tr>
            <th>Currency</th>
            <th>Status</th>
            <th>Amount</th>
            <th>USDT</th>
            <th>Balance</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data.bills" :key="item">
            <td class="usd"><span>{{item.currency}}</span></td>
            <td class="text-green"><span>{{item.status}}</span></td>
            <td>{{item.amount}} {{item.currency}}</td>
            <td>{{item.amount}}</td>
            <td>${{item.balance}}</td>
            <td>{{item.type}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MyBills',
  computed:{
    ...mapState("Api",['data'])
  },
  methods:{
    fetchData(){
      this.$store.dispatch('Api/fetchData')
    }
  },
  mounted() {
    this.fetchData()
    console.log(this.data)
  }
}
</script>

<style scoped>
th,
td {
  color: #fff ;
}

</style>
