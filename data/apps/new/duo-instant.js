// Duo Instant (iOS, not on the App Store yet). English-only landing page.
// No App Store id yet, so `iosPlanned` marks it as an iPhone app and the page
// shows "Coming soon to the App Store" instead of a link that would 404.
//
// TODO(app-store): once the listing exists, replace APP_STORE_URL with the real
// https://apps.apple.com/us/app/duo-instant/id<ID> URL, add `appStoreId: "<ID>"`,
// set `live: true` here, and in data/catalog.js swap `iosSoon: true` for `ios`.
// Also add the app to data/appBlogRoster.json, like the other live iOS apps.
// No screenshots yet: `screenshots: []` hides the gallery, and the demo video
// falls back to /apps/duo-instant-logo.png.
export const APP_STORE_URL = "https://apps.apple.com/app/duo-instant"; // TODO: placeholder, app id not known yet

export default {
  slug: "duo-instant",
  iconBase: "duo-instant",
  name: "Duo Instant",
  alternateNames: [
    "Duo Instant camera",
    "instant film camera app",
    "instant camera app iphone",
    "instant print camera iphone",
    "iPhone Duo camera app",
    "iPhone Duo foldable camera",
  ],
  appStoreUrl: APP_STORE_URL,
  iosPlanned: true,
  live: false,
  enOnly: true,
  androidPlanned: false,
  pills: ["onDevice", "offline"],
  operatingSystem: "iOS 17 or later",
  datePublished: "2026-11-05",
  price: { amount: "4.99", label: "$4.99 one-time purchase" },
  paidPill: "$4.99 one-time",
  color: "#C2410C",
  category: "PhotographyApplication",
  head: {
    title: "Instant Film Camera for iPhone and iPhone Duo — Duo Instant",
    description:
      "An instant-film camera for iPhone. Take a shot and the print rolls out and develops over about 40 seconds. Built for iPhone Duo: close the phone and the print develops on the outer screen. $4.99 once, no ads, no account.",
    keywords:
      "instant camera app, instant film camera app, instant film iphone, instant print camera app, retro instant camera iphone, iphone duo camera app, iphone duo app, foldable iphone camera, instant photo frame app, film camera app no subscription",
    ogTitle: "Shoot, close the phone, watch the print develop: Duo Instant",
    ogDescription:
      "An instant-film camera for iPhone, built for iPhone Duo. Prints develop over about 40 seconds; shake to speed them up. $4.99 once, no subscription.",
  },
  h1: "An instant-film camera for iPhone, built for iPhone Duo",
  answer:
    "Duo Instant turns your iPhone into an instant-film camera. Take a shot and the print comes out and develops over about 40 seconds, like real instant film; shake the phone to develop it faster. On iPhone Duo, shoot with the phone open, then close it and the print rolls out on the outer screen and develops there. On any other iPhone, the print ejects by itself after the shot. Pick Color, B&W or Faded film, write a caption on the print, then save it to Photos or share it. $4.99 once: no subscription, no ads, no in-app purchases, no account.",
  quickFacts: [
    ["Price", "$4.99 once. No subscription, no ads, no in-app purchases"],
    ["Film looks", "Color, B&W, Faded"],
    ["Developing", "About 40 seconds; shake the phone to speed it up"],
    ["Requires", "iPhone, iOS 17 or later. Duo features need iPhone Duo with iOS 27.1"],
  ],
  screenshotsTitle: "Screenshots",
  screenshots: [],
  howTo: {
    title: "How to take an instant photo with Duo Instant",
    intro: "Point, shoot and wait for the print. On iPhone Duo, closing the phone is part of the fun.",
    steps: [
      { name: "Pick a film", text: "Choose Color, B&W or Faded, and turn the flash on if it is dark." },
      { name: "Take the shot", text: "Use the front or back camera. A film pack holds 10 shots and reloads for free." },
      { name: "Get the print", text: "On iPhone Duo, close the phone and the print rolls out on the outer screen. On other iPhones it ejects by itself." },
      { name: "Let it develop", text: "The print develops over about 40 seconds. Shake the phone to make it go faster." },
      { name: "Caption and keep it", text: "Write a caption on the print, then save the framed print to Photos, share it, or pin it to your prints wall." },
    ],
  },
  featuresTitle: "What it does",
  features: [
    { icon: "📷", title: "Prints that develop", text: "Each print develops over about 40 seconds, like real instant film. Shake the phone to speed it up." },
    { icon: "📱", title: "Made for iPhone Duo", text: "Shoot open, close the phone and the print develops on the outer screen. Unfold and the camera pops up out of the fold." },
    { icon: "🎞️", title: "Three film looks", text: "Color, B&W and Faded, plus a flash with its charge sound and the front or back camera." },
    { icon: "✍️", title: "Handwritten captions", text: "Write on each print, then save the framed print to Photos, share it, or delete it." },
    { icon: "📌", title: "Prints wall", text: "Your prints pinned to a cork board. Print any photo from your library too." },
    { icon: "🔊", title: "Real sounds and haptics", text: "Mechanical sounds and haptics on every shot. Mute for silent shooting; the haptics stay." },
  ],
  intentsTitle: "Questions this app answers",
  intents: [
    {
      h: "Is there an instant camera app for iPhone without a subscription?",
      p: "Duo Instant costs $4.99 once. There is no subscription, no ads, no in-app purchases and no account. Film packs are a mechanic of the camera, not something you buy: reloading is free.",
    },
    {
      h: "What does Duo Instant do on iPhone Duo?",
      p: "Take a shot with the phone open, then close it: the print rolls out on the outer screen and develops there. As you unfold the phone, the camera pops up out of the fold with a warm light leak and the viewfinder opens with the hinge. Half-folded on a table, the camera stands on the top half and prints onto the bottom half.",
    },
    {
      h: "Does it work on iPhones that don't fold?",
      p: "Yes. On any iPhone with iOS 17 or later, the print ejects by itself after the shot and develops on screen. Everything else, from film looks to captions and the prints wall, works the same.",
    },
    {
      h: "Can I turn a photo I already took into an instant print?",
      p: "Yes. Choose any photo with Apple's photo picker and the app prints it, frame and all. The picker shows only the photo you choose, so the app does not need access to your library.",
    },
  ],
  compare: {
    title: "Duo Instant vs a real instant camera and filter apps",
    intro: "A real instant camera gives you a physical print but costs money per shot. Filter apps add a frame, but the photo appears at once.",
    columns: ["", "Duo Instant", "Instant film camera", "Filter apps"],
    rows: [
      ["Print develops over time", "✓ About 40 seconds", "✓", "✗"],
      ["Cost per shot", "None", "Film for every shot", "None"],
      ["Physical print", "✗", "✓", "✗"],
      ["Handwritten caption on the print", "✓", "With a pen", "Varies"],
      ["Price", "$4.99 once", "Camera plus film", "Often a subscription"],
    ],
  },
  faqs: [
    {
      q: "How much does Duo Instant cost?",
      a: "$4.99, once. There is no subscription, no ads and no in-app purchases. Film packs hold 10 shots and reloading is free.",
    },
    {
      q: "Do I need an iPhone Duo?",
      a: "No. It works on any iPhone with iOS 17 or later; the print ejects by itself after the shot. The fold features, like the print rolling out on the outer screen when you close the phone, need iPhone Duo with iOS 27.1.",
    },
    {
      q: "How long does a print take to develop?",
      a: "About 40 seconds, like real instant film. Shake the phone to make it develop faster.",
    },
    {
      q: "Where are my photos stored?",
      a: "Only on your iPhone, in the app's own storage. The app makes no network requests at all. A print goes to your Photos library only when you tap Save.",
    },
    {
      q: "Can I shoot silently?",
      a: "Yes. Tap mute to turn off the sounds; the haptics stay on.",
    },
    {
      q: "Which languages does it support?",
      a: "20 languages.",
    },
    {
      q: "Is there an Android version?",
      a: "No. Duo Instant is iPhone-only.",
    },
  ],
  guides: [],
  related: [
    { name: "Night Cam: Stars & Aurora", href: "/apps/night-cam", blurb: "Free aurora forecast for your area and an iPhone camera for the Moon, stars and northern lights." },
    { name: "Teleprompter: Camera Overlay", href: "/apps/teleprompter-camera-overlay", blurb: "A free iPhone teleprompter that floats your script over the camera and scrolls as you speak." },
    { name: "Good Behavior Police Call", href: "/apps/police-call", blurb: "A friendly pretend call from Officer Pat or Officer Sam for bedtime, teeth and tidy-up. Free on iPhone." },
  ],
  disclaimer:
    "Duo Instant makes digital prints on your iPhone; it does not print on paper. It is not affiliated with any instant film or camera maker. iPhone is a trademark of Apple Inc.",
};
