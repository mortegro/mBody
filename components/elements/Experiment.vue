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
    },
    collection() {
      return this.experiment.collection || 'mbody_data'
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
        expId: this.experiment.id,
        screenId: this.actScreen.id,
        subjectId: this.subject.id,
        saved: new Date(),
        data: this.screenModel,
        meta: this.meta
      }
      this.$log.debug(' SAVE TO DATABASE: ', res)
      this.$emit('store',res)
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