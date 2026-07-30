import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/teleprompter-camera-overlay/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Teleprompter: Camera Overlay</title>
      <meta
        name="description"
        content="Privacy policy for the Teleprompter: Camera Overlay iOS app. Your scripts, voice and videos never leave your iPhone. The only third party is Google AdMob for optional ads."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/teleprompter-camera-overlay">Teleprompter: Camera Overlay</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: July 31, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application
          <b> Teleprompter: Camera Overlay</b> (&quot;the App&quot;), developed by
          Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles your
          information. The short version: <b>your content stays on your
          iPhone.</b> We do not operate servers, we do not have user accounts,
          and we cannot see your scripts, your voice, or your videos.
        </p>
      </Section>

      <Section>
        <h2>1. Data that never leaves your device</h2>
        <p>
          The App is designed to work fully offline. The following data is
          processed and stored <b>only on your device</b>:
        </p>
        <p>
          <b>Scripts</b> — the texts you write are stored locally in the
          App&apos;s storage.
          <br />
          <b>Voice &amp; speech recognition</b> — the &quot;scrolls as you
          speak&quot; feature uses Apple&apos;s on-device speech recognition
          (with on-device processing explicitly required). Your audio is never
          sent to us or to Apple&apos;s servers by the App.
          <br />
          <b>Videos</b> — recordings are saved on your device and, when you
          choose, to your Photos library. We have no access to them.
        </p>
        <p>
          We do not collect, transmit, or store any of the above. We also do
          not use analytics services — we have no visibility into how you use
          the App.
        </p>
      </Section>

      <Section>
        <h2>2. Advertising (Google AdMob)</h2>
        <p>
          The free version of the App shows an occasional advertisement served
          by <b>Google AdMob</b>, the only third-party service in the App. When
          an ad is loaded (this requires an internet connection), Google may
          process device information such as your IP address, device
          identifiers (including, with your consent, the advertising
          identifier), coarse location derived from your IP, and ad
          interaction data. This processing is described in
          {" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google&apos;s Privacy Policy
          </a>
          {" "}and{" "}
          <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noreferrer">
            AdMob&apos;s data usage documentation
          </a>.
        </p>
        <p>
          <b>Your choices:</b> On first use, iOS asks for App Tracking
          Transparency permission — if you decline, the advertising identifier
          is not shared and ads are non-personalized. In the European Economic
          Area and the UK, a consent dialog lets you choose whether ads may be
          personalized; you can decline and still use the App fully. When you
          are offline, no ads are shown at all. Purchasing the one-time
          &quot;Remove Ads&quot; unlock removes advertising — and with it all
          AdMob data processing — permanently.
        </p>
      </Section>

      <Section>
        <h2>3. In-app purchases</h2>
        <p>
          The optional &quot;Remove Ads&quot; purchase is processed entirely by
          Apple through the App Store. We do not receive your name, payment
          details, or any personal information from the transaction — only an
          anonymous receipt that unlocks the purchase on your device.
        </p>
      </Section>

      <Section>
        <h2>4. Permissions the App requests</h2>
        <p>
          <b>Camera</b> — to record your videos. <b>Microphone</b> — to record
          audio and enable voice-driven scrolling. <b>Speech recognition</b> —
          to match your spoken words to your script, on-device only.
          <b> Photos (add only)</b> — to save finished recordings to your
          library; the App cannot read your existing photos.
          <b> Tracking (optional)</b> — only used for personalized ads if you
          allow it. Every permission can be declined or revoked in iOS
          Settings; the App remains usable.
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
          your control on your device. For data processed by Google in
          connection with advertising, you can exercise your rights through
          the in-app consent settings, iOS tracking settings, and
          {" "}
          <a href="https://myadcenter.google.com" target="_blank" rel="noreferrer">
            Google&apos;s My Ad Center
          </a>.
        </p>
      </Section>

      <Section>
        <h2>7. Changes &amp; contact</h2>
        <p>
          We may update this policy as the App evolves; the current version is
          always available at this address. Questions? Contact us via the
          {" "}
          <Link href="/apps/teleprompter-camera-overlay/support">support page</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
