<template>
  <div class="add-content-wrapper">
    <div class="add-content__tooltip" v-if="tooltipVisible">
      <input
        class="add-content__input"
        type="url"
        placeholder="Past video url"
        v-model="videoUrl"
        @input="handleInput"
      />
      <span
        class="add-content__input-caption"
        @click="handleClick"
      >
        Try expample URL
      </span>
    </div>

    <div
      class="add-content__btn"
      v-bind:class="{'add-content__btn--selected':tooltipVisible}"
      @click="tooltipVisible = !tooltipVisible"
      >
      <img class="add-content__btn-img" src='../assets/play-circle.svg' art=""/>
      <span class="add-content__btn-caption">Add video...</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tooltipVisible: false,
      videoUrl: '',
      exampleUrl: 'https://www.youtube.com/watch?v=7-d3O-7aus0'
    }
  },
  methods: {
    handleClick() {
      this.videoUrl = this.getVideoEmbedUrl(this.exampleUrl)
      this.$store.state.videoUrl = this.videoUrl
    },
    getVideoEmbedUrl(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
        var match = url.match(regExp)
        return 'https://www.youtube.com/embed/' + ((match&&match[7].length==11)? match[7] : false)
    },
    handleInput(e) {
      this.videoUrl = this.getVideoEmbedUrl(event.target.value)
      this.$store.state.videoUrl = videoUrl
    }
  },
}
</script>

<style>

* {
  outline: none;
}

.add-content__btn {
  width: 100px;
  user-select: none;
  padding: 21px 10px;
  transition: background-color 0.2s ease 0s;
}
.add-content__btn--selected {
  background-color: rgba(193,193,193,.2);
  border-radius: 4px;
}

.add-content__btn:hover {
  background-color: rgba(193,193,193,.2);
  border-radius: 4px;
  cursor: pointer;
}

.add-content__btn-img {
  width: 31px;
  margin-left: -8px;
}

.add-content__btn-caption {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: black;
}

.add-content__tooltip {
  border-radius: 4px;
  padding: 10px 20px 10px 0px;
  display: block;
  position: absolute;
  top: -100px;
}

.add-content__input {
  box-sizing: border-box;
  padding-left: 0;
  font-size: 14px;
  border: none;
  height: 44px;
  border-bottom: 1px solid black;
}

.add-content__input-caption {
  font-size: 14px;
  font-weight: 500;
  color: rgba(0,0,0,1);
  text-align: left;
  display: block;
  user-select: none;
}

.add-content__input-caption:hover {
  color: red;
  cursor: pointer;
}
</style>
