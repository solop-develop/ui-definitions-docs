<template>
  <el-card class="box-card">
    <div class="demo-image">
      <div v-for="fit in fits" :key="fit" class="block">
        <span class="demonstration">{{ fit }}</span>
        <!-- <el-image :src="url" :fit="fit" :lazy="true" loading="lazy" style="border: solid 1px var(--el-border-color);" /> -->
        <el-avatar
          :size="100"
          shape="shape"
          style="
            background: transparent;
            border: 1px solid var(--el-text-color-secondary);
          "
          :fit="fit"
          :src="url"
        />
        <br>
        <br>
        <el-divider />
        <br>
        <br>
        <el-avatar
          :size="100"
          shape="circle"
          style="
            background: transparent;
            border: 1px solid var(--el-text-color-secondary);
          "
          :fit="fit"
          :src="url"
        />
        <el-divider direction="vertical" />
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url = 'https://www.adempiere.io/logo.svg'
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