---
title: Pages Directory
icon: copy
category:
  - Docs
tag:
  - Pages
footer: '<a href="https://github.com/adempiere" rel="noopener noreferrer" target="_blank">ADempiere Community</a> | <a href="https://www.adempiere.io/about/site">About Site</a>'
---

A file-based routing to create routes within your web application using `[Vue Router](https://router.vuejs.org/)` under the hood.

## Usage

Pages are Vue components and can have any [valid extension](https://nuxt.com/docs/api/configuration/nuxt-config#extensions) that Nuxt supports (by default `.vue`, `.js`, `.jsx`, `.mjs`, `.ts` or `.tsx`). Nuxt will automatically create a route for every page in your ` ~/pages/ ` directory.

```vue [pages/index.vue]
<template>
  <h1>Index page</h1>
</template>
```

The `pages/index.vue` file will be mapped to the `/` route of your application.

If you are using [app.vue](/docs/guide/directory-structure/app), make sure to use the `<NuxtPage/>` component to display the current page:

```vue [app.vue]
<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
</template>
```

Pages **must have a single root element** to allow route transitions between pages. (HTML comments are considered elements as well.)

This means that when the route is server-rendered, or statically generated, you will be able to see its contents correctly, but when you navigate towards that route during client-side navigation the transition between routes will fail and you'll see that the route will not be rendered.

Here are some examples to illustrate what a page with a single root element looks like:


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
</script>
<style>
.link-base {
  text-decoration: auto;
}
</style>

```

@tab pages/home.vue

```vue [pages/home.vue]
<template>
  <el-card class="box-card">
    <NuxtLink to="/" class="link-base">
      <FieldButton :type="'success'" plain :text="back" />
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
const back = 'Go back';
</script>
```

@tab pages/about.vue

```vue [pages/about.vue]
<template>
  <el-card class="box-card">
    <NuxtLink to="/" class="link-base">
      <FieldButton :type="'success'" plain :text="back" />
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
const back = 'Go back';
</script>
```
:::
------

You can use the `NuxtLink` tool to navigate between pages


<pagesBasic />

## **Directory**

```bash
└─── src                                           # Main source code.
    └─── pages                                     # Global Pages
        └─── index                                 # Pages index.vue specific components
        └─── about                                 # Pages about.vue specific components
        └─── home                                  # Pages home.vue specific components
```

