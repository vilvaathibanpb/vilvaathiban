import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrap, Eyebrow, Title, Lead, JsonLd } from "../components/service";
import { PERSON_REF } from "../lib/person";

const URL = "https://www.vilvaathiban.com/apps";

const ios = (slug, id) => `https://apps.apple.com/us/app/${slug}/id${id}`;
const play = (pkg) => `https://play.google.com/store/apps/details?id=${pkg}`;

// iPhone & Android utilities. `href` is the landing page on this site; `ios` and
// `play` are the store listings (only set for listings that are live).
const APPS = [
  {
    name: "Chat Link & QR Code Maker",
    tagline: "WhatsApp link generator and QR code maker for iPhone and Android.",
    summary:
      "Turn a phone number into a wa.me click-to-chat link with a pre-filled message, save a printable QR code, and make a full-size profile picture that is not cropped. Works offline; nothing is uploaded.",
    image: "/apps/chat-link-qr-logo.png",
    href: "/apps/chat-link-qr-code-maker",
    badge: "iOS · $2.99",
    ios: ios("chat-link-qr-code-maker", "6810372979"),
    play: play("com.vilva.watools"),
  },
  {
    name: "Opus to MP3 Converter",
    tagline: "Convert WhatsApp .opus voice notes to MP3 or WAV, free and offline.",
    summary:
      "Opus to MP3 converter that runs on the phone. Pick one or a hundred .opus, .ogg, .m4a or .aac files, tap Convert, share the MP3 or WAV. No upload, no account, no limits.",
    image: "/apps/audio-converter-logo.png",
    href: "/apps/voice-note-audio-converter",
    badge: "Free",
    ios: ios("opus-to-mp3-converter", "6810373840"),
    play: play("com.vilva.waaudioconverter"),
  },
  {
    name: "Voice Note to Text",
    tagline: "Transcribe WhatsApp voice messages to text on-device, any language.",
    summary:
      "Share a voice note, read the transcript seconds later, copy or share it as .txt. The speech model ships in the app, so it works offline.",
    image: "/apps/voice-to-text-logo.png",
    href: "/apps/voice-note-to-text",
    ios: ios("voice-note-to-text-offline", "6810376600"),
    play: play("com.vilva.wavoicetotext"),
  },
  {
    name: "Chat Export Studio: PDF",
    tagline: "Export a WhatsApp chat to a paginated PDF with statistics.",
    summary:
      "Open the .txt or .zip from Export Chat and get a clean PDF with message bubbles plus who-talks-most statistics. Parsed on your phone only.",
    image: "/apps/chat-export-logo.png",
    href: "/apps/chat-export-studio",
    badge: "iOS · $4.99",
    ios: ios("chat-export-studio-pdf", "6810375389"),
    play: play("com.vilva.wachatexport"),
  },
  {
    name: "Teleprompter: Camera Overlay",
    tagline: "Free iOS teleprompter that floats your script over the camera and scrolls as you speak.",
    summary:
      "Record Reels, Shorts and TikToks while reading your script with eye contact. Voice-driven scrolling runs on-device and fully offline.",
    image: "/apps/teleprompter-logo.png",
    href: "/apps/teleprompter-camera-overlay",
    badge: "Free",
    ios: "https://apps.apple.com/app/teleprompter-camera-overlay/id6805037497",
  },
  {
    name: "Warranty Tracker & Receipt Log",
    tagline: "Photograph the receipt, set the warranty length, get reminded before it expires.",
    summary:
      "Every product with its receipt photo, purchase date, serial number and warranty countdown. Local reminders 90 to 1 day before expiry, CSV export, fully offline. 19 languages.",
    image: "/apps/warranty-tracker-logo.png",
    href: "/apps/warranty-tracker",
    badge: "iOS · $0.99",
    ios: ios("warranty-tracker-receipt-log", "6815122657"),
  },
  {
    name: "Electrician Calculator Toolkit",
    tagline: "Voltage drop, wire size, conduit and box fill, offline, based on the 2023 NEC tables.",
    summary:
      "Eight job-site calculators with the code table on every result: voltage drop, wire size with derating, conduit fill, box fill, load & breaker, Ohm's law, resistor codes and reference tables. 19 languages.",
    image: "/apps/electrician-calculator-logo.png",
    href: "/apps/electrician-calculator",
    badge: "iOS · $3.99",
    ios: ios("electrician-calculator-toolkit", "6815115471"),
  },
  {
    name: "Good Behavior Police Call",
    tagline: "A pretend police call for kids, to encourage good behaviour.",
    summary:
      "Hand the phone to your child for a pretend call. Made for young children; the support page explains how it works.",
    image: "/apps/police-call-logo.png",
    href: "/apps/police-call/support",
    ios: ios("good-behavior-police-call", "6815485255"),
  },
  {
    name: "Expiry Date Tracker",
    tagline: "Scan a barcode, set the expiry date, get a reminder before it passes.",
    summary: "Android app with barcode scanning and expiry reminders.",
    image: "/apps/expiry-date-tracker-logo.png",
    href: "/apps/expiry-date-tracker/support",
    badge: "Android",
    play: play("com.vilva.expirytracker"),
  },
  {
    name: "Caffeine Tracker: Curfew",
    tagline: "How much caffeine is still in you, and when your last coffee has to be.",
    summary:
      "Log coffee, tea and energy drinks in two taps, watch the level fall with a half-life model and get a bedtime curfew. Offline, 19 languages.",
    image: "/apps/caffeine-tracker-logo.png",
    href: "/apps/caffeine-tracker",
    badge: "Coming soon",
  },
  {
    name: "Night Cam: Stars & Aurora",
    tagline: "A camera for the Moon, stars and aurora, with a free forecast for tonight.",
    summary:
      "Presets for Moon, Stars, Aurora, star Trails, City, Night video, Aurora Live and Time-lapse. The Tonight tab shows aurora chance, cloud cover and moon phase for where you are.",
    image: "/apps/night-cam-logo.png",
    href: "/apps/night-cam",
    badge: "Free",
    ios: ios("night-cam-stars-aurora", "6818341326"),
  },
  {
    name: "Unit Price Calculator & Tax",
    tagline: "Which pack is really cheaper? Price per kg or litre, discounts, sales tax, bill split.",
    summary:
      "Five checkout calculators in one iPhone app: unit price comparison, stacked discounts, add or remove tax, a cart total against a budget, and split with tip. Offline, 19 languages.",
    image: "/apps/unit-price-calculator-logo.png",
    href: "/apps/unit-price-calculator",
    badge: "Coming soon",
  },
];

