import { resolve } from 'path';
import config from './webpack.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

config.mode = 'production';

config.devtool = 'source-map';

config.output = {
  filename: '[name].bundle.js',
  path: resolve(__dirname, 'dist'),
  publicPath: '/'
};

/* 
//Looks like css split works with or 
//without this optimization setup:

config.optimization = {
  splitChunks: {
    cacheGroups: {
      indexStyles: {
        type: 'css/mini-extract',
        name: 'index',
        chunks: (chunk) => {
          return chunk.name === 'index';
        },
        enforce: true
      },
      helperLibraryStyles: {
        type: 'css/mini-extract',
        name: 'library',
        chunks: (chunk) => {
          return chunk.name === 'library';
        },
        enforce: true
      }
    }
  }
}*/

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
  //Generate an external css file
  new MiniCssExtractPlugin( {
    filename: '[name].css'
  }),

  //create HTML file that includes reference to bundled js
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
    scriptLoading: 'blocking'
  })
];

export default config;
