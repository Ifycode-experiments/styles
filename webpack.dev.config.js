import { resolve } from 'path';
import config from './webpack.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

config.mode = 'development';

config.devtool = 'inline-source-map';

config.output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'src'),
  publicPath: '/'
}

config.module = {
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

config.plugins = [
  //create HTML file that includes reference to bundled js
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
    scriptLoading: 'blocking'
  })
];

export default config;
