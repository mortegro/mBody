<template lang="pug">
  v-container.experiment(fluid="")
    .content 
      h3 And some other stuff
    .actions
      v-btn(@click="saveImage") Save
</template>

<script>
  import Info from '@/components/elements/Info'
  const experiment = [
    { 
      type: Info,
      data: {
        heading: "Some Heading",
        text: "Some Info Text",
        btnText: "Weiter"
      } 
    },
    { 
      type: Info,
      data: {
        heading: "Some Other Heading",
        text: "Some Info Text",
        btnText: "Fertig"
      } 
    }

  ]

  export default {
    data() {
      return {
        experiment,
        step: 0
      };
    },  
    methods: {
    },
  };
</script>

<style lang="scss">
.experiment { 
  background-color: red;
  display: grid;
  grid-template-rows: 1fr 80px;
  justify-content: center;
}

.actions {
  background-color: green;
  justify-content: center;
  text-align: center;
}
</style>