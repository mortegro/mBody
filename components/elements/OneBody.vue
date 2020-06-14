<template lang="pug">
.gcontainer
  .head Head
  .right right
  .lhead lhead
  .lbody 
    BodyCanvas
  .lfoot lfoot
  .foot foot
</template>

<script>
import BodyCanvas from '@/components/elements/embody/BodyCanvas'

export default {
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