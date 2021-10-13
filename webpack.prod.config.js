import { resolve } from 'path';
import config from './webpack.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

config.mode = 'production';

config.devtool = 'source-map';

config.output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'dist'),
  publicPath: '/'
};

config.module = {
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
};

config.plugins = [
  //create HTML file that includes reference to bundled js
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
    scriptLoading: 'blocking'
  }),

  //Generate an external css file
  new MiniCssExtractPlugin()
];

export default config;
