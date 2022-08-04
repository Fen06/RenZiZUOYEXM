<template>
  <div class="Statenquiry">
    <p>工单编号：</p>
    <el-input
      v-model="input"
      class="NumInput"
      placeholder="请输入内容"
    ></el-input>
    <el-button type="primary" icon="el-icon-search" class="findBtn"
      >搜索</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },

  created() {},

  methods: {}
}
</script>

<style scoped>
.Statenquiry {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Statenquiry .NumInput {
  width: 300px;
}
.Statenquiry p {
  font-size: 15px;
}
.findBtn {
  margin-left: 10px;
  background-color: #5f84ff;
}
</style>
