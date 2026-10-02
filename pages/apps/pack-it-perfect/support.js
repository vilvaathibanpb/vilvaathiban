import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/pack-it-perfect/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const FAQ = [
  {
    "q": "An item will not fit anywhere",
    "a": "Tap it to turn it, and check whether another item is blocking the space it needs. Every level has a solution that uses all items, sometimes only with the right items turned."
  },
  {
    "q": "Hint or Skip shows \"Ad not ready\"",
    "a": "Rewarded videos need an internet connection and sometimes are not available. Try again in a minute. You get 3 free hints, and Pack It Premium makes hints unlimited."
  },
  {
    "q": "How do I replay a level?",
    "a": "Open Chapters, pick the chapter, then tap any finished level on the map to replay it for more stars."
  },
  {
    "q": "I bought Pack It Premium but ads are still showing",
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
      <title>Support — Pack It Perfect</title>
      <meta
        name="description"
        content="Help for the Pack It Perfect Android game: how to play, rewarded ads, restoring a purchase, ad privacy choices and where your progress lives."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Pack It Perfect</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your phone model and Android version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How to play</h2>
        <p>
          Drag an item from the tray onto the container; a green outline shows where it will land. Tap an item to turn it. Drag a placed item back to the tray to move it. A level is complete when every item fits, and you earn up to three stars for solving it without hints. Everything runs offline and there is no account.
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
          welcome. See also the <Link href="/apps/pack-it-perfect/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
