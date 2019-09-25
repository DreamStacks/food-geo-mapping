<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item timestamp="2019/9/24-至今" placement="top">
        <el-card class="ds-card">
          <h2>version 0.2.0 → 0.2.3</h2>
          <p>· puppetsheep 设计并制作about页面</p>
          <p>· Ihoey 优化代码及相关图片</p>
          <p>· puppetsheep 设计并制作团队介绍页</p>
          <p>· puppetsheep 重新设计界面，并调整相关代码</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2019/5/10-2019/9/23" placement="top">
        <el-card class="ds-card1">
          <h2>version 0.1.0 → 0.1.4</h2>
          <p>· puppetsheep 补充TDK，由Ihony加入</p>
          <p>· Ihoey 搭建项目框架</p>
          <p>· Plus Lin 设计logo并加入项目</p>
          <p>· DreamStacks成员参与并加入组织</p>
          <p>· puppetsheep 发起项目</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  name: 'DsAbout',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
p{
  color: rgb(221, 221, 221);
}
.block {
  text-align: left;
  margin: 60px auto;
}
.ds-card {
  border: 0;
  background-color: rgba(104, 123, 209, 0.4);
  color: rgb(255, 255, 255);
}
.ds-card1 {
  border: 0;
  background-color: rgba(204, 113, 77, 0.4);
  color: rgb(255, 255, 255);
}
</style>
