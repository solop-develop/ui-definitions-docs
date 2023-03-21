<template>
  <el-card class="box-card">
    <el-input-number v-model="num" :min="1" :max="10" :step="2" step-strictly @change="handleChange" />
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>