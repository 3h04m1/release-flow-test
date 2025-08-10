import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import {generateSidebar, withSidebar} from "vitepress-sidebar";
import * as path from "node:path";

const config =  defineConfig({
  base: "/realworld-ddd/",
  title: "Realworld FullStack",
  description: "Implementation with Nest.js DDD and FSD React + TanStack",
  markdown: {
    theme: {
      light: "catppuccin-mocha",
      dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Overview", link: "/project-overview" },
    ],
    sidebar: generateSidebar({
      capitalizeFirst: true,
      documentRootPath: '/docs',
      useTitleFromFrontmatter: true,
      collapsed: true,
      frontmatterOrderDefaultValue: 1000,
      sortMenusByFrontmatterOrder: true,
      // basePath: '/realworld-ddd/',
      // collapsed: true,
      // collapseDepth: 3,
      // resolvePath: path.resolve('docs'),
      // scanStartPath: path.resolve('docs'),
    }),

    socialLinks: [
      { icon: "github", link: "https://github.com/3h04m1/realworld-ddd" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/maxim-voitcov-a4643b224",
      },
    ],
  },
  vite: {
    optimizeDeps: {
      include: [
        'dayjs',
        '@braintree/sanitize-url',
        'langium',        // add this
      ],
    },
    build: {
      commonjsOptions: {
        include: [
          /dayjs/,
          /@braintree\/sanitize-url/,
          /langium/,     // add this
          /node_modules/,
        ],
      },
    },
  }
});

export default  withMermaid(config)
