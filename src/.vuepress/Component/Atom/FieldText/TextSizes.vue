<template>
  <el-card class="box-card">
    <div class="demo-input-size">
      <el-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
      />
      <div style="margin: 20px 0" />
      <el-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
      <div style="margin: 20px 0" />
      <el-input
        v-model="input3"
        class="w-50 m-2"
        size="small"
        placeholder="Please Input"
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
