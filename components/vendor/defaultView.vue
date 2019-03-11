<template lang="pug">
  v-list-tile
    v-list-tile-avatar
      img(:src="item.image")
    v-list-tile-content
      v-list-tile-title(v-html="item.title")
      v-list-tile-sub-title(v-html="item.description")
</template>
<script>
export default {
  props: ['item']
}
</script>
