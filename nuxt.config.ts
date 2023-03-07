// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt',
    '@nuxt/content',
    '@nuxt/ui'
  ],
  content: {
    documentDriven: true
  }
})
