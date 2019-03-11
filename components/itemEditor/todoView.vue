<template lang="pug">
  v-card.pa-2.ma-2(fluid="")
    v-card-title
      h1 {{item.title}}
    v-card-text 
      span(v-html="compiledMarkdown")
</template>

<script>
import marked from 'marked'
export default {
  props: ['item'],
  computed: {
    compiledMarkdown: function () {
      return marked(this.item.description, { sanitize: true })
    }
  }
}
</script>

