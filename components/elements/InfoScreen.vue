<template lang="pug">
  v-container
    v-row
      h1 {{title}}
    v-row
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