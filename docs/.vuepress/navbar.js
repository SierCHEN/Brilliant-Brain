export const Navbar = [
  {
    text: '指南',
    link: '/notes/guide/intro.md',
    activeMatch: '^/guide/',
  },
  {
    text: '前端',
    activeMatch: '/web/^',
    items: [
      {
        text: '语言基础',
        items: [
          { text: 'CSS', link: '/notes/web/css/css.md' },
          { text: 'JavaScript', link: '/notes/web/javascript/javascript.md' }
        ],
      },
      {
        text: '开发框架',
        items: [
          { text: 'vue3', link: '/notes/web/vue3/响应系统.md' },
          { text: 'vue-router', link: '/notes/web/vue router/vue-router.md' },
          { text: 'vite', link: '/notes/web/vite/原理.md' }
        ],
      },
      {
        text: '关于浏览器',
        items: [
          { text: '浏览器工作原理', link: '/notes/web/浏览器工作原理.md' },
          { text: '浏览器渲染', link: '/notes/web/浏览器渲染.md' }
        ]
      },
      {
        text: '版本控制',
        items: [
          { text: 'git', link: '/notes/web/git.md' }
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
          { text: '计算机组成原理', link: '/notes/theory/computer-organization.md' },
          { text: '计算机网络', link: '/notes/theory/computer-network.md' },
          { text: '操作系统', link: '/notes/theory/operating-system.md' },
        ],
      },
      {
        text: '通信',
        items: [
          { text: '信息论', link: '/notes/theory/Informatics.md'},
        ],
      }
    ]
  },
  {
    text: '项目',
    items: [
      { text: '代码规范配置项目', link: '/notes/project/normalize-config.md' }
    ]
  }
]
