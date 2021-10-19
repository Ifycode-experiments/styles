import { merge } from 'webpack-merge';
import common from './webpack.common';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
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
  },
  plugins: [
    //Generate an external css file
    new MiniCssExtractPlugin( {
      filename: '[name].css'
    }),
  
    //create HTML file that includes reference to bundled js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: ['index', 'styles'],
      inject: true,
      scriptLoading: 'blocking'
    })
  ]
});

export default config;