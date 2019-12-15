<template>
  <div class="ds-header container">
    <router-link to="/home" class="ds-logo">
      <img src="~static/logo.png" alt="吃货指南" class="ds-logo-img">
    </router-link>
    <ul class="ds-navs">
      <template v-for="nav in navs">
        <router-link :key="nav.path" :to="nav.path" tag="li" class="ds-nav">{{ nav.name }}</router-link>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DsHeader',
  data() {
    return {
      navs: [
        {
          path: '/home',
          name: '回到介绍页'
        },
        {
          path: '/food',
          name: '转到小吃指南'
        },
        {
          path: '/wiki',
          name: 'Wiki'
        },
        {
          path: '/seach',
          name: '分类搜索'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.ds-header {
  position: sticky;
  top: 0px;
  $height: 60px;
  height: $height;
  display: flex;
  justify-content: space-between;
  z-index: 9;
  .ds-logo {
    padding: 5px;
    .ds-logo-img {
      width: $height - 10px;
    }
  }
  .ds-navs {
    margin: 0;
    padding: 0;
    height: 100%;
    width: fit-content;
    display: flex;
    .ds-nav {
      padding: 0 15px;
      color: #fff;
      list-style: none;
      line-height: $height;
      cursor: pointer;
    }
  }
}
</style>
