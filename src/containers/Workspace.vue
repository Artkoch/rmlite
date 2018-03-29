<template>
  <div class="wrapper">
    Выбрать видео:  <AddVideo @videoAdded="handleVideoAdd"/>
    <Video v-if="!!videoUrl" :videoUrl="videoUrl" ></Video>
    <div class="workspace">
    </div>
  </div>
</template>

<script>
  import AddVideo from '../components/AddVideo'
  import Video from '../components/Video'

  export default {
    name: 'Workspace',
    data () {
      return {
        videoUrl: ''
      }
    },
    methods: {
      handleVideoAdd(videoUrl) {
        this.videoUrl = videoUrl
      }
    },
    components: {
      AddVideo,
      Video,
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
