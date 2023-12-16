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
            <img
              :style="{ opacity: isActive(link.path) ? '1' : '0' }"
              src="@/assets/images/line.png"
              alt="line"
            />
          </router-link>
        </li>
        <li>
          <div class="profile_dropdown d-flex justify-content-between center" @click="openMenu">
            <div class="link_name profile_name" ref="profile">PROFILE</div>
            <img
              class="profile_icon"
              src="@/assets/icons/right.svg"
              style="width: 20px; margin-top: 6px; margin-right: 10px"
              alt=""
              ref="icon"
            />
          </div>
          <div class="opened_items d-flex flex-column mt-1" ref="opened_items">
            <router-link
              class="sub_link_name"
              v-for="link in openedItems"
              :to="link.path"
              :key="link"
            >
              <span @click="setActive">
                {{ link.name }}
              </span>
            </router-link>
          </div>
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
      ],
      openedItems: [
        { name: 'MY BILLS', path: '/dashboard/my-bills' },
        { name: 'DEPOSIT', path: '/dashboard/deposit' },
        { name: 'WITHDRAW', path: '/dashboard/withdraw' },
        { name: 'MY ORDERS', path: '/dashboard/order' },
        { name: 'CONTRACTS', path: '/contacts' },
        { name: 'SETTINGS', path: '/dashboard/settings' }
      ],
      isOpen: false
    }
  },
  computed: {
    activeLink() {
      return this.$route.fullPath
    }
  },
  methods: {
    isActive(linkPath) {
      return this.activeLink === linkPath
    },
    setActive() {
      this.closeMod()
      // You may not need this function if clicking the link updates the active route automatically.
    },
    closeMod() {
      this.$store.dispatch('modalClose')
    },
    openMenu() {
      this.isOpen = !this.isOpen
      if (!this.isOpen) {
        this.$refs.opened_items.classList.add('opened')
        this.$refs.icon.classList.add('rotate_icon')
        this.$refs.profile.classList.add('active_profile')
      } else {
        this.$refs.opened_items.classList.remove('opened')
        this.$refs.icon.classList.remove('rotate_icon')
        this.$refs.profile.classList.remove('active_profile')
      }
    }
  },
  updated() {
    document.body.style.overflow =
      this.$store.state.activeClass === 'active_navbar' ? 'hidden' : 'visible'
  }
}
</script>

<style scoped>
.opened_items {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out; /* Adjust the timing function as needed */
  background: var(--form_bg);
}

.opened {
  max-height: 250px; /* Set a maximum height for smooth transition */
}

.rotate_icon {
  transform: rotate(90deg);
  transition: transform 0.3s ease-out; /* Transition for the icon rotation */
}
.active_bg {
  width: 30%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
}
.modal {
  width: 100vw;
  max-width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 100;
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
.sub_link_name {
  width: 100%;
  padding: 0.5rem 1.5rem 0 1.5rem;
  font-family: Montserrat-Regular, sans-serif;
  font-size: 14px;
  color: var(--text_gray);
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
.active_profile {
  color: var(--blue);
}

li span {
  position: relative;
  width: 100%;
}
</style>
