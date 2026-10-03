import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import StoreBadges from "../../components/StoreBadges";
import { Container } from "../about";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq, JsonLd } from "../../components/service";
import { PERSON_REF } from "../../lib/person";

const SITE = "https://www.vilvaathiban.com";
const URL = `${SITE}/apps/whatsapp-tools`;
const SANS = `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

const TOOLS = [
  {
    name: "Chat Export Studio: PDF",
    job: "Turn an exported WhatsApp chat into a readable PDF",
    text: "WhatsApp's Export Chat gives you a .txt inside a .zip. Open it in Chat Export Studio and get a paginated PDF with one bubble per message, dates, and who-talks-most statistics. Works with iPhone and Android exports. Parsed on your phone; the chat is never uploaded.",
    icon: "/apps/chat-export-logo.png",
    href: "/apps/chat-export-studio",
    guide: { href: "/blog/export-whatsapp-chat-to-pdf-iphone", label: "Guide: export a WhatsApp chat to PDF" },
    ios: "https://apps.apple.com/us/app/chat-export-studio-pdf/id6810375389",
    play: "https://play.google.com/store/apps/details?id=com.vilva.wachatexport",
  },
  {
    name: "Chat Link & QR Code Maker",
    job: "Let customers message you without saving your number",
    text: "Make a wa.me click-to-chat link with a pre-filled message, save it as a printable QR code for a shop window, menu or business card, and set a full-size profile picture that is not cropped. Offline; the number you type stays on the phone.",
    icon: "/apps/chat-link-qr-logo.png",
    href: "/apps/chat-link-qr-code-maker",
    guide: { href: "/blog/whatsapp-link-generator-qr-code-full-size-dp", label: "Guide: links, QR codes and full-size profile pictures" },
    ios: "https://apps.apple.com/us/app/chat-link-qr-code-maker/id6810372979",
    play: "https://play.google.com/store/apps/details?id=com.vilva.watools",
  },
  {
    name: "Voice Note to Text",
    job: "Read a voice message instead of listening to it",
    text: "Share a WhatsApp voice note to the app and read the transcript seconds later, in the language it was spoken. The speech model ships inside the app, so it works offline and the audio never leaves the device. Copy the text or share it as .txt.",
    icon: "/apps/voice-to-text-logo.png",
    href: "/apps/voice-note-to-text",
    guide: { href: "/blog/transcribe-whatsapp-voice-message-to-text-iphone", label: "Guide: transcribe a WhatsApp voice message" },
    ios: "https://apps.apple.com/us/app/voice-note-to-text-offline/id6810376600",
    play: "https://play.google.com/store/apps/details?id=com.vilva.wavoicetotext",
  },
  {
    name: "Opus to MP3 Converter",
    job: "Play or edit a voice note anywhere",
    text: "WhatsApp voice notes are .opus files that many players, editors and car stereos will not open. Convert one or a hundred of them to MP3 or WAV on the phone and share the result. No upload, no account.",
    icon: "/apps/audio-converter-logo.png",
    href: "/apps/voice-note-audio-converter",
    guide: { href: "/blog/convert-opus-to-mp3-iphone-android", label: "Guide: convert .opus to MP3 on iPhone and Android" },
    ios: "https://apps.apple.com/us/app/opus-to-mp3-converter/id6810373840",
    play: "https://play.google.com/store/apps/details?id=com.vilva.waaudioconverter",
  },
];

const FREE = [
  { href: "/tools/opus-to-mp3", label: "Opus to MP3 converter in your browser", blurb: "Convert .opus voice notes on a computer without installing anything." },
  { href: "/tools/whatsapp-link-generator", label: "WhatsApp link & QR code generator", blurb: "Make a wa.me link and a QR code in the browser." },
  { href: "/tools/whatsapp-dp-full-size", label: "Full-size profile picture maker", blurb: "Pad a photo to a square so it is not cropped." },
];

const FAQS = [
  {
    q: "Are these official WhatsApp apps?",
    a: "No. They are independent apps built by Vilva Athiban P B. They are not affiliated with, endorsed by, or connected to WhatsApp LLC or Meta Platforms, Inc. They work with files WhatsApp itself lets you export or share: chat exports, voice notes and wa.me links.",
  },
  {
    q: "Do the apps read my chats or need my WhatsApp login?",
    a: "No. None of them log in to WhatsApp or read anything on their own. You choose a file in WhatsApp (a chat export or a voice note) and share it to the app. Processing happens on your phone and nothing is uploaded.",
  },
  {
    q: "Do they work on Android as well as iPhone?",
    a: "Yes. All four are on the App Store and on Google Play. Use the badges next to each app.",
  },
  {
    q: "Which one should I install first?",
    a: "Match it to the job. Need the words from a voice message: Voice Note to Text. Need the audio as MP3: Opus to MP3 Converter. Need a chat as a document: Chat Export Studio. Need customers to message you: Chat Link & QR Code Maker.",
  },
];

const Grid = styled.div`
  display: grid;
  gap: 18px;
  margin-top: 22px;
