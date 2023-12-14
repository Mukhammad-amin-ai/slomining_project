<template>
  <div class="hero">
    <div class="container">
      <div class="hero-text">
        <h1>EFFICIENT AND STABLE <span>CLOUD</span> <span>MINING</span> INVESTMENT PLATFORM</h1>
        <p>
          We features a world-class technical team. Using advanced servers and a robust solar power
          generation system, we offer stable investment returns for investors with low costs and
          high profits.
        </p>
        <p>Begin your cloud mining investment, withdraw your first payout after 24 hours.</p>
        <button class="start-mining">start mining</button>
      </div>
      <div class="hero-galery">
        <div class="galery-image">
          <img src="../assets/images/phonePicture.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="start_and_mining">
    <how-to-start />
    <MiningComponent />
  </div>
    <WhyChoose />
    <PaymentMethods />
</template>
<script>
import HowToStart from '@/components/start/HowToStart.vue'
import MiningComponent from '@/components/mining/MiningComponent.vue'
import WhyChoose from "@/components/choose/WhyChoose.vue";
import PaymentMethods from "@/components/payment/PaymentMethods.vue";

export default {
  components: {
    PaymentMethods,
    WhyChoose,
    MiningComponent,
    HowToStart
  }
}
</script>
<style scoped>
.hero {
  width: 100%;
  /*height: 85vh;*/
  display: flex;
  padding: 100px 0;
  justify-content: center;
  align-items: center;
}

.container {
  width: 93%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-text {
  width: 55%;
  height: 100%;
}

h1 {
  /* width: 100%; */
  font-size: 45px;
  font-family: Montserrat-Extra-Bold, sans-serif;
  color: rgb(28, 43, 70);
  font-weight: 700;
}

span {
  color: rgb(0, 153, 250);
}

p {
  font-family: Montserrat-Medium, sans-serif;
  color: rgb(128, 145, 167);
  font-weight: 400;
  font-size: 16px;
  margin-top: 24px;
}

.start-mining {
  margin-top: 24px;
  padding: 12px 30px;
  border-radius: 7px;
  background-color: var(--blue);
  color: var(--white);
  text-transform: uppercase;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
}

.hero-galery {
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.galery-image {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.galery-image img {
  width: 100%;
}
</style>
