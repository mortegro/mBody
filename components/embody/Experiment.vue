<template lang="pug">
    v-container(fluid="")
      component(:is="actComponent" v-bind="actData")
      .text {{act}}
      v-btn(@click="next") {{actData.btnText}}

</template>

<script>
import InfoScreen from '@/components/elements/InfoScreen'
import Questionaire from '@/components/elements/Questionaire'

const experiment = {
  id: "exp-01",
  title: "Sample Experiment",
  screens: [
    {
      type: InfoScreen,
      data: {
        title: "Einführung",
        body: "Some text explaining the experiment",
        btnText: "Next"
      }
    },
    {
      type: InfoScreen,
      data: {
        title: "Dank",
        body: "Vielen Dank für Ihre Teilnahme",
        btnText: "Finish"
      }
    },    
  ]
}

export default {
  data() {
    return {
      act: 0,
      experiment,
    }
  },
  computed: {
    actScreen() {
      return this.experiment.screens[this.act] || {
        type: InfoScreen,
        data: {
          title: "Danke",
          body: "Das Experiment ist beendet",
          btnText: "Fertig"
        }
      }
    },
    actComponent() {
      return this.actScreen.type
    },
    actData() {
      return this.actScreen.data
    },
    btnText() {
      return this.actData.btnText || "Weiter"
    }
  },
  methods: {
    next() {
      if (this.act < this.experiment.screens.length-1) {
        this.act +=1
      } else {
        this.act = 0
      }
    },
    prev() {
      if (this.act > 0) {
        this.act -=1
      } else {
        this.act = this.experiment.screens.length-1
      }
    }

  }

}
</script>