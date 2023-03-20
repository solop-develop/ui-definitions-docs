import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "note",
      prefix: "docs/",
      children: "structure",
    },
    // {
    //   icon: "discover",
    //   text: "Component",
    //   prefix: "Component/",
    //   children: "structure",
    // },
    // {
    //   text: "Docs",
    //   icon: "note",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
  ],
});
