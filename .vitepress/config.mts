import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nadstrešnica",
  description: "Nadstrešnica",
  base: '/',
  appearance: 'force-dark',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Nadstrešnica', link: '/' },
      { text: 'Dokumentacija', link: '/#' },
      { text: 'Analiza', link: '/#' }
    ],
    logo: '/assets/agent_tools_logo.png',
    siteTitle: false,
    sidebar: [
      {
        text: 'Nadstrešnica',
        items: [
          { text: 'Dokumentacija', link: '/#' },
          { text: 'Analiza', link: '/#' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DeanChugall/NADSTRESNICA' }
    ]
    
  }
})