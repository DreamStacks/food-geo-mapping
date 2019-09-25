<template>
  <div class="ds-team">
    <el-card
      v-for=" item in teamList"
      :key="item.name"
      class="ds-team-card ds-team-left"
      :style="{ backgroundColor: item.bgcolor }">
      <img :src="item.avatar" alt="头像" class="ds-team-avatar">
      <div class="ds-team-des">
        <tr>{{ item.name }}</tr>
        <tr>
          <a
            :href="item.github"
            class="ds-team-link"
            target="_block" />
        </tr>
        <tr>{{ item.des }}</tr>
        <tr>
          <a
            :href="item.website"
            class="ds-team-link"
            target="_block" />
        </tr>
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
.ds-team {
  display: flex;
  flex-direction: column;
  &-avatar {
    width: 96px;
    height: 96px;
    margin-right: 20px;
  }
  &-card {
    border: 0;
    margin: 3% 0;
    width: 80%;
    text-align: left;
    align-self: flex-start;
    &:nth-child(even) {
      text-align: right;
      align-self: flex-end;
      /deep/ .el-card {
        &__body {
          display: flex;
          flex-direction: row-reverse;
          .ds-team-avatar {
            width: 96px;
            height: 96px;
            margin-left: 20px;
            margin-right: 0px;
          }
        }
      }
    }
  }

  &-des {
    color: white;
    line-height: 24px;
  }
  &-link {
    &::before {
      content: attr(href);
    }
  }
}
/deep/ .el-card {
  &__body {
    flex-direction: row;
    display: flex;
  }
}
</style>
