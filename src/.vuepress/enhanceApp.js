import config from './config'
import i18n from './i18n'

const Layout = () => import('./theme/Layout')
const themeConfig = config.themeConfig
const slugReg = /\/([^\/]+).html$/

export default ({ Vue, options, router, siteData }) => {
  // TODO: 尝试不依赖已有内置数据，在这里对 siteData 解析、组装成自己需要的数据结构
  // Example： { postList: [], posts: {}, tagList: [], tags: { }  }

  // console.log(siteData)
  const postList = []
  const posts = {}
  const postDir = themeConfig.postDir
  siteData.pages.forEach(page => {
    if (page.path.indexOf(postDir) === 0) {
      const slug = page.path.match(slugReg)[1]
      postList.push(slug)
      posts[slug] = { ...page, slug }
    }
  })

  const tags = {}
  const tagList = []
  postList.forEach(slug => {
    const list = posts[slug].frontmatter.tags || []
    list.forEach(tagName => {
      if (!tags[tagName]) {
        tags[tagName] = []
        tagList.push(tagName)
      }
      tags[tagName] = tags[tagName].concat(slug)
    })
  })

  Vue.mixin({
    computed: {
      $blog() {
        return { postList, posts, tags, tagList }
      }
    }
  })

  // $t('hello') -> '你好'
  Vue.prototype.$tt = function(field) {
    return i18n[this.$lang][field]
  }

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
