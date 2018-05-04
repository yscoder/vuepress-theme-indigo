import i18n from './libs/i18n'
import blog from './libs/blog'
import routes from './libs/routes'
import components from './components'
import './styles/theme.styl'

export default ({ Vue, options, router, siteData }) => {
  const { themeConfig: theme, pages } = siteData
  Vue.use(i18n, theme.lang)
  Vue.use(blog, { theme, pages })
  Vue.use(routes, { router, theme })
  Vue.use(components, theme)
}
