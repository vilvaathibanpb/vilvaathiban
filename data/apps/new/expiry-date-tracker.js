// Expiry Date Tracker: Scanner (Android, live on Google Play since 2026-09-24).
// English-only landing page: no /<lang>/apps/expiry-date-tracker pages.
export default {
  slug: "expiry-date-tracker",
  iconBase: "expiry-date-tracker",
  name: "Expiry Date Tracker: Scanner",
  alternateNames: [
    "Expiry Tracker",
    "Expiry Date Tracker",
    "expiry date reminder app",
    "food expiration tracker",
    "medicine expiry tracker",
    "barcode expiry date scanner",
    "best before date app",
  ],
  playUrl: "https://play.google.com/store/apps/details?id=com.vilva.expirytracker",
  live: true,
  enOnly: true,
  pills: ["offline"],
  freePill: "Free Android app",
  operatingSystem: "Android 7.0 or later",
  datePublished: "2026-09-24",
  price: { amount: "0", label: "Free with a banner ad, optional $1.99 one-time ad removal" },
  color: "#14504B",
  category: "UtilitiesApplication",
  head: {
    title: "Expiry Date Tracker App with Barcode Scanner for Android",
    description:
      "Free Android app to track expiry dates on food, medicine and cosmetics. Scan a barcode, set the date, get a reminder before it expires. No account needed.",
    keywords:
      "expiry date tracker, expiry date reminder app, expiration date tracker, food expiration tracker, food expiry reminder, medicine expiry tracker, medicine expiry reminder, barcode expiry date scanner, expiry date scanner app, best before date app, fridge inventory app, pantry tracker, cosmetics expiry tracker, reduce food waste app, expiry tracker android, expiry tracker no account",
    ogTitle: "Know what expires before it does: Expiry Date Tracker for Android",
    ogDescription:
      "Scan a barcode or type a name, set the expiry date with one tap, and get reminded before food, medicine or sunscreen goes off. No account, no item limit.",
  },
  h1: "Expiry date tracker with barcode scanner and reminders",
  answer:
    "Expiry Date Tracker is a free Android app that reminds you before food, medicine, cosmetics or anything else with a date on it expires. Scan the barcode and the product name fills in (from your own past scans or the free Open Food Facts database), or type the name. Set the expiry date with quick chips from one week to one year, and the app schedules reminders on your phone: by default 3 days before and on the day, at 09:00. The list is grouped into expired, expiring today, this week and later. There is no account, no sign-up and no item limit, and your list stays on the phone.",
  quickFacts: [
    ["Price", "Free with a small banner ad. Remove ads once for $1.99, no subscription"],
    ["Item limit", "None"],
    ["Account", "Not needed. Items stay on your phone"],
    ["Requires", "Android 7.0 or later"],
  ],
  screenshotsTitle: "Screenshots",
  screenshots: [
    {
      src: "/apps/expiry-date-tracker/01.webp",
      alt: "Expiry Tracker list grouped into Expired, This week and Later: sourdough bread expired 2 days ago, chicken breast in 1 day, Greek yoghurt in 2 days, sunscreen in 30 days, paracetamol in 181 days",
      caption: "Grouped by what needs you first",
    },
    {
      src: "/apps/expiry-date-tracker/02.webp",
      alt: "New item screen with the name Olive oil, a Scan barcode button, an expiry date with minus and plus buttons, quick chips from +1w to +1y, and Fridge, Freezer, Pantry, Medicine and Other location chips",
      caption: "Scan the barcode or type the name",
    },
    {
      src: "/apps/expiry-date-tracker/03.webp",
      alt: "Settings screen with reminder options 7 days before, 3 days before, 1 day before or on the day, reminder times from 07:00 to 20:00, and a Remove ads button",
      caption: "Pick the days ahead and the hour",
    },
  ],
  howTo: {
    title: "How to track expiry dates on Android",
    intro: "Add each item once, with its date, and let the phone remind you. It takes a few seconds per item.",
    steps: [
      { name: "Scan or type the item", text: "Tap Scan a barcode and point the camera at the product. The name fills in if you scanned it before or if it is in Open Food Facts. No barcode, or no match? Tap Add by hand and type the name." },
      { name: "Set the expiry date", text: "Tap a quick chip (+1w, +2w, +1m, +3m, +6m, +1y), nudge the date with the minus and plus buttons, or type it as YYYY-MM-DD. The screen shows how many days are left." },
      { name: "Say where it is", text: "Optionally pick Fridge, Freezer, Pantry, Medicine or Other, and add a quantity, brand or note. Then tap Save." },
      { name: "Choose when to be reminded", text: "In Settings, pick 7 days, 3 days or 1 day before (each also reminds you on the day), or on the day only, and the hour: 07:00, 08:00, 09:00, 12:00, 18:00 or 20:00." },
      { name: "Tick it off when it is gone", text: "Tap the tick next to an item to mark it used. Its reminders are cancelled." },
    ],
  },
  featuresTitle: "What it does",
  features: [
    { icon: "📷", title: "Barcode scan fills the name", text: "Reads EAN, UPC, Code 128, Code 39 and ITF-14 barcodes. A barcode you have scanned before fills in from your own history; a new one is looked up in the free Open Food Facts database." },
    { icon: "📅", title: "One-tap expiry dates", text: "Quick chips for one week, two weeks, one month, three months, six months and a year, plus minus and plus buttons for the exact day." },
    { icon: "🔔", title: "Reminders on the phone", text: "7, 3 or 1 day before plus on the day, at the hour you choose. Scheduled on the device, so they work with no signal." },
    { icon: "🗂️", title: "Grouped by urgency", text: "Expired, expiring today, this week and later, so what needs attention is at the top. Each item can be marked Fridge, Freezer, Pantry, Medicine or Other." },
    { icon: "🔒", title: "No account, no limit", text: "No sign-up and no cap on items. The list lives in a database on your phone and the app works offline." },
    { icon: "🌍", title: "15 languages", text: "English, Spanish, Portuguese, Hindi, Arabic, Chinese, Russian, Japanese, French, German, Indonesian, Korean, Turkish, Italian and Vietnamese." },
  ],
  intentsTitle: "Questions this app answers",
  intents: [
    { h: "Is there an app that reminds me when food is about to expire?", p: "Yes. Add the item with its use-by or best-before date and Expiry Date Tracker sends a notification before that day and again on the day. By default that is 3 days before at 09:00; you can switch to 7 days or 1 day before, or on the day only, and pick another hour." },
    { h: "How do I keep track of medicine expiry dates?", p: "Add each medicine with the date printed on the box and tag it Medicine. The list shows how many days each one has left, and a reminder arrives before it runs out of date, which helps when restocking a first-aid kit or medicine cabinet. The app only tracks dates; it does not give dosage or medical advice." },
    { h: "Can a barcode scanner read the expiry date?", p: "Usually not. The standard EAN and UPC barcodes on retail packs carry a product number, not the expiry date, which is why most expiry apps ask you to enter the date. Expiry Date Tracker uses the barcode to fill in the product name, then you set the date with one tap on a quick chip." },
    { h: "Is there an expiry tracker that does not need an account?", p: "Expiry Date Tracker has no account, no sign-up and no login of any kind. Items are saved in a database on your phone, and there is no limit on how many you can add. The only optional network call for your items is the barcode lookup, which sends Open Food Facts the barcode number and nothing else." },
    { h: "How do I track what is in my fridge, freezer and pantry?", p: "Tag each item Fridge, Freezer or Pantry when you add it. The list then shows each item's location next to its name, sorted by the date it expires, so you see what to eat first instead of finding it after it has gone off." },
    { h: "Can I track sunscreen, cosmetics or other non-food dates?", p: "Yes. Nothing in the app is specific to food. Sunscreen, make-up, contact lens solution, documents and renewals all work: use Other as the location and the note field for details." },
  ],
  compare: {
    title: "Expiry Date Tracker vs calendar reminders and account-based expiry apps",
    intro: "A phone calendar can remind you of a date, but it does not know products or sort by what expires first. Many expiry apps ask you to sign in, and some cap free items or use a subscription. Expiry Date Tracker does not sync between phones or share a list with your household.",
    columns: ["", "Expiry Date Tracker", "Calendar reminders", "Account-based expiry apps"],
    rows: [
      ["Barcode fills in the product name", "✓", "✗", "Usually"],
      ["List sorted by what expires first", "✓", "✗", "✓"],
      ["No account needed", "✓", "✓", "Often required"],
      ["No item limit", "✓", "✓", "Some cap free items"],
      ["Works offline", "✓", "✓", "Varies"],
      ["Sync or share with family", "✗", "Via a shared calendar", "Often"],
      ["Price", "Free with a banner ad, $1.99 once to remove it", "Free", "Often a subscription"],
    ],
  },
  faqs: [
    { q: "Is Expiry Date Tracker free?", a: "Yes. Every feature is free and there is no item limit. The free version shows one small banner ad. A single optional one-time purchase of $1.99 (shown in your local currency on Google Play) removes it. There is no subscription and nothing is locked behind a paywall." },
    { q: "Does scanning a barcode set the expiry date?", a: "No. Standard product barcodes do not contain the expiry date. Scanning fills in the product name and brand when they are known, and you set the date yourself with a quick chip or the minus and plus buttons." },
    { q: "Why did a scan not fill in the name?", a: "The app first checks barcodes you have saved before, then asks the free Open Food Facts database. Household and medicine barcodes are often missing there, and the lookup is skipped when you are offline. Type the name once and the next scan of that barcode fills it in automatically." },
    { q: "Where is my data stored?", a: "In a database on your phone. There is no account, no cloud and no server, so your items never leave the device. The free version uses Google AdMob to show its banner ad; see the privacy policy for what the ad SDK collects." },
    { q: "Does it work offline?", a: "Yes. Adding items, the list and reminders all work with no connection, because reminders are scheduled on the phone itself. Only the barcode name lookup needs the internet; without it you type the name." },
    { q: "Why am I not getting reminders?", a: "Android must allow notifications for the app, and on Android 12 and later also Alarms and reminders. Battery optimisation on some phones can delay alarms, so allow the app to run in the background. Changing the reminder setting only affects items you add or edit afterwards." },
    { q: "Can I move my list to a new phone or share it?", a: "There is no sync or sharing, because there is no account. The list is included in your Android or Google device backup if backups are turned on, which restores it on a new phone." },
    { q: "Is there an iPhone version?", a: "There is no iPhone version yet. Expiry Date Tracker is Android-only for now." },
  ],
  guides: [],
  related: [
    { name: "Warranty Tracker & Receipt Log", href: "/apps/warranty-tracker", blurb: "Photograph a receipt, set the warranty length, get reminded before it expires. Offline, one-time purchase." },
    { name: "Unit Price Calculator & Tax", href: "/apps/unit-price-calculator", blurb: "Which pack is cheaper per kg or litre, stacked discounts, sales tax, cart budget and bill splitting. Free." },
    { name: "Caffeine Tracker: Curfew", href: "/apps/caffeine-tracker", blurb: "See how much caffeine is still in you and the latest time for your last coffee. Free, optional one-time Pro." },
  ],
  disclaimer:
    "Expiry Date Tracker reminds you of the dates you enter. Always check the label and the product itself before eating or using it, and follow the advice on medicine packaging. Product names come from Open Food Facts, which is not affiliated with this app.",
};
