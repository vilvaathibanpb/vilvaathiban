import Head from "next/head";
import Link from "next/link";
import { Container } from "../about";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import { socials } from "../../data/social";
import {
  Wrap,
  Eyebrow,
  Title,
  Lead,
  Section,
  Steps,
  Cards,
  Card,
  Faq,
  CtaRow,
  Cta,
  CtaGhost,
  JsonLd,
} from "../../components/service";

const URL = "https://vilvaathiban.com/services/ai-engineering-efficiency";
const CAL = "https://cal.com/vilva-athiban/30min";

const FAQS = [
  {
    q: "How does AI actually improve engineering efficiency?",
    a: "By embedding AI across the whole software delivery lifecycle — not just code completion. That means AI in requirements and design, code generation and review, testing and QA, documentation, release and incident response, all governed by one consistent workflow. Done right, teams cut cycle time and ship materially faster without adding headcount.",
  },
  {
    q: "Why do our DORA metrics stay flat even though everyone uses AI?",
    a: "This is the AI productivity paradox: 90% of developers use AI, yet delivery metrics often stay flat or decline because raw AI speed drives more rework and change-failure. The fix is governing AI through one workflow with guardrails and measuring the right things — DORA plus DevEx and rework/innovation rate — instead of counting AI-generated lines.",
  },
  {
    q: "Which metrics do you use to prove AI ROI?",
    a: "I anchor on DORA (deployment frequency, lead time, change-failure rate, time to restore) and layer on DX Core 4 / SPACE developer-experience signals plus innovation rate — the share of time spent on new value vs. maintenance. That combination shows whether AI is genuinely freeing engineers or just generating more toil.",
  },
  {
    q: "How do you streamline the software delivery process?",
    a: "I map your delivery pipeline end to end, find the real bottlenecks (handoffs, review queues, flaky tests, unclear requirements, slow environments), and remove them — often with AI-augmented steps and tighter workflow. The goal is a shorter, more predictable path from idea to production, not a pile of disconnected AI tools.",
  },
  {
    q: "Will AI let us reduce team size?",
    a: "Usually the goal is more output and faster delivery from the team you have, not layoffs. Compact, AI-augmented pods routinely deliver what used to take much larger teams. Whether that means doing more or doing it leaner is your call — I focus on lifting throughput and developer experience.",
  },
  {
    q: "How long before we see results?",
    a: "Early wins — a streamlined workflow and the first AI-augmented steps — typically land within the first few weeks. Metric movement on lead time and cycle time follows over the next delivery cycles as the changes compound and adoption sticks.",
  },
  {
    q: "How do you avoid AI increasing bugs and rework?",
    a: "By governing AI usage through one consistent workflow with review gates, evals and clear standards, instead of 15 engineers improvising independently. That is exactly what separates AI adoption that raises change-failure rates from adoption that actually speeds delivery.",
  },
  {
    q: "Who are you?",
    a: "I'm Vilva Athiban P B, a Lead AI Engineer at Omio. I ship Agentic AI in production, single-handedly built the MCP-first backend of Omio.ai, and have spent a decade in engineering leadership plus years teaching 20,000+ developers across 50+ talks in 7 countries.",
  },
];

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-Driven Engineering & Delivery Efficiency",
    serviceType: "AI engineering efficiency & software delivery consulting",
    description:
      "Improve engineering and delivery efficiency in a tech organisation using AI — streamlining the software delivery lifecycle, removing bottlenecks and moving DORA and developer-experience metrics.",
    provider: {
      "@type": "Person",
      name: "Vilva Athiban P B",
      jobTitle: "Lead AI Engineer",
      url: "https://vilvaathiban.com/about",
      sameAs: [socials.linkedin, socials.twitter, socials.github],
    },
    areaServed: "Worldwide",
    url: URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vilvaathiban.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://vilvaathiban.com/services" },
      { "@type": "ListItem", position: 3, name: "AI Engineering Efficiency", item: URL },
    ],
  },
];

