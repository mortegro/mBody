<template lang="pug">
.gcontainer
  .head Head
  .middle middle
  .lhead lhead
  .lbody 
    p lbody: {{x1}} * {{y1}}
    resize-observer(@notify="resize1")
  .lfoot lfoot
  .rhead rhead
  .rbody 
   p rbody: {{x2}} * {{y2}}
   resize-observer(@notify="resize2")

  .rfoot rfoot
  .foot foot
</template>

<script>
export default {
  data() {
    return {
      x1:0,
      y1:0,
      x2:0,
      y2:0,
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