<template>
  <div class="workspace">
    <Toolbar>
      <AddVideo/>
    </Toolbar>
    <DragResize v-if="this.videoUrl" >
      <Video :videoUrl="this.videoUrl" />
    </DragResize>
  </div>
</template>

<script>
import AddVideo from '../components/AddVideo'
import Video from '../components/Video'
import DragResize from '../containers/DragResize'
import Toolbar from '../containers/Toolbar'

export default {
  name: 'Workspace',
  computed: {
    videoUrl () {
      console.log(this.$store.state.videoUrl);
      return this.$store.state.videoUrl
    }
  },
  components: {
    AddVideo,
    Video,
    DragResize,
    Toolbar
  }
}
</script>
