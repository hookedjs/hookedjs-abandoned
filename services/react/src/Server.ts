/**
 * Unlike normal http server frameworks like http-server or serve,
 * this server will serve gzip and brotli when available and
 * browser supported.
 */
import * as http from 'http';
import * as Koa from 'koa';
import * as StaticServer from 'koa-static-server';

import 'dotenv/config';

// @ts-ignore: ignore TS2351
const app = new Koa();

const server = http.createServer(app.callback());

app.use(
  StaticServer({
    notFoundFile: 'index.html',
    rootDir: __dirname + '/../build'
  })
);

server.listen(process.env.REACT_PORT);
console.log('Listening on port ' + process.env.REACT_PORT);
