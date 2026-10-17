// Marutto: Homework Checker (iOS, not on the App Store yet). English-only landing page.
// No App Store id until the listing is created, so `iosPlanned` marks it as an
// iPhone app and the page shows "Coming soon to the App Store".
export default {
  slug: "homework-marking",
  iconBase: "homework-marking",
  name: "Marutto: Homework Checker",
  alternateNames: [
    "Marutto",
    "答え合わせ・丸つけアプリ - まるっと",
    "まるっと丸つけ",
    "동그라미 채점 - 숙제·오답노트",
    "檢查作業・錯題本 - 紅圈圈",
    "homework checker app",
    "worksheet marking app",
    "math homework checker for parents",
    "redo sheet maker",
  ],
  iosPlanned: true,
  live: false,
  enOnly: true,
  androidPlanned: false,
  paidPill: "Subscription, 10 free sheets",
  pills: [],
  operatingSystem: "iOS 17 or later",
  datePublished: "2026-10-17",
  price: {
    amount: "600",
    currency: "JPY",
    display: "¥600/month or ¥4,800/year",
    label: "10 free marked sheets, then ¥600/month or ¥4,800/year",
  },
  color: "#B83220",
  category: "EducationalApplication",
  head: {
    title: "Homework Checker App for Parents: Mark Worksheets, Print Redos",
    description:
      "Photograph your child's math worksheet and Marutto marks it: red circles for right answers, marks for mistakes, and a printable redo sheet of the wrong ones.",
    keywords:
      "homework checker app, check my child's homework, math worksheet checker, worksheet marking app, homework marking app for parents, grade homework from photo, redo sheet, wrong answer notebook, erase handwriting from worksheet, kanji drill checker, 答え合わせ アプリ, 丸つけ アプリ, 채점 앱, 檢查作業",
    ogTitle: "Snap the worksheet, get it marked: Marutto for iPhone",
    ogDescription:
      "Red circles for right answers, a mark for mistakes, a \"please check\" flag when it isn't sure, and a one-tap redo sheet of only the wrong questions.",
  },
  h1: "A homework checker for parents: photograph the worksheet, get it marked",
  answer:
    "Marutto is an iPhone app for parents that marks a child's elementary-school homework from a photo. Snap the worksheet and it draws a red circle on each correct answer and a mark on each mistake (a check mark, as Japanese teachers do). Anything it isn't sure about is flagged \"please check\" so you decide with one tap. Arithmetic is recomputed by code rather than guessed. One tap turns the wrong questions into an A4 redo sheet with the answers on the last page, ready for AirPrint or to share as a PDF. It handles math worksheets, and Japanese kanji drills in beta. The first 10 marked sheets are a free trial; after that it is a subscription.",
  quickFacts: [
    ["Price", "10 marked sheets free, then ¥600/month or ¥4,800/year"],
    ["Subjects", "Elementary math; Japanese kanji drills (beta)"],
    ["Redo sheet", "A4 PDF of only the wrong questions, answers on the last page"],
    ["Children", "As many as you need, each with their own history"],
  ],
  screenshotsTitle: "Screenshots",
  screenshots: [],
  howTo: {
    title: "How to check your child's homework with Marutto",
    intro: "About a minute per worksheet. The app does the first pass; you have the final say on every mark.",
    steps: [
      { name: "Pick the child", text: "Choose who the worksheet belongs to, so it lands in their own history." },
      { name: "Photograph the whole sheet", text: "Lay it flat in good light and fit the whole page in the frame, in focus." },
      { name: "Read the marks", text: "Red circles for correct answers, a mark for mistakes, drawn on the photo. Anything flagged \"please check\" needs your eye." },
      { name: "Settle the flagged ones", text: "Tap a mark to flip it between right and wrong. Your choice is what gets saved." },
      { name: "Make the redo sheet", text: "One tap builds an A4 sheet with only the wrong questions and the answers on the last page. Print it with AirPrint or share it as a PDF." },
    ],
  },
  featuresTitle: "What it does",
  features: [
    { icon: "⭕", title: "Marks it on the photo", text: "A red circle for each correct answer and a mark for each mistake, drawn right on the worksheet." },
    { icon: "🤔", title: "\"Please check\" when unsure", text: "Answers it can't read confidently are flagged instead of guessed. Tap once to mark them right or wrong." },
    { icon: "🧮", title: "Arithmetic checked by code", text: "The sums are recomputed by the app, not guessed, so a correct calculation is not marked wrong." },
    { icon: "🖨️", title: "One-tap redo sheet", text: "Only the wrong questions on an A4 page, answers on the last page. AirPrint or share as a PDF." },
    { icon: "🧽", title: "Erase the handwriting", text: "Make a clean copy of the worksheet on the phone so your child can do it again. A slider sets how strongly it erases." },
    { icon: "📈", title: "History and weak topics", text: "A history for each child and a weekly view of the topics they get wrong most, such as division with remainders." },
  ],
  intentsTitle: "Questions parents ask",
  intents: [
    {
      h: "Is there an app that checks my child's math homework from a photo?",
      p: "Marutto does that for elementary-school worksheets. Take one photo of the whole sheet and it marks every answer on the picture. The arithmetic is recomputed by code, and answers it can't read are flagged \"please check\" for you instead of being guessed.",
    },
    {
      h: "How do I make a worksheet of only the questions my child got wrong?",
      p: "After marking, tap to make a redo sheet. Marutto puts only the wrong questions on an A4 page, with the answers on the last page, so you can print it with AirPrint or share the PDF.",
    },
    {
      h: "Can I erase the answers from a worksheet so my child can do it again?",
      p: "Yes. The app erases the handwriting from the photo to make a clean copy. If faint pencil is left over or printed lines fade, move the erase strength slider and try again.",
    },
    {
      h: "Does it check Japanese kanji drills?",
      p: "Yes, in beta. Judging handwritten kanji shapes is harder than checking sums, so more of them are flagged \"please check\". Treat those flags as the places to look closely.",
    },
  ],
  compare: {
    title: "Marutto vs checking by hand or with an answer-lookup app",
    intro: "Answer-lookup apps are built for students who want the answer. Marutto is built for the parent doing the marking.",
    columns: ["", "Marutto", "Marking by hand", "Homework answer apps"],
    rows: [
      ["Marks the whole sheet from one photo", "✓", "✗", "Varies"],
      ["Flags unsure answers for you to decide", "✓", "—", "Rarely"],
      ["Redo sheet of only the wrong questions", "✓ One tap", "Copy them out yourself", "✗"],
      ["Erase handwriting for a clean copy", "✓", "✗", "Varies"],
      ["Per-child history and weak topics", "✓", "✗", "Varies"],
      ["Account or sign-up", "None", "—", "Often required"],
    ],
  },
  faqs: [
    {
      q: "How much does Marutto cost?",
      a: "The first 10 marked sheets are a free trial with no time limit. After that it is an auto-renewing subscription: ¥600 a month or ¥4,800 a year in Japan, with the price in your local currency shown in the app before you buy. Family Sharing is on, so one subscription covers the family. Fair use is up to 300 sheets a month, 100 of them kanji.",
    },
    {
      q: "Is the marking always right?",
      a: "No, and it says so. Answers it isn't sure about are flagged \"please check\", and you can tap any mark to change it. The arithmetic itself is recomputed by code rather than guessed.",
    },
    {
      q: "Which worksheets does it handle?",
      a: "Elementary-school math worksheets, including word problems, and Japanese kanji writing drills (in beta).",
    },
    {
      q: "Are the photos stored on a server?",
      a: "No. The photo is sent over HTTPS to be marked and is discarded after the result comes back. Your history, including the photos and your children's names, stays on your iPhone. The full details are in the privacy policy.",
    },
    {
      q: "Do I need an account?",
      a: "No. There is no sign-up, no email and no ads. Purchases go through your Apple Account.",
    },
    {
      q: "Can I use it for more than one child?",
      a: "Yes. Add as many children as you need; each one has their own history and weekly view of weak topics.",
    },
    {
      q: "Is there an Android version?",
      a: "No. Marutto is iPhone-only.",
    },
  ],
  guides: [],
  related: [
    { name: "Good Behavior Police Call", href: "/apps/police-call", blurb: "A friendly pretend call from Officer Pat or Officer Sam for bedtime, teeth and tidy-up. Free on iPhone." },
    { name: "Night Cam: Stars & Aurora", href: "/apps/night-cam", blurb: "Free aurora forecast for your area and an iPhone camera for the Moon, stars and northern lights." },
    { name: "Mancala Offline", href: "/apps/mancala-offline", blurb: "The classic stone-sowing board game against the computer or a friend. Free and offline on Android." },
  ],
  disclaimer:
    "Marutto uses AI to read handwriting and can make mistakes; answers it is unsure about are flagged for a parent to check. It is meant for parents and is not directed at children.",
};