const UTM = "utm_source=vilvaathiban.com&utm_medium=apps&utm_campaign=apps_hub";

// Mac apps: sold on their own sites. AI Done Now and NotchFit are pitched to
// different people (never as a pair); VibeLock is the add-on to either.
const MAC_APPS = [
  {
    name: "AI Done Now",
    tagline: "Mac notifier for Claude Code, Cursor, Codex & Gemini CLI.",
    summary:
      "A native macOS banner the moment your AI coding agent finishes or needs input, whichever tool you use. Click it and you land back in the right terminal.",
    image: "/apps/aidonenow-logo.png",
    href: `https://aidonenow.com/?${UTM}`,
    site: "aidonenow.com",
    badge: "Mac · $20",
  },
  {
    name: "NotchFit",
    tagline: "Notch workouts while Claude codes.",
    summary:
      "Your MacBook notch coaches a short exercise set while Claude Code or Codex works. The \"Claude is done\" alert waits until your set ends. 239 exercises.",
    image: "/apps/notchfit-logo.png",
    href: `https://aidonenow.com/notchfit?${UTM}`,
    site: "aidonenow.com/notchfit",
    badge: "Mac · $20",
  },
  {
    name: "VibeLock",
    tagline: "Lock your Mac, keep the terminal visible.",
    summary:
      "Blocks keyboard and mouse while the screen stays on, so you can walk away and still watch your agent work. Unlock with Touch ID.",
    image: "/apps/vibelock-logo.png",
    href: `https://vibelock.site/?${UTM}`,
    site: "vibelock.site",
    badge: "Mac · $10",
  },
];

