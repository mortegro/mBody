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

Vue.prototype.$decrypt = function (text, pk) {
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(pk);
  const result = decrypt.decrypt(text);
  return result
}