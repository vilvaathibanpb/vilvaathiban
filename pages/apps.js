import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrap, Eyebrow, Title, Lead, JsonLd } from "../components/service";
import { PERSON_REF } from "../lib/person";
import StoreBadges from "../components/StoreBadges";
import { APPS, GAMES } from "../data/catalog";

const URL = "https://www.vilvaathiban.com/apps";

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
  color: ${(p) => (p.$pending ? "#92400e" : "#047857")};
  background: ${(p) => (p.$pending ? "#fef3c7" : "#d1fae5")};
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
  padding: 10px 22px 22px;
  margin-top: auto;
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

const CardBadges = ({ app }) =>
  app.ios || app.play || app.iosSoon || app.playSoon ? (
    <Badges>
      <StoreBadges name={app.name} ios={app.ios} play={app.play} iosSoon={app.iosSoon} playSoon={app.playSoon} />
    </Badges>
  ) : null;

const InternalCard = ({ app }) => (
  <AppCard>
    <Link href={`/apps/${app.slug}`}>
      <AppImage>
        <img src={app.image} alt={`${app.name} app icon`} loading="lazy" />
      </AppImage>
      <AppBody>
        <AppName>
          {app.name}
          {app.badge ? <FreeBadge $pending={app.badge === "In App Review"}>{app.badge}</FreeBadge> : null}
        </AppName>
        <AppTagline>{app.tagline}</AppTagline>
        <AppSummary>{app.summary}</AppSummary>
        <AppLink>Learn more →</AppLink>
      </AppBody>
    </Link>
    <CardBadges app={app} />
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
        content="Every app and game by Vilva Athiban for iPhone, Android and Mac: WhatsApp tools, Opus to MP3, voice notes to text, a teleprompter, Night Cam, a kids police call app, offline games, and AI Done Now."
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
          ...[...APPS, ...GAMES].map((app) => ({
            "@type": GAMES.includes(app) ? ["VideoGame", "MobileApplication"] : ["SoftwareApplication", "MobileApplication"],
            name: app.name,
            url: `https://www.vilvaathiban.com/apps/${app.slug}`,
            description: app.summary,
            operatingSystem: [app.ios || app.iosSoon ? "iOS" : null, app.play || app.playSoon ? "Android" : null].filter(Boolean).join(", "),
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
        Small, private apps that do one job on the device: WhatsApp chat
        links and QR codes, .opus voice notes to MP3, offline voice-message
        transcription, chat exports to PDF, a free teleprompter, a night-sky
        camera, a pretend police call for kids, a few offline games, and Mac apps for
        people who code with AI agents. Nothing is uploaded, no accounts.
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

      <GroupTitle>Games</GroupTitle>
      <Grid>
        {GAMES.map((app) => (
          <InternalCard key={app.name} app={{ ...app, badge: app.iosSoon ? "In App Review" : `${app.platform} · Free` }} />
        ))}
      </Grid>
      <Callout>
        More about each game, with screenshots: <Link href="/games">all games</Link>.
      </Callout>

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
