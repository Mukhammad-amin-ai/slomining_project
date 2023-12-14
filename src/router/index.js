import { createRouter, createWebHistory } from 'vue-router'
import homeCompVue from '@/views/home-comp.vue'
import contactsComp from '@/views/contacts-comp.vue'
import dashboardCompVue from '@/views/dashboard-comp.vue'
import aboutUsCompVue from '@/views/about-us-comp.vue'
import signInVue from '@/views/sign-in.vue'
import signUpVue from '@/views/sign-up.vue'
import forgotPasswordVue from '@/views/forgot-password.vue'
import privacyComp from '@/views/privacy-comp.vue'
import termsComp from "@/views/terms-comp.vue"


import AOS from 'aos'
import 'aos/dist/aos.css'
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: homeCompVue
    },
    {
      path: '/contacts',
      component: contactsComp
    },
    {
      path: '/dashboard',
      component: dashboardCompVue
    },
    {
      path: '/about',
      component: aboutUsCompVue
    },
    {
      path: '/sign-in',
      component: signInVue
    },
    {
      path: '/sign-up',
      component: signUpVue
    },
    {
      path: '/forgot',
      component: forgotPasswordVue
    },
    {
      path: '/product-detail/:id',
      name: 'Product Detail',
      component: () => import('@/components/mining/MiningDetail.vue')},

    {
      path: "/privacy",
      component: privacyComp
    },
    {
      path: "/terms",
      component: termsComp
    }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
})
router.beforeEach((to, from, next) => {
  AOS.init() // Initialize AOS
  next()
})

export default router
