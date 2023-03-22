<template>
  <el-card class="box-card">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const world = ref('')
const visible = ref(false)
const handleClear = () => {
  input.value = ''
}
const handleClose = () => {
  visible.value = false
}

const handleDone  = () => {
  handleClose()
  world.value = input.value
}
</script>
