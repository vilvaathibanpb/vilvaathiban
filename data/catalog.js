// Every iPhone and Android app and game, for the /apps and /games hubs.
// Each entry links to its landing page at /apps/<slug>. `ios` and `play` are
// set only for listings that are live; `iosSoon` / `playSoon` mark a store the
// app is waiting on (shown as a placeholder, never as a dead link).

const ios = (slug, id) => `https://apps.apple.com/us/app/${slug}/id${id}`;
const play = (pkg) => `https://play.google.com/store/apps/details?id=${pkg}`;

export const APPS = [
  {
    name: "Chat Link & QR Code Maker",
    slug: "chat-link-qr-code-maker",
    tagline: "WhatsApp link generator and QR code maker for iPhone and Android.",
    summary:
      "Turn a phone number into a wa.me click-to-chat link with a pre-filled message, save a printable QR code, and make a full-size profile picture that is not cropped. Works offline; nothing is uploaded.",
    image: "/apps/chat-link-qr-logo.png",
    badge: "iOS $2.99 · Android free",
    ios: ios("chat-link-qr-code-maker", "6810372979"),
    play: play("com.vilva.watools"),
  },
  {
    name: "Opus to MP3 Converter",
    slug: "voice-note-audio-converter",
    tagline: "Convert WhatsApp .opus voice notes to MP3 or WAV, free and offline.",
    summary:
      "Opus to MP3 converter that runs on the phone. Pick one or a hundred .opus, .ogg, .m4a or .aac files, tap Convert, share the MP3 or WAV. No upload, no account, no limits.",
    image: "/apps/audio-converter-logo.png",
    badge: "Free",
    ios: ios("opus-to-mp3-converter", "6810373840"),
    play: play("com.vilva.waaudioconverter"),
  },
  {
    name: "Voice Note to Text",
    slug: "voice-note-to-text",
    tagline: "Transcribe WhatsApp voice messages to text on-device, any language.",
    summary:
      "Share a voice note, read the transcript seconds later, copy or share it as .txt. The speech model ships in the app, so it works offline.",
    image: "/apps/voice-to-text-logo.png",
    badge: "Free",
    ios: ios("voice-note-to-text-offline", "6810376600"),
    play: play("com.vilva.wavoicetotext"),
  },
  {
    name: "Chat Export Studio: PDF",
    slug: "chat-export-studio",
    tagline: "Export a WhatsApp chat to a paginated PDF with statistics.",
    summary:
      "Open the .txt or .zip from Export Chat and get a clean PDF with message bubbles plus who-talks-most statistics. Parsed on your phone only.",
    image: "/apps/chat-export-logo.png",
    badge: "iOS $4.99 · Android free",
    ios: ios("chat-export-studio-pdf", "6810375389"),
    play: play("com.vilva.wachatexport"),
  },
  {
    name: "Teleprompter: Camera Overlay",
    slug: "teleprompter-camera-overlay",
    tagline: "Free iOS teleprompter that floats your script over the camera and scrolls as you speak.",
    summary:
      "Record Reels, Shorts and TikToks while reading your script with eye contact. Voice-driven scrolling runs on-device and fully offline.",
    image: "/apps/teleprompter-logo.png",
    badge: "Free",
    ios: "https://apps.apple.com/app/teleprompter-camera-overlay/id6805037497",
  },
  {
    name: "Night Cam: Stars & Aurora",
    slug: "night-cam",
    tagline: "A camera for the Moon, stars and aurora, with a free forecast for tonight.",
    summary:
      "Presets for Moon, Stars, Aurora, star Trails, City, Night video, Aurora Live and Time-lapse. The Tonight tab shows aurora chance, cloud cover and moon phase for where you are.",
    image: "/apps/night-cam-logo.png",
    badge: "Free",
    ios: ios("night-cam-stars-aurora", "6818341326"),
  },
  {
    name: "Good Behavior Police Call",
    slug: "police-call",
    tagline: "A friendly pretend call from Officer Pat or Officer Sam for bedtime, teeth and tidy-up.",
    summary:
      "Hand over the phone and it rings like a real call: a gentle officer asks for one small thing, and calls back with praise when it goes well. 13 calls, voiced in 9 languages, offline.",
    image: "/apps/police-call-logo.png",
    badge: "Free",
    ios: ios("good-behavior-police-call", "6815485255"),
  },
  {
    name: "Warranty Tracker & Receipt Log",
    slug: "warranty-tracker",
    tagline: "Photograph the receipt, set the warranty length, get reminded before it expires.",
    summary:
      "Every product with its receipt photo, purchase date, serial number and warranty countdown. Local reminders 90 to 1 day before expiry, CSV export, fully offline. 19 languages.",
    image: "/apps/warranty-tracker-logo.png",
    badge: "iOS $0.99",
    ios: ios("warranty-tracker-receipt-log", "6815122657"),
  },
  {
    name: "Electrician Calculator Toolkit",
    slug: "electrician-calculator",
    tagline: "Voltage drop, wire size, conduit and box fill, offline, based on the 2023 NEC tables.",
    summary:
      "Eight job-site calculators with the code table on every result: voltage drop, wire size with derating, conduit fill, box fill, load & breaker, Ohm's law, resistor codes and reference tables. 19 languages.",
    image: "/apps/electrician-calculator-logo.png",
    badge: "iOS $3.99",
    ios: ios("electrician-calculator-toolkit", "6815115471"),
  },
  {
    name: "Expiry Date Tracker: Scanner",
    slug: "expiry-date-tracker",
    tagline: "Scan a barcode, set the expiry date, get a reminder before it passes.",
    summary:
      "Keep food, medicine and cosmetics in one list with their expiry dates, scan barcodes to add them faster, and get reminded before anything goes off.",
    image: "/apps/expiry-date-tracker-logo.png",
    badge: "Android · Free",
    play: play("com.vilva.expirytracker"),
  },
  {
    name: "Caffeine Tracker: Curfew",
    slug: "caffeine-tracker",
    tagline: "How much caffeine is still in you, and when your last coffee has to be.",
    summary:
      "Log coffee, tea and energy drinks in two taps, watch the level fall with a half-life model and get a bedtime curfew. Offline, 19 languages.",
    image: "/apps/caffeine-tracker-logo.png",
    badge: "In App Review",
    iosSoon: true,
  },
  {
    name: "Unit Price Calculator & Tax",
    slug: "unit-price-calculator",
    tagline: "Which pack is really cheaper? Price per kg or litre, discounts, sales tax, bill split.",
    summary:
      "Five checkout calculators in one iPhone app: unit price comparison, stacked discounts, add or remove tax, a cart total against a budget, and split with tip. Offline, 19 languages.",
    image: "/apps/unit-price-calculator-logo.png",
    badge: "In App Review",
    iosSoon: true,
  },
  {
    name: "Whisker Check: Cat Comfort",
    slug: "whisker-check",
    tagline: "Score five facial pain signs in your cat in two minutes and track the trend.",
    summary:
      "A guided check based on the published feline facial pain scale, a mood read, a trend chart and a PDF report for your vet. Not a diagnosis; a calmer way to decide when to call.",
    image: "/apps/whisker-check-logo.png",
    badge: "In App Review",
    iosSoon: true,
  },
  {
    name: "Tooth Fairy Cam: Magic Photo",
    slug: "tooth-fairy-cam",
    tagline: "Place a glowing Tooth Fairy into tonight's bedroom photo and show it at breakfast.",
    summary:
      "Night-vision looks with a REC light and timestamp, a tooth map for every child, and a handwritten letter from the Tooth Fairy. Photos never leave the phone.",
    image: "/apps/tooth-fairy-cam-logo.png",
    badge: "In App Review",
    iosSoon: true,
  },
];

