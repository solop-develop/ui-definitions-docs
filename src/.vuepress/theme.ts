import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, esNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar, esSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "Elsio Sanchez",
    url: "https://github.com/elsiosanchez",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "https://github.com/solop-develop/ui-definitions-docs",

  docsDir: "demo/theme-docs/src",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  fullscreen: true,

  locales: {
    "/": {
      // navbar
      // navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      // displayFooter: true,

      // metaLocales: {
      //   editLink: "Edit this page on GitHub",
      // },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    "/es/": {
      // navbar
      navbar: esNavbar,

      // sidebar
      sidebar: esSidebar,

      // footer: "ADempiere Community | About Site",
      footer: "Default footer",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // comment: {
    //   // @ts-expect-error: You should generate and use your own comment service
    //   provider: "Waline",
    // },
    components: {
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "SiteInfo",
        "StackBlitz",
        "VideoPlayer",
        "YouTube",
      ],
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      mathjax: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // all features are enabled for demo, only preserve features you need here
    // mdEnhance: {
    //   align: true,
    //   attrs: true,
    //   chart: true,
    //   codetabs: true,
    //   demo: true,
    //   echarts: true,
    //   figure: true,
    //   flowchart: true,
    //   gfm: true,
    //   imgLazyload: true,
    //   imgSize: true,
    //   include: true,
    //   katex: true,
    //   mark: true,
    //   mermaid: true,
    //   playground: {
    //     presets: ["ts", "vue"],
    //   },
    //   presentation: {
    //     plugins: ["highlight", "math", "search", "notes", "zoom"],
    //   },
    //   stylize: [
    //     {
    //       matcher: "Recommended",
    //       replacer: ({ tag }) => {
    //         if (tag === "em")
    //           return {
    //             tag: "Badge",
    //             attrs: { type: "tip" },
    //             content: "Recommended",
    //           };
    //       },
    //     },
    //   ],
    //   sub: true,
    //   sup: true,
    //   tabs: true,
    //   vPre: true,
    //   vuePlayground: true,
    // },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
