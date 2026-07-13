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

const URL = "https://vilvaathiban.com/services/eu-ai-act/transparency-and-literacy";
const CAL = "https://cal.com/vilva-athiban/30min";

const FAQS = [
  {
    q: "What does Article 50 transparency require?",
    a: "Four things, broadly. People must be told when they're interacting with an AI system (e.g. a chatbot). AI-generated or manipulated audio, image, video and text must be marked as artificial in a machine-readable way. Deepfakes and AI-generated content on matters of public interest must be disclosed. And emotion-recognition or biometric-categorisation systems must inform the people exposed to them. I build the mechanisms that satisfy each of these.",
  },
  {
    q: "How do you 'watermark' or label AI-generated content technically?",
    a: "For generated media, that means embedding machine-readable markers — provenance metadata and, where appropriate, standards like C2PA content credentials or watermarking — plus visible disclosure in the UI. For text and chat, it's clear in-product labelling and disclosure at the point of interaction. I implement the detection, marking and disclosure paths so the obligation is met by the product, not by a policy nobody sees.",
  },
  {
    q: "What is the Article 4 AI-literacy obligation?",
    a: "Since February 2025, providers and deployers must ensure their staff (and others operating AI on their behalf) have a sufficient level of AI literacy — enough understanding to use these systems safely and appropriately, proportionate to their role and the system's risk. It's an active obligation, not a nice-to-have, and it's exactly the kind of organisation-wide enablement I already do.",
  },
  {
    q: "Why bundle transparency with AI literacy?",
    a: "Because both are about people rather than models, and they reinforce each other. Transparency is only meaningful if your teams understand what they're disclosing and why; literacy is only real if it's grounded in the actual AI systems you run. Delivering them together means the disclosure mechanisms and the training that explains them ship as one coherent programme.",
  },
  {
    q: "What does the AI-literacy programme look like?",
    a: "Role-based, hands-on and tied to your real systems — not a generic e-learning module. Engineers, product, support, ops, legal and leadership each get what their role needs: how the systems work, where the risks are, what the Act asks of them, and how to use AI well. I've coached whole organisations through AI adoption, so this is the same work, framed to satisfy the obligation.",
  },
];

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EU AI Act Transparency & AI Literacy",
    serviceType: "EU AI Act Article 50 transparency implementation and Article 4 AI-literacy programme",
    description:
      "Implementation of EU AI Act Article 50 transparency obligations — AI-interaction disclosure, machine-readable labelling of AI-generated content, deepfake marking — together with the Article 4 AI-literacy programme for your teams.",
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
      { "@type": "ListItem", position: 4, name: "Transparency & AI literacy", item: URL },
    ],
  },
];

