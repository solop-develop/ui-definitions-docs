---
title: Text
category:
  - Component
  - Atom
tag:
  - Text
  - Atom
  - Component
# icon: creative
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>
Input data using mouse or keyboard..

### Basic
Basic usage

<TextBasic />

#### Viwer Source

```vue
  <template>
    <field-input v-model="input" placeholder="Please input" />
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'
  const input = ref('')
  </script>
```

### Disabled
Disable the Input with the `disabled` attribute.

<TextDisable />

#### Viwer Source

```vue
  <template>
    <field-input v-model="input" disabled placeholder="Please input" />
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'
  const input = ref('')
  </script>
```

### Clearable

Make the Input `clearable` with the `clearable` attribute.

<TextClearable />

#### Viwer Source

```vue
<template>
  <field-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

```

### Password box

Make a `toggle-able` password Input with the show-password attribute.

<TextPassword />

#### Viwer Source

```vue
<template>
  <field-input
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### Textarea

Resizable for entering multiple lines of text information. Add attribute `type="textarea"` to change `input` into native `textarea`.

Control the height by setting the `rows` prop.

<TextTextarea />

#### Viwer Source

```vue
<template>
  <field-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

### Autosize Textarea

Setting the `autosize` prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to `autosize` to specify the minimum and maximum number of lines the textarea can automatically adjust.


<TextTextarea />

#### Viwer Source

```vue
<template>
  <field-input
    v-model="textarea1"
    autosize
    type="textarea"
    placeholder="Please input"
  />
  <div style="margin: 20px 0" />
  <field-input
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea1 = ref('')
const textarea2 = ref('')
</script>
```

### Sizes

Add `size` attribute to change the size of Input. In addition to the default size, there are two other options: `large`, `small`.

<TextSizes />

#### Viwer Source
```vue
<template>
  <el-card class="box-card">
    <div class="demo-input-size">
      <field-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
      />
      <field-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
      <field-input
        v-model="input3"
        class="w-50 m-2"
        size="small"
        placeholder="Please Input"
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
```


### Limit length

`maxlength` and `minlength` attributes of input, they declare a limit on the number of characters a user can input. The "number of characters" is measured using JavaScript string length.Setting the `maxlength` prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting `show-word-limit` to `true` at the same time.

<TextLimitLength />

#### Viwer Source
```vue
<template>
  <el-card class="box-card">
    <div class="demo-input-size">
      <field-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
      />
      <div style="margin: 20px 0" >
      <field-input
        v-model="textarea"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('')
const textarea = ref('')
</script>
```

### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `type`  | type of input  | <el-tag effect="Light">  **{{ 'String' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `text`    |  binding value  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag> / <el-tag effect="Light">  **{{ 'Number' }}** </el-tag> </el-tag> | — |
  | `maxlength`    |  the max length  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag> / <el-tag effect="Light">  **{{ 'Number' }}** </el-tag> </el-tag> | — |
  | `minlength`    |  same as `minlength` in native input  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Number' }}** </el-tag> </el-tag> | — |
  | `show-word-limit`    |  whether show word count, only works when type is 'text' or 'textarea'  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> </el-tag> |  <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `placeholder`    |  placeholder of Input  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | — |
  | `clearable`    |  whether to show clear button, only works when `type` is not 'textare  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> |  <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `show-password`    |  whether to show toggleable password input  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `disabled`    |  whether Input is disabled  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `size`    |  size of Input, works when `type` is not `textarea` <el-tag effect="Light">  **{{ 'large' }}** <el-divider direction="vertical" /> **{{ 'default' }}**  <el-divider direction="vertical" /> **{{ 'small' }}**  </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | — |
  | `rows`    |  number of rows of `textarea`, only works when `type` is `textarea`  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Number' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '2' }}** </el-tag> |
  | `autosize`    |  whether textarea has an adaptive height, only works when `type` is `textarea`. Can accept an object, e.g.` { minRows: 2, maxRows: 6 } ` | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean / Object' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |

### Slots

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `content` | Customize Default Content |
| `footer` | Customize Default Content Bottom |


### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/field-text?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldText                     # Field Text specific components.
```



</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
