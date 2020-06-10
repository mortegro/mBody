<template lang="pug">
  v-container.info-screen(fluid="")
    v-row.title
      h1 {{title}}
    v-row.body
      .text {{body}}
    
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