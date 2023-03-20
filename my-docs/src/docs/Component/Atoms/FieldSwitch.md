---
title: Switch
category:
  - Component
  - Atom
tag:
  - Switch
  - Atom
  - Component
# icon: creative
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>

Switch is used for switching between two opposing states.

### Basic usage

Bind `v-model` to a `Boolean` typed variable. The `--el-switch-on-color` and `--el-switch-off-color` CSS variables decides the background color in two states.

<SwitchBasic />

#### Viwer Source

```vue
<template>
  <field-switch v-model="value1" />
  <field-switch
    v-model="value2"
    class="ml-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>

```

### Sizes

<SwitchSizes />

#### Viwer Source

```vue
<template>
  <field-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <field-switch v-model="value" active-text="Open" inactive-text="Close" />
  <br />
  <field-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>
```
### Text description

You can add `active-text` and `inactive-text` attribute to show texts. use `inline-prompt` attribute to control text is displayed inside dot.

You can add `active-text` and `inactive-text` attribute to show texts.

<SwitchText />

#### Viwer Source

```vue
<template>
  <field-switch
    v-model="value1"
    class="mb-2"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <field-switch
    v-model="value3"
    class="mb-2"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <field-switch
    v-model="value4"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="Y"
    inactive-text="N"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
</script>

```


### Display custom icons

:::tip
Use the `active-icon` and `inactive-icon` attribute to add icon. You can pass either string for the component name (registered in advance) or the component itself which is a SVG Vue component. Element Plus has provided a set of icon that you can find at [icon](https://element-plus.org/en-US/component/icon.html)
:::

<SwitchIcon />

#### Viwer Source

```vue
<template>
  <el-switch v-model="value1" :active-icon="Check" :inactive-icon="Close" />
  <br />
  <field-switch
    v-model="value2"
    class="mt-2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="Check"
    :inactive-icon="Close"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
const value1 = ref(true)
const value2 = ref(true)
</script>
```
### Disabled

Adding the `disabled` attribute disables Switch.

<SwitchDisabled />

#### Viwer Source

```vue
<template>
  <field-switch v-model="value1" disabled />
  <br />
  <field-switch v-model="value1" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
const value1 = ref(true)
const value2 = ref(true)
</script>
```

### Loading

Setting the `loading` attribute to `true` indicates a `loading` state on the Switch.

<SwitchLoading />

#### Viwer Source

```vue
<template>
  <field-switch v-model="value1" loading />
  <field-switch v-model="value2" loading class="ml-2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>

```

### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `value`  | binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type  | <el-tag effect="Light">  **{{ 'boolean / string / number' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `active-text`    |  text displayed when in `on` state  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '——————' }}** </el-tag> |
  | `inactive-text`    |  text displayed when in `off` state  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '——————' }}** </el-tag> |
  | `inline-prompt`    |  whether icon or text is displayed inside dot, only the first character will be rendered for text  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `disabled`    |  whether Switch is `disabled`  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `loading`    |  whether Switch is in `loading` state  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `size`    |  size of Switch <el-tag effect=Light> **large / default / small** </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'String' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'Default' }}** </el-tag> |

<!-- ### Slots

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `content` | Customize Default Content |
| `footer` | Customize Default Content Bottom |
 -->


</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
