const path = require('path')
const nodeExternals = require('webpack-node-externals')

const resolve = pathName => path.join(__dirname, pathName)
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  base: isProd ? '/vuepress-theme-indigo/' : '/',
  dest: 'docs',
  title: "Yusen's Blog",
  description: '王昱森的博客。无所谓做什么，只要是当前最感兴趣的事！随心、随性、随缘！',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3F51B5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/192.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3F51B5' }]
  ],
  serviceWorker: true,
  theme: '',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Yusen's Blog",
      description: '王昱森的博客。无所谓做什么，只要是当前最感兴趣的事！随心、随性、随缘！'
    }
  },
  configureWebpack: (config, isServer) => {
    const myConfig = {
      resolve: {
        alias: {
          '@pub': resolve('./public')
        }
      },
      module: {
        rules: [{
          test: /vuetify.+\.js$/,
          loader: resolve('./ignoreStylus')
        }]
      }
    }
    if (isServer) {
      myConfig.externals = nodeExternals({
        whitelist: [/vuetify/, /fortawesome/, /prismjs/]
      })
    }
    return myConfig
  },
  themeConfig: {
    lang: 'zh-CN',
    postDir: '/posts',
    subTitle: '学习弯道超车的技巧！',
    author: '王昱森',
    email: 'iyusen@foxmail.com',
    since: 2015,
    avatar: '/face.jpg',
    avatarLink: '/',
    menus: [
      // icons by https://fontawesome.com/icons
      {
        text: 'Home',
        icon: 'fa fa-home',
        url: '/'
      },
      {
        text: 'Tags',
        icon: 'fa fa-tag',
        url: '/tags/'
      },
      {
        text: 'Github',
        icon: 'fab fa-github',
        url: 'https://github.com/yscoder',
        external: true
      },
      {
        text: 'Weibo',
        icon: 'fab fa-weibo',
        url: 'https://www.weibo.com/ysweb',
        external: true
      },
      {
        text: 'About',
        icon: 'fa fa-user-secret',
        url: '/about/'
      }
    ],
    socials: ['Weibo', 'QQ', 'Facebook', 'Twitter', 'GooglePlus'],
    colors: {
      // generate by https://vuetifyjs.com/zh-Hans/theme-generator
      primary: '#3F51B5',
      secondary: '#6d6d6d',
      accent: '#E91E63',
      error: '#f44336',
      warning: '#FFC107',
      info: '#00B8D4',
      success: '#4caf50'
    },
    format: {
      date: 'YYYY年MM月DD日',
      dateTime: 'YYYY年MM月DD日 HH:mm:ss'
    },
    pagination: {
      path: '/page/:pageNum',
      pageSize: 5
    },
    tags: {
      path: '/tags/:tagName'
    },
    categories: {
      path: '/categories/:category'
    }
  }
}
