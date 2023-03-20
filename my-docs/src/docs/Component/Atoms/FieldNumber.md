---
title: Number
# icon: creative
category:
  - Component
  - Atom
tag:
  - Number
  - Atom
  - Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>


Input numerical values with a customizable range.

### Basic usage

Bind a variable to `v-model` in `<el-input-number>` element and you are set.

:::tip
  When inputting invalid string to the input box, input value will emit `NaN` to the upper layer as result of error
:::

<NumberBsic />

#### Viwer Source

```vue
<template>
  <FieldNumber :num="num" :min="1" :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>

```

### Disabled

The `disabled` attribute accepts a `boolean`, and if the value is `true`, the component is disabled. If you just need to control the value within a range, you can add min attribute to set the minimum value and `max` to set the maximum value. By default, the minimum value is `0`.

<NumberDisabled />

#### Viwer Source

```vue
<template>
  <FieldNumber :num="num" :min="1" :max="10" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
```

### Steps

Allows you to define incremental steps.

Add `step` attribute to set the step.

<NumberSteps />

#### Viwer Source

```vue
<template>
  <FieldNumber :num="num" :min="1" :max="10" :step="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
```

### Step strictly

The `step-strictly` attribute accepts a `boolean`. if this attribute is `true`, input value can only be multiple of step.

<NumberStepsStrictly />

#### Viwer Source

```vue
<template>
  <FieldNumber :num="num" :min="1" :max="10" :step="2" :stepStrictly="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
```

### Precision

Add `precision` attribute to set the precision of input value.

:::tip
  The value of `precision` must be a non negative integer and should not be less than the decimal places of `step`.
:::

<NumberPrecision />

#### Viwer Source

```vue
<template>
  <FieldNumber :num="num" :precision="2" :step="0.1" :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
```

### Controls Position

Set `controls-position` to decide the position of control buttons.

<NumberControlsPosition />

#### Viwer Source

```vue
<template>
  <FieldNumber :num="num" :precision="2" :step="0.1" :max="10" :controlsPosition="'right'" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
```

### Value Type
<br>
<br>

<NumberValueType />

#### Viwer Source

```vue
<template>
  <p> {{ 'Value Type' }} <el-tag effect="Light">  {{ 'ID / INTEGER ' }} </el-tag> </p>
  <FieldNumber
    :num="num"
    :controls="true"
  />
  <p> {{ 'Value Type' }} <el-tag effect="Light">  {{ 'NUMBER / QUANTITY ' }} </el-tag> </p>
  <FieldNumber
    :num="num2"
    :valueType="'QUANTITY'"
    :controls="true"
    :precision="2"
  />
  <p> {{ 'Value Type' }} <el-tag effect="Light">  {{ 'AMOUNT / COSTS_PLUS_PRICES ' }} </el-tag> </p>
  <FieldNumber
    :num="num3"
    :valueType="'COSTS_PLUS_PRICES'"
    :controls="true"
    :controlsPosition="'right'"
    :slotsCurrency="'$'"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>
```


### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `num`  | binding value  | <el-tag effect="Light">  **{{ 'number' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'true' }}** </el-tag> |
  |    `valueType`  | Type value <el-tag effect="Light">  **{{ 'ID / INTEGER / NUMBER / QUANTITY / AMOUNT / COSTS_PLUS_PRICES' }}** </el-tag>  | <el-tag effect="Light">  **{{ 'string' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `min`    |  the minimum allowed value  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'number' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '-Infinity' }}** </el-tag> |
  | `max`    |  the maximum allowed value  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'number' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'Infinity' }}** </el-tag> |
  | `step`    |  incremental step  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'number' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '1' }}** </el-tag> |
  | `stepStrictly`    |  whether input value can only be multiple of step  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `precision`    |  precision of input value  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'number' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '0' }}** </el-tag> |
  | `controls`    |  whether to enable the control buttons  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  | `controlsPosition`    |  position of the control buttons  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'strign' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'right' }}** </el-tag> |
  | `disabled`    |  whether Switch is `disabled`  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'boolean' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'true' }}** </el-tag> |
  | `size`    |  size of Switch <el-tag effect=Light> large / default / small </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'string' }}** </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'default' }} </el-tag> |
  | `placeholder`    |  placeholder the Select  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'string' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ 'Select' }}** </el-tag> |
  | `slotsCurrency`    |  The format or symbol of the currency to display  | <el-tag effect="Light"> <el-tag effect="Light">  **{{ 'string' }}** </el-tag></el-tag> | <el-tag effect="dark" round > **{{ '$' }}** </el-tag> |
### Slots

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `footer` | Customize Default Content Bottom |


### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-number?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldNumber                   # Field Number specific components.
```

</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
