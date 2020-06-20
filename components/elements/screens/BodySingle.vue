<template lang="pug">
.gcontainer
  .head {{$md.render(head)}}
  .lhead {{$md.render(lhead)}}
  .lbody 
    BodyCanvas(v-model="value.body")
  .lfoot {{$md.render(lfoot)}}
  .middle 
    .exp-title {{$md.render(title)}}
    .exp-description {{$md.render(description)}}
  .foot {{$md.render(foot)}}
</template>

<script>
import BodyCanvas from '@/components/elements/embody/BodyCanvas'

export default {
   props: {
    value: {type: Object, require: false, default: {}},
    title: { type: String, required: false },
    description: { type: String, required: false },
    lhead: { type: String, required: false },
    lfoot: { type: String, required: false },
    head: { type: String, required: false },
    foot: { type: String, required: false },
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