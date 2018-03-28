<template>
  <div
    class="video-container"
    :class="{selected: selected}"
    :style="styleObject"
  >
    <div
      v-on:mousedown="mousedown"
      v-on:mouseup="mouseup"
      style="width: 100%; height:100%; position:absolute;z-index:4;"
    ></div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  data () {
    return {
      cursorPositionInRect: {
        y: false,
        x: false
      },
      mouse: {
        down: false,
        over: false
      },
      selected: false,
      styleObject: {top: '0px', left: '0px'}
    }
  },
  methods: {
    mousedown(e) {
      this.cursorPositionInRect.y = this.$el.getBoundingClientRect().y - e.pageY
      this.cursorPositionInRect.x = this.$el.getBoundingClientRect().x - e.pageX
      this.mouse.down = true
      window.addEventListener('mousemove',this.move)
    },
    mouseup() {
      window.removeEventListener('mousemove', this.move)
    },
    move(e) {
      if(this.mouse.down) {
        this.styleObject.top = e.pageY + this.cursorPositionInRect.y + 'px'
        this.styleObject.left = e.pageX + this.cursorPositionInRect.x + 'px'
      }
    },
  },
}
</script>
