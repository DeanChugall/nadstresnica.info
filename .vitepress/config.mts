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
      { text: 'Home', link: '/' },
      { text: 'Dokumentacija', link: '/dokumentacija' },
      { text: 'Analiza', link: '/analiza' }
    ],
    // logo: '/assets/agent_tools_logo.png',
    siteTitle: false,
    sidebar: {

      // This sidebar gets displayed when a user is on `dokumentacija` directory.
      '/dokumentacija/': [
        // Sidebar global navigation links
        {
          items: [
                { text: 'Home', link: '/' },
                { text: 'Analiza', link: '/analiza/'}
              ]
        },
        // Sidebar navigation links
        {
          text: 'Dokumentacija',
          collapsed: false,
          items: [
            { text: 'Celokupna dokumentacija', link: '/dokumentacija/',
            items: [
                { text: 'Dokumentacija RAW', link: '/dokumentacija/preuzimanje-dokumentacije' },
              ]
            },
          ]
        }
      ],
      // This sidebar gets displayed when a user is on `analiza` directory.
      '/analiza/': [
        {
          items: [
                { text: 'Home', link: '/' },
                { text: 'Dokumentacija', link: '/dokumentacija/'}
              ]
        },
        {
          text: 'ANALIZA',
          collapsed: false,
          items: [
            { text: 'Analiza', link: '/analiza/',
            items: [
                { text: 'Analiza', link: '/analiza/' },
              ]
            },
          ]
        }
      ],
    },
    // sidebar: [
      
    //   { text: 'Home', link: '/' },
    //   {
    //     text: 'Dokumentacija',
    //     collapsed: false,
    //     items: [
    //       { text: 'Preuzimanje', link: '/dokumentacija',
    //       items: [
    //           { text: 'Dokumentacija RAW', link: 'dokumentacija/preuzimanje-dokumentacije' },
    //         ]
    //       },
    //     ]
    //   },
    //   {
    //     text: 'Analitika',
    //     collapsed: false,
    //     items: [
    //       { text: 'ANALIZA', link: '/analiza',
    //       items: [
    //           { text: 'Analiza', link: '/analiza' },
    //         ]
    //       },
    //     ]
    //   },
    // ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DeanChugall/NADSTRESNICA' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'info[at]dejan.pro © 2025'
    }
  }
});
