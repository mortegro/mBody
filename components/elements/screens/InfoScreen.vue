<template lang="pug">
  v-container.info-screen(fluid="")
    .exp-title(v-html="$md.render(title)")
    v-container.pa-4.dcontainer
      .exp-description(v-html="$md.render(description)")
    
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.dcontainer {
  justify-items: center;
  align-items: center;
  padding: 3rem;
}
// .info-screen {
  // border: 1px solid yellow;
  // width: 100%;
// }
</style>