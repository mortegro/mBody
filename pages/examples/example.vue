<template lang="pug">
  v-container.pa-4(grid-list-sm="")
    v-layout(row="", wrap="")
      v-flex(xs10="")
        v-text-field(prepend-icon="color_lens", placeholder="New Todo", v-model="title")
      v-flex(xs1="", p='')
        v-btn(@click="$pouch.post('todos', {title: title});title=''", fab="", small="") 
          v-icon add
    v-layout(row='')
      v-flex(xs12="")
        ol
          li(v-for="(todo,idx) in todos", :key="idx")
            input(v-model="todo.title", @change="$pouch.put('todos', todo, {})")
            v-btn(@click="$pouch.remove('todos', todo)", fab="", small="") 
              v-icon remove
</template>
 
<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    // VuePouch adds a `pouch` config option to all components.
    pouch: {
      // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
      todos: {/*empty selector*/}
    }
  }
</script>