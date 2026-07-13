import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import { Wrap, Eyebrow, Title, Lead, Section, Cta, CtaRow, JsonLd } from "../components/service";

const URL = "https://vilvaathiban.com/services";
const CAL = "https://cal.com/vilva-athiban/30min";

const SERVICES = [
  {
    href: "/services/mcp-architecture",
    tag: "For companies · 1 month",
    title: "Build an MCP architecture in one month",
    blurb:
      "A production-grade, MCP-first backend that connects your AI agents to your internal systems — lifting efficiency across engineering and every non-technical team.",
  },
  {
    href: "/services/ai-engineering-efficiency",
    tag: "For tech organisations",
    title: "Improve engineering & delivery efficiency with AI",
    blurb:
      "Embed AI across your software delivery lifecycle to streamline delivery, remove bottlenecks and move your DORA and developer-experience metrics — without raising rework.",
  },
];

const ServiceCard = styled(Link)`
  display: block;
  border: 1px solid #ececea;
  border-radius: 12px;
  padding: 28px;
  background: #ffffff;
  transition: border-color 160ms ease, transform 160ms ease;

  &:hover {
    border-color: #111827;
    transform: translateY(-2px);
  }

  .tag {
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #475569;
  }
  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #111827;
    margin: 10px 0 10px;
    letter-spacing: -0.01em;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
  p { margin: 0 0 16px; color: #475569; font-size: 16px; line-height: 1.65; }
  .go { font-weight: 600; color: #111827; font-size: 15px; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
  margin-top: 28px;
`;

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services by Vilva Athiban",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://vilvaathiban.com${s.href}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vilvaathiban.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: URL },
    ],
  },
];

export default function ServicesPage() {
  return (
    <Container>
      <Head>
        <title>
          Services — MCP Architecture &amp; AI Engineering Efficiency | Vilva Athiban
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={URL} />
        <meta name="theme-color" content="#111827" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:site_name" content="vilvaathiban.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta
          property="og:title"
          content="Services — MCP architecture & AI engineering efficiency"
        />
        <meta
          property="og:description"
          content="Work with Vilva Athiban: build a production MCP architecture for your company in one month, or improve your engineering and delivery efficiency with AI."
        />
        <meta
          name="description"
          content="Services by Vilva Athiban, Lead AI Engineer at Omio: build a production MCP (Model Context Protocol) architecture for your company in one month, and improve engineering and delivery efficiency in your tech organisation using AI."
        />
        <meta
          name="keywords"
          content="MCP architecture service, build MCP server, Model Context Protocol consultant, AI engineering efficiency, streamline software delivery, AI consulting, agentic AI, hire AI engineer, developer productivity AI"
        />
        <JsonLd data={LD} />
      </Head>
      <Header />

      <Wrap>
        <Eyebrow>Services</Eyebrow>
        <Title>Work with me</Title>
        <Lead>
          Two ways I help companies turn AI from experiment into production
          leverage — building the AI backbone, and making your engineering
          organisation faster with it.
        </Lead>

        <Grid>
          {SERVICES.map((s) => (
            <ServiceCard key={s.href} href={s.href}>
              <div className="tag">{s.tag}</div>
              <h2>{s.title}</h2>
              <p>{s.blurb}</p>
              <div className="go">Learn more →</div>
            </ServiceCard>
          ))}
        </Grid>

        <Section>
          <h2>Why work with me</h2>
          <p>
            I&apos;m <Link href="/about">Vilva Athiban P B</Link>, a Lead AI
            Engineer at Omio. I <strong>single-handedly built the MCP-first
            backend of Omio.ai</strong>, ship Agentic AI in production, and have
            taught 20,000+ developers across 50+ talks in 7 countries. You get
            someone who has already built and shipped exactly this — and who leaves
            your team able to run with it.
          </p>
        </Section>

        <CtaRow>
          <Cta href={CAL} target="_blank" rel="noopener noreferrer">
            Book a discovery call
          </Cta>
        </CtaRow>
      </Wrap>

      <Subscribe />
      <Footer />
    </Container>
  );
}
