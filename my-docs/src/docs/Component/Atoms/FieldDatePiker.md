---
title: Date Picker
# icon: creative
category:
  - Component
  - Atom
tag:
  - Date
  - Atom
  - Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>
Use `format` to control displayed text's `format` in the input box. Use `value-format` to control binding value's format.

By default, the component accepts and emits a `Date` object.

Check the list here of all available formats of Day.js.

:::warning
  Pay attention to capitalization
:::

<DateFormats />

#### Viwer Source

```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Emits Date object</span>
      <div class="demonstration">Value: {{ value1 }}</div>
      <field-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
      />
    </div>
    <div class="block">
      <span class="demonstration">Use value-format</span>
      <div class="demonstration">Value：{{ value2 }}</div>
      <field-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      />
    </div>
    <div class="block">
      <span class="demonstration">Timestamp</span>
      <div class="demonstration">Value：{{ value3 }}</div>
      <field-date-picker
        v-model="value3"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="x"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
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
  |    `type`  | type of the picker  | <el-tag effect="Light">  **{{ 'string' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `value`    |  binding value, if it is an array, the length should be 2 | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Date / number / string / Array' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '——————' }}** </el-tag> |
  | `format`    |  format of the displayed value in the input box  | <el-tag effect="Light"> <el-tag effect="Light">  ****{{ 'string' }}**** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'YYYY-MM-DD' }}** </el-tag> |
  | `shortcuts` |  an object array to set shortcut options  | <el-tag effect="Light"> {{ 'Array' }} </el-tag> | <el-tag effect="dark" round> **{{ '——————' }}** </el-tag> |
  | `placeholder`    |  placeholder in non-range mode  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'string' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '——————' }}** </el-tag> |
  | `startPlaceholder`    |  placeholder in non-range mode  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'string' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '——————' }}** </el-tag> |
  | `endPlaceholder`    |  placeholder in non-range mode  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'string' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '——————' }}** </el-tag> |
  | `disabled`    |  whether Switch is `disabled`  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `clearable`    |  whether to show clear button  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `size`    |  size of Switch <el-tag effect=Light> **{{ 'large / default / small' }}**</el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  ****{{ 'string' }}**** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'default' }}** </el-tag> |

### Slots

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `footer` | Customize Default Content Bottom |


### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-date-picker?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldDatePicker               # Field DatePicker specific components.
```




</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
