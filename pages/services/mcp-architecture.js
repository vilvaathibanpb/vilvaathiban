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

const URL = "https://vilvaathiban.com/services/mcp-architecture";
const CAL = "https://cal.com/vilva-athiban/30min";

const FAQS = [
  {
    q: "What do you mean by 'implementing an MCP architecture'?",
    a: "I don't hand you one server and leave. I roll out a swarm of in-house MCPs, plugins and skills across your company — each one plugging your AI (Claude, agents, copilots, IDEs) into a specific internal tool. Together they become the layer every team uses to make AI actually do things in your systems, not just chat.",
  },
  {
    q: "Can you give a concrete example?",
    a: "Customer service plus your internal logging and observability tools. Instead of raising a ticket and waiting for the tech team to investigate a broken booking, a support agent asks the AI — which uses an MCP wired to your logs to pull the exact error, the failed step and the likely root cause in seconds. Now multiply that across ops, product, sales and data teams.",
  },
  {
    q: "Which teams benefit — only engineering, or non-technical teams too?",
    a: "Both, and the non-technical teams are usually where the biggest wins are. Support, operations, product, sales and data teams get AI that safely reads and acts on the same live systems engineers use — so they self-serve instead of queuing behind the tech team. Efficiency lifts across the whole organisation, not just engineering.",
  },
  {
    q: "What internal tools and systems can the MCPs connect to?",
    a: "Logging and observability, internal APIs and microservices, SQL and vector databases, data warehouses, CRMs, ticketing, docs and knowledge bases, dashboards, CI/CD and SaaS tools — anything with an API. Each MCP, plugin or skill ships with authentication, role-based access and audit logging so people only see and do what they're allowed to.",
  },
  {
    q: "How long does the rollout take, and what does it cost?",
    a: "One month. Week 1 is discovery and design, weeks 2–3 build the first swarm of MCPs, plugins and skills for your priority use cases, and week 4 hardens, deploys and hands over. It's fixed-scope and fixed-price after a short discovery call, so you know the number and the deliverables up front.",
  },
  {
    q: "Is it secure and production-ready?",
    a: "Yes — that's the point. Everything is built for authentication and authorization, role-based access, audit logging, data isolation, schema validation and failure recovery, plus evals and monitoring so you can trust what agents do on live company data.",
  },
  {
    q: "Should we build this in-house or bring you in?",
    a: "Prototyping one MCP is easy; standing up a governed, multi-team swarm that non-technical people can safely use is a different project. I compress months of learning into weeks, ship the first high-value MCPs, and leave your team a clean, documented pattern to keep extending the swarm themselves.",
  },
  {
    q: "Who are you and why trust you with this?",
    a: "I'm Vilva Athiban P B, a Lead AI Engineer at Omio. I single-handedly built the MCP-first backend of Omio.ai, ship Agentic AI in production, and have taught 20,000+ developers with 50+ talks across 7 countries.",
  },
];

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MCP Architecture Implementation — In-house MCPs, Plugins & Skills in One Month",
    serviceType: "MCP architecture implementation & company-wide AI enablement",
    description:
      "I implement an MCP (Model Context Protocol) architecture inside your company in one month — a swarm of in-house MCPs, plugins and skills that plug AI into your internal tools so every team, technical and non-technical, can use AI to the fullest.",
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
      { "@type": "ListItem", position: 3, name: "MCP Architecture", item: URL },
    ],
  },
];

