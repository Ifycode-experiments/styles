import HtmlWebpackPlugin from 'html-webpack-plugin';

const common = {
  entry: {
    //page entry point
    index: './src/index.js',

    //library (all styles) entry point
    styles: './src/library/js/styles.js'
  },
  plugins: [
     //create HTML file that includes reference to bundled js
     new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: ['index', 'styles'],
      inject: true,
      scriptLoading: 'blocking'
    })
  ]
}

export default common;