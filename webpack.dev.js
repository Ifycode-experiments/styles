import { merge } from 'webpack-merge';
import common from './webpack.common';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '/src/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader', 
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    //create HTML file that includes reference to bundled js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      scriptLoading: 'blocking'
    })
  ]
});

export default config;
