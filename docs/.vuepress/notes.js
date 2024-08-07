import { definePlumeNotesConfig } from 'vuepress-theme-plume'

export const Notes = definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'web',
      link: '/web/',
      sidebar: [
        {
          text: '语言基础',
          items: [
            {
              text: 'JavaScript',
              icon: 'skill-icons:javascript',
              dir: 'javascript',
              collapsed: true,
              items: ['javascript'],
            },
            {
              text: 'CSS',
              icon: 'skill-icons:css',
              dir: 'css',
              collapsed: true,
              items: ['css'],
            }
          ]
        },
        {
          text: '开发框架',
          items: [
            {
              text: 'vue3',
              icon: 'skill-icons:vuejs-light',
              dir: 'vue3',
              collapsed: true,
              items: ['响应系统', '响应式方案'],
            },
            {
              text: 'vite',
              icon: 'logos:vitejs',
              dir: 'vite',
              collapsed: true,
              items: ['原理'],
            },
            {
              text: 'vue router',
              icon: 'skill-icons:vuejs-light',
              dir: 'vue router',
              collapsed: true,
              items: ['vue-router'],
            }
          ],
        },
        {
          text: '浏览器',
          icon: 'logos:google-icon',
          items: ['浏览器工作原理', '浏览器渲染']
        }
        ,
        {
          text: '版本控制',
          icon: 'devicon:git',
          items: ['git']
        }
      ],
    },
    {
      dir: 'theory',
      link: '/theory/',
      sidebar: [
        {
          text: '软工',
          icon: 'teenyicons:computer-solid',
          items: ['computer-network', 'computer-organization', 'operating-system']
        },
        {
          text: '通信',
          icon: 'maki:communications-tower',
          items: ['Informatics']
        }
      ]
    },
    {
      dir: 'project',
      link: '/project/',
      sidebar: ['normalize-config']
    },
  ],
})