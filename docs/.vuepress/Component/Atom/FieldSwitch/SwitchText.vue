<template>
  <el-card class="box-card">
    <el-switch
      v-model="value1"
      class="mb-2"
      active-text="Pay by month"
      inactive-text="Pay by year"
    />
    <br />
    <el-switch
      v-model="value2"
      class="mb-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      active-text="Pay by month"
      inactive-text="Pay by year"
    />
    <br />
    <el-switch
      v-model="value4"
      class="ml-2"
      inline-prompt
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      active-text="Y"
      inactive-text="N"
    />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
</script>
