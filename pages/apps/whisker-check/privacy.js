import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/whisker-check/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Whisker Check: Cat Comfort</title>
      <meta
        name="description"
        content="Privacy policy for Whisker Check on iPhone. Your cats, checks, notes and photos stay on your device. No account, no ads, no analytics."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/whisker-check/support">Whisker Check: Cat Comfort</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 24, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Whisker Check: Cat Comfort</b> (&quot;the
          App&quot;), developed by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles your
          information. The short version: <b>we do not collect any data.</b> There is no account, no
          sign-up, no advertising, no analytics and no server of ours that the App talks to.
        </p>
      </Section>

      <Section>
        <h2>1. Data that stays on your device</h2>
        <p>
          The App keeps your cats&apos; names, every comfort check and mood read, your notes, optional photos
          and reminder times in its own storage on your device. Vet reports are PDF files created on the
          device and only leave it when you share them yourself. Everything is included in your iCloud or
          device backup if you have backups enabled, which is governed by Apple&apos;s privacy policy. We never
          receive any of it.
        </p>
      </Section>

      <Section>
        <h2>2. Purchases</h2>
        <p>
          The optional one-time unlock is processed entirely by Apple through the App Store. We receive no
          name, email address or payment details from the transaction.
        </p>
      </Section>

      <Section>
        <h2>3. Permissions</h2>
        <p>
          The App asks for the <b>camera</b> and <b>photo library</b> only if you choose to attach a photo to a
          check, and for <b>notifications</b> only if you turn on reminders. Reminders are scheduled on the
          device; no server is involved. Every permission can be declined.
        </p>
      </Section>

      <Section>
        <h2>4. Children</h2>
        <p>
          The App is meant to be used by adults. It collects no information from anyone,
          including children.
        </p>
      </Section>

      <Section>
        <h2>5. Changes</h2>
        <p>
          If a future version ever changes how the App handles data, this page will be updated and the date
          at the top revised before that version is released.
        </p>
      </Section>

      <Section>
        <h2>6. Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
