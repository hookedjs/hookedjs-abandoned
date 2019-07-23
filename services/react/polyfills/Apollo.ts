import ApolloClient from "apollo-boost";
import {ApiUrl} from "../config";

export {default as gql} from "graphql-tag";

export const Apollo = new ApolloClient({
  uri: ApiUrl,
});

// Only use Axios cached if the performance benefits outweigh the 200kb payload.
// import {setup} from "axios-cache-adapter";
// import * as localforage from "localforage";
// import memoryDriver from "localforage-memoryStorageDriver";
//
// // Create `axios` instance with pre-configured `axios-cache-adapter` attached to it
// export const AxiosCached = setup({
//   baseURL: "/api",
//   timeout: 10000,
//
//   // `axios-cache-adapter` options
//   cache: {
//     maxAge: 15 * 60 * 1000,
//     store: localforage.createInstance({
//       driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE, memoryDriver._driver],
//       name: "axios",
//     }),
//   },
// });
