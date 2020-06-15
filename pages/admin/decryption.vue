<template lang="pug">
v-container(fluid="")
  v-row
    v-col(cols=6)
      v-card
        v-textarea(type="textarea" v-model="pubkey" label="Public Key")
    v-col(cols=6)
      v-card
        v-textarea(type="textarea" v-model="privkey" label="Private Key")
  v-row
    v-col(cols=8,)
      v-card
        v-textarea(type="textarea" v-model="text" label="Input")
    v-col(cols=4,  :align="center", :justify="middle")
        v-btn.my-2(@click="encrypt") encrypt
        v-btn.my-2(@click="decrypt") decrypt
        v-btn.my-2(@click="clear") clear
        v-btn.my-2(@click="r2i") result->input
  v-row
    v-col(cols=8)
      v-card
        v-textarea(type="textarea" v-model="result" label="Result")
</template>

<script>
import JSEncrypt from 'jsencrypt'

export default {
  data() {
    return {
      text: "Test It",
      result: '',
      pubkey: process.env.pubkey.replace(/\\n/g, '\n'),
      privkey: ''
    }
  },
  methods: {
    encrypt() {
      this.result = this.$encrypt(this.text);
    },
    decrypt() {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(this.privkey);
    this.result = decrypt.decrypt(this.text);
    },
    clear() {
      this.result=""
      this.text=""
    },
    r2i() {
      this.text=this.result
      this.result=""
    }
  }
}
</script>

<style lang="scss" scoped>
</style>