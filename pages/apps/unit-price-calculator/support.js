import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/unit-price-calculator/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "The unit price looks wrong",
    a: "Check the unit next to Amount (g vs kg, ml vs L) and the Packs field: a 6-pack of 330 ml is Amount 330, unit ml, Packs 6. The basis you compare in is set under Show price per.",
  },
  {
    q: "I cannot pick ounces or pounds",
    a: "Units follow the measure you picked at the top: Weight offers g, kg, oz and lb; Volume offers ml, L, fl oz and gal. Switch the measure first, then the unit.",
  },
  {
    q: "The discount total does not match the store",
    a: "The app applies percent off, then the extra percent off the already reduced price, then the coupon, then tax. Stores that take the coupon before the percentage or round each line differently can land a few cents apart. Turn off Add sales tax if your prices already include tax.",
  },
  {
    q: "I bought Remove Ads but still see the banner",
    a: "Open Settings and tap Restore purchase while online. The banner disappears immediately. If the purchase does not restore, make sure you are signed in with the same Apple Account that bought it.",
  },
  {
    q: "Can I turn off the tracking prompt?",
    a: "You can answer Ask App Not to Track: the app keeps working and shows non-personalized ads. In the EEA and UK you can also revisit Google's consent choices under Settings → Ad privacy options.",
  },
  {
    q: "The app is in the wrong language or currency",
    a: "Settings (gear icon) → App language and Currency. System default follows the iPhone; both can be forced.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Unit Price Calculator &amp; Tax</title>
      <meta name="description" content="Support and troubleshooting for the Unit Price Calculator & Tax iOS app." />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/unit-price-calculator">Unit Price Calculator &amp; Tax</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Questions, a calculation you think is off, or a unit you are missing: email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Unit%20Price%20Calculator`}>{SUPPORT_EMAIL}</a>. Replies
        usually within two working days. For a calculation question, please include the exact inputs.
      </Lead>
      <Section>
        <h2>Troubleshooting</h2>
        {TROUBLESHOOTING.map((item) => (
          <Faq key={item.q} q={item.q} a={item.a} />
        ))}
      </Section>
      <Section>
        <h2>Feature requests</h2>
        <p>
          A price-history list, barcode lookup and a home-screen widget are the most requested additions.
          If one of them matters to you, say so; it helps decide what ships next.
        </p>
      </Section>
      <Section>
        <p>
          <Link href="/apps/unit-price-calculator/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/apps/unit-price-calculator">About the app</Link>
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
