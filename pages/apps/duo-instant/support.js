import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

// The iOS app links to this URL exactly; keep the path stable.
const URL = "https://www.vilvaathiban.com/apps/duo-instant/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "Why is my print blank at first?",
    a: "That is the film developing. Like real instant film, a print takes about 40 seconds to come through. Shake the phone to make it develop faster.",
  },
  {
    q: "Do I need an iPhone Duo?",
    a: "No. Duo Instant works on any iPhone with iOS 17 or later; there, the print ejects by itself after the shot. The fold features need iPhone Duo with iOS 27.1: close the phone after a shot and the print rolls out on the outer screen, unfold it and the camera pops up out of the fold, or stand it half-folded on a table to shoot from the top half and print onto the bottom half.",
  },
  {
    q: "The film pack is empty. Do I have to buy more?",
    a: "No. A film pack holds 10 shots and reloading is free. It is only there to feel like a real camera. There are no in-app purchases.",
  },
  {
    q: "How do I save or share a print?",
    a: "Open the print and tap Save to put the framed print, caption included, in your Photos library, or Share to send it. The first time you tap Save, iOS asks for permission to add photos; the app cannot read your library.",
  },
  {
    q: "Can I print a photo I already have?",
    a: "Yes. Choose a photo from your library with Apple's photo picker and the app prints it. No library permission is needed for this.",
  },
  {
    q: "How do I shoot without the sounds?",
    a: "Tap the mute button. The shutter, film and flash sounds go quiet; the haptics stay on.",
  },
  {
    q: "The camera shows nothing. What now?",
    a: "Camera access is probably off. Open Settings > Privacy & Security > Camera and turn on Duo Instant, then reopen the app.",
  },
  {
    q: "I deleted the app. Can I get my prints back?",
    a: "Prints live only in the app's storage on your iPhone, so deleting the app deletes them, unless you restore from a device backup made earlier. Prints you saved to Photos stay in Photos.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Duo Instant</title>
      <meta
        name="description"
        content="Help for Duo Instant: developing prints, iPhone Duo features, film packs, saving and sharing prints, silent shooting and contact."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Duo Instant</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your iPhone model and iOS version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How it works</h2>
        <p>
          Pick a film (Color, B&amp;W or Faded), choose the front or back camera, turn on the flash if you need it
          and take the shot. On iPhone Duo, close the phone and the print rolls out on the outer screen; on other
          iPhones it ejects by itself. The print develops over about 40 seconds, and shaking the phone speeds it
          up. Write a caption on it, then save the framed print to Photos, share it or delete it. Your prints are
          pinned to the prints wall. Duo Instant is a one-time $4.99 purchase with no subscription, no ads, no
          in-app purchases and no account, and it works in 20 languages.
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
          welcome. See also the <Link href="/apps/duo-instant/privacy">privacy policy</Link> and the{" "}
          <Link href="/apps/duo-instant">app page</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
