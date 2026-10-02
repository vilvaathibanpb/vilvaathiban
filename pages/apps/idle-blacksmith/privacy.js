import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/idle-blacksmith/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Idle Blacksmith</title>
      <meta
        name="description"
        content="Privacy policy for the Idle Blacksmith Android game. Your progress stays on your device. No account, no sign-up, no server. The free version shows ads served by Google AdMob."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Idle Blacksmith</Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: October 2, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the Android game <b>Idle Blacksmith</b> (&quot;the App&quot;), developed by
          Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles your information. The App is an idle forging game: tap the anvil to forge weapons, hire apprentices who keep forging while you are away, and pass the forge on for permanent bonuses. The short version:{" "}
          <b>we do not collect any data ourselves.</b> We operate no servers, there is no account and no sign-up,
          and we cannot see how you play. The free version shows ads served by Google AdMob, which is the only
          third-party component that processes data (see section 3); the one-time purchase removes them.
        </p>
      </Section>

      <Section>
        <h2>1. Data that never leaves your device</h2>
        <p>
          The App stores your forge progress (gold, weapons, apprentices, upgrades, Legacy Embers, statistics, the time you last played so offline earnings can be calculated) and settings (sound, music, vibration, purchase state) in its own private storage on your phone. It may be included in your
          Android or Google device backup if you have backups enabled, and that backup is governed by
          Google&apos;s privacy policy. We do not collect, transmit or store any of it.
        </p>
      </Section>

      <Section>
        <h2>2. Permissions</h2>
        <p>
          The App asks for no runtime permissions. It declares internet access, which is used only to load ads
          and to talk to Google Play for purchases; the game itself works fully offline.
        </p>
      </Section>

      <Section>
        <h2>3. Third parties</h2>
        <p>
          <b>Google AdMob</b> serves the ads in the free version: optional rewarded videos you choose to watch for
          income boosts, extra offline earnings and bonus chests, and occasional full-screen ads at natural breaks. To do so Google may collect device
          identifiers (including the advertising ID), coarse location derived from your IP address, ad
          interaction data and performance and crash diagnostics, and may use them for advertising, analytics
          and fraud prevention as described in the{" "}
          <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">How Google uses information from sites or apps that use our services</a>.
          In the European Economic Area, the United Kingdom and Switzerland a consent form is shown before any ad
          loads, and &quot;Ad privacy options&quot; in the App&apos;s Settings lets you change your choice at any time.
          The one-time purchase <b>Royal Charter</b> removes all ads, doubles your income permanently, lets you claim boosts and chests without ads and extends offline earnings to 8 hours. Purchases are handled by Google Play; we receive
          no personal information from the transaction. We use no analytics library of our own.
        </p>
      </Section>

      <Section>
        <h2>4. Children</h2>
        <p>The App is not directed at children under 13 and does not knowingly collect information from anyone.</p>
      </Section>

      <Section>
        <h2>5. Your rights (GDPR)</h2>
        <p>
          Because we do not collect or store your personal data, there is nothing for us to access, correct or
          delete. Uninstalling the App removes everything it stored. For data processed by Google AdMob, see
          Google&apos;s privacy policy above and your ad privacy choices in the App&apos;s Settings.
        </p>
      </Section>

      <Section>
        <h2>6. Changes</h2>
        <p>
          If a future version ever changes how the App handles data, this page will be updated and the date at
          the top revised before that version is released.
        </p>
      </Section>

      <Section>
        <h2>7. Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>. See
          also the <Link href="/apps/idle-blacksmith/support">support page</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
