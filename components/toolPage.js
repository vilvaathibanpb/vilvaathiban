import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../pages/about";
import Header from "./Header";
import Footer from "./Footer";
import { Wrap, Eyebrow, Section, Steps, Cards, Card, Faq, JsonLd } from "./service";

// Shell for a free browser tool page.
//
// Why these pages exist: the keyword research in ios-utils/PLAN.md put the big
// demand on the *free* side (wa.me link generator, opus to mp3) and only a
// fraction of it on the paid apps. A working tool ranks for that demand in a way
// a download page never will — it matches the "do it now" intent, it earns the
// dwell time and the links, and it puts the paid iOS app in front of someone who
// has just proved they have the problem.
//
// Everything runs client-side. The tool markup is rendered at build time so the
// page is real HTML for a crawler; only the browser APIs are deferred to effects
// and event handlers.

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

// NOTE for anyone editing the styles below.
//
// This repo runs babel-plugin-styled-wind, which splits every styled-components
// template on ";" and rewrites each fragment. A declaration whose value is an
// interpolation survives at the TOP level of a template but is silently dropped
// inside a nested selector block, so `&.secondary { color: ${p => p.c}; }`
// compiles to a rule with no color at all and you get white text on white.
//
// So: keep prop-driven values at the top level, publish them as CSS custom
// properties, and let nested blocks read them with var(). Nested blocks
// otherwise use literal values only.

// The tool itself sits in a card so it reads as the point of the page.
const ToolBox = styled.div`
  --accent: ${(p) => p.color || "#111827"};
  margin: 26px 0 8px;
  padding: 22px;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 10px 34px rgba(17, 24, 39, 0.07);
  font-family: ${SANS};

  label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: #334155;
    margin: 14px 0 6px;
  }

  input[type="tel"],
  input[type="text"],
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    font-size: 16px;
    padding: 11px 13px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    background: #fff;
    color: #111827;
  }

  textarea {
    min-height: 78px;
    resize: vertical;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--accent);
    outline-offset: 1px;
  }

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 14px;
`;

const Btn = styled.button`
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  padding: 11px 18px;
  border-radius: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  display: inline-block;
  background: ${(p) => p.color || "#111827"};
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

// Separate component rather than a `.secondary` modifier: a nested block cannot
// carry the interpolated colour (see the note above).
const BtnGhost = styled(Btn)`
  background: #fff;
  color: ${(p) => p.color || "#111827"};
  border-color: ${(p) => p.color || "#111827"};
`;

const Drop = styled.div`
  margin-top: 6px;
  padding: 30px 18px;
  border: 2px dashed ${(p) => (p.over ? p.color || "#111827" : "#cbd5e1")};
  border-radius: 14px;
  background: ${(p) => (p.over ? "#f8fafc" : "#fcfcfb")};
  text-align: center;
  color: #475569;
  font-size: 15px;
  cursor: pointer;
`;

const Note = styled.p`
  font-family: ${SANS};
  font-size: 13.5px;
  color: #64748b;
  margin: 12px 0 0;
`;

// Cross-sell block: the whole commercial point of the page.
const AppCta = styled.aside`
  margin: 34px 0 0;
  padding: 20px 22px;
  border: 1px solid #e5e7eb;
  border-left: 4px solid ${(p) => p.color || "#111827"};
  border-radius: 14px;
  background: #fafaf7;
  font-family: ${SANS};

  h3 {
    margin: 0 0 6px;
    font-size: 17px;
    color: #111827;
  }

  p {
    margin: 0 0 14px;
    font-size: 15px;
    color: #334155;
    line-height: 1.6;
  }

  img {
    height: 52px;
    display: block;
  }
`;

const Related = styled.ul`
  font-family: ${SANS};
  font-size: 15.5px;
  padding-left: 20px;
  li {
    margin: 8px 0;
  }
