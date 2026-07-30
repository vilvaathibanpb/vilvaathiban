import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../about";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Wrap,
  Eyebrow,
  Title,
  Lead,
  Section,
  Cards,
  Card,
  Faq,
  JsonLd,
} from "../../components/service";

const URL = "https://vilvaathiban.com/apps/teleprompter-camera-overlay";
// TODO: set the real App Store URL once the app is live.
const APP_STORE_URL = "#";

const FAQS = [
  {
    q: "Is Teleprompter: Camera Overlay really free?",
    a: "Yes. The app is free to download and every feature works in the free version — voice-driven scrolling, 4K recording, unlimited scripts, and the takes library. Free users see an occasional ad; a small one-time purchase removes ads forever. There is no subscription and no watermark.",
  },
  {
    q: "How does the teleprompter scroll as I speak?",
    a: "The app listens with your iPhone's built-in, on-device speech recognition and matches your spoken words against your script in real time. The script scrolls at exactly your pace — speak faster, slower, or pause completely and it follows. If you stumble or jump back to the top, it automatically finds your place again.",
  },
  {
    q: "Does my voice or video get uploaded anywhere?",
    a: "No. Speech recognition runs 100% on-device using Apple's frameworks, and your scripts, voice and recordings never leave your iPhone. The whole app works in airplane mode.",
  },
  {
    q: "Will the teleprompter text appear in my recorded video?",
    a: "No. The script is an overlay on your screen only — your saved video is a clean, professional clip without any text on it. That's what makes it perfect for Instagram Reels, YouTube Shorts and TikTok.",
  },
  {
    q: "How do I keep eye contact with the camera while reading a script?",
    a: "The script floats directly over the camera preview, next to the front lens, so your eyes stay on the camera while you read. No more darting eyes or the 'reading a script' look — your audience sees natural eye contact.",
  },
  {
    q: "Can I record video while reading my script at the same time?",
    a: "Yes — that's the core of the app. Tap record and the camera captures portrait 4K video while your script scrolls over the preview. When you finish, save to Photos in full quality or post straight to your favorite apps.",
  },
  {
    q: "What if I don't want voice scrolling?",
    a: "Switch to classic auto-scroll with one tap: the script moves at a constant speed you control with a slider. Tap to pause, drag to jump anywhere. Text size is adjustable in both modes, and there's a mirror mode for teleprompter rigs.",
  },
  {
    q: "Which languages does the voice-follow support?",
    a: "The app automatically detects the language of your script and listens in that language — it supports every language your iPhone's on-device speech recognition supports, including English, German, Spanish, French, and many more.",
  },
  {
    q: "Does it work on Android?",
    a: "Teleprompter: Camera Overlay is currently iOS-only, built natively for iPhone. An Android version may come later.",
  },
];

const Hero = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin: 8px 0 4px;
  flex-wrap: wrap;
`;

const LogoBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 28px;
  background: #101014;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 12px 32px rgba(17, 24, 39, 0.18);
  img {
    width: 96px;
    height: 96px;
    object-fit: contain;
  }
`;

const FreePill = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #047857;
  background: #d1fae5;
  border-radius: 999px;
  padding: 4px 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const StoreBadge = styled.a`
  display: inline-block;
  margin-top: 18px;
  img {
    height: 54px;
  }
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
`;

const ComingSoon = styled.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 6px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const LegalLinks = styled.div`
  margin-top: 40px;
  font-size: 14px;
  color: #475569;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  a {
    color: #111827;
    font-weight: 600;
    text-decoration: underline;
  }
`;

