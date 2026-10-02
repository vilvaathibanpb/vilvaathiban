import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/idle-blacksmith/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const FAQ = [
  {
    "q": "I did not get offline earnings",
    "a": "Earnings accrue for up to 2 hours away (8 hours with the Royal Charter) and only from apprentices, not from tapping. Changing the phone clock does not add more."
  },
  {
    "q": "Boost or chest shows \"Ad not ready\"",
    "a": "Rewarded videos need an internet connection and sometimes are not available. Try again in a minute, or get the Royal Charter to claim them without ads."
  },
  {
    "q": "I reset my progress by accident",
    "a": "Progress is stored only on your phone, so a Pass the Forge cannot be undone. Your Legacy Embers are kept and make the next run much faster."
  },
  {
    "q": "I bought Royal Charter but ads are still showing",
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
      <title>Support — Idle Blacksmith</title>
      <meta
        name="description"
        content="Help for the Idle Blacksmith Android game: how to play, rewarded ads, restoring a purchase, ad privacy choices and where your progress lives."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Idle Blacksmith</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your phone model and Android version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How to play</h2>
        <p>
          Tap the anvil to forge the selected weapon; each finished weapon sells for gold. Spend gold on new weapons, apprentices (who forge automatically, even while the app is closed) and upgrades. Once your run has earned enough gold you can Pass the Forge for Legacy Embers that boost all future income. Everything runs offline and there is no account.
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
          welcome. See also the <Link href="/apps/idle-blacksmith/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
