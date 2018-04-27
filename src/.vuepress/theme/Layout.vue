<template>
    <div class="layout">
        <SideNav></SideNav>
        <div class="layout-container">
            <Header :layout="layout"></Header>
            <component :is="layout"></component>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import SideNav from './SideNav'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Tags from './Tags'
import Post from './Post'
import { pathToComponentName, updateMetaTags } from './utils'

export default {
    name: 'layout',
    components: {
        SideNav,
        Header,
        Footer,
        Home,
        Tags,
        Post
    },
    computed: {
        layout() {
            return this.$page.frontmatter.layout || 'post'
        }
    },
    methods: {
        createTitle() {
            const title = `${this.$siteTitle} · ${this.$site.themeConfig.subTitle}`
            const pageTitle = this.$page.title
            return (pageTitle ? `${pageTitle} · ` : '') + title
        }
    },
    created() {
        if (this.$ssrContext) {
            this.$ssrContext.title = this.createTitle()
            this.$ssrContext.lang = this.$lang
            this.$ssrContext.description = this.$page.description || this.$description
        }
    },
    mounted() {
        // update title / meta tags
        this.currentMetaTags = []
        const updateMeta = () => {
            document.title = this.createTitle()
            document.documentElement.lang = this.$lang
            const meta = [
                {
                    name: 'description',
                    content: this.$description
                },
                ...(this.$page.frontmatter.meta || [])
            ]
            this.currentMetaTags = updateMetaTags(meta, this.currentMetaTags)
        }
        this.$watch('$page', updateMeta)
        updateMeta()

        // configure progress bar
        nprogress.configure({ showSpinner: false })

        this.$router.beforeEach((to, from, next) => {
            if (to.path !== from.path && !Vue.component(pathToComponentName(to.path))) {
                nprogress.start()
            }
            next()
        })

        this.$router.afterEach(() => {
            nprogress.done()
            this.isSidebarOpen = false
        })
    },
    beforeDestroy() {
        updateMetaTags(null, this.currentMetaTags)
    },
}
</script>
<style lang="less">
@import './styles/config.less';

.layout {
    &-container {
        padding-left: @menuWidth;
    }
}
</style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.less" lang="less"></style>

