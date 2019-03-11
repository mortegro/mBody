<template lang="pug">
  footer.caption
    p Double-click to edit a todo
    p
      | Inspired by
      a(href='http://todomvc.com', target='_blank', rel='noopener') TodoMVC
</template>

<style lang="stylus">
footer
  margin: 65px auto 0
  color: #bfbfbf
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5)
  p
    line-height: 1
  a
    color: inherit
    text-decoration: none
    &:hover
      text-decoration: underline
</style>