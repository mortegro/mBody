<template lang="pug">
.gcontainer
  .head(v-html="$md.render(head)")
  .lhead(v-html="$md.render(lhead)")
  .lbody 
    BodyCanvas(v-model="value.body")
  .lfoot(v-html="$md.render(lfoot)")
  .middle 
    .exp-title(v-html="$md.render(title)")
    .exp-description(v-html="$md.render(description)")
  .foot(v-html="$md.render(foot)")
</template>

<script>
import BodyCanvas from '@/components/elements/embody/BodyCanvas'

export default {
   props: {
    value: {type: Object, require: false, default: {}},
    title: { type: String, required: false, default: '' },
    description: { type: String, required: false },
    lhead: { type: String, required: false, default: '' },
    lfoot: { type: String, required: false, default: '' },
    head: { type: String, required: false, default: '' },
    foot: { type: String, required: false, default: '' },
  },
  components: {
    BodyCanvas
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
  grid-template-columns: 1fr minmax(200px, 1fr);
  grid-template-rows:  auto auto minmax(0, 1fr) auto auto;
  grid-template-areas:  "head head "
                        "lhead middle"
                        "lbody middle"
                        "lfoot middle"
                        "foot foot";
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