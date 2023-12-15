<template >
  <headerComp />
  <div>
    <router-view></router-view>
  </div>
  <stickyNav />
  <footerComp />
</template>
<script>
import headerComp from "@/components/header/header-comp.vue"
import footerComp from "./components/footer/footer-comp.vue";
import stickyNav from "./components/header/sticky-nav.vue";
export default {
  components: {
    headerComp,
    footerComp,
    stickyNav
  }
}
</script>
<style scoped></style>