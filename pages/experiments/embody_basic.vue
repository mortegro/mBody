<template lang="pug">
  Experiment(ref="experiment", :experiment="experiment")
</template>

<script>
import Experiment from '@/components/embody/Experiment'
import InfoScreen from '@/components/elements/InfoScreen'
import Questionaire from '@/components/elements/Questionaire'
import Markdown from '@nuxt/markdown'
const md = new Markdown({ toc: false, sanitize: false })

const experiment = {
  id: "embody-prestudy",
  title: "Prestudy for embody experiment",
  screens: [
    {
      type: InfoScreen,
      id: "welcome",
      data: {
        title: "Einführung",
        body: "Dies ist ein Beispielexperiment",
        btnText: "Weiter"
      }
    }, 
    {
      type: InfoScreen,
      id: "thanx",
      data: {
        title: "Danke!",
        body: "Vielen Dank für die Teilnahme am Experiment.",
        btnText: "Fertig"
      }
    },    
  ]
}
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

