import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
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
} from "../../../components/service";
import {
  LOCALES,
  LOCALE_CODES,
  BASE_URL,
  APP_STORE_BASE,
  HREFLANG_LINKS,
  LanguageSwitcher,
} from "../../../components/teleprompterI18n";

const Hero = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin: 8px 0 4px;
  flex-wrap: wrap;
`;

const LogoBox = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  img {
    width: 140px;
    height: 140px;
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
`;

const LegalLinks = styled.div`
  margin-top: 40px;
  font-size: 14px;
  color: #475569;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  a {
    color: #111827;
    font-weight: 600;
    text-decoration: underline;
  }
`;

const LocalizedTeleprompterPage = ({ lang }) => {
  const t = LOCALES[lang];
  const url = `${BASE_URL}/${lang}`;
  const storeUrl = t.storeL
    ? `${APP_STORE_BASE}?l=${t.storeL}`
    : APP_STORE_BASE;

  return (
    <Container>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href={url} />
        {HREFLANG_LINKS.map((l) => (
          <link
            key={l.hrefLang}
            rel="alternate"
            hrefLang={l.hrefLang}
            href={l.href}
          />
        ))}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang} />
        <meta
          property="og:image"
          content="https://vilvaathiban.com/apps/teleprompter-icon.png"
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Teleprompter: Camera Overlay",
          operatingSystem: "iOS",
          applicationCategory: "MultimediaApplication",
          inLanguage: lang,
          description: t.description,
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
          url,
          image: "https://vilvaathiban.com/apps/teleprompter-icon.png",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: lang,
          mainEntity: t.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <Header />
      <Wrap dir={t.dir || "ltr"} lang={lang}>
        <Eyebrow>
          <Link href="/apps">Apps</Link> · {t.eyebrow}
        </Eyebrow>
        <Hero>
          <LogoBox>
            <img
              src="/apps/teleprompter-logo.png"
              alt="Teleprompter: Camera Overlay"
            />
          </LogoBox>
          <div>
            <FreePill>{t.freePill}</FreePill>
            <Title style={{ margin: 0 }}>{t.h1}</Title>
          </div>
        </Hero>
        <Lead>{t.lead}</Lead>
        <StoreBadge href={storeUrl} aria-label={t.storeAlt}>
          <img src="/apps/app-store-badge.svg" alt={t.storeAlt} />
        </StoreBadge>

        <Section>
          <h2>{t.introH2}</h2>
          <p>{t.introP}</p>
        </Section>

        <Section>
          <h2>{t.featuresH2}</h2>
          <Cards>
            {t.cards.map((c) => (
              <Card key={c.h3}>
                <h3>{c.h3}</h3>
                <p>{c.p}</p>
              </Card>
            ))}
          </Cards>
        </Section>

        <Section>
          <h2>{t.faqH2}</h2>
          {t.faqs.map((f) => (
            <Faq key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </Faq>
          ))}
        </Section>

        <Section>
          <StoreBadge href={storeUrl} aria-label={t.storeAlt}>
            <img src="/apps/app-store-badge.svg" alt={t.storeAlt} />
          </StoreBadge>
        </Section>

        <LegalLinks>
          <Link href="/apps/teleprompter-camera-overlay/privacy">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/apps/teleprompter-camera-overlay/support">Support</Link>
          {" · "}
          <Link href="/apps/teleprompter-camera-overlay">English</Link>
        </LegalLinks>

        <LanguageSwitcher current={lang} label={t.switcherLabel} />
      </Wrap>
      <Footer />
    </Container>
  );
};

export async function getStaticPaths() {
  // Only the 16 locale codes — pages/apps/teleprompter-camera-overlay/privacy.js
  // and support.js are concrete files and must not be claimed by this route.
  const paths = LOCALE_CODES.filter(
    (code) => code !== "privacy" && code !== "support"
  ).map((lang) => ({ params: { lang } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { lang: params.lang } };
}

export default LocalizedTeleprompterPage;
