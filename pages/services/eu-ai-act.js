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

const URL = "https://vilvaathiban.com/services/eu-ai-act";
const CAL = "https://cal.com/vilva-athiban/30min";

const SUBSERVICES = [
  {
    href: "/services/eu-ai-act/readiness-assessment",
    title: "Technical readiness assessment",
    desc: "Inventory every AI system and map the technical controls each one needs. I hand your legal team the technical inputs for risk classification, then turn their call into a prioritised engineering roadmap.",
  },
  {
    href: "/services/eu-ai-act/high-risk-implementation",
    title: "High-risk control implementation",
    desc: "Engineer the Article 9–15 technical controls: risk-management tooling, data governance, Annex IV documentation, logging, human oversight, robustness and cybersecurity — plus the evidence your conformity assessment needs.",
  },
  {
    href: "/services/eu-ai-act/transparency-and-literacy",
    title: "Transparency & AI literacy",
    desc: "Ship Article 50 transparency — AI-interaction disclosure, GenAI content labelling and deepfake marking — and run the Article 4 AI-literacy programme for your teams. This is where I'm strongest.",
  },
];

const FAQS = [
  {
    q: "When does the EU AI Act actually apply to us?",
    a: "The Act entered into force in August 2024 and applies in stages. Prohibited practices and AI-literacy obligations already apply (since February 2025), and general-purpose AI obligations since August 2025. The big one is 2 August 2026, when the rules for high-risk AI systems (Annex III) and the Article 50 transparency obligations start to apply. If you build, deploy or even just use AI systems that touch the EU, this is the deadline to be ready for.",
  },
  {
    q: "Are you a law firm or a compliance consultancy?",
    a: "No — and that's the point. I'm a Lead AI Engineer. Law firms and GRC consultancies tell you what the Act requires; I build the technical controls that actually satisfy it — logging and traceability, human-oversight interfaces, transparency and content-labelling, evals and monitoring, and the Annex IV technical documentation. I work alongside your legal and compliance function, turning their obligations into shipped, working systems.",
  },
  {
    q: "Does the Act even apply to us if we only use AI we bought?",
    a: "Very likely yes. The Act creates obligations for deployers, not just providers. If you deploy a high-risk AI system you have duties around human oversight, monitoring, logging and transparency. And if you fine-tune, significantly modify or rebrand a system, you can become the provider yourself — with the full obligation set. Part of the readiness assessment is working out exactly which role you hold for each system.",
  },
  {
    q: "What does non-compliance cost?",
    a: "Fines scale with the severity of the breach — up to €35M or 7% of global annual turnover for prohibited practices, and up to €15M or 3% for most other obligations, whichever is higher. Beyond fines, non-compliant high-risk systems can be forced off the EU market. The engineering work to comply is a fraction of that exposure, and most of it (logging, evals, oversight) makes your AI more reliable anyway.",
  },
  {
    q: "How do we start, and how long does it take?",
    a: "Start with the technical readiness assessment — usually 1–2 weeks to inventory your systems, gather the technical facts your legal team needs to classify risk, and produce a prioritised engineering roadmap. Implementation depends on how many high-risk systems you run and how much control tooling already exists; I scope it as fixed, phased work after the assessment so you know the deliverables and the number up front.",
  },
  {
    q: "Why you, specifically?",
    a: "I'm Vilva Athiban P B, a Lead AI Engineer at Omio. I build agentic AI and MCP systems in production, where logging, evals, access control, human oversight and monitoring are exactly the controls the Act asks for. I've also coached whole organisations on AI adoption — which is what the Article 4 literacy obligation needs. So you get the engineer who builds the controls and the coach who gets teams to actually use them.",
  },
];

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EU AI Act Compliance — Technical Implementation",
    serviceType: "EU AI Act technical compliance implementation",
    description:
      "Technical implementation partner for EU AI Act compliance. I engineer the controls that make your AI systems compliant before the 2 August 2026 deadline — risk classification, Annex IV technical documentation, logging and traceability, human oversight, transparency and content labelling, evals and monitoring — working alongside your legal and compliance teams.",
    provider: {
      "@type": "Person",
      name: "Vilva Athiban P B",
      jobTitle: "Lead AI Engineer",
      url: "https://vilvaathiban.com/about",
      sameAs: [socials.linkedin, socials.twitter, socials.github],
    },
    areaServed: "European Union",
    url: URL,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EU AI Act services",
      itemListElement: SUBSERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `https://vilvaathiban.com${s.href}`,
        },
      })),
    },
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
      { "@type": "ListItem", position: 3, name: "EU AI Act", item: URL },
    ],
  },
];

