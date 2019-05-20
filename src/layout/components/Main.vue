<template>
  <section class="ds-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'DsMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
<style lang="scss" scoped>
.ds-main {
  height: 1000px;
}
</style>
