import { merge } from 'webpack-merge';
import common from './webpack.common';
import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const commonProd = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
}


const config = merge(commonProd, common, {
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    //Generate an external css file
    new MiniCssExtractPlugin( {
      filename: '[name].css'
    })
  ]
});


const modularizedCSSconfig = merge(commonProd, {
  entry: {
    /*============================================
    NOTE: Always update the entry point in the dev 
    config with whatever new entry points you add 
    here.
    ============================================*/

    //library (partials styles) entry points
    reset: './src/library/js/partials/reset.js',
    display: './src/library/js/partials/display.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist/modules/'),
    publicPath: '/'
  },
  plugins: [
    //Generate an external css file
    new MiniCssExtractPlugin( {
      filename: '[name].css'
    })
  ]
});

export default [config, modularizedCSSconfig];