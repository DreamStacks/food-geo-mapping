<template>
  <div class="ds-team">
    <el-card
      v-for="(item, index) in teamList"
      :key="item.name"
      :class="['ds-team-card', index%2 ? 'ds-team-right' : 'ds-team-left']">
      <img :src="item.avatar" alt="头像" class="ds-team-avatar">
      <div class="ds-team-des">
        <tr>{{ item.name }}</tr>
        <tr>{{ item.github }}</tr>
        <tr>{{ item.des }}</tr>
        <tr>{{ item.website }}</tr>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      teamList: [
        {
          avatar: 'https://api.puppetsheep.cn/img/github.jpg',
          name: 'puppetsheep',
          github: 'https://github.com/puppetsheep',
          des: '项目发起人，UI设计，部分技术开发支持，文案',
          website: 'https://puppetsheep.github.io'
        },
        {
          avatar: 'https://avatars3.githubusercontent.com/u/14155573?s=460&v=4',
          name: 'Ihoey',
          github: 'https://github.com/ihoey',
          des: '项目负责人、技术支持、架构、项目指导',
          website: 'https://blog.ihoey.com/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ds-team {
  // display: flex;
  &-avatar {
    width: 96px;
    height: 96px;
    margin: 0px 18px 18px 0px;
  }
  &-card {
    margin: 3% 0;
    width: 75%;
  }
  &-des {
    color: white;
  }
  &-left {
    .ds-team {
      &-avatar,
      &-des {
        float: left;
      }
      &-des {
        margin: 0 60px;
        line-height: 24px;
      }
    }
    &.ds-team-card {
      text-align: left;
      background-color: rgba(84, 207, 238, 0.3);
    }
  }
  &-right {
    .ds-team {
      &-avatar,
      &-des {
        float: right;
      }
      &-des {
        margin-right: 30px;
        text-align: right;
        line-height: 24px;
      }
    }
    &.ds-team-card {
      text-align: right;
      background-color: rgba(238, 94, 84, 0.3);
    }
  }
}
</style>
