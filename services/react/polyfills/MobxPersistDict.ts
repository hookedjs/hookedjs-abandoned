// Can persist a class/dictonary of mobx objects
// For native, use localforage instead of localstorage

import {action, autorun} from "mobx";

export const MobxPersistDict = action(async (store: any) => {
  for (let fieldName of store.persistedFields || []) {
    const storageKey = `${store.constructor.name}.${fieldName}`;
    // console.log(`mobx.StoreWrapper.hydrate: Hydrating ${storageKey}`);
    // @ts-ignore: Hydrate no index signature
    const storedValue = JSON.parse((localStorage.getItem(storageKey)) as any);
    if (storedValue) store[fieldName] = storedValue;
    autorun(() => {
      // console.log(`mobx.StoreWrapper.hydrate: Setting ${storageKey} to ${store[fieldName]}`);
      // @ts-ignore: Hydrate no index signature
      localStorage.setItem(storageKey, JSON.stringify(store[fieldName]));
    });
  }
  store.isHydrated = true;
});
