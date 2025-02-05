import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ai Agent Tools",
  description: "Ai Agent Tools",
  base: '/',
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'AGiT Tools', link: '/' },
      { text: 'MEMORY', link: '/markdown-examples' },
      { text: 'KNOWLEDGE', link: '/api-examples' }
    ],
    logo: '/assets/agent_tools_logo.png',
    siteTitle: false,
    sidebar: [
      {
        text: 'AGiT Tools',
        items: [
          { text: 'searXNG', link: '/markdown-examples' },
          { text: 'DDG', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DeanChugall/agent_too_documentation' }
    ]
    
  }
})