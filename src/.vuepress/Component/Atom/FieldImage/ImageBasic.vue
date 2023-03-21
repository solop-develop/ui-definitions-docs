<template>
  <el-card class="box-card">
    <div class="demo-image">
      <div v-for="fit in fits" :key="fit" class="block">
        <span class="demonstration">{{ fit }}</span>
        <el-image :src="url" :fit="fit" :lazy="true" loading="lazy" style="border: solid 1px var(--el-border-color);" />
        <el-divider direction="vertical" />
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Adempiere-logo.png'
</script>

<style scoped>
.demo-image .block {
  padding: 30px;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
  background: rgb(234, 234, 241);
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>