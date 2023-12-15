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
          <!-- Add your table rows dynamically here -->
          <tr>
            <td>12/14/23 11:24</td>
            <td class="usd"><span>USDT</span></td>
            <td class="status"><span>Paid</span></td>
            <td>5 USDT</td>
            <td>$5.00</td>
            <td>$5</td>
            <td></td>
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
/* Updated styles for the table */
.my-bills-parent {
  width: 100%;
}

.bills-table {
  margin-top: 40px;
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling if needed */
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table {
  border: 1px solid var(--border_color);
  padding: 8px;
  text-align: center;
}
.table .thead tr {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.table tbody tr {
  display: flex;
  justify-content: flex-start;
}
.table thead th {
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 14px;
  font-family: Montserrat-Medium, sans-serif;
}
.table tbody {
  border-top: 1px solid var(--border_color);
}
.table tbody tr {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.table tbody tr td {
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: 13px;
  font-family: Montserrat-Regular, sans-serif;
  font-weight: 400;
}

.usd span {
  display: flex;
  text-decoration: underline;
  color: var(--ligt_blue);
  font-family: Montserrat-Medium, sans-serif;
}
.status span {
  font-family: Montserrat-Medium, sans-serif;
  color: var(--white);
  padding: 4px 8px;
  border-radius: 50px;
  background: var(--green);
}
</style>
