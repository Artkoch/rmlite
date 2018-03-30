<template>
  <label>
    <input
      type="url"
      placeholder="Вставьте адрес видео"
      v-model="videoUrl"
    />
    <button @click="handleClick">Past URL</button>
    <DragResizeContainer>
        <VideoContainer v-if="!videoUrl == ''" :videoUrl="videoUrl"></VideoContainer>
    </DragResizeContainer>
  </label>
</template>

<script>
import VideoContainer from "./VideoContainer"
import DragResizeContainer from "./DragResizeContainer"


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
    DragResizeContainer,

  }
}
</script>
