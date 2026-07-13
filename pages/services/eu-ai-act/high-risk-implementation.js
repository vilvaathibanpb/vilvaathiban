import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Subscribe from "../../../components/Subscribe";
import { socials } from "../../../data/social";
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
} from "../../../components/service";

const URL = "https://vilvaathiban.com/services/eu-ai-act/high-risk-implementation";
const CAL = "https://cal.com/vilva-athiban/30min";

const FAQS = [
  {
    q: "Which controls are you actually building?",
    a: "The technical obligations for high-risk systems in Articles 9–15: a risk-management system, data and data-governance controls, Annex IV technical documentation, automatic record-keeping (logging and traceability), transparency and instructions for use, human oversight, and the accuracy, robustness and cybersecurity measures. I implement these in your stack, wire them into CI, and produce the evidence a conformity assessment needs.",
  },
  {
    q: "What is Annex IV technical documentation and why is it hard?",
    a: "Annex IV is the detailed dossier you must maintain for every high-risk system — its purpose, design, architecture, data, performance metrics, risk-management measures and the changes made over its lifecycle. It's hard because it has to be accurate, current and evidence-backed, not a one-off Word doc. I build it as living documentation tied to your system and evals, so it stays true as the model and code change.",
  },
  {
    q: "How do you implement 'human oversight' in practice?",
    a: "Human oversight (Article 14) means a person can understand, monitor and intervene in the system's operation. Concretely that's an oversight interface: surfacing the model's inputs, outputs and confidence, flagging low-confidence or high-impact decisions for review, letting a human override or stop the system, and logging every intervention. I design and build that layer so it's real, not a policy line.",
  },
  {
    q: "What about logging and record-keeping?",
    a: "Article 12 requires high-risk systems to automatically record events over their lifetime so behaviour is traceable and post-market monitoring is possible. I implement audit-grade, tamper-evident logging of inputs, outputs, model versions, decisions and human interventions, with retention and access controls — the same traceability that makes agentic systems debuggable anyway.",
  },
  {
    q: "Do you handle the conformity assessment itself?",
    a: "I produce everything the conformity assessment relies on — the technical documentation, the risk-management records, the eval results for accuracy and robustness, and the logging evidence — and support you and your legal team through the assessment and the declaration of conformity. The formal legal sign-off and, where required, the notified-body process stay with your compliance function.",
  },
  {
    q: "How do you prove accuracy, robustness and cybersecurity?",
    a: "With evals and testing, run continuously rather than once. I build evaluation suites for accuracy and edge-case behaviour, adversarial and robustness tests, and cybersecurity measures against data poisoning, model evasion and prompt-injection where relevant — then wire them into CI so every change is re-checked and the results feed the technical documentation.",
  },
];

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EU AI Act High-Risk System Implementation",
    serviceType: "EU AI Act high-risk AI system technical controls implementation",
    description:
      "Implementation of the EU AI Act technical obligations for high-risk AI systems (Articles 9–15): risk-management system, data governance, Annex IV technical documentation, automatic logging and traceability, transparency, human oversight, and accuracy, robustness and cybersecurity — with the evidence a conformity assessment needs.",
    provider: {
      "@type": "Person",
      name: "Vilva Athiban P B",
      jobTitle: "Lead AI Engineer",
      url: "https://vilvaathiban.com/about",
      sameAs: [socials.linkedin, socials.twitter, socials.github],
    },
    areaServed: "European Union",
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
      { "@type": "ListItem", position: 3, name: "EU AI Act", item: "https://vilvaathiban.com/services/eu-ai-act" },
      { "@type": "ListItem", position: 4, name: "High-risk implementation", item: URL },
    ],
  },
];

