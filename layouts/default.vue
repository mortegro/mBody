<template lang="pug">
  v-app(dark="")
    v-navigation-drawer(:mini-variant="miniVariant", :clipped="clipped", v-model="drawer", fixed="", app="")
      v-list
        v-list-tile(v-for="(item, i) in items", :to="item.to", :key="i", router="", exact="")
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-toolbar(:clipped-left="clipped", fixed="", app="")
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-btn(icon="", @click.stop="clipped = !clipped")
        v-icon web
      v-btn(icon="", @click.stop="fixed = !fixed")
        v-icon remove
      v-toolbar-title(v-text="title")
        v-btn(icon="", @click.stop="rightDrawer = !rightDrawer")
          v-icon menu
    v-content
      v-container
        nuxt
    v-navigation-drawer(:right="right", v-model="rightDrawer", temporary="", fixed="")
      v-list
        v-list-tile(@click.native="right = !right")
          v-list-tile-action
            v-icon(light="") compare_arrows
          v-list-tile-title Switch drawer (click me)
    v-footer(:fixed="fixed", app="")
      span © 2017
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
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
