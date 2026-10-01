import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/night-cam/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Night Cam: Aurora Forecast</title>
      <meta
        name="description"
        content="Privacy policy for Night Cam: Aurora Forecast on iPhone. No account, no analytics, no ads and no tracking. Photos go only to your Photos library; the forecast sends only rounded coordinates to Open-Meteo."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/night-cam/support">Night Cam: Aurora Forecast</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Effective date: October 2, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Night Cam: Aurora Forecast</b> (&quot;the
          App&quot;), developed by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles your
          information. The short version: <b>we do not collect any data.</b> There is no account, no analytics,
          no ads, no tracking and no third-party SDKs, and the App does not talk to any server of ours.
        </p>
      </Section>

      <Section>
        <h2>1. Camera and Photos</h2>
        <p>
          The App uses the <b>camera</b> only to take the photos and videos you ask for. They are processed on
          your device and saved only to your <b>Photos library</b>. The App asks for add-only access, so it can
          save new pictures but cannot read your existing library. Nothing you capture is uploaded.
        </p>
      </Section>

      <Section>
        <h2>2. Location and the Tonight forecast</h2>
        <p>
          Location access is optional and only requested while you use the App. It is used on your device to
          build the forecast for where you are. To get cloud cover, the App sends your coordinates{" "}
          <b>rounded to one decimal place (about 11 km)</b> to{" "}
          <a href="https://open-meteo.com/en/terms" rel="noopener noreferrer" target="_blank">Open-Meteo</a>{" "}
          (api.open-meteo.com). To show the name of your town, the App uses Apple&apos;s geocoder, which is
          covered by Apple&apos;s privacy policy. Aurora data is downloaded from NOAA&apos;s Space Weather
          Prediction Center; that request does not include your location.
        </p>
        <p>
          Your last location and the latest forecast are cached on your device so the Tonight tab opens
          quickly. They are never sent to us. If you decline location access, you can still use the camera.
        </p>
      </Section>

      <Section>
        <h2>3. Notifications</h2>
        <p>
          Aurora alerts are optional. They are local notifications scheduled by the App on your device; there
          is no push server and no device token is sent anywhere.
        </p>
      </Section>

      <Section>
        <h2>4. Purchases</h2>
        <p>
          Pro and Night Pass are processed entirely by Apple through the App Store. We receive no name, email
          address or payment details. A counter of your free captures is stored in your device&apos;s Keychain
          and stays on the device.
        </p>
      </Section>

      <Section>
        <h2>5. Children</h2>
        <p>
          The App collects no information from anyone, including children.
        </p>
      </Section>

      <Section>
        <h2>6. Changes</h2>
        <p>
          If a future version changes how the App handles data, this page will be updated and the date at the
          top revised before that version is released.
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
