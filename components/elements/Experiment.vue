<template lang="pug">
  v-container.experiment(fluid="")
    component(:is="actComponent" v-bind="actData")
    .actions
      v-btn.button(@click="next") {{actData.btnText}}

</template>

<script>
import InfoScreen from '@/components/elements/InfoScreen'

export default {
  props: {
    experiment: Object
  },
  data() {
    return {
      act: 0,
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
    },
    submitScreen() {
      console.log('Submit Screen')
    },
    checkExperiment() {
      
    }
  }
}
</script>

<style lang="scss">
.experiment { 
  display: grid;
  grid-template-rows: 1fr 60px;
  height: 100%;
}

.actions {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex
}

.button {
  max-width: 50%;
}

.fullWidth {
  width: 100%;
}

.heading {
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
}

.description {
  // border: 1px solid green;
  margin-top: 1.5rem;
  font-size: 2rem;
}

</style>