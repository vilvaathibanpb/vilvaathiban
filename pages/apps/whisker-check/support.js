import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/whisker-check/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "Is this a diagnosis?",
    a: "No. The check follows a published facial pain scale for cats and records what you observed. A higher score is a reason to call your vet, not a verdict. If your cat is not eating, hiding, breathing fast or you are worried, call your vet whatever the score says.",
  },
  {
    q: "What is the scale based on?",
    a: "Five facial features: ears, eyes, muzzle, whiskers and head position, each scored 0, 1 or 2. It comes from peer-reviewed research (Evangelista et al., Scientific Reports, 2019). The app draws its own illustrations and cites the paper under About.",
  },
  {
    q: "Reminders are not arriving",
    a: "Allow notifications for Whisker Check in Settings › Notifications, and check that Focus modes are not silencing them.",
  },
  {
    q: "How do I send the report to my vet?",
    a: "Home › Vet report, pick the period, then Share. Email it, AirDrop it or print it. Creating reports is part of the one-time unlock.",
  },
  {
    q: "I bought the unlock but it still shows as locked",
    a: "Open Settings in the app and tap Restore purchase while online, signed in with the Apple Account that bought it.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Whisker Check: Cat Comfort</title>
      <meta
        name="description"
        content="Help for Whisker Check: Cat Comfort: common questions, restoring your purchase and contact."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Whisker Check: Cat Comfort</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your device model and iOS version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How it works</h2>
        <p>
          Add your cat, then run a face check: five steps, each with three drawings to compare with your cat's face. The result explains what the score means and whether it is worth calling your vet. A quicker mood read looks at tail, ears, eyes and posture. Every check is kept in a history with a trend chart. The one-time unlock adds more cats, full history, reminders and the PDF vet report.
        </p>
      </Section>

      <Section>
        <h2>Troubleshooting</h2>
        {TROUBLESHOOTING.map((f) => (
          <Faq key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </Faq>
        ))}
      </Section>

      <Section>
        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Bug reports and ideas are both
          welcome. See also the <Link href="/apps/whisker-check/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
