<template lang="pug">
  v-list-tile.todo-item(:class="{ 'editing': editing }")
    v-list-tile-action
      v-checkbox(:input-value="todo.done", @change="toggle(todo)", color="primary", v-if="!editing")
      v-icon(color="primary", v-else="") edit
    template(v-if="!editing")
      v-list-tile-content(:class="{ 'primary--text': todo.done }", @dblclick="editing = true") {{ todo.title }}
        v-list-tile-action
          v-btn(@click="remove(todo)", color="red lighten-3", flat="", icon="")
            v-icon close
    v-text-field(v-else="", v-focus="editing", :value="todo.title", @blur="doneEdit", @keyup.enter="doneEdit", @keyup.esc="cancelEdit", clearable="", color="primary", flat="", hide-details="", maxlength="1023", ref="input", solo="")
</template>

<script>
  export default {
    props: ['todo','remove','edit', 'toggle'],
    data () {
      return {
        editing: false
      }
    },
    directives: {
      focus (el, { value }, { context }) {
        if (value) {
          context.$nextTick(() => {
            context.$refs.input.focus()
          })
        }
      }
    },
    methods: {
      doneEdit (e) {
        const value = e.target.value.trim()
        const { todo } = this
        if (!value) {
          this.remove(todo)
        } else if (this.editing) {
          this.edit({
            todo,
            value
          })
          this.editing = false
        }
      },
      cancelEdit () {
        this.editing = false
      }
    }
  }
</script>

<style lang="stylus">
.todo-item
  .v-list__tile
    height: auto
    padding-top: 12px
    padding-bottom: 12px
  &.editing .v-list__tile
    height: 48px
</style>