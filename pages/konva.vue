<template lang="pug">
  v-layout(column='', justify-center='', align-center='')
    v-flex(xs12='', sm8='', md6='')
      BodyCanvas(ref="bodyCanvas")
    v-btn(@click="saveImage") Save
</template>

<script>
  import Konva from 'konva'
  import BodyCanvas from '@/components/embody/BodyCanvas'
  var image

  export default {
    components: {
      BodyCanvas
    },
    data() {
      return {
      };
    },
    methods: {
      saveImage() {
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

        this.$refs.bodyCanvas.output()
        // var dataURL = image.toDataURL();
        // downloadURI(dataURL, 'stage.png');
      }
    },
  };
</script>