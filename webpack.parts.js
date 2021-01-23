const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

exports.loadSCSS = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
})

exports.loadHtml = () => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: {
            list: [
              {
                tag: 'img',
                attribute: 'src',
                type: 'src'
              }
            ]
          }
        }
      }
    ]
  }
})

exports.loadFileImages = ({ output }) => ({
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: output
            }
          }
        ]
      }
    ]
  }
});

exports.SCSSToCSSFiles = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
});

exports.loadBabel = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
});

exports.createNewHtml = ({ templatePath } = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      path: path.join(__dirname, 'html'),
      template: templatePath,
    })
  ]
})

exports.devServer = ({ port } = {}) => ({
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port,
    open: true,
    watchContentBase: true,
  }
})