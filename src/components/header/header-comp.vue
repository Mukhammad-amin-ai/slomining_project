<template>
  <header :class="{ 'b-shadow': isScrolled }">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="../../assets/images/AH/logo.png" alt="logo" />
      </router-link>
      <div class="navigation">
        <nav>
          <ul>
            <router-link to="/">
              <li :class="{ active: $route.fullPath === '/' }">
                <span>Home
                  <img v-show="{ active: $route.fullPath === '/' }" src="../../assets/images/line.png" alt="line" />
                </span>
              </li>
            </router-link>
            <router-link to="/contacts">
              <li :class="{ active: $route.fullPath === '/contacts' }">
                <span>Contracts
                  <img v-show="{ active: $route.fullPath === '/contacts' }" src="../../assets/images/line.png"
                    alt="line" />
                </span>
              </li>
            </router-link>
            <router-link to="/dashboard/profile" v-if="isLogin">
              <li :class="[
                { active: $route.fullPath === '/dashboard/' },
                { active: $route.fullPath === '/dashboard/profile' }
              ]">
                <span>Dashboard
                  <img v-show="[
                    { active: $route.fullPath === '/dashboard/' },
                    { active: $route.fullPath === '/dashboard/profile' }
                  ]" src="../../assets/images/line.png" alt="line" />
                </span>
              </li>
            </router-link>

            <router-link to="/sign-in" v-else>
              <li :class="[
                { active: $route.fullPath === '/dashboard/' },
                { active: $route.fullPath === '/dashboard/profile' }
              ]">
                <span>Dashboard
                  <img v-show="[
                    { active: $route.fullPath === '/dashboard/' },
                    { active: $route.fullPath === '/dashboard/profile' }
                  ]" src="../../assets/images/line.png" alt="line" />
                </span>
              </li>
            </router-link>
            <router-link to="/about">
              <li :class="{ active: $route.fullPath === '/about' }">
                <span>About us
                  <img v-show="{ active: $route.fullPath === '/about' }" src="../../assets/images/line.png" alt="line" />
                </span>
              </li>
            </router-link>
          </ul>
        </nav>

      </div>
      <div class="auth3" v-if="isLogin">
        <button class="sign-in" @click="logOut">Sign Out</button>
      </div>
      <div class="auth2" v-if="isLogin">
        <router-link to="/dashboard/profile">
          <img class="img-fluid" style="width: 25px;  !important;" src="../../assets/icons/profile-icon.png" alt="" />
        </router-link>
      </div>
      <div class="auth" v-if="!isLogin">
        <router-link to="/sign-in">
          <button class="sign-in">Sign In</button>
        </router-link>
        <router-link to="/sign-up">
          <button class="sign-up">Sign Up</button>
        </router-link>
      </div>
      <div class="settings center ml-5" v-if="!isLogin">
        <button class="bx-shadow center d-flex" @click="dropauth">
          <img src="../../assets/svg/settings-outline.svg" alt="settings" />
        </button>
      </div>
      <div class="menu ml-5 center">
        <button class="bx-shadow center d-flex" @click="clickMenu">
          <img src="../../assets/svg/menu-outline.svg" alt="menu" />
        </button>
      </div>
      <div class="drop-auth" :style="{ display: dropauthList ? 'flex' : 'none' }">
        <router-link to="/sign-in">
          <button class="sign-in">Sign In</button>
        </router-link>
        <router-link to="/sign-up">
          <button class="sign-up">Sign Up</button>
        </router-link>
      </div>
    </div>
  </header>
