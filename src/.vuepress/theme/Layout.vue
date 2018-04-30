<template>
  <v-app v-scroll="onScroll">
    <v-navigation-drawer app
                         :mobile-break-point="mobilePoint"
                         :mini-variant.sync="miniNav"
                         :width="240"
                         v-model="navVisible">
      <SideNav></SideNav>
    </v-navigation-drawer>
    <Header :layout="layout"
            @toggleNav="toggleNav"></Header>
    <v-content>
      <component :is="layout"></component>
      <Footer></Footer>
    </v-content>
    <transition name="scale-transition">
      <v-btn fab
             fixed
             right
             bottom
             color="accent"
             @click="$vuetify.goTo(0)"
             v-show="offsetTop > 300">
        <i class="fa fa-lg fa-chevron-up"></i>
      </v-btn>
    </transition>
  </v-app>
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
import { pathToComponentName, updateMetaTags } from './libs/utils'

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
  data() {
    const mobilePoint = 1264
    return {
      navVisible: true,
      miniNav: false,
      mobilePoint: 1264,
      offsetTop: 0
    }
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
    },
    toggleNav() {
      if (window.innerWidth > this.mobilePoint) {
        this.miniNav = !this.miniNav
      } else {
        this.navVisible = !this.navVisible
        this.miniNav = false
      }
    },
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  },
  created() {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.createTitle()
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    } else {
      this.navVisible = window.innerWidth > this.mobilePoint
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
<style src="@fortawesome/fontawesome-free-webfonts/css/fa-solid.css"></style>
<style src="@fortawesome/fontawesome-free-webfonts/css/fa-regular.css"></style>
<style src="@fortawesome/fontawesome-free-webfonts/css/fa-brands.css"></style>
<style src="@fortawesome/fontawesome-free-webfonts/css/fontawesome.css"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
