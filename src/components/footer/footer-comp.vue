<template>
  <footer class="d-flex center">
    <div class="container">
      <div class="contant d-flex center">
        <div class="information d-flex">
          <div class="our-team">
            <div class="our-logo">
              <img src="../../assets/images/SKYHASH.png" alt="" />
            </div>
            <p>
              Our dedicated team of experts, coupled with cutting-edge technology, enables us to
              curate a curated of top-tier Cloud Mining investment projects, ensuring that your
              investment journey is both rewarding and secure.
            </p>
            <div class="social-media">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </div>
          <div class="learn">
            <p>LEARN</p>
            <ul>
              <li>What is cryptocurrency?</li>
              <li>What is web3?</li>
            </ul>
          </div>
          <div class="compan">
            <p>COMPANY</p>
            <ul>
              <li>About Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="all-rights d-flex">
        <div class="image">
          <router-link to="/">
            <img src="../../assets/images/SKYHASH.png" alt="about" style="object-fit: contain" />
          </router-link>
        </div>
        <h5>© 2018-2023, SLOMINING. All Rights Reserved.</h5>
      </div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style scoped>
footer {
  width: 100%;
  height: auto;
  background-color: var(--blue);
}

.container {
  width: 95%;
  height: auto;
}

.contant {
  width: 100%;
  height: 80%;
  padding: 20px 0;
}

.information {
  width: 100%;
  height: 70%;
  justify-content: space-between;
  align-items: center;
}

.our-team {
  width: 25%;
  height: 100%;
}

.our-logo {
  width: 50%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.our-logo img {
  width: 80%;
}

.our-team p {
  font-family: Montserrat-Regular, sans-serif;
  font-size: 15px;
  line-height: 25px;
  margin-top: 30px;
  color: #fff;
}

.social-media {
  width: 50%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

.item {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
}

.learn {
  width: 30%;
  height: 100%;
}

.learn ul {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

.learn li {
  font-size: 16px;
  font-family: Montserrat-Medium, sans-serif;
  color: #fff;
  padding: 10px 0;
}

.learn p {
  font-size: 16px;
  font-family: Montserrat-Extra-Bold, sans-serif;
  color: #fff;
}

.compan {
  width: 25%;
  height: 100%;
}

.compan ul {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

.compan li {
  font-size: 16px;
  font-family: Montserrat-Medium, sans-serif;
  color: #fff;
  padding: 10px 0;
}

.compan p {
  font-size: 16px;
  font-family: Montserrat-Extra-Bold, sans-serif;
  color: #fff;
}

.all-rights {
  width: 100%;
  height: 20%;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
}

.image {
  width: 10%;
  height: 50%;
}

.image img {
  width: 60%;
  height: 100%;
}

.all-rights h5 {
  font-family: Montserrat-Regular, sans-serif;
  font-size: 15px;
  padding: 8px 0;
  color: #fff;
}
</style>
