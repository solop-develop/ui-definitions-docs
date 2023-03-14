---
title: Atoms
---

<span id="epale" ref="alo">

# Atoms

## Field Button

Commonly used button.

### Basic usage

Use `type`, `plain`, `round` and `circle` to define Button's style.

<Button />

#### Viwer Source

```vue
  <template>
    <el-row class="mb-4">
      <field-button>Default</field-button>
      <field-button type="primary">Primary</field-button>
      <field-button type="success">Success</field-button>
      <field-button type="info">Info</field-button>
      <field-button type="warning">Warning</field-button>
      <field-button type="danger">Danger</field-button>
    </el-row>

    <el-row class="mb-4">
      <field-button plain>Plain</field-button>
      <field-button type="primary" plain>Primary</field-button>
      <field-button type="success" plain>Success</field-button>
      <field-button type="info" plain>Info</field-button>
      <field-button type="warning" plain>Warning</field-button>
      <field-button type="danger" plain>Danger</field-button>
    </el-row>

    <el-row class="mb-4">
      <field-button round>Round</field-button>
      <field-button type="primary" round>Primary</field-button>
      <field-button type="success" round>Success</field-button>
      <field-button type="info" round>Info</field-button>
      <field-button type="warning" round>Warning</field-button>
      <field-button type="danger" round>Danger</field-button>
    </el-row>

    <el-row>
      <field-button :icon="Search" circle />
      <field-button type="primary" :icon="Edit" circle />
      <field-button type="success" :icon="Check" circle />
      <field-button type="info" :icon="Message" circle />
      <field-button type="warning" :icon="Star" circle />
      <field-button type="danger" :icon="Delete" circle />
    </el-row>
  </template>

  <script lang="ts" setup>
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from '@element-plus/icons-vue'
  </script>
```

### Disabled Button

The `disabled` attribute determines if the button is disabled.

Use `disabled` attribute to determine Whether a button is disabled. It accepts a Boolean value.

<ButtonDisabled />

#### Viwer Source

```vue
  <template>
    <el-row class="mb-4">
      <field-button disabled>Default</field-button>
      <field-button type="primary" disabled>Primary</field-button>
      <field-button type="success" disabled>Success</field-button>
      <field-button type="info" disabled>Info</field-button>
      <field-button type="warning" disabled>Warning</field-button>
      <field-button type="danger" disabled>Danger</field-button>
    </el-row>

    <el-row>
      <field-button plain disabled>Plain</field-button>
      <field-button type="primary" plain disabled>Primary</field-button>
      <field-button type="success" plain disabled>Success</field-button>
      <field-button type="info" plain disabled>Info</field-button>
      <field-button type="warning" plain disabled>Warning</field-button>
      <field-button type="danger" plain disabled>Danger</field-button>
    </el-row>
  </template>
```

### Loading Button
  Click the button to load data, then the button displays a loading state.

  Set `loading` attribute to `true` to display loading state.

::: tip

  You can use the `loading` slot or `loadingIcon` to customize your loading component

  ps: `loading` slot has higher priority than `loadingIcon`
:::

<br>

<loadingButton />

#### Viwer Source

```vue
  <template>
    <el-row class="mb-4">
      <field-button type="primary" loading>Loading</field-button>
      <field-button type="primary" :loading-icon="Eleme" loading>Loading</field-button>
    </el-row>
  </template>
```

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `large`, `small`.

<ButtonSize />

#### Viwer Source

```vue
  <template>
    <el-row>
      <field-button size="large">Large</field-button>
      <field-button>Default</field-button>
      <field-button size="small">Small</field-button>
      <field-button size="large" :icon="Search">Search</field-button>
      <field-button :icon="Search">Search</field-button>
      <field-button size="small" :icon="Search">Search</field-button>
    </el-row>
  </template>
```

### Basic Example

Basic example with all the button attributes

<br>

<ButtonExample />

### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `text`  | Binding Value  | <el-tag effect="Light">  {{ 'String' }} </el-tag> <el-tag effect="Light">  {{ 'Array' }} </el-tag> <el-tag effect="Light">  {{ 'Object' }} </el-tag> <el-tag effect="Light">  {{ 'Boolean' }} </el-tag> |  <el-tag effect="dark" round > {{ 'True' }} </el-tag> |

