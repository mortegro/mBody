<template lang="pug">
.gcontainer
  .head Head
  .middle 
    p backend: {{env}}
    p baseUrl: {{base}}
    p pubkey: {{pubkey}}
  .lhead lhead
  .lbody 
    v-text-field(v-model="text", label="text")
    v-textarea(type="textarea" v-model="pubkey" label="Public Key")
    v-btn(@click="encrypt") encrypt
    v-textarea(type="textarea" v-model="result" label="Result")
    p {{result}}
  .lfoot lfoot
  .rhead rhead
  .rbody 
   p rbody: {{x2}} * {{y2}}

  .rfoot rfoot
  .foot foot
</template>

<script>
export default {
  data() {
    return {
      text: "Test It",
      result: '???',
      x2:0,
      y2:0,
      env: process.env.backend,
      base: process.env.baseUrl,
      pubkey: process.env.pubkey.replace(/\\n/g, '\n')
    }
  },
  methods: {
    resize1 ({width, height}) {
      this.x1 = width
      this.y1 = height
    },
    resize2 ({width, height}) {
      this.x2 = width
      this.y2 = height
    },
    encrypt() {
      this.result = this.$encrypt(this.text);
    }
  }
}
</script>

<style lang="scss" scoped>

.gcontainer {
  padding: 10px;
  display: grid;
  grid-template-columns: 3fr minmax(200px, 2fr) 3fr;
  grid-template-rows:  auto auto 1fr auto auto;
  grid-template-areas:  "head head head"
                        "lhead middle rhead"
                        "lbody middle rbody"
                        "lfoot middle rfoot"
                        "foot foot foot";
  height: 100%
}


.head {
  grid-area: head;
  background-color: gold;
}

.middle {
  grid-area: middle;
  background-color: mediumaquamarine;
}

.foot {
  grid-area: foot;
  background-color: green;
}

.lhead {
  grid-area: lhead;
  background-color: yellow
}

.lbody {
  grid-area: lbody;
  background-color: orange
}

.lfoot {
  grid-area: lfoot;
  background-color: yellowgreen
}

.rhead {
  grid-area: rhead;
  background-color: orangered
}

.rbody {
  grid-area: rbody;
  background-color: red
}

.rfoot {
  grid-area: rfoot;
  background-color: darkmagenta
}
</style>