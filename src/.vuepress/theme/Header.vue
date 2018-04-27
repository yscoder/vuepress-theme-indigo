<template>
    <header class="header">
        <div class="header-container container">
            <h1 class="header-title">{{$page.title || $siteTitle}}</h1>
            <h5 class="header-subtitle" v-if="layout === 'Home'">{{$site.themeConfig.subTitle}}</h5>
        </div>
    </header>
</template>
<script>
export default {
    props: {
        layout: String
    }
}
</script>
<style lang="less">
@import './styles/config.less';

.header {
    min-height: 210px;
    padding: 104px 16px 48px 16px;
    color: @textPrimaryColor;
    background: @primaryColor;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    &-title {
        font-weight: 500;
    }
    &-subtitle {
        padding-top: 6px;
        font-weight: 300;
        color: @lightPrimaryColor;
    }
}
</style>