`;

export { ToolBox, Row, Btn, BtnGhost, Drop, Note };

export default function ToolPage({ tool, children }) {
  const url = `${SITE}/tools/${tool.slug}`;
  const color = tool.color || "#111827";

  // WebApplication, not SoftwareApplication: this one runs in the browser and is
  // free, which is exactly what the rich result should say.
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    alternateName: tool.alternateNames,
    description: tool.head.description,
    url,
    applicationCategory: "UtilitiesApplication",
    browserRequirements: "Requires JavaScript. Works in Chrome, Safari, Firefox and Edge.",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: tool.features.map((f) => f.title),
    permissions: "No sign-in. No upload. Files stay in the browser.",
    author: { "@type": "Person", name: "Vilva Athiban P B", url: SITE },
    publisher: { "@type": "Person", name: "Vilva Athiban P B", url: SITE },
    inLanguage: "en",
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: tool.howTo.title,
    description: tool.howTo.intro,
    totalTime: "PT1M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    tool: [{ "@type": "HowToTool", name: tool.name }],
    step: tool.howTo.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${url}#step-${i + 1}`,
    })),
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Free tools", item: `${SITE}/tools` },
      { "@type": "ListItem", position: 3, name: tool.name, item: url },
    ],
  };

  return (
    <Container>
      <Head>
        <title>{tool.head.title}</title>
        <meta name="description" content={tool.head.description} />
        <meta name="keywords" content={tool.head.keywords} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="x-default" href={url} />
        <link rel="alternate" hrefLang="en" href={url} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vilva Athiban P B" />
        <meta property="og:title" content={tool.head.ogTitle || tool.head.title} />
        <meta property="og:description" content={tool.head.ogDescription || tool.head.description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={tool.head.ogTitle || tool.head.title} />
        <meta name="twitter:description" content={tool.head.ogDescription || tool.head.description} />
        {tool.apps.length > 0 && (
          <meta name="apple-itunes-app" content={`app-id=${tool.apps[0].appStoreId}`} />
        )}
      </Head>
      <JsonLd data={webApp} />
      <JsonLd data={howTo} />
      <JsonLd data={faq} />
      <JsonLd data={crumbs} />
      <Header />
      <Wrap>
        <Eyebrow>
          <Link href="/tools">Free tools</Link> · Runs in your browser · No sign-up
        </Eyebrow>
        <Pills>
          <Pill>Free</Pill>
          <Pill fg="#1e40af" bg="#dbeafe">Nothing uploaded</Pill>
          <Pill fg="#6b21a8" bg="#f3e8ff">No sign-up</Pill>
        </Pills>
        <H1>{tool.h1}</H1>
        <Answer color={color}>{tool.answer}</Answer>

        {children}

        <Note>{tool.privacyNote}</Note>

        <Section>
          <h2>{tool.howTo.title}</h2>
          <p>{tool.howTo.intro}</p>
          <Steps>
            {tool.howTo.steps.map((s, i) => (
              <li key={s.name} id={`step-${i + 1}`}>
                <b>{s.name}</b>
                {s.text}
              </li>
            ))}
          </Steps>
        </Section>

        <Section>
          <h2>{tool.featuresTitle || "What this tool does"}</h2>
          <Cards>
            {tool.features.map((f) => (
              <Card key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Card>
            ))}
          </Cards>
        </Section>

        {tool.body.map((b) => (
          <Section key={b.title}>
            <h2>{b.title}</h2>
            {b.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Section>
        ))}

        {tool.apps.map((a) => (
          <AppCta key={a.appStoreId} color={a.color || color}>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
            <a
              href={`https://apps.apple.com/app/id${a.appStoreId}`}
              aria-label={`Download ${a.name} on the App Store`}
              rel="noopener"
            >
              <img src="/apps/app-store-badge.svg" alt="Download on the App Store" width="156" height="52" />
            </a>
          </AppCta>
        ))}

        <Section>
          <h2>Questions people ask</h2>
          <Faq>
            {tool.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Faq>
        </Section>

        <Section>
          <h2>Keep reading</h2>
          <Related>
            {tool.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.label}</Link>
              </li>
            ))}
          </Related>
        </Section>

        <Note>
          Not affiliated with, endorsed by, or sponsored by WhatsApp LLC or Meta Platforms, Inc.
          WhatsApp is a trademark of WhatsApp LLC. This tool is an independent utility that works
          with files you already have.
        </Note>
      </Wrap>
      <Footer />
    </Container>
  );
}
