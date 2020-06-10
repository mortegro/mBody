<template lang="pug">
.questionaire
  h1 {{title}}
  p {{description}}
  v-container.info-screen
    v-form-base(:model="model", :schema="schema", :row="{ justify: 'center', noGutters: false}", :col="12")
  p.debug {{model}}
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

<style lang="scss" scoped>
.title {
  // border: 1px solid blue;
}

.body {
  // border: 1px solid green;
}

.info-screen {
  // border: 1px solid yellow;
  width: 100%;
  
}
.debug {
  border: 1px dotted green;
}
</style>