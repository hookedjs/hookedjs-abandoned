import {autorun} from "mobx";
import {GetGoogleTagManagerTag} from "../config";
import {Sleep} from "./Sleep";
import {Cookies} from "../state/Cookies";

class GoogleTagManagerClass {
  public awaitReady = async () => {
    // @ts-ignore: window variable
    while (!window['dataLayer']) await Sleep(2000);
  };

  init = autorun(async () => {
    // @ts-ignore: window variable
    if (!Cookies.allowed || window["dataLayer"]) return;
    await eval(GetGoogleTagManagerTag());
  });

  dataLayer = {
    push: async (event: any) => {
      if (!Cookies.allowed) return;
      await this.awaitReady();
      // @ts-ignore: window variable
      window['dataLayer'].push(event);
    },
    // @ts-ignore: window variable
    get: () => window['dataLayer'] as any[],
  }
}

export const GoogleTagManager = new GoogleTagManagerClass();
