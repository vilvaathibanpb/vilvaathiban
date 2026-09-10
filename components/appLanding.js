import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../pages/about";
import Header from "./Header";
import Footer from "./Footer";
import { Wrap, Eyebrow, Section, Steps, Cards, Card, Faq, JsonLd } from "./service";

// Search-intent-first landing page for a single app. Every page built with this
// component leads with the question people actually type into Google / an LLM,
// answers it in the first paragraph, shows the outcome (screenshots), then the
// how-to, the "why on-device" argument, a comparison, FAQs and related guides.
// Structured data: SoftwareApplication + HowTo + FAQPage + BreadcrumbList.

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

const Answer = styled.p`
  font-size: clamp(18px, 2.1vw, 21px);
  color: #1f2937;
  line-height: 1.6;
  margin: 0 0 22px;
  border-left: 4px solid ${(p) => p.color || "#111827"};
  padding-left: 18px;
`;

const HeroRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Logo = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 26px;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.14);
`;

const Pills = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  font-family: ${SANS};
`;

const Pill = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 4px 12px;
  color: ${(p) => p.fg || "#047857"};
  background: ${(p) => p.bg || "#d1fae5"};
`;

const Facts = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px 20px;
  margin: 24px 0 0;
  padding: 18px 20px;
  border: 1px solid #ececea;
  border-radius: 14px;
  background: #fafaf7;
  font-family: ${SANS};
  dt { font-size: 11.5px; letter-spacing: 0.12em; text-transform: uppercase; color: #64748b; font-weight: 700; }
  dd { margin: 3px 0 0; font-size: 15px; color: #111827; font-weight: 600; }
`;

const Stores = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 22px;
  font-family: ${SANS};
  a img { height: 52px; display: block; }
`;

const PlaySoon = styled.span`
  display: inline-flex;
  align-items: center;
  height: 52px;
  padding: 0 16px;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  color: #64748b;
  font-size: 13px;
  font-weight: 600;
`;

const Shots = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 22px;
  img { width: 100%; height: auto; border-radius: 18px; display: block; }
  figcaption { font-family: ${SANS}; font-size: 13px; color: #475569; margin-top: 8px; text-align: center; }
  @media (max-width: 560px) { grid-template-columns: 1fr 1fr; }
`;

const Table = styled.div`
  overflow-x: auto;
  margin-top: 18px;
  table { border-collapse: collapse; width: 100%; font-family: ${SANS}; font-size: 15px; }
  th, td { text-align: left; padding: 11px 12px; border-bottom: 1px solid #ececea; vertical-align: top; }
  th { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #64748b; }
  td:first-child { font-weight: 600; color: #111827; white-space: nowrap; }
  tr td.yes { color: #047857; font-weight: 600; }
  tr td.no { color: #b91c1c; }
`;

const Intents = styled.div`
  margin-top: 8px;
  h3 { font-size: 18px; margin: 22px 0 6px; }
  p { color: #334155; }
`;

const RelatedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
  li a {
    display: block;
    padding: 14px 16px;
    border: 1px solid #ececea;
    border-radius: 12px;
    font-family: ${SANS};
    font-size: 15.5px;
    font-weight: 600;
    color: #111827;
    text-decoration: none;
    border-bottom: 1px solid #ececea;
  }
  li a:hover { background: #fafaf7; }
  li a span { display: block; font-weight: 400; color: #475569; font-size: 14px; margin-top: 3px; }
`;

const Disclaimer = styled.p`
  margin-top: 40px;
  font-family: ${SANS};
  font-size: 13px;
  color: #64748b;
  line-height: 1.6;
`;

const LegalLinks = styled.div`
  margin-top: 16px;
  font-family: ${SANS};
  font-size: 14px;
  color: #475569;
  a { color: #111827; font-weight: 600; text-decoration: underline; }
`;

export default function AppLanding({ app }) {
  const url = `${SITE}/apps/${app.slug}`;
  const storeUrl = `https://apps.apple.com/app/id${app.appStoreId}`;
  const icon = `${SITE}/apps/${app.iconBase}-icon.png`;
  const free = app.price.amount === "0";

  const software = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "MobileApplication"],
    name: app.name,
    alternateName: app.alternateNames,
    description: app.head.description,
    applicationCategory: app.category || "UtilitiesApplication",
    operatingSystem: "iOS 15.1 or later",
    isAccessibleForFree: free,
    offers: { "@type": "Offer", price: app.price.amount, priceCurrency: "USD", availability: "https://schema.org/InStock" },
    downloadUrl: storeUrl,
    installUrl: storeUrl,
    featureList: app.features.map((f) => f.title),
    screenshot: app.screenshots.map((s) => ({ "@type": "ImageObject", contentUrl: `${SITE}${s.src}`, caption: s.alt })),
    image: icon,
    url,
    author: { "@type": "Person", name: "Vilva Athiban P B", url: SITE },
    publisher: { "@type": "Person", name: "Vilva Athiban P B", url: SITE },
    softwareVersion: "1.0",
    datePublished: "2026-09-10",
    keywords: app.head.keywords,
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: app.howTo.title,
    description: app.howTo.intro,
    totalTime: "PT1M",
    tool: [{ "@type": "HowToTool", name: `${app.name} (iOS app)` }],
    step: app.howTo.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: app.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Apps", item: `${SITE}/apps` },
      { "@type": "ListItem", position: 3, name: app.name, item: url },
    ],
  };

  return (
    <Container>
      <Head>
        <title>{app.head.title}</title>
        <meta name="description" content={app.head.description} />
        <meta name="keywords" content={app.head.keywords} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vilva Athiban P B" />
        <meta property="og:title" content={app.head.ogTitle || app.head.title} />
        <meta property="og:description" content={app.head.ogDescription || app.head.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={icon} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={app.head.ogTitle || app.head.title} />
        <meta name="twitter:description" content={app.head.ogDescription || app.head.description} />
        <meta name="twitter:image" content={icon} />
        <meta name="apple-itunes-app" content={`app-id=${app.appStoreId}`} />
      </Head>
      <JsonLd data={software} />
      <JsonLd data={howTo} />
      <JsonLd data={faq} />
      <JsonLd data={crumbs} />
      <Header />
      <Wrap>
        <Eyebrow>
          <Link href="/apps">Apps</Link> · iOS · {free ? "Free" : app.price.label}
        </Eyebrow>
        <HeroRow>
          <Logo src={`/apps/${app.iconBase}-logo.png`} alt={`${app.name} app icon`} width="112" height="112" />
          <div style={{ flex: 1, minWidth: 260 }}>
            <Pills>
              <Pill>{free ? "Free iOS app" : `${app.price.label} · no subscription`}</Pill>
              <Pill fg="#1e40af" bg="#dbeafe">100% on-device</Pill>
              <Pill fg="#6b21a8" bg="#f3e8ff">Works offline</Pill>
            </Pills>
            <H1>{app.h1}</H1>
          </div>
        </HeroRow>
        <Answer color={app.color}>{app.answer}</Answer>
        <Stores>
          <a href={storeUrl} aria-label={`Download ${app.name} on the App Store`} rel="noopener">
            <img src="/apps/app-store-badge.svg" alt="Download on the App Store" width="156" height="52" />
          </a>
          <PlaySoon>Google Play: Android version in progress</PlaySoon>
        </Stores>
        <Facts>
          {app.quickFacts.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </Facts>

        <Section>
          <h2>{app.screenshotsTitle}</h2>
          <Shots>
            {app.screenshots.map((s) => (
              <figure key={s.src} style={{ margin: 0 }}>
                <img src={s.src} alt={s.alt} loading="lazy" width="560" height="1217" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </Shots>
        </Section>

        <Section>
          <h2>{app.howTo.title}</h2>
          <p>{app.howTo.intro}</p>
          <Steps>
            {app.howTo.steps.map((s) => (
              <li key={s.name}>
                <strong>{s.name}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </Steps>
        </Section>

        <Section>
          <h2>{app.featuresTitle}</h2>
          <Cards>
            {app.features.map((f) => (
              <Card key={f.title}>
                <h3><span style={{ marginRight: 8 }}>{f.icon}</span>{f.title}</h3>
                <p>{f.text}</p>
              </Card>
            ))}
          </Cards>
        </Section>

        <Section>
          <h2>{app.intentsTitle}</h2>
          <Intents>
            {app.intents.map((it) => (
              <div key={it.h}>
                <h3>{it.h}</h3>
                <p>{it.p}</p>
              </div>
            ))}
          </Intents>
        </Section>

        <Section>
          <h2>{app.compare.title}</h2>
          <p>{app.compare.intro}</p>
          <Table>
            <table>
              <thead>
                <tr>{app.compare.columns.map((c) => <th key={c}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {app.compare.rows.map((r) => (
                  <tr key={r[0]}>
                    {r.map((cell, i) => {
                      const cls = typeof cell === "string" && cell.startsWith("✓") ? "yes" : typeof cell === "string" && cell.startsWith("✗") ? "no" : "";
                      return <td key={i} className={cls}>{cell}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </Section>

        <Section>
          <h2>Frequently asked questions</h2>
          <Faq>
            {app.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Faq>
        </Section>

        <Section>
          <h2>Step-by-step guides</h2>
          <RelatedList>
            {app.guides.map((g) => (
              <li key={g.href}>
                <Link href={g.href}>{g.title}<span>{g.blurb}</span></Link>
              </li>
            ))}
          </RelatedList>
        </Section>

        <Section>
          <h2>More on-device apps for chat exports and voice notes</h2>
          <RelatedList>
            {app.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.name}<span>{r.blurb}</span></Link>
              </li>
            ))}
          </RelatedList>
        </Section>

        <Disclaimer>{app.disclaimer}</Disclaimer>
        <LegalLinks>
          <Link href={`/apps/${app.slug}/privacy`}>Privacy Policy</Link>
          {" · "}
          <Link href={`/apps/${app.slug}/support`}>Support</Link>
          {" · "}
          <Link href="/apps">All apps</Link>
        </LegalLinks>
      </Wrap>
      <Footer />
    </Container>
  );
}
