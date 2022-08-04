<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="工单编号:">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="工单状态:">
      <el-select v-model="formInline.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="onSubmit"
        icon="el-icon-search"
        class="findBtn"
        >搜索</el-button
      >
      <!-- <el-button type="primary" >查询</el-button> -->
    </el-form-item>
  </el-form>

  <!-- <el-form ref="form" :model="form" label-width="80px" class="NumberInquiry">
    <el-form-item class="num">
      <span>工单编号：</span>
      <el-input
        v-model="input"
        class="NumInput"
        placeholder="请输入内容"
      ></el-input>
    </el-form-item>

    <el-form-item class="state">
      <p>工单状态：</p>
      <el-input
        v-model="input2"
        class="StateInput"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" class="findBtn"
        >搜索</el-button
      >
    </el-form-item>
  </el-form> -->
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

  created() {},

  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
/* .NumberInquiry {
  display: flex;

}
.num {
  display: flex;
  justify-content: center;

}
.num span {
  font-size: 15px;
}
.state {
  display: flex;
  justify-content: center;
  align-items: center;
}

.state p {
  width: 140px;
  font-size: 15px;
}

.state .StateInput {
  margin-right: 15px;
} */
.demo-form-inline {
  margin-bottom: -20px;
}
.demo-form-inline .el-form-item__label {
  font-weight: 100;
}
</style>
