import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://vilvaathiban.com/apps/chat-export-studio/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Chat Export Studio</title>
      <meta
        name="description"
        content="Privacy policy for the Chat Export Studio iOS app. Everything is processed on your device; the app has no accounts, no servers, no analytics and no ads."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps">Chat Export Studio</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 10, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Chat Export Studio</b>
          (&quot;the App&quot;), developed by Vilva Athiban P B (&quot;we&quot;,
          &quot;us&quot;), handles your information. The App reads exported chat files (.txt or .zip), shows statistics about the conversation, and produces a styled, paginated PDF — all on your device.
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
          <b>Chat exports you open</b> — parsed in memory on your device. The App does not keep a copy after you close the chat; the original file stays wherever you saved it.
          <br />
          <b>PDFs you create</b> — rendered on your device and handed to the iOS share sheet. They are written to the App&apos;s temporary cache until you share or discard them.
          <br />
          <b>The bundled sample chat</b> — fictional, included only so you can try the App.
        </p>
        <p>We do not collect, transmit, or store any of the above.</p>
      </Section>

      <Section>
        <h2>2. Network access</h2>
        <p>The App makes no network requests. It works fully offline, including in airplane mode — which is what makes it suitable for confidential, legal and HR use.</p>
      </Section>

      <Section>
        <h2>3. Permissions the App requests</h2>
        <p>None. Files reach the App only through the iOS document picker or the share sheet ("Copy to Chat Export"). Every permission can be declined or revoked in iOS Settings.</p>
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
          Chat Export Studio is an independent utility. It is not affiliated with,
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
          <Link href="/apps/chat-export-studio/support">support page</Link> or email{" "}
          <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
