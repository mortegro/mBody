import Vue from 'vue'
import VuePouch from 'vue-pouch'
import PouchDB from 'pouchdb'
import Find from 'pouchdb-find'
import LiveFind from 'pouchdb-live-find'
import Authentication from 'pouchdb-authentication'

PouchDB.plugin(Find)
PouchDB.plugin(LiveFind)
PouchDB.plugin(Authentication)
Vue.use(VuePouch, {
  pouch: PouchDB
})

export default (ctx) => {

}