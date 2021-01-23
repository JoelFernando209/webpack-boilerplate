const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const parts = require('./webpack.parts.js');

module.exports = merge(
  {
    mode: 'development',
    output: {
      publicPath: '',
      filename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  },
  common,
  parts.loadSCSS(),
  parts.devServer()
);