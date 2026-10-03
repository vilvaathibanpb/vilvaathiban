// One file per app or game added in Oct 2026 (English-only landing pages).
// Each file exports a full English entry in the same shape as ./extra/en.js.
// Fields this generation adds on top of that shape:
//   type: "game"          -> /games breadcrumb, VideoGame schema, "All games" link
//   genre                 -> schema.org genre for games
//   androidPlanned: false -> no "Android coming" placeholder for iOS-only apps
//   freePill              -> overrides the "Free iOS app" pill text
// An entry without appStoreId is Android-only; playUrl is set only once live.
const ENTRIES = [
  require("./police-call").default,
  require("./whisker-check").default,
  require("./cat-games").default,
  require("./tooth-fairy-cam").default,
  require("./expiry-date-tracker").default,
  require("./mancala-offline").default,
  require("./idle-blacksmith").default,
  require("./pack-it-perfect").default,
];

export default Object.fromEntries(ENTRIES.map((e) => [e.slug, e]));
