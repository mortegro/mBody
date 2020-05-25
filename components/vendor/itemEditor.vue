<template lang="pug">
  div
    template(slot="toolbar")
      v-toolbar-title Test
    v-container
      v-flex(v-for="(item, index) in items", :key="item._id", @click.stop="edit(item)", xs12="", md6="")
        component(:is="view", :item="item")
    v-btn(fab="", bottom="", right="", color="pink", dark="", fixed="", @click.stop="create")
      v-icon add
    v-dialog(v-model="dialog", fullscreen="", hide-overlay="", transition="dialog-bottom-transition", scrollable="")
      v-card(tile="")
        v-app-bar(flat='', dark='', color='primary')
          v-btn(icon='', dark='', @click.native='dialog = false')
            v-icon close
          v-toolbar-title(v-if="selectedId") {{desc}} bearbeiten
          v-toolbar-title(v-else="") {{desc}} hinzufügen
          v-spacer
          v-toolbar-items
            v-btn(v-if="selectedId", dark='', text='', @click.native="confirmModal = true") Löschen
            v-btn(dark='', text='', @click.native="save") Speichern
        component(:is="form", :item="editorItem")
    v-dialog(v-model='confirmModal', max-width='290')
      v-card
        v-card-title.headline Wirklich löschen
        v-card-text Wollen Sie {{editorItem.title}} wirklich löschen
        v-card-actions
          v-spacer
          v-btn(color='green darken-1', text='flat', @click.native='confirmModal = false') Nein
          v-btn(color='green darken-1', text='flat', @click.native='remove') Ja       
      v-btn(fab="", bottom="", right="", color="pink", dark="", fixed="", @click.stop="create")
        v-icon add
      v-dialog(v-model="dialog", fullscreen="", hide-overlay="", transition="dialog-bottom-transition", scrollable="")
        v-card(tile="")
          v-app-bar(app="", dark='', color='primary')
            v-btn(icon='', dark='', @click.native='dialog = false')
              v-icon close
            v-toolbar-title(v-if="selectedId") {{desc}} bearbeiten
            v-toolbar-title(v-else="") {{desc}} hinzufügen
            v-spacer
            v-toolbar-items
              v-btn(dark='', text='', @click.native="save") Speichern
              v-btn(v-if="selectedId", dark='', text='', @click.native="confirmModal = true") Löschen
          component(:is="form", :item="editorItem")
      v-dialog(v-model='confirmModal', max-width='290')
        v-card
          v-card-title.headline Wirklich löschen
          v-card-text Wollen Sie {{selectedId}} wirklich löschen
          v-card-actions
            v-spacer
            v-btn(color='green darken-1', text='flat', @click.native='confirmModal = false') Nein
            v-btn(color='green darken-1', text='flat', @click.native='remove') Ja       
</template>

<script>
  import defaultView from './defaultView'
  export default {
    props: {
      collection: {
        type: String,
        required: true  
      },
      desc: String,
      form: {
        required: true
      },
      view: {
        default() {
          return defaultView
        } 
      }
    },
    pouch: {
      items: function() {
        return {
          database: this.collection,
          selector: {},
        }
      },
      selectedItem: function() {
        return {
          database: this.collection,
          selector: {_id: this.selectedId},
          first: true
        }
      }  
    },
    methods: {
      create() {
        this.dialog=true
        this.selectedId=null
      },
      edit(col) {
        this.dialog=true
        this.selectedId = col._id
      },
      cancel: function() {
        this.dialog=false
        this.selectedId=null
      },
      save() {
        if (this.editorItem ) {
          if (!this.editorItem._id) {
            // Create
            // console.log('creating:',this.editorItem)
            this.$pouch.post(this.collection,{...this.editorItem})
          } else {
            // Update
            // console.log('updating:',this.editorItem)
            this.$pouch.put(this.collection,{...this.editorItem},{})
          }
          this.cancel()
        }
      },
      remove() {
        if(this.selectedId) {
          this.$pouch.remove(this.collection, this.selectedItem)
          this.confirmModal=false
          this.dialog=false
          this.selectedId=null
        }
      }
    },
    data: () => ({
      dialog: false,
      confirmModal: false,
      selectedId: null,
    }),
    computed: {
      editorItem: function() {
        if (this.selectedId) return this.selectedItem || {}
        return {}
      }
    }
  }
</script>
 