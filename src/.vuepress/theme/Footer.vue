<template>
    <footer class="footer">
        <div class="footer-top">
            <p>博客内容遵循
                <a rel="license noopener noreferrer"
                   href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                   target="_blank">知识共享 署名 - 非商业性 - 相同方式共享 4.0 国际协议</a>
            </p>
        </div>
        <div class="footer-bottom">
            <p>
                <span>{{$site.themeConfig.author}} &copy; {{since}}</span>
                <span>
                    <template v-if="$site.themeConfig.icpLicense">
                        <a href="http://www.miitbeian.gov.cn/"
                           target="_blank"
                           rel="noopener noreferrer">
                            {{$site.themeConfig.icpLicense}}
                        </a><br>
                    </template>
                    Power by
                    <a href="https://vuepress.vuejs.org"
                       target="_blank"
                       rel="noopener noreferrer">VuePress</a> Theme
                    <a href="https://github.com/yscoder/hexo-theme-indigo"
                       target="_blank"
                       rel="noopener noreferrer">indigo</a>
                </span>
            </p>
        </div>
    </footer>
</template>
<script>
export default {
    computed: {
        since() {
            const since = this.$site.themeConfig.since
            const now = new Date().getFullYear()
            return since < now ? `${since} - ${now}` : since
        }
    }
}
</script>
<style lang="less">
@import './styles/config.less';

.footer {
    color: rgba(255, 255, 255, 0.6);
    background: @darkPrimaryColor;
    p {
        margin: 0;
        line-height: 1.6;
        font-size: 13px;
        text-align: center;
        span {
            &:not(:first-child):before {
                content: '·';
                padding: 0 0.5em;
            }
        }
        a {
            border-bottom: 1px dotted rgba(255, 255, 255, 0.5);
            &:hover {
                border-bottom: 1px solid rgba(255, 255, 255, 0.7);
            }
        }
    }

    &-top {
        padding: 16px;
        background: @primaryColor;
    }
    a {
        color: inherit;
        opacity: 0.8;

        &:hover {
            color: #fff;
            text-decoration: none;
        }
    }
    &-bottom {
        padding: 16px;
    }
}
</style>
