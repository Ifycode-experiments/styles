import { merge } from 'webpack-merge';
import common from './webpack.common';
import { resolve } from 'path';

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    //library (partials styles) entry points
    reset: './src/library/js/partials/reset.js',
    display: './src/library/js/partials/display.js'
  },
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
  }
});

export default config;
