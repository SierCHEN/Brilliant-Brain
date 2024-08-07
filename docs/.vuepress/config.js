import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import { defineUserConfig } from 'vuepress'
import { Notes } from './notes.js'
import { Navbar } from './navbar.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Brilliant Brain',
  description: 'Thanks for reading my doc:)',
  logo: '/images/leaf.png',
  head: [['link', { rel: 'icon', href: '/images/leaf.png' }]],
  bundler: viteBundler(),
  theme: plumeTheme({
    logo: '/images/leaf.png',
    profile: {
      avatar: '/images/leaf.png',
      name: 'Brilliant Brain',
      description: 'Thanks for reading my doc:)'
    },
    social: [
      { icon: 'github', link: 'https://github.com/SierCHEN' }
    ],
    navbarSocialInclude: ['github'],
    footer: { copyright: 'Copyright © 2024-present chensir' },
    locales: {
      '/': {
        notes: Notes,
        navbar: Navbar,
      },
    },
    plugins: {
      markdownPower: {
        icons: true,
      },
    },
  })
})