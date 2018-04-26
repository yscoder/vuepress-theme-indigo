const Layout = () => import('./theme/Layout')

export default ({ Vue, options, router, siteData }) => {
  // TODO: 尝试不依赖已有内置数据，在这里对 siteData 解析、组装成自己需要的数据结构
  // Example： { postList: [], posts: {}, tagList: [], tags: { }  }

  router.addRoutes([
    {
      path: '/page/:pageNum',
      component: Layout
    },
    {
      path: '/tags',
      component: Layout
    },
    {
      path: '/tags/:tagName',
      component: Layout
    }
  ])
}
