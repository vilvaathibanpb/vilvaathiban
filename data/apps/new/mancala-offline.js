// Mancala Offline: Board Game (Android, live on Google Play since 2026-10-02).
// Facts come from apps/mancala in the games monorepo: store/listing.json,
// DESIGN.md and src/game (rules.ts, ai.ts, campaign.ts, cosmetics.ts, puzzle.ts).
export default {
  slug: "mancala-offline",
  iconBase: "mancala-offline",
  type: "game",
  genre: "Board game",
  name: "Mancala Offline: Board Game",
  alternateNames: [
    "Mancala Offline",
    "Mancala",
    "Kalah",
    "mancala game app",
    "mancala offline game",
    "mancala board game android",
    "mancala 2 player",
    "mancala against computer",
  ],
  playUrl: "https://play.google.com/store/apps/details?id=com.vilva.mancala",
  live: true,
  enOnly: true,
  pills: ["offline"],
  freePill: "Free Android game",
  operatingSystem: "Android 7.0 or later",
  datePublished: "2026-10-02",
  price: { amount: "0", label: "Free with optional one-time purchase" },
  color: "#A8673A",
  category: "GameApplication",
  head: {
    title: "Mancala Offline: Classic Kalah Board Game for Android",
    description:
      "Play Mancala (Kalah) offline on Android: 4 computer levels, a World Tour of 12 opponents, a daily puzzle and 2-player pass and play. Free, no account.",
    keywords:
      "mancala offline, mancala game app, mancala app android, how to play mancala, mancala rules, kalah rules, kalah game, mancala against computer, mancala 2 player, mancala pass and play, offline board game, mancala strategy, free mancala game",
    ogTitle: "Mancala Offline: classic Kalah on a wooden board, no internet needed",
    ogDescription:
      "Play Mancala against 4 computer levels or a friend on one phone. World Tour, daily puzzle and boards to unlock. Free on Android.",
  },
  h1: "Mancala offline: the classic Kalah board game for Android",
  answer:
    "Mancala Offline is a free Android version of Mancala, played with the Kalah rules: 6 pits and 4 stones per pit on each side, with a store at each end. You can play the computer at 4 levels (Easy, Medium, Hard and Master), work through a World Tour of 12 opponents from Cairo to New York, solve a new Daily Puzzle each day, or pass the phone to a friend for a 2-player game. Everything runs on the phone with no internet connection and no account. The game is free with optional ads, and Mancala Pro is a one-time purchase that removes the ads.",
  quickFacts: [
    ["Rules", "Kalah: 6 pits × 4 stones a side, 48 stones"],
    ["Modes", "vs Computer, World Tour, Daily Puzzle, 2 Players"],
    ["Price", "Free. Mancala Pro is a one-time purchase, no subscription"],
    ["Requires", "Android 7.0 or later. Works offline"],
  ],
  screenshotsTitle: "Screenshots",
  screenshots: [
    {
      src: "/apps/mancala-offline/01.webp",
      alt: "Mancala Offline home screen with a jade board of gemstones and buttons for Play vs Computer, World Tour, Daily Puzzle and 2 Players pass and play",
      caption: "Classic Mancala, offline",
    },
    {
      src: "/apps/mancala-offline/02.webp",
      alt: "A Mancala game in progress against the Hard computer, with stone counts on each pit, both stores and Undo, Hint and Menu buttons",
      caption: "4 computer levels, Easy to Master",
    },
    {
      src: "/apps/mancala-offline/03.webp",
      alt: "World Tour map with opponents in Kuala Lumpur, Manila, Havana and New York and a final Grand Master, with stars earned for each win",
      caption: "World Tour: 12 opponents",
    },
    {
      src: "/apps/mancala-offline/04.webp",
      alt: "Boards screen showing Walnut, Ebony & Gold, Jade Garden, Desert Sandstone, Midnight Marble and Coral Reef boards, with locked ones needing stars",
      caption: "Boards and stone sets to unlock",
    },
  ],
  howTo: {
    title: "How to play Mancala (Kalah rules)",
    intro:
      "Mancala Offline uses Kalah, the most common Mancala rule set. Each player has 6 small pits with 4 stones in each and a large store on their right. The goal is to finish with more stones in your store than your opponent.",
    steps: [
      {
        name: "Pick up and sow",
        text: "On your turn, tap one of your own pits that has stones. All its stones are picked up and dropped one at a time into the following pits, going counter-clockwise. You drop stones into your own store as you pass it, but you skip your opponent's store.",
      },
      {
        name: "Land in your store for an extra turn",
        text: "If the last stone you drop lands in your own store, you move again straight away. Chaining extra turns is one of the strongest plays in the game.",
      },
      {
        name: "Land in an empty pit to capture",
        text: "If the last stone lands in an empty pit on your side and the pit directly opposite has stones, you capture them: the opposite stones and your last stone all go into your store. If the opposite pit is empty, nothing is captured.",
      },
      {
        name: "End the game and count",
        text: "The game ends as soon as all six pits on either side are empty. Each player then moves any stones left on their own side into their own store. The bigger store wins; equal stores is a draw.",
      },
    ],
  },
  featuresTitle: "What's in the game",
  features: [
    {
      icon: "🤖",
      title: "4 computer levels",
      text: "Easy is relaxed and makes mistakes, Medium looks a few moves ahead, Hard is sharp and patient, and Master runs a deep search.",
    },
    {
      icon: "🌍",
      title: "World Tour",
      text: "Beat 12 opponents in order, from Amira in Cairo through Accra, Lagos, Nairobi, Istanbul, Manila, Havana and New York to the Grand Master. Win by 6 or more for 2 stars, by 12 or more for 3.",
    },
    {
      icon: "🧩",
      title: "Daily Puzzle",
      text: "A new position every day, made on the phone from the date: capture a set number of stones in one turn, or win from a position against the Hard computer. Solve on consecutive days to grow your streak.",
    },
    {
      icon: "👥",
      title: "2 Players, one phone",
      text: "Pass and play with a friend or family member on the same phone. No second device and no connection needed.",
    },
    {
      icon: "💎",
      title: "Boards and stone sets",
      text: "6 boards (Walnut, Ebony & Gold, Jade Garden, Desert Sandstone, Midnight Marble, Coral Reef) and 5 stone sets (Pebbles, Gemstones, Glass Marbles, Seashells, Gold Nuggets), unlocked with World Tour stars.",
    },
    {
      icon: "💡",
      title: "Hints and undo",
      text: "A hint highlights a strong move and undo takes back a move. Each costs a short optional ad, or is free with Mancala Pro.",
    },
  ],
  intentsTitle: "Questions this game answers",
  intents: [
    {
      h: "How do you play Mancala?",
      p: "Each player has a row of 6 pits and a store. On your turn you pick up all the stones in one of your pits and drop them one by one into the next pits counter-clockwise. Finishing in your own store gives you another turn; finishing in an empty pit on your side captures the stones opposite. When one side runs out of stones, the game ends and the player with more stones in their store wins. Mancala Offline shows these steps in a short tutorial on your first game.",
    },
    {
      h: "What are the Kalah rules?",
      p: "Kalah is played with 6 pits a side and usually 4 stones per pit (48 stones in total). Sowing is counter-clockwise and skips the opponent's store. Last stone in your store: extra turn. Last stone in an empty pit on your side with stones opposite: capture both into your store. When either side is empty, each player sweeps their remaining stones into their own store and the larger store wins. These are exactly the rules Mancala Offline uses.",
    },
    {
      h: "Is there a Mancala game that works offline?",
      p: "Yes. Mancala Offline needs no internet connection for any mode: playing the computer, the World Tour, the Daily Puzzle and 2-player games all run on the phone. A connection is only used to load optional ads and for Google Play purchases.",
    },
    {
      h: "Can I play Mancala against the computer?",
      p: "Yes, at 4 levels. Easy plays shallow and sometimes picks a random move, Medium looks 3 moves ahead, Hard 6, and Master searches up to 9 moves ahead. The World Tour opponents ramp up gradually between these levels.",
    },
    {
      h: "Can two people play Mancala on one phone?",
      p: "Yes. Choose 2 Players on the home screen and pass the phone between turns. Each player's side lights up when it is their move.",
    },
    {
      h: "What is a good Mancala strategy?",
      p: "Look for moves that end in your store, because the extra turn lets you set up a second move. The pit nearest your store needs exactly 1 stone to do this, the next one 2, and so on. Keep an eye on empty pits on your side that sit opposite a full pit, and avoid leaving your own full pits opposite empty ones on your opponent's side. The Hint button shows a strong move if you want to compare.",
    },
  ],
  compare: {
    title: "Mancala Offline vs a wooden board and online Mancala",
    intro:
      "A real board is lovely but needs a second player and a table. Online Mancala games find you an opponent but need a connection. Mancala Offline covers solo and same-phone play without a connection; it has no online multiplayer.",
    columns: ["", "Mancala Offline", "Wooden board", "Online Mancala"],
    rows: [
      ["Play alone vs computer", "✓ 4 levels", "✗", "Some"],
      ["2 players in the same room", "✓ Pass and play", "✓", "Some"],
      ["Play strangers online", "✗", "✗", "✓"],
      ["Works without internet", "✓", "✓", "✗"],
      ["Counts stones and keeps score", "✓", "✗", "✓"],
      ["Price", "Free, optional one-time Pro", "Cost of the board", "Varies"],
    ],
  },
  faqs: [
    {
      q: "Is Mancala Offline free?",
      a: "Yes. The whole game is free with optional ads. Mancala Pro is a one-time purchase that removes ads, makes hints and undos free and unlocks every board and stone set. There is no subscription. The price is shown in Google Play.",
    },
    {
      q: "Which Mancala rules does it use?",
      a: "Kalah, with 6 pits and 4 stones per pit on each side. You get an extra turn when your last stone lands in your store and capture the stones opposite when it lands in an empty pit on your side (only if the opposite pit has stones). When one side is empty, each player keeps the stones left on their own side.",
    },
    {
      q: "Does it really work without internet?",
      a: "Yes. Every mode works in flight mode. The internet is only used to load the optional ads and for Google Play purchases.",
    },
    {
      q: "What ads does it show?",
      a: "Rewarded videos that you choose to watch for a hint or an undo, and an occasional full-screen ad between matches, never during one. There are no banner ads. Mancala Pro removes all ads. In the EEA, UK and Switzerland, Google's consent form is shown before any ad loads, and Settings has Ad privacy options to change your choice.",
    },
    {
      q: "How do I unlock new boards and stones?",
      a: "Earn stars in the World Tour: 1 star for a win, 2 for a win by 6 or more stones, 3 for 12 or more. There are 36 stars in total. Ebony & Gold needs 5 stars and Coral Reef 28; Gemstones need 3 and Gold Nuggets 24. Mancala Pro unlocks them all at once.",
    },
    {
      q: "When does the Daily Puzzle change?",
      a: "A new puzzle arrives every day at midnight on your phone's clock. Each one is either a capture puzzle (take a set number of stones in one turn) or a win puzzle (beat the Hard computer from a given position).",
    },
    {
      q: "Do I need an account? What data does it collect?",
      a: "No account and no sign-up. Your progress, stars and streak are stored only on your phone. The developer collects no data; Google AdMob processes some data to serve ads, as explained in the privacy policy.",
    },
    {
      q: "Is there an iPhone version?",
      a: "Not yet. It is on Google Play for Android first. An iPhone version is planned; this page will link to the App Store when it is out.",
    },
  ],
  guides: [],
  related: [
    { name: "Idle Blacksmith: Forge Tycoon", href: "/apps/idle-blacksmith", blurb: "Tap the anvil, forge 40 weapons and hire apprentices who keep working while you are away." },
    { name: "Pack It Perfect: Packing Game", href: "/apps/pack-it-perfect", blurb: "A cozy packing puzzle: fit every item into the suitcase across 60 levels." },
  ],
  disclaimer:
    "Mancala Offline is free to play with optional ads served by Google AdMob. The Mancala Pro price is set in Google Play and may vary by country. Mancala and Kalah are traditional games; this app is an independent version by Vilva Athiban P B.",
};
