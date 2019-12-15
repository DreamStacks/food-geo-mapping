<template>
  <div>
    <ds-header />
    <ds-main />
    <ds-footer />
  </div>
</template>
<script>
import DsHeader from './components/Header'
import DsMain from './components/Main'
import DsFooter from './components/Footer'

export default {
  name: 'DsLayout',
  components: {
    DsHeader,
    DsMain,
    DsFooter
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>

</style>
