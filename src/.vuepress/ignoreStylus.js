const loaderUtils = require('loader-utils')
const template = ''

module.exports = function (source) {
  // console.log(source)
  return source.replace(/require.+src\/stylus\/components\/.+.styl'\);/g, '')
}
