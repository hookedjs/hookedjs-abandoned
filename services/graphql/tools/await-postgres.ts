import { Client } from 'pg';

console.log('Awaiting postgres...');
setInterval(() => {
  const client = new Client({
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    password: process.env.PG_PASSWORD,
    port: 5432,
    user: process.env.PG_USERNAME
  });
  client
    .connect()
    .then(() => {
      console.log('Postgres is ready!');
      process.exit();
    })
    .catch(() => null);
}, 200);
