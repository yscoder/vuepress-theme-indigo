import sortBy from 'lodash/sortBy'
import dayjs from 'dayjs'

const slugReg = /\/([^\/]+).html$/
function matchSlug(path) {
  const arr = path.match(slugReg)
  return arr ? arr[1] : null
}

const install = (Vue, { theme, pages }) => {
  // 不依赖已有的内置数据，在这里对 siteData 解析，组装博客需要的数据混入Vue
  // Example： { postList: [], posts: {}, tagList: [], tags: { }  }
  const postList = []
  const posts = {}
  const postDir = theme.postDir

  sortBy(pages, page => -new Date(page.frontmatter.date)).forEach(page => {
    if (page.path.indexOf(postDir) === 0) {
      const slug = matchSlug(page.path)
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
      },
      $postNav() {
        const slug = matchSlug(this.$route.path)
        if (!slug) return
        const index = postList.indexOf(slug)
        const prev = postList[index - 1]
        const next = postList[index + 1]
        return {
          prev: prev ? posts[prev] : null,
          next: next ? posts[next] : null
        }
      },
      $page() {
        // override $page data
        const { path, meta } = this.$route
        for (let i = 0; i < pages.length; i++) {
          const page = pages[i]
          const layout = page.frontmatter.layout || 'post'
          if (page.path === path || layout === meta.layout) {
            return { ...page, path } // rewrite path
          }
        }
      }
    }
  })

  const format = theme.format
  Vue.filter('date', value => dayjs(value).format(format.date))
  Vue.filter('dateTime', value => dayjs(value).format(format.dateTime))
}

export default { install }