export default function HighRiskImplementationService() {
  return (
    <Container>
      <Head>
        <title>
          EU AI Act High-Risk System Implementation — Articles 9–15 | Vilva Athiban
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
          content="EU AI Act high-risk system implementation — Articles 9–15"
        />
        <meta
          property="og:description"
          content="I engineer the technical controls high-risk AI systems need under the EU AI Act — risk management, data governance, Annex IV documentation, logging, human oversight, accuracy, robustness and cybersecurity — with the evidence a conformity assessment needs."
        />
        <meta
          name="description"
          content="EU AI Act high-risk system implementation by Vilva Athiban, Lead AI Engineer. I build the Article 9–15 controls into your stack: risk-management system, data governance, Annex IV technical documentation, automatic logging and traceability, transparency, human-oversight interfaces, and accuracy, robustness and cybersecurity testing — plus all the evidence your conformity assessment and declaration of conformity rely on, ahead of the 2 August 2026 deadline."
        />
        <meta
          name="keywords"
          content="EU AI Act high-risk system, Articles 9-15, Annex IV technical documentation, AI risk management system, AI data governance, automatic logging record-keeping, human oversight Article 14, AI accuracy robustness cybersecurity, conformity assessment, declaration of conformity, AI Act implementation"
        />
        <JsonLd data={LD} />
      </Head>
      <Header />

      <Wrap>
        <Eyebrow>Services · EU AI Act · High-risk</Eyebrow>
        <Title>High-risk AI system implementation — Articles 9–15</Title>
        <Lead>
          If a system is high-risk under Annex III, the Act asks for a specific
          set of technical controls. I build them into your stack — and produce
          the evidence a conformity assessment relies on — before{" "}
          <strong>2 August 2026</strong>.
        </Lead>

        <CtaRow>
          <Cta href={CAL} target="_blank" rel="noopener noreferrer">
            Book a discovery call
          </Cta>
          <CtaGhost as={Link} href="/services/eu-ai-act">
            EU AI Act overview
          </CtaGhost>
        </CtaRow>

        <Section>
          <h2>The controls I engineer</h2>
          <p>
            High-risk systems carry the Act&apos;s full technical obligation set.
            Each of these is something you have to <strong>build and evidence</strong>,
            not just describe in a policy.
          </p>
          <Cards>
            <Card>
              <h3>Risk-management system</h3>
              <p>Article 9 — a continuous process to identify, evaluate and mitigate risks across the system&apos;s lifecycle.</p>
            </Card>
            <Card>
              <h3>Data &amp; data governance</h3>
              <p>Article 10 — training, validation and test data practices, bias checks and documented data provenance.</p>
            </Card>
            <Card>
              <h3>Technical documentation</h3>
              <p>Article 11 &amp; Annex IV — living documentation of purpose, design, data and performance, tied to your evals.</p>
            </Card>
            <Card>
              <h3>Logging &amp; traceability</h3>
              <p>Article 12 — automatic, audit-grade record-keeping of inputs, outputs, versions and interventions.</p>
            </Card>
            <Card>
              <h3>Transparency &amp; instructions</h3>
              <p>Article 13 — clear information and instructions for use so deployers can operate the system correctly.</p>
            </Card>
            <Card>
              <h3>Human oversight</h3>
              <p>Article 14 — an oversight interface to monitor, override and stop the system, with every intervention logged.</p>
            </Card>
            <Card>
              <h3>Accuracy &amp; robustness</h3>
              <p>Article 15 — eval suites and adversarial tests wired into CI, with metrics feeding the documentation.</p>
            </Card>
            <Card>
              <h3>Cybersecurity</h3>
              <p>Article 15 — defences against data poisoning, model evasion and prompt-injection, tested continuously.</p>
            </Card>
          </Cards>
        </Section>

        <Section>
          <h2>Built the way you already build software</h2>
          <p>
            The reason this works coming from an engineer, not a document
            template, is that the controls become part of your codebase. Logging
            and evals wire into CI. Technical documentation is generated from the
            system and stays current as the model changes. The human-oversight
            layer is a real interface your operators use. When a conformity
            assessment or an auditor asks for evidence, it already exists —
            because it&apos;s produced by the running system, not assembled by hand
            the week before.
          </p>
        </Section>

        <Section>
          <h2>How the build runs</h2>
          <Steps>
            <li>
              <strong>Scope from the roadmap</strong>
              <span>Take the classified high-risk systems from the readiness assessment and confirm the exact controls each needs.</span>
            </li>
            <li>
              <strong>Build the controls</strong>
              <span>Implement risk management, data governance, logging, human oversight, transparency and robustness testing in your stack.</span>
            </li>
            <li>
              <strong>Document &amp; evidence</strong>
              <span>Generate the Annex IV dossier and the risk, eval and logging evidence a conformity assessment relies on.</span>
            </li>
            <li>
              <strong>Assess &amp; monitor</strong>
              <span>Support the conformity assessment and declaration, then stand up post-market monitoring and incident reporting.</span>
            </li>
          </Steps>
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
          This service delivers the technical implementation and supporting
          evidence for high-risk system obligations. The legal conformity
          assessment, declaration of conformity and any notified-body process
          remain the responsibility of your legal and compliance function.
        </p>

        <CtaRow>
          <Cta href={CAL} target="_blank" rel="noopener noreferrer">
            Book a discovery call
          </Cta>
          <CtaGhost as={Link} href="/services/eu-ai-act/transparency-and-literacy">
            Transparency &amp; AI literacy →
          </CtaGhost>
        </CtaRow>
      </Wrap>

      <Subscribe />
      <Footer />
    </Container>
  );
}
