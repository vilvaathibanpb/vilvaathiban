import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/electrician-calculator/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Electrician Calculator Pro</title>
      <meta
        name="description"
        content="Privacy policy for the Electrician Calculator Pro iOS app. Every calculation runs on your device; the app has no accounts, no servers, no analytics and no ads."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/electrician-calculator">Electrician Calculator Pro</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 23, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Electrician Calculator Pro</b>{" "}
          (&quot;the App&quot;), developed by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles
          your information. The App performs electrical calculations (voltage drop, wire size, conduit
          fill, box fill, load and breaker sizing, Ohm&apos;s law, resistor color codes) and shows
          reference tables, entirely on your device. The short version: <b>we do not collect any
          data.</b> We operate no servers, there are no user accounts, no analytics, no crash reporting
          and no advertising, and we cannot see anything you do in the App.
        </p>
      </Section>

      <Section>
        <h2>1. Data that never leaves your device</h2>
        <p>
          <b>Values you enter</b> (voltages, currents, lengths, conductor counts and similar) are used
          only to compute the result on screen. They are not stored after you leave a screen, except
          for your language preference, which is kept in the App&apos;s local settings on your device.
        </p>
        <p>We do not collect, transmit, or store any of the above.</p>
      </Section>

      <Section>
        <h2>2. Network access</h2>
        <p>
          The App makes no network requests. Every table it uses ships inside the App, so it works
          fully offline, including in airplane mode. The only links that leave the App are the ones you
          tap yourself in Settings (this policy, the support page, and the App Store rating page).
        </p>
      </Section>

      <Section>
        <h2>3. Permissions</h2>
        <p>The App requests no permissions: no camera, microphone, location, photos, contacts or notifications.</p>
      </Section>

      <Section>
        <h2>4. Third parties</h2>
        <p>
          The App contains no third-party SDKs, advertising networks or analytics libraries. Purchases
          are handled by Apple through the App Store under Apple&apos;s own privacy policy; we receive
          no personal information from a purchase.
        </p>
      </Section>

      <Section>
        <h2>5. Children</h2>
        <p>The App does not knowingly collect information from anyone, including children under 13.</p>
      </Section>

      <Section>
        <h2>6. Changes</h2>
        <p>
          If a future version ever changes how the App handles data, this page will be updated and the
          date at the top revised before that version is released.
        </p>
      </Section>

      <Section>
        <h2>7. Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
        </p>
        <p>
          Disclaimer: the App is a calculation aid based on tables from the 2023 edition of NFPA 70. It
          is not a substitute for the code, engineering judgement or the authority having jurisdiction.
          NEC and National Electrical Code are registered trademarks of the National Fire Protection
          Association, which does not sponsor or endorse the App.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
