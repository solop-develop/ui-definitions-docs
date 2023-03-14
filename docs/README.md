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



</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>