export default function TransparencyAndLiteracyService() {
  return (
    <Container>
      <Head>
        <title>
          EU AI Act Transparency (Article 50) &amp; AI Literacy (Article 4) | Vilva Athiban
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
          content="EU AI Act transparency (Article 50) & AI literacy (Article 4)"
        />
        <meta
          property="og:description"
          content="I implement Article 50 transparency — AI-interaction disclosure, machine-readable labelling of AI-generated content and deepfake marking — and run the Article 4 AI-literacy programme for your teams."
        />
        <meta
          name="description"
          content="EU AI Act transparency and AI-literacy service by Vilva Athiban, Lead AI Engineer. I build the Article 50 transparency mechanisms — telling users they're interacting with AI, machine-readable labelling and watermarking of AI-generated content, and deepfake disclosure — and deliver the Article 4 AI-literacy programme so your teams can use AI safely and appropriately, proportionate to their role."
        />
        <meta
          name="keywords"
          content="EU AI Act transparency, Article 50, AI content labelling, AI watermarking, C2PA content credentials, deepfake disclosure, AI chatbot disclosure, Article 4 AI literacy, AI literacy programme, AI training, machine-readable AI marking, EU AI Act deadline"
        />
        <JsonLd data={LD} />
      </Head>
      <Header />

      <Wrap>
        <Eyebrow>Services · EU AI Act · Transparency &amp; literacy</Eyebrow>
        <Title>Transparency (Article 50) &amp; AI literacy (Article 4)</Title>
        <Lead>
          The Act&apos;s people-facing obligations: tell users when they&apos;re
          dealing with AI, mark AI-generated content, and make sure your teams are
          AI-literate. I build the mechanisms and run the programme.
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
          <h2>Article 50 — transparency you have to build</h2>
          <p>
            Transparency isn&apos;t a disclaimer in your terms of service — it&apos;s
            behaviour in the product. Applicable from <strong>2 August 2026</strong>,
            these obligations need real mechanisms.
          </p>
          <Cards>
            <Card>
              <h3>AI-interaction disclosure</h3>
              <p>Users must be told when they&apos;re interacting with an AI system, such as a chatbot — clearly and at the right moment.</p>
            </Card>
            <Card>
              <h3>Content labelling</h3>
              <p>AI-generated or manipulated audio, image, video and text marked as artificial in a machine-readable way.</p>
            </Card>
            <Card>
              <h3>Deepfake marking</h3>
              <p>Deepfakes and AI-generated content on matters of public interest disclosed as artificially generated or manipulated.</p>
            </Card>
            <Card>
              <h3>Biometric &amp; emotion systems</h3>
              <p>People exposed to emotion-recognition or biometric-categorisation systems informed that the system is operating.</p>
            </Card>
          </Cards>
        </Section>

        <Section>
          <h2>How I implement the marking</h2>
          <p>
            For generated media, that means embedding machine-readable provenance
            — metadata, and where appropriate <strong>C2PA content
            credentials</strong> or watermarking — alongside visible disclosure in
            the UI. For chat and text, it&apos;s clear in-product labelling at the
            point of interaction. The goal is that the obligation is satisfied by
            the product itself: a downstream tool or platform can detect the
            marking automatically, and a person can see the disclosure without
            hunting for it.
          </p>
        </Section>

        <Section>
          <h2>Article 4 — AI literacy for your teams</h2>
          <p>
            Since February 2025, providers and deployers must ensure the people
            operating their AI systems have a <strong>sufficient level of AI
            literacy</strong> — enough to use them safely and appropriately,
            proportionate to role and risk. I deliver this as a role-based,
            hands-on programme tied to the systems you actually run, not a generic
            e-learning module. It&apos;s the same organisation-wide AI enablement I
            do as a coach, framed to satisfy the obligation.
          </p>
          <Cards>
            <Card>
              <h3>Role-based tracks</h3>
              <p>Engineering, product, support, ops, legal and leadership each get what their role and risk level require.</p>
            </Card>
            <Card>
              <h3>Grounded in your systems</h3>
              <p>Built on the real AI you deploy — how it works, where the risks are, and what the Act asks of each team.</p>
            </Card>
            <Card>
              <h3>Evidenced</h3>
              <p>Records of who was trained on what, so the literacy obligation is demonstrable, not just asserted.</p>
            </Card>
          </Cards>
        </Section>

        <Section>
          <h2>How it runs</h2>
          <Steps>
            <li>
              <strong>Map disclosure points</strong>
              <span>Find every place your product interacts with users or generates content and decide the transparency mechanism for each.</span>
            </li>
            <li>
              <strong>Build the mechanisms</strong>
              <span>Implement AI-interaction disclosure, content marking and provenance, and deepfake labelling in the product.</span>
            </li>
            <li>
              <strong>Run the literacy programme</strong>
              <span>Deliver role-based AI-literacy training grounded in your systems, and record completion as evidence.</span>
            </li>
            <li>
              <strong>Keep it current</strong>
              <span>Fold transparency and literacy into onboarding and release process so new features and hires stay covered.</span>
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
          This service delivers the technical transparency mechanisms and the
          AI-literacy programme; it is not legal advice. Legal interpretation of
          the obligations stays with your own legal and compliance advisers.
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
