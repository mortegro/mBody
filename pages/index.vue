<template lang="pug">
  v-layout(column='', justify-center='', align-center='')
    v-flex(xs12='', sm8='', md6='')
      .text-xs-center
        logo
          vuetify-logo
      v-card
        v-card-title.headline Welcome to the Vuetify + Nuxt.js + pouch Template
        v-card-text
          p Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.
          p Pouch.db is a in-browser database with the ability to sync to a couchdb instance.
          p Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.
          hr.my-3
        v-card-actions
          v-spacer
            v-btn(color='primary', flat='', nuxt='', to='/example') Simplest pouch Example
            v-btn(color='primary', flat='', nuxt='', to='/example') Todo Example

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
