import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/realworld-ddd/',
  title: "Realworld FullStack",
  description: "Implementation with Nest.js DDD and FSD React + TanStack",
  markdown: {
    theme: {
      light: 'catppuccin-mocha',
      dark: "catppuccin-mocha",
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/3h04m1/realworld-ddd' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/maxim-voitcov-a4643b224' },
    ]
  }
})
