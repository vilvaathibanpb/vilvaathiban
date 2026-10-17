import Head from "next/head";
import Link from "next/link";
import { Container } from "../../about";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Wrap, Eyebrow, Title, Lead, Section, Faq } from "../../../components/service";

// The iOS app links to this URL exactly; keep the path stable.
const URL = "https://www.vilvaathiban.com/apps/homework-marking/support";
const SUPPORT_EMAIL = "vilvaathiban@gmail.com";

const TROUBLESHOOTING = [
  {
    q: "How do I get a good photo?",
    a: "Fit the whole sheet in the frame, lay it flat (no curled corners or folds), use even light without a shadow from your phone or hand, and wait until it is in focus. A blurry or cut-off photo is the most common reason for wrong marks or \"please check\" flags.",
  },
  {
    q: "What does \"please check\" mean?",
    a: "The app wasn't confident reading that answer, so it leaves the decision to you instead of guessing. Look at it and tap once to mark it right or wrong.",
  },
  {
    q: "A mark is wrong. Can I fix it?",
    a: "Yes. Tap any mark to flip it between right and wrong. What you choose is what is saved in the history and used for the redo sheet.",
  },
  {
    q: "Kanji marking seems less reliable",
    a: "Kanji drills are in beta. Judging handwritten kanji shapes is harder than checking sums, so more answers are flagged \"please check\". Use those flags as the places to look closely.",
  },
  {
    q: "What counts toward the 10 free trial sheets?",
    a: "Only worksheets that were marked successfully. If marking fails (for example no connection, or the photo can't be read), that attempt is refunded and doesn't count. The trial has no time limit.",
  },
  {
    q: "How do I print the redo sheet?",
    a: "After marking, tap to make a redo sheet. It is an A4 PDF with only the wrong questions and the answers on the last page. Print it with AirPrint, or share the PDF to save it, send it or print it elsewhere.",
  },
  {
    q: "The erased copy still shows pencil, or the printed lines faded",
    a: "Move the Erase strength slider: stronger removes more pencil, weaker keeps faint printed lines and text. Then erase again.",
  },
  {
    q: "Is there a limit?",
    a: "Fair use is up to 300 sheets a month, 100 of them kanji.",
  },
];

const BILLING = [
  {
    q: "How do I cancel the subscription?",
    a: "On your iPhone, open Settings, tap your name, then Subscriptions, choose Marutto and tap Cancel Subscription. Cancel at least 24 hours before the period ends to avoid the next renewal; you keep access until the end of the period you paid for. Deleting the app does not cancel the subscription.",
  },
  {
    q: "I subscribed but the app still asks me to",
    a: "Open the app's Settings and tap Restore purchases while online, signed in with the Apple Account that subscribed. With Family Sharing on, family members can restore the subscription the same way.",
  },
  {
    q: "How much is it?",
    a: "The first 10 marked sheets are free. Then it is ¥600 a month or ¥4,800 a year in Japan, auto-renewing; the price in your local currency is shown in the app before you buy. Refunds are handled by Apple at reportaproblem.apple.com.",
  },
];

const DATA = [
  {
    q: "How do I delete my data?",
    a: "Your history (photos, marks, children's names and school years) is stored only on your iPhone. In the app's Settings, Delete all history removes every marked sheet; deleting a child removes them and their sheets; deleting the app removes everything. Our server does not keep worksheet photos or answers, so there is nothing else to delete; it keeps only anonymous sheet counters.",
  },
];

const SupportPage = () => (
  <Container>
    <Head>
      <title>Support — Marutto: Homework Checker</title>
      <meta
        name="description"
        content="Help for Marutto: Homework Checker: taking good worksheet photos, “please check” flags, redo sheets, erasing handwriting, the free trial, cancelling and restoring your subscription, and deleting data."
      />
      <link rel="canonical" href={URL} />
    </Head>
    <Header />
    <Wrap>
      <Eyebrow>
        <Link href="/apps/homework-marking">Marutto: Homework Checker</Link>
      </Eyebrow>
      <Title>Support</Title>
      <Lead>
        Common questions first. If none of it helps, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your device model and iOS version (and a
        photo of the worksheet if a mark looks wrong) and you will get a reply.
      </Lead>

      <Section>
        <h2>How it works</h2>
        <p>
          Pick the child, photograph the worksheet and Marutto marks it: a red circle for each correct answer,
          a mark for each mistake, and a &quot;please check&quot; flag where it isn&apos;t sure. The arithmetic is
          recomputed by code rather than guessed. One tap makes an A4 redo sheet of only the wrong questions,
          and the app can erase the handwriting to make a clean copy to do again. It handles elementary math
          worksheets, and Japanese kanji drills in beta.
        </p>
      </Section>

      <Section>
        <h2>Marking and printing</h2>
        {TROUBLESHOOTING.map((f) => (
          <Faq key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </Faq>
        ))}
      </Section>

      <Section>
        <h2>Subscription</h2>
        {BILLING.map((f) => (
          <Faq key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </Faq>
        ))}
      </Section>

      <Section>
        <h2>Your data</h2>
        {DATA.map((f) => (
          <Faq key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </Faq>
        ))}
      </Section>

      <Section>
        <h2>Contact</h2>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Bug reports and worksheets it struggles
          with are both welcome. See also the <Link href="/apps/homework-marking/privacy">privacy policy</Link>.
        </p>
      </Section>
    </Wrap>
    <Footer />
  </Container>
);

export default SupportPage;
