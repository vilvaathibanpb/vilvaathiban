import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/warranty-tracker/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Warranty Tracker &amp; Receipt Log</title>
      <meta
        name="description"
        content="Privacy policy for the Warranty Tracker & Receipt Log iOS app. Items, photos and reminders stay on your device; the app has no accounts, no servers, no analytics and no ads."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/warranty-tracker">Warranty Tracker &amp; Receipt Log</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: September 23, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Warranty Tracker &amp; Receipt Log</b>{" "}
          (&quot;the App&quot;), developed by Vilva Athiban P B (&quot;we&quot;, &quot;us&quot;), handles
          your information. The App lets you record purchases, their receipts and warranty periods and
          reminds you before a warranty expires, entirely on your device. The short version: <b>we do not
          collect any data.</b> We operate no servers, there are no user accounts, no analytics, no crash
          reporting and no advertising, and we cannot see anything you store in the App.
        </p>
      </Section>

      <Section>
        <h2>1. Data that never leaves your device</h2>
        <p>
          <b>Items you add</b> (product name, store, price, purchase date, warranty length, serial number,
          category, notes) are stored in a local database inside the App&apos;s sandbox on your iPhone.
        </p>
        <p>
          <b>Photos</b> you take or pick (receipts, products, serial-number labels) are copied into the
          App&apos;s private storage. The App never reads your photo library beyond the pictures you
          choose in Apple&apos;s picker, and it never writes to your library.
        </p>
        <p>
          <b>Settings</b> (reminder lead times, reminder hour, language) are kept in the App&apos;s local
          preferences.
        </p>
        <p>
          All of this is included in your iPhone or iCloud device backup if you have backups enabled;
          that backup is governed by Apple&apos;s privacy policy, not by us. We do not collect, transmit
          or store any of the above.
        </p>
      </Section>

      <Section>
        <h2>2. Network access</h2>
        <p>
          The App makes no network requests and works fully offline. The only links that leave the App
          are the ones you tap yourself in Settings (this policy, the support page and the App Store
          rating page).
        </p>
      </Section>

      <Section>
        <h2>3. Permissions</h2>
        <p>
          <b>Camera</b>: requested only when you tap &quot;Take photo of receipt&quot;, so the picture can
          be attached to an item. <b>Notifications</b>: requested only when you turn on expiry reminders;
          reminders are local notifications scheduled on the device. Picking from the photo library uses
          Apple&apos;s system picker and needs no library permission. The App uses no location, contacts,
          microphone or tracking.
        </p>
      </Section>

      <Section>
        <h2>4. Export</h2>
        <p>
          &quot;Export all items as CSV&quot; creates a file on your device and hands it to the iOS share
          sheet. Where it goes from there (Files, Mail, AirDrop) is your choice; we never receive it.
        </p>
      </Section>

      <Section>
        <h2>5. Third parties</h2>
        <p>
          The App contains no third-party SDKs, advertising networks or analytics libraries. Purchases are
          handled by Apple through the App Store under Apple&apos;s own privacy policy; we receive no
          personal information from a purchase.
        </p>
      </Section>

      <Section>
        <h2>6. Deleting your data</h2>
        <p>
          Delete an item to remove it and its photos immediately. Deleting the App removes everything it
          stored.
        </p>
      </Section>

      <Section>
        <h2>7. Children</h2>
        <p>The App does not knowingly collect information from anyone, including children under 13.</p>
      </Section>

      <Section>
        <h2>8. Changes</h2>
        <p>
          If a future version ever changes how the App handles data, this page will be updated and the
          date at the top revised before that version is released.
        </p>
      </Section>

      <Section>
        <h2>9. Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
