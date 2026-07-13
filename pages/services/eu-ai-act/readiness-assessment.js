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

const URL = "https://vilvaathiban.com/services/eu-ai-act/readiness-assessment";
const CAL = "https://cal.com/vilva-athiban/30min";

const FAQS = [
  {
    q: "What exactly do I get from a readiness assessment?",
    a: "A complete inventory of your AI systems, a classification worksheet that lines each system up against the Act's categories with the technical facts your legal team needs to make the call, a gap analysis of the technical controls each in-scope system is missing, and a prioritised engineering roadmap to close those gaps before the deadline. It's the document you take to legal for the formal classification, and to your engineering team for the build.",
  },
  {
    q: "Do you classify risk yourself, or does legal?",
    a: "Legal makes the call; I make it easy for them. Deciding whether a system is high-risk under Annex III, or whether you're the provider or the deployer, is a legal determination — get it wrong and someone carries fine exposure, so it shouldn't sit with an engineer. What I do is line every system up against the Act's categories (Article 5 bans, Annex III high-risk, Article 50 transparency, GPAI, minimal) with the technical evidence for each, so your legal advisers can classify quickly and confidently rather than starting from a blank page.",
  },
  {
    q: "How long does it take?",
    a: "Typically 1–2 weeks depending on how many AI systems and integrations you run. Week one is discovery — interviews, inventory and classification. The output roadmap lands at the end, scoped so the implementation phase can start immediately.",
  },
  {
    q: "We don't even know how many AI systems we have. Is that a problem?",
    a: "That's the normal starting point, and part of the value. AI has usually crept in through copilots, embedded vendor features, internal tools and fine-tuned models. I run a structured discovery to surface shadow AI as well as the obvious systems, so nothing enforceable gets missed.",
  },
  {
    q: "What happens after the assessment?",
    a: "You own the roadmap and can execute it however you like — with your own team, another vendor, or with me in the implementation phase. Nothing locks you in. Most companies move straight into implementing the high-risk controls because the deadline is tight.",
  },
];

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EU AI Act Readiness Assessment & Risk Classification",
    serviceType: "EU AI Act readiness assessment, AI system inventory and risk classification",
    description:
      "A readiness assessment for the EU AI Act: I inventory every AI system, classify its risk, determine your provider or deployer role, run a gap analysis against the applicable obligations and deliver a prioritised compliance roadmap ahead of the 2 August 2026 deadline.",
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
      { "@type": "ListItem", position: 4, name: "Readiness assessment", item: URL },
    ],
  },
];

export default function ReadinessAssessmentService() {
  return (
    <Container>
      <Head>
        <title>
          EU AI Act Readiness Assessment &amp; Risk Classification | Vilva Athiban
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
          content="EU AI Act readiness assessment & risk classification"
        />
        <meta
          property="og:description"
          content="Inventory every AI system, assemble the technical evidence your legal team needs to classify risk and confirm your provider or deployer role, and get a prioritised engineering gap-analysis and roadmap before the 2 August 2026 EU AI Act deadline."
        />
        <meta
          name="description"
          content="An EU AI Act technical readiness assessment by Vilva Athiban, Lead AI Engineer. I inventory every AI system you build, deploy or use, and assemble a classification worksheet with the technical evidence your legal team needs to decide risk category and provider/deployer role. I run a gap analysis of the technical controls each in-scope system is missing and deliver a prioritised engineering roadmap ahead of the 2 August 2026 deadline. Legal makes the classification call; I make it fast and well-grounded."
        />
        <meta
          name="keywords"
          content="EU AI Act readiness assessment, AI risk classification, AI system inventory, high-risk AI classification, Annex III, provider vs deployer, AI Act gap analysis, AI compliance roadmap, shadow AI discovery, EU AI Act deadline"
        />
        <JsonLd data={LD} />
      </Head>
      <Header />

      <Wrap>
        <Eyebrow>Services · EU AI Act · Assessment</Eyebrow>
        <Title>EU AI Act technical readiness assessment</Title>
        <Lead>
          Before you build a single control, you need to know which of your AI
          systems the Act touches and how hard. I inventory them and gather the
          technical facts, your legal team classifies the risk, and I turn that
          into a prioritised engineering roadmap to the{" "}
          <strong>2 August 2026</strong> deadline.
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
          <h2>What the assessment delivers</h2>
          <Cards>
            <Card>
              <h3>AI system inventory</h3>
              <p>Every system you build, deploy or embed — including shadow AI and vendor features that have crept in unnoticed.</p>
            </Card>
            <Card>
              <h3>Classification worksheet</h3>
              <p>Each system lined up against Annex III, Article 5, Article 50 and GPAI with the technical evidence — ready for your legal team to make the formal call.</p>
            </Card>
            <Card>
              <h3>Provider/deployer inputs</h3>
              <p>The technical facts — do you fine-tune, modify or rebrand a bought model? — that legal needs to fix your role for each system.</p>
            </Card>
            <Card>
              <h3>Gap analysis &amp; roadmap</h3>
              <p>A prioritised, engineering-level plan: what to build, in what order, to be ready before the deadline.</p>
            </Card>
          </Cards>
        </Section>

        <Section>
          <h2>Why classification is the whole game — and why legal owns it</h2>
          <p>
            The AI Act is proportionate: a minimal-risk system needs almost
            nothing, while a high-risk system carries the full weight of risk
            management, data governance, logging, human oversight, technical
            documentation and conformity assessment. Getting the classification
            wrong is expensive in both directions — you either over-build
            controls you never needed, or you miss an enforceable obligation and
            carry real fine exposure. Precisely because the stakes are legal, the
            classification call belongs with your legal advisers, not with me.
            What this assessment does is give them a system-by-system worksheet
            with the technical evidence already assembled, so their call is fast
            and well-grounded — and so the engineering that follows is scoped to
            exactly what&apos;s required.
          </p>
        </Section>

        <Section>
          <h2>How it runs</h2>
          <Steps>
            <li>
              <strong>Discover</strong>
              <span>Structured interviews and a technical sweep to surface every AI system, integration and embedded vendor feature.</span>
            </li>
            <li>
              <strong>Classify (legal makes the call)</strong>
              <span>I line each system up against Article 5, Annex III, Article 50 and GPAI with the technical evidence; your legal team makes the formal classification and fixes provider/deployer roles.</span>
            </li>
            <li>
              <strong>Gap-analyse</strong>
              <span>For every in-scope system, compare current controls to the obligations that apply and record the delta.</span>
            </li>
            <li>
              <strong>Roadmap</strong>
              <span>A prioritised, costed plan of the engineering work, sequenced so the highest-risk systems are ready first.</span>
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
          This assessment is a technical and engineering exercise, not legal
          advice. Final legal interpretation stays with your own legal and
          compliance advisers.
        </p>

        <CtaRow>
          <Cta href={CAL} target="_blank" rel="noopener noreferrer">
            Book a discovery call
          </Cta>
          <CtaGhost as={Link} href="/services/eu-ai-act/high-risk-implementation">
            High-risk implementation →
          </CtaGhost>
        </CtaRow>
      </Wrap>

      <Subscribe />
      <Footer />
    </Container>
  );
}
