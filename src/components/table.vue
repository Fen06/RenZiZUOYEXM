<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- :data="titleBody" -->
    <el-table-column type="index" label="序号" width="80" />
    <el-table-column
      v-for="(item, index) in table"
      :key="index"
      :label="item.label"
      :prop="item.prop"
      width="180"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    table: {
      type: Array
    },
    tableData: {
      type: Array
    }
  },
  data() {
    return {}
  }
}
</script>
