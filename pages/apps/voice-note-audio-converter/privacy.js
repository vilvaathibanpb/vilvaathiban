import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/voice-note-audio-converter/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Voice Note Audio Converter</title>
      <meta
        name="description"
        content="Privacy policy for the Voice Note Audio Converter iOS app. Everything is processed on your device; the app has no accounts, no servers, no analytics and no ads."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps">Voice Note Audio Converter</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 10, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Voice Note Audio Converter</b>
          (&quot;the App&quot;), developed by Vilva Athiban P B (&quot;we&quot;,
          &quot;us&quot;), handles your information. The App converts voice notes and other audio files (.opus, .ogg, .m4a, .aac, .mp3, .wav and more) to MP3 or WAV, in batches, entirely on your device.
          The short version: <b>we do not collect any data.</b> We operate no
          servers, there are no user accounts, no analytics, no crash
          reporting and no advertising, and we cannot see anything you do in
          the App.
        </p>
      </Section>

      <Section>
        <h2>1. Data that never leaves your device</h2>
        <p>The following is processed and stored <b>only on your device</b>:</p>
        <p>
          <b>Audio files you pick or share to the App</b> — decoded and re-encoded on your device. The converted copy is kept in the App&apos;s temporary cache until iOS clears it or you convert again; the original is never modified.
          <br />
          <b>Converted files</b> — leave the App only when you tap Share and choose a destination yourself.
        </p>
        <p>We do not collect, transmit, or store any of the above.</p>
      </Section>

      <Section>
        <h2>2. Network access</h2>
        <p>The App makes no network requests. It works fully offline, including in airplane mode.</p>
      </Section>

      <Section>
        <h2>3. Permissions the App requests</h2>
        <p>None. Files reach the App only through the iOS document picker or the share sheet ("Copy to Audio Converter"), which means you choose every single file explicitly. Every permission can be declined or revoked in iOS Settings.</p>
      </Section>

      <Section>
        <h2>4. Third parties</h2>
        <p>
          The App contains no third-party SDKs that collect data: no ads, no
          analytics, no tracking. Purchasing the App is handled entirely by
          Apple through the App Store; we receive no personal information from
          the transaction.
        </p>
      </Section>

      <Section>
        <h2>5. Children</h2>
        <p>
          The App is not directed at children under 13, and we do not knowingly
          collect personal information from anyone, including children.
        </p>
      </Section>

      <Section>
        <h2>6. Your rights (GDPR)</h2>
        <p>
          Because we do not collect or store your personal data, there is
          nothing for us to access, correct, or delete — your data is under
          your control on your device. Deleting the App removes everything it
          created.
        </p>
      </Section>

      <Section>
        <h2>7. Trademarks</h2>
        <p>
          Voice Note Audio Converter is an independent utility. It is not affiliated with,
          endorsed by, sponsored by, or in any way officially connected with
          WhatsApp LLC or Meta Platforms, Inc. WhatsApp is a registered
          trademark of Meta Platforms, Inc.
        </p>
      </Section>

      <Section>
        <h2>8. Changes &amp; contact</h2>
        <p>
          We may update this policy as the App evolves; the current version is
          always available at this address. Questions? Contact us via the{" "}
          <Link href="/apps/voice-note-audio-converter/support">support page</Link> or email{" "}
          <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
