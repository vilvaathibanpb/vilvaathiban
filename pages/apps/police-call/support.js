import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

const URL = "https://www.vilvaathiban.com/apps/police-call/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "Does the app really call my phone?",
    a: "No. It shows a pretend incoming call inside the app, with a ringtone and an Accept button. No real call is made, no number is dialed and nobody else is involved.",
  },
  {
    q: "How do I hand the phone over before it rings?",
    a: "Pick Ring in 10 seconds, 30 seconds or 1 minute before you tap Call. The screen dims to a pretend lock screen until the call arrives.",
  },
  {
    q: "How do I get out of the lock screen?",
    a: "Press and hold the clock for about a second and a half. It is deliberately hard to tap out of, so a curious child cannot end it early.",
  },
  {
    q: "Will it scare my child?",
    a: "It is written not to. The officers are gentle, there are no sirens or threats, and every word is on screen before you call, so you can read it first. The praise calls are for the good days.",
  },
  {
    q: "There is no sound",
    a: "Turn the ring and silent switch off silent and turn the volume up. The call plays through the speaker.",
  },
  {
    q: "I bought the unlock but the calls are still locked",
    a: "Open Settings (gear icon) and tap Restore an earlier purchase while online, signed in with the Apple Account that bought it.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Good Behavior Police Call</title>
      <meta
        name="description"
        content="Help for Good Behavior Police Call: how the pretend call works, handing over the phone, sound, and restoring your purchase."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>Good Behavior Police Call</Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your device model and iOS version and you
        will get a reply.
      </Lead>

      <Section>
        <h2>How it works</h2>
        <p>
          Choose Officer Pat or Officer Sam, pick a call such as Bedtime or Brushing teeth, read the script if you like, then ring now or after a short delay and hand over the phone. The officer talks gently about one small thing and leaves pauses for your child to answer. Bedtime and Great day are free; a one-time purchase unlocks the other calls.
        </p>
      </Section>

      <Section>
        <h2>Troubleshooting</h2>
        {TROUBLESHOOTING.map((f) => (
          <Faq key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </Faq>
        ))}
      </Section>

      <Section>
        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Bug reports and ideas for new calls are both
          welcome. See also the <Link href="/apps/police-call/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
