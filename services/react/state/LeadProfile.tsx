import {observable, reaction, set} from "mobx";
import {Repeat} from "../polyfills/Repeat";
import {MobxPersist} from "../polyfills/MobxPersist";

export const LeadProfileClean = {
  contactMethod: "email",
  name: "",
  email: "",
  phone: "",
};

export const LeadProfile = observable(LeadProfileClean);
export const Reset = () => set(LeadProfile, LeadProfileClean);
MobxPersist("LeadProfile", LeadProfile);
// reaction(() => AppMeta.version, () => Repeat(Reset, 200, 4));
