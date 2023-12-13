import { createRouter, createWebHistory } from 'vue-router'
import homeCompVue from '@/views/home-comp.vue'
import contactsComp from "@/views/contacts-comp.vue"
import dashboardCompVue from '@/views/dashboard-comp.vue'
import aboutUsCompVue from '@/views/about-us-comp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homeCompVue,
    },
    {
      path: "/contacts",
      component: contactsComp
    },
    {
      path:"/dashboard",
      component:dashboardCompVue
    },
    {
      path:"/about",
      component:aboutUsCompVue
    }
  ]
})

export default router
