import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: process.env.BASE_REPOSITORY !== "" ? `/${process.env.BASE_REPOSITORY}/` : '/',
  locales: {
    "/": {
      lang: "en-US",
      title: 'UI Definitions Docs',
      description: 'A user interface definition documentation based on components, compositions, and pattern layouts.',
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
    // "/es/": {
    //   lang: "es-ES",
    //   title: 'Documentos de Definiciones de Interfaz de Usuario',
    //   description: 'Una documentación de definición de interfaz de usuario basada en componentes, composiciones y diseños de patrones.',
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
