const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const parts = require('./webpack.parts.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(
  {
    mode: 'production',
    output: {
      publicPath: '',
      filename: 'js/[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
      })
    ]
  },
  common,
  parts.SCSSToCSSFiles(),
  parts.loadBabel()
);