import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/chat-export-studio/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "\"Could not read this file as an exported chat\"",
    a: "The App reads the .txt (or the .zip containing it) produced by the chat app's own \"Export Chat\" function — in the chat, tap the contact or group name → Export Chat → Without Media. Screenshots, PDFs and copied text are not exports. If a genuine export fails, email the first two lines of the .txt (you can replace names) so the date format can be added.",
  },
  {
    q: "Media is missing from the PDF",
    a: "Version 1.0 renders text and collapses media into \"N media files omitted\" markers. Including images from a \"With Media\" export is planned.",
  },
  {
    q: "Is the PDF admissible as evidence?",
    a: "The PDF reproduces the export faithfully and is generated without any cloud processing, but admissibility depends on your jurisdiction and the context. Keep the original .txt/.zip export alongside the PDF.",
  },
  {
    q: "Can I export more than one chat?",
    a: "Yes — tap \"Close this chat\" and open the next file. There is no limit.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Chat Export Studio</title>
      <meta
        name="description"
        content="Support and troubleshooting for the Chat Export Studio iOS app."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps">Chat Export Studio</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Stuck on something? Most issues are solved below — and if yours
        isn&apos;t, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Chat%20Export%20App%20Support`}>
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
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Chat%20Export%20Feature%20Request`}>
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
          <Link href="/apps/chat-export-studio/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
