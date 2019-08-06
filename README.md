# HookedJS

Is a Full-Stack typescript+graphql+passport+react framework for Web, Native and beyond.

## Status

Pre-Release: Currently very unstable, but feel free to browse. 

## Install

As of now, MacOS is required in order to develop IOS apps.

1. [Install homebrew](https://brew.sh/)
2. [Install nvm](https://github.com/nvm-sh/nvm#install--update-script)
3. [Install Docker](https://docs.docker.com/docker-for-mac/install/)
1. Install Xcode from the App Store and open it to accept the user agreement.
2. Follow [the official React Native instructions](https://facebook.github.io/react-native/docs/getting-started.html) to configure your machine for IOS and Android using the "React Native CLI Quickstart" tab, NOT the "Expo CLI Quickstart" tab.

Then, 

```
brew install gnu-sed
brew install postgres
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
nvm install 12
nvm use 12
npm i -g solidarity webpack typescript yarn
yarn bootstrap
```

## Development

A local development env can be launched by (1) starting Docker and (2) running 

```
yarn dev
```

### Native Apps

This does not launch IOS or Android emulators. To launch those, go to services/reactnative and see the package.json run commands.

Tips for Android
1. ⌘M opens the developer menu in the emulator. From there, enable hot reload.
1. For Android, You shouldn't have to, but you may need to enable developer mode in Android Emulator

Tips for IOS
1. ⌘D opens the developer menu in the emulator. From there, enable hot reload.

## Environmental Variables

This framework uses env variables and .env files to control app settings, 
like ports and database connections. Basically, put your developer settings
inside of .env, and the app will use those settings by default if
they are not set in the shell already. In other words, you can easily 
override the .env settings simply by setting the variable in the 
shell before calling `yarn bootstrap` or `yarn env:sync`


## Beta Punchlist

- [x] Create new architecture in new repo
- [ ] Get GraphQL working
- [x] Add react service using create-react-app
- [ ] Add auth service based on my boilerplate
- [ ] Implement auth UX
- [ ] Implement todos UX
- [ ] Make GraphQL comms typesafe
- [x] Install React Native standard
- [x] Install React Native version Expo.
