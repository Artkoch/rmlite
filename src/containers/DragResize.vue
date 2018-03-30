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
    v-on:mouselave="handleLeave"
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
      mousePositionInElemY: null,
      mousePositionInElemX: null,
      mouseX: null,
      mouseY: null,
      selected: null,
      handles: ['br', 'bl', 'tr', 'tl'],
      handle: null,
      diffY: null,
      diffX: null,
    }
  },
  methods: {
    handleDragging(e) {
      this.dragging = true
      this.resizing = false

      this.mouseX = e.pageX + document.documentElement.scrollLeft
      this.mouseY = e.pageY + document.documentElement.scrollTop

      this.mousePositionInElemX = this.$el.offsetLeft - this.mouseX
      this.mousePositionInElemY = this.$el.offsetTop - this.mouseY


      window.addEventListener('mousemove',this.handleMove)
    },
    handleResizing(handle, event) {
      this.dragging = false
      this.resizing = true

      this.handle = handle

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

      window.removeEventListener('mousemove', this.handleMove)
    },
    handleLeave() {
      window.removeEventListener('mousemove', this.handleMove)
    },
    handleMove(e) {
      this.elem = {
        w: this.$el.offsetWidth,
        h: this.$el.offsetHeight,
        offX: this.$el.offsetLeft,
        offY: this.$el.offsetTop
      }

      this.mouseX = e.pageX + document.documentElement.scrollLeft
      this.mouseY = e.pageY + document.documentElement.scrollTop

      let diffX = this.mouseX - this.elem.offX
      let diffY = this.mouseY - this.elem.offY

      if(this.dragging) {
        console.log('dragging', this.dragging)

        this.elemY = this.mouseY + this.mousePositionInElemY
        this.elemX = this.mouseX + this.mousePositionInElemX

      } else if(this.resizing) {
        console.log('resizing', this.resizing)

        if (this.handle === 'br') {
          this.elemW = diffX
          this.elemH = diffY
        } else if (this.handle === 'bl') {
          this.elemW -= diffX
          this.elemX = this.mouseX
          this.elemH = diffY
        } else if (this.handle === 'tl') {
          this.elemW -= diffX
          this.elemH -= diffY
          this.elemX = this.mouseX
          this.elemY = this.mouseY
        } else if (this.handle === 'tr') {
          this.elemW = diffX
          this.elemH -= diffY
          this.elemY = this.mouseY
        }
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.handleMove)
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

.video-container {
  position: absolute;
}
</style>
