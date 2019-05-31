# HookedJS

Is a Full-Stack typescript+graphql+passport+react framework.

## Install

Step 1: Install homebrew
Step 2: Install nvm
Step 3: Install Docker

Then, 

```
brew install gnu-sed
brew install postgres
nvm install 12
nvm use 12
npm i -g solidarity webpack typescript yarn
yarn lerna:bootstrap
```

## Development

A local env can be launched by (1) starting Docker and (2) running 

```
yarn bootstrap
yarn dev
```

## Environmental Variables

This framework uses env variables and .env files to control app settings, 
like ports and database connections. Basically, put your developer settings
inside of .env.default, and the app will use those settings by default if
they are not set in the shell already. In other words, you can easily 
override the .env.default settings simply by setting the variable in the 
shell before calling `yarn bootstrap` or `yarn env:sync`


## Beta Punchlist

- [x] Create new architecture in new repo
- [ ] Get GraphQL working
- [ ] Add react service using create-react-app
- [ ] Add auth service based on my boilerplate
- [ ] Implement auth UX
- [ ] Implement todos UX
- [ ] Make GraphQL comms typesafe
