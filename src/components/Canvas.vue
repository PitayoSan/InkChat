<template>
  <div>
    <canvas
      id="canvas"
      :width="width"
      :height="height"
      style="border: 2px solid"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUpOrOut"
      @mousemove="handleMouseMove"
      @mouseout="handleMouseUpOrOut"
    >
    </canvas>
    <div class="block">
      <b-icon 
        v-for="color of inkColors" 
        :key= color.name 
        pack="fas" 
        icon="tint" 
        size="is-large" 
        :class="[color.class, 'clickable']"
        @click.native="onColorSelect(color)">
      </b-icon>
    </div>
    <b-button @click="clearCanvas">Clear</b-button>
    <b-button @click="getImageInfo">Get Data</b-button>
  </div>
</template>

<script>

export default {
  name: "Canvas",
  props: {
    width: String,
    height: String,
  },
  data() {
      return {
          canvas: null,
          ctx: null,
          mouse: {
              current: {
                  x: 0,
                  y: 0
              },
              /*previous: {
                  x: 0,
                  y: 0
              },*/
              down: false
          },
          inkColors: [
              {
                name: 'Red',
                class: 'color-red',
                hex: '#eb3434'
              },
              {
                name: 'Blue',
                class: 'color-blue',
                hex: '#578dde'
              },
              {
                name: 'Green',
                class: 'color-green',
                hex: '#53ed81'
              },
              {
                name: 'Orange',
                class: 'color-orange',
                hex: '#ffcc6e'
              }
          ],
          brushWidth: null
      }
  },
  methods: {
    onColorSelect(color) {
        //console.log(`Selected color: ${color.name}`);
        this.ctx.closePath();
        this.ctx.strokeStyle = color.hex;
        this.ctx.fillStyle = color.hex;
        this.ctx.beginPath();
    },
    onWidthSelect(width) {
        //console.log(`Selected width: ${width}`);
        this.ctx.lineWidth = width;
        this.brushWidth = width;
    },
    drawLine() {
        this.ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
        this.ctx.stroke();
    },
    drawDot() {
        //this.ctx.beginPath();
        let half = this.brushWidth/2;
        this.ctx.fillRect(this.currentMouse.x - half, this.currentMouse.y - half, this.brushWidth, this.brushWidth);
        //this.ctx.closePath();
        
    },
    clearCanvas() {
        this.ctx.closePath();
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath();
        
    },
    handleMouseDown() {
        this.mouse.down = true;
        this.drawDot();
        /*this.mouse.current = {
            x: event.pageX,
            y: event.pageY
        }*/ // donee by mouseMove event??
        this.ctx.moveTo(this.currentMouse.x, this.currentMouse.y);
        // this.mouse.previous = {x: this.currentMouse.x,y: this.currentMouse.y};
        //console.log(this.mouse.previous.x, this.mouse.previous.y)
    },
    handleMouseUpOrOut() {
        this.mouse.down = false;
    },
    handleMouseMove (event) { //updates current x,y coordinates
        //console.log("updating x,y!!")
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      }
      if(this.mouse.down) {

          this.drawLine();
      }
    },
    getImageInfo() {
        console.log(this.ctx.getImageData(0, 0, this.width, this.height))
    }
  },
  mounted() {
        
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.onColorSelect(this.inkColors[0]);
        this.onWidthSelect(5);
        
  },
  computed: {
      currentMouse() {
            var rect = this.canvas.getBoundingClientRect();
      
            return {
                x: this.mouse.current.x - rect.left,
                y: this.mouse.current.y - rect.top
            }
      }
  }
};
</script>

<style scoped>
.clickable {
    cursor: pointer;
}
.color-red {
    color:red
}
.color-blue {
    color: blue
}
.color-green {
    color:springgreen
}
.color-orange {
    color: sandybrown
}
</style>