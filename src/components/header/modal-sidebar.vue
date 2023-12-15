<template >
    <div class="modal" :class="$store.state.activeClass">
        <button class="close">
            <img src="../../assets/svg/close-outline.svg" alt="close">
        </button>
        <div class="sidebar" :class="$store.state.activeClass">
            <ul>
                <router-link to="/" @click="homefunc">
                    <li>
                        <span>Home
                            <img :style="{ opacity: active ? '1' : '0' }" src="../../assets/images/line.png" alt="line" />
                        </span>
                    </li>
                </router-link>
                <router-link to="/contacts" @click="contractFunc">
                    <li>
                        <span>Contracts
                            <img :style="{ opacity: contract ? '1' : '0' }" src="../../assets/images/line.png" alt="line" />
                        </span>
                    </li>
                </router-link>
                <router-link to="/dashboard/profile" @click="dashboardfunc">
                    <li>
                        <span>Dashboard
                            <img :style="{ opacity: dashboard ? '1' : '0' }" src="../../assets/images/line.png"
                                alt="line" />
                        </span>
                    </li>
                </router-link>
                <router-link to="/about" @click="aboutfunc">
                    <li>
                        <span>About us
                            <img :style="{ opacity: about ? '1' : '0' }" src="../../assets/images/line.png" alt="line" />
                        </span>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            activeIndex: 0,
            active: false,
            contract: false,
            dashboard: false,
            about: false
        }
    },
    mounted() {
        this.myFnc()
    },
    methods: {
        homefunc() {
            this.active = true
            this.contract = false
            this.dashboard = false
            this.about = false
        },
        contractFunc() {
            this.contract = true
            this.active = false
            this.dashboard = false
            this.about = false
        },
        dashboardfunc() {
            this.contract = false
            this.active = false
            this.dashboard = true
            this.about = false
        },
        aboutfunc() {
            this.contract = false
            this.active = false
            this.dashboard = false
            this.about = true
        },
        myFnc() {
            if (this.$route.fullPath === '/') {
                this.active = true
            } else if (this.$route.fullPath === '/contacts') {
                this.contract = true
            } else if (this.$route.fullPath === '/dashboard/profile') {
                this.dashboard = true
            } else if (this.$route.fullPath === '/about') {
                this.about = true
            }
        }
    },

}
</script>
<style scoped>
.modal {
    width: 100vw;
    max-width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    z-index: 999999999;
    display: none;
}

.close {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 25px;
    top: 25px;
    border: none;
    background-color: #fff;
    border-radius: 50%;
}

.sidebar {
    width: 250px;
    height: 85%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    box-shadow: 0 0 12px rgba(28, 43, 70, .2);
    padding: 1.5rem 0 84px;
    transition: transform .3s linear;
    transform: translateX(-100%)
}

.active {
    display: block;
    transform: translateX(0%)
}

ul {
    width: 100%;
    height: auto;
}

li {
    width: 100%;
    height: 42px;
    padding: 0.5rem 1.5rem;
    font-family: Montserrat-Bold, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
}

li {
    color: #1d2c4899;
}


li span {
    position: relative;
    width: 100%;
}

li img {
    position: absolute;
    bottom: -0.575rem;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0.375rem;
    opacity: 0;
    transition: all 0.3s ease;
}
</style>