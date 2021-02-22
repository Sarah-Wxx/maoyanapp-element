<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon1" v-if="isActive === path">
      <slot name="item-icon1"></slot>
    </div>
    <div class="item-icon2" v-else>
      <slot name="item-icon2"></slot>
    </div>
    <div class="item-tital" :class="{'active': isActive === path}">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive () {
      return this.$route.path
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
#tab-bar-item {
  text-align: center;
  flex: 1;
  font-size: 0.2rem;
}
#tab-bar-item img {
  width: 0.7rem;
}
.active {
  color: red;
}
</style>
