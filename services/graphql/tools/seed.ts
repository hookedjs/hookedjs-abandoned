import * as Faker from 'faker';

import { Binding } from '../generated/binding';
import { loadConfig } from '../src/config';
import { Logger } from '../src/logger';
import { User, UserStatus } from '../src/models';
import { getServer } from '../src/server';

loadConfig();
if (process.env.NODE_ENV !== 'development' && process.env.WARTHOG_DB_OVERRIDE !== 'true') {
  throw new Error(
    'Seeding only available in development environment, you can override this by setting WARTHOG_DB_OVERRIDE environment variable to `true`'
  );
}

async function seedDatabase() {
  // Turn off logging to seed database
  process.env.WARTHOG_DB_LOGGING = 'none';

  const server = getServer({ introspection: true, openPlayground: false });
  // await server.start();

  let binding: Binding;
  try {
    binding = ((await server.getBinding()) as unknown) as Binding;
  } catch (error) {
    Logger.error(error);

    return process.exit(1);
  }

  try {
    const user: User = await binding.mutation.createUser(
      {
        data: {
          email: Faker.internet.email(),
          firstName: 'Test User',
          status: UserStatus.ACTIVE
        }
      },
      `{ id firstName }`
    );

    Logger.info(user);

    const BATCH_SIZE = 10;

    let postBuffer: any[] = [];
    let batchNumber = 0;
    for (let i = 0; i < 200; i++) {
      postBuffer.push({
        title: Faker.lorem.sentence(5),
        userId: user.id
      });

      if (postBuffer.length >= BATCH_SIZE) {
        Logger.info(`Writing posts batch ${batchNumber++}`);
        await binding.mutation.createManyPosts(
          {
            data: postBuffer
          },
          `{ id title }`
        );
        postBuffer = [];
      }
    }
  } catch (error) {
    Logger.logGraphQLError(error);
  }

  return binding.query.posts({ limit: 10 });
}

seedDatabase()
  .then(result => {
    Logger.info(result);
    return process.exit(0);
  })
  .catch(err => {
    Logger.error(err);
    return process.exit(1);
  });