### Attributes


  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `size`  | Button Size <el-tag effect="Light">  {{ 'large' }} <el-divider direction="vertical" /> {{ 'default' }}  <el-divider direction="vertical" /> {{ 'small' }}  </el-tag> | <el-tag effect="Light">  {{ 'String' }} </el-tag> |  —————— |
  |    `type`  | Button type  <el-tag effect="Light">  <el-tag effect="Light">  {{ 'Primary' }} </el-tag> <el-divider direction="vertical" /> <el-tag effect="Light" type="success">  {{ 'Success' }} </el-tag> <el-divider direction="vertical" /> <el-tag effect="Light" type="info">  {{ 'Info' }} </el-tag> <el-divider direction="vertical" /> <el-tag effect="Light" type="warning">  {{ 'Warning' }} </el-tag> <el-divider direction="vertical" /> <el-tag effect="Light" type="danger">  {{ 'Danger' }} </el-tag> </el-tag> |   <el-tag effect="Light">  {{ 'String' }} </el-tag>  |  —————— |
  |  `disabled` | Disable the Button | <el-tag effect="Light">  {{ 'Boolean' }} </el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  |  `plain` | Determine Whether it's a Plain Button   | <el-tag effect="Light">  {{ 'Boolean' }} </el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag>  |
  |  `round` | Determine Whether it's a Round Button   | <el-tag effect="Light">  {{ 'Boolean' }} </el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  |  `circle` | Determine Whether it's a Circle Button  | <el-tag effect="Light">  {{ 'Boolean' }} </el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  |  `loading` | Determine Whether it's Loading |  <el-tag effect="Light">  {{ 'Boolean' }} </el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |

### Slots

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `content` | Customize Default Content |
| `footer` | Customize Default Content Bottom |


### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/field-button?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldButtom                   # Field Button specific components.
```


## Field Text
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
  |    `type`  | type of input  | <el-tag effect="Light">  {{ 'String' }} </el-tag>  |  <el-tag effect="dark" round > {{ 'True' }} </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `text`    |  binding value  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'String' }} </el-tag> / <el-tag effect="Light">  {{ 'Number' }} </el-tag> </el-tag> | — |
  | `maxlength`    |  the max length  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'String' }} </el-tag> / <el-tag effect="Light">  {{ 'Number' }} </el-tag> </el-tag> | — |
  | `minlength`    |  same as `minlength` in native input  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'Number' }} </el-tag> </el-tag> | — |
  | `show-word-limit`    |  whether show word count, only works when type is 'text' or 'textarea'  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag> </el-tag> |  <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `placeholder`    |  placeholder of Input  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'String' }} </el-tag></el-tag> | — |
  | `clearable`    |  whether to show clear button, only works when `type` is not 'textare  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> |  <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `show-password`    |  whether to show toggleable password input  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `disabled`    |  whether Input is disabled  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `size`    |  size of Input, works when `type` is not `textarea` <el-tag effect="Light">  {{ 'large' }} <el-divider direction="vertical" /> {{ 'default' }}  <el-divider direction="vertical" /> {{ 'small' }}  </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'String' }} </el-tag></el-tag> | — |
  | `rows`    |  number of rows of `textarea`, only works when `type` is `textarea`  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'number' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ '2' }} </el-tag> |
  | `autosize`    |  whether textarea has an adaptive height, only works when `type` is `textarea`. Can accept an object, e.g.` { minRows: 2, maxRows: 6 } ` | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'Boolean / Object' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'false' }} </el-tag> |

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


## Switch

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
  |    `value`  | binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type  | <el-tag effect="Light">  {{ 'boolean / string / number' }} </el-tag>  |  <el-tag effect="dark" round > {{ 'True' }} </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `active-text`    |  text displayed when in `on` state  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ '——————' }} </el-tag> |
  | `inactive-text`    |  text displayed when in `off` state  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ '——————' }} </el-tag> |
  | `inline-prompt`    |  whether icon or text is displayed inside dot, only the first character will be rendered for text  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `disabled`    |  whether Switch is `disabled`  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `loading`    |  whether Switch is in `loading` state  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `size`    |  size of Switch <el-tag effect=Light> large / default / small </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'default' }} </el-tag> |

<!-- ### Slots

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `content` | Customize Default Content |
| `footer` | Customize Default Content Bottom |
 -->

### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-witch?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldSwitch                     # Field Switch specific components.
```


## DatePicker

Use Date Picker for date input.

::: tip
  This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).
:::

### Enter Date

Basic date picker measured by 'day'.

