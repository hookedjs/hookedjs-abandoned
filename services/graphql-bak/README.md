# warthog-examples

Branches in this repo are examples is a [warthog](https://github.com/goldcaddy77/warthog) typeorm + apollo graphql framework demo app.

## Branches

### master - migrations

Features:
- migration generation and autorun on start
- modular style models
- fully functional dev environment with dockerized postgresql and adminer
- linting and prettify git commit hooks
- testing foundation 

### fullstack (coming soon)

Features:
- All of the features of the master branch, plus
- Authentication middleware using [Passport](https://github.com/jaredhanson/passport)
- middleware for serving a static website, such as React
- A hyper-modern React PWA that consumes the Warthog GraphQL API and authenticates with Passport
- Secured resolvers
- Git hooks to ensure code style and tests pass
- Secure password storage using bcrypt

## Status

Working and informative, except tests! The test file was borrowed from the [warthog-starter](https://github.com/goldcaddy77/warthog-starter/blob/master/test/user.integration.test.ts) project and are incompatible with the latest version of warthog.

## Setup

First, ensure Docker is running. Then,

```
yarn postgres:start
sleep 10
yarn bootstrap
yarn dev
```


## Bootstrapping the App

Running `yarn bootstrap` will do the following:

- Install packages
- Create the example DB
- Generate code in `generated` folder


## Typeorm Command Examples

- To bypass migrations and force a sync of schema
`yarn typeorm:cli schema:sync`

- Drop schema
`yarn typeorm:cli schema:drop`

- To create a shell of a migration
`yarn typeorm:cli migration:create -n <name of migration>`

- To generate a migration automatically
`yarn typeorm:cli migration:generate -n <name of migration>`

- Migrations are ran by default at start using .env, but you can manually run them with this command
`yarn typeorm:cli migration:run`

- Revert migration
`yarn typeorm:cli migration:revert`

- Query
`yarn typeorm:cli query 'select * from user;'`

- Test?
`yarn typeorm:cli schema:log`

