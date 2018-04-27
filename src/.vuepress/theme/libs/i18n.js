export default {
    install(Vue, siteData) {
        const lang = siteData.themeConfig.lang
        const locals = require(`../languages/${lang}`)

        // $t('hello') -> '你好'
        Vue.prototype.$tt = function(field) {
            return locals[field]
        }
    }
}
