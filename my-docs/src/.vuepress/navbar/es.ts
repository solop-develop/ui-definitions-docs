import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/es/",
  // { text: "Documentacion", icon: "note", link: "/es/docs/" },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  // {
  //   text: "Componentes",
  //   icon: "note",
  //   prefix: "/es/docs/",
  //   children: [
  //     {
  //       text: "Atom",
  //       icon: "feature",
  //       prefix: "atom/",
  //       children: ["botom", "epale"],
  //     },
  //     {
  //       text: "Molecula",
  //       icon: "feature",
  //       prefix: "molecula/",
  //       children: ["paginacion", { text: "...", icon: "more", link: "" }],
  //     },
  //     // {
  //     //   text: "Componentes",
  //     //   icon: "config",
  //     //   prefix: "",
  //     //   children: ["atom", { text: "", icon: "", link: "" }],
  //     // },
  //     // {
  //     //   text: "Componentes",
  //     //   icon: "config",
  //     //   prefix: "",
  //     //   children: ["atom", { text: "", icon: "", link: "" }],
  //     // },
  //   ],
  // },
]);
