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
    name: "Teleprompter: Camera Overlay",
    tagline: "Free iOS teleprompter that floats your script over the camera and scrolls as you speak.",
    summary:
      "Free forever: record Reels, Shorts and TikToks while reading your script with perfect eye contact. Voice-driven scrolling runs 100% on-device and fully offline.",
    image: "/apps/teleprompter-icon.png",
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
        ? "width: 120px; height: 120px; object-fit: contain; border-radius: 24px;"
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
      <title>Apps & Products | Vilva Athiban P B</title>
      <meta
        name="description"
        content="Apps and products built by Vilva Athiban — including Teleprompter: Camera Overlay, a free iOS teleprompter app for Reels and Shorts, AIDoneNow, FinalSaying and SafeRoutes."
      />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content="Apps & Products | Vilva Athiban P B" />
      <meta
        property="og:description"
        content="Apps and products built by Vilva Athiban — from a free camera-overlay teleprompter for content creators to AI services and safety-first navigation."
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
        Products I have built — apps you can download today and platforms in
        the making. Built nights and weekends, shipped for real users.
      </Lead>
      <Grid>
        {APPS.map((app) =>
          app.internal ? (
            <Link key={app.name} href={app.href} passHref legacyBehavior>
              <AppCard>
                <AppImage contain bg="#101014">
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
