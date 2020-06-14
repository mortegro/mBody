<template lang="pug">
  v-container.experiment(fluid="")
    component(:is="actComponent" v-bind="actDefinition" :model.sync="screenModel")
    p.debug(v-if="debug") {{screenModel}}
    .actions
      v-btn.button(@click="next") {{actDefinition.btnText}}
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
      screenModel: {},
      debug: true
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
    actDefinition() {
      return this.actScreen.data
    },
    btnText() {
      return this.actDefinition.btnText || "Weiter"
    }
  },
  methods: {
    next() {
      if (this.act < this.experiment.screens.length-1) {
        this.act +=1
      } else {
        this.act = 0
      }
      this.initModel()
    },
    prev() {
      if (this.act > 0) {
        this.act -=1
      } else {
        this.act = this.experiment.screens.length-1
      }
      this.initModel()

    },
    initModel() {
      if (this.actDefinition.model) {
        this.screenModel = this.actDefinition.model
      } else {
        this.screenModel = {}
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
  grid-template-rows: minmax(0, 1fr) 60px;
  height: 100%
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

.debug {
  border: 1px dotted green;
}
</style>