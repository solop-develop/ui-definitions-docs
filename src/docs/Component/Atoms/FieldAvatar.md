---
title: Avatar
# icon: creative
category:
  - Component
  - Atom
tag:
  - Avatar
  - Atom
  - Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>
Besides the native features of img, support lazy load, custom placeholder and load failure, etc.

## **Basic Usage**
Indicate how the image should be resized to `fit` its container by `fit`, same as native [object-fit.](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

<AvatarBasic />

### **Viwer Source**

:::: details Code

````md

```vue

<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <FieldImage shape="shape" :size="100" :src="url" :fit="fit" />
      <br>
      <el-divider />
      <br>
      <FieldImage shape="circle" :size="100" :src="url" :fit="fit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
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
```

:::
````

::::

## Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `src`  | the source of the image for an image avatar.  | <el-tag effect="Light">  **{{ 'string' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |


## Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `fit`    | set how the image fit its container for an image avatar <el-tag effect="Light"> **{{ 'fit / contain / cover / none / scale-down' }}** </el-tag> | <el-tag effect="Light">  **{{ 'string' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'cover' }}** </el-tag> |
  | `size`    | avatar size <el-tag effect="Light">  **{{ 'large' }}** <el-divider direction="vertical" /> **{{ 'default' }}**  <el-divider direction="vertical" /> **{{ 'small' }}**  </el-tag> | <el-tag effect="Light" round > **{{ 'String' }}** <el-divider direction="vertical" /> **{{ 'Number' }}** </el-tag>  | <el-tag effect="dark" round > {{ 'default' }} </el-tag> |
  | `shape`    | avatar shape <el-tag effect="Light"> **{{ ' circle / shape' }}** </el-tag> | <el-tag effect="Light">  **{{ 'string' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'cover' }}** </el-tag> |


## Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-avatar?file=app.vue)


## Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FielAvatar                    # Field Avatar specific components.
```





</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
