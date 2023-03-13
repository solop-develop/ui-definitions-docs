import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'UI Definitions Docs',
  description: 'A user interface definition documentation based on components, compositions, and pattern layouts.',
  base: process.env.BASE_REPOSITORY !== "" ? `/${process.env.BASE_REPOSITORY}/` : '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'UI Definitions Docs',
      description: 'A user interface definition documentation based on components, compositions, and pattern layouts.',
    },
    '/es/': {
      lang: 'es-Ve',
      title: 'Documentos de Definiciones de Interfaz de Usuario',
      description: 'Una documentación de definición de interfaz de usuario basada en componentes, composiciones y diseños de patrones.',
    },
  }
})
