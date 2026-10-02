import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/mancala-offline/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const FAQ = [
  {
    "q": "The computer is too strong or too easy",
    "a": "Choose a level from Play: Easy, Medium, Hard or Master. The World Tour starts gently and ramps up city by city."
  },
  {
    "q": "Where is the daily puzzle?",
    "a": "On the home screen. A new puzzle unlocks every day at midnight (your phone time). Solve them on consecutive days to grow your streak."
  },
  {
    "q": "Hint or Undo shows \"Ad not ready\"",
    "a": "Rewarded videos need an internet connection and sometimes are not available. Try again in a minute, or get Mancala Pro to use hints and undos without ads."
  },
  {
    "q": "I bought Mancala Pro but ads are still showing",
    "a": "Open Settings in the game and tap Restore purchases while online, signed in to Google Play with the account that made the purchase."
  },
  {
    "q": "Where is my progress? Can I move it to a new phone?",
    "a": "Everything is stored on the device and nothing is uploaded, because the game has no account and no server. It may be restored on a new phone from an Android or Google device backup if backups are enabled."
  },
  {
    "q": "How do I change my ad privacy choices?",
    "a": "Settings (gear icon) → Ad privacy options. The option appears where a consent choice applies, for example in the EU, UK and Switzerland."
  }
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Mancala Offline</title>
      <meta
        name="description"
        content="Help for the Mancala Offline Android game: how to play, rewarded ads, restoring a purchase, ad privacy choices and where your progress lives."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Mancala Offline</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your phone model and Android version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How to play</h2>
        <p>
          Pick a mode on the home screen. Tap one of your pits (the left column) to sow its stones counter-clockwise, one per pit. Landing your last stone in your store gives you another turn; landing it in an empty pit on your side captures the stones opposite. The game ends when one side is empty, and the bigger store wins. Everything runs offline and there is no account.
        </p>
      </Section>

      <Section>
        <h2>Troubleshooting</h2>
        {FAQ.map((f) => (
          <Faq key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </Faq>
        ))}
      </Section>

      <Section>
        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Bug reports and feature requests are both
          welcome. See also the <Link href="/apps/mancala-offline/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
