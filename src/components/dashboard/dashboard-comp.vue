<template>
  <div class="dashboard_parent">
    <div class="container">
      <div class="dashboard d-flex justify-content-start">
        <div class="left-side">
          <ul>
            <li>
              <router-link to="/dashboard/profile" class="dashboard_link text-black"
                :class="{ 'router-active-link': isRouterActive }">
                <statsComp :color="computedColor" />
                dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/my-bills" class="dashboard_link text-black"
              :class="{ 'router-active-link': isRouterActive2 }" >
                <MyBills :color="computedColor2" />
                My Bills
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/deposit" class="dashboard_link text-black"
              :class="{ 'router-active-link': isRouterActive3 }" >
                <depositIcon :color="computedColor3" />
                Deposit
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/withdraw" class="dashboard_link text-black"
              :class="{ 'router-active-link': isRouterActive4 }" >
                <withDrowIcon :color="computedColor4" />
                withdraw
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/contracts" class="dashboard_link text-black"
                           :class="{ 'router-active-link': isRouterActive6 }" >
                <contractIcon :color="computedColor6" />
                Contracts
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/settings" class="dashboard_link text-black"
              :class="{ 'router-active-link': isRouterActive5 }"  >
                <SettingsIcon :color="computedColor5" />
                settings
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right-side ml-1">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import statsComp from '../../assets/icons/deposit-icon/stats-comp.vue'
import MyBills from '../../assets/icons/deposit-icon/my-bills.vue'
import depositIcon from '../../assets/icons/deposit-icon/deposit-icon.vue'
import withDrowIcon from '../../assets/icons/deposit-icon/withdro-icon.vue'
import SettingsIcon from '../../assets/icons/deposit-icon/setting-icon.vue'
import contractIcon from '@/assets/icons/deposit-icon/contract-icon.vue'


export default {
  data() {
    return {
      path: '',
      colorr: 'white',
    }
  },
  components: {
    contractIcon,
    statsComp,
    MyBills,
    depositIcon,
    withDrowIcon,
    SettingsIcon
  },
  computed: {
    isRouterActive() {
      return this.$route.path === '/dashboard/profile';
    },
    isRouterActive2() {
      return this.$route.path === '/dashboard/my-bills';
    },
    isRouterActive3() {
      return this.$route.path === '/dashboard/deposit';
    },
    isRouterActive4() {
      return this.$route.path === '/dashboard/withdraw';
    },
    isRouterActive5() {
      return this.$route.path === '/dashboard/settings';
    },
    isRouterActive6() {
      return this.$route.path === '/dashboard/contracts';
    },
    computedColor6() {
      return this.isRouterActive6 ? 'black' : 'white';
    },
    computedColor5() {
      return this.isRouterActive5 ? 'black' : 'white';
    },
    computedColor4() {
      return this.isRouterActive4 ? 'black' : 'white';
    },
    computedColor3() {
      return this.isRouterActive3 ? 'black' : 'white';
    },
    computedColor2() {
      return this.isRouterActive2 ? 'black' : 'white';
    },
    computedColor() {
      return this.isRouterActive ? 'black' : 'white';
    },
  },
  methods: {
    getPath() {
      return (this.path = this.$route.fullPath)
    },
  },
  watch: {
    $route: 'getPath',
  },
  mounted() {
    this.getPath()
  }
}
</script>
<style scoped>
.router-link-active {
  background: white !important;
  color: #000 !important;
}

@media screen and (max-width:1380px) {
  .right-side {
    width: 80%;
  }
}

@media screen and (max-width:920px) {
  .left-side {
    display: none;
  }

  .right-side {
    width: 100%;
  }
}
</style>