The measurement is determined by the type attribute. You can enable quick options via shortcuts property. The disabled date is set by disabledDate, which is a function.

<DatePikerBasic />

#### Viwer Source

```vue
<template>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <field-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
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


### Date Range

Picking a date range is supported.

When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the `unlink-panels` attribute.

<DateRange />

#### Viwer Source

```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <field-date-picker
        v-model="value1"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :size="size"
      />
    </div>
    <div class="block">
      <span class="demonstration">With quick options</span>
      <field-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :shortcuts="shortcuts"
        :size="size"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
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

### Month Range

Picking a month range is supported.

When in range mode, the left and right panels are linked by default. If you want the two panels to switch current years independently, you can use the `unlink-panels` attribute.

<MonthRange />

#### Viwer Source

```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <field-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="To"
        start-placeholder="Start month"
        end-placeholder="End month"
      />
    </div>
    <div class="block">
      <span class="demonstration">With quick options</span>
      <field-date-picker
        v-model="value2"
        type="monthrange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start month"
        end-placeholder="End month"
        :shortcuts="shortcuts"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'This month',
    value: [new Date(), new Date()],
  },
  {
    text: 'This year',
    value: () => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    },
  },
  {
    text: 'Last 6 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    },
  },
]
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

### Date Formats

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
  |    `type`  | type of the picker  | <el-tag effect="Light">  {{ 'string' }} </el-tag>  |  <el-tag effect="dark" round > {{ 'True' }} </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `value`    |  binding value, if it is an array, the length should be 2 | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'Date / number / string / Array' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ '——————' }} </el-tag> |
  | `format`    |  format of the displayed value in the input box  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'YYYY-MM-DD' }} </el-tag> |
  | `shortcuts` |  an object array to set shortcut options  | <el-tag effect="Light"> {{ 'Array' }} </el-tag> | <el-tag effect="dark" round> {{ '——————' }} </el-tag> |
  | `placeholder`    |  placeholder in non-range mode  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ '——————' }} </el-tag> |
  | `startPlaceholder`    |  placeholder in non-range mode  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ '——————' }} </el-tag> |
  | `endPlaceholder`    |  placeholder in non-range mode  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ '——————' }} </el-tag> |
  | `disabled`    |  whether Switch is `disabled`  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `clearable`    |  whether to show clear button  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `size`    |  size of Switch <el-tag effect=Light> {{ 'large / default / small' }} </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'default' }} </el-tag> |

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


## Select

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
  |    `value`  | binding value  | <el-tag effect="Light">  {{ 'string' }} </el-tag>  |  <el-tag effect="dark" round > {{ 'True' }} </el-tag> |
  | `optionList`| List of Options that must be displayed in the Select. Within the array of options, the attributes to be received and required are:  <el-tag effect="Light"> {{ ' { label: title, value: value, disabled: false\true } ' }} </el-tag> | <el-tag effect="Light">  {{ 'array' }} </el-tag>  |  <el-tag effect="dark" round > {{ 'True' }} </el-tag> |

### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `multiple`    |  whether `multiple-select` is activated  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `collapseTags`    |  whether to collapse tags to a text when multiple selecting  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `collapseTagsTooltip`    |  whether show all selected tags when mouse hover text of `collapse-tags`. To use this, `collapse-tags` must be true  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `multipleLimit`    |  maximum number of options user can select when `multiple` is true. No `limit` when set to `0`  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'number' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ '0' }} </el-tag> |
  | `disabled`    |  whether Switch is `disabled`  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `clearable`    |  whether select can be cleared  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `size`    |  size of Switch <el-tag effect=Light> large / default / small </el-tag>  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'default' }} </el-tag> |
  | `placeholder`    |  placeholder the Select  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'Select' }} </el-tag> |
  | `filterable`    |  whether Select is filterable  | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `allowCreate`   |  whether creating new items is allowed. To use this, `filterable` must be `true` | <el-tag effect="Light"> <el-tag effect="Light">  {{ 'boolean' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'False' }} </el-tag> |
  | `noDataText`    | displayed text when there is no options, you can also use slot `empty`|  <el-tag effect="Light"> <el-tag effect="Light">  {{ 'string' }} </el-tag></el-tag> | <el-tag effect="dark" round > {{ 'No data' }} </el-tag> |

<!-- ### Slots

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `content` | Customize Default Content |
| `footer` | Customize Default Content Bottom |
 -->

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