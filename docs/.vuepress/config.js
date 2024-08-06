import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Brilliant Brain',
  description: 'Thanks for reading my doc:)',
  head: [['link', { rel: 'icon', href: '/images/leaf.png' }]],
  bundler: viteBundler(),
  theme: plumeTheme({
    navbar: [
      {
        text: '指南',
        link: '/guide/intro.md',
      },
      {
        text: '前端',
        items: [
          {
            text: '语言基础',
            items: [
              { text: 'CSS', link: '/web/language/css.md' },
              { text: 'JavaScript', link: '/web/language/javascript.md' }
            ],
          },
          {
            text: '开发框架',
            items: [
              { text: 'vue2', link: '/web/framework/vue2.md' },
              { text: 'vue3', link: '/web/framework/vue3.md' },
              { text: 'vuex', link: '/web/framework/vuex.md' },
              { text: 'pinia', link: '/web/framework/pinia.md' },
              { text: 'vue-router', link: '/web/framework/vue-router.md' },
              { text: 'vite', link: '/web/framework/vite.md' },
              { text: 'react-native', link: '/web/framework/react-native.md' }
            ],
          },
          {
            text: '关于浏览器',
            items: [
              { text: '浏览器工作原理', link: '/web/browser/browser-work.md' },
              { text: '浏览器渲染', link: '/web/browser/browser-rendering.md' }
            ]
          },
          {
            text: '版本控制',
            items: [
              { text: 'git', link: '/web/control/git.md' }
            ]
          }
        ],
      },
      {
        text: '原理',
        items: [
          {
            text: '软工',
            items: [
              { text: '计算机组成原理', link: '/theory/computer-organization.md' },
              { text: '计算机网络', link: '/theory/computer-network.md' },
              { text: '操作系统', link: '/theory/operating-system.md' },
            ],
          },
          {
            text: '通信',
            items: [
              { text: '信息论', link: '/theory/Informatics.md'},
            ],
          }
        ]
      },
      {
        text: '项目',
        items: [
          { text: '代码规范配置项目', link: '/project/normalizeConfig.md' }
        ]
      }
    ],
    plugins: {
      markdownPower: {
        icons: true,
      },
    },
  })
})