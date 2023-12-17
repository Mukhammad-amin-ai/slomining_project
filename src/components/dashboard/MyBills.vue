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
            <!-- <th>Date</th> -->
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
          <!-- Add your table rows dynamically here -->
          <tr>
            <!-- <td>12/14/23 11:24</td> -->
            <td class="usd"><span>USDT</span></td>
            <td class="text-green"><span>Paid</span></td>
            <td>5 USDT</td>
            <td>$5.00</td>
            <td>$5</td>
            <td>Registration Bonus</td>
            <td></td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyBills'
}
</script>

<style scoped>

</style>
