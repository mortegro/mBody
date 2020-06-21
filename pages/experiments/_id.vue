<template lang="pug">
  Experiment(v-if="experiment", ref="experiment", :experiment="experiment" :meta="meta")
  .jcenter.container.justify-center.align-center(v-else, fluid="")
      h1.text-center No experiment id given or experiment not found.
</template>

<script>
import experiments from '~/experiments/index.js'

export default {
  data() {
    return {
    };
  },
  computed: {
    expId() {
      const expId = this.$route.params.id
      // this.$log.debug(`expID: ${expId}`)
      return expId
    },
    experiment() {
      this.$log.debug(`expID: ${this.expId}`)
      const ExperimentClass = experiments[this.expId]
      const exp = new ExperimentClass(this.$route.query || {})
      // this.$log.debug(`exp: ${JSON.stringify(exp)}`)
      return exp
    },
    meta() {
      return this.$route.query
    }

  },
  methods: {
  },
};
</script>

<style>
.jcenter {
  display: flex;
  align-items: center;
  height: 100%;
}
.exp-page {
  height: 100%s;
}
</style>