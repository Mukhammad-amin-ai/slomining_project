<template>
  <div class="modal" :class="$store.state.activeClass">
    <button class="close" @click="closeMod" style="margin-right: 20px">
      <img src="../../assets/svg/close-outline.svg" alt="close" />
    </button>
    <div class="sidebar" :class="$store.state.activeClass">
      <ul>
        <li v-for="link in sidebarLinks" :key="link.path">
          <router-link :to="link.path" class="sidebar_links" @click="setActive">
            <span class="link_name">{{ link.name }}</span>
            <img :style="{ opacity: isActive(link.path) ? '1' : '0' }" src="@/assets/images/line.png" alt="line" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <div
      class="closeBg"
      @click="closeMod"
      :class="{ active_bg: $store.state.activeClass === 'active_navbar' }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      sidebarLinks: [
        { name: 'Home', path: '/' },
        { name: 'Contracts', path: '/contacts' },
        { name: 'Dashboard', path: '/dashboard/profile' },
        { name: 'About us', path: '/about' }
      ]
    };
  },
  computed: {
    activeLink() {
      return this.$route.fullPath;
    }
  },
  methods: {
    isActive(linkPath) {
      return this.activeLink === linkPath;
    },
    setActive() {
      this.closeMod();
      // You may not need this function if clicking the link updates the active route automatically.
    },
    closeMod() {
      this.$store.dispatch('modalClose');
    }
  },
  updated() {
    document.body.style.overflow = this.$store.state.activeClass === 'active_navbar' ? 'hidden' : 'visible';
  }
};
</script>

<style scoped>
.active_bg {
  width: 30%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999;
}
.modal {
  width: 100vw;
  max-width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 999999999;
  visibility: hidden;
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
  width: 70%;
  height: 100%;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  top: 0;
  box-shadow: 0 0 12px rgba(28, 43, 70, 0.2);
  padding: 1.5rem 0 84px;
  transition: all 0.2s linear;
  transform: translateX(-100%);
}

.active_navbar {
  visibility: visible;
  transform: translateX(0%);
}

ul {
  width: 100%;
  height: auto;
}

.link_name {
  width: 100%;

  padding: 0.5rem 1.5rem 0 1.5rem;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
}
.sidebar_links {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.sidebar_links img {
  width: 50px;
  margin-left: 25px;
}
.link_name {
  color: #1d2c4899;
}

li span {
  position: relative;
  width: 100%;
}
</style>
