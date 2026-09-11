import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../about";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrap, Eyebrow, Section, JsonLd } from "../../components/service";
import { TOOL_LIST } from "../../data/tools";

const SITE = "https://vilvaathiban.com";
const SANS = `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

const H1 = styled.h1`
  font-size: clamp(30px, 4.2vw, 44px);
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: #111827;
  font-weight: 800;
  margin: 8px 0 18px;
  font-family: ui-serif, Georgia, serif;
`;

const Lead = styled.p`
  font-size: clamp(18px, 2.1vw, 21px);
  color: #1f2937;
  line-height: 1.6;
  margin: 0 0 26px;
  border-left: 4px solid #111827;
  padding-left: 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 8px;
`;

const Tile = styled.a`
  --accent: ${(p) => p.color};
  display: block;
  padding: 20px 22px;
  border: 1px solid #e5e7eb;
  border-left: 4px solid ${(p) => p.color};
  border-radius: 14px;
  background: #fff;
  text-decoration: none;
  font-family: ${SANS};
  transition: box-shadow 0.18s ease, transform 0.18s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(17, 24, 39, 0.09);
    transform: translateY(-2px);
  }

  h2 {
    margin: 0 0 8px;
    font-size: 18px;
    color: #111827;
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: #475569;
  }

  span {
    display: inline-block;
    margin-top: 12px;
    font-size: 13px;
    font-weight: 700;
    color: var(--accent);
  }
`;

export default function ToolsIndex() {
  const url = `${SITE}/tools`;
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free browser tools",
    itemListElement: TOOL_LIST.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${SITE}/tools/${t.slug}`,
    })),
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Free tools", item: url },
    ],
  };

  return (
    <Container>
      <Head>
        <title>Free Browser Tools: Links, QR Codes and Audio Conversion</title>
        <meta
          name="description"
          content="Small, free tools that run entirely in your browser. Make a wa.me link and QR code, fix a cropped profile picture, or convert opus voice notes to MP3. No sign-up, nothing uploaded."
        />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free browser tools" />
        <meta
          property="og:description"
          content="Links, QR codes, profile pictures and audio conversion. Free, no sign-up, nothing uploaded."
        />
        <meta property="og:url" content={url} />
      </Head>
      <JsonLd data={itemList} />
      <JsonLd data={crumbs} />
      <Header />
      <Wrap>
        <Eyebrow>Free tools · Nothing uploaded · No sign-up</Eyebrow>
        <H1>Free tools that run in your browser</H1>
        <Lead>
          Each of these does one small job and does it on your own device. There is no
          account, no upload and no queue, because there is no server doing the work.
        </Lead>

        <Grid>
          {TOOL_LIST.map((t) => (
            <Link key={t.slug} href={`/tools/${t.slug}`} passHref legacyBehavior>
              <Tile color={t.color}>
                <h2>{t.name}</h2>
                <p>{t.head.description}</p>
                <span>Open the tool</span>
              </Tile>
            </Link>
          ))}
        </Grid>

        <Section>
          <h2>Why these run in the browser</h2>
          <p>
            Every one of these jobs is small enough to do on the device you are already
            holding. Sending a voice note or a photo to a server to do it would be slower,
            would need an account to stop abuse, and would put your file on someone else's
            machine for no benefit to you.
          </p>
          <p>
            So none of them do. Open a tool, use it, close the tab. If you want the same
            thing on your phone without a browser, each page links to the matching iOS app
            at the bottom.
          </p>
        </Section>

        <Section>
          <h2>The apps</h2>
          <p>
            These tools are the browser versions of four iPhone utilities:{" "}
            <Link href="/apps/chat-link-qr-code-maker">Chat Link &amp; QR Code Maker</Link>,{" "}
            <Link href="/apps/voice-note-audio-converter">Opus to MP3 Converter</Link>,{" "}
            <Link href="/apps/voice-note-to-text">Voice Note to Text</Link> and{" "}
            <Link href="/apps/chat-export-studio">Chat Export Studio</Link>. All four do
            their work on the device, with no account and no server.
          </p>
        </Section>
      </Wrap>
      <Footer />
    </Container>
  );
}
