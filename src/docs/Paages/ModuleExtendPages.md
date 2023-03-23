---
title: Module Extend Pages
icon: copy
category:
  - Docs
tag:
  - Pages
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

## Examples

This example defines a new `test` page using extendPages within a module.

## Import new Module.

Add your module inside the `Module` Root folder.


```bash
└─── src                                           # Main source code.
    └─── component                                 # Global components
    └─── modules                                   # Global Modules
        └─── myModule                              # Location of the specific Module you are importing. Example (myModule)
                └─── pages                         # Global Pages
                    └─── test                     # Pages test.vue specific components
                └─── index                         # Imported Module Definition
    └─── pages                                     # Global Pages
        └─── index                                 # Pages index.vue specific components
        └─── about                                 # Pages about.vue specific components
        └─── home                                  # Pages home.vue specific components
```

## Add Module

Add New Module to Configuration File of `nuxt.config.ts`

::: tabs

@tab nuxt.config.ts

```ts   [nuxt.config.ts]
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // My Nuxt config
  modules: ["~/modules/myModule/index", "@element-plus/nuxt", "@nuxt/ui"],
})

```
:::
------

## Call the new Module

We add a new button in the `pages/index.vue` file calling the new imported module


::: tabs

@tab pages/index.vue

```vue [pages/index.vue]
<template>
  <el-card class="box-card">
    <NuxtLink to="/home" class="link-base">
      <FieldButton :type="'success'" plain :text="home" />
    </NuxtLink>
    <NuxtLink to="/about" class="link-base">
      <FieldButton :type="'success'" plain :text="about" />
    </NuxtLink>
    <NuxtLink to="/test" class="link-base">
      <FieldButton :type="'success'" plain :text="test" />
    </NuxtLink>
    <el-card shadow="never">
      <p style="text-align: center">
        Current route: <code>{{ route.path }}</code>
      </p>
    </el-card>
  </el-card>
</template>
<script setup lang="ts">
const route = useRoute();
const about = 'About';
const home = 'Home';
const test = 'Test';
</script>
<style>
.link-base {
  text-decoration: auto;
}
</style>
```
:::
------

## Example

<iframe data-v-6d2cc665="" src="https://codesandbox.io/embed/github/elsiosanchez/Module-Extend-Pages/main?hidenavigation=1&amp;theme=dark" title="Sandbox editor" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" style="width:100%; height:900px; border:0; border-radius: 4px; overflow:auto;" class="w-full h-full min-h-[2700px] overflow-hidden bg-gray-100 dark:bg-gray-800"></iframe>