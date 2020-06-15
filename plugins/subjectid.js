import Vue from 'vue'
import { nanoid } from 'nanoid'


Vue.prototype.$getSubject = function() {
  const id = nanoid(8)
  const pin = hashIt(id)
  return { id, pin }
}

Vue.prototype.$checkSubject = function({id, pin}) {
  return (hashIt(id) === pin)
}

Vue.prototype.$getPin = function(id) {
  return hashIt(id) 
}

function hashIt(str) {
  var p = 0
  for (var i=0, l=str.length; i<l; i++) {
    p = p + Number(str.charCodeAt(i))
  }
  return (p*p).toString().slice(0,4)
}