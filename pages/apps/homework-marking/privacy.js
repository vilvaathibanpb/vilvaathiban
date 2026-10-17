import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../../../components/service";

// The iOS app links to this URL exactly; keep the path stable.
const URL = "https://www.vilvaathiban.com/apps/homework-marking/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — Marutto: Homework Checker</title>
      <meta
        name="description"
        content="Privacy policy for Marutto: Homework Checker on iPhone. Worksheet photos are sent only to be marked and are not stored on our server; history stays on your device. No accounts, no ads, no tracking."
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/homework-marking">Marutto: Homework Checker</Link>
      </Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: October 17, 2026</Lead>

      <Section>
        <p>
          This Privacy Policy describes how the iOS application <b>Marutto: Homework Checker</b> (in Japan
          「答え合わせ・丸つけアプリ - まるっと」, &quot;the App&quot;), developed by Vilva Athiban P B
          (&quot;we&quot;, &quot;us&quot;), handles your information. The short version: to mark a worksheet,
          the App sends its photo to our server, which passes it to Anthropic&apos;s Claude API to read the
          handwriting. <b>Our server does not store the photo or the answers.</b> Your history stays on your
          device. There are no accounts, no names or email addresses collected, no ads, no tracking and no
          analytics SDKs.
        </p>
      </Section>

      <Section>
        <h2>1. Worksheet photos</h2>
        <p>
          When you mark a worksheet, the App uploads the photo over HTTPS to our server (running on
          Cloudflare Workers) for that one purpose. The server sends it to <b>Anthropic&apos;s Claude API</b>{" "}
          to read the questions and answers, checks the result (arithmetic is recomputed by code) and returns
          the marks to the App. The photo and the answers are discarded once the response has been sent; we do
          not keep them.
        </p>
        <p>
          Anthropic processes the photo under its commercial API terms: API data is not used to train its
          models, and it may be retained by Anthropic for a limited period, for example for trust and safety
          review, per{" "}
          <a href="https://privacy.anthropic.com" rel="noopener noreferrer" target="_blank">Anthropic&apos;s API data policy</a>.
          Avoid photographing anything other than the worksheet, such as a name tag or a face.
        </p>
      </Section>

      <Section>
        <h2>2. What our server keeps</h2>
        <p>Only what is needed to run the trial, enforce the fair-use limit and watch costs:</p>
        <ul>
          <li>
            <b>Counters</b>: how many sheets have been marked per App Store account and per subscription per
            month. The account is identified by Apple&apos;s app transaction ID, or, if that is unavailable, by
            a random device ID the App keeps in the iOS Keychain. Neither identifies you by name.
          </li>
          <li>
            <b>Anonymous usage logs</b>: a hashed account ID, the subject (math or kanji), item counts, token
            counts and response time, used for cost and reliability monitoring.
          </li>
        </ul>
        <p>No photo, answer, child&apos;s name or school year is ever part of these records.</p>
      </Section>

      <Section>
        <h2>3. Data that stays on your device</h2>
        <p>
          Your history (worksheet photos, marks, the children&apos;s names and school years you enter) is stored
          only on your device, in the App&apos;s own storage. It is included in your device&apos;s own backups
          (iCloud or computer backups, if you use them) like other app data. We never receive it. You can
          delete it at any time: &quot;Delete all history&quot; in the App&apos;s Settings removes every marked
          sheet, deleting a child removes that child and their sheets, and deleting the App removes
          everything.
        </p>
      </Section>

      <Section>
        <h2>4. Purchases</h2>
        <p>
          The subscription is processed entirely by Apple through the App Store. We receive no name, email
          address or payment details from the transaction, only the information the App needs to confirm the
          subscription is active.
        </p>
      </Section>

      <Section>
        <h2>5. Permissions</h2>
        <p>
          The App asks for the <b>camera</b> to photograph worksheets, and can read a photo you choose from
          your library. It does not track you, does not ask for permission to track you, shows no ads and
          contains no analytics or advertising SDKs.
        </p>
      </Section>

      <Section>
        <h2>6. Children</h2>
        <p>
          The App is meant for parents and guardians. It is not in the App Store&apos;s Kids category and is
          not directed at children. It collects no data from children directly; the worksheets are
          photographed by the parent.
        </p>
      </Section>

      <Section>
        <h2>7. Changes</h2>
        <p>
          If a future version changes how the App handles data, this page will be updated and the date at the
          top revised before that version is released.
        </p>
      </Section>

      <Section>
        <h2>8. Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>.
          See also the <Link href="/apps/homework-marking/support">support page</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