`;

const Tool = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 18px;
  padding: 20px;
  border: 1px solid #ececea;
  border-radius: 14px;
  background: #fff;
  font-family: ${SANS};
  > img { width: 72px; height: 72px; border-radius: 18px; }
  h3 { margin: 0; font-size: 18px; }
  h3 a { border: 0; }
  .job { font-weight: 600; color: #334155; font-size: 15px; margin: 4px 0 8px; }
  p { font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 10px; }
  .links { font-size: 14px; display: flex; gap: 6px 16px; flex-wrap: wrap; }
  .badges { margin-top: 12px; }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Disclaimer = styled.p`
  margin-top: 40px;
  font-family: ${SANS};
  font-size: 13px;
  color: #64748b;
  line-height: 1.6;
`;

export default function WhatsAppTools() {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "WhatsApp power tools",
      url: URL,
      author: PERSON_REF,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: TOOLS.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": ["SoftwareApplication", "MobileApplication"],
            name: t.name,
            url: `${SITE}${t.href}`,
            description: t.text,
            operatingSystem: "iOS, Android",
            applicationCategory: "UtilitiesApplication",
            sameAs: [t.ios, t.play],
            author: PERSON_REF,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Apps", item: `${SITE}/apps` },
        { "@type": "ListItem", position: 3, name: "WhatsApp power tools", item: URL },
      ],
    },
  ];

  return (
    <Container>
      <Head>
        <title>WhatsApp Power Tools: Chat to PDF, Voice Note to Text, Opus to MP3, Link & QR</title>
        <meta
          name="description"
          content="Four on-device apps for iPhone and Android that do what WhatsApp does not: export a chat to PDF, transcribe voice notes offline, convert .opus to MP3, and make wa.me links and QR codes."
        />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WhatsApp power tools: four private apps for chats and voice notes" />
        <meta property="og:description" content="Chat to PDF, voice note to text, .opus to MP3, and click-to-chat links with QR codes. On-device, nothing uploaded." />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={`${SITE}/apps/chat-export-icon.png`} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <JsonLd data={ld} />
      <Header />
      <Wrap>
        <Eyebrow>
          <Link href="/apps">Apps</Link> · iPhone & Android
        </Eyebrow>
        <Title>WhatsApp power tools</Title>
        <Lead>
          WhatsApp is great at sending messages and not much else. Export a chat
          and you get a raw .txt. Save a voice note and you get an .opus file
          nothing wants to play. These four small apps pick up where WhatsApp
          stops. Each does one job, on your phone, without uploading your chats
          or voice notes anywhere.
        </Lead>

        <Section>
          <h2>Pick the tool for the job</h2>
          <Grid>
            {TOOLS.map((t) => (
              <Tool key={t.name}>
                <img src={t.icon} alt={`${t.name} app icon`} width="72" height="72" loading="lazy" />
                <div>
                  <h3>
                    <Link href={t.href}>{t.name}</Link>
                  </h3>
                  <div className="job">{t.job}</div>
                  <p>{t.text}</p>
                  <div className="links">
                    <Link href={t.href}>App details</Link>
                    <Link href={t.guide.href}>{t.guide.label}</Link>
                  </div>
                  <StoreBadges className="badges" name={t.name} ios={t.ios} play={t.play} />
                </div>
              </Tool>
            ))}
          </Grid>
        </Section>

        <Section>
          <h2>Why on-device matters for WhatsApp files</h2>
          <p>
            WhatsApp chats are end-to-end encrypted while they travel. The moment
            you export a chat or a voice note and drop it into a website, that
            protection is gone: the file sits on someone else&apos;s server. Every
            app on this page processes the file on the phone instead. There is no
            account to create and nothing to delete afterwards.
          </p>
        </Section>

        <Section>
          <h2>Free browser tools, no install</h2>
          <p>On a computer, or just trying it once? These run in your browser and are free.</p>
          <ul>
            {FREE.map((f) => (
              <li key={f.href}>
                <Link href={f.href}>{f.label}</Link>: {f.blurb}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2>Questions</h2>
          <Faq>
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Faq>
        </Section>

        <Disclaimer>
          These apps are independent utilities built by Vilva Athiban P B. They are
          not affiliated with, endorsed by, or connected to WhatsApp LLC or Meta
          Platforms, Inc. WhatsApp is a registered trademark of Meta Platforms, Inc.
        </Disclaimer>
      </Wrap>
      <Footer />
    </Container>
  );
}
