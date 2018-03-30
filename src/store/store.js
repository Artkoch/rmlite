import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videoUrl: false
  },
  mutations: {
    addVideoUrl(url) {
      state.videoUrl = url
    }
  }
})

export default store
