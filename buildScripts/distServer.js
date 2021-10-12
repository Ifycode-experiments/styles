import express from 'express';
import { join } from 'path';
import open from 'open';
import { port, portUrl, openPort } from './customize/chalk';
import compression from 'compression';

const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(openPort);
    open(portUrl);
  }
});
