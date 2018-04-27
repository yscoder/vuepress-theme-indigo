import i18n from './libs/i18n'
import blog from './libs/blog'

const Layout = () => import('./Layout')

export default ({ Vue, options, router, siteData }) => {
    Vue.use(i18n, siteData)
    Vue.use(blog, siteData)

    router.addRoutes([
        {
            path: '/page/:pageNum',
            component: Layout
        },
        {
            path: '/tags/:tagName',
            component: Layout
        }
    ])
}
