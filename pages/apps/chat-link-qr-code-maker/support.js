import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/chat-link-qr-code-maker/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "The link does not open a chat",
    a: "Make sure the number includes the country code and no leading zeros or plus sign — for example 14155550100, not +1 (415) 555-0100. The App strips spaces and symbols for you, but the country code has to be there. The \"Open chat\" button needs a messaging app that handles wa.me links to be installed.",
  },
  {
    q: "The QR code will not save",
    a: "Allow \"Add Photos Only\" in iOS Settings → Chat Link → Photos, then tap \"Save QR to Photos\" again.",
  },
  {
    q: "My profile picture is still cropped",
    a: "Save the square picture from the Profile Pic tab, then choose that saved square image (not the original) when you set your profile photo. Because the image is already square, the round crop shows all of it.",
  },
  {
    q: "Does the App need an account or internet?",
    a: "No. There is no account and everything runs on your device.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Chat Link & QR Code Maker</title>
      <meta
        name="description"
        content="Support and troubleshooting for the Chat Link & QR Code Maker iOS app."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps">Chat Link & QR Code Maker</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Stuck on something? Most issues are solved below — and if yours
        isn&apos;t, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Chat%20Link%20App%20Support`}>
          {SUPPORT_EMAIL}
        </a>{" "}
        and I&apos;ll get back to you personally, usually within two days.
      </Lead>

      <Section>
        <h2>Troubleshooting</h2>
        {TROUBLESHOOTING.map((t) => (
          <Faq key={t.q}>
            <h3>{t.q}</h3>
            <p>{t.a}</p>
          </Faq>
        ))}
      </Section>

      <Section>
        <h2>Feature requests</h2>
        <p>
          The App is actively developed and feature requests shape the roadmap.
          Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Chat%20Link%20Feature%20Request`}>
            {SUPPORT_EMAIL}
          </a>{" "}
          with the subject &quot;Feature Request&quot;.
        </p>
      </Section>

      <Section>
        <h2>Privacy</h2>
        <p>
          Everything the App does happens on your device — nothing is uploaded.
          Read the full{" "}
          <Link href="/apps/chat-link-qr-code-maker/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
