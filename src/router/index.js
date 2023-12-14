import { createRouter, createWebHistory } from 'vue-router'
import homeCompVue from '@/views/home-comp.vue'
import contactsComp from "@/views/contacts-comp.vue"
import dashboardCompVue from '@/views/dashboard-comp.vue'
import aboutUsCompVue from '@/views/about-us-comp.vue'
import signInVue from '@/views/sign-in.vue'
import signUpVue from '@/views/sign-up.vue'

import AOS from "aos";
import 'aos/dist/aos.css';
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
      path: "/dashboard",
      component: dashboardCompVue
    },
    {
      path: "/about",
      component: aboutUsCompVue
    },
    {
      path: "/sign-in",
      component: signInVue
    },
    {
      path: "/sign-up",
      component: signUpVue
    }
  ],

})
router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router
