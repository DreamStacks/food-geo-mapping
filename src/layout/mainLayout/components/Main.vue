<template>
  <section class="ds-main container">
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
</style>
