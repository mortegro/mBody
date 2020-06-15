<template lang="pug">
  v-container.experiment(fluid="")
    .subjinfo SubjectID: {{subject.id}}, PIN: {{subject.pin}}
    v-row
      component(:is="actComponent" v-bind="actDefinition" v-model="screenModel")
    p.debug(v-if="debug") {{screenModel}}
    .actions
      v-btn.button(@click="next") {{actDefinition.btnText}}
</template>

<script>
import InfoScreen from '@/components/elements/InfoScreen'

export default {
  props: {
    experiment: Object,
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
      this.saveScreen()
      if (this.act < this.experiment.screens.length-1) {
        this.act +=1
      } else if (this.act == this.experiment.screens.length-1) {
        this.$router.push({path: "/"})
      }
      this.initModel()
    },
    prev() {
      this.saveScreen()
      if (this.act > 0) {
        this.act -=1
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
    saveScreen() {
      const res = {
        experiment: this.experiment.id,
        screen: this.actScreen.id,
        subject: this.subject.id,
        saved: new Date(),
        data: this.screenModel,
      }
      this.$log.debug(' SAVE TO DATABASE: ', res)
      alert(' TO DB: '+JSON.stringify(res))
    },
    checkExperiment() {
      
    },
  },
  mounted() {
    if (this.$route.params.subject) {
      const subj = this.$route.params.subject
      this.$log.debug("Got Subject: ",this.$route.params.subject)
      this.subject = { id: subj, pin: this.$getPin(subj)}
    }
  }
}
</script>

<style lang="scss" scoped>
.experiment { 
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) 60px;
  height: 100%
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
  overflow: scroll;
}
</style>