const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  externals: [require('webpack-node-externals')()],
  devtool: 'inline-cheap-module-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../'),
      '~': path.resolve(__dirname, '../')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          transformToRequire: {
            video: '',
            source: '',
            img: '',
            image: ''
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}