<template lang="pug">
v-container.questionaire(fluid="")
  .exp-title {{title}}
  .exp-description {{description}}
  .qform
    v-form-base(:model="value", :schema="schema", :row="{ justify: 'center', noGutters: false}", :col="12")
</template>

<script>
export default {
  props: {
    value: {type: Object, require: false, default: {}},
    title: { type: String, required: true },
    description: { type: String, required: true },
    schema: {type: Object, require: true },
    options: {type: Object, require: false, default: {}},
  },
  data() {
    return {
    } 
  },
  methods: {
    getValue() {
      return {
        completed: true,
        data: this.value
      }
    }
  }
}
</script>

<style lang="scss" >
// .qform {
//   font-size: 130%;
//   legend {
//     font-size: 130%;
//   }
// }

// .v-label {
//   font-size: 130%;
// }

.questionaire {
  overflow: scroll;
}
</style>