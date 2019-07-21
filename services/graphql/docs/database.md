# Deploying to Heroku

This assumes you've already built an app and have some DB migrations ready to be run on the remote DB.

## Install the CLI

```bash
brew tap heroku/brew && brew install heroku
```

## Login to CLI

```bash
heroku login
```

## Create App in Heroku

```bash
heroku create warthog-starter
heroku git:remote -a warthog-starter
heroku addons:create heroku-postgresql:hobby-dev
```

## Update env.yml

Get your connection config by running `heroku pg:credentials:url`.  This will give you something like:

```bash
Connection information for default credential.
Connection info string:
   "dbname=d5h4602ejfseiv host=ec2-54-243-47-196.compute-1.amazonaws.com port=5432 user=jwgaa6b0dcb9yfs password=12345678901234567890abcdefghijklmnopqrstuvwxyz sslmode=require"
Connection URL:
   postgres://jwgaa6b0dcb9yfs:12345678901234567890abcdefghijklmnopqrstuvwxyz@ec2-54-243-47-196.compute-1.amazonaws.com:5432/d5h4602ejfseiv
```

Take the information from the connection string and export the following environment variables so that they're available to in your local environment:

```bash
export WARTHOG_DB_HOST=ec2-54-243-47-196.compute-1.amazonaws.com
export WARTHOG_DB_DATABASE=d5h4602ejfseiv
export WARTHOG_DB_USERNAME=jwgaa6b0dcb9yfs
export WARTHOG_DB_PASSWORD=12345678901234567890abcdefghijklmnopqrstuvwxyz
```

This will make your secrets available locally.  To add them to Heroku so that your app server can connect to your DB server, do use heroku config to add the ENV vars to Heroku:

```bash
heroku config:set WARTHOG_DB_HOST=ec2-54-243-47-196.compute-1.amazonaws.com
heroku config:set WARTHOG_DB_DATABASE=d5h4602ejfseiv
heroku config:set WARTHOG_DB_USERNAME=jwgaa6b0dcb9yfs
heroku config:set WARTHOG_DB_PASSWORD=12345678901234567890abcdefghijklmnopqrstuvwxyz
```

## Build app and migrate database

```bash
yarn build && WARTHOG_ENV=development:remote_db yarn dotenv:generate && warthog db:migrate
```

## Run the server and issue a query

Run `yarn start` and navigate to [http://localhost:4100/graphql](http://localhost:4100/graphql)

Run the following query to make sure everything is wired up correctly:

```graphql
query {
  users {
    id
    firstName
    lastName
    createdAt
  }
}
```

If you see the following response, you're good:

```graphql
{
  "data": {
    "users": []
  }
}
```

## Heroku App Server

Will run `npm start` by default.  you 