export default function EuAiActService() {
  return (
    <Container>
      <Head>
        <title>
          EU AI Act Compliance — Technical Implementation Before August 2026 | Vilva Athiban
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
          content="EU AI Act compliance — the technical implementation, before August 2026"
        />
        <meta
          property="og:description"
          content="I engineer the controls that make your AI systems EU AI Act compliant — risk classification, Annex IV technical documentation, logging, human oversight, transparency and content labelling — before the 2 August 2026 deadline. Alongside your legal team, not instead of it."
        />
        <meta
          name="description"
          content="EU AI Act compliance is a build problem, not just a legal one. I'm Vilva Athiban, a Lead AI Engineer who implements the technical controls the Act requires — AI system inventory and risk classification, Annex IV technical documentation, logging and traceability, human-oversight interfaces, Article 50 transparency and content labelling, plus evals and monitoring — so your high-risk AI systems are ready for the 2 August 2026 deadline. I work alongside your legal and compliance function."
        />
        <meta
          name="keywords"
          content="EU AI Act, EU AI Act compliance, AI Act implementation, high-risk AI system, Annex IV technical documentation, AI risk classification, Article 50 transparency, AI content labelling, human oversight AI, AI Act deadline August 2026, conformity assessment, AI governance, AI literacy Article 4, EU AI regulation consultant, AI compliance engineer"
        />
        <JsonLd data={LD} />
      </Head>
      <Header />

      <Wrap>
        <Eyebrow>Services · EU AI Act · Deadline 2 Aug 2026</Eyebrow>
        <Title>
          EU AI Act compliance — the technical implementation, before August 2026
        </Title>
        <Lead>
          On <strong>2 August 2026</strong> the rules for high-risk AI systems and
          the transparency obligations start to apply. Your legal team decides what
          the Act requires and signs it off — but someone has to <em>build</em> the
          controls that satisfy it. That&apos;s the part I do, under their direction.
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
          <h2>The build problem sitting next to the legal one</h2>
          <p>
            I&apos;m an engineer, not a lawyer — and I won&apos;t pretend otherwise.
            Your legal and compliance advisers decide which systems are high-risk,
            what obligations apply and whether you&apos;re compliant. What they
            usually can&apos;t do is <strong>actually implement</strong> the
            controls in your systems: the oversight interface, the audit-grade
            logging, the content labelling, the evals that prove accuracy and
            robustness, the <strong>Annex IV technical documentation</strong>.
            That engineering layer is the part I deliver — turning their
            obligations into shipped, working controls, and the AI-literacy
            programme into something your teams actually do.
          </p>
          <Cards>
            <Card>
              <h3>Classify &amp; scope</h3>
              <p>Inventory every AI system, decide your role (provider vs deployer) and classify risk so you only build what the Act actually requires.</p>
            </Card>
            <Card>
              <h3>Build the controls</h3>
              <p>Logging &amp; traceability, human-oversight interfaces, data governance, transparency and content labelling — engineered into your stack.</p>
            </Card>
            <Card>
              <h3>Document &amp; prove</h3>
              <p>Annex IV technical documentation, evals for accuracy, robustness and cybersecurity, and the records a conformity assessment needs.</p>
            </Card>
            <Card>
              <h3>Monitor &amp; hand over</h3>
              <p>Post-market monitoring, incident logging and a documented pattern your team keeps running after the deadline.</p>
            </Card>
          </Cards>
        </Section>

        <Section>
          <h2>The three ways I help</h2>
          <p>
            Most companies start with the assessment, then move into
            implementation. Each is scoped and priced on its own.
          </p>
          <Cards>
            {SUBSERVICES.map((s) => (
              <Card key={s.href} as={Link} href={s.href} style={{ display: "block" }}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Card>
            ))}
          </Cards>
        </Section>

        <Section>
          <h2>Why the August 2026 date matters now</h2>
          <p>
            The Act applies in waves. Prohibited AI practices and the AI-literacy
            obligation have applied since February 2025; general-purpose AI model
            obligations since August 2025. The wave that catches most companies is{" "}
            <strong>2 August 2026</strong>, when obligations for high-risk systems
            (Annex III) and the Article 50 transparency rules become enforceable.
            Building audit-grade logging, human oversight and technical
            documentation retroactively, across live systems, takes months — which
            is why the work starts now, not in July.
          </p>
        </Section>

        <Section>
          <h2>How an engagement runs</h2>
          <Steps>
            <li>
              <strong>Assess (with your legal team)</strong>
              <span>Inventory every AI system and gather the technical facts. Your legal advisers classify risk and confirm roles; I turn that into a prioritised engineering gap analysis and roadmap.</span>
            </li>
            <li>
              <strong>Implement</strong>
              <span>Build the required controls for each high-risk system — risk-management tooling, data governance, logging, human oversight, robustness.</span>
            </li>
            <li>
              <strong>Document &amp; evidence</strong>
              <span>Produce Annex IV technical documentation and the risk, eval and logging evidence your legal team&apos;s conformity assessment and declaration rely on.</span>
            </li>
            <li>
              <strong>Monitor &amp; enable</strong>
              <span>Stand up post-market monitoring and run the AI-literacy programme, then hand over a pattern your team can keep extending.</span>
            </li>
          </Steps>
        </Section>

        <Section>
          <h2>Where I stop and your legal team starts</h2>
          <p>
            Being clear about the boundary is part of doing this honestly. I&apos;m
            not a substitute for legal advice, and the calls with legal exposure
            stay with the people qualified to make them.
          </p>
          <Cards>
            <Card>
              <h3>I do</h3>
              <p>Build the technical controls, the logging and oversight interfaces, the transparency mechanisms, the evals, the Annex IV documentation tooling, and the AI-literacy programme.</p>
            </Card>
            <Card>
              <h3>Your legal / compliance team does</h3>
              <p>Interprets the Act, classifies risk, decides your provider/deployer role, runs the formal conformity assessment and signs the declaration of conformity.</p>
            </Card>
          </Cards>
          <p>
            If you don&apos;t have that legal cover in place, the honest first step
            is to get it — I&apos;m happy to work in alongside a firm you already
            trust, or to focus purely on the transparency and AI-literacy work,
            which needs the least legal interpretation.
          </p>
        </Section>

        <Section>
          <h2>Why me</h2>
          <p>
            I&apos;m{" "}
            <Link href="/about">Vilva Athiban P B</Link>, a Lead AI Engineer at
            Omio. I build agentic AI and MCP systems in production, where{" "}
            <strong>logging, evals, access control, human oversight and
            monitoring</strong> are already core engineering concerns — the exact
            controls the AI Act asks for. And I&apos;ve{" "}
            <strong>coached whole organisations on AI adoption</strong>, which is
            what the Article 4 literacy obligation needs. You get the engineer who
            builds the controls and the coach who gets teams to use them.
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

        <p style={{ marginTop: 40, fontSize: 14, color: "#94a3b8" }}>
          This service delivers the technical implementation of EU AI Act
          controls and is not legal advice. I work alongside your own legal and
          compliance advisers, who remain responsible for legal interpretation.
        </p>

        <CtaRow>
          <Cta href={CAL} target="_blank" rel="noopener noreferrer">
            Book a discovery call
          </Cta>
          <CtaGhost as={Link} href="/services/eu-ai-act/readiness-assessment">
            Start with a readiness assessment →
          </CtaGhost>
        </CtaRow>
      </Wrap>

      <Subscribe />
      <Footer />
    </Container>
  );
}
