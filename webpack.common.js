const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const parts = require('./webpack.parts.js');

const dashboardChunk = ['dashboard'];

let htmlPageNames = [
  ['index', ['index']]
];

let multipleHtmlPlugins = htmlPageNames.map(info => {
  const [ nameHTML, chunks ] = info;
  
  if(chunks) {
    return new HtmlWebpackPlugin({
      template: `./src/html/${nameHTML}.html`,
      filename: `${nameHTML}.html`,
      chunks
    })
  } else {
    return new HtmlWebpackPlugin({
      template: `./src/html/${nameHTML}.html`,
      filename: `${nameHTML}.html`,
      chunks: []
    })
  }
});

module.exports = merge(
  {
    entry: {
      index: './src/js/index.js'
    },
    plugins: [].concat(multipleHtmlPlugins)
  },
  parts.loadHtml(),
  parts.loadFileImages({ output: 'assets' })
);