import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/cat-games/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "How do I get out of a game?",
    a: "Press and hold the faint ring in the top-left corner for about a second. A tap does nothing on purpose, so a swatting paw can't quit or open menus. The end-of-session buttons also need a hold.",
  },
  {
    q: "My cat swiped the app closed",
    a: "Turn on Guided Access: Settings › Accessibility › Guided Access. Then triple-click the side button while a game is running. The home gesture and notifications are blocked until you triple-click again.",
  },
  {
    q: "My cat isn't interested",
    a: "Lay the device flat on the floor, turn the brightness up and step back. Try Mouse Hole or Koi Pond at Normal speed first; many cats warm up after a few sessions. Short sessions work better than long ones, which is why there is a timer.",
  },
  {
    q: "Why is the laser dot yellow, not red?",
    a: "Cats see blues and yellows far better than reds, which look to them like a dull olive. Every target in Pounce is drawn in colors a cat can pick out on a dark floor.",
  },
  {
    q: "I bought the unlock but the games are still locked",
    a: "Open Settings (sliders icon, top right of the home screen) and tap Restore purchase while online, signed in with the Apple Account that bought it. The unlock works on every iPhone and iPad signed in to that account.",
  },
  {
    q: "Will it scratch my screen?",
    a: "Trimmed claws rarely do, but a screen protector is a good idea, and stay nearby while your cat plays.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Pounce Pad: Games for Cats</title>
      <meta
        name="description"
        content="Help for Pounce, screen games for cats: leaving a game, Guided Access, restoring your purchase and getting a shy cat interested."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Pounce Pad: Games for Cats</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your device model and iOS version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How it works</h2>
        <p>
          Pick a game, lay the screen on the floor, and let your cat hunt. Prey moves in bursts, pauses and
          hides the way real prey does. Every paw on the screen counts as a pounce and every hit on the prey as
          a catch. A timer ends the session after the length you choose. Mouse Hole and Laser Dot are free; a
          one-time purchase unlocks the other six games.
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
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Bug reports and game ideas are both
          welcome. See also the <Link href="/apps/cat-games/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
