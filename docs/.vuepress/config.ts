import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'UI Definitions Docs',
  description: 'A user interface definition documentation based on components, compositions, and pattern layouts.',
  base: process.env.BASE_REPOSITORY !== "" ? `/${process.env.BASE_REPOSITORY}/` : '/'
})
