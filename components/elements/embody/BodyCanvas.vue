<template lang="pug">
  #stage-parent(ref="stageparent")
    v-stage#stage-container(:config='configKonva', ref="stage", @mousedown="drawStart", @touchstart="drawStart", @mouseup="drawStop", @touchend="drawStop", @mouseout="drawStop", @mousemove="draw", @touchmove="draw",)
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
      bgImageUrl: {type: String, default: '/vorlagen/silhouette.png' },
      fgImageUrl: {type: String, default: '/vorlagen/mask.png'},
      strokeWidth: { type: Number, default: 24 },
      strokeStyle: { type: String, default: '#df4b26'},
      imgWidth: { type: Number, default: 480},
      imgHeight: {type: Number, default: 1280}
    },
    data() {
      return {
        configKonva: {
          width: this.imgWidth,
          height: this.imgHeight
        },
        bgImage: null,
        fgImage: null,
        imgData: null,
        mode: 'brush',
        painting: false,
        lPP: null,
        scale: 0.1,
      };
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
        fgImage.onload = () => { this.fgImage = fgImage; };
      }
    },

    mounted() {
      stage = this.$refs.stage.getStage()
      drawonLayer = this.$refs.drawing.getStage()

      // then we are going to draw into special canvas element
      canvas = document.createElement('canvas');
      canvas.width = this.imgWidth;
      canvas.height = this.imgHeight;

      // created canvas we can add to layer as "Konva.Image" element
      drawonImage = new Konva.Image({ image: canvas, x: 0, y: 0 });
      drawonLayer.add(drawonImage);
      stage.draw();

      // Good. Now we need to get access to context element
      context = canvas.getContext('2d');
      context.lineJoin = 'round';
      context.lineWidth = this.strokeWidth;
      context.strokeStyle = this.strokeStyle;

      window.addEventListener('resize', this.fit);
      this.fit();
    },

    methods: {
      drawStart() {
        this.$log.debug('drawStart')
        this.painting = true;
        this.lPP = this.getPosition() ;
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
          const pos = this.getPosition();
          context.beginPath();
          context.moveTo(this.lPP.x - drawonImage.x(), this.lPP.y - drawonImage.y());
          context.lineTo(pos.x - drawonImage.x(), pos.y - drawonImage.y());
          context.closePath();
          context.stroke();
          this.lPP = pos;
          drawonLayer.batchDraw();
        }
      },
      getPosition() {
        const pp = stage.getPointerPosition();
        return {x: pp.x / this.scale, y: pp.y / this.scale}
      },
      output() {fitStageIntoParentContainer
        console.log("output")
      },
      saveImage() {
        console.log("changed")
        this.imgData = image.toDataURL();
      },
      fit() {
        const container = this.$refs.stageparent
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        this.$log.debug(`width = ${width}`)
        this.$log.debug(`height = ${height}`)

        const wq = width / this.configKonva.width
        const hq = height / this.configKonva.height
        this.scale = wq < hq ? wq : hq

        this.$log.debug(`wq = ${wq}`)
        this.$log.debug(`hq = ${hq}`)
        this.$log.debug(`scale = ${this.scale}`)
        
        stage.width(this.imgWidth * this.scale);
        stage.height(this.imgHeight * this.scale);
        this.$log.debug(`setting width = ${this.imgWidth * this.scale}`)
        this.$log.debug(`setting height = ${this.imgHeight * this.scale}`)

        stage.scale({ x: this.scale, y: this.scale });
        stage.draw();
      }
    }
  };
</script>

<style lang="scss" scoped>
#stage-parent {
  // background: grey;
  // border: 1px solid gold;
  // overflow: hidden;
  height: 100%;
}

#stage-container {
  display: flex;
  justify-content: center;
}
</style>