---
title: Action Panel
# icon: creative
category:
- Component
- Molecule
tag:
- ActionPanel
- Molecule
- Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>

It is a panel with 3 general actions. **Option:** <el-tag effect="dark" round> **<el-divider direction="vertical" /> Close <el-divider direction="vertical" /> Check <el-divider direction="vertical" /> Cleared.** </el-tag>
<!-- <Badge text="Closed" color="green" />
<Badge text="Cleared" color="green" />
<Badge text="Check" color="green" /> -->

## **Clear Action**
This Action is used to delete or clear the content of the panel

<ActionPanelClear />

### **Viwer Source**

:::: details Code

````md

```vue
<template>
  <el-input v-model="input" placeholder="Please input" />
  <molecula-ActionPanel
    :showClear="true"
    :showClose="false"
    :showCheck="false"
    :actionClear="handleClear"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const handleClear = () => {
  input.value = ''
}
</script>

```

:::
````

::::

## **Close Action**
This action is used to Close.

<ActionPanelClose />

### **Viwer Source**

:::: details Code

````md

```vue
<template>
  <el-popover
    :visible="visible"
    trigger="click"
    placement="top"
    :width="460"
  >
    <el-input v-model="input" placeholder="Please input" />
    <molecula-ActionPanel
      :showClear="true"
      :showClose="true"
      :showCheck="false"
      :actionClear="handleClear"
      :actionClose="handleClose"
    />
    <el-button #reference @click="visible = true">Click to activate</el-button>
  </el-popover>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const visible = ref(false)
const handleClear = () => {
  input.value = ''
}
const handleClose = () => {
  visible.value = false
}
</script>

```

:::
````

::::

## **Check Action**

This action is used to Close.

<ActionPanelCheck />

### **Viwer Source**

:::: details Code

````md

```
<template>
  <el-popover
    :visible="visible"
    trigger="click"
    placement="top"
    :width="460"
  >
    <el-input v-model="input" placeholder="Please input" />
    <molecula-ActionPanel
      :showClear="true"
      :showClose="true"
      :showCheck="true"
      :actionClear="handleClear"
      :actionClose="handleClose"
      :actionCheck="handleDone"
    >
    </molecula-ActionPanel>
    <el-button #reference @click="visible = true">
      !hello! {{ world }}
    </el-button>
  </el-popover>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const world = ref('')
const visible = ref(false)
const handleClear = () => {
  input.value = ''
}
const handleClose = () => {
  visible.value = false
}
const handleDone = () => {
  handleClose()
  world.value = input.value
}

```

:::
````

::::


## **Slots Action**

Add Custom Content to the Left or Right of the Action Panel Button.

<ActionPanelSlots />

### **Viwer Source**

:::: details Code

````md

```
<template>
  <el-popover
    :visible="visible"
    trigger="click"
    placement="top"
    :width="460"
  >
    <el-input v-model="input" placeholder="Please input" /> {{ world }}
    <molecula-ActionPanel
      :showClear="true"
      :showClose="true"
      :showCheck="true"
      :actionClear="handleClear"
      :actionClose="handleClose"
      :actionCheck="handleDone"
    >
      <template v-slot:slotsLeft>
        <el-button type="success" :icon="Refresh" @click="handleRefresh" />
      </template>
    </molecula-ActionPanel>
    <el-button #reference @click="visible = true">
      !hello! {{ world }}
    </el-button>
  </el-popover>
</template>
<script lang="ts" setup>
import {
  Refresh
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
const world = ref('')
const visible = ref(false)
const handleClear = () => {
  input.value = ''
}
const handleClose = () => {
  visible.value = false
}
const handleDone = () => {
  handleClose()
  world.value = input.value
}
const handleRefresh = () => {
  world.value = input.value
}

```

:::
````

::::

## *Props*

|   Name    | Description | Type  | Mandatory |
| :---------: | :-----------: | :-----------------: | :-----------: |
|    `showClear`  | This property allows to display the Clear button.  | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |
|    `showClose`  | This property allows to display the Close button.  | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |
|    `showCheck`  | This property allows to display the Check button.  | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |
|    `actionClear`  | Method or Function that is triggered when clicking on the Clear Button.  | <el-tag effect="Light">  **{{ 'Function' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |
|    `actionClose`  | Method or Function that is triggered when clicking on the Close Button.  | <el-tag effect="Light">  **{{ 'Function' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |
|    `actionCheck`  | Method or Function that is triggered when clicking on the Check Button.  | <el-tag effect="Light">  **{{ 'Function' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |


## **Attributes**

|   Name    | Description | Type   | Default |
| :---------: | :-----------: | :-----------------: | :-----------: |
|  `disabledClear` | Disable the Button Clear | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
|  `disabledClose` | Disable the Button Close | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
|  `disabledCheck` | Disable the Button Check | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
|  `textAling` | Position where the buttons are displayed | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'Right' }}** </el-tag> |
|  `slotsLeft` | Add Custom Content to the Left of the Button Panel | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ '────────────' }}** </el-tag> |
|  `slotsRight` | Add Custom Content to the Right of the Button Panel | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ '────────────' }}** </el-tag> |
|  `slotsAlingLeft` | Position of the Custom Content to the Left of the Button Panel | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ '────────────' }}** </el-tag> |
|  `slotsAlingRight` | Position of the Custom Content to the Right of the Button Panel | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ '────────────' }}** </el-tag> |


## **Events**

|   Name    | Description | Type  |
| :---------: | :-----------: | :-----------------: |
|    `actionClear`  | Method or Function that is triggered when clicking on the Clear Button.  | <el-tag effect="Light">  **{{ 'Function' }}** </el-tag>  |
|    `actionClose`  | Method or Function that is triggered when clicking on the Close Button.  | <el-tag effect="Light">  **{{ 'Function' }}** </el-tag>  |
|    `actionCheck`  | Method or Function that is triggered when clicking on the Check Button.  | <el-tag effect="Light">  **{{ 'Function' }}** </el-tag>  |


## **Example for Developer**


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/molecule-action-panel?file=app.vue)


## **Directory**


```bash
└─ src                                            # Main source code.
    └── Components                                # Global components
            └── Atoms                             # Atom components
            └── Moleculas                         # Moleculas components
                └── ActionPanel                   # Molecule Action Panel specific components.
```

</span>

<style>
:root {
--content-width: 1300px !important;
}
</style>
