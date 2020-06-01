<template lang="pug">
  v-container
    v-layout(column='', justify-center='', align-center='')
      v-flex(xs12='', sm8='', md6='')
        Experiment(ref="bodyCanvas")
      v-btn(@click="saveImage") Save
</template>

<script>
  import Experiment from '@/components/embody/Experiment'

  export default {
    components: {
      Experiment
    },
    data() {
      return {
      };
    },
    methods: {
      async saveImage() {
        function downloadURI(uri, name) {
          var link = document.createElement('a');
          link.download = name;
          link.href = uri;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          // delete link;
        }
        console.log("clicked")

        // await this.$refs.bodyCanvas.output()
        // var dataURL = image.toDataURL();
        // downloadURI(dataURL, 'stage.png');
      }
    },
  };
</script>

<style lang="scss">
.experiment { 
  background-color: red;
  display: grid;
  grid-template-rows: 1fr 80px;
  justify-content: center;
}

.actions {
  background-color: green;
  justify-content: center;
  text-align: center;
}
</style>