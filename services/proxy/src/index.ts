import * as http from 'http';
import * as Koa from 'koa';
import * as Proxy from 'koa-proxy';
const app = new Koa();

const server = http.createServer(app.callback());

app.use(Proxy({ host: process.env.APP_URL, match: /^\/graphql/ }));
console.log(`Proxying /graphql to ${process.env.APP_URL}`);

app.use(Proxy({ host: process.env.AUTH_URL, match: /^\/auth/ }));
console.log(`Proxying /auth to ${process.env.AUTH_URL}`);

app.use(Proxy({ host: process.env.REACT_URL }));
console.log(`Proxying / to ${process.env.REACT_URL}`);

const port = process.env.PROXY_PORT;
server.listen(port);
console.log('Listening on port ' + port);
