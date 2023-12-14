<template>
  <div class="container">
    <div class="dashboard d-flex justify-content-start">
      <div class="left-side">
        <ul style="gap: 20px">
          <li>
            <router-link to="/dashboard/profile" class="dashboard_link text-black">
              <img src="@/assets/icons/puzzle.svg" alt="" class="dashboard_icon" />
              dashboard</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard/my-bills" class="dashboard_link text-black">
              <img src="@/assets/icons/text.svg" alt="" class="dashboard_icon" /> My
              Bills</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard/my-bills" class="dashboard_link text-black">
              <img src="@/assets/icons/cash.svg" alt="" class="dashboard_icon" /> Deposit
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/my-bills" class="dashboard_link text-black">
              <img src="@/assets/icons/swap.svg" alt="" class="dashboard_icon" /> withdraw
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/my-bills" class="dashboard_link text-black">
              <img src="@/assets/icons/text.svg" alt="" class="dashboard_icon" /> My
              orders</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard/my-bills" class="dashboard_link text-black">
              <img src="@/assets/icons/puzzle.svg" alt="" class="dashboard_icon" /> settings
            </router-link>
          </li>
        </ul>
      </div>
      <div class="right-side">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.dashboard {
  width: 100%;
  height: 500px;
}
</style>
