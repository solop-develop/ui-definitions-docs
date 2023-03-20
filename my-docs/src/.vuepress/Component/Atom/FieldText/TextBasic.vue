<template>
  <el-card class="box-card">
    <el-input v-model="input" placeholder="Please input" />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
