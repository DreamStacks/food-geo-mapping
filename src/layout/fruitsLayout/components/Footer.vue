<template>
  <div class="ds-footer">
    <p>
      Copyright ©
      <a :href="DreamStacksLink" target="_block">DreamStacks</a> 2019
      <a href="https://github.com/" target="_block">Github</a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'DsFooter',
  data() {
    return {
      DreamStacksLink: 'https://github.com/DreamStacks'
    }
  }
}
</script>
<style lang="scss" scoped>
.ds-footer {
  background: #ffffff;
  position: sticky;
  bottom: 0px;
}
</style>
