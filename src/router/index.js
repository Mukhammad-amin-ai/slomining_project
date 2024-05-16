import { createRouter, createWebHistory } from 'vue-router'
import homeCompVue from '@/views/home-comp.vue'

import dashboardCompVue from '@/components/dashboard/dashboard-comp.vue'
import aboutUsCompVue from '@/views/about-us-comp.vue'
import signInVue from '@/views/sign-in.vue'
import signUpVue from '@/views/sign-up.vue'
import forgotPasswordVue from '@/views/forgot-password.vue'
import privacyComp from '@/views/privacy-comp.vue'
import termsComp from '@/views/terms-comp.vue'
import webComp from '@/views/web-comp.vue'
import crypto from '@/views/crupto-comp.vue'
import faqComp from '@/views/faq-comp.vue'

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
      component: () => import('@/components/contracts/ContractsComponent.vue')
    },
    {
      path: '/dashboard',
      component: dashboardCompVue,
      children: [
        {
          path: '/dashboard/profile',
          name: 'profile',
          component: () => import('@/components/dashboard/ProfileComponent.vue')
        },
        {
          path: '/dashboard/my-bills',
          name: 'bills',
          component: () => import('@/components/dashboard/MyBills.vue')
        },
        {
          path: '/dashboard/deposit',
          name: 'deposit',
          component: () => import('@/components/dashboard/DepositComponent.vue')
        },
        {
          path: '/dashboard/withdraw',
          name: 'withdraw',
          component: () => import('@/components/dashboard/WithDraw.vue')
        },
        {
          path: '/dashboard/contracts',
          name: 'ContractComponent',
          component: () => import('@/components/dashboard/contractsComponent.vue')
        },
        {
          path: '/dashboard/affiliates',
          name: 'affiliatesComponent',
          component: () => import('@/components/dashboard/affiliatesComponent.vue')
        },
        {
          path: '/dashboard/settings',
          name: 'settings',
          component: () => import('@/components/dashboard/SettingsPage.vue')
        }
      ]
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
      component: () => import('@/components/mining/MiningDetail.vue')
    },

    {
      path: '/privacy',
      component: privacyComp
    },
    {
      path: '/terms',
      component: termsComp
    },
    {
      path: '/what-is-cryptocurrency',
      component: crypto
    },
    {
      path: '/what-is-web3',
      component: webComp
    },
    {
      path:'/faq',
      component:faqComp
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})
router.beforeEach((to, from, next) => {
  AOS.init() 
  next()
})

export default router
