<template>
  <div class="settings_parent">
    <TabReusable title="Settings" tab="Change Your Password" />
    <form class="settings_form d-flex flex-column mt-2">
      <label for="email" class="form_label">Email</label>
      <input type="email" id="email" placeholder="example@gmail.com" class="form_input" />
      <label for="verify" class="form_label">Verify Code</label>
      <div class="info d-flex center justify-content-start" style="margin-bottom: 6px">
        <svg class="flex-shrink-0 me-2" width="25" height="25" viewBox="0 0 24 24" fill="#ff6a8e">
          <path
            d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
          ></path>
        </svg>
        <span class="text-gray">Click Send button to get code</span>
      </div>
      <div
        class="d-flex justify-content-start"
        style="display: grid; grid-template-columns: 3fr 1fr"
      >
        <input type="number" id="verify" placeholder="******" class="form_input w-100" />
        <button type="button" class="send ml-1">send</button>
      </div>
      <label for="verify" class="form_label">New password</label>

      <div class="password relative w100">
        <input :type="type" id="verify" placeholder="******" class="form_input w100" />'
        <div class="eyes" @click="changeType">
          <img v-if="type === 'text'" src="@/assets/icons/eye-open.svg" alt="" />
          <img v-else src="@/assets/icons/slash.svg" alt="" />
        </div>
      </div>
      <div class="submit-form">
        <button type="button" class="send">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import TabReusable from '@/components/mini_components/tab-reusable.vue'

export default {
  name: 'SettingsPage',
  components: { TabReusable },
  data() {
    return {
      type: 'text'
    }
  },
  methods: {
    changeType() {
      if (this.type === 'text') {
        this.type = 'password'
      } else {
        this.type = 'text'
      }
    }
  }
}
</script>

<style scoped></style>
