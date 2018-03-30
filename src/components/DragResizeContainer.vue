<template>
  <div
    class="video-container"
    :class="{selected: selected}"
    :style="{top: elemY+'px', left: elemX+'px', width: elemW+'px', height: elemH+'px',}"
  >
  <div
    v-for="handle in handles"
    :class="'handle handle-' + handle"
    :key="handle"
    v-on:mousedown="handleResizing(handle, $event)"
    v-on:mouseup="mouseupH"
    v-on:mouseleave="mouseleave"
  >
  </div>
    <div
      v-on:mousedown="handleDragging"
      v-on:mouseup="mouseup"
      class="drag-plate"
    >
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  data () {
    return {
      elemY: null,
      elemX: null,
      elemW: 560,
      elemH: 360,
      elem: null,
      cursorPositionInElem: {
        y: false,
        x: false
      },
      mouse: {
        y: 0,
        x: 0,
        down: false,
        resize: false,
        lastPos: {
          x: false,
          y: false,
          z: false
        },
      },
      selected: null,
      handles: ['br', 'bl', 'tr', 'tl'],
      handle: null,
      diffY: null,
      diffX: null,
      lastMouseX: 0,
      lastMouseY: 0

    }
  },
  methods: {
    handleDragging(e) {
      // Get cursor position inside the element
      this.cursorPositionInElem.y = this.$el.getBoundingClientRect().y - e.pageY
      this.cursorPositionInElem.x = this.$el.getBoundingClientRect().x - e.pageX

      this.dragging = true
      this.resizing = false

      window.addEventListener('mousemove',this.handleMove)
    },
    handleResizing(handle, event) {
      this.dragging = false
      this.resizing = true
      this.handle = handle

      this.mouse.lastPos.y = event.pageY;
      this.mouse.lastPos.x = event.pageX;

      console.log('now this.mouse.lastPos.x', this.mouse.lastPos.x);

      window.addEventListener('mousemove',this.handleMove)
    },
    mouseup(e) {
      this.dragging = false
      this.resizing = false

      window.removeEventListener('mousemove', this.handleMove)
    },
    mouseupH(e) {
      this.dragging = false
      this.resizing = false
      this.mouse.lastPos.z = e.pageX
      window.removeEventListener('mousemove', this.handleMove)
    },
    mouseleave() {
      // window.removeEventListener('mousemove', this.handleMove)
    },
    handleMove(e) {
      let mouseX = e.pageX
      let mouseY = e.pageY
      this.lastMouseX = mouseX
      this.lastMouseY = mouseY

      let diffX = mouseX - this.lastMouseX
      let diffY = mouseY - this.lastMouseY

      this.elem = {
        w: this.$el.offsetWidth,
        h: this.$el.offsetHeight,
        offX: this.$el.offsetLeft,
        offY: this.$el.offsetTop
      }

      if(this.dragging) {
        console.log('this.dragging', this.dragging)

        this.elemY = mouseY + this.cursorPositionInElem.y
        this.elemX = mouseX + this.cursorPositionInElem.x

      } else if(this.resizing) {
        console.log('this.resizing', this.resizing)

        if (this.handle === 'br') {
          this.elemW = mouseX - this.elem.offX
          this.elemH = mouseY - this.elem.offY

        } else if (this.handle === 'bl') {
          this.elemW -= (mouseX - this.elem.offX)
          this.elemX = mouseX
          this.elemH = (mouseY - this.elem.offY)

        }
        else if (this.handle === 'tl') {
          this.elemW -= (mouseX - this.elem.offX)
          this.elemH -= (mouseY - this.elem.offY)
          this.elemX = mouseX
          this.elemY = mouseY

        } else if (this.handle === 'tr') {
          this.elemW = mouseX - this.elem.offX
          this.elemH -= (mouseY - this.elem.offY)
          this.elemY = mouseY


        }
      }
    },
  },

  watch: {
    // getElemDimentions() {
    //   var elem = this.$el
    //
    //   return {
    //     w: this.$el.offsetWidth,
    //     h: this.$el.offsetHeight,
    //     offX: this.$el.offsetLeft,
    //     offY: this.$el.offsetTop
    //   }
    // },
  }
}
</script>

<style>
.handle {
  width: 20px;
  height: 20px;
  background-color: red;
  position: absolute;
  z-index: 4;
  margin: -10px;
}

.handle:hover{
  background-color: green;
}

.handle-br {
  bottom: 0;
  right: 0;
}

.handle-bl {
  bottom: 0;
  left: 0;
}

.handle-tr {
  top: 0;
  right: 0;
}

.handle-tl {
  top: 0;
  left: 0;
}

.drag-plate {
  width:100%;
  height:100%;
  position:absolute;
  z-index:3;
}
</style>
