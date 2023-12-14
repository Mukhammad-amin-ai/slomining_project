<template>
  <div class="parallax-container">
    <div class="parallax-content">
      <!--      <img src="@/assets/images/home/coin.jpg" alt="" />-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParallaxSecond',

}
</script>

<style scoped>
.parallax-container {
  /* Set the container's height to create space for the image */
  height: 400px; /* Adjust this value as needed */

  /* Set the container as relative to control the absolute position of the content */
  position: relative;
  overflow: hidden;
}

.parallax-content {
  /* Position the image absolutely within the container */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Create the parallax effect */
  background-image: url('@/assets/images/home/min.jpeg');
  background-size: cover;
  background-position: center;
  /* Adjust the background-attachment property for parallax effect */
  background-attachment: fixed;
}
</style>
