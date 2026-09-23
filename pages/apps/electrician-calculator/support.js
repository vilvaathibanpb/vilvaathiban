import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/electrician-calculator/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "The wire size result seems one size larger than the table",
    a: "Check the three inputs that move the answer: the continuous-load toggle (adds 25%), the ambient temperature (anything above 30 °C reduces ampacity) and the number of current-carrying conductors (more than three applies the 310.15(C)(1) factor). The Adjusted ampacity list on the same screen shows the table value next to the corrected value for every size.",
  },
  {
    q: "Voltage drop differs slightly from another calculator",
    a: "The App uses the field formula VD = 2·K·I·L ÷ CM with K = 12.9 (copper) and 21.2 (aluminum). Calculators that use Chapter 9 Table 9 impedance values, or a different K, land a few percent apart. Both are accepted practice; the NEC gives only informational limits.",
  },
  {
    q: "Conduit fill says no size fits",
    a: "The list of trade sizes stops at 4\" for EMT and IMC and 6\" for PVC and RMC. Split the conductors across two raceways or switch raceway type; the row of five buttons under the result compares them instantly.",
  },
  {
    q: "The App is in the wrong language",
    a: "Settings (gear icon, top right) → App language. \"System default\" follows the iPhone language; any of the 19 languages can be forced from there.",
  },
  {
    q: "Can I restore my purchase on a new iPhone?",
    a: "The App is a paid download, so it is tied to your Apple Account. Download it again from the App Store on the new device with the same account; you will not be charged twice.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Electrician Calculator Toolkit</title>
      <meta name="description" content="Support and troubleshooting for the Electrician Calculator Toolkit iOS app." />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/electrician-calculator">Electrician Calculator Toolkit</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Questions, a table value you think is wrong, or a tool you would like added: email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Electrician%20Calculator%20Pro`}>{SUPPORT_EMAIL}</a>. Replies
        usually within two working days. Please include the iOS version and, for a calculation
        question, the exact inputs you used.
      </Lead>
      <Section>
        <h2>Troubleshooting</h2>
        {TROUBLESHOOTING.map((item) => (
          <Faq key={item.q} q={item.q} a={item.a} />
        ))}
      </Section>
      <Section>
        <h2>Reporting a table error</h2>
        <p>
          Every reference value in the App is transcribed from the 2023 edition of NFPA 70. If you find
          a value that disagrees with the printed table, email the table number, the row and the value
          you expected; corrections ship in the next update.
        </p>
      </Section>
      <Section>
        <p>
          <Link href="/apps/electrician-calculator/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/apps/electrician-calculator">About the app</Link>
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
