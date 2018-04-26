<template>
    <div class="layout">
        <SideNav></SideNav>
        <div class="layout-container">
            <Header></Header>
            <component :is="layout"></component>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import SideNav from './SideNav'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Tags from './Tags'
import Post from './Post'

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
    }
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
<style src="./styles/theme.less" lang="less"></style>
