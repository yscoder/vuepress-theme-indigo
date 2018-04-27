<template>
    <aside class="aside">
        <div class="aside-inner">
            <div class="aside-brand-wrap">
                <div class="aside-brand">
                    <a :href="content.avatarLink"
                       class="aside-avatar">
                        <img :src="$withBase(content.avatar)"
                             alt="avatar">
                    </a>
                    <hgroup class="aside-introduce">
                        <h5 class="aside-nickname">{{content.author}}</h5>
                        <a :href="`mailto:${content.email}`"
                           :title="content.email"
                           class="aside-mail">{{content.email}}</a>
                    </hgroup>
                </div>
            </div>
            <nav class="aside-nav">
                <ul>
                    <li v-for="item in content.menus">
                        <router-link :to="item.url"
                                     exact-active-class="active"
                                     v-if="!item.external">
                            <i :class="item.icon"
                               class="icon icon-lg"></i>{{item.text}}
                        </router-link>
                        <a :href="item.url"
                           target="_blank"
                           rel="noopener noreferrer"
                           v-if="item.external">
                            <i :class="item.icon"
                               class="icon icon-lg"></i>{{item.text}}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>
<script>
export default {
    name: '',
    computed: {
        content() {
            return this.$site.themeConfig
        }
    }
}
</script>
<style lang="less">
@import './styles/config.less';

.aside {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 66;
    width: @menuWidth;
    min-height: 100%;
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    will-change: transform, -webkit-transform;
    &-inner {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &-brand {
        padding: 40px 20px 2em;
        background: fade(@primaryColor, 50%);
    }
    &-brand-wrap {
        background: url(./imgs/brand.jpg);
        background-size: 100%;
    }

    &-avatar {
        display: block;
        width: 80px;
        height: 80px;
        border: 2px solid #fff;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }

    &-introduce {
        margin: 1em 0 0;
        color: @textPrimaryColor;
    }
    // &-nickname {
    //     font-size: 16px;
    //     line-height: 24px;
    // }
    &-mail {
        display: inline-block;
        padding-top: 4px;
        color: @lightPrimaryColor;
        font-size: 13px;
    }
    &-nav {
        position: relative;
        overflow-y: auto;
        flex: auto;
        ul {
            margin: 0;
            padding: 12px 0;
            list-style: none;
            line-height: @navH;
        }
        i {
            position: absolute;
            top: 0;
            left: @menuPadding;
            line-height: inherit;
        }
        a {
            position: relative;
            display: block;
            padding-left: @menuPadding + @menuPadding*2.4;
            padding-right: @menuPadding;
            height: @navH;
            line-height: @navH;
            font-weight: 500;
            color: @secondaryTextColor;
            &:hover,
            &.active {
                color: @primaryColor;
                background: rgba(0, 0, 0, 0.05);
            }
        }
    }
}
</style>
