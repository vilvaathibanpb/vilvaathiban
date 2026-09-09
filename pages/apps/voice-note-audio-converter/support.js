import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/voice-note-audio-converter/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "My .opus voice note is greyed out in the picker",
    a: "Update to the latest version of the App — it accepts any file type and checks the extension itself. If a file is still greyed out, use the share sheet instead: long-press the voice note in your chat app → Share → \"Copy to Audio Converter\".",
  },
  {
    q: "The converted file plays at the wrong speed",
    a: "Please email the original file (or its format and duration) to the address above — this points at a sample-rate issue with that specific encoder and it is fixable.",
  },
  {
    q: "Can it output .m4a or .opus?",
    a: "Not yet. Version 1.0 outputs MP3 and WAV, which every player and editor accepts. Other output formats are planned.",
  },
  {
    q: "Where do converted files go?",
    a: "Tap Share next to a converted file to save it to Files, AirDrop it, or send it to any app. Files are not written anywhere until you do.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Voice Note Audio Converter</title>
      <meta
        name="description"
        content="Support and troubleshooting for the Voice Note Audio Converter iOS app."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps">Voice Note Audio Converter</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Stuck on something? Most issues are solved below — and if yours
        isn&apos;t, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Audio%20Converter%20App%20Support`}>
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
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Audio%20Converter%20Feature%20Request`}>
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
          <Link href="/apps/voice-note-audio-converter/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
