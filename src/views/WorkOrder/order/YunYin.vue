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
        <Table :tableData="tableData" :table="table"></Table>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Query from '@/components/Query.vue'
import Table from '@/components/table.vue'
// import Button from '@/components/'
import { getList } from '@/api/table'
export default {
  data() {
    return {
      index: 0,
      tableData: '',
      table: [
        { prop: 'taskCode', label: '工单编号' },
        { prop: 'innerCode', label: '设备编号' },
        { prop: 'taskType', label: '工单类型' },
        { prop: 'Type', label: '工单方式' },
        { prop: 'taskStatusTypeEntity', label: '工单状态' },
        { prop: 'userName', label: '运营人员' },
        { prop: 'createTime', label: '创建日期' }
      ]
    }
  },
  components: {
    Query,
    Table
  },

  created() {
    this.getList()
  },

  methods: {
    async getList() {
      try {
        const newArr = []
        const res = await getList()
        console.log(res)
        console.log(res.data.currentPageRecords)
        const ShowData = res.data.currentPageRecords
        ShowData.forEach((item) => {
          newArr.push({
            index: this.index++,
            taskCode: item.taskCode,
            innerCode: item.innerCode,
            taskType: item.taskType.typeName,
            Type: item.createType === 1 ? '手动' : '自动',
            taskStatusTypeEntity: item.taskStatusTypeEntity.statusName,
            userName: item.userName,
            createTime: item.createTime
          })
        })
        console.log('newArr', newArr)
        this.tableData = newArr
        console.log('this.tableData', this.tableData)
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
