<template>
  <label>
    <input
      type="url"
      placeholder="Вставьте адрес видео"
      v-model="videoUrl"
    />
    <button @click="handleClick">Past URL</button>
    <DragContainer>
        <VideoContainer v-if="!videoUrl == ''" :videoUrl="videoUrl"></VideoContainer>
    </DragContainer>
  </label>
</template>

<script>
import VideoContainer from "./VideoContainer"
import DragContainer from "./DragContainer"


export default {
  data () {
    return {
      videoUrl: ''
    }
  },
  methods: {
    handleClick() {
      this.videoUrl = 'https://www.youtube.com/embed/6_ZiQ4_rqZY';
    }
  },
  components: {
    VideoContainer,
    DragContainer,

  }
}
</script>
