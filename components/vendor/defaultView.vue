<template lang="pug">
  v-list-item
    v-list-item-avatar
      img(:src="item.image")
    v-list-item-content
      v-list-item-title(v-html="item.title")
      v-list-item-sub-title(v-html="item.description")
</template>
<script>
export default {
  props: ['item']
}
</script>
