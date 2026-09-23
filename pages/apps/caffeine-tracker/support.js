import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/caffeine-tracker/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "The curfew says I already missed it, but I only had one coffee",
    a: "The curfew is computed for your usual dose (the last amount you logged) on top of what is already in your system, against your target at bedtime. A low target (25 mg) and an early bedtime move the curfew to the early afternoon. Raise the target in Settings → Sleep or check the half-life.",
  },
  {
    q: "The level seems too high or too low",
    a: "Half-life varies a lot between people (roughly 3 to 7 hours) and with pregnancy, some medicines, oral contraceptives and smoking. Adjust it in Settings → Sleep → Half-life. Presets use typical caffeine contents; use Pro's custom amount for a known value.",
  },
  {
    q: "Apple Health does not show my drinks",
    a: "Health sync is part of Pro and must be turned on in Settings → Pro. iOS then asks for permission to write Dietary Caffeine; if you declined, enable it in iOS Settings → Health → Data Access & Devices → Caffeine. Only drinks logged after the toggle is on are written.",
  },
  {
    q: "I bought Pro but it still shows Unlock Pro",
    a: "Open Settings and tap Restore purchase while online, signed in with the Apple Account that made the purchase.",
  },
  {
    q: "The app is in the wrong language",
    a: "Settings (gear icon) → App language. System default follows the iPhone language; any of the 19 languages can be forced.",
  },
  {
    q: "How do I move to a new iPhone?",
    a: "Restore the new phone from a backup and the log comes across. The Pro purchase is tied to your Apple Account and can be restored for free.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Caffeine Tracker: Curfew</title>
      <meta name="description" content="Support and troubleshooting for the Caffeine Tracker: Curfew iOS app." />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/caffeine-tracker">Caffeine Tracker: Curfew</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Questions, a drink that is missing from the list, or a value you think is off: email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Caffeine%20Tracker`}>{SUPPORT_EMAIL}</a>. Replies usually
        within two working days.
      </Lead>
      <Section>
        <h2>Troubleshooting</h2>
        {TROUBLESHOOTING.map((item) => (
          <Faq key={item.q} q={item.q} a={item.a} />
        ))}
      </Section>
      <Section>
        <h2>Feature requests</h2>
        <p>
          A home-screen widget, Apple Watch logging and reading caffeine from Health are the most requested
          additions. If one of them matters to you, say so; it helps decide what ships next.
        </p>
      </Section>
      <Section>
        <p>
          <Link href="/apps/caffeine-tracker/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/apps/caffeine-tracker">About the app</Link>
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
