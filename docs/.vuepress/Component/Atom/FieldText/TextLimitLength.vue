<template>
  <el-card class="box-card">
    <el-input
      v-model="text"
      maxlength="10"
      placeholder="Please input"
      show-word-limit
      type="text"
    />
    <div style="margin: 20px 0" />
    <el-input
      v-model="textarea"
      maxlength="30"
      placeholder="Please input"
      show-word-limit
      type="textarea"
    />
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('')
const textarea = ref('')
</script>
