<template lang="pug">
  .stage-parent(ref="stageparent")
    v-stage.stage-container(:config='configKonva', ref="stage", @mousedown="drawStart", @touchstart="drawStart", @mouseup="drawStop", @touchend="drawStop", @mouseout="drawStop", @mousemove="draw", @touchmove="draw",)
      v-layer(ref="background")
        v-image(:config="{image: bgImage}")
      v-layer(ref="drawing")
      v-layer(ref="mask")
        v-image(:config="{image: fgImage}")
</template>

<script>
  import Konva from 'konva'

  export default {
    props: { 
      bgImageUrl: {type: String, default: '/vorlagen/silhouette.png' },
      fgImageUrl: {type: String, default: '/vorlagen/mask.png'},
      strokeWidth: { type: Number, default: 24 },
      strokeStyle: { type: String, default: '#df4b26'},
      imgWidth: { type: Number, default: 480},
      imgHeight: {type: Number, default: 1280},
      value: { type: String }
    },
    data() {
      return {
        configKonva: {
          width: this.imgWidth,
          height: this.imgHeight,
        },
        bgImage: null,
        fgImage: null,
        mode: 'brush',
        painting: false,
        lPP: null,
        scale: 0.1,
        drawonImage: null,
        context: null,
        canvas: null,
        stage: null,
        drawonLayer: null
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
      this.stage = this.$refs.stage.getStage()
      this.drawonLayer = this.$refs.drawing.getStage()

      // then we are going to draw into special canvas element
      this.canvas = document.createElement('canvas');
      this.canvas.width = this.imgWidth;
      this.canvas.height = this.imgHeight;

      // created canvas we can add to layer as "Konva.Image" element
      this.drawonImage = new Konva.Image({ image: this.canvas, x: 0, y: 0 });
      this.drawonLayer.add(this.drawonImage);
      this.stage.draw();

      // Good. Now we need to get access to context element
      this.context = this.canvas.getContext('2d');
      this.context.lineJoin = 'round';
      this.context.lineWidth = this.strokeWidth;
      this.context.strokeStyle = this.strokeStyle;

      window.addEventListener('resize', this.fit);
      this.$nextTick(() => {
        this.fit();
      });
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.fit);
    },

    methods: {
      drawStart() {
        this.$log.debug('drawStart')
        this.painting = true;
        this.lPP = this.getPosition() ;
      },
      draw() {
        this.$log.debug('draw')
        if (this.painting) { 
          if ( this.mode === 'brush' ) { this.context.globalCompositeOperation = 'source-over'; }
          if ( this.mode === 'eraser' ) { this.context.globalCompositeOperation = 'destination-out'; }
          const pos = this.getPosition();
          this.context.beginPath();
          this.context.moveTo(this.lPP.x - this.drawonImage.x(), this.lPP.y - this.drawonImage.y());
          this.context.lineTo(pos.x - this.drawonImage.x(), pos.y - this.drawonImage.y());
          this.context.closePath();
          this.context.stroke();
          this.lPP = pos;
          this.drawonLayer.batchDraw();
        }
      },
      drawStop() {
        this.$log.debug('drawStart')
        this.painting = false
        this.$emit('input', this.canvas.toDataURL())
      },
      getPosition() {
        const pp = this.stage.getPointerPosition();
        return {x: pp.x / this.scale, y: pp.y / this.scale}
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
        
        this.stage.width(this.imgWidth * this.scale);
        this.stage.height(this.imgHeight * this.scale);
        this.$log.debug(`setting width = ${this.imgWidth * this.scale}`)
        this.$log.debug(`setting height = ${this.imgHeight * this.scale}`)

        this.stage.scale({ x: this.scale, y: this.scale });
        this.stage.draw();
      }
    }
  };
</script>

<style lang="scss" scoped>
.stage-parent {
  // background: grey;
  // border: 1px solid gold;
  // overflow: hidden;
  height: 100%;
}

.stage-container {
  display: flex;
  justify-content: center;
}
</style>