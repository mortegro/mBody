<template lang="pug">
  v-app
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
    v-content
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
          { icon: 'apps', title: 'Todo Example', to: '/examples/example' },
          { icon: 'apps', title: 'Todos', to: '/examples/todos' },
          { icon: 'apps', title: 'Share Target', to: '/examples/share-target' },
          { icon: 'edit', title: 'ItemEditor', to: '/examples/itemeditor' },
          { icon: 'edit', title: 'SimpleAffect', to: '/experiments/SimpleAffect' },
          { icon: 'edit', title: 'SimpleQuestionnaire', to: '/experiments/SimpleQuestionnaire' },
        ],
        miniVariant: false,
        title: 'EMBODY Experiment'
      }
    }
  }
</script>
