// Idle Blacksmith: Forge Tycoon (Android, live on Google Play since 2026-10-02).
// Facts come from apps/idle-blacksmith in the games monorepo: store/listing.json,
// DESIGN.md and src/game/balance.ts (every tunable number lives there).
export default {
  slug: "idle-blacksmith",
  iconBase: "idle-blacksmith",
  type: "game",
  genre: "Idle tycoon",
  name: "Idle Blacksmith: Forge Tycoon",
  alternateNames: [
    "Idle Blacksmith",
    "Forge Tycoon",
    "idle blacksmith game",
    "blacksmith tycoon",
    "idle forge game",
    "offline idle game",
    "anvil clicker game",
  ],
  playUrl: "https://play.google.com/store/apps/details?id=com.vilva.idleblacksmith",
  live: true,
  enOnly: true,
  pills: ["offline"],
  freePill: "Free Android game",
  operatingSystem: "Android 7.0 or later",
  datePublished: "2026-10-02",
  price: { amount: "0", label: "Free with optional one-time purchase" },
  color: "#C85A1A",
  category: "GameApplication",
  head: {
    title: "Idle Blacksmith: Forge Tycoon, an Offline Idle Game",
    description:
      "Tap the anvil to forge 40 weapons across 8 materials, hire apprentices who keep forging while you are away, then pass the forge for Embers. Free and offline.",
    keywords:
      "idle blacksmith, idle blacksmith game, forge tycoon, blacksmith tycoon, idle forge game, offline idle game, idle game no wifi, incremental game, clicker game, idle tycoon android, blacksmith game, offline earnings idle game, prestige idle game",
    ogTitle: "Idle Blacksmith: forge legendary weapons, even while you are offline",
    ogDescription:
      "Tap the anvil, sell blades for gold and hire smiths who keep working while you are away. A cozy idle tycoon for Android.",
  },
  h1: "Idle Blacksmith: an offline forge tycoon for Android",
  answer:
    "Idle Blacksmith is a free idle tycoon game for Android about running a blacksmith's forge. You tap the anvil to hammer weapons, sell them for gold, and spend the gold on apprentices who forge automatically and on workshop upgrades. There are 40 weapons across 8 materials, from Copper daggers to Starmetal spears. Your apprentices keep earning while the game is closed, and once a run has earned 1 billion gold you can Pass the Forge for Legacy Embers that boost every future run. It plays fully offline with no account. The game is free with optional ads, and the Royal Charter is a one-time purchase.",
  quickFacts: [
    ["Weapons", "40: 8 materials × 5 types"],
    ["Apprentices", "8, one per material"],
    ["Offline earnings", "Up to 2 hours, or 8 with the Royal Charter"],
    ["Price", "Free. Royal Charter is a one-time purchase, no subscription"],
  ],
  screenshotsTitle: "Screenshots",
  screenshots: [
    {
      src: "/apps/idle-blacksmith/01.webp",
      alt: "Idle Blacksmith forge with a steel spear on the anvil in front of a glowing furnace, 127M gold, a ×2 boost timer and the Forge tab listing Copper Dagger, Sword and Axe",
      caption: "Tap the anvil to forge",
    },
    {
      src: "/apps/idle-blacksmith/02.webp",
      alt: "Smiths tab with apprentices Pip the Copper Tinker, Bram the Bronze Caster and Greta the Iron Hand, their gold per second and hire costs, with ×1, ×10 and MAX buy options",
      caption: "Hire smiths who forge for you",
    },
    {
      src: "/apps/idle-blacksmith/03.webp",
      alt: "Upgrades tab with Hammer Weight for ×2 strike power, Bellows for ×1.5 faster apprentices and Merchant Guild for ×1.5 sale price",
      caption: "Upgrade the whole workshop",
    },
    {
      src: "/apps/idle-blacksmith/04.webp",
      alt: "Legacy tab showing 12 Legacy Embers for +60% income and a Pass the Forge button that resets gold, smiths and upgrades for more Embers",
      caption: "Pass the Forge for Legacy Embers",
    },
  ],
  howTo: {
    title: "How to play Idle Blacksmith",
    intro:
      "The loop is simple: forge, sell, reinvest. Early on you tap a lot; later your apprentices do most of the work and you come back to collect.",
    steps: [
      {
        name: "Tap the anvil",
        text: "Each tap is a hammer strike. When the weapon on the anvil is finished it sells for gold automatically and the next one starts. Some strikes land a Masterwork, which sells for 10× gold.",
      },
      {
        name: "Unlock better weapons",
        text: "In the Forge tab, spend gold to unlock the next weapon: dagger, sword, axe, mace and spear in each material, from Copper up to Starmetal. Newer weapons pay more per strike.",
      },
      {
        name: "Hire apprentices and buy upgrades",
        text: "In Smiths, hire apprentices who produce gold every second, even while the game is closed. Each one doubles its output at levels 10, 25, 50 and 100. In Upgrades, buy a heavier hammer, bellows, the merchant guild, the quench barrel and fame.",
      },
      {
        name: "Pass the Forge",
        text: "Once the current run has earned 1 billion gold, the Legacy tab lets you retire and hand the forge to your heir. Gold, apprentices and upgrades reset, but you keep Legacy Embers, each worth +5% income in every run after.",
      },
    ],
  },
  featuresTitle: "What's in the game",
  features: [
    {
      icon: "⚔️",
      title: "40 weapons, 8 materials",
      text: "Daggers, swords, axes, maces and spears in Copper, Bronze, Iron, Steel, Silver, Mithril, Dragonbone and Starmetal, unlocked in order.",
    },
    {
      icon: "✨",
      title: "Masterworks",
      text: "Every strike throws sparks, and a Masterwork sells for 10× gold. The Quench Barrel upgrade raises the chance by 3% a level.",
    },
    {
      icon: "🧑‍🏭",
      title: "8 apprentices",
      text: "From Pip the Copper Tinker to Astra the Star Smith. Each forges one material line automatically, with ×2 milestone bonuses as you level them.",
    },
    {
      icon: "🌙",
      title: "Offline earnings",
      text: "Come back to a Welcome back sheet with the gold your forge made while you were away: up to 2 hours, or 8 with the Royal Charter. Collect it, or double it with a short ad.",
    },
    {
      icon: "🔥",
      title: "Pass the Forge",
      text: "Prestige for Legacy Embers that permanently add +5% income each. A bigger run gives more Embers.",
    },
    {
      icon: "🎁",
      title: "Chest and boosts",
      text: "A free Forge Chest every 4 hours worth about 10 minutes of income, and the Royal Commission boost: ×2 income for 4 hours, stacking up to 12.",
    },
  ],
  intentsTitle: "Questions this game answers",
  intents: [
    {
      h: "Is there a blacksmith idle game for Android?",
      p: "Yes. Idle Blacksmith: Forge Tycoon is a free idle and tap game for Android where you run a forge: hammer weapons on the anvil, sell them for gold, hire apprentices and upgrade the workshop. It is a light, cozy tycoon game rather than a crafting RPG, so there is no combat.",
    },
    {
      h: "What is a good offline idle game?",
      p: "A good offline idle game keeps earning while you are away and does not need a connection to play. Idle Blacksmith does both: the whole game runs on the phone, and your apprentices earn for up to 2 hours while it is closed (8 hours with the Royal Charter). It works in flight mode; the internet is only used for optional ads and Google Play purchases.",
    },
    {
      h: "Do idle games earn money while the app is closed?",
      p: "Most do, up to a cap. In Idle Blacksmith the game works out your income per second when you return and pays it out for the time you were away, up to 2 hours on the free version and 8 hours with the Royal Charter. Absences under a minute are ignored.",
    },
    {
      h: "What does prestige mean in an idle game?",
      p: "Prestige means starting a run again in exchange for a permanent bonus. In Idle Blacksmith it is called Pass the Forge: after earning 1 billion gold in a run you can reset gold, apprentices and upgrades and receive Legacy Embers, each adding +5% to all income from then on. Later runs go much faster.",
    },
    {
      h: "How big do the numbers get?",
      p: "Very big. Gold is shown as K, M, B and T, then Qa, Qi, Sx, Sp, Oc, No and Dc, and after that as letter pairs (aa, ab and so on). Buy buttons switch between ×1, ×10 and ×Max so large purchases take one tap.",
    },
  ],
  compare: {
    title: "Idle Blacksmith vs typical online idle games",
    intro:
      "Many idle games need a connection, push timers and energy, or sell subscriptions and bundles. Idle Blacksmith is a smaller game with one optional purchase.",
    columns: ["", "Idle Blacksmith", "Typical online idle game"],
    rows: [
      ["Plays without internet", "✓", "Often not"],
      ["Earns while closed", "✓ 2 h, or 8 h with Royal Charter", "✓ Usually capped"],
      ["Prestige system", "✓ Pass the Forge", "✓ Usually"],
      ["Account or sign-in", "✗ None", "Often"],
      ["Energy or wait timers to keep playing", "✗", "Some"],
      ["Purchases", "One optional one-time purchase", "Often many, sometimes subscriptions"],
    ],
  },
  faqs: [
    {
      q: "Is Idle Blacksmith free?",
      a: "Yes, it is free to play with optional ads. The Royal Charter is a one-time purchase that removes ads, gives permanent ×2 income, lets you use boosts and chests without ads, and raises offline earnings from 2 to 8 hours. There is no subscription. The price is shown in Google Play.",
    },
    {
      q: "Does it work offline?",
      a: "Yes. The game runs entirely on your phone, and your forge keeps earning while it is closed. The internet is only used to load optional ads and for Google Play purchases.",
    },
    {
      q: "What ads does it show?",
      a: "Rewarded videos you choose to watch: to double your offline earnings, to start a Royal Commission boost, or to open the Forge Chest a second time. A full-screen ad can appear after you Pass the Forge, at most once every 10 minutes and not in your first sessions. There are no banner ads. In the EEA, UK and Switzerland, Google's consent form is shown before any ad loads, and Settings has Ad privacy options to change your choice.",
    },
    {
      q: "How long do offline earnings last?",
      a: "Up to 2 hours of income on the free version and up to 8 hours with the Royal Charter. When you return, a Welcome back sheet shows the amount, and you can collect it or double it.",
    },
    {
      q: "When can I Pass the Forge?",
      a: "Once your current run has earned 1 billion gold. You get 10 Legacy Embers at 1 billion and more for bigger runs (the count grows with the square root of the gold earned). Each Ember adds +5% to all income, permanently.",
    },
    {
      q: "What do the upgrades do?",
      a: "Hammer Weight doubles strike power per level, Bellows makes apprentices work 1.5× faster, Merchant Guild raises all sales by 1.5×, Quench Barrel adds 3% Masterwork chance per level, and Fame doubles all income.",
    },
    {
      q: "Do I need an account? Where is my progress saved?",
      a: "No account. Progress is saved on your phone every few seconds and when you leave the app. The developer collects no data; Google AdMob processes some data to serve ads, as explained in the privacy policy.",
    },
    {
      q: "Is there an iPhone version?",
      a: "Not yet. It is on Google Play for Android first. An iPhone version is planned; this page will link to the App Store when it is out.",
    },
  ],
  guides: [],
  related: [
    { name: "Mancala Offline: Board Game", href: "/apps/mancala-offline", blurb: "Classic Kalah against 4 computer levels or a friend, fully offline." },
    { name: "Pack It Perfect: Packing Game", href: "/apps/pack-it-perfect", blurb: "A cozy packing puzzle: fit every item into the suitcase across 60 levels." },
    { name: "Pounce Pad: Games for Cats", href: "/apps/cat-games", blurb: "Screen games for your cat to chase on iPhone and iPad." },
  ],
  disclaimer:
    "Idle Blacksmith is free to play with optional ads served by Google AdMob. The Royal Charter price is set in Google Play and may vary by country.",
};
