<template lang="pug">
  Experiment(ref="experiment", :experiment="experiment")
</template>

<script>
import SimpleAffect from '~/experiments/SimpleAffectExperiment'

export default {
  middleware: ['enforce-subject'],
  data() {
    return {
      experiment: SimpleAffect
    };
  },
  methods: {
    async saveImage() {
      console.log("clicked")
      // await this.$refs.bodyCanvas.output()
      // var dataURL = image.toDataURL();
      // downloadURI(dataURL, 'stage.png');
    }
  },
};
</script>