export const GAMES = [
  {
    name: "Mancala Offline",
    slug: "mancala-offline",
    genre: "Board game",
    tagline: "Classic Mancala on a wooden board, against the computer or a friend.",
    summary:
      "Sow the stones, land in your store for another turn, capture from empty pits. Four computer levels, a World Tour against 12 masters from Cairo to New York, a daily puzzle and two-player pass & play. Fully offline.",
    image: "/apps/mancala-offline-logo.png",
    shot: "/apps/mancala-offline/01.webp",
    platform: "Android",
    play: play("com.vilva.mancala"),
  },
  {
    name: "Idle Blacksmith",
    slug: "idle-blacksmith",
    genre: "Idle tycoon",
    tagline: "Tap the anvil, forge legendary swords and grow your smithy, even offline.",
    summary:
      "Hammer 40 weapons across 8 materials from Copper to Starmetal, land masterworks for 10× gold, and hire apprentices who keep forging while you are away.",
    image: "/apps/idle-blacksmith-logo.png",
    shot: "/apps/idle-blacksmith/01.webp",
    platform: "Android",
    play: play("com.vilva.idleblacksmith"),
  },
  {
    name: "Pack It Perfect",
    slug: "pack-it-perfect",
    genre: "Puzzle",
    tagline: "A cozy packing puzzle: fit every item in the suitcase.",
    summary:
      "Drag, turn and fit T-shirts, books, cameras and teddy bears into suitcases, moving boxes and picnic baskets. 60 levels across 4 little story chapters. Relaxing and offline.",
    image: "/apps/pack-it-perfect-logo.png",
    shot: "/apps/pack-it-perfect/01.webp",
    platform: "Android",
    play: play("com.vilva.packit"),
  },
  {
    name: "Pounce Pad: Games for Cats",
    slug: "cat-games",
    genre: "Games for cats",
    tagline: "Eight screen toys that move like real prey: mouse, laser dot, koi, feather and more.",
    summary:
      "A mouse that peeks, freezes and bolts; a laser dot that hovers and zips; koi that burst away from a paw. Cat-friendly colours, timed sessions and no buttons a paw can hit. iPhone and iPad.",
    image: "/apps/cat-games-logo.png",
    shot: "/apps/cat-games/01.webp",
    platform: "iPhone & iPad",
    iosSoon: true,
  },
];
