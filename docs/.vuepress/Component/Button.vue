<template>
  <el-card class="box-card">
    <p style="text-align: center;">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </p>

    <p style="text-align: center;">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </p>

    <p style="text-align: center;">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </p>

    <p style="text-align: center;">
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </p>
  </el-card>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue';
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-button-code {
    padding-top: 0px;
    float: right;
  }
  .el-card-option {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 10px;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    text-align: center;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
<style>
  .el-card.is-always-shadow {
    background: transparent;
    color: transparent;
  }
  .el-row {
    margin-bottom: 20px;
  }
</style>
