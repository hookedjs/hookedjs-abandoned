import {autorun, computed, observable} from "mobx";
import {CookieConsentIsEagerlyAccepted} from "../config";


class CookiesClass {
  @observable
  // @ts-ignore: Ignore cookie type
  consent:  "accepted" | "rejected" | "unconfirmed" =
    document.cookie.replace(/(?:(?:^|.*;\s*)cookieConsent\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    || "unconfirmed";

  @computed get allowed() {
    return (
      (this.consent === "accepted")
      || (this.consent === "unconfirmed" && CookieConsentIsEagerlyAccepted)
    );
  }
}
export const Cookies = new CookiesClass();

// MobxPersist("CookieConsentState", Cookies).then(() => {
autorun(() => {
  // document.cookie = `cookieRejected=${state.reject}; domain=${WebDomain}`;
  document.cookie = `cookieConsent=${Cookies.consent}`;
});
