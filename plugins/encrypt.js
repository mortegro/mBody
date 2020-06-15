import Vue from 'vue'
import JSEncrypt from 'jsencrypt'


Vue.prototype.$encrypt = function(text) {
  const pk = process.env.pubkey.replace(/\\n/g, '\n')
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(pk);
  if (pk) {
    return encrypt.encrypt(text)
  }
}