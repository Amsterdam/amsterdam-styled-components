const path = require('path')

const plugins = []

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: {
    app: './client.jsx',
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: {
                plugins: [
                  { removeViewBox: false },
                  { removeDimensions: true },
                  { removeDoctype: true },
                  { removeComments: true },
                  { removeMetadata: true },
                  { removeEditorsNSData: true },
                  { cleanupIDs: true },
                  { removeRasterImages: true },
                  { removeUselessDefs: true },
                  { removeUnknownsAndDefaults: true },
                  { removeUselessStrokeAndFill: true },
                  { removeHiddenElems: true },
                  { removeEmptyText: true },
                  { removeEmptyAttrs: true },
                  { removeEmptyContainers: true },
                  { removeUnusedNS: true },
                  { removeDesc: true },
                  { prefixIds: true },
                ],
              },
            },
          },
          'url-loader',
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].bundle.js',
  },
  plugins,
}
