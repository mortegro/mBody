<template lang="pug">
  v-container.experiment(fluid="")
    .subjinfo SubjectID: {{subject.id}}, PIN: {{subject.pin}}
    v-row
      component(:is="actComponent", v-bind="actDefinition", v-model="screenModel", v-on:change-subject="changeSubject", v-on:completed="next")
    p.debug(v-if="debug") {{screenModel}}
    .actions
      v-btn.button(@click="next") {{actDefinition.btnText}}
</template>

<script>
import InfoScreen from '@/components/elements/screens/InfoScreen'

export default {
  props: {
    experiment: {type: Object, required: true},
    meta: Object
  },
  data() {
    return {
      act: 0,
      screenModel: {},
      subject: this.$getSubject(),
      debug: false,
    }
  },
  computed: {
    // active screen
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
    // active component for this screen
    actComponent() {
      return this.actScreen.type
    },
    // active definition for the component
    actDefinition() {
      return this.actScreen.data
    },
    // button text
    btnText() {
      return this.actDefinition.btnText || "Weiter"
    },
    // collection for saving the data
    collection() {
      return this.experiment.collection || 'mbody_data'
    }
  },
  methods: {
    // transition to next screen
    next() {
      this.saveScreen()
      if (this.act < this.experiment.screens.length-1) {
        this.act +=1
      } else if (this.act == this.experiment.screens.length-1) {
        this.$router.push({path: "/"})
      }
      this.initModel()
    },
    // transition to previous screen
    prev() {
      this.saveScreen()
      if (this.act > 0) {
        this.act -=1
      } 
      this.initModel()
    },
    // initialize and clear the screen data
    initModel() {
      this.screenModel = this.actDefinition.model || {}
    },
    saveScreen() {
      // If a screen gives back a subject, set it as experiment subject
      if (this.screenModel && this.screenModel.subject) {
        this.subject = this.screenModel.subject
      }
      // collect result
      const res = {
        expId: this.experiment.id,
        screenId: this.actScreen.id,
        subjectId: this.subject.id,
        saved: new Date(),
        data: this.screenModel,
        meta: this.meta
      }
      // save it to database
      this.$log.debug(' SAVE TO DATABASE: ', res)
      this.experiment.screenSubmitted(res)
    },
    changeSubject(subj) {
      this.subject = subj
    },
    checkExperiment() {
      // check if ervery screen has an id

      // check if ids are unique

    },
  },
}
</script>

<style lang="scss" scoped>
.experiment { 
  display: grid;
  grid-template-rows: 1.2rem minmax(0, 1fr) 60px;
  height: 100%;
}

.subjinfo {
  font-size: 0.9rem;
  text-align: right;
  width: 100%;
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

.debug {
  border: 1px dotted green;
  overflow: scroll;
}
</style>