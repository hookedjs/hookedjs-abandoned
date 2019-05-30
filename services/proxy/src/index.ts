import * as http from 'http';
import * as Koa from 'koa';
import * as Proxy from 'koa-proxy';
const app = new Koa();

const server = http.createServer(app.callback());

app.use(
  Proxy({
    host: `http://localhost:4100`,
    match: /^\/graphql/
  })
);
console.log('Proxying graphql to 4100');

app.use(Proxy({ host: `http://localhost:3000` }));
console.log('Proxying default to 3000');

server.listen(8080);
console.log('Listening on port 8080');
