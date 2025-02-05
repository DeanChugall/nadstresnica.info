import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nadstrešnica",
  description: "Nadstrešnica",
  base: '/',
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Nadstrešnica', link: '/' },
      { text: 'Dokumentacija', link: '/markdown-examples' },
      { text: 'Analiza', link: '/api-examples' }
    ],
    logo: '/assets/agent_tools_logo.png',
    siteTitle: false,
    sidebar: [
      {
        text: 'Nadstrešnica',
        items: [
          { text: 'Dokumentacija', link: '/markdown-examples' },
          { text: 'Analiza', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DeanChugall/NADSTRESNICA' }
    ]
    
  }
})