<template>
  <div>
    <el-card class="box-card">
      <img src="https://api.puppetsheep.cn/img/github.jpg" alt="头像" class="avatar">
      <div class="fgm-team-des">
        <tr>puppetsheep</tr>
        <tr>https://github.com/puppetsheep</tr>
        <tr>项目发起人，UI设计，部分技术开发支持，文案</tr>
        <tr>https://puppetsheep.github.io</tr>
      </div>
    </el-card>
    <el-card class="box-card1">
      <img src="https://avatars3.githubusercontent.com/u/14155573?s=460&v=4" alt="头像" class="avatar1">
      <div class="fgm-team-des1">
        <tr>Ihoey</tr>
        <tr>https://github.com/ihoey</tr>
        <tr>项目负责人、技术支持、架构、项目指导</tr>
        <tr>https://blog.ihoey.com/</tr>
      </div>
    </el-card>
  </div>
</template>

<style>
.avatar1{
  float: right;
  width: 96px;
  height: 96px;
  margin: 0px 18px 18px 0px;
}
.avatar {
  float: left;
  width: 96px;
  height: 96px;
  margin: 0px 18px 18px 0px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin: 3% 0;
  text-align: left;
  width: 75%;
  background-color: rgba(84, 207, 238, 0.3);
}
.box-card1 {
  margin: 3%;
  float: right;
  margin-right: 0;
  text-align: right;
  width: 75%;
  background-color: rgba(238, 94, 84, 0.3);
}
.fgm-team-des {
  color: white;
  margin: 0 60px;
  line-height: 24px;
}
.fgm-team-des1 {
  color: white;
  float: right;
  margin-right: 30px;
  text-align: right;
  line-height: 24px;
}

</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
