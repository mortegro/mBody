<template lang="pug">
  v-container(fluid='')
    v-row(dense='')
      v-col(v-for='(e,idx) in experiments', :key='idx', :cols='e.flex')
        v-card.mx-auto
          v-card-text 
            h2.text--primary {{e.title}}
            .text--primary {{e.description}}
          v-card-actions
            v-btn(text='', color="primary", :to="'/experiments/'+e.expId", nuxt) starten
              

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
