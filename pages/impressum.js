import Head from "next/head";
import Link from "next/link";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section } from "../components/service";

const URL = "https://www.vilvaathiban.com/impressum";

const ImpressumPage = () => (
  <Container>
    <Head>
      <title>Impressum — vilvaathiban.com</title>
      <meta
        name="description"
        content="Legal notice (Impressum) for vilvaathiban.com under § 5 DDG: operator, contact details and responsibility for content."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>vilvaathiban.com</Eyebrow>
      <Title>Impressum</Title>
      <Lead>Legal Notice under § 5 DDG</Lead>
      <Lead>Last updated: 21 September 2026</Lead>

      <Section>
        <h2>Angaben gemäß § 5 DDG</h2>
        {/* TODO: fill before merging — replace the two address placeholders below. */}
        <p>
          Vilva Athiban Periyasamy Boominathan
          <br />
          [STREET AND NUMBER]
          <br />
          [POSTAL CODE AND CITY]
          <br />
          Germany
        </p>
      </Section>

      <Section>
        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:vilvaathiban@gmail.com">vilvaathiban@gmail.com</a>
        </p>
      </Section>

      <Section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        {/* TODO: fill before merging — same address as above. */}
        <p>
          Vilva Athiban Periyasamy Boominathan
          <br />
          [STREET AND NUMBER]
          <br />
          [POSTAL CODE AND CITY]
          <br />
          Germany
        </p>
      </Section>

      <Section>
        <h2>Umsatzsteuer-ID</h2>
        {/* TODO: fill before merging — enter the VAT ID, or delete this whole
            section and keep only the Kleinunternehmer sentence below. */}
        <p>[VAT ID — or delete this section and keep the Kleinunternehmer note]</p>
        <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
      </Section>

      <Section>
        <h2>Streitschlichtung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
        <p>
          We are neither obliged nor willing to take part in dispute resolution
          proceedings before a consumer arbitration board.
        </p>
      </Section>

      <Section>
        <h2>Datenschutz</h2>
        <p>
          How this site handles data, including the consent-gated analytics, is
          described in the <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default ImpressumPage;
