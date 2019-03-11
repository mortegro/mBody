<template lang="pug">
  v-container.pa-4(grid-list-sm="")
    v-layout(row="", wrap="")
      h1 Share Target
      v-container
        span Params: {{$router.params}}
        span Query: {{$router.query}}
</template>
 
<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
  }
</script>