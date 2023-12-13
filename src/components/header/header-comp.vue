<template >
    <header>
        <div class="container">
            <div class="logo">
                <img src="../../assets/images/SKYHASH_Монтажная область 1.png" alt="slomining">
            </div>
            <div class="navigation">
                <nav>
                    <ul>
                        <router-link to="/">
                            <li>Home</li>
                        </router-link>
                        <router-link to="/contacts">
                            <li>Contracts</li>
                        </router-link>
                        <router-link to="/dashboard">
                            <li>Dashboard</li>
                        </router-link>
                        <router-link to="/about">
                            <li>About us</li>
                        </router-link>
                    </ul>
                </nav>
                <div class="drop-down" v-on:click="dropclick">
                    <div class="lang">
                        <img src="../../assets/svg/gb.fcfef678.svg" alt="eng">
                    </div>
                    <span>
                        <img src="../../assets/svg/chevron-down.svg" alt="eng">
                    </span>
                    <div class="drop-list" :style="{ display: dropdawn ? 'block' : 'none' }">
                        <ul>
                            <li>
                                <img src="../../assets/svg/gb.fcfef678.svg" alt="eng"> English
                            </li>
                            <li>
                                <img src="../../assets/svg/ru.ab61f31e.svg" alt="ru"> Russian
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="auth">
                    <button class="sign-in">Sign In</button>
                    <button class="sign-up">Sign Up</button>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            dropdawn: false
        }
    },
    methods: {
        dropclick() {
            this.dropdawn = !this.dropdawn
        }
    },

}
</script>
<style scoped>
header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 93%;
    height: 100%;
    display: flex;
    align-items: center;

}

.logo {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
}

.logo img {
    width: 80%;
    height: auto;
}


.navigation {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 10px;
}

nav {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
}

li {
    color: #000;
}

.auth {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.drop-down {
    width: 41px;
    height: 27px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.lang {
    width: 90%;
    height: 100%;
}

.lang img {
    width: 90%;
}

span {
    width: 20%;
}

.drop-list {
    width: 160px;
    height: auto;
    position: absolute;
    top: 40px;
    /* display: none; */
}

.drop-list ul {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 8px 0px;
    border-radius: 6px;
    flex-direction: column;
    gap: 0;
    text-transform: none;
    font-weight: 400;
}

.drop-list ul img {
    width: 15%;
}

.drop-list ul li {
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    gap: 10px;
}

button {
    width: auto;
    padding: 8px 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    border-radius: 7px;
    border: 1px solid #1c2b46;
    text-transform: uppercase;
    transition: .2s linear all;
    cursor: pointer;
}

.sign-in {
    background-color: #1c2b46;
    color: #fff;
}

.sign-in:hover {
    background-color: #fff;
    color: #000;
}



.sign-up {
    background-color: #fff;
    color: #000;
}

.sign-up:hover {
    background-color: #1c2b46;
    color: #fff;
}
</style>