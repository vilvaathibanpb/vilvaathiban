import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/chat-link-qr-code-maker/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Chat Link & QR Code Maker</title>
      <meta
        name="description"
        content="Privacy policy for the Chat Link & QR Code Maker iOS app. Everything is processed on your device; the app has no accounts, no servers, no analytics and no ads."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps">Chat Link & QR Code Maker</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 10, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Chat Link & QR Code Maker</b>
          (&quot;the App&quot;), developed by Vilva Athiban P B (&quot;we&quot;,
          &quot;us&quot;), handles your information. The App turns a phone number into a click-to-chat link and a QR code, and pads photos onto a square so they fit a round profile picture without cropping.
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
          <b>Phone numbers and messages you type</b> — used only to build the link and the QR code on your device. They are not stored by the App and never sent anywhere.
          <br />
          <b>Photos you pick</b> — opened through the iOS photo picker, resized on your device, and saved back to your Photos library only when you tap Save. The App cannot browse your library.
          <br />
          <b>QR codes you save</b> — written to your Photos library with the &quot;Add Photos Only&quot; permission.
        </p>
        <p>We do not collect, transmit, or store any of the above.</p>
      </Section>

      <Section>
        <h2>2. Network access</h2>
        <p>The App makes no network requests of its own. When you tap &quot;Open chat&quot;, iOS hands the link to the messaging app installed on your device; from that point on, that app&apos;s privacy policy applies.</p>
      </Section>

      <Section>
        <h2>3. Permissions the App requests</h2>
        <p><b>Photos (add only)</b> — to save QR codes and resized pictures to your library. <b>Photo picker</b> — the system picker shows you your photos; the App only receives the single photo you choose. Every permission can be declined or revoked in iOS Settings.</p>
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
          Chat Link & QR Code Maker is an independent utility. It is not affiliated with,
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
          <Link href="/apps/chat-link-qr-code-maker/support">support page</Link> or email{" "}
          <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
