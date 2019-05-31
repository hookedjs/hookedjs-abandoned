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
      // Success! Wait 10 seconds to ensure that if it restarts, which
      // it often does once on build, we'll continue after it restarts.
      setTimeout(() => {
        console.log('Postgres is ready!');
        process.exit();
      }, 10000);
    })
    .catch(() => null);
}, 200);
