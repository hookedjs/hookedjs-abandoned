// @ts-ignore: Ignore no declaration
import { format, getPhoneInternational, INTERNATIONAL, validate as _validate } from "@vtex/phone/phone-all-countries";

function normalize (phoneNumber: string, defaultCountryCode: number = 1): string {
  let normalized = phoneNumber;

  if (!normalized.includes("+")) normalized = `+${defaultCountryCode}${normalized}`;

  normalized = format(getPhoneInternational(normalized), INTERNATIONAL);
  return normalized ? normalized.replace(/ /g, "") : "";
}

function validate (phoneNumber: string): boolean {
  return !!normalize(phoneNumber);
}

export const PhoneUtils = {
  normalize,
  validate
};
