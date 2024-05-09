<template>
  <div class="settings_parent">
    <TabReusable title="Settings" tab="Change Your Password" />
    <form class="settings_form d-flex flex-column mt-2">
      <label for="firstname" class="form_label">First Name</label>
      <input type="text" id="firstname" class="form_input" v-model=this.dataUserInfo.firstname />
      <label for="lastname" class="form_label">Last Name</label>
      <input type="text" id="lastname" class="form_input" v-model=this.dataUserInfo.lastname />
      <label for="email" class="form_label">Email</label>
      <input type="email" id="email" placeholder="example@gmail.com" class="form_input"
             v-model=this.dataUserInfo.email />
      <label for="verify1" class="form_label">New password</label>
      <div class="password relative w100">
        <input :type="type" id="verify1" placeholder="******" class="form_input w100" v-model="password" />
        <div class="eyes" @click="changeType">
          <img v-if="type === 'text'" src="@/assets/icons/eye-open.svg" alt="" />
          <img v-else src="@/assets/icons/slash.svg" alt="" />
        </div>
      </div>
      <label for="verify2" class="form_label">Confirm password</label>
      <div class="password relative w100">
        <input :type="type" id="verify2" placeholder="******" class="form_input w100" v-model="confPass" />
        <div class="eyes" @click="changeType">
          <img v-if="type === 'text'" src="@/assets/icons/eye-open.svg" alt="" />
          <img v-else src="@/assets/icons/slash.svg" alt="" />
        </div>
      </div>
      <div class="submit-form">
        <button type="button" class="send" @click="popUp">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import TabReusable from '@/components/mini_components/tab-reusable.vue'
import axios from 'axios'

let token = localStorage.getItem('jwt_token')
export default {
  name: 'SettingsPage',
  components: { TabReusable },
  data() {
    return {
      type: 'text',
      dataUserInfo: [],
      password: '',
      confPass: '',
      userId: '',
      url:import.meta.env.VITE_BASE_URL
    }
  },
  methods: {
    changeType() {
      if (this.type === 'text') {
        this.type = 'password'
      } else {
        this.type = 'text'
      }
    },
    async decode() {
      const tokenParts = token.split('.')
      const payload = JSON.parse(atob(tokenParts[1]))
      this.userId = payload.userId
      // console.log(payload.userId)
      if (payload.userId) {
        const tokenB = localStorage.getItem('jwt_token').replace(/^"(.*)"$/, '$1')
        try {
          let response = await axios.get(`${this.url}api/getUserById/${payload.userId}`,
            { headers: { Authorization: `Bearer ${tokenB}` } })
          this.dataUserInfo = response.data
        } catch (err) {
          console.error('error of decoding', err)
        }
      }
    },
    async updateInfo() {
      let userUpdObj = {
        _id: this.userId,
        firstname: this.dataUserInfo.firstname,
        lastname: this.dataUserInfo.lastname,
        email: this.dataUserInfo.email,
        password: this.password,
        conf_password: this.confPass
      }
      const token = localStorage.getItem('jwt_token').replace(/^"(.*)"$/, '$1')
      try {
        let response = await axios.put(`${this.url}api/updateUser`, userUpdObj, { headers: { Authorization: `Bearer ${token}` } })
        console.log(response.data)
      } catch (e) {
        console.error('Problem with updating', e)
      }
    },
    popUp() {
      Swal.fire({
        text: `Dou you want sign out?`,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: '#4466f2',
        cancelButtonText: 'No',
        cancelButtonColor: '#f31616',
        reverseButtons: false
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.updateInfo()
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
            title: 'Information Updated successfully'
          })
        }
      })
    }
  },
  mounted() {
    this.decode()

  }
}
</script>

<style scoped></style>
