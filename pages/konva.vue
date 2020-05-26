<template lang="pug">
  v-layout(column='', justify-center='', align-center='')
    v-flex(xs12='', sm8='', md6='')
      v-stage(:config='configKonva', ref="stage")
        v-layer(ref="layer2")
          <v-image :config="{image: bgImage}"/>
        v-layer(ref="layer")
    v-btn(@click="saveImage") Save
</template>

<script>
import Konva from 'konva'
var image
export default {
  data() {
    return {
      configKonva: {
        width: 212,
        height: 620
      },
      bgImage: null
    };
  },  
  created() {
    const image1 = new window.Image();
    image1.src = "v1_images_dummyG_620.png";
    image1.onload = () => {
      // set image only when it is loaded
      this.bgImage = image1;
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
      var dataURL = image.toDataURL();
      downloadURI(dataURL, 'stage.png');
    }
  },
  mounted() {


 // then we are going to draw into special canvas element
    const stage = this.$refs.stage.getStage()
    const layer = this.$refs.layer.getStage()
    const canvas = document.createElement('canvas');
    canvas.width = stage.width();
    canvas.height = stage.height();
    // created canvas we can add to layer as "Konva.Image" element
    image = new Konva.Image({ image: canvas, x: 0, y: 0 });
    image.green(20)
    layer.add(image);
    stage.draw();
    // Good. Now we need to get access to context element
    var context = canvas.getContext('2d');
    context.strokeStyle = '#df4b26';
    context.lineJoin = 'round';
    context.lineWidth = 12;
    var isPaint = false;
    var lastPointerPosition;
    var mode = 'brush';

    // now we need to bind some events
    // we need to start drawing on mousedown
    // and stop drawing on mouseup
    stage.on('mousedown touchstart', function() {
      isPaint = true;
      lastPointerPosition = stage.getPointerPosition();
    });

    // will it be better to listen move/end events on the window?
    stage.on('mouseup touchend', function() {
      isPaint = false;
    });
    stage.on('mouseout', function () {
      isPaint = false;
    });
    // and core function - drawing
    stage.on('mousemove touchmove', function() {
      if (!isPaint) { return; }
      if (mode === 'brush') {
        context.globalCompositeOperation = 'source-over';
      }
      if (mode === 'eraser') {
        context.globalCompositeOperation = 'destination-out';
      }
      context.beginPath();
      var localPos = {
        x: lastPointerPosition.x - image.x(),
        y: lastPointerPosition.y - image.y()
      };
      context.moveTo(localPos.x, localPos.y);
      var pos = stage.getPointerPosition();
      localPos = {
        x: pos.x - image.x(),
        y: pos.y - image.y()
      };
      context.lineTo(localPos.x, localPos.y);
      context.closePath();
      context.stroke();
      lastPointerPosition = pos;
      layer.batchDraw();
    });
  }
};

</script>