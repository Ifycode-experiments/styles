import chalk from 'chalk';

//srcServer.js
export const port = 4040;
export const portUrl = `http://localhost:${port}`;
export const openPort = chalk.greenBright('Open:', chalk.blueBright(portUrl));

//startMsg.js
export const startMsg = chalk.greenBright('Starting', chalk.blueBright('scss-helper-library') +' in dev mode');

//index.js
export const jsTestMsg = 'Testing javascript for scss-helper-library page works!';