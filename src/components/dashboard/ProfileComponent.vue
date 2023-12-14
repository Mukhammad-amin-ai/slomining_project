<template>
  <div class="dashboard-profile">
    <div class="contain">
      <div class="balance rounded d-flex">
        <div class="money">
          <h2>BALANCE</h2>
          <p>$ 5</p>
        </div>
        <div class="depo">
          <button>Deposit</button>
        </div>
        <div class="withdrow">
          <button>withdrow</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent'
}
</script>

<style  scoped>
.dashboard-profile {
  margin: 10px 0 0 64px;
  width: 100%;
  height: auto;
}

.contain {
  width: 1144px;
  height: 463px;
}

.balance {
  width: 100%;
  height: 96px;
  background-color: var(--blue);
  align-items: center;
  /* pls turn off music */
  /* are you heare this yes fuck dnx xD qani error */
}



</style>
