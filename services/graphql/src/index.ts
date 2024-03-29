import 'reflect-metadata';

import { loadConfig } from './config';
import { Logger } from './logger';

import { getServer } from './server';

async function bootstrap() {
  await loadConfig();

  const server = getServer();
  await server.start();
}

bootstrap().catch((error: Error) => {
  Logger.error(error);
  if (error.stack) {
    Logger.error(error.stack.split('\n'));
  }
  process.exit(1);
});
