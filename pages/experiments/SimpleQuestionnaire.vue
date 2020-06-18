<template lang="pug">
  Experiment(ref="experiment", :experiment="experiment")
</template>

<script>
import SimpleQuestionnaire from '~/experiments/SimpleQuestionnaireExperiment'

export default {
  data() {
    return {
      experiment: SimpleQuestionnaire
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
