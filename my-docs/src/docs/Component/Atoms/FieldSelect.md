---
title: Select
# icon: creative
category:
  - Component
  - Atom
tag:
  - Select
  - Atom
  - Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>

When there are plenty of options, use a drop-down menu to display and select desired ones.

:::tip
  This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).
:::

### Basic usage

`v-model` is the `value` of `el-option` that is currently selected.


<SelectBase />

#### Viwer Source

```vue
<template>
  <FieldSelect :value="value" :optionList="options" size="small" />
  <FieldSelect :value="value" :optionList="options" />
  <FieldSelect :value="value" :optionList="options" size="small" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
    disabled: false,
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: false,
  },
  {
    value: 'Option3',
    label: 'Option3',
    disabled: false,
  },
  {
    value: 'Option4',
    label: 'Option4',
    disabled: false,
  },
  {
    value: 'Option5',
    label: 'Option5',
    disabled: false,
  },
]
</script>

```

### Disabled Option

Set the value of `disabled` in `el-option` to `true` to `disable` this option.

<SelectDisableOption />

#### Viwer Source

```vue
<template>
  <FieldSelect :value="value" :optionList="options" size="small" />
  <FieldSelect :value="value" :optionList="options" />
  <FieldSelect :value="value" :optionList="options" size="small" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
    disabled: false,
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: false,
  },
  {
    value: 'Option3',
    label: 'Option3',
    disabled: false,
  },
  {
    value: 'Option4',
    label: 'Option4',
    disabled: false,
  },
  {
    value: 'Option5',
    label: 'Option5',
    disabled: false,
  },
]
</script>

```

### Disabled Select


Disable the whole component.

Set `disabled` of `el-select` to make it `disabled`.

<SelectDisable />

#### Viwer Source

```vue
<template>
  <FieldSelect :value="value" :optionList="options" :disabled="true" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
    disabled: false,
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
    disabled: false,
  },
  {
    value: 'Option4',
    label: 'Option4',
    disabled: false,
  },
  {
    value: 'Option5',
    label: 'Option5',
    disabled: false,
  },
]
</script>

```


### Clearable Single Select

You can clear Select using a clear icon.

Set `clearable` attribute for `el-select` and a clear icon will appear. Note that `clearable` is only for single select.



<SelectClearable />

#### Viwer Source

```vue
<template>
  <FieldSelect :value="value" :optionList="options" :clearable="true" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
    disabled: false,
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
    disabled: false,
  },
  {
    value: 'Option4',
    label: 'Option4',
    disabled: false,
  },
  {
    value: 'Option5',
    label: 'Option5',
    disabled: false,
  },
]
</script>

```

### Basic Multiple Select

Multiple select uses tags to display selected options.

Set `multiple` attribute for `el-select` to enable multiple mode. In this case, the value of `v-model` will be an array of selected options. By default the selected options will be displayed as Tags. You can collapse them to a text by using `collapse-tags` attribute. You can check them when mouse hover collapse text by using `collapse-tags-tooltip` attribute.


<SelectMultipleSelect />

#### Viwer Source

```vue
<template>
  <p>default</p>
  <FieldSelect :value="value1" :optionList="options" :multiple="true" />
  <p>use collapse-tags</p>
  <FieldSelect :value="value2" :optionList="options" :multiple="true" :collapseTags="true" />
  <p>default</p>
  <FieldSelect :value="value3" :optionList="options" :multiple="true" :collapseTags="true" :collapseTagsTooltip="true" />
  <p>default</p>
  <FieldSelect :value="value4" :optionList="options" :multiple="true" :collapseTags="true" :collapseTagsTooltip="true" :multipleLimit="3" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([])

const options = [
  {
    value: 'Option1',
    label: 'Option1',
    disabled: false,
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
    disabled: false,
  },
  {
    value: 'Option4',
    label: 'Option4',
    disabled: false,
  },
  {
    value: 'Option5',
    label: 'Option5',
    disabled: false,
  },
]
</script>

```

### Option filtering

You can filter options for your desired ones.

Adding `filterable` to `el-select` enables filtering. By default, Select will find all the options whose `label` attribute contains the input value. If you prefer other filtering strategies, you can pass the `filter-method`. `filter-method` is a `Function` that gets called when the input value changes, and its parameter is the current input value.


<SelectFilter />

#### Viwer Source

```vue
<template>
  <FieldSelect :value="value" :optionList="options" :filterable="true" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
    disabled: false,
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
    disabled: false,
  },
  {
    value: 'Option4',
    label: 'Option4',
    disabled: false,
  },
  {
    value: 'Option5',
    label: 'Option5',
    disabled: false,
  },
]
</script>
```


### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `value`  | binding value  | <el-tag effect="Light">  **{{ 'String' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |
  | `optionList`| List of Options that must be displayed in the Select. Within the array of options, the attributes to be received and required are:  <el-tag effect="Light"> **{{ ' { label: title, value: value, disabled: false\true } ' }}** </el-tag> | <el-tag effect="Light">  **{{ 'array' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `multiple`    |  whether `multiple-select` is activated  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `collapseTags`    |  whether to collapse tags to a text when multiple selecting  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `collapseTagsTooltip`    |  whether show all selected tags when mouse hover text of `collapse-tags`. To use this, `collapse-tags` must be true  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `multipleLimit`    |  maximum number of options user can select when `multiple` is true. No `limit` when set to `0`  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'number' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '0' }}** </el-tag> |
  | `disabled`    |  whether Switch is `disabled`  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `clearable`    |  whether select can be cleared  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `size`    |  size of Switch <el-tag effect=Light> **large / default / small** </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'default' }}** </el-tag> |
  | `placeholder`    |  placeholder the Select  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'Select' }}** </el-tag> |
  | `filterable`    |  whether Select is filterable  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `allowCreate`   |  whether creating new items is allowed. To use this, `filterable` must be `true` | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `noDataText`    | displayed text when there is no options, you can also use slot `empty`|  <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'No data' }}** </el-tag> |

### Slots

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `footer` | Customize Default Content Bottom |


### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-select?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldSelect                   # Field Select specific components.
```

</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
