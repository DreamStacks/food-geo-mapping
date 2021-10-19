<template>
  <div class="ds-footer"><a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2020033963号</a></div>
</template>
<script>
export default {
  name: 'DsFooter',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.ds-footer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  color: #ddd;
}
</style>
