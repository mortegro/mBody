<template lang="pug">
.gcontainer
  .head {{head}}
  .right {{right}}
  .lhead {{lhead}}
  .lbody 
    BodyCanvas(v-model="value")
  .lfoot {{lfoot}}
  .foot {{foot}}
</template>

<script>
import BodyCanvas from '@/components/elements/embody/BodyCanvas'

export default {
   props: {
    value: {type: Object, require: false, default: {}},
    head: { type: String, required: false },
    right: { type: String, required: false },
    lhead: { type: String, required: false },
    lfoot: { type: String, required: false },
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
  grid-template-rows:  20px 20px minmax(0, 1fr) 20px 20px;
  grid-template-areas:  "head head "
                        "lhead middle"
                        "lbody middle"
                        "lfoot middle"
                        "foot foot";
  padding: 10px;
  height: 100%;
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