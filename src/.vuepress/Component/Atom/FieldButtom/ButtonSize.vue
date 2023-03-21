<template>
  <el-card class="box-card">
    <p style="text-align: center;">
      <el-button size="large">Large</el-button>
      <el-button>Default</el-button>
      <el-button size="small">Small</el-button>
      <el-button size="large" :icon="Search">Search</el-button>
      <el-button :icon="Search">Search</el-button>
      <el-button size="small" :icon="Search">Search</el-button>
    </p>
  </el-card>
</template>
<script lang="ts" setup>
import {
  Search
} from '@element-plus/icons-vue';
</script>
