---
title: Tags
category:
  - Component
  - Atom
tag:
  - Tags
  - Atom
  - Component
# icon: creative
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>

Used for marking and selection.

### Basic Usage

Use the `type` attribute to define Tag's type. In addition, the `color` attribute can be used to set the background color of the Tag.


<TagsBasic />

#### Viwer Source

```vue
<template>
  <FielTags :value="'Tags 1'" />
  <FielTags :value="'Tags 2'" type="success" />
  <FielTags :value="'Tags 3'" type="info" />
  <FielTags :value="'Tags 4'" type="warning" />
  <FielTags :value="'Tags 5'" type="danger" />
</template>
```

### Sizes

Besides default `size`, Tag component provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `large`, `default` or `small`.


<TagsSizes />

#### Viwer Source

```vue
<template>
  <FielTags :value="'Default'" />
  <FielTags :value="'large'" size="large"/>
  <FielTags :value="'small'" size="small" />
</template>
```

### Theme

Tag provide three different themes: `dark`、`light` and `plain`

Using `effect` to change, default is `light`


<TagsTheme />

#### Viwer Source

```vue
<template>
  <FielTags
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    class="mx-1"
    effect="dark"
    :value="item.label"
  />
  <FielTags
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    class="mx-1"
    effect="light"
    :value="item.label"
  />
  <FielTags
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    class="mx-1"
    effect="plain"
    :value="item.label"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>

<style>
.el-tag {
  margin: 5px;
}
</style>
```

### Rounded

Tag can also be rounded like button.


<TagsRounded />

#### Viwer Source

```vue
<template>
  <div class="flex flex-wrap gap-2 my-2">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
      round
      :value="item.label"
    />
  </div>
  <div class="flex flex-wrap gap-2">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="light"
      round
      :value="item.label"
    />
  </div>
  <div class="flex flex-wrap gap-2 my-2">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="plain"
      round
      :value="item.label"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>

```



### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `value`  | Binding Value.  | <el-tag effect="Light">  **{{ 'String' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |


### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `type`    | component type | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ '—————' }}** </el-tag> |
  | `effect`    | component theme <el-tag effect="Light">  **{{ 'dark / light / plain' }}** </el-tag>  | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'light' }}** </el-tag> |
  | `round`    | hether Tag is rounded | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `size`    |  size of Switch <el-tag effect=Light> **large / default / small** </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'default' }}** </el-tag> |

### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-tags?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FielTags                      # Field Tags specific components.
```
</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
