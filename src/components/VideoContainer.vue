<template>
  <iframe
    width="560"
    height="315"
    :src="videoUrl"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  >
  </iframe>
</template>

<script>
export default {
  props: ['videoUrl'],
  data() {
    return {}
  }
}
</script>
<!--
https://www.youtube.com/embed/6_ZiQ4_rqZY
-->

<style>
.video-container {
  position: absolute;
  border: 1px solid transparent;
}
.selected {
  border: 1px solid red;
}
</style>
