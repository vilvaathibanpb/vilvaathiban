import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/expiry-date-tracker/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "The barcode scan did not fill in a product name",
    a: "The app first checks items you added before, then asks the free Open Food Facts database. Household and medicine barcodes are often missing from it, and the lookup is skipped when you are offline. Type the name once and the next scan of that barcode fills it in automatically.",
  },
  {
    q: "I am not getting reminders",
    a: "Android must allow notifications for the app, and on Android 12 and later it must also allow alarms and reminders. Check Settings → Apps → Expiry Tracker → Notifications, and Settings → Apps → Special app access → Alarms and reminders. Battery optimisation on some phones, especially Xiaomi, Oppo, Vivo and Samsung, can also delay alarms; allow the app to run in the background.",
  },
  {
    q: "The reminder arrived at the wrong time",
    a: "Reminders fire at the hour you pick in Settings, on the days before expiry you choose. Changing either setting only affects items you add or edit afterwards, so re-save an older item to move its reminder.",
  },
  {
    q: "Can I use it for medicine, cosmetics or documents?",
    a: "Yes. Nothing in the app is specific to food. Use the location chips for medicine, and the note field for anything else such as a passport or an insurance renewal.",
  },
  {
    q: "I bought the ad removal but ads are still showing",
    a: "Open Settings and tap Restore purchase while online, signed in with the Google account that made the purchase.",
  },
  {
    q: "Where is my data? Can I move it to a new phone?",
    a: "Everything is stored on the device and nothing is uploaded, because the app has no account and no server. Your list is included in an Android or Google device backup if backups are enabled, which restores it on a new phone.",
  },
  {
    q: "The app is in the wrong language",
    a: "Settings (gear icon) → Language. The app follows the phone language by default and offers fifteen languages.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Expiry Date Tracker</title>
      <meta
        name="description"
        content="Help for the Expiry Date Tracker Android app: barcode scanning, reminders that do not arrive, restoring a purchase, languages and where your data lives."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/expiry-date-tracker">Expiry Date Tracker</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your phone model and Android version
        and you will get a reply.
      </Lead>

      <Section>
        <h2>How it works</h2>
        <p>
          Scan a barcode or add an item by hand, set the expiry date with one of the quick chips, and the
          app schedules reminders on your phone. The list groups everything by what expires first. Tap the
          tick to mark something used. Everything runs offline, there is no account, and the only optional
          network call is a barcode lookup to fill in a product name.
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
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Bug reports and feature requests
          are both welcome. See also the{" "}
          <Link href="/apps/expiry-date-tracker/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
