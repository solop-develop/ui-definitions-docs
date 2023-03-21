<template>
  <el-card class="box-card">
    <el-input-number v-model="num" :max="10" :precision="2" :step="0.1" @change="handleChange" />
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>