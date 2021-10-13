
const config = {
  entry: {
    index: './src/index.js',
    library: './src/library.js'
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
  },
  optimization: {},
  module: {},
  plugins: [],
}

export default config;