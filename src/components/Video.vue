<template>
  <iframe
    :src="videoUrl"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  >
  </iframe>
</template>

<!--
https://www.youtube.com/embed/6_ZiQ4_rqZY
-->
<script>
export default {
  props: ['videoUrl'],
  data() {
    return {}
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
</style>
