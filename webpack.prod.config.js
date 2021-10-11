import { resolve } from 'path';

import config from './webpack.config';

config.mode = 'production';

config.devtool = 'source-map';

config.output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'dist')
}

export default config;
