import { createRouter,createWebHistory } from 'vue-router'
import homeCompVue from '@/views/home-comp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homeCompVue,
    }
  ]
})

export default router
