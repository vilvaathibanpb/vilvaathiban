import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/voice-note-to-text/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "The transcript is empty or wrong",
    a: "The model works best on clear speech with little background noise, and it auto-detects the language. Very short notes (under two seconds), music, or heavily overlapping voices can produce poor results. If a clear recording transcribes badly, email the file — that usually points at a decoding issue that can be fixed.",
  },
  {
    q: "It is slow on my phone",
    a: "Transcription runs on the device's own processor; a 30-second note typically takes 5–15 seconds. Older iPhones take longer. The first transcription after launch also loads the model, which adds a few seconds once.",
  },
  {
    q: "Which formats work?",
    a: ".opus, .ogg, .m4a, .aac, .mp3, .wav, .caf, .aiff, .flac and most other audio files.",
  },
  {
    q: "Which languages?",
    a: "The bundled model recognises around 100 languages and detects the language automatically.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Voice Note to Text</title>
      <meta
        name="description"
        content="Support and troubleshooting for the Voice Note to Text iOS app."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps">Voice Note to Text</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Stuck on something? Most issues are solved below — and if yours
        isn&apos;t, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Voice%20to%20Text%20App%20Support`}>
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
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Voice%20to%20Text%20Feature%20Request`}>
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
          <Link href="/apps/voice-note-to-text/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
