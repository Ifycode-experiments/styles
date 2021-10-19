import webpack from 'webpack';
import config from '../webpack.prod';
import modularizedCSSconfig from  '../webpack.prod';
import chalk from 'chalk';

//Webpack run config
webpack(config).run( (err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
});

//Webpack run modularizedCSSconfig
webpack(modularizedCSSconfig).run( (err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
});
