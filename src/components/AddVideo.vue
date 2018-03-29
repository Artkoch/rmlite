<template>
  <div class="add-video-wrapper">
    <div class="add-video-btn" @click="handleAddVideoBtnClick">Add video...</div>
    <transition name="fade">
      <div v-if="urlInputVisible">
        <input
          type="url"
          placeholder="Вставьте адрес видео"
          v-model="videoUrl"
        />
        <button @click="handleClick">Past URL</button>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  data () {
    return {
      videoUrl: '',
      urlInputVisible: false,
    }
  },
  methods: {
    handleClick() {
      this.videoUrl = 'https://www.youtube.com/embed/6_ZiQ4_rqZY';
      this.$emit('videoAdded', this.videoUrl )
    },
    handleAddVideoBtnClick() {
      this.urlInputVisible = !this.urlInputVisible
    }
  },
  components: {
  }
}
</script>

<style>
.add-video-btn {
  border: 2px solid orange;
  cursor: pointer;
  max-width: 100px;
  border-radius: 20px;

  padding: 7px 10px;
}

.add-video-btn:hover {
  background-color: orange;
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
