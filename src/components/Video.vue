<template>
  <iframe
    width="100%"
    height="100%"
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
https://www.youtube.com/watch?v=7-d3O-7aus0
https://www.youtube.com/embed/6_ZiQ4_rqZY
-->