</template>
<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      dropdawn: false,
      isScrolled: false,
      activeIndex: 0,
      dropauthList: false
    }
  },
  computed: {
    isLogin() {
      return JSON.parse(localStorage.getItem('isLogin'))
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    logOut() {
      Swal.fire({
        text: `Dou you want sign out?`,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: '#4466f2',
        cancelButtonText: 'No',
        cancelButtonColor: '#f31616',
        reverseButtons: false
      }).then(async (result) => {
        console.log(JSON.parse(localStorage.getItem('isLogin')))
        if (result.isConfirmed) {
          localStorage.removeItem('form')
          localStorage.removeItem('isLogin')
          this.$store.state.isLogin = false
          this.isLogin = false
          this.$router.push('/')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer
              toast.onmouseleave = Swal.resumeTimer
            }
          })
          await Toast.fire({
            icon: 'success',
            title: 'Sign out successfully'
          })
          throw window.location = '/'
        }
      })
    },
    dropclick() {
      this.dropdawn = !this.dropdawn
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 700
    },

    dropauth() {
      this.dropauthList = !this.dropauthList
    },
    clickMenu() {
      this.$store.dispatch('modalfunc')
    }
  }
}
</script>
<style scoped>
header {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  transition: all 0.3s linear;
  z-index: 99;
  background-color: #fff;
}

.b-shadow {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 0;
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  background: linear-gradient(90deg,
      hsla(0, 0%, 100%, 0.1) -1.52%,
      hsla(0, 0%, 100%, 0.024) 104.35%);
  background-blend-mode: multiply, normal;
}

.b-shadow .navigation nav ul a li span {
  color: var(--white) !important;
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
  justify-content: space-evenly;
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
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
}

li {
  color: #1d2c4899;
}

li.active {
  color: #000;
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

li.active img {
  opacity: 1;
}

.auth {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.auth2 {
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.auth3 {
  width: 10%;
  height: 100%;
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
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
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
  border-radius: 7px;
  border: 1px solid #000;
  text-transform: uppercase;
  transition: 0.2s linear all;
  cursor: pointer;
}

.sign-in {
  background-color: #000;
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
  background-color: #000;
  color: #fff;
}

.ml-5 {
  margin-left: 10px;
}

.settings {
  width: 5%;
  height: auto;
  display: none;
}

.settings button {
  width: 40px;
  height: 40px;
  background-color: #fff;
  background-color: transparent;
  border: none;
}

.user {
  width: 5%;
  height: auto;
  display: none;
}

.user button {
  width: 40px;
  height: 40px;
  background-color: #fff;
  background-color: transparent;
  border: none;
}

.menu {
  width: 5%;
  height: auto;
  display: none;
}

.menu button {
  width: 40px;
  height: 40px;
  background-color: #fff;
  background-color: transparent;
  border: none;
}

.drop-auth {
  background-color: #fff;
  display: none;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  right: 80px;
  top: 70px;
  padding: 30px;
  border-radius: 16px;
}

.drop-auth .sign-in {
  padding-left: 17px;
}

/* Media for header */
@media screen and (max-width: 1310px) {
  .auth {
    display: none !important;
  }

  .settings {
    display: flex;
  }

  .auth3 {
    width: 20%;
  }
}

@media screen and (max-width: 990px) {
  nav {
    display: none !important;
  }

  .navigation {
    justify-content: flex-end !important;
  }

  .menu {
    display: flex;
  }

  .user {
    display: flex;
  }

  .auth3 {
    display: none !important;
  }
}

@media screen and (max-width: 630px) {
  .auth2 {
    width: 20%;
  }

  .auth3 {
    width: 20%;
  }
}

@media screen and (max-width: 600px) {
  .logo {
    width: 20%;
  }

  .logo img {
    width: 100%;
  }

  .ml-5 {
    margin-left: 15px;
  }
}

@media screen and (max-width: 500px) {
  .logo {
    width: 25%;
  }

  .ml-5 {
    margin-left: 20px;
  }

  .drop-auth {
    right: 10px;
  }

  .settings {
    margin-right: 10px;
  }

  .sign-in {
    font-size: 10px;
  }

  .sign-up {
    font-size: 10px;
  }

  .auth3 {
    display: none !important;
  }

  .drop-down {
    display: none !important;
  }
}

/* @media screen and (max-width: 376px) {

  .sign-in {
    font-size: 10px;
  }

  .sign-up {
    font-size: 10px;
  }
} */

@media screen and (max-width: 320px) {
  .logo {
    width: 50% !important;
  }

  .drop-auth {
    right: 0px;
  }
}
</style>
