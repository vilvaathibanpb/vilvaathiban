// English source of truth for the new app pages (utility-apps workspace).
// Structural fields (ids, prices, images, colours) are defined only here.

export default {
  "electrician-calculator": {
    slug: "electrician-calculator",
    iconBase: "electrician-calculator",
    name: "Electrician Calculator Pro",
    alternateNames: ["voltage drop calculator", "wire size calculator", "conduit fill calculator", "box fill calculator", "NEC calculator app"],
    appStoreId: "",
    appStoreUrl: "",
    live: false,
    price: { amount: "9.99", label: "One-time purchase" },
    color: "#D98A00",
    category: "UtilitiesApplication",
    head: {
      title: "Electrician Calculator App for iPhone: Voltage Drop, Wire Size, Conduit & Box Fill (Offline)",
      description:
        "Eight NEC-based electrician calculators in one offline iPhone app: voltage drop, wire size with derating, conduit fill, box fill, load & breaker, Ohm's law, resistor codes and code tables. One-time purchase, no subscription, 19 languages.",
      keywords:
        "electrician calculator app, voltage drop calculator, wire size calculator, ampacity calculator, conduit fill calculator, box fill calculator, breaker size calculator, ohms law calculator, nec calculator, electrical calculator iphone, derating calculator, awg calculator",
      ogTitle: "Electrician Calculator Pro: voltage drop, wire size, conduit and box fill on iPhone",
      ogDescription: "Eight job-site calculators based on the 2023 NEC tables, fully offline. One-time purchase, no subscription.",
    },
    h1: "An electrician calculator for the job site: voltage drop, wire size, conduit fill and box fill, offline",
    answer:
      "Electrician Calculator Pro puts eight NEC-based calculators on your iPhone: voltage drop (single-phase, three-phase, DC), wire size with the 125% rule and ambient and conductor-count derating, conduit fill for EMT, PVC, RMC and IMC, box fill per 314.16, load and breaker sizing from watts, Ohm's law, resistor color codes and the reference tables behind them. Every result names the table it came from. It works with no signal, has no account and no subscription, and is available in 19 languages.",
    quickFacts: [
      ["Price", "One-time purchase. No subscription"],
      ["Tools", "Voltage drop, wire size, conduit fill, box fill, load & breaker, Ohm's law, resistor code, code tables"],
      ["Basis", "2023 NEC (NFPA 70) tables"],
      ["Privacy", "Offline, no account, no analytics"],
    ],
    screenshotsTitle: "What you get: a result, the table it came from, and the smallest size that passes",
    screenshots: [
      { src: "/apps/electrician-calculator/01.webp", alt: "Voltage drop calculator on iPhone showing drop in volts and percent and the minimum wire size for 3%", caption: "Voltage drop with the minimum size for 3%" },
      { src: "/apps/electrician-calculator/02.webp", alt: "Wire size calculator applying ambient temperature and conductor-count derating", caption: "Wire size with derating built in" },
      { src: "/apps/electrician-calculator/03.webp", alt: "Conduit fill calculator comparing minimum trade size across EMT, PVC, RMC and IMC", caption: "Conduit fill across five raceway types" },
    ],
    howTo: {
      title: "How to size a circuit in under a minute",
      intro: "Most job-site questions are the same three: will the voltage drop pass, what wire do I pull, and what conduit does it need. Here is the flow.",
      steps: [
        { name: "Load & Breaker", text: "Enter the watts, voltage and phase. Mark it continuous if it runs three hours or more. You get the load current, the design current at 125%, the next standard breaker from 240.6(A) and the minimum 75°C conductor." },
        { name: "Wire Size", text: "Open Wire Size with that current, set the termination rating, the ambient temperature and how many current-carrying conductors share the raceway. The app applies 310.15(B)(1) and 310.15(C)(1) and shows the adjusted ampacity of every size around the answer." },
        { name: "Voltage Drop", text: "Enter the one-way length. If the drop is over 3%, the app already shows the smallest conductor that passes. Switch to aluminum or add parallel sets to compare." },
        { name: "Conduit Fill", text: "Add the conductors (size, insulation, quantity) and read the minimum trade size for EMT, PVC Schedule 40 and 80, RMC and IMC side by side." },
      ],
    },
    featuresTitle: "Eight tools, one tap each",
    features: [
      { icon: "⚡", title: "Voltage drop", text: "VD = 2·K·I·L ÷ CM for single-phase and DC, 1.732 for three-phase; K = 12.9 copper / 21.2 aluminum. Feet or meters, #14 AWG to 750 kcmil, parallel sets, and the smallest size under 3%." },
      { icon: "🔌", title: "Wire size (ampacity)", text: "Table 310.16 for copper and aluminum at 60/75/90°C, the 125% continuous-load rule, ambient correction, conductor-count adjustment and the 240.4(D) small-conductor caps." },
      { icon: "🧵", title: "Conduit fill", text: "Chapter 9 Tables 1, 4 and 5: any mix of THHN/THWN, XHHW and THW conductors, minimum trade size per raceway type, or the maximum count of one conductor in a given conduit." },
      { icon: "📦", title: "Box fill", text: "314.16(B) volume allowances for conductors, clamps, support fittings, device yokes and equipment grounds, with a pass/fail check against the box you have." },
      { icon: "🧮", title: "Load & breaker, Ohm's law, resistor code", text: "Watts to amps to breaker to wire in one screen; any two of V, I, R and P; four- and five-band resistor decoding." },
      { icon: "📚", title: "Code tables", text: "Ampacity, standard breaker ratings, derating factors, box volumes and common box sizes, US and IEC wire colors, always one tap away." },
    ],
    intentsTitle: "Questions this app answers",
    intents: [
      { h: "How do I calculate voltage drop for a branch circuit?", p: "Enter voltage, load current, wire size, material and one-way length. The app returns the drop in volts and percent and the voltage at the load, and flags anything over the 3% (branch) and 5% (total) informational limits from 210.19(A)." },
      { h: "What size wire do I need for a 50 amp circuit?", p: "For a 40 A continuous load (50 A required) on copper at 75°C, Table 310.16 gives #8 AWG. If the run is hot or shares a raceway with more than three current-carrying conductors, the app applies the derating factors and moves you up a size when needed." },
      { h: "How many #12 THHN fit in a 3/4 inch EMT?", p: "Sixteen, per Chapter 9 Table 1 (40% fill), Table 4 (EMT area) and Table 5 (THHN area). The Max conductors mode answers this for any size, insulation and raceway." },
      { h: "How do I calculate box fill?", p: "Count each conductor entering the box, add one allowance for internal clamps, one for all equipment grounds, one per support fitting and two per device yoke, each based on the largest conductor. The app totals the cubic inches and compares them with your box." },
      { h: "Does the app need internet or an account?", p: "No. Every table is inside the app; nothing is downloaded or uploaded. There is no account, no analytics, no ads and no subscription." },
    ],
    compare: {
      title: "Electrician Calculator Pro vs the code book and free single-purpose calculators",
      intro: "The code book is authoritative but slow to page through with gloves on. Free calculators cover one job each and usually pay for themselves with ads. This app puts the eight everyday calculations together, with the table reference on every result.",
      columns: ["", "Electrician Calculator Pro", "NEC code book", "Free single-purpose apps"],
      rows: [
        ["Voltage drop, wire size, conduit fill, box fill in one place", "✓ Eight tools", "✓ All tables, manual math", "✗ One tool per app"],
        ["Derating applied automatically", "✓ Ambient + conductor count", "✗ Manual", "Varies"],
        ["Shows which table the result came from", "✓ On every screen", "✓ It is the table", "✗ Rarely"],
        ["Works offline", "✓ Yes", "✓ Yes", "✗ Usually needs ads to load"],
        ["Languages", "19", "English", "Usually one"],
        ["Price", "One-time purchase", "Book price", "Free with ads"],
      ],
    },
    faqs: [
      { q: "Which code edition are the tables from?", a: "The 2023 edition of NFPA 70, the National Electrical Code. Your jurisdiction may enforce an earlier edition or local amendments, so treat results as a calculation aid and verify with the adopted code and your inspector." },
      { q: "Is the voltage drop formula the NEC formula?", a: "The NEC does not mandate a formula; it gives informational recommendations (3% branch, 5% total). The app uses the standard field formula VD = 2·K·I·L ÷ CM with K = 12.9 for copper and 21.2 for aluminum, and 1.732 instead of 2 for three-phase." },
      { q: "Does wire size include derating?", a: "Yes. It applies the 125% continuous-load rule, the ambient-temperature correction from 310.15(B)(1), the adjustment for more than three current-carrying conductors from 310.15(C)(1), and the 240.4(D) limits for #14, #12 and #10." },
      { q: "Which conduit types and insulations are covered?", a: "EMT, PVC Schedule 40, PVC Schedule 80, RMC and IMC, with THHN/THWN, XHHW and THW conductor areas from Chapter 9 Table 5." },
      { q: "Can I use metric units?", a: "Length can be entered in meters and ambient temperature in °C or °F. Conductor sizes follow AWG/kcmil, as the tables do." },
      { q: "Is it a subscription?", a: "No. It is a one-time purchase with no in-app purchases." },
      { q: "Is it affiliated with the NFPA?", a: "No. NEC and National Electrical Code are registered trademarks of the National Fire Protection Association, which does not sponsor or endorse this app." },
      { q: "Is there an Android version?", a: "Not yet. The iPhone app ships first; an Android build is planned and this page will link to Google Play when it is live." },
    ],
    guides: [],
    related: [
      { name: "Warranty Tracker: Receipts", href: "/apps/warranty-tracker", blurb: "Photograph a receipt, set the warranty length, get reminded before it expires. Offline, one-time purchase." },
      { name: "Unit Price Calculator & Tax", href: "/apps/unit-price-calculator", blurb: "Compare price per unit, add sales tax, take a percentage off. Free." },
      { name: "Caffeine Tracker: Curfew", href: "/apps/caffeine-tracker", blurb: "Log coffee and tea, see what is still in your system, and get a bedtime cutoff. Free." },
    ],
    disclaimer:
      "Electrician Calculator Pro is a calculation aid and not a substitute for the code, engineering judgement or the authority having jurisdiction. NEC and National Electrical Code are registered trademarks of the National Fire Protection Association, which does not sponsor or endorse this app.",
  },
};
