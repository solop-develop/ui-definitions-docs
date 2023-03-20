import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "About",
    icon: "profile",
    prefix: "/about/",
    children: [
      { text: "About", icon: "software", link: "", activeMatch: "^/about/$" },
      {
        text: "Articles",
        prefix: "articles/",
        children: [
          "2015-08-06-world-announcement-for-adempiere",
        ],
      },
    ],
  },
  {
    text: "Product",
    icon: "engine",
    prefix: "/product/",
    children: [
      { text: "Product", icon: "engine", link: "", activeMatch: "^/product/$" },
      {
        text: "Technology",
        children: [
          "technology",
          "business-process",
          "benefits",
        ],
      },
    ],
  },
  {
    text: "Documentation",
    icon: "creative",
    prefix: "/docs/",
    children: [
      { text: "Docs", link: "", icon: "note", activeMatch: "^/docs/$" },
      {
        text: "Material Management",
        children: [
          "material-management/product/",
        ],
      },
    ],
  }
]);

export const esNavbarConfig = navbar([
  "/es/",
  {
    text: "Acerca De",
    icon: "profile",
    prefix: "/es/about/",
    children: [
      { text: "Acerca De", icon: "software", link: "", activeMatch: "^/about/$" },
      {
        text: "Artículos",
        prefix: "articles/",
        children: [
          "2015-08-06-world-announcement-for-adempiere",
        ],
      },
    ],
  },
  {
    text: "Producto",
    icon: "engine",
    prefix: "/es/product/",
    children: [
      { text: "Producto", icon: "engine", link: "", activeMatch: "^/product/$" },
      {
        text: "Tecnología",
        children: [
          "technology",
          "business-process",
          "benefits",
        ],
      },
    ],
  },
  {
    text: "Documentación",
    icon: "creative",
    prefix: "/es/docs/",
    children: [
      { text: "Documentación", link: "", icon: "note", activeMatch: "^/docs/$" },
      {
        text: "Administración de Materiales",
        children: [
          "material-management/product/",
        ],
      },
    ],
  }
]);
