<template>
  <div class="ds-team">
    <el-card
      v-for=" item in teamList"
      :key="item.name"
      class="ds-team-card ds-team-left">
      <img :src="item.avatar" alt="头像" class="ds-team-avatar">
      <div class="ds-team-des">
        <tr>{{ item.name }}</tr>
        <tr><a :href="item.github" target="_block">{{ item.github }}</a> </tr>
        <tr>{{ item.des }}</tr>
        <tr><a :href="item.website" target="_block">{{ item.website }}</a> </tr>
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
          website: 'https://puppetsheep.github.io',
          bgcolor: 'rgba(84, 207, 238, 0.3)'
        },
        {
          avatar: 'https://avatars3.githubusercontent.com/u/14155573?s=460&v=4',
          name: 'Ihoey',
          github: 'https://github.com/ihoey',
          des: '项目负责人、技术支持、架构、项目指导',
          website: 'https://blog.ihoey.com',
          bgcolor: 'rgba(238, 94, 84, 0.3)'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$ds-color1 : rgba(84, 207, 238, 0.3);
$ds-color2 : rgba(238, 94, 84, 0.3);
.ds-team {
  // display: flex;
  &-avatar {
    width: 96px;
    height: 96px;
    margin: 0px 18px 18px 0px;
  }
  &-card {
    border: 0;
    margin: 3% 0;
    width: 100%;
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
        line-height: 24px;
      }
    }
    &.ds-team-card {
      text-align: left;
      background-color: $ds-color1;
    }
  }
  // &-right {
  //   .ds-team {
  //     &-avatar,
  //     &-des {
  //       float: right;
  //     }
  //     &-des {
  //       margin-right: 30px;
  //       text-align: right;
  //       line-height: 24px;
  //     }
  //   }
  //   &.ds-team-card {
  //     text-align: right;
  //     background-color: $ds-color2;
  //   }
  // }
}
</style>
