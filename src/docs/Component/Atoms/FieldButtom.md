---
title: Button
# icon: creative
category:
  - Component
  - Atom
tag:
  - Button
  - Atom
  - Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>
Commonly used button.

### **Basic usage**

Use `type`, `plain`, `round` and `circle` to define Button's style.

<Button />

#### **Viwer Source**

:::: details Code

````md

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

:::
````

::::


### **Disabled Button**

The `disabled` attribute determines if the button is disabled.

Use `disabled` attribute to determine Whether a button is disabled. It accepts a Boolean value.

<ButtonDisabled />

#### **Viwer Source**

:::: details Code

````md

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
:::
````
::::

### **Loading Button**
  Click the button to load data, then the button displays a loading state.

  Set `loading` attribute to `true` to display loading state.

::: tip

  You can use the `loading` slot or `loadingIcon` to customize your loading component

  ps: `loading` slot has higher priority than `loadingIcon`
:::

<br>

<loadingButton />

#### **Viwer Source**
:::: details Code

````md

```vue
  <template>
    <el-row class="mb-4">
      <field-button type="primary" loading>Loading</field-button>
      <field-button type="primary" :loading-icon="Eleme" loading>Loading</field-button>
    </el-row>
  </template>
```
:::
````
::::


### **Sizes**

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `large`, `small`.

<ButtonSize />

#### **Viwer Source**

:::: details Code

````md

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

:::
````
::::

### **Basic Example**

Basic example with all the button attributes

<br>

<ButtonExample />

### **Props**

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `text`  | Binding Value  |  <el-tag effect="Light"> **{{ 'String / Array / Object / Boolean' }}****  </el-tag> |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |

### **Attributes**


  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `size`  | Button Size <el-tag effect="plain">  **{{ 'large' }}** <el-divider direction="vertical" /> **{{ 'default' }}**  <el-divider direction="vertical" /> **{{ 'small' }}**  </el-tag> | <el-tag effect="plain">  **{{ 'String' }}** </el-tag> |  —————— |
  |    `type`  | Button type  <el-tag effect="Light">  <el-tag effect="dark">  **{{ 'Primary' }}** </el-tag> <el-divider direction="vertical" /> <el-tag effect="dark" type="success">  **{{ 'Success' }}** </el-tag> <el-divider direction="vertical" /> <el-tag effect="dark" type="info">  **{{ 'Info' }}** </el-tag> <el-divider direction="vertical" /> <el-tag effect="dark" type="warning">  **{{ 'Warning' }}** </el-tag> <el-divider direction="vertical" /> <el-tag effect="dark" type="danger">  **{{ 'Danger' }}** </el-tag> </el-tag> |   <el-tag effect="Light">  **{{ 'String' }}** </el-tag>  |  —————— |
  |  `disabled` | Disable the Button | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  |  `plain` | Determine Whether it's a Plain Button   | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag>  |
  |  `round` | Determine Whether it's a Round Button   | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  |  `circle` | Determine Whether it's a Circle Button  | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  |  `loading` | Determine Whether it's Loading |  <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |

### **Slots**

|   Name    | Description |
| :---------: | :-----------: |
| `header` | Customize Default Content Top |
| `content` | Customize Default Content |
| `footer` | Customize Default Content Bottom |


### **Example for Developer**


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/field-button?file=app.vue)


### **Directory**


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldButtom                   # Field Button specific components.
```

<!-- ### Example -->
<!-- ::: vue-playground Vue Playground with customized settings and import

@file App.vue

```vue
<script setup>
import { ref } from "vue";
import Comp from "./Comp.vue";

const msg = ref("Hello Playground!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>
```

@file Comp.vue

```vue
<script setup>
import { useBattery } from "@vueuse/core";
import { ref } from "vue";

const { charging, level } = useBattery();
</script>

<template>
  <h1>Battery status</h1>
  <p>Charging: {{ charging }}</p>
  <p>Level: {{ level * 100 }}%</p>
</template>
```

@import

```json
{
  "imports": {
    "@vueuse/core": "https://unpkg.com/@vueuse/core/index.mjs",
    "@vueuse/shared": "https://unpkg.com/@vueuse/shared/index.mjs",
    "vue-demi": "https://unpkg.com/vue-demi/lib/index.mjs"
  }
}
```

@setting

```json
{
  "showCompileOutput": true
}
```

:::

:::: details Code

````md
::: vue-playground Vue Playground with customized settings and import

@file App.vue

```vue
<script setup>
import { ref } from "vue";
import Comp from "./Comp.vue";

const msg = ref("Hello Playground!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>
```

@file Comp.vue

```vue
<script setup>
import { useBattery } from "@vueuse/core";
import { ref } from "vue";

const { charging, level } = useBattery();
</script>

<template>
  <h1>Battery status</h1>
  <p>Charging: {{ charging }}</p>
  <p>Level: {{ level * 100 }}%</p>
</template>
```

@import

```json
{
  "imports": {
    "@vueuse/core": "https://unpkg.com/@vueuse/core/index.mjs",
    "@vueuse/shared": "https://unpkg.com/@vueuse/shared/index.mjs",
    "vue-demi": "https://unpkg.com/vue-demi/lib/index.mjs"
  }
}
```

@setting

```json
{
  "showCompileOutput": true
}
```

:::
````

:::: -->



</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
