<template>
  <vue-draggable-resizable
    v-on:dragging="onDrag"
    v-on:resizing="onResize"
    :active="true"
    :draggable="true"
    :resizable="true"
    :w="500"
    :h="200"
    :x="200"
    :y='200'
  >
    <div
      style="width: 100%; height: 100%; position: absolute; z-index: 4;"
    >
    </div>
    <iframe
      width="100%"
      height="100%"
      :src="videoUrl"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      class="video-iframe"
    >
    </iframe>
  </vue-draggable-resizable>
</template>

<!--
https://www.youtube.com/embed/6_ZiQ4_rqZY
-->
<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  props: ['videoUrl'],
  data() {
    return {
      width: '500px',
      height: '200px',
      x: '0',
      y: '0'
    }
  },
  methods: {
    onResize(x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag(x, y) {
      this.x = x
      this.y = y
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>

<style>
.video-container {
  position: absolute;
  border: 1px solid transparent;
}
.selected {
  border: 1px solid red;
}
.video-iframe {
  background-color: #c1c1c1;
}
</style>
