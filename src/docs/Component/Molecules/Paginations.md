---
title: Paginations
category:
- Component
- Molecule
tag:
- Paginations
- Molecule
- Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>

If you have too much data to display in one page, use pagination.

## **Basic usage**
Set `layout` with different pagination elements you wish to display separated with a comma. Pagination elements are: `prev` (a button navigating to the previous page), `next` (a button navigating to the next page), `pager` (page list), jumper (a jump-to input), `total` (total item count), `size` (a select to determine page size) and `->`(every element after this symbol will be pulled to the right).

<PaginationBasic />

### **Viwer Source**

:::: details Code

````md

```vue
<template>
  <molecula-Paginations
    :small="true"
    :background="true"
    :totalPage="50"
    :layout="'prev, pager, next'"
  />
</template>
```

:::
````

::::

## **Buttons with background color**

Set the `background` attribute and the buttons will have a background color.

<PaginationBackground />

### **Viwer Source**

:::: details Code

````md

```vue
<template>
  <molecula-Paginations
    :background="background"
  />
</template>
```

:::
````

::::

## **Hide pagination when there is only one page**

When there is only one page, hide the pagination by setting the `hide-on-single`-page attribute.

<PaginationHide />

### **Viwer Source**

:::: details Code

````md

```vue
<template>
  <el-switch v-model="value" />
  <hr class="my-4" />
  <molecula-Paginations
    :hide="value"
    :background="false"
    :totalPage="50"
    :layout="'prev, pager, next'"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>
```

:::
````

::::

## **Events pagination**


<PaginationEvents />

### **Viwer Source**

:::: details Code

````md

```vue
<template>
  <el-switch v-model="value" />
  <hr class="my-4" />
  <molecula-Paginations
    :hide="value"
    :background="false"
    :totalPage="50"
    :layout="'prev, pager, next'"
    :handleCurrentChange="change"
  />
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const change = (val: number) => {
  ElMessage(`current page: ${val}`)
}
</script>
```

:::
````

::::


## **Props**

|   Name    | Description | Type  | Mandatory |
| :---------: | :-----------: | :-----------------: | :-----------: |
|    `layout`  | layout of Pagination, elements separated with a comma. <el-tag effect="Light">  **{{ 'string (consists of sizes, prev, pager, next, jumper, ->, total, slot)' }}** </el-tag>  | <el-tag effect="Light">  **{{ 'String' }}** </el-tag>      <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |


## **Attributes**

|   Name    | Description | Type   | Default |
| :---------: | :-----------: | :-----------------: | :-----------: |
|  `small` | whether to use small pagination | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
|  `hide` | whether to hide when there's only one page | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
|  `disabled` | whether Pagination is disabled | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
|  `background` | whether the buttons have a background color | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |
|  `totalPage` | total item count | <el-tag effect="Light">  **{{ 'Number' }}** </el-tag> | <el-tag effect="dark" round > **{{ '50' }}** </el-tag> |
|  `currentPage` | default initial value of current-page | <el-tag effect="Light">  **{{ 'Number' }}** </el-tag> | <el-tag effect="dark" round > **{{ '1' }}** </el-tag> |
|  `pageSize` | Page Size | <el-tag effect="Light">  **{{ 'Number' }}** </el-tag> | <el-tag effect="dark" round > **{{ '10' }}** </el-tag> |

## **Events**

|   Name    | Description | Type  |
| :---------: | :-----------: | :-----------------: |
|    `handleSizeChange`  | triggers when `page-size` changes.   | <el-tag effect="Light">  **{{ 'Function (value: number) => void' }}** </el-tag>  |
|    `handleCurrentPage`  | triggers when `current-page` changes.   | <el-tag effect="Light">  **{{ 'Function (value: number) => void' }}** </el-tag>  |


## **Example for Developer**


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/molecule-paginations?file=app.vue)


## **Directory**


```bash
└─ src                                            # Main source code.
    └── Components                                # Global components
            └── Atoms                             # Atom components
            └── Moleculas                         # Moleculas components
                └── Paginations                   # Molecule Paginations specific components.
```

</span>

<style>
:root {
--content-width: 1300px !important;
}
</style>
