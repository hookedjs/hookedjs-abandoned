// Can persist a single mobx object.
// For persisting an object with multiple mobx objects inside, look at
// MobxPersistDict
// For native, use localforage instead of localstorage

import {toJS, autorun} from "mobx";
import {set} from "mobx";

export const MobxPersist = async (key: string, observableInstance: any) => {

  const v = typeof localStorage !== "undefined" && localStorage.getItem(key);
  if (v) {
    // if (observableInstance.replace) observableInstance.replace(v);
    // else if (typeof v === "object") {
    //   Object.keys(v).forEach((k) => (observableInstance[k] = v[k]));
    // } else observableInstance = v;
    setTimeout(() => set(observableInstance, JSON.parse(v)), 300);
  }
  autorun(() => {
    // localStorage.setItem(key, change.object.toJSON());
    // localStorage.setItem(key, change.newValue);
    typeof localStorage !== "undefined" && localStorage.setItem(key, JSON.stringify(toJS(observableInstance)));
  });

};
