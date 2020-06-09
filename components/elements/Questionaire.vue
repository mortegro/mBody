<template lang="pug">
  v-container.info-screen
    v-form-base(:model="model", :schema="schema", :row="{ justify: 'center', noGutters: false}", :col="12")
    
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      model: {},
      schema: {
        gender: { 
          label: 'Geschlecht',
          type: 'radio',
          options: [ 'weiblich', 'männlich', 'divers'],
          col: 6
        },
        handyness: { 
          label: 'Händigkeit',
          hint: 'Rechts- oder Linkshänder',
          type: 'radio',
          options: [ 'rechts', 'links'],
          col: 6
        },
        age: { 
          label: 'Alter',
          hint: 'Alter in Jahren',
          type: 'number',
          col: 4
        },
        height: { 
          label: 'Größe',
          hint: 'Größe in m',
          type: 'number',
          col: 4
        },
        weight: { 
          label: 'Gewicht',
          hint: 'Gewicht in Kg',
          type: 'number',
          col: 4
        },
        // treatment: {
        //   label: "Behandlung",
        //   
        // }

      },
      options: {}
    } 
  }
}
</script>

<style lang="scss" scoped>
.title {
  border: 1px solid blue;
}

.body {
  border: 1px solid green;
}

.info-screen {
  border: 1px solid yellow;
  width: 100%;
  
}
</style>