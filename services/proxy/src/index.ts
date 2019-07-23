import * as http from 'http';
import * as Koa from 'koa';
import * as Proxy from 'koa-proxy';

import 'dotenv/config';

const app = new Koa();
const server = http.createServer(app.callback());

app.use(Proxy({ host: process.env.GRAPHQL_URL, match: /^\/graphql/ }));
console.log(`Proxying /graphql to WARTHOG_APP_URL=${process.env.WARTHOG_APP_URL}`);

app.use(Proxy({ host: process.env.AUTH_URL, match: /^\/auth/ }));
console.log(`Proxying /auth to AUTH_URL=${process.env.AUTH_URL}`);

app.use(Proxy({ host: process.env.REACT_URL }));
console.log(`Proxying / to REACT_URL=${process.env.REACT_URL}`);

server.listen(process.env.PROXY_PORT);
console.log('Listening on port PROXY_PORT=' + process.env.PROXY_PORT);
