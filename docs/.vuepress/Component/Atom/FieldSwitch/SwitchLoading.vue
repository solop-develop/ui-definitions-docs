<template>
  <el-card class="box-card">
    <el-switch v-model="value1" loading />
    <el-switch v-model="value2" loading class="ml-2" />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
