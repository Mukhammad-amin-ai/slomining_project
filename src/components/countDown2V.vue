<template>
  <div>
    <div v-if="remainingTime !== null">
      <p>{{ formattedTime }}</p>
    </div>
    <div v-else>
      <p>Timer not running.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState('Timer', {
      remainingTime: (state) => (index) => state.timers[index]?.remainingTime,
    }),
    formattedTime() {
      return this.$store.getters['Timer/formattedTime'](this.index);
    },
  },
  methods: {
    ...mapActions('Timer', ['stopTimer', 'getTimer']),
  },
  async mounted() {
    await this.getTimer(this.index);
  },
};
</script>