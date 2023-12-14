<template >
   <headerComp />
  <div>
    <router-view></router-view>
  </div>
  <footerComp/>
</template>
<script>
import headerComp from "@/components/header/header-comp.vue"
import footerComp from "./components/footer/footer-comp.vue";
export default {
    components: {
        headerComp,
        footerComp
    }
}
</script>
<style scoped></style>