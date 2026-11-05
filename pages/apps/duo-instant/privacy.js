import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

// The iOS app links to this URL exactly; keep the path stable.
const URL = "https://www.vilvaathiban.com/apps/duo-instant/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Duo Instant</title>
      <meta
        name="description"
        content="Privacy policy for Duo Instant on iPhone. No data collected: no servers, no network requests, no analytics, no ads and no tracking. Photos and prints stay on your device."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/duo-instant/support">Duo Instant</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: November 5, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Duo Instant</b> (&quot;the App&quot;), developed
          by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles your information. The short version:{" "}
          <b>we do not collect any data.</b> The App has no servers and makes no network requests at all. There is
          no account, no analytics, no crash reporting, no ads, no tracking and no third-party SDKs.
        </p>
      </Section>

      <Section>
        <h2>1. Camera</h2>
        <p>
          The App uses the <b>camera</b> only to take the photos you ask for. They are processed on your device and
          never uploaded.
        </p>
      </Section>

      <Section>
        <h2>2. Your photos and prints</h2>
        <p>
          The photos you take and the prints the App makes, including your captions, are stored only in the
          App&apos;s private storage on your device. They may be included in your device backups (iCloud or
          computer), which are governed by Apple and your own settings. Deleting a print in the App removes it;
          deleting the App removes everything it stored.
        </p>
      </Section>

      <Section>
        <h2>3. Photos library</h2>
        <p>
          The App asks for <b>add-only</b> access to your Photos library, and only when you tap Save, so it can save
          the finished print. Add-only access cannot read your existing library. When you choose a photo to print,
          the App uses Apple&apos;s system photo picker, which needs no library permission: the App receives only
          the photo you pick.
        </p>
      </Section>

      <Section>
        <h2>4. Other permissions</h2>
        <p>
          The App does not use the microphone, your location or your contacts. Purchasing the App is handled
          entirely by Apple through the App Store; we receive no name, email address or payment details.
        </p>
      </Section>

      <Section>
        <h2>5. Children</h2>
        <p>The App collects no information from anyone, including children.</p>
      </Section>

      <Section>
        <h2>6. Changes</h2>
        <p>
          If a future version changes how the App handles data, this page will be updated and the date at the top
          revised before that version is released.
        </p>
      </Section>

      <Section>
        <h2>7. Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
