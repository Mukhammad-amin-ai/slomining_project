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
            <button class="btn">Withdraw</button>
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
      <div class="toptal-resp">
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
          <h3>ASTRO HASH</h3>
          <h5>$ 5.00</h5>
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
  margin: 10px 0 0 30px;
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
  background-color: rgb(97, 96, 96);
  /* background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -1.52%, hsla(0, 0%, 100%, 0.024) 104.35%); */
  align-items: center;
  border-radius: 10px;
  padding: 12px 15px;
  gap: 40px;
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
  /* color: #000; */
}

.money p {
  font-family: Montserrat-Bold, sans-serif;
  font-size: 24px;
  line-height: 32px;
}

.buttns {
  width: 46%;
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
  padding: 12px 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .08);
  border-radius: 0.5rem;
  margin: 16px 0;
  gap: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -1.52%, hsla(0, 0%, 100%, 0.024) 104.35%);
}

.item {
  width: 400px;
  height: auto;
  margin: 8px 0px;
  padding: 0px 16px;

}

h3 {
  font-family: Montserrat-Bold, sans-serif;
  color: var(--white);
  font-size: 17.6px;
}

h5 {
  font-family: Montserrat-Bold, sans-serif;
  color: var(--white);
  font-size: 24px;

}

.toptal-resp {
  width: 100%;
  height: auto;
  display: none;
  gap: 10px;
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
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -1.52%, hsla(0, 0%, 100%, 0.024) 104.35%);
}

@media screen and (max-width:1380px) {
  .contain {
    width: 100%;
  }
}

@media screen and (max-width:1024px) {
  .dashboard-profile {
    width: 90%;
  }

  .contain {
    width: 100%;
  }
}

@media screen and (max-width:768px) {
  .total {
    display: none !important;
  }

  .toptal-resp {
    display: flex;
  }

  .toptal-resp .item {
    /* background-color: #fff; */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(60px);
    backdrop-filter: blur(60px);
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -1.52%, hsla(0, 0%, 100%, 0.024) 104.35%);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .08);
    border-radius: 0.5rem;
    padding: 20px;
  }

  .item {
    border: 1px solid #000;
  }

}

@media screen and (max-width:600px) {
  .contain {
    height: auto;
  }

  .toptal-resp {
    flex-direction: column;
  }

  .profit {
    height: auto;
    flex-direction: column;
    gap: 0;
  }

  .profit .item {
    padding: 20px;
  }

  .item {
    width: 100%;
  }

  .dashboard-profile {
    margin: 10px 0 0 10px !important;
  }
}

@media screen and (max-width:425px) {
  .balance {
    height: auto;
    flex-direction: column;
    align-items: flex-start !important;
  }

  .buttns {
    gap: 10px;
  }
}
</style>