export default function McpArchitectureService() {
  return (
    <Container>
      <Head>
        <title>
          Implement an MCP Architecture Across Your Company in 1 Month | Vilva Athiban
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
          content="Implement an MCP architecture across your company in 1 month"
        />
        <meta
          property="og:description"
          content="I roll out a swarm of in-house MCPs, plugins and skills in one month — plugging AI into your internal tools so every team, tech and non-tech, uses AI to the fullest. E.g. support sees what's wrong with a booking without waiting on engineering."
        />
        <meta
          name="description"
          content="Implement an MCP (Model Context Protocol) architecture across your company in one month — a swarm of in-house MCPs, plugins and skills that plug AI into your internal tools so every team, technical and non-technical, uses AI to the fullest. For example, customer service sees exactly what's wrong with a booking via an MCP wired to your logging tools, instead of waiting on the tech team. By Vilva Athiban, who single-handedly built the MCP-first backend of Omio.ai."
        />
        <meta
          name="keywords"
          content="MCP architecture, implement MCP, in-house MCP, MCP plugins and skills, Model Context Protocol, company-wide AI enablement, AI for non-technical teams, MCP for internal tools, MCP logging observability, hire MCP expert, MCP consultant, agentic ai, MCP first backend, democratize AI in company"
        />
        <JsonLd data={LD} />
      </Head>
      <Header />

      <Wrap>
        <Eyebrow>Services · For companies</Eyebrow>
        <Title>
          Implement an MCP architecture across your company — in one month
        </Title>
        <Lead>
          In 4 weeks I roll out a swarm of in-house MCPs, plugins and skills that
          plug AI into your internal tools — so every team, technical <em>and</em>{" "}
          non-technical, can use AI to the fullest.
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
          <h2>What I actually build</h2>
          <p>
            Not one MCP server, and not your product&apos;s backend. I implement an{" "}
            <strong>MCP (Model Context Protocol) architecture inside your
            company</strong> — a swarm of in-house MCPs, plugins and skills, each
            one plugging your AI (Claude, agents, copilots, IDEs) into a specific
            internal tool. Together they become the governed layer your whole
            company uses to make AI actually <em>do</em> things in your systems.
          </p>
          <Cards>
            <Card>
              <h3>A swarm of in-house MCPs</h3>
              <p>One MCP per internal tool — logging, databases, APIs, CRMs, dashboards — so AI can read and act on live systems.</p>
            </Card>
            <Card>
              <h3>Plugins &amp; skills</h3>
              <p>Reusable plugins and skills that package your workflows, so people trigger complex actions in plain language.</p>
            </Card>
            <Card>
              <h3>Governance &amp; access</h3>
              <p>Authentication, role-based access and audit logging, so each team only sees and does what it&apos;s allowed to.</p>
            </Card>
            <Card>
              <h3>Handover &amp; docs</h3>
              <p>A clean, documented pattern so your team keeps extending the swarm with new MCPs and skills without me.</p>
            </Card>
          </Cards>
        </Section>

        <Section>
          <h2>A concrete example</h2>
          <p>
            Take <strong>customer service and your internal logging tools</strong>.
            Today, when a booking breaks, a support agent raises a ticket and waits
            for the tech team to dig through logs. With an MCP wired to your logging
            and observability stack, the support agent just asks the AI — and gets
            the exact error, the step that failed and the likely root cause in
            seconds. No ticket, no waiting on engineering. Now imagine the same for
            ops checking a payment, product pulling live usage, or sales checking an
            account — every team, self-serving through AI.
          </p>
        </Section>

        <Section>
          <h2>The one-month plan</h2>
          <Steps>
            <li>
              <strong>Week 1 — Discovery &amp; architecture</strong>
              <span>Map your internal tools, the highest-value use cases per team, and the permission model. Design the MCP swarm.</span>
            </li>
            <li>
              <strong>Week 2 — First MCPs, plugins &amp; skills</strong>
              <span>Build the first in-house MCPs for your priority tools (e.g. logging for support), with auth wired in from day one.</span>
            </li>
            <li>
              <strong>Week 3 — Expand the swarm &amp; govern</strong>
              <span>Add more MCPs, plugins and skills across teams, layer in role-based access and audit logging, and prove it with evals.</span>
            </li>
            <li>
              <strong>Week 4 — Harden, roll out &amp; hand over</strong>
              <span>Deploy to your environment, add monitoring, onboard the teams, and hand over docs so they extend the swarm themselves.</span>
            </li>
          </Steps>
        </Section>

        <Section>
          <h2>Why this lifts the whole company, not just the tech team</h2>
          <p>
            The moment the swarm exists, the value compounds. Engineers get AI that
            reads and acts on real systems — but so do support, operations, product,
            sales and data teams. Instead of queuing behind the tech team with
            tickets and manual lookups, they self-serve through governed AI that can
            actually <em>do</em> things on live company data. That is where
            organisation-wide efficiency really comes from — democratizing AI access
            and removing the cross-team bottleneck.
          </p>
        </Section>

        <Section>
          <h2>Why me</h2>
          <p>
            I&apos;m{" "}
            <Link href="/about">Vilva Athiban P B</Link>, a Lead AI Engineer at
            Omio, where I <strong>built the shared MCP services</strong> the whole
            company uses and <strong>drove AI adoption across the
            organisation</strong> — and single-handedly built the MCP-first backend
            of Omio.ai. So you get someone who has already stood up an MCP swarm in
            production <em>and</em> got real teams to adopt it — and who leaves your
            team able to run with it.
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
          <CtaGhost as={Link} href="/services/ai-engineering-efficiency">
            AI engineering efficiency →
          </CtaGhost>
        </CtaRow>
      </Wrap>

      <Subscribe />
      <Footer />
    </Container>
  );
}
