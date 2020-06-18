<template lang="pug">
  v-container(fluid='')
    v-row(dense='')
      v-col(v-for='e in fp_experiments', :key='e.exp.id', :cols='e.flex')
        v-card.mx-auto
          v-card-text 
            h2.text--primary {{e.exp.title}}
            .text--primary {{e.exp.description}}
          v-card-actions
            v-btn(text='', color="primary") starten
              

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
