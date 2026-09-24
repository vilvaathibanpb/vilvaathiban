import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/expiry-date-tracker/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Expiry Date Tracker</title>
      <meta
        name="description"
        content="Privacy policy for the Expiry Date Tracker Android app. Your item list and reminders stay on your device. No account, no sign-up, no server. The free version shows a Google AdMob banner."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/expiry-date-tracker">Expiry Date Tracker</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 24, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the Android application <b>Expiry Date Tracker</b> (&quot;the
          App&quot;), developed by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles your
          information. The App lets you record the items you own with their expiry dates and reminds you
          before they expire. The short version: <b>we do not collect any data ourselves.</b> We operate no
          servers, there is no account and no sign-up, and we cannot see anything you add. The free version
          shows a small advertising banner served by Google AdMob, which is the only third-party component
          that processes data (see section 4); the one-time purchase removes it.
        </p>
      </Section>

      <Section>
        <h2>1. Data that never leaves your device</h2>
        <p>
          <b>Your items</b> (name, brand, barcode, expiry date, quantity, where you keep it and any note)
          are stored in a local database inside the App&apos;s own storage on your phone. <b>Settings</b>
          (reminder timing, language, purchase state) are kept in the App&apos;s local files. All of it is
          included in your Android or Google device backup if you have backups enabled, and that backup is
          governed by Google&apos;s privacy policy. We do not collect, transmit or store any of it.
        </p>
      </Section>

      <Section>
        <h2>2. Barcode lookups (optional)</h2>
        <p>
          When you scan a barcode, the App first checks the items you already added. If the code is new, it
          asks <a href="https://world.openfoodfacts.org/" rel="noopener noreferrer" target="_blank">Open Food Facts</a>,
          a free public product database, for the product name so you do not have to type it. Only the
          barcode number is sent. Nothing about you, your list, your other items or your device is included,
          and the lookup is skipped entirely when you are offline or when you type the name yourself.
        </p>
      </Section>

      <Section>
        <h2>3. Permissions the App requests</h2>
        <p>
          <b>Camera</b> — only to read a barcode, and only while the scanner screen is open. No photo or
          video is recorded, kept or transmitted. <b>Notifications</b> — to show your expiry reminders.
          <b> Alarms and reminders</b> — so a reminder arrives at the time you chose. Every permission can
          be declined, and the App stays usable without the camera by typing item names by hand.
        </p>
      </Section>

      <Section>
        <h2>4. Third parties</h2>
        <p>
          <b>Google AdMob</b> serves the banner ads in the free version. To do so Google may collect device
          identifiers (including the advertising ID), coarse location derived from your IP address, ad
          interaction data and performance and crash diagnostics, and may use them for advertising,
          analytics and fraud prevention as described in the{" "}
          <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">How Google uses information from sites or apps that use our services</a>.
          In the European Economic Area, the United Kingdom and Switzerland a consent form is shown before
          any ad loads, and &quot;Ad privacy options&quot; in Settings lets you change your choice at any
          time. Buying the ad removal removes the banner and stops all AdMob requests. Purchases are handled
          by Google Play; we receive no personal information from the transaction. We use no analytics
          library of our own.
        </p>
      </Section>

      <Section>
        <h2>5. Children</h2>
        <p>The App is not directed at children under 13 and does not knowingly collect information from anyone.</p>
      </Section>

      <Section>
        <h2>6. Changes</h2>
        <p>
          If a future version ever changes how the App handles data, this page will be updated and the date
          at the top revised before that version is released.
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
