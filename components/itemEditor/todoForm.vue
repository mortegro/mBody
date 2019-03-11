<template lang="pug">
  v-container.pa-4(grid-list-sm="")
    v-layout(row="", wrap="")
      v-flex(xs12="")
        v-text-field(prepend-icon="color_lens", placeholder="Titel", v-model="item.title")
      v-flex(xs12="")
        v-textarea(prepend-icon="notes", placeholder="Content", v-model="item.description")
      //- v-flex(xs4="")
      //-   v-select(placeholder="Content", v-model="")

</template>


<script>
const colors = [
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
]
const mod = ["lighten","darken","accent"]

export default {
  props: ['item'],
  data() {
    return {
      colors: colors,
      mod: mod,
      val: [1,2,3,4],
      c:"pink",
      m:"darken",
      v:"1"
    }
  }
}
</script>

