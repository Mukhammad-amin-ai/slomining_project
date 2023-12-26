<template >
    <div class="sticy-nav">
        <div class="item d-flex center">
            <router-link class="d-flex center flex-column" to="/">
                <img src="../../assets/svg/home-outline.svg" alt="person">
                <p>Home</p>
            </router-link>
        </div>
        <div class="item d-flex center ">
            <router-link class="d-flex center flex-column" to="/contacts">
                <img src="../../assets/svg/bag-handle-outline.svg" alt="person">
                <p>Contracts</p>
            </router-link>
        </div>
        <div class="item d-flex center ">
            <router-link class="d-flex center flex-column" to="/dashboard/profile">
                <img src="../../assets/svg/puzzle-mini.svg" alt="person">
                <p>Dashboard</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.sticy-nav {
    width: 100%;
    height: 60px;
    display: none;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: #000;
    bottom: 0;
    box-shadow: 0 -5px 10px 0 rgba(0,0,0,.06);
    z-index: 99;
}

.item {
    width: 20%;
    height: 100%;
    text-transform: uppercase;
}

.item a {
    font-family: Montserrat-Medium, sans-serif;
    color: #fff;
}

@media screen and (max-width:990px) {
    .sticy-nav {
        display: flex;
    }

}
@media screen and (max-width:425px) {
    .item{
        font-size: 12px;
    }
    .sticy-nav {
       padding: 10px;
    }
}

@media screen and (max-width:375px) {
    .item{
        font-size: 10px;
    }

}
</style>