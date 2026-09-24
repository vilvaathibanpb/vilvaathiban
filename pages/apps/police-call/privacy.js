import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/police-call/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Good Behavior Police Call</title>
      <meta
        name="description"
        content="Privacy policy for Good Behavior Police Call on iPhone. Calls play from the phone itself: no account, no analytics, no recording; the free version shows Google AdMob banners."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/police-call/support">Good Behavior Police Call</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 25, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Good Behavior Police Call</b> (&quot;the
          App&quot;), developed by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles your
          information. The short version: <b>we do not collect any data ourselves.</b> There is no account, no sign-up,
          no analytics and no server of ours that the App talks to. The free version shows a banner ad served
          by Google AdMob (see section 3); the one-time unlock removes it.
        </p>
      </Section>

      <Section>
        <h2>1. Data that stays on your device</h2>
        <p>
          Every call, voice and picture ships inside the App, so calls work offline. The App keeps only your
          settings (which officer, video or voice, ring delay) and your purchase state in its own storage on
          your device. We never receive any of it.
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
        <h2>3. Advertising</h2>
        <p>
          The free version shows a small banner ad from <b>Google AdMob</b> on menu screens only, never during
          a call, game, photo or check. To serve it, Google may collect device identifiers other than the
          advertising ID, coarse location derived from your IP address, ad interaction data and performance
          and crash diagnostics, and may use them for advertising, analytics and fraud prevention as described
          in the{" "}
          <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">How Google uses information from sites or apps that use our services</a>.
          The App requests <b>non-personalised ads only</b>, never asks for permission to track you, and does
          not access the advertising identifier. In the European Economic Area, the United Kingdom and
          Switzerland a consent form is shown before any ad loads, and &quot;Privacy options&quot; in Settings
          lets you change your choice at any time. The one-time unlock removes the banner and stops all ad
          requests. We receive no personal data from Google.
        </p>
      </Section>

      <Section>
        <h2>4. Permissions</h2>
        <p>
          The App can ask for the <b>camera</b> to show the small &quot;self view&quot; window during a video
          call, like a real video call. The picture is shown live on screen only: it is never recorded, saved
          or sent anywhere. You can decline and calls work the same without it. The App makes no real phone
          calls and cannot contact anyone.
        </p>
      </Section>

      <Section>
        <h2>5. Children</h2>
        <p>
          The App is meant to be set up and started by a parent. It is not directed at children. We collect no information from anyone, and ads
          are limited to general-audience (G-rated) content on screens meant for adults.
        </p>
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
