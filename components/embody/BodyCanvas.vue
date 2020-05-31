<template lang="pug">
  v-stage(:config='configKonva', ref="stage" @mousedown="drawStart", @touchstart="drawStart", @mouseup="drawStop", @touchend="drawStop", @mouseout="drawStop", @mousemove="draw", @touchmove="draw",)
    v-layer(ref="background")
      v-image(:config="{image: bgImage}")
    v-layer(ref="drawing")
    v-layer(ref="mask")
      v-image(:config="{image: fgImage}")

</template>

<script>
  import Konva from 'konva'
  var drawonImage, context, canvas, stage, drawonLayer

  export default {
    props: { 
      bgImageUrl: {type: String, default: 'v1_images_dummyG_620.png' },
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
      if (this.bgImageUrl) {
        const bgImage = new window.Image();
        bgImage.src = this.bgImageUrl;
        bgImage.onload = () => { this.bgImage = bgImage; };
      }
      if (this.fgImageUrl) {
        const fgImage = new window.Image();
        fgImage.src = this.fgImageUrl
        fgImage.onload = () => { this.bgImage = fgImage; };
      }
    },
    mounted() {
      // then we are going to draw into special canvas element
      canvas = document.createElement('canvas');
      stage = this.$refs.stage.getStage()
      drawonLayer = this.$refs.drawing.getStage()
      canvas.width = stage.width();
      canvas.height = stage.height();

      // created canvas we can add to layer as "Konva.Image" element
      drawonImage = new Konva.Image({ image: canvas, x: 0, y: 0 });
      drawonImage.green(20)
      drawonLayer.add(drawonImage);
      stage.draw();

      // Good. Now we need to get access to context element
      context = canvas.getContext('2d');
      context.lineJoin = 'round';
      context.lineWidth = this.strokeWidth;
      context.strokeStyle = this.strokeStyle;
    },
    methods: {
      drawStart() {
        this.$log.debug('drawStart')
        this.painting = true;
        this.lastPointerPosition = stage.getPointerPosition();
      },
      drawStop() {
        this.$log.debug('drawStart')
        this.painting = false
      },
      draw() {
        this.$log.debug('draw')
        if (this.painting) { 
          if ( this.mode === 'brush' ) { context.globalCompositeOperation = 'source-over'; }
          if ( this.mode === 'eraser' ) { context.globalCompositeOperation = 'destination-out'; }
          const pos = stage.getPointerPosition();
          context.beginPath();
          context.moveTo(this.lastPointerPosition.x - drawonImage.x(), this.lastPointerPosition.y - drawonImage.y());
          context.lineTo(pos.x - drawonImage.x(), pos.y - drawonImage.y());
          context.closePath();
          context.stroke();
          this.lastPointerPosition = pos;
          drawonLayer.batchDraw();
        }
      },
      output() {
        console.log("output")
      }
    }
  };
</script>