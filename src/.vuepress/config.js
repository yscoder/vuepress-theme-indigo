module.exports = {
  base: '/vuepress-theme-indigo/',
  dest: 'docs',
  title: "Yusen's Blog",
  description: '王昱森的博客。无所谓做什么，只要是当前最感兴趣的事！随心、随性、随缘！',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3F51B5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
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
  themeConfig: {
    lang: 'zh-CN',
    postDir: '/posts',
    subTitle: '学习弯道超车的技巧！',
    author: '王昱森',
    email: '634206017@qq.com',
    since: 2015,
    avatar: '/face.jpg',
    avatarLink: '/',
    menus: [
      {
        text: 'Home',
        icon: 'icon-home',
        url: '/'
      },
      {
        text: 'Tags',
        icon: 'icon-tags',
        url: '/tags'
      },
      {
        text: 'Github',
        icon: 'icon-github',
        url: 'https://github.com/yscoder',
        external: true
      },
      {
        text: 'Weibo',
        icon: 'icon-weibo',
        url: 'https://www.weibo.com/ysweb',
        external: true
      }
    ]
  }
}
