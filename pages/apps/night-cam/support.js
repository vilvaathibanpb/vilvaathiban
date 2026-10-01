import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/night-cam/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "How do I get sharp star photos?",
    a: "Put the phone on a tripod or prop it against something solid. Tap the shutter and let go: a 3-second countdown gives the phone time to settle. Then don't touch it until the capture finishes. Stars takes 16 seconds, so any movement shows as blur.",
  },
  {
    q: "Why does the preview look darker or brighter than the photo?",
    a: "The live preview is a quick look at the scene. The final photo is built from many frames stacked together, so it usually comes out brighter and cleaner than the preview, especially for stars and faint aurora.",
  },
  {
    q: "What does the aurora chance mean?",
    a: "It is an estimate of how likely you are to see the aurora from where you are tonight. It combines NOAA's Kp forecast and OVATION aurora model with cloud cover. A high chance under heavy cloud is still a poor night. Forecasts change quickly, so check again before heading out.",
  },
  {
    q: "How do I restore my purchase?",
    a: "Open the paywall in the app and tap Restore, while online and signed in with the Apple Account that bought Pro.",
  },
  {
    q: "How long does Night Pass last?",
    a: "48 hours from the moment you buy it. It does not renew and you are not charged again.",
  },
  {
    q: "Do I have to allow location?",
    a: "No. Location only makes the Tonight forecast match where you are. You can decline it and still use every camera preset.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Night Cam: Stars & Aurora</title>
      <meta
        name="description"
        content="Help for Night Cam: Stars & Aurora: sharp star photos, the aurora chance, restoring purchases, Night Pass and contact."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Night Cam: Stars & Aurora</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your iPhone model and iOS version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How it works</h2>
        <p>
          Pick a preset and shoot: Moon, Stars, Aurora, Trails or City for photos, Night video, Aurora Live or
          Time-lapse for video. Everything is saved to your Photos library. The Tonight tab shows the aurora
          chance, cloud cover and moon phase for where you are, and is always free. Turn on red night mode to
          keep your eyes adjusted to the dark. You get 3 free captures with Moon, Stars, City or Night video;
          after that, Pro ($4.99 once) or Night Pass ($0.99 for 48 hours) unlocks everything. There are no
          subscriptions.
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
          welcome. See also the <Link href="/apps/night-cam/privacy">privacy policy</Link> and the{" "}
          <Link href="/apps/night-cam">app page</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
