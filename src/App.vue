<template>
  <div>
    <homeComp />
  </div>
</template>
<script>
import data from '@/static/data'
import homeComp from './views/home-comp.vue'
export default {
  data() {
    return {
      data
    }
  },
  components: {
    homeComp
  }
}
</script>
<style scoped></style>
