<template>
  <div class="toolbar-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
  .toolbar-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
