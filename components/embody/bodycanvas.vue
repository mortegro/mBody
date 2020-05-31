<template lang="pug">
  v-stage(:config='configKonva', ref="stage")
    v-layer(ref="background")
      v-image(:config="{image: bgImage}")
    v-layer(ref="drawing")
    v-layer(ref="mask")
      v-image(:config="{image: fgImage}")

</template>

<script>
  import Konva from 'konva'
  var drawonImage

  export default {
    props: { 
      bgImageUrl: {type: String, required: true, default: '' },
      fgImageUrl: {type: String, required: false},
      strokeWidth: { type: Number, default: 12 },
      strokeStyle: { type: String, default: '#df4b26'}
    },
    data() {
      return {
        configKonva: {
          width: 212,
          height: 620
        },
        bgImage: null,
        fgImage: null,
        imgData: null,
        mode: 'brush',
        painting: false,
        lastPointerPosition: null
      };
    },  
    methods: {
      saveImage() {
        console.log("changed")
        this.imgData = image.toDataURL();
      }
    },
    created() {
      const image1 = new window.Image();
      image1.src = "v1_images_dummyG_620.png";
      image1.onload = () => {
        // set image only when it is loaded
        this.bgImage = image1;
      };
    },
    mounted() {
      // then we are going to draw into special canvas element
      const canvas = document.createElement('canvas');
      canvas.width = stage.width();
      canvas.height = stage.height();
      const stage = this.$refs.stage.getStage()
      const drawonLayer = this.$refs.drawing.getStage()

      // created canvas we can add to layer as "Konva.Image" element
      drawonImage = new Konva.Image({ image: canvas, x: 0, y: 0 });
      drawonImage.green(20)
      drawonLayer.add(drawonImage);
      stage.draw();

      // Good. Now we need to get access to context element
      var context = canvas.getContext('2d');
      context.lineJoin = 'round';
      context.lineWidth = this.strokeWidth;
      context.strokeStyle = this.strokeStyle;
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
        if ( mode === 'brush' ) { context.globalCompositeOperation = 'source-over'; }
        if ( mode === 'eraser' ) { context.globalCompositeOperation = 'destination-out'; }
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