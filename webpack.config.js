import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      scriptLoading: 'blocking'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  /*========================================
  config properties to be changed in dev or 
  prod. Create these here 1st to avoid editor
  warnings
  =========================================*/
  mode: '',
  devtool: '',
  output: {
    publicPath: ''
  }
}

export default config;