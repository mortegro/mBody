<template lang="pug">
  v-app.vapp
    v-navigation-drawer(app="", :mini-variant="miniVariant", :clipped="clipped", v-model="drawer", fixed="")
      v-list
        v-list-item(v-for="(item, i) in items", :to="item.to", :key="i", router="", exact="")
          v-list-item-action
            v-icon(v-html="item.icon")
          v-list-item-content
            v-list-item-title(v-text="item.title")
    v-app-bar(app="", flat="", fixed="")
      v-app-bar-nav-icon(@click="drawer = !drawer")
      v-toolbar-title(v-text="title")
      v-spacer
      v-btn(icon="")
        v-icon mdi-heart
    v-content.vcontent
      nuxt
    v-footer(:fixed="fixed", app="")
      span © 2020 {{drawer}}
</template>

<script>
import { experiments } from '~/configuration'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'mBODY Experimente'
    }
  },
  computed: {
    experiments() {
      const exp = experiments
        .filter(e => e.menu)
        .map(e => {
          return {
            icon: e.icon || 'add_to_queue',
            title: e.title,
            to: '/experiments/' + e.expId
          }
        })
      return exp
    },
    items() {
      return [
        { icon: 'apps', title: 'Homepage', to: '/' },
        ...this.experiments
      ]
    }
  }
}
</script>

<style lang="scss">
.exp-title {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: center !important;
}

.exp-description {
  text-align: center !important;
}
.vcontent {
  height: 0;
}
</style>