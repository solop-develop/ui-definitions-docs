import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Componentes",
      icon: "note",
      prefix: "docs/",
      children: "structure",
    },
  ],
});
