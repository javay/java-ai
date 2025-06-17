import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java-AI",
  titleTemplate: 'JAVA-AI.cn',
  description: "Java ♾️ AI",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  editLink: {
    pattern: 'https://github.com/javay/java-ai/edit/main/docs/:path'
  },
  lastUpdated: true,
  footer: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '关于我', link: '/team' }
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
      { icon: 'github', link: 'https://github.com/javay/java-ai' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/javay/java-ai/blob/main/LICENSE">Apache License 2.0</a>',
      copyright: 'Copyright © 2025 java-ai.cn All Rights Reserved <a href="/"><img src="/logo.png" width="16" height="16" alt="java-ai.cn" /></a>'
    }
  }
})
