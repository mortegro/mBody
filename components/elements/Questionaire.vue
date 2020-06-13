<template lang="pug">
v-container.questionaire(fluid="")
  .heading {{title}}
  .description {{description}}
  .qform
    v-form-base(:model="model", :schema="schema", :row="{ justify: 'center', noGutters: false}", :col="12")
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    model: {type: Object, require: false, default: {}},
    options: {type: Object, require: false, default: {}},
    schema: {type: Object, require: true },
  },
  data() {
    return {
      model: this.model,
      schema: this.schema,
      options: this.options
    } 
  },
  methods: {
    getValue() {
      return {
        completed: true,
        data: model
      }
    }
  }
}
</script>

<style lang="scss" >
.qform {
  font-size: 130%;
  legend {
    font-size: 130%;
  }
}

.v-label {
  font-size: 130%;
}


</style>