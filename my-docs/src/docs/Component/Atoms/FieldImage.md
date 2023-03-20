---
title: Image
# icon: creative
category:
  - Component
  - Atom
tag:
  - Image
  - Atom
  - Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>



Besides the native features of img, support lazy load, custom placeholder and load failure, etc.

### Basic Usage

Indicate how the image should be resized to `fit` its container by `fit`, same as native [object-fit.](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)


<ImageBasic />

#### Viwer Source

```vue
<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <FieldImage style="width: 100px; height: 100px" :src="url" :fit="fit" />
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

### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `src`  | image source, same as native.  | <el-tag effect="Light">  **{{ 'string' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |


### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `fit`    | indicate how the image should be resized to fit its container, same as [object-fit.](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) <el-tag effect="Light"> **{{ 'fit / contain / cover / none / scale-down' }}** </el-tag> | <el-tag effect="Light">  **{{ 'string' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'cover' }}** </el-tag> |


### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-image?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FielImage                     # Field Image specific components.
```

</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