// Web products.
const WEB = [
  {
    name: "CountingUS",
    tagline: "Days-together counter page with a QR surprise.",
    summary:
      "A personal page that counts the days you have been together, revealed with a QR code. A small, very personal gift.",
    image: null,
    href: `https://countingus.com/?${UTM}`,
    site: "countingus.com",
  },
  {
    name: "FinalSaying",
    tagline: "Messages delivered after you're gone.",
    summary:
      "Write messages today that reach the people you love when you are gone: a digital legacy, delivered with care.",
    image: "/apps/finalsaying.png",
    href: `https://finalsaying.com/?${UTM}`,
    site: "finalsaying.com",
  },
  {
    name: "SafeRoutes",
    tagline: "Safe flight routes around closed airspace.",
    summary:
      "See which flight corridors avoid closed and restricted airspace, and compare routes before you book.",
    image: "/apps/saferoutes.png",
    href: `https://saferoutes.online/?${UTM}`,
    site: "saferoutes.online",
  },
  {
    name: "Hodolist",
    tagline: "City guides & Germany visa help.",
    summary:
      "City travel guides with budgets and safety notes, plus help with Germany's Opportunity Card and visa paperwork.",
    image: null,
    href: `https://hodolist.com/?${UTM}`,
    site: "hodolist.com",
  },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AppCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ececea;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  transition: transform 140ms ease, box-shadow 140ms ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);
  }
  > a { display: block; color: inherit; text-decoration: none; cursor: pointer; }
`;

const AppImage = styled.div`
  height: 160px;
  background: #f4f4f2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img { width: 128px; height: 128px; object-fit: contain; border-radius: 28px; }
  span {
    font-family: ui-serif, Georgia, serif;
    font-size: 56px;
    font-weight: 700;
    color: #111827;
  }
`;

const AppBody = styled.div`
  padding: 20px 22px 8px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const AppName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const FreeBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #047857;
  background: #d1fae5;
  border-radius: 999px;
  padding: 3px 10px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

const AppTagline = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #334155;
  margin-top: 6px;
`;

const AppSummary = styled.p`
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin: 10px 0 0;
`;

const AppLink = styled.div`
  margin-top: 14px;
  font-size: 13px;
  font-weight: 700;
  color: #111827;
`;

const Badges = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 22px 22px;
  margin-top: auto;
  a { border: 0; }
  img { height: 40px; width: auto; display: block; }
`;

const GroupTitle = styled.h2`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin: 56px 0 0;
`;

const Callout = styled.div`
  margin-top: 28px;
  padding: 18px 20px;
  border: 1px solid #ececea;
  border-radius: 14px;
  background: #fafaf7;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 15px;
  color: #334155;
  a { color: #111827; font-weight: 700; border-bottom: 1px solid #cbd5e1; }
`;

const Initial = ({ name }) => <span aria-hidden="true">{name.charAt(0)}</span>;

const StoreBadges = ({ app }) =>
  app.ios || app.play ? (
    <Badges>
      {app.ios ? (
        <a href={app.ios} rel="noopener" aria-label={`Download ${app.name} on the App Store`}>
          <img src="/apps/app-store-badge.svg" alt="Download on the App Store" width="120" height="40" />
        </a>
      ) : null}
      {app.play ? (
        <a href={app.play} rel="noopener" aria-label={`Get ${app.name} on Google Play`}>
          <img src="/apps/google-play-badge.svg" alt="Get it on Google Play" width="103" height="40" />
        </a>
      ) : null}
    </Badges>
  ) : null;

const InternalCard = ({ app }) => (
  <AppCard>
    <Link href={app.href}>
      <AppImage>
        <img src={app.image} alt={`${app.name} app icon`} loading="lazy" />
      </AppImage>
      <AppBody>
        <AppName>
          {app.name}
          {app.badge ? <FreeBadge>{app.badge}</FreeBadge> : null}
        </AppName>
        <AppTagline>{app.tagline}</AppTagline>
        <AppSummary>{app.summary}</AppSummary>
        <AppLink>Learn more →</AppLink>
      </AppBody>
    </Link>
    <StoreBadges app={app} />
  </AppCard>
);

