---
title: Avance
# icon: creative
category:
  - Component
  - Atom
tag:
  - Avance
  - Atom
  - Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>

Drag the slider within a fixed range.

### Basic usage

The current value is displayed when the slider is being dragged.

Customize the initial value of the slider by setting the binding value.

<SliderBasic />

#### Viwer Source

```vue
<template>
  <el-card class="box-card">
    <FieldSlider
      v-model="0"
    />
    <FieldSlider
      v-model="0"
      :show-tooltip="false"
    />
    <FieldSlider
      v-model="0"
      :disabled="true"
    />
  </el-card>
</template>
```

### Step

Set `step` size with the `step` attribute. You can display breakpoints by setting the `show-stops` attribute

<SliderStep />

#### Viwer Source

```vue
<template>
  <el-card class="box-card">
    <FieldSlider
      v-model="0"
      :step="10"
    />
    <FieldSlider
      v-model="0"
      :step="10"
      :show-stops="true"
    />
  </el-card>
</template>
```

### Range

Selecting a range of values is supported.

Setting the `range` attribute activates range mode, where the binding value is an array made up of two boundary values.

<SliderRange />

#### Viwer Source

```vue
<template>
  <el-card class="box-card">
    <FieldSlider
      v-model="0"
      :show-stops="true"
      :range="true"
      :max="10"
    />
  </el-card>
</template>
```

### Vertical Mode

Setting the vertical `attribute` to `true` enables vertical mode. In vertical mode, the `height` attribute is required.

<SliderVertical />

#### Viwer Source

```vue
<template>
  <el-card class="box-card">
    <FieldSlider
      v-model="0"
      :vertical="true"
    />
  </el-card>
</template>
```


### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `percentage`  | percentage.  | <el-tag effect="Light">  **{{ 'Number' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |
  |    `textInside`  | whether to place the percentage inside progress bar, only works when `type` is 'line'.  | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |


### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `type`    | the `type` of progress bar <el-tag effect="Light"> **{{ 'line/circle/dashboard' }}** </el-tag> | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'line' }}** </el-tag> |
  | `strokeWidth`    | the width of progress bar  | <el-tag effect="Light">  **{{ 'Number' }}** </el-tag> | <el-tag effect="dark" round > **{{ '6' }}** </el-tag> |
  | `status`    | the current status of progress bar <el-tag effect="Light"> **{{ 'success/exception/warning' }}** </el-tag>  | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ '────' }}** </el-tag> |
  | `indeterminate`    | set indeterminate progress  | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
  |  `disabled` | Disable the Button | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |
### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-silder?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldSilder                 # Field silder specific components.
```


</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
