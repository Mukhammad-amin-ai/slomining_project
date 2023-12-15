<template>
  <div class="dashboard-profile">
    <div class="contain">
      <div class="balance  d-flex">
        <div class="money">
          <h2>BALANCE</h2>
          <p>$ 5</p>
        </div>
        <div class="buttns d-flex">
          <router-link to="/dashboard/deposit">
            <button class="btn">Deposit</button>
          </router-link>
          <router-link to="/dashboard/withdraw">
            <button class="btn">withdrow</button>
          </router-link>
        </div>
      </div>
      <div class="total d-flex">
        <div class="item">
          <h3>Total Deposit</h3>
          <h5>$ 0.00</h5>
        </div>
        <div class="item">
          <h3>Total Withdrawal</h3>
          <h5>$ 0.00</h5>
        </div>
        <div class="item">
          <h3>Total Earned</h3>
          <h5>$ 0.00</h5>
        </div>
      </div>
      <div class="profit d-flex">
        <div class="item">
          <h3>Profits</h3>
          <h5>$ 0.00</h5>
        </div>
        <div class="item">
          <h3>Commissions</h3>
          <h5>$ 0.00</h5>
        </div>
        <div class="item">
          <h3>SLOMINING</h3>
          <h5>$ 5.00</h5>
        </div>
      </div>
      <div class="link d-flex">
        <div class="affility-link">
          <h3>Your Affiliates Link</h3>
          <div class="link-box">
            <span>https://slomining.com/sign-up?ref=328117</span>
            <button class="copy-link">
              Copy Link
            </button>
          </div>
        </div>
        <div class="item">
          <h3>Your Partners</h3>
          <h5>0</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent'
}
</script>

<style  scoped>
.dashboard-profile {
  margin: 10px 0 0 64px;
  width: 100%;
  height: auto;
}

.contain {
  width: 1144px;
  height: 463px;
}

.balance {
  width: 100%;
  height: 96px;
  background-color: var(--blue);
  align-items: center;
  border-radius: 10px;
  padding: 12px 22px;
}

.money {
  width: 30%;
  height: 100%;
  padding: 10px;
  color: #fff;
}

.money h2 {
  font-family: Montserrat-Bold, sans-serif;
  font-size: 17.6px;
}

.money p {
  font-family: Montserrat-Bold, sans-serif;
  font-size: 24px;
  line-height: 32px;
}

.buttns {
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.btn {
  padding: 10px 24px;
  font-family: Montserrat-Medium, sans-serif;
  color: var(--black);
  text-transform: uppercase;
  font-size: 12px;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
}


.total {
  width: 100%;
  height: 94px;
  padding: 12px 22px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .08);
  border-radius: 0.5rem;
  margin: 16px 0;
}

.item {
  width: 366px;
  height: auto;
  margin: 8px 0px;
  padding: 0px 16px;
}

h3 {
  font-family: Montserrat-Bold, sans-serif;
  color: var(--blue);
  font-size: 17.6px;
}

h5 {
  font-family: Montserrat-Bold, sans-serif;
  color: var(--blue);
  font-size: 24px;

}

.profit {
  width: 100%;
  height: 120px;
  justify-content: space-between;
  gap: 32px;
}

.profit .item {
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .08);
  border-radius: 0.5rem;
  padding: 12px 22px;
}

.link {
  width: 100%;
  height: 120px;
  gap: 30px;
  align-items: center;
  margin: 16px 0;
}

.affility-link {
  width: 80%;
  height: 90% !important;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .08);
  border-radius: 0.5rem;
  padding: 12px 22px;
}

.link-box {
  height: 35px;
  border-radius: 8px;
  opacity: .8;
  border: 1px solid #3a516c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}

.link-box span {
  flex: 1;
  width: 0;
  font-size: 13px;
  font-family: Montserrat-Medium,sans-serif;
  color: var(--blue);
  line-height: 18px;
  padding: 0 13px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
}

.copy-link{
  background-color: transparent;
  font-family: Montserrat-Medium,sans-serif;
  border: none;
  padding: 0 13px;
  font-size: 14px;
  color: #00B301;
}
.link .item {
  height: 90% !important;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .08);
  border-radius: 0.5rem;
  padding: 12px 22px;
}
</style>
