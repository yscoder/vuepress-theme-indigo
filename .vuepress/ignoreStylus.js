module.exports = function(source) {
    // console.log(source)
    return source.replace(/require.+src\/stylus\/components\/.+.styl'\);/g, '')
}
