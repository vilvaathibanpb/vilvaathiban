import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/warranty-tracker/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "I am not getting reminders",
    a: "Open Settings in the app and make sure Expiry reminders is on and at least one lead time is selected. Then check iOS Settings → Notifications → Warranty and allow notifications. Reminders are scheduled only for items whose expiry is still in the future; an item that expires in 5 days will not get a 7-day reminder.",
  },
  {
    q: "The camera button does nothing",
    a: "iOS asks for camera permission the first time. If you declined, enable it under iOS Settings → Privacy & Security → Camera → Warranty. You can always pick a photo from your library instead; that needs no permission.",
  },
  {
    q: "The expiry date looks wrong",
    a: "Expiry is the purchase date plus the manufacturer warranty plus the extended warranty, in months. Open the item, tap Edit and check all three. A warranty of 24 months bought on 15 March expires on 15 March two years later.",
  },
  {
    q: "The app is in the wrong language",
    a: "Settings (gear icon) → App language. \"System default\" follows the iPhone language; any of the 19 languages can be forced from there.",
  },
  {
    q: "How do I back up or move my data?",
    a: "The app is included in your normal iPhone or iCloud backup, so restoring a new phone from a backup brings everything across. Settings → Export all items as CSV gives you a spreadsheet copy at any time (photos are not part of the CSV).",
  },
  {
    q: "Can I restore my purchase on a new iPhone?",
    a: "The app is a paid download tied to your Apple Account. Download it again from the App Store with the same account; you will not be charged twice.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Warranty Tracker &amp; Receipt Log</title>
      <meta name="description" content="Support and troubleshooting for the Warranty Tracker & Receipt Log iOS app." />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/warranty-tracker">Warranty Tracker &amp; Receipt Log</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Questions, a bug, or a feature you would like: email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Warranty%20Tracker`}>{SUPPORT_EMAIL}</a>. Replies usually
        within two working days. Please include the iOS version and, for a reminder question, the lead
        times you selected.
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
          iCloud sync between devices, a home-screen widget and PDF receipts are the most requested
          additions. If one of them matters to you, say so; it helps decide what ships next.
        </p>
      </Section>
      <Section>
        <p>
          <Link href="/apps/warranty-tracker/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/apps/warranty-tracker">About the app</Link>
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
