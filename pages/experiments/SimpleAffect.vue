<template lang="pug">
  Experiment(ref="experiment", :experiment="experiment")
</template>

<script>
import Experiment from '~/components/elements/Experiment'
import experiment from '~/experiments/SimpleQuestionaire'

export default {
  components: {
    Experiment
  },
  data() {
    return {
      experiment
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