export default function AiEngineeringEfficiencyService() {
  return (
    <Container>
      <Head>
        <title>
          Improve Engineering &amp; Delivery Efficiency with AI | Vilva Athiban
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
          content="Improve engineering & delivery efficiency with AI"
        />
        <meta
          property="og:description"
          content="I help tech organisations ship faster by embedding AI across the software delivery lifecycle — streamlining delivery, removing bottlenecks and moving DORA and developer-experience metrics."
        />
        <meta
          name="description"
          content="Improve process and engineering efficiency in your tech organisation using AI. I streamline the software delivery lifecycle, remove bottlenecks and move DORA and developer-experience metrics — AI-augmented SDLC done right, without raising rework. By Vilva Athiban, Lead AI Engineer at Omio."
        />
        <meta
          name="keywords"
          content="improve engineering efficiency with AI, AI software delivery, streamline software delivery, AI augmented SDLC, developer productivity AI, DORA metrics, DX Core 4, SPACE framework, engineering productivity consultant, AI adoption engineering teams, reduce cycle time, ship faster with AI, developer experience, delivery velocity"
        />
        <JsonLd data={LD} />
      </Head>
      <Header />

      <Wrap>
        <Eyebrow>Services · For tech organisations</Eyebrow>
        <Title>
          Improve your engineering &amp; delivery efficiency with AI
        </Title>
        <Lead>
          I help tech organisations ship faster and more predictably by embedding
          AI across the whole software delivery lifecycle — streamlining delivery,
          removing bottlenecks and actually moving your DORA and developer-experience
          metrics.
        </Lead>

        <CtaRow>
          <Cta href={CAL} target="_blank" rel="noopener noreferrer">
            Book a discovery call
          </Cta>
          <CtaGhost as={Link} href="/services">
            See all services
          </CtaGhost>
        </CtaRow>

        <Section>
          <h2>The problem: AI speed without delivery gains</h2>
          <p>
            Nearly every engineering team now uses AI — yet delivery metrics often
            stay flat or get worse. Raw AI speed quietly increases rework and
            change-failure when 15 engineers each improvise their own workflow.
            The teams that actually get faster don&apos;t just add copilots; they
            <strong> govern AI across the delivery process</strong> and measure the
            right things. That is the work I do.
          </p>
        </Section>

        <Section>
          <h2>What I streamline</h2>
          <Cards>
            <Card>
              <h3>Delivery pipeline</h3>
              <p>End-to-end mapping to find the real bottlenecks: handoffs, review queues, flaky tests, slow environments.</p>
            </Card>
            <Card>
              <h3>AI-augmented SDLC</h3>
              <p>AI embedded into requirements, design, code review, testing, docs and release — one governed workflow.</p>
            </Card>
            <Card>
              <h3>Metrics that matter</h3>
              <p>DORA + DX Core 4 / SPACE + innovation rate, so you can prove AI ROI instead of counting AI-written lines.</p>
            </Card>
            <Card>
              <h3>Guardrails</h3>
              <p>Review gates, evals and standards that keep speed from turning into rework and change-failure.</p>
            </Card>
          </Cards>
        </Section>

        <Section>
          <h2>How the engagement works</h2>
          <Steps>
            <li>
              <strong>Assess</strong>
              <span>Baseline your delivery pipeline and metrics, interview the team, and locate where time and quality actually leak.</span>
            </li>
            <li>
              <strong>Design</strong>
              <span>Define one governed, AI-augmented workflow across the SDLC with clear guardrails and success metrics.</span>
            </li>
            <li>
              <strong>Roll out</strong>
              <span>Implement the changes with the team, land early wins, and drive real adoption — not shelfware tools.</span>
            </li>
            <li>
              <strong>Measure &amp; iterate</strong>
              <span>Track DORA and developer-experience signals, tune the workflow, and hand over a repeatable playbook.</span>
            </li>
          </Steps>
        </Section>

        <Section>
          <h2>Why me</h2>
          <p>
            I&apos;m{" "}
            <Link href="/about">Vilva Athiban P B</Link>, a Lead AI Engineer at
            Omio. I ship Agentic AI in production and{" "}
            <strong>single-handedly built the MCP-first backend of Omio.ai</strong>
            . Before AI, I spent a decade building and leading web and platform
            engineering — so I improve delivery from the inside, with the
            production and team realities in mind, not a slide deck. I&apos;ve also
            taught this to 20,000+ developers across 50+ talks in 7 countries. Need
            the AI backbone too? See my{" "}
            <Link href="/services/mcp-architecture">MCP architecture service</Link>.
          </p>
        </Section>

        <Section>
          <h2>Frequently asked questions</h2>
          <Faq>
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Faq>
        </Section>

        <CtaRow>
          <Cta href={CAL} target="_blank" rel="noopener noreferrer">
            Book a discovery call
          </Cta>
          <CtaGhost as={Link} href="/services/mcp-architecture">
            ← MCP architecture in 1 month
          </CtaGhost>
        </CtaRow>
      </Wrap>

      <Subscribe />
      <Footer />
    </Container>
  );
}
