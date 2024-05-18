<template>
  <div >
    <div v-if="remainingTime !== null">
      <p>{{ formattedTime }}</p>
    </div>
    <div v-else>
      <p>Timer not running.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState('Timer',['remainingTime']),
    ...mapGetters('Timer',['formattedTime']),
  },
  methods: {
    ...mapActions('Timer',['stopTimer', 'getTimer']),
  },
  mounted() {
    this.getTimer(this.index)
  }
};
</script>