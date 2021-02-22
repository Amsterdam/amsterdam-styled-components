const { extendDefaultPlugins } = require('svgo')

module.exports = {
  plugins: extendDefaultPlugins([
    { name: 'removeViewBox', active: false },
    { name: 'removeDimensions', active: true },
    { name: 'removeDoctype', active: true },
    { name: 'removeComments', active: true },
    { name: 'removeMetadata', active: true },
    { name: 'removeEditorsNSData', active: true },
    { name: 'cleanupIDs', active: true },
    { name: 'removeRasterImages', active: true },
    { name: 'removeUselessDefs', active: true },
    { name: 'removeUnknownsAndDefaults', active: true },
    { name: 'removeUselessStrokeAndFill', active: true },
    { name: 'removeHiddenElems', active: true },
    { name: 'removeEmptyText', active: true },
    { name: 'removeEmptyAttrs', active: true },
    { name: 'removeEmptyContainers', active: true },
    { name: 'removeUnusedNS', active: true },
    { name: 'removeDesc', active: true },
    { name: 'prefixIds', active: false },
  ])
}
