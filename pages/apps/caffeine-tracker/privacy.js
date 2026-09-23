import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/caffeine-tracker/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Caffeine Tracker: Curfew</title>
      <meta
        name="description"
        content="Privacy policy for the Caffeine Tracker: Curfew iOS app. Your caffeine log stays on your device; Apple Health is written to only if you enable it. No accounts, no servers, no analytics, no ads."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/caffeine-tracker">Caffeine Tracker: Curfew</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 24, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Caffeine Tracker: Curfew</b> (&quot;the
          App&quot;), developed by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles your
          information. The App lets you log caffeinated drinks and estimates how much caffeine is still in
          your body, entirely on your device. The short version: <b>we do not collect any data ourselves.</b> We
          operate no servers and there are no user accounts, and we cannot see anything you log. The free
          version shows a small advertising banner served by Google AdMob, the only third-party component
          that processes data (see section 4); the one-time Pro purchase removes it.
        </p>
      </Section>

      <Section>
        <h2>1. Data that never leaves your device</h2>
        <p>
          <b>Your log</b> (drink, amount in milligrams, time) is stored in a local database inside the
          App&apos;s sandbox on your iPhone. <b>Settings</b> (bedtime, target, half-life, daily limit,
          language) are kept in the App&apos;s local preferences. All of this is included in your iPhone or
          iCloud device backup if you have backups enabled; that backup is governed by Apple&apos;s privacy
          policy. We do not collect, transmit or store any of it.
        </p>
      </Section>

      <Section>
        <h2>2. Apple Health</h2>
        <p>
          If you buy Pro and turn on <b>Save drinks to Apple Health</b>, the App asks for permission to{" "}
          <b>write</b> the &quot;Dietary Caffeine&quot; data type and then saves each drink you log as a
          sample; deleting a drink deletes the sample. The App never requests permission to <b>read</b>{" "}
          any Health data. Health data is never used for advertising or marketing and is never shared with
          third parties; it stays in Apple&apos;s Health store under Apple&apos;s privacy rules. You can
          revoke access at any time in iOS Settings → Health → Data Access &amp; Devices.
        </p>
      </Section>

      <Section>
        <h2>3. Network access</h2>
        <p>
          The App makes no network requests of its own. The only links that leave the App are the ones you
          tap yourself in Settings (this policy, the support page and the App Store rating page). While ads
          are enabled, the Google AdMob SDK requests and reports banner ads; your caffeine log is never part
          of that traffic. The Pro purchase is processed by Apple through the App Store; we receive no
          personal information from it.
        </p>
      </Section>

      <Section>
        <h2>4. Third parties</h2>
        <p>
          <b>Google AdMob</b> serves the banner ads in the free version. To do so Google may collect device
          identifiers (including the advertising identifier if you allow tracking in the App Tracking
          Transparency prompt), coarse location derived from your IP address, ad interaction data and
          performance and crash diagnostics, and may use them for advertising, analytics and fraud prevention
          as described in the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/technologies/partner-sites">How Google uses information from sites or apps that use our services</a>.
          In the European Economic Area, the United Kingdom and Switzerland a consent form is shown before
          any ad loads, and &quot;Ad privacy options&quot; in Settings lets you change your choice at any
          time. Buying Pro removes the banner and stops all AdMob requests. Health data (section 2) is never
          shared with Google or anyone else. We use no analytics library of our own.
        </p>
      </Section>

      <Section>
        <h2>5. Not medical advice</h2>
        <p>
          Estimates use a simple half-life model and average caffeine contents. The App is not a medical
          device and does not provide medical advice.
        </p>
      </Section>

      <Section>
        <h2>6. Children</h2>
        <p>The App does not knowingly collect information from anyone, including children under 13.</p>
      </Section>

      <Section>
        <h2>7. Changes</h2>
        <p>
          If a future version ever changes how the App handles data, this page will be updated and the date
          at the top revised before that version is released.
        </p>
      </Section>

      <Section>
        <h2>8. Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
