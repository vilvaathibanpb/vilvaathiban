import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/teleprompter-camera-overlay/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "Voice-follow isn't scrolling",
    a: "Check that the mode is set to \"Follow my voice\" (waveform icon), that Speech Recognition permission is granted (iOS Settings → Teleprompter → Speech Recognition), and that your script's language matches the language you're speaking. The very first use of a language may need a brief one-time download of Apple's on-device speech model — connect to Wi-Fi once, then it works offline forever.",
  },
  {
    q: "The scroll lost my place after a long pause",
    a: "Just keep reading a few words from wherever you want to continue — the app re-finds your position automatically, even if you jump back to the top.",
  },
  {
    q: "I can't save to Photos",
    a: "Allow \"Add Photos Only\" access in iOS Settings → Teleprompter → Photos. Your recording is still safe in the in-app Recordings library (film icon on the home screen).",
  },
  {
    q: "Where are my recordings?",
    a: "Tap the film-stack icon at the top right of the home screen. Takes stay there in full quality until you delete them, even if you never saved them to Photos.",
  },
  {
    q: "How do I remove ads?",
    a: "Settings (gear icon) → \"Remove ads forever\" — a one-time purchase, no subscription. Already bought it on another device? Use \"Restore purchase\" with the same Apple Account.",
  },
  {
    q: "The camera preview is dark or black",
    a: "Make sure Camera permission is granted in iOS Settings → Teleprompter → Camera, then force-quit and reopen the app.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Teleprompter: Camera Overlay</title>
      <meta
        name="description"
        content="Support and troubleshooting for the Teleprompter: Camera Overlay iOS app — voice scrolling, recordings, saving to Photos, and removing ads."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/teleprompter-camera-overlay">Teleprompter: Camera Overlay</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Stuck on something? Most issues are solved below — and if yours
        isn&apos;t, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Teleprompter%20App%20Support`}>
          {SUPPORT_EMAIL}
        </a>{" "}
        and I&apos;ll get back to you personally.
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
          The app is actively developed and feature requests genuinely shape
          the roadmap. Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Teleprompter%20Feature%20Request`}>
            {SUPPORT_EMAIL}
          </a>{" "}
          with the subject &quot;Feature Request&quot;.
        </p>
      </Section>

      <Section>
        <h2>Privacy</h2>
        <p>
          Your scripts, voice, and videos never leave your iPhone. Read the
          full{" "}
          <Link href="/apps/teleprompter-camera-overlay/privacy">
            privacy policy
          </Link>
          .
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
