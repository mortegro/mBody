<template lang="pug">
  v-container.info-screen(fluid="")
    .heading {{title}}
    .dcontainer
      .description {{body}}
    
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
.dcontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
  padding: 4rem;
}
// .info-screen {
  // border: 1px solid yellow;
  // width: 100%;
// }
</style>