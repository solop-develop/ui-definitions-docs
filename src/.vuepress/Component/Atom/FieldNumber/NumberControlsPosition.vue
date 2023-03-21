<template>
  <el-card class="box-card">
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      controls-position="right"
      size="large"
      @change="handleChange"
    />
    <el-divider direction="vertical" />
    <el-input-number
      v-model="num"
      class="mx-4"
      :min="1"
      :max="10"
      controls-position="right"
      @change="handleChange"
    />
    <el-divider direction="vertical" />
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      size="small"
      controls-position="right"
      @change="handleChange"
    />
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>

<style>
.el-input-number .el-input__inner {
  line-height: 1;
  text-align: right;
}
</style>