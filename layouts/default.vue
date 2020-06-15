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
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'edit', title: 'SimpleAffect', to: '/experiments/SimpleAffect' },
          { icon: 'edit', title: 'SimpleQuestionnaire', to: '/experiments/SimpleQuestionnaire' },
        ],
        miniVariant: false,
        title: 'EMBODY Experiment'
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
</style>