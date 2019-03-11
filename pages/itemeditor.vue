<template lang="pug">
  item-editor(collection="todos", desc="Aufgaben", :form="form", :view="view")
</template>

<script>
  import itemEditor from '~/components/vendor/itemEditor'
  import todoForm from '~/components/itemEditor/todoForm'
  import todoView from '~/components/itemEditor/todoView'
  export default {
    components: {itemEditor},
    data: () => ({
      form: todoForm,
      view: todoView
    }),
    created() {
      console.log('syncing')
      // this.$pouch.sync('todos', `${process.env.remoteUrl}/totos`);
    }
    
  }
</script>