const TeleprompterPage = () => (
  <Container>
    <Head>
      <title>
        Free Teleprompter App for Reels & Shorts — Camera Overlay, Scrolls As
        You Speak
      </title>
      <meta
        name="description"
        content="Teleprompter: Camera Overlay is a free iOS teleprompter app that floats your script over the camera and scrolls as you speak. Record Instagram Reels, YouTube Shorts & TikToks in 4K with perfect eye contact — 100% offline, on-device voice tracking, no watermark."
      />
      <meta
        name="keywords"
        content="teleprompter app, free teleprompter, camera overlay teleprompter, teleprompter for reels, teleprompter for shorts, teleprompter for tiktok, voice teleprompter, scrolls as you speak, autocue app, iphone teleprompter, record video while reading script"
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta property="og:title" content="Free Teleprompter App — Camera Overlay, Scrolls As You Speak" />
      <meta
        property="og:description"
        content="Float your script over the camera and record Reels & Shorts in 4K while it scrolls to your voice. Free, offline, no watermark."
      />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://vilvaathiban.com/apps/teleprompter-icon.png" />
      <meta name="twitter:card" content="summary" />
    </Head>
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Teleprompter: Camera Overlay",
        operatingSystem: "iOS",
        applicationCategory: "MultimediaApplication",
        description:
          "Free iOS teleprompter app that overlays your script on the camera and scrolls as you speak. Record Reels, Shorts and TikToks in 4K with natural eye contact. Works fully offline with on-device speech recognition.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        author: {
          "@type": "Person",
          name: "Vilva Athiban P B",
          url: "https://vilvaathiban.com",
        },
        url: URL,
        image: "https://vilvaathiban.com/apps/teleprompter-icon.png",
      }}
    />
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps">Apps</Link> · iOS · Free
      </Eyebrow>
      <Hero>
        <LogoBox>
          <img src="/apps/teleprompter-logo.png" alt="Teleprompter: Camera Overlay app logo — teleprompter screen mounted on a camera" />
        </LogoBox>
        <div>
          <FreePill>100% Free iOS App</FreePill>
          <Title style={{ margin: 0 }}>
            Free Teleprompter: Camera&nbsp;Overlay
          </Title>
        </div>
      </Hero>
      <Lead>
        A <b>100% free</b> teleprompter that floats your script <b>over the camera</b> and
        scrolls it <b>as you speak</b>. Record Instagram Reels, YouTube Shorts
        and TikToks in 4K with perfect eye contact — no memorizing, no darting
        eyes, no twenty takes.
      </Lead>
      <StoreBadge href={APP_STORE_URL} disabled aria-label="Download on the App Store">
        <img src="/apps/app-store-badge.svg" alt="Download on the App Store" />
      </StoreBadge>
      <ComingSoon>Free download — launching on the App Store very soon.</ComingSoon>

      <Section>
        <h2>A genuinely free teleprompter — read your script and look into the lens at the same time</h2>
        <p>
          Every creator knows the problem: you write a great script, hit
          record, and then your eyes wander off-camera to read it. The result
          looks like you&apos;re reading, because you are. Teleprompter: Camera
          Overlay fixes this the way news anchors do — the script sits directly
          over the live camera preview, right next to the front lens, so
          reading <i>is</i> looking at the camera.
        </p>
      </Section>

      <Section>
        <h2>What makes it different</h2>
        <Cards>
          <Card>
            <h3>🎙️ Scrolls as you speak</h3>
            <p>
              On-device speech recognition follows your voice word by word.
              Speak fast, slow down, pause, stumble, or jump back to the top —
              the script finds your pace and your place, automatically.
            </p>
          </Card>
          <Card>
            <h3>🎬 Records while you read</h3>
            <p>
              Portrait 4K video from the front or back camera, recorded while
              the script scrolls. The overlay never appears in your video —
              you get a clean, post-ready clip.
            </p>
          </Card>
          <Card>
            <h3>✈️ 100% offline & private</h3>
            <p>
              Voice tracking runs entirely on your iPhone. Scripts, audio and
              video never leave your device — record in airplane mode if you
              like.
            </p>
          </Card>
          <Card>
            <h3>🆓 Free — actually free</h3>
            <p>
              All features free, no watermark, no subscription. An occasional
              ad keeps it free; a small one-time purchase removes ads forever.
            </p>
          </Card>
          <Card>
            <h3>📱 Built for Reels & Shorts</h3>
            <p>
              Portrait-first recording, an in-app takes library, save to
              Photos in full quality, and one-tap posting to your favorite
              social apps.
            </p>
          </Card>
          <Card>
            <h3>⚙️ Full manual control too</h3>
            <p>
              Classic auto-scroll mode with precise speed control, adjustable
              text size, tap to pause, drag to jump, and mirror mode for
              teleprompter rigs.
            </p>
          </Card>
        </Cards>
      </Section>

      <Section>
        <h2>Frequently asked questions</h2>
        {FAQS.map((f) => (
          <Faq key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </Faq>
        ))}
      </Section>

      <LegalLinks>
        <Link href="/apps/teleprompter-camera-overlay/privacy">Privacy Policy</Link>
        {" · "}
        <Link href="/apps/teleprompter-camera-overlay/support">Support</Link>
        {" · "}
        <Link href="/apps">All apps</Link>
      </LegalLinks>
    </Wrap>
    <Footer />
  </Container>
);

export default TeleprompterPage;
