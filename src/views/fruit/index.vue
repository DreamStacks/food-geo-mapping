<template>
  <div ds-search>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="搜索" />
      </el-form-item>
      <el-form-item>
        <el-select v-model="formInline.region" placeholder="类别" class="ds-select">
          <el-option label="水果" value="fruit" />
          <el-option label="小吃" value="snack" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.ds-select{
  width: 81px;
}
.ds-search {
  display: flex;
}
</style>
