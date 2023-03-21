<template>
  <el-card class="box-card">
    <el-input
      v-model="input"
      type="password"
      placeholder="Please input password"
      show-password
    />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
