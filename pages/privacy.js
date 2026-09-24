import Head from "next/head";
import Link from "next/link";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CookieSettingsLink } from "../components/CookieConsent";
import { Wrap, Eyebrow, Title, Lead, Section } from "../components/service";

const URL = "https://www.vilvaathiban.com/privacy";

const PrivacyPage = () => (
  <Container>
    <Head>
      <title>Privacy Policy — vilvaathiban.com</title>
      <meta
        name="description"
        content="Privacy policy for vilvaathiban.com: what this static personal site collects, the consent-gated Google Analytics setup, and your rights under the GDPR."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>vilvaathiban.com</Eyebrow>
      <Title>Privacy Policy</Title>
      <Lead>Last updated: 21 September 2026</Lead>

      <Section>
        <h2>1. Who we are</h2>
        <p>
          This site, <b>vilvaathiban.com</b>, is the personal site and blog of{" "}
          <b>Vilva Athiban Periyasamy Boominathan</b>, an individual based in
          Germany. He is the data controller for the processing described on
          this page.
        </p>
        <p>
          Contact:{" "}
          <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>. The
          full legal notice is on the <Link href="/impressum">Impressum</Link>{" "}
          page.
        </p>
      </Section>

      <Section>
        <h2>2. What we collect</h2>
        <p>
          This is a static site: the pages are pre-built files served to your
          browser. There are no accounts, no logins, no comment form, no
          newsletter sign-up handled here, and no database.
        </p>
        <p>
          Beyond the access logs kept by our hosting provider (section 3) and —
          only if you agree to it — Google Analytics (section 4), we collect
          nothing about you. We do not sell data and we do not use it for
          advertising.
        </p>
      </Section>

      <Section>
        <h2>3. Server logs</h2>
        <p>
          Our hosting provider records standard access logs when your browser
          requests a page. These typically include your IP address, the time of
          the request, the page requested, the referring page, and your browser
          and operating system version.
        </p>
        <p>
          This happens for every website on the internet and is necessary to
          deliver the page, keep the site available, and investigate abuse or
          errors. The legal basis is our legitimate interest in a secure and
          functioning website, Article 6(1)(f) GDPR. We do not combine these logs
          with anything else and we do not use them to identify visitors.
        </p>
      </Section>

      <Section>
        <h2>4. Cookies and analytics</h2>
        <p>
          We use Google Analytics 4 to understand which pages people find useful
          — how visitors arrive, which articles they read, and how far down they
          get. We use it to improve what we write, not to profile individuals,
          and we do not use it for advertising.
        </p>
        <p>
          <b>Nothing loads until you agree.</b> When you first visit, a banner
          asks whether you accept analytics cookies. Until you choose
          &quot;Accept&quot;, no analytics script is downloaded, no cookie is
          set, and no data about your visit is sent to Google. If you choose
          &quot;Reject&quot;, or simply ignore the banner, that remains true for
          your entire visit. The site works identically either way.
        </p>
        <p>
          <b>If you accept</b>, Google Analytics sets cookies (named{" "}
          <code>_ga</code> and <code>_ga_&lt;id&gt;</code>) that hold a randomly
          generated identifier. That identifier lets us recognise a returning
          browser so a person who reads three pages is counted once rather than
          three times. We enable IP anonymisation, so your IP address is
          truncated before it is stored. These cookies expire after up to two
          years, and analytics data is retained for 14 months.
        </p>
        <p>
          <b>What we measure</b>, if you accept: the pages you view, roughly how
          far you scroll, which sections of an article hold your attention, how
          long you stay, and whether you click a link that leads off the site.
          This is aggregated in Google&apos;s reporting; we do not attempt to
          identify individual readers.
        </p>
        <p>
          <b>Who receives it:</b> Google Ireland Limited, and its parent Google
          LLC in the United States, act as our analytics provider. Data may be
          transferred outside the EU; Google relies on the European
          Commission&apos;s Standard Contractual Clauses and the EU–US Data
          Privacy Framework for those transfers. Google&apos;s own description is
          at{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
        <p>
          <b>Legal basis:</b> your consent, under Article 6(1)(a) GDPR and § 25(1)
          TTDSG. You can withdraw it at any time using the{" "}
          <CookieSettingsLink /> link in the footer — or{" "}
          <CookieSettingsLink style={{ fontWeight: 600 }} /> right here.
          Withdrawing deletes the analytics cookies from your browser and stops
          any further collection. Withdrawal does not affect the lawfulness of
          what was collected beforehand.
        </p>
        <p>
          <b>Strictly necessary cookies:</b> any cookie required to make the site
          work (for example, keeping you signed in, or remembering this very
          cookie choice) is stored on your own device, is not shared with anyone,
          and does not require consent. Your cookie choice itself is kept in your
          browser&apos;s local storage under the key{" "}
          <code>cookie-consent</code> and is never sent to us.
        </p>
      </Section>

      <Section>
        <h2>5. Who else receives data</h2>
        <p>
          Our hosting provider, which serves the pages and keeps the access logs
          described in section 3, and Google, for analytics, but only if you
          accepted analytics cookies. Nobody else.
        </p>
        <p>
          Pages on this site link out to third-party platforms (for example
          GitHub, LinkedIn, YouTube, Medium and dev.to). Following such a link
          takes you to a service with its own privacy policy, over which we have
          no control.
        </p>
      </Section>

      <Section>
        <h2>6. Your rights</h2>
        <p>
          Under the GDPR you have the right to access your personal data, to have
          it rectified or erased, to have its processing restricted, to object to
          processing, and to data portability. Where processing is based on
          consent, you may withdraw that consent at any time — for analytics,
          through the <CookieSettingsLink /> link.
        </p>
        <p>
          In practice we hold no account or contact record for you, so for most
          requests there is simply nothing on our side to retrieve or delete.
          Write to{" "}
          <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a> if
          you want to exercise a right.
        </p>
        <p>
          You also have the right to lodge a complaint with a data protection
          supervisory authority — in Germany, the authority of the federal state
          in which the operator resides.
        </p>
      </Section>

      <Section>
        <h2>7. The mobile apps</h2>
        <p>
          This page is also the privacy policy for our iPhone and Android apps.
          Those apps do their work on your device: the voice notes, chats,
          photos and audio files you open stay on the phone, are not uploaded to
          us, and we never see them. There is no account and no sign-in.
        </p>
        <p>
          The one exception is advertising. Some of the free Android apps show
          banner ads through Google AdMob. To serve them, the Google Mobile Ads
          SDK collects your device&apos;s advertising ID and standard technical
          information such as device type, coarse location derived from your IP
          address, and whether an ad was shown, and shares it with Google as the
          ad provider. We ask for non-personalised ads, and we do not receive,
          store or sell any of it ourselves.
        </p>
        <p>
          In the EEA, the UK and Switzerland the app asks for your consent
          before any ad loads, and shows no ads if you decline. You can reopen
          that choice from inside the app at any time. Anywhere in the world you
          can reset or delete your advertising ID in Android Settings under
          Privacy → Ads, and apps that offer a paid unlock remove the ads
          entirely. Google&apos;s own policy explains what it does with the
          data: <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">policies.google.com/technologies/partner-sites</a>.
        </p>
        <p>
          Our paid iPhone apps contain no advertising SDK at all — not disabled,
          not present.
        </p>
      </Section>

      <Section>
        <h2>8. Changes</h2>
        <p>
          We update this page when the site changes, and we change the date at
          the top when we do.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default PrivacyPage;
