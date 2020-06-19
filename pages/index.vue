<template lang="pug">
  v-container(fluid='')
    v-row(dense='')
      v-col(v-for='(e,idx) in experiments', :key='idx')
        v-card.mx-auto
          v-card-title.justify-center {{e.title}}
          v-card-text.cardheight
            .text--primary {{e.description}}
          v-card-actions.justify-center
            v-btn.text-center(text='', color="primary", :to="'/experiments/'+e.expId", nuxt) starten
              

</template>

<script>
import { experiments } from '~/configuration'
export default {
  data() {
    return {
      experiments: experiments.filter(e=>e.frontpage)
    }
  },
  computed: {
  },

}
</script>

<style lang="scss" scoped>
.cardheight {
  overflow-y: auto;
  height: 8rem;
}
</style>