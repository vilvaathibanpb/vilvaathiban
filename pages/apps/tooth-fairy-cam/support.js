import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/tooth-fairy-cam/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "How do I make the photo look real?",
    a: "Take the photo in dim light from where a hidden camera would sit, then place the fairy near a window, lamp or the pillow. Lower the glow for a subtle visit, or turn on the Night vision look with the timestamp for a security-camera feel.",
  },
  {
    q: "Where are my saved pictures?",
    a: "In the Photos app, in your Recents. Tap Save photo in the editor; the first time, iOS asks for permission to add photos.",
  },
  {
    q: "The camera or Save button does nothing",
    a: "Check Settings › Privacy & Security › Camera and › Photos and allow Tooth Fairy Cam. Photos can be set to Add Photos Only; that is enough for saving.",
  },
  {
    q: "I bought the unlock but Santa and the others are still locked",
    a: "Open Settings in the app and tap Restore purchase while online, signed in with the Apple Account that bought it.",
  },
  {
    q: "How do I add a second child to the tooth map?",
    a: "Open Tooth map and tap Add child. Each child keeps their own chart, dates and notes.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Tooth Fairy Cam: Magic Photo</title>
      <meta
        name="description"
        content="Help for Tooth Fairy Cam: Magic Photo: common questions, restoring your purchase and contact."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Tooth Fairy Cam: Magic Photo</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your device model and iOS version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How it works</h2>
        <p>
          Take or pick a photo of the room, place the glowing Tooth Fairy in it, then drag, pinch and twist her into place. Pick a camera look, save the photo, and use Preview to show her flying across the screen. The tooth map keeps every lost tooth with its date and what she left, and the letter tab writes a note back in her handwriting. The Tooth Fairy is free; a one-time purchase adds more poses, the hallway cam and seasonal visitors.
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
          welcome. See also the <Link href="/apps/tooth-fairy-cam/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
