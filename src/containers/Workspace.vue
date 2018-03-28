<template>
  <div class="workspace">
    Выбрать видео:  <UploadVideo/>
  </div>
</template>

<script>
import UploadVideo from '../components/UploadVideo'

export default {
  name: 'Workspace',
  data () {
    return {}
  },
  components: {
    UploadVideo
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
