import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nadstrešnica",
  description: "Nadstrešnica",
  base: '/',
  appearance: 'force-dark',
  lastUpdated: true,
  head: [
    [
      'script',
      { async: '', src: "https://www.googletagmanager.com/gtag/js?id=G-V9965J5WZR" }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-V9965J5WZR');`
    ]
  ],
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
    // logo: '/assets/agent_tools_logo.png',
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
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
});
