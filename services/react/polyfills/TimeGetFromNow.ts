// Commented out b/c trying ot avoid moment b/c huge payload
// import * as moment from "moment";

export function TimeGetFromNowLong(timeInMillis: number) {}

// export function TimeGetFromNowLong(timeInMillis: number) {
//   moment.updateLocale("en", {
//     relativeTime: {
//       future: "in %s",
//       past: "%s ago",
//       s: "seconds",
//       ss: "%s seconds",
//       m: "a minute",
//       mm: "%d minutes",
//       h: "an hour",
//       hh: "%d hours",
//       d: "a day",
//       dd: "%d days",
//       M: "a month",
//       MM: "%d months",
//       y: "a year",
//       yy: "%d years",
//     },
//   });
//   return moment(timeInMillis).fromNow();
// }
//
// export function TimeGetFromNowShort(timeInMillis: number) {
//   moment.updateLocale("en", {
//     relativeTime: {
//       future: "in %s",
//       past: "%s ago",
//       s: "seconds",
//       ss: "%ss",
//       m: "a minute",
//       mm: "%dm",
//       h: "an hour",
//       hh: "%dh",
//       d: "a day",
//       dd: "%dd",
//       M: "a month",
//       MM: "%dM",
//       y: "a year",
//       yy: "%dY",
//     },
//   });
//   return moment(timeInMillis).fromNow(true);
// }
