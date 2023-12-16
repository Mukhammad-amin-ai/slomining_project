<template>
  <div class="deposit">
    <div class="contant">
      <tabReusable title="Deposit" tab="Cryptocurrency " />
      <div class="deposit-container">
        <p>Amount (USDT)</p>
        <form>
          <input type="text" placeholder="Pleace enter amount">
        </form>
        <p>Deposit Network</p>
        <div class="crypto d-flex">
          <div class="item">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-t.svg" alt="">
              </div>
              <p>USDT-TRC20</p>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-t.svg" alt="">
              </div>
              <p>USDT-ERC20</p>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/crypto-L.svg" alt="">
              </div>
              <p>LTC-Litecoin</p>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/etherum.svg" alt="">
              </div>
              <p>ETH-ERC20</p>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <div class="image">
                <img class="img-fluid" src="../../assets/svg/btc.svg" alt="">
              </div>
              <p>BTC-Bitcoin</p>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <button class="next">Next</button>
        </div>
      </div>
      <h2>
        Deposit Records
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


    </div>
  </div>
</template>

<script>
import tabReusable from '../mini_components/tab-reusable.vue';
export default {
  name: "DepositComponent",
  components: {
    tabReusable,
  }
}
</script>

<style scoped>
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
   .contant{
    height: auto;
   }
   .deposit-container{
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
  .next{
    width: 200px;
 }
}
@media screen and (max-width:320px) {
 .next{
    width: 100px;
 }
}


</style>