import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import 'prismjs/themes/prism-tomorrow.css'
import './styles/vuetify.styl'
import './styles/blog.styl'
import i18n from './libs/i18n'
import blog from './libs/blog'
import components from './components'

const Layout = () => import('./Layout')

export default ({ Vue, options, router, siteData }) => {
    const { themeConfig, pages } = siteData
    Vue.use(i18n, themeConfig.lang)
    Vue.use(blog, { theme: themeConfig, pages })
    Vue.use(components, themeConfig)

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
