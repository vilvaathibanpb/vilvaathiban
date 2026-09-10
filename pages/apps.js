import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrap, Eyebrow, Title, Lead, JsonLd } from "../components/service";

const URL = "https://vilvaathiban.com/apps";

const APPS = [
  {
    name: "Chat Link & QR Code Maker",
    tagline: "WhatsApp link generator and QR code maker, free, on your iPhone.",
    summary:
      "Turn a phone number into a wa.me click-to-chat link with a pre-filled message, save a printable QR code, and make a full-size profile picture that is not cropped. Works offline; nothing is uploaded.",
    image: "/apps/chat-link-qr-logo.png",
    href: "/apps/chat-link-qr-code-maker",
    internal: true,
    badge: "Free iOS app",
  },
  {
    name: "Voice Note Audio Converter",
    tagline: "Convert WhatsApp .opus voice notes to MP3 or WAV, free and offline.",
    summary:
      "Opus to MP3 converter that runs on the phone. Pick one or a hundred .opus, .ogg, .m4a or .aac files, tap Convert, share the MP3 or WAV. No upload, no account, no limits.",
    image: "/apps/audio-converter-logo.png",
    href: "/apps/voice-note-audio-converter",
    internal: true,
    badge: "Free iOS app",
  },
  {
    name: "Voice Note to Text",
    tagline: "Transcribe WhatsApp voice messages to text on-device, any language.",
    summary:
      "Share a voice note, read the transcript seconds later, copy or share it as .txt. The speech model ships in the app, so it works offline. One-time $2.99, no subscription.",
    image: "/apps/voice-to-text-logo.png",
    href: "/apps/voice-note-to-text",
    internal: true,
    badge: "iOS · $2.99",
  },
  {
    name: "Chat Export Studio: PDF",
    tagline: "Export a WhatsApp chat to a paginated PDF with statistics.",
    summary:
      "Open the .txt or .zip from Export Chat and get a clean PDF with message bubbles plus who-talks-most statistics. Parsed on your iPhone only. One-time $4.99.",
    image: "/apps/chat-export-logo.png",
    href: "/apps/chat-export-studio",
    internal: true,
    badge: "iOS · $4.99",
  },
  {
    name: "Teleprompter: Camera Overlay",
    tagline: "Free iOS teleprompter that floats your script over the camera and scrolls as you speak.",
    summary:
      "Free forever: record Reels, Shorts and TikToks while reading your script with perfect eye contact. Voice-driven scrolling runs 100% on-device and fully offline.",
    image: "/apps/teleprompter-logo.png",
    href: "/apps/teleprompter-camera-overlay",
    internal: true,
    badge: "Free iOS app",
  },
  {
    name: "AIDoneNow",
    tagline: "AI solutions delivered now.",
    summary:
      "Practical AI implementations for businesses — from agentic workflows to production AI systems.",
    image: "/apps/aidonenow.png",
    href: "https://aidonenow.com",
    internal: false,
  },
  {
    name: "FinalSaying",
    tagline: "Send messages to loved ones after death.",
    summary:
      "Write messages today that reach the people you love when you are gone — a digital legacy, delivered with care.",
    image: "/apps/finalsaying.png",
    href: "https://finalsaying.com",
    internal: false,
  },
  {
    name: "SafeRoutes",
    tagline: "Navigate through safer streets.",
    summary:
      "Route planning that prioritizes well-lit, safer paths — because the fastest route is not always the best one.",
    image: "/apps/saferoutes.png",
    href: "https://saferoutes.online",
    internal: false,
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

const AppCard = styled.a`
  display: flex;
  flex-direction: column;
  border: 1px solid #ececea;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: transform 140ms ease, box-shadow 140ms ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);
  }
`;

const AppImage = styled.div`
  height: 180px;
  background: ${(p) => p.bg || "#f4f4f2"};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    ${(p) =>
      p.contain
        ? "width: 150px; height: 150px; object-fit: contain;"
        : "width: 100%; height: 100%; object-fit: cover;"}
  }
`;

const AppBody = styled.div`
  padding: 20px 22px 24px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const AppName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
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

const AppsPage = () => (
  <Container>
    <Head>
      <title>iOS Apps: WhatsApp Link & QR Maker, Voice Note Converter, Transcriber, Chat to PDF | Vilva Athiban</title>
      <meta
        name="description"
        content="On-device iPhone utilities by Vilva Athiban: a free WhatsApp link and QR code maker, a free .opus voice note to MP3 converter, an offline voice-note transcriber, a chat-export-to-PDF tool, and a free camera-overlay teleprompter."
      />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content="iOS apps by Vilva Athiban: chat links & QR, voice note converter, transcriber, chat to PDF, teleprompter" />
      <meta
        property="og:description"
        content="Private, on-device iPhone utilities for WhatsApp exports and voice notes, plus a free camera-overlay teleprompter."
      />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://vilvaathiban.com/apps/teleprompter-icon.png" />
    </Head>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Apps & Products by Vilva Athiban",
        url: URL,
        hasPart: APPS.map((app) => ({
          "@type": app.internal ? "SoftwareApplication" : "WebSite",
          name: app.name,
          url: app.internal ? `https://vilvaathiban.com${app.href}` : app.href,
          description: app.summary,
        })),
      }}
    />
    <Header />
    <Wrap>
      <Eyebrow>Apps & Products</Eyebrow>
      <Title>Things I build and ship</Title>
      <Lead>
        Small, private iPhone utilities that do one job on the device: make
        WhatsApp chat links and QR codes, convert .opus voice notes to MP3,
        transcribe voice messages offline, turn chat exports into PDFs, and a
        free teleprompter for creators. Nothing is uploaded, no accounts.
      </Lead>
      <Grid>
        {APPS.map((app) =>
          app.internal ? (
            <Link key={app.name} href={app.href} passHref legacyBehavior>
              <AppCard>
                <AppImage contain>
                  <img src={app.image} alt={`${app.name} logo`} />
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
              </AppCard>
            </Link>
          ) : (
            <AppCard key={app.name} href={app.href} target="_blank" rel="noreferrer">
              <AppImage>
                <img src={app.image} alt={`${app.name} preview`} />
              </AppImage>
              <AppBody>
                <AppName>{app.name}</AppName>
                <AppTagline>{app.tagline}</AppTagline>
                <AppSummary>{app.summary}</AppSummary>
                <AppLink>Visit {app.href.replace("https://", "")} →</AppLink>
              </AppBody>
            </AppCard>
          )
        )}
      </Grid>
    </Wrap>
    <Footer />
  </Container>
);

export default AppsPage;
