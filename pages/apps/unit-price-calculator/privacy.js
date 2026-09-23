import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/unit-price-calculator/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Unit Price Calculator &amp; Tax</title>
      <meta
        name="description"
        content="Privacy policy for the Unit Price Calculator & Tax iOS app: calculations and lists stay on your device; the free version shows a Google AdMob banner, and a one-time purchase removes it."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/unit-price-calculator">Unit Price Calculator &amp; Tax</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 23, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Unit Price Calculator &amp; Tax</b>{" "}
          (&quot;the App&quot;), developed by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles
          your information. The App compares unit prices, calculates discounts, sales tax, cart totals and
          bill splits, entirely on your device. <b>We do not operate servers, there are no user accounts,
          and we do not collect any data ourselves.</b> The free version displays a small advertising banner
          served by Google AdMob, and that is the only part of the App that talks to the internet.
        </p>
      </Section>

      <Section>
        <h2>1. Data that never leaves your device</h2>
        <p>
          The prices, amounts, cart items, budget, tax rate, currency and language you enter are stored in
          the App&apos;s local preferences on your iPhone so they are there next time. They are never
          transmitted to us or to anyone else.
        </p>
      </Section>

      <Section>
        <h2>2. Advertising (free version only)</h2>
        <p>
          The free version shows a banner from <b>Google AdMob</b>. To serve and measure ads, Google&apos;s
          SDK may collect device identifiers (including the advertising identifier when you allow
          tracking), coarse location derived from your IP address, ad interaction data and diagnostic
          data. On first launch iOS asks whether the App may track you (App Tracking Transparency); if
          you decline, the App requests non-personalized ads only. In the EEA and UK, Google&apos;s consent
          form is shown first, and you can change your choice at any time under Settings → Ad privacy
          options. Google&apos;s handling of this data is governed by{" "}
          <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
            Google&apos;s Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://support.google.com/admob/answer/6128543" rel="noopener noreferrer" target="_blank">
            AdMob&apos;s data disclosure
          </a>
          .
        </p>
        <p>
          After the one-time <b>Remove Ads</b> purchase the AdMob SDK is no longer started and no
          advertising data is collected. The purchase itself is processed by Apple; we receive no personal
          information from it.
        </p>
      </Section>

      <Section>
        <h2>3. Permissions</h2>
        <p>
          The App requests no camera, microphone, location, photo or contact access. The only system
          prompt is the App Tracking Transparency dialog described above, which you can decline without
          losing any feature.
        </p>
      </Section>

      <Section>
        <h2>4. Analytics and crash reporting</h2>
        <p>We use no analytics or crash-reporting SDK of our own.</p>
      </Section>

      <Section>
        <h2>5. Children</h2>
        <p>The App is not directed at children under 13 and we do not knowingly collect information from them.</p>
      </Section>

      <Section>
        <h2>6. Changes</h2>
        <p>
          If a future version changes how the App handles data, this page will be updated and the date at
          the top revised before that version is released.
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
