<template lang="pug">
  v-layout#todos(row='', wrap='', v-if="todos")
    v-flex(text-xs-center='')
      h1.primary--text.display-3.font-weight-medium.my-3 TODOS
      v-card
        v-list.pa-0
          v-list-item
            v-list-item-action
              v-checkbox(:input-value='allChecked', @change='toggleAll(!allChecked)', color='primary', v-if='todos.length > 0')
              v-icon(color='primary', v-else='') check
            v-text-field(:label="'New todo input'", @keydown.enter='addTodo', autofocus='', browser-autocomplete='off', clearable='', color='primary', flat='', hide-details='', maxlength='1023', placeholder='What needs to be done?', solo='', v-model='newTodo')
      v-card.mt-3(v-show='todos.length')
        v-progress-linear.my-0(v-model='progressPercentage')
        v-card-actions.px-3(v-show='todos.length')
          span.primary--text
            | {{ remaining }} {{ remaining | pluralize('item') }} left
          v-spacer
          v-btn-toggle.elevation-0(mandatory='', v-model='visibility', v-show='todos.length')
            v-btn.mx-0(:key='key', @click='visibility = key', :value='key', color='primary', flat='', small='', v-for='(val, key) in filters')
              | {{ key | capitalize }}
        v-list.pa-0
          template(v-for='todo in filteredTodos')
            v-divider(:key='`${todo._id}-divider`')
            TodoItem(:key='todo.uid', :todo='todo', :remove="removeTodo", :edit="editTodo", :toggle="toggleTodo")
      v-btn.mt-3(@click='clearCompleted', block='', color='primary', depressed='', round='', v-show='todos.length > remaining')
        | Clear completed
      TodoFooter

</template>

<script>
  import TodoItem from '~/components/todo/TodoItem.vue'
  import TodoFooter from '~/components/todo/TodoFooter.vue'
  export default {
    props: ['filter'],
    components: {
      TodoItem,
      TodoFooter
    },
    data () {
      return {
        newTodo: '',
        filters: {
          all: todos => todos,
          active: todos => todos.filter(todo => !todo.done),
          completed: todos => todos.filter(todo => todo.done)
        },
        visibility: 'all'
      }
    },
    pouch: {
      todos: {/*empty selector*/}
    },
    created: function() {
      // Send all documents to the remote database, and stream changes in real-time
      // this.$pouch.sync('todos', 'http://localhost:5984/todos');
    },
    computed: {
      allChecked () {
        return this.todos.every(todo => todo.done)
      },
      filteredTodos () {
        return this.filters[this.visibility](this.todos)
      },
      remaining () {
        return this.todos.filter(todo => !todo.done).length
      },
      progressPercentage () {
        const len = this.todos.length
        return ((len - this.remaining) * 100) / len
      },
    },
    methods: {
      addTodo () {
        const title = this.newTodo.trim()
        if (title) {
          this.$pouch.post('todos', {title});
        }
        this.newTodo = ''
      },
      editTodo({value}){
        alert(value)
      },
      removeTodo(todo){
        this.$pouch.remove('todos', todo)
      },
      toggleTodo(todo){
        todo.done = todo.done ? false : true
        this.$pouch.put('todos', todo, {})
      },
      toggleAll(val) {
        this.todos.forEach((e)=>{
          this.$pouch.put('todos',{...e, done: !!val}, {})
        })
      },
      clearCompleted() {
        this.todos.forEach((e)=>{
          if (e.done) this.$pouch.put('todos',{...e, _deleted: true}, {})
        })
      }
    },
    filters: {
      pluralize: (n, w) => n === 1 ? w : (w + 's'),
      capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
</script>

<style lang="stylus" scoped>
h1
  opacity: 0.3
  color: #4dba87 !important;
  caret-color: #4dba87 !important;
.v-text-field .v-input__slot
  padding: 0 !important
</style>