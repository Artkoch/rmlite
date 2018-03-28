<template>
  <div class="workspace" v-on:dragenter="handleDragenter">
    Выбрать изображение:  <UploadBtn/>
    Выбрать видео:  <UploadBtn/>
  </div>
</template>

<script>
import ImageContainer from '../components/ImageContainer'

export default {
  name: 'ImageContainer',
  data () {
    return {}
  },
  components: {
    UploadBtn
  }
}
</script>

<style scoped>

.workspace {
  border: 1px dashed #c1c1c1;
  height: 100vh;
  width: 100%;
}

</style>
