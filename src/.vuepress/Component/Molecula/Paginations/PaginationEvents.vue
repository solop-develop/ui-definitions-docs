<template>
  <el-card class="box-card">
    <el-pagination background layout="prev, pager, next" :total="1000" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </el-card>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const handleSizeChange = (val: number) => {
  ElMessage(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  ElMessage(`current page: ${val}`)
}
</script>
