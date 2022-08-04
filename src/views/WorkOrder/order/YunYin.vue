<template>
  <div class="main">
    <!-- 顶部区域 -->
    <el-card class="box-card">
      <el-row>
        <el-col :span="20">
          <Query></Query>
        </el-col>

        <el-col :offset="4"></el-col>
      </el-row>
    </el-card>

    <el-card class="formMian">
      <el-row class="BtnEare">
        <fj-button class="new" color="orange" fonstClolr="white"
          ><i class="el-icon-circle-plus-outline"></i>新增</fj-button
        >
        <fj-button>工单配置</fj-button>
      </el-row>

      <el-row>
        <Table></Table>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Query from '@/components/Query.vue'
import Status from '@/components/Status'
import Table from '@/components/table.vue'
// import Button from '@/components/'
import { getList } from '@/api/table'
export default {
  data() {
    return {
      input: ''
    }
  },
  components: {
    Query,
    Status,
    Table
  },

  created() {
    this.getList()
  },

  methods: {
    async getList() {
      try {
        const res = await getList()
        console.log(res)
      } catch (e) {
        console.log('gd', e)
      }
    }
  }
}
</script>

<style scoped>
.main {
  margin: 35px;
}

.formMian {
  margin-top: 15px;
}
.BtnEare {
  display: flex;
}

.new {
  margin-right: 10px;
}
.el-icon-circle-plus-outline {
  margin-right: 5px;
}
</style>
