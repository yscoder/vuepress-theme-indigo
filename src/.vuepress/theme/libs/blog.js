const slugReg = /\/([^\/]+).html$/

const install = (Vue, { theme, pages }) => {
    // 尝试不依赖已有内置数据，在这里对 siteData 解析、组装成自己需要的数据结构
    // Example： { postList: [], posts: {}, tagList: [], tags: { }  }
    const postList = []
    const posts = {}
    const postDir = theme.postDir
    pages.forEach(page => {
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
}

export default { install }
