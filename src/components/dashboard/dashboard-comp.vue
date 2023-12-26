<template>
  <div class="dashboard_parent">
    <div class="container">
      <div class="dashboard d-flex justify-content-start">
        <div class="left-side">
          <ul>
            <li>
              <router-link to="/dashboard/profile" class="dashboard_link text-black"
                :class="'router-active-link' ? colorr = 'white' : colorr = 'black'">
                <!-- <img src="@/assets/svg/stats-chart-outline.svg" alt="chart" class="dashboard_icon" /> -->
                <statsComp :color="colorr" />
                dashboard
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/my-bills" class="dashboard_link text-black">
                <!-- <img src="@/assets/icons/text.svg" alt="text" class="dashboard_icon" /> -->
                <MyBills color="white" />
                My Bills
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/deposit" class="dashboard_link text-black">
                <!-- <img src="@/assets/icons/cash.svg" alt="cash" class="dashboard_icon" /> -->
                <depositIcon color="white" />
                Deposit
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/withdraw" class="dashboard_link text-black">
                <!-- <img src="@/assets/icons/swap.svg" alt="swap" class="dashboard_icon" /> -->
                <withDrowIcon color="white" />
                withdraw
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard/settings" class="dashboard_link text-black">
                <!-- <img src="@/assets/icons/puzzle.svg" alt="puzzle" class="dashboard_icon" />  -->
                <SettingsIcon color="white" />
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
export default {
  data() {
    return {
      path: '',
      colorr: 'white'
    }
  },
  components: {
    statsComp,
    MyBills,
    depositIcon,
    withDrowIcon,
    SettingsIcon
  },
  methods: {
    getPath() {
      return (this.path = this.$route.fullPath)
    }
  },
  watch: {
    $route: 'getPath'
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
