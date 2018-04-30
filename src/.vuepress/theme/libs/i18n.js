export default {
  install(Vue, lang) {
    const locals = require(`../languages/${lang}`)

    // $tt('hello') -> '你好'
    Vue.prototype.$tt = function(field) {
      return locals[field] || field
    }
  }
}
