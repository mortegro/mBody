<template lang="pug">
  v-app
    v-navigation-drawer(app="", :mini-variant="miniVariant", :clipped="clipped", v-model="drawer", fixed="")
      v-list
        v-list-item(v-for="(item, i) in items", :to="item.to", :key="i", router="", exact="")
          v-list-item-action
            v-icon(v-html="item.icon")
          v-list-item-content
            v-list-item-title(v-text="item.title")
    v-app-bar( app="", :clipped-left="clipped", fixed="")
      v-app-bar-nav-icon(@click="drawer = !drawer")
      v-app-bar-title(v-text="title")
    v-content
      v-container(fluid="")
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
          { icon: 'edit', title: 'ItemEditor', to: '/itemeditor' },
        ],
        miniVariant: false,
        title: 'EMBODY Experiment'
      }
    }
  }
</script>
