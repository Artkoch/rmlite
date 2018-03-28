<template>
  <div id="app">
    <Workspace/>
  </div>
</template>

<script>
import Workspace from './containers/Workspace'

export default {
  name: 'App',
  components: {
    Workspace
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
