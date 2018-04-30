const Layout = () => import('../Layout')

const install = (Vue, { router, theme }) => {
  const { pagination, tags, categories } = theme
  const routes = []

  if (pagination)
    routes.push({
      path: pagination.path,
      component: Layout,
      meta: {
        layout: 'home'
      }
    })

  if (tags)
    routes.push({
      path: tags.path,
      component: Layout,
      meta: {
        layout: 'tags'
      }
    })

  if (categories)
    routes.push({
      path: categories.path,
      component: Layout,
      meta: {
        layout: 'categories'
      }
    })

  router.addRoutes(routes)
}

export default { install }
