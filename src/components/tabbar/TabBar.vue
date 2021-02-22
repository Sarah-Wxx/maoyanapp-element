<template>
  <div id="tab-bar">
    <slot name="tab-item"></slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar'
}
</script>

<style scoped>
#tab-bar{
  width: 100%;
  height: 46px;
  padding-top: 3px;
  background: gainsboro;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
}
</style>
