<template>
  <div class="hero">
    <div class="container">
      <div class="hero-text">
        <h1>Astro Hash: Your Gateway to Top-Tier Cloud Mining</h1>
        <p>
          Empower Your Portfolio with Astro Hash's Distinctive Cloud Mining Edge
        </p>
        <router-link to="/contacts">
          <button class="start-mining pointer">start mining</button>
        </router-link>
      </div>
      <div class="hero-galery">
        <div class="galery-image">
          <img src="../assets/images/AH/ASTRHASH.png" alt="hero" draggable="false" />
        </div>
      </div>
    </div>
  </div>
  <div class="start_and_mining">
    <how-to-start />
    <MiningComponent />
    <WhyChoose />
    <PaymentMethods />
    <div class="w100 d-flex center">
      <div class="contant">
        <p>
          Cutting-Edge New Energy Mining Technology: We set ourselves apart by incorporating the latest
          advancements in new energy mining technology. This commitment to innovation enables us to offer
          users a reliable and secure method for cryptocurrency mining. Our state-of-the-art equipment is
          optimized for energy efficiency, minimizing environmental impact while maximizing returns.
        </p>
        <p>
          Stability and Security:  Astro Hash places the highest priority on stability and security.
          Recognizing the importance of safeguarding your investments, we implement rigorous security measures
          and adopt a vigilant approach to risk management.  Astro Hash provides a safe and risk-free environment
          for mining activities.
        </p>
        <statsComp />
      </div>
    </div>

  </div>
</template>
<script>
import HowToStart from '@/components/start/HowToStart.vue'
import MiningComponent from '@/components/mining/MiningComponent.vue'
import WhyChoose from "@/components/choose/WhyChoose.vue";
import PaymentMethods from "@/components/payment/PaymentMethods.vue";
import statsComp from '@/components/about-us/stats-comp.vue'
// import MiningInvest from "@/components/mining/MiningInvest.vue";

export default {
  components: {
    // MiningInvest,
    PaymentMethods,
    WhyChoose,
    MiningComponent,
    HowToStart,
    statsComp
  }
}
</script>
<style scoped>
.hero {
  width: 100%;
  height: auto;
  display: flex;
  padding: 100px 0;
  justify-content: center;
  align-items: center;
  background-color: #000;
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
  font-size: 45px;
  font-family: Montserrat-Extra-Bold, sans-serif;
  /* color: rgb(28, 43, 70); */
  color: #fff;
  font-weight: 700;
}



p {
  font-family: Montserrat-Medium, sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  margin-top: 24px;
}

.start-mining {
  margin-top: 24px;
  padding: 12px 30px;
  border-radius: 7px;
  background-color: var(--white);
  color: var(--black);
  text-transform: uppercase;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
}

.hero-galery {
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.galery-image {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.galery-image img {
  width: 80%;
}


.contant {
  width: 93%;
  height: auto;

}

.contant p {
  font-family: Montserrat-Medium, sans-serif;
  font-size: 16px;
  color: var(--white);
}

@media screen and (max-width:750px) {
  .container {
    flex-direction: column-reverse;
  }

  .hero-text {
    width: 100%;
  }
  .galery-image img{
    width: 100%;
  }
  h1 {
    font-size: 30px !important;
    line-height: 30px;
  }

  .hero-galery {
    width: 100%;
    padding-bottom: 50px;
  }
}
</style>
