import { resolve } from 'path';
import config from './webpack.config';

config.mode = 'development';

config.devtool = 'inline-source-map';

config.output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'src'),
  publicPath: '/'
}

export default config;