const ExternalCard = ({ app }) => (
  <AppCard>
    <a href={app.href}>
      <AppImage>
        {app.image ? <img src={app.image} alt={`${app.name} logo`} loading="lazy" /> : <Initial name={app.name} />}
      </AppImage>
      <AppBody style={{ paddingBottom: 24 }}>
        <AppName>
          {app.name}
          {app.badge ? <FreeBadge>{app.badge}</FreeBadge> : null}
        </AppName>
        <AppTagline>{app.tagline}</AppTagline>
        <AppSummary>{app.summary}</AppSummary>
        <AppLink>Visit {app.site} →</AppLink>
      </AppBody>
    </a>
  </AppCard>
);

const AppsPage = () => (
  <Container>
    <Head>
      <title>Apps by Vilva Athiban: iPhone, Android & Mac utilities</title>
      <meta
        name="description"
        content="Small, private apps by Vilva Athiban: WhatsApp link & QR maker, Opus to MP3 converter, offline voice-note transcriber, chat to PDF, teleprompter, warranty tracker, and the Mac apps AI Done Now, NotchFit and VibeLock."
      />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content="Apps by Vilva Athiban: iPhone, Android & Mac utilities" />
      <meta
        property="og:description"
        content="Private, on-device utilities for iPhone, Android and Mac. No accounts, nothing uploaded."
      />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.vilvaathiban.com/apps/teleprompter-icon.png" />
    </Head>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Apps & Products by Vilva Athiban",
        url: URL,
        author: PERSON_REF,
        hasPart: [
          ...APPS.map((app) => ({
            "@type": ["SoftwareApplication", "MobileApplication"],
            name: app.name,
            url: `https://www.vilvaathiban.com${app.href}`,
            description: app.summary,
            operatingSystem: [app.ios && "iOS", app.play && "Android"].filter(Boolean).join(", ") || "iOS",
            ...(app.ios || app.play ? { sameAs: [app.ios, app.play].filter(Boolean) } : {}),
            author: PERSON_REF,
          })),
          ...MAC_APPS.map((app) => ({
            "@type": "SoftwareApplication",
            name: app.name,
            url: `https://${app.site}`,
            description: app.summary,
            operatingSystem: "macOS",
            applicationCategory: "DeveloperApplication",
            author: PERSON_REF,
          })),
          ...WEB.map((app) => ({ "@type": "WebSite", name: app.name, url: `https://${app.site}`, description: app.summary })),
        ],
      }}
    />
    <Header />
    <Wrap>
      <Eyebrow>Apps & Products</Eyebrow>
      <Title>Things I build and ship</Title>
      <Lead>
        Small, private utilities that do one job on the device: WhatsApp chat
        links and QR codes, .opus voice notes to MP3, offline voice-message
        transcription, chat exports to PDF, a free teleprompter, and a few Mac
        apps for people who code with AI agents. Nothing is uploaded, no
        accounts.
      </Lead>
      <Callout>
        Working with WhatsApp chats and voice notes? See all four chat apps on
        one page: <Link href="/apps/whatsapp-tools">WhatsApp power tools</Link>.
        Need an .opus file as MP3?{" "}
        <Link href="/blog/convert-opus-to-mp3-iphone-android">Free ways to convert .opus to MP3 on iPhone and Android</Link>.
      </Callout>

      <GroupTitle>iPhone & Android apps</GroupTitle>
      <Grid>
        {APPS.map((app) => (
          <InternalCard key={app.name} app={app} />
        ))}
      </Grid>

      <GroupTitle>Mac apps</GroupTitle>
      <Grid>
        {MAC_APPS.map((app) => (
          <ExternalCard key={app.name} app={app} />
        ))}
      </Grid>

      <GroupTitle>On the web</GroupTitle>
      <Grid>
        {WEB.map((app) => (
          <ExternalCard key={app.name} app={app} />
        ))}
      </Grid>
    </Wrap>
    <Footer />
  </Container>
);

export default AppsPage;
