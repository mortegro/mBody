<template lang="pug">
  .exp-page
    Experiment(v-if="expId", ref="experiment", :experiment="experiment" :meta="meta" @store="storehook")
    .jcenter.container(v-else, fluid="")
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
      this.$log.debug(`expID: ${expId}`)
      return expId
    },
    experiment() {
      this.$log.debug(`expID: ${this.expId}`)
      const exp = experiments[this.expId]
      this.$log.debug(`exp: ${JSON.stringify(exp)}`)
      return exp
    },
    meta() {
      return this.$route.query
    }

  },
  methods: {
    async storehook(data) {
      if (experiment & experiment.storehook & typeof experiment.storehook == 'function') {
        await experiment.storehook(data)
      }
    }
  },
};
</script>

<style>
/* .jcenter {
  display: flex;
  align-items: center;
  height: 100%;
}
.exp-page {
  height: 100%s;
} */
</style>