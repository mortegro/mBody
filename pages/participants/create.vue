<template lang="pug">
  v-container(fluid="")
    h1.text-center Teilnehmer festlegen
    .description.text-center Sie können sich als neuen Teilnehmer registrieren, alte Zugangsdaten nutzen oder anonym fortfahren.
    v-container(pa-4, fluid="")
      v-tabs(fixed-tabs, background-color='green', v-model='tab')
        v-tab(key="newParticipant") Neu anlegen
        v-tab(key="checkParticipant") Vorhandenen nutzen
        v-tab(key="anonym") Anonym fortfahren
        
        v-tab-item(key="newParticipant")
          .qform(v-if="!created")
            v-form-base(:model="value", :schema="schema", :row="{ justify: 'center', noGutters: false}", :col="12")
            .text-center
              v-btn(@click="saveParticipant", color="primary") Speichern und fortfahren

          .qresult(v-else)
            h3.ma-4.text-center Vielen Dank. <br> Der Teilnehmer wurde angelegt!
            .text-center
              br
              p Ihre Teilnehmer-ID lautet: {{ subject.id }}
              p Ihre PIN für spätere Teilnahmen lautet: {{ subject.pin }}
              v-btn(@click="proceed", color="primary") Fortfahren

        v-tab-item(key="checkParticipant")
          v-container
            v-text-field(v-model="input_id", label="Teilnehmer ID")
            v-text-field(v-model="input_pin", label="PIN")
            .text-center
              v-btn(@click="checkParticipant", color="primary") Fortfahren 
            v-alert(v-if="errorMessage", type="error") {{errorMessage}}
        
        v-tab-item(key="anonym")
          h3.ma-4.text-center Anonym fortfahren
          .text-center
            v-btn(@click="proceed", color="primary") Fortfahren
   
</template>

<script>
import ParticipantQuestionnaire from '~/experiments/questionnaires/ParticipantQuestionnaire.js'
export default {
  data() {
    return {
      tab: null,
      next: this.$route.query.next,
      value: {},
      schema: ParticipantQuestionnaire,
      created: false,
      subject: this.$getSubject(),
      input_id: '',
      input_pin: '',
      errorMessage: null,
    }
  },
  methods: {
    saveParticipant() {
      const part = { ...this.value, subject: this.subject.id}
      this.$log.debug(' SAVE TO DATABASE: ', part)
      alert(' TO DB: '+JSON.stringify(part))
      this.created = true
    },

    checkParticipant() {
      const part = {id: this.input_id, pin: this.input_pin}
      this.errorMessage=null
      if (this.$checkSubject(part)) {
        this.subject = part
        this.proceed()
      } else {
        this.errorMessage="Die Teilnehmer ID oder die PIN sind nicht korrekt."
      }
    },

    proceed() {
      if (this.next) {
        this.$log.debug(this.subject.id)
        this.$router.push({ name: this.next, params: { subject: this.subject.id }})
      }
    }

  }
}
</script>