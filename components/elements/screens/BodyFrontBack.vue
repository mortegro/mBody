<template lang="pug">
.gcontainer
  .head 
  .middle
    .exp-title(v-html="title")
    .exp-description(v-html="description")
  .lhead.text-center(v-html="lhead")
  .lbody 
    BodyCanvas(v-model="value.front", bgImageUrl="/vorlagen/silhouette_front.png")
  .lfoot.text-center(v-html="lfoot")
  .rhead(v-html="rhead")
  .rbody 
    BodyCanvas(v-model="value.back", bgImageUrl="/vorlagen/silhouette_back.png")
  .rfoot.text-center(v-html="rfoot")
  .foot(v-html="foot")
</template>

<script>
import BodyCanvas from '@/components/elements/embody/BodyCanvas'

export default {
  components: {
    BodyCanvas
  },
  props: {
    value: {type: Object, require: false, default: {}},
    title: { type: String, required: false, default: '' },
    description: { type: String, required: false },
    lhead: { type: String, required: false, default: '' },
    lfoot: { type: String, required: false, default: "Vorderseite" },
    rhead: { type: String, required: false, default: '' },
    rfoot: { type: String, required: false, default: "Rückseite" },
    foot: { type: String, required: false, default: '' },
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.gcontainer {
  display: grid;
  grid-template-columns: 3fr minmax(200px, 2fr) 3fr;
  grid-template-rows:  auto auto minmax(0, 1fr) auto auto;
  grid-template-areas:  "head head head"
                        "lhead middle rhead"
                        "lbody middle rbody"
                        "lfoot middle rfoot"
                        "foot foot foot";
  padding: 10px;
  height: 100%;
  width: 100%
}

.head {
  grid-area: head;
  // background-color: gold;
}

.middle {
  grid-area: middle;
  // background-color: mediumaquamarine;
}

.foot {
  grid-area: foot;
  // background-color: green;
}

.lhead {
  grid-area: lhead;
  // background-color: yellow
}

.lbody {
  grid-area: lbody;
  // background-color: orange
}

.lfoot {
  grid-area: lfoot;
  // background-color: yellowgreen
}

.rhead {
  grid-area: rhead;
  // background-color: orangered
}

.rbody {
  grid-area: rbody;
  // background-color: red
}

.rfoot {
  grid-area: rfoot;
  // background-color: darkmagenta
}
</style>