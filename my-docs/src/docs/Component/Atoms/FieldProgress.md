---
title: Progress
# icon: creative
category:
  - Component
  - Atom
tag:
  - Progress
  - Atom
  - Component
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

<span>


Progress is used to show the progress of current operation, and inform the user the current status.

### Basic Usage

<ProgressBasic />

#### Viwer Source

```vue
<template>
  <el-card class="box-card">
    <FieldProgress :percentage="50" :textInside="true" />
  </el-card>
</template>
```

### Internal percentage

In this case the percentage takes no additional space
<br>
`stroke-width` attribute decides the `width` of progress bar, and use `text-inside` attribute to put description inside the progress bar.

<ProgressInternalPercentage />

#### Viwer Source

```vue
<template>
  <el-card class="box-card">
    <FieldProgress
      :textInside="true"
      :strokeWidth="22"
      :percentage="80"
    />
    <FieldProgress
      :textInside="true"
      :strokeWidth="22"
      :percentage="80"
      status="success"
    />
    <FieldProgress
      :textInside="true"
      :strokeWidth="22"
      :percentage="80"
      status="warning"
    />
    <FieldProgress
      :textInside="true"
      :strokeWidth="22"
      :percentage="80"
      status="exception"
    />
  </el-card>
</template>
```

### Circular progress bar

You can specify `type` attribute to `circle` to use circular progress bar, and use `width` attribute to change the size of circle.

<ProgressType />

#### Viwer Source

```vue
<template>
  <el-card class="box-card">
    <FieldProgress
      type="circle"
      :percentage="0"
      :textInside="true"
    />
    <FieldProgress
      type="circle"
      :percentage="25"
      :textInside="true"
    />
    <FieldProgress
      type="circle"
      :percentage="25"
      status="success"
      :textInside="true"
    />
    <FieldProgress
     type="circle"
      :percentage="25"
      status="warning"
      :textInside="true"
    />
    <FieldProgress
     type="circle"
      :percentage="25"
      :textInside="true"
      status="exception"
    />
  </el-card>
</template>
```


### Props

  |   Name    | Description | Type  | Mandatory |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  |    `percentage`  | percentage.  | <el-tag effect="Light">  **{{ 'number' }}** </el-tag>  |  <el-tag effect="dark" round > {{ 'True' }} </el-tag> |
  |    `textInside`  | whether to place the percentage inside progress bar, only works when `type` is 'line'.  | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag>  |  <el-tag effect="dark" round > **{{ 'True' }}** </el-tag> |


### Attributes

  |   Name    | Description | Type   | Default |
  | :---------: | :-----------: | :-----------------: | :-----------: |
  | `type`    | the `type` of progress bar <el-tag effect="Light"> **{{ 'line/circle/dashboard' }}** </el-tag> | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'line' }}** </el-tag> |
  | `strokeWidth`    | the width of progress bar  | <el-tag effect="Light">  **{{ 'number' }}** </el-tag> | <el-tag effect="dark" round > **{{ '6' }}** </el-tag> |
  | `status`    | the current status of progress bar <el-tag effect="Light"> **{{ 'success/exception/warning' }}** </el-tag>  | <el-tag effect="Light">  **{{ 'String' }}** </el-tag> | <el-tag effect="dark" round > **{{ '────' }}** </el-tag> |
  | `indeterminate`    | set indeterminate progress  | <el-tag effect="Light">  **{{ 'Boolean' }}** </el-tag> | <el-tag effect="dark" round > **{{ 'False' }}** </el-tag> |

### Example for Developer


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fields-progress?file=app.vue)


### Directory


```bash
  └─ src                                            # Main source code.
      └── Components                                # Global components
              └── Atoms                             # Atom components
                  └── FieldProgress                 # Field Progress specific components.
```

</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>
