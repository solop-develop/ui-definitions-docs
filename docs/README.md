<span id="epale" ref="alo">

# Atoms

## Button

Commonly used button.

### Basic usage

Use type, plain, round and circle to define Button's style.

<Button />

#### Viwer Source

```vue
  <template>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
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

Use `disabled` attribute to determine whether a button is disabled. It accepts a Boolean value.

<ButtonDisabled />

#### Viwer Source

```vue
  <template>
    <el-row class="mb-4">
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </el-row>

    <el-row>
      <el-button plain disabled>Plain</el-button>
      <el-button type="primary" plain disabled>Primary</el-button>
      <el-button type="success" plain disabled>Success</el-button>
      <el-button type="info" plain disabled>Info</el-button>
      <el-button type="warning" plain disabled>Warning</el-button>
      <el-button type="danger" plain disabled>Danger</el-button>
    </el-row>
  </template>
```

### Loading Button
  Click the button to load data, then the button displays a loading state.

  Set `loading` attribute to `true` to display loading state.

::: TIP
  You can use the `loading` slot or `loadingIcon` to customize your loading component

  ps: `loading` slot has higher priority than `loadingIcon`
:::

<loadingButton />

#### Viwer Source

```vue
  <template>
    <el-row class="mb-4">
      <el-button type="primary" loading>Loading</el-button>
      <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>
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
      <el-button size="large">Large</el-button>
      <el-button>Default</el-button>
      <el-button size="small">Small</el-button>
      <el-button size="large" :icon="Search">Search</el-button>
      <el-button :icon="Search">Search</el-button>
      <el-button size="small" :icon="Search">Search</el-button>
    </el-row>
  </template>
```

### Button Attributes

|   Name    | Description | Type   | Default |
| :---------: | :-----------: | :-----------------: | :-----------: |
|    size  | button size  |  `enum` |  ——— |
|    type  | button type [ `Primary`, `Success`, `Info`, `Warning`, `Danger` ]    |  `enum` |  ——— |
|  disabled | disable the button | `Boolean` | False |
|  plain | determine whether it's a plain button   | `Boolean` | False |
|  round | determine whether it's a round button   | `Boolean` | False |
|  circle | determine whether it's a circle button  | `Boolean` | False |
|  loading | determine whether it's loading |  `Boolean` | False |
|  loading-icon | customize loading icon component | `string` / `Component` | Loading |

### Developer Options

```bash
		└─ src                          # Main source code.
				└── components              # Global components
								└── Atoms           # Atom components
										└── buttom     # Button specific components.
```


</span>

<style>
	:root {
	--content-width: 1300px !important;
	}
</style>