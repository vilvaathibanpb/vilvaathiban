// On-site blog posts, rendered at /blog and /blog/[slug].
//
// HOW TO ADD A POST (also used by automated runs):
// 1. Append an object to the `posts` array below with this shape:
//    {
//      slug: "kebab-case-url-slug",            // becomes /blog/<slug>
//      title: "Post title",
//      description: "1-2 sentence summary used for meta description / OG / cards",
//      datePublished: "YYYY-MM-DD",
//      readingMinutes: 7,
//      content: [                               // ordered sections
//        {
//          heading: "Section heading",          // omit on the first section for an intro
//          blocks: [
//            { type: "p", text: "Paragraph. Wrap inline code in `backticks`." },
//            { type: "list", items: ["Item one", "Item `two`"] },
//            { type: "code", language: "jsx", code: "const x = 1;" },
//          ],
//        },
//      ],
//    }
// 2. Add a <url> entry for https://www.vilvaathiban.com/blog/<slug> to public/sitemap.xml.
// No other changes are needed — /blog and /blog/[slug] pick posts up statically.

import { appPosts } from "./appPosts";

export const posts = [
  {
    slug: "react-19-form-actions",
    title:
      "React 19 Form Actions: useActionState, useFormStatus and useOptimistic Explained",
    description:
      "How React 19's Actions replace the useState/loading/error boilerplate in forms — a practical walkthrough of useActionState, useFormStatus and useOptimistic with real code.",
    datePublished: "2026-08-01",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Forms are where React boilerplate has always piled up. Even a small newsletter signup usually grows three pieces of state — the input value, a `submitting` flag, an `error` message — plus a `handleSubmit` with a `try/catch/finally`, and often a stray `useEffect` to reset things afterwards. Every codebase I have worked in reinvents this pattern slightly differently, and every version has the same bugs: double submits, loading spinners that never stop, error states that survive a successful retry.",
          },
          {
            type: "p",
            text: "React 19 folds that whole pattern into the framework. Functions passed to a form's `action` prop become *Actions*: async functions whose pending, error and result states React tracks for you. Three hooks expose that tracking — `useActionState`, `useFormStatus` and `useOptimistic`. This post migrates a typical form to them, step by step, and finishes with an honest look at when you should *not* use them.",
          },
        ],
      },
      {
        heading: "The baseline: manual state everywhere",
        blocks: [
          {
            type: "p",
            text: "Here is the form most of us have written a hundred times — a feedback box that POSTs to an API:",
          },
          {
            type: "code",
            language: "jsx",
            code: `function Feedback() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await sendFeedback(message);
      setMessage("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button disabled={submitting}>
        {submitting ? "Sending..." : "Send"}
      </button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}`,
          },
          {
            type: "p",
            text: "Nothing here is *wrong*, but notice how much of it is ceremony: three `useState` calls, a manual `preventDefault`, and a `finally` block whose only job is to un-stick the spinner. None of it is specific to this form — it is the same scaffolding every mutation needs.",
          },
        ],
      },
      {
        heading: "Step 1 — useActionState: the whole lifecycle in one hook",
        blocks: [
          {
            type: "p",
            text: "`useActionState` takes an action function and an initial state, and returns three things: the latest state your action returned, a wrapped action to pass to the form, and an `isPending` flag. The same form becomes:",
          },
          {
            type: "code",
            language: "jsx",
            code: `import { useActionState } from "react";

async function submitFeedback(prevState, formData) {
  const message = formData.get("message");
  if (!message || message.trim().length < 5) {
    return { error: "Please write at least a few words." };
  }
  try {
    await sendFeedback(message);
    return { error: null, success: true };
  } catch (err) {
    return { error: err.message };
  }
}

function Feedback() {
  const [state, formAction, isPending] = useActionState(
    submitFeedback,
    { error: null }
  );

  return (
    <form action={formAction}>
      <textarea name="message" />
      <button disabled={isPending}>
        {isPending ? "Sending..." : "Send"}
      </button>
      {state.error && <p role="alert">{state.error}</p>}
      {state.success && <p>Thanks for the feedback!</p>}
    </form>
  );
}`,
          },
          {
            type: "p",
            text: "Three details are worth calling out. First, the input is *uncontrolled*: it has a `name`, and React hands your action a real `FormData` object — no `value`/`onChange` pair, no state update on every keystroke. Second, the action's first argument is the *previous* state, which makes multi-step flows (wizards, retry counters) natural. Third, React resets the form's fields after a successful action dispatch, matching native browser behaviour.",
          },
          {
            type: "p",
            text: "Error handling stops being your problem to orchestrate. Whatever your action returns becomes the new `state` — a validation message, a success flag, field-level errors. There is no way to forget the `finally`, because there is no `finally`.",
          },
          {
            type: "p",
            text: "One habit worth building early: treat the returned state as a small, serialisable result object rather than dumping arbitrary data into it. `{ error, success, fieldErrors }` covers most forms, keeps the JSX conditions readable, and — if you later move the action to the server — survives the serialisation boundary without changes.",
          },
        ],
      },
      {
        heading: "Step 2 — useFormStatus: pending UI without prop drilling",
        blocks: [
          {
            type: "p",
            text: "Design systems hit an annoying problem with the version above: the submit button needs `isPending`, so every form has to thread that prop into the shared `<SubmitButton>`. `useFormStatus` (from `react-dom`) removes the threading — it reads the status of the nearest parent `<form>`, like a context provider you get for free:",
          },
          {
            type: "code",
            language: "jsx",
            code: `import { useFormStatus } from "react-dom";

function SubmitButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending..." : children}
    </button>
  );
}

// Works inside ANY form, with zero props:
<form action={formAction}>
  <textarea name="message" />
  <SubmitButton>Send</SubmitButton>
</form>`,
          },
          {
            type: "p",
            text: "The one gotcha: `useFormStatus` only works in a component rendered *inside* the `<form>`. Calling it in the same component that renders the form returns a non-pending status — it behaves like a consumer, not an observer. Build a small `SubmitButton` once, drop it into every form in the app, and delete a prop from all of them.",
          },
        ],
      },
      {
        heading: "Step 3 — useOptimistic: instant feedback for slow mutations",
        blocks: [
          {
            type: "p",
            text: "Some mutations should not feel asynchronous at all. When someone posts a comment, waiting 800 ms for the round trip before showing it makes the app feel broken. `useOptimistic` lets you render the expected result immediately, and React automatically reverts to the real state if the action fails or when it settles:",
          },
          {
            type: "code",
            language: "jsx",
            code: `import { useOptimistic, useRef } from "react";

function Comments({ comments, postComment }) {
  const formRef = useRef(null);
  const [optimisticComments, addOptimistic] = useOptimistic(
    comments,
    (current, newText) => [
      ...current,
      { id: "optimistic", text: newText, sending: true },
    ]
  );

  async function action(formData) {
    const text = formData.get("text");
    addOptimistic(text);
    formRef.current?.reset();
    await postComment(text); // server confirms; props update
  }

  return (
    <>
      <ul>
        {optimisticComments.map((c) => (
          <li key={c.id} style={{ opacity: c.sending ? 0.5 : 1 }}>
            {c.text}
          </li>
        ))}
      </ul>
      <form action={action} ref={formRef}>
        <input name="text" />
        <SubmitButton>Post</SubmitButton>
      </form>
    </>
  );
}`,
          },
          {
            type: "p",
            text: "The mental model matters here: `useOptimistic` is a *view* over your canonical state, valid only while an action is in flight. You never reconcile it by hand. When the action finishes and the real `comments` prop updates, the optimistic layer evaporates. If the request throws, React rolls the UI back to the last confirmed state — your error UI (from `useActionState`, naturally) takes it from there.",
          },
        ],
      },
      {
        heading: "Do you need a server framework for this?",
        blocks: [
          {
            type: "p",
            text: "A common misconception is that Actions only exist for Next.js-style Server Actions. They pair well — passing a server function to `action` gives you progressive enhancement, where the form can submit before JavaScript hydrates — but none of the hooks above require a server framework. An action is just an async function; everything in this post runs in a plain client-rendered React 19 app calling `fetch`.",
          },
          {
            type: "p",
            text: "Under the hood, Actions are built on transitions — dispatching one is essentially `useTransition` with form ergonomics. That is why `isPending` behaves exactly like a transition's pending flag, why the UI stays responsive while the action runs, and why multiple submissions queue sanely instead of racing each other. If you already understand transitions, you understand Actions.",
          },
          {
            type: "p",
            text: "That said, these hooks are not the answer to every form:",
          },
          {
            type: "list",
            items: [
              "**Live, per-keystroke validation** still wants controlled inputs or a library. Actions run on submit; they do not observe typing.",
              "**Complex multi-field forms** — dependent fields, arrays of inputs, dirty tracking — remain the territory of `react-hook-form` and friends, which have themselves added action support rather than being replaced by it.",
              "**Anything below React 19** (or React DOM for `useFormStatus`) cannot use these APIs — check your version before refactoring a shared component library.",
            ],
          },
        ],
      },
      {
        heading: "Takeaways",
        blocks: [
          {
            type: "list",
            items: [
              "Pass async functions to `<form action={...}>` and stop calling `preventDefault` for mutations.",
              "`useActionState` replaces the `useState` trio (value/loading/error) with one hook whose state is whatever your action returns.",
              "`useFormStatus` belongs in your design-system submit button — write it once, delete the `isPending` prop everywhere.",
              "`useOptimistic` is for mutations that should feel instant; it reverts automatically on failure, so you write no rollback code.",
              "Reach for form libraries when the *editing* is complex; reach for Actions when the *submission* is the complex part.",
            ],
          },
          {
            type: "p",
            text: "The through-line of React 19's form story is that submission state is now framework state. The less of it you own, the less of it you can get wrong.",
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-iterator-helpers",
    title:
      "JavaScript Iterator Helpers: Lazy .map, .filter and .take Pipelines Without Intermediate Arrays",
    description:
      "Iterator helpers are now Baseline in every browser. A hands-on guide to .map, .filter, .take and .toArray — lazy pipelines with no intermediate arrays.",
    datePublished: "2026-08-02",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Chained array methods are the most idiomatic thing in JavaScript — and one of the most quietly wasteful. Every `.map` and `.filter` in a chain allocates a brand-new array and walks the whole input, even if you only wanted the first three results. For years the fix was a manual `for` loop or a helper library like Lodash's lazy chains.",
          },
          {
            type: "p",
            text: "As of 2025, the fix is built into the language. *Iterator helpers* — part of ES2025 — put `.map`, `.filter`, `.take`, `.drop`, `.flatMap`, `.reduce` and friends directly on iterators, evaluated lazily, one element at a time. And since Safari 18.4 shipped in March 2025 they are **Baseline Newly Available**: every major browser plus Node.js 22+ supports them natively, no polyfill required. This post is a practical tour: what they are, where the laziness actually pays off, and the gotchas that bite people coming from array methods.",
          },
        ],
      },
      {
        heading: "The problem with chained array methods",
        blocks: [
          {
            type: "p",
            text: "Here is a chain most of us write weekly — grab the names of the first three active users:",
          },
          {
            type: "code",
            language: "js",
            code: `const firstThree = users
  .filter((u) => u.active)   // allocates array #1, walks all users
  .map((u) => u.name)        // allocates array #2, walks all matches
  .slice(0, 3);              // allocates array #3, throws the rest away`,
          },
          {
            type: "p",
            text: "With 50 users, nobody cares. With 50,000 rows from an API, or lines from a parsed file, you are allocating and walking three full collections to keep three items. The code *looks* like a pipeline, but it executes as three separate loops.",
          },
        ],
      },
      {
        heading: "The same pipeline, lazily",
        blocks: [
          {
            type: "p",
            text: "Iterator helpers live on iterator objects, not on arrays. To use them on an array you first ask for its iterator with `.values()`, then chain, then collect with `.toArray()`:",
          },
          {
            type: "code",
            language: "js",
            code: `const firstThree = users
  .values()                  // an iterator — no copy made
  .filter((u) => u.active)
  .map((u) => u.name)
  .take(3)
  .toArray();`,
          },
          {
            type: "p",
            text: "This reads almost identically but executes completely differently. Nothing runs until `.toArray()` starts pulling values. Each element then flows through the whole pipeline individually — filtered, mapped, counted by `.take` — and the moment three results exist, the source iterator is closed. No intermediate arrays, one pass, early exit for free.",
          },
          {
            type: "p",
            text: "You can prove the laziness with a counter:",
          },
          {
            type: "code",
            language: "js",
            code: `let calls = 0;

const result = bigArray
  .values()
  .map((n) => {
    calls++;
    return n * n;
  })
  .take(3)
  .toArray();

console.log(calls); // 3 — not bigArray.length`,
          },
          {
            type: "p",
            text: "The full helper set on `Iterator.prototype`: `map`, `filter`, `take`, `drop`, `flatMap` for transforming, and `reduce`, `toArray`, `forEach`, `some`, `every`, `find` for consuming. The consumers are eager — they drain the iterator (though `some`, `every` and `find` still stop early when they can). Callbacks receive `(value, index)` just like their array counterparts.",
          },
        ],
      },
      {
        heading: "Where it gets fun: generators and infinite sequences",
        blocks: [
          {
            type: "p",
            text: "Because generators are iterators, every generator you already have grew these methods overnight. That makes previously awkward patterns one-liners — including infinite sequences, which array methods cannot represent at all:",
          },
          {
            type: "code",
            language: "js",
            code: `function* naturals() {
  let n = 1;
  while (true) yield n++;
}

const firstFiveSquares = naturals()
  .map((n) => n * n)
  .take(5)
  .toArray(); // [1, 4, 9, 16, 25]`,
          },
          {
            type: "p",
            text: "An infinite loop, `.map` over it, and it terminates — because `.take(5)` stops pulling after five values. This is the mental model shift: array methods push every element through each stage; iterator helpers let the *end* of the pipeline pull only what it needs.",
          },
          {
            type: "p",
            text: "A more realistic use: streaming over a large log without materialising every line, match, and mapped result as separate arrays.",
          },
          {
            type: "code",
            language: "js",
            code: `function* lines(text) {
  let start = 0;
  while (start < text.length) {
    let end = text.indexOf("\\n", start);
    if (end === -1) end = text.length;
    yield text.slice(start, end);
    start = end + 1;
  }
}

const firstTenErrors = lines(logText)
  .filter((line) => line.includes("ERROR"))
  .map((line) => "[log] " + line.slice(0, 120))
  .take(10)
  .toArray();`,
          },
          {
            type: "p",
            text: "Ten matches found, iteration stops — even if the log has a million lines after them. And aggregation works without ever building an array at all:",
          },
          {
            type: "code",
            language: "js",
            code: `const totalPaid = orders
  .values()
  .filter((o) => o.status === "paid")
  .reduce((sum, o) => sum + o.amount, 0);`,
          },
        ],
      },
      {
        heading: "Iterator.from: adopting things that are not quite iterators",
        blocks: [
          {
            type: "p",
            text: "Plenty of iterable things do not inherit from `Iterator.prototype` — hand-written objects with a `next()` method, iterators from older libraries. The static `Iterator.from()` wraps any iterator *or* iterable and returns an object with the full helper set:",
          },
          {
            type: "code",
            language: "js",
            code: `const httpsLinks = Iterator.from(document.querySelectorAll("a"))
  .map((a) => a.href)
  .filter((href) => href.startsWith("https://"))
  .toArray();`,
          },
          {
            type: "p",
            text: "Maps and Sets need no wrapping — `map.entries()`, `map.keys()`, `set.values()` all return proper iterators, so you can filter a Map's entries without the old `[...map.entries()]` spread-then-filter dance.",
          },
        ],
      },
      {
        heading: "Gotchas coming from array methods",
        blocks: [
          {
            type: "p",
            text: "The helper names are deliberately familiar, which makes it easy to assume array semantics that do not hold. Four differences cause nearly all the surprises in practice:",
          },
          {
            type: "list",
            items: [
              "**Iterators are single-use.** Once consumed, they are done: calling `.toArray()` twice on the same chain yields the results once, then an empty array. Build the chain fresh (or from a fresh `.values()` call) each time you need it.",
              "**No `sort`, `reverse`, `includes` or `at`.** Anything that needs the whole collection or random access is deliberately absent — collect with `.toArray()` first, then use array methods.",
              "**Arrays are still fine.** For a few hundred elements, chained array methods are simpler to debug and effectively just as fast. Reach for iterator helpers when inputs are large, expensive to produce, or unbounded — not by default.",
              "**These are sync-only.** Async iterator helpers (for `for await` streams) are a separate proposal still moving through TC39 — for async sources today you still write the loop yourself.",
            ],
          },
        ],
      },
      {
        heading: "Takeaways",
        blocks: [
          {
            type: "list",
            items: [
              "Iterator helpers are Baseline: all modern browsers and Node.js 22+ ship them — you can use them in production code today.",
              "`array.values().filter(...).map(...).take(n).toArray()` gives you the familiar chain with one pass, no intermediate arrays, and early exit.",
              "Generators get the methods for free, which finally makes infinite and streaming sequences pleasant to work with.",
              "`Iterator.from()` upgrades third-party or hand-rolled iterators to the full helper API.",
              "Remember the two big differences from arrays: chains are lazy until consumed, and iterators are spent after one use.",
            ],
          },
          {
            type: "p",
            text: "The pattern to internalise is *pull, not push*: describe the pipeline, and let the consumer decide how much work actually happens. It is the cheapest performance win the language has handed us in years — it just looks like the code you were already writing.",
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-temporal-api-practical-guide",
    title:
      "The Temporal API Is Finally Here: A Practical Guide to JavaScript's New Dates",
    description:
      "Temporal is now shipping in Chrome and Firefox. A hands-on tour of PlainDate, ZonedDateTime, Instant and Duration — with the recipes you actually need day to day.",
    datePublished: "2026-08-03",
    readingMinutes: 9,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "For as long as JavaScript has existed, `Date` has been its most reliably broken corner. Months are zero-indexed, everything is secretly mutable, parsing behavior varies between engines, and time zones are a guessing game. We have all shipped at least one off-by-one-day bug because of it — and then shipped a date library to apologize.",
          },
          {
            type: "p",
            text: "That era is finally ending. **Temporal**, the TC39 proposal that has been in the works for the better part of a decade, shipped in Firefox 139 and reached Chrome stable in version 144 earlier this year, with Safari's implementation underway in Technology Preview. It is a complete, immutable, time-zone-aware replacement for `Date` — built into the language, no library required. This post is a practical tour: the mental model, the recipes you will use weekly, and how to adopt it today without breaking older browsers.",
          },
        ],
      },
      {
        heading: "The mental model: pick the right type",
        blocks: [
          {
            type: "p",
            text: "The single biggest idea in Temporal is that \"a date\" is not one thing. `Date` forced every concept — a birthday, a meeting time, a timestamp — into one object that was always secretly a millisecond count in UTC. Temporal splits these into distinct immutable types, and once you pick the right one, most bugs become unrepresentable:",
          },
          {
            type: "list",
            items: [
              "`Temporal.PlainDate` — a calendar date with no time and no zone. Birthdays, invoices, deadlines.",
              "`Temporal.PlainTime` — a wall-clock time with no date. \"The shop opens at 09:00.\"",
              "`Temporal.PlainDateTime` — date plus wall time, still zone-free. \"The meeting is at 2pm on March 3rd\" before you know where.",
              "`Temporal.ZonedDateTime` — a real moment anchored to a time zone. Calendar events, flight departures.",
              "`Temporal.Instant` — an exact point on the global timeline. Log timestamps, `createdAt` fields.",
              "`Temporal.Duration` — a span of time. \"3 hours 20 minutes\", \"2 months\".",
            ],
          },
          {
            type: "p",
            text: "Rule of thumb: store `Instant`s, schedule with `ZonedDateTime`, and do business logic with `PlainDate`. If you find yourself reaching for `PlainDateTime`, ask whether you actually know the zone — you usually do.",
          },
        ],
      },
      {
        heading: "Everyday recipes",
        blocks: [
          {
            type: "p",
            text: "Here is the stuff you do every week, side by side with the old pain. Today's date, without the `new Date()` timezone roulette:",
          },
          {
            type: "code",
            language: "js",
            code: "const today = Temporal.Now.plainDateISO();\n// => 2026-08-03 (a PlainDate, in the user's zone)\n\nconst inBerlin = Temporal.Now.plainDateISO(\"Europe/Berlin\");\n// today's date in a specific zone, explicitly",
          },
          {
            type: "p",
            text: "Parsing is strict and predictable — ISO 8601 strings only, no more \"works in Chrome, NaN in Safari\":",
          },
          {
            type: "code",
            language: "js",
            code: "const date = Temporal.PlainDate.from(\"2026-08-03\");\nconst dt = Temporal.ZonedDateTime.from(\n  \"2026-08-03T09:30:00+02:00[Europe/Berlin]\"\n);\n\ndate.year;      // 2026\ndate.month;     // 8  <- one-indexed. August is 8. Rejoice.\ndate.dayOfWeek; // 1  <- ISO: Monday is 1, Sunday is 7",
          },
          {
            type: "p",
            text: "Arithmetic returns new objects — nothing mutates, and you never touch milliseconds math again:",
          },
          {
            type: "code",
            language: "js",
            code: "const due = today.add({ days: 14 });\nconst lastMonth = today.subtract({ months: 1 });\n\n// difference between two dates, in the unit you want\nconst days = today.until(due).days;            // 14\nconst age = birthday.until(today, {\n  largestUnit: \"years\",\n}); // => a Duration like P34Y6M12D",
          },
          {
            type: "p",
            text: "Comparison finally has a real API instead of subtracting objects and hoping:",
          },
          {
            type: "code",
            language: "js",
            code: "Temporal.PlainDate.compare(a, b); // -1, 0, or 1\nconst sorted = dates.sort(Temporal.PlainDate.compare);\na.equals(b); // true / false",
          },
        ],
      },
      {
        heading: "Time zones and DST, handled correctly by default",
        blocks: [
          {
            type: "p",
            text: "This is where Temporal earns its decade of design work. A `ZonedDateTime` knows its zone, so arithmetic respects daylight saving transitions instead of silently drifting an hour:",
          },
          {
            type: "code",
            language: "js",
            code: "const zdt = Temporal.ZonedDateTime.from(\n  \"2026-03-28T12:00:00+01:00[Europe/Berlin]\"\n);\n\n// add one day across the DST switch (clocks jump forward)\nzdt.add({ days: 1 }).toString();\n// => 2026-03-29T12:00:00+02:00[Europe/Berlin]\n// still noon on the wall clock - offset changed, not the hour\n\n// add 24 exact hours instead - a different question!\nzdt.add({ hours: 24 }).toString();\n// => 2026-03-29T13:00:00+02:00[Europe/Berlin]",
          },
          {
            type: "p",
            text: "Notice what happened: *a day* and *24 hours* are different things near a DST boundary, and Temporal lets you say which one you mean. This is exactly the class of bug that used to surface twice a year as \"the report is off by an hour, but only for European users, but only in March.\"",
          },
          {
            type: "p",
            text: "Converting between zones is explicit and lossless:",
          },
          {
            type: "code",
            language: "js",
            code: "const meeting = Temporal.ZonedDateTime.from(\n  \"2026-08-10T15:00:00+05:30[Asia/Kolkata]\"\n);\nmeeting.withTimeZone(\"America/New_York\").toString();\n// => 2026-08-10T05:30:00-04:00[America/New_York]",
          },
        ],
      },
      {
        heading: "Instants and timestamps",
        blocks: [
          {
            type: "p",
            text: "For machine time — logs, tokens, `createdAt` columns — use `Temporal.Instant`. It interoperates cleanly with everything you already have:",
          },
          {
            type: "code",
            language: "js",
            code: "const now = Temporal.Now.instant();\nnow.toString();            // 2026-08-03T11:20:31.442Z\nnow.epochMilliseconds;     // for APIs that want a number\n\n// from a legacy Date\nconst inst = legacyDate.toTemporalInstant();\n\n// render for a user, in their zone\ninst.toZonedDateTimeISO(\"Asia/Kolkata\").toPlainTime();",
          },
          {
            type: "p",
            text: "That `toTemporalInstant()` method on `Date.prototype` is the official bridge: incremental migration is a first-class use case, not an afterthought. New code can be fully Temporal while old modules keep handing you `Date`s.",
          },
        ],
      },
      {
        heading: "Using Temporal in production today",
        blocks: [
          {
            type: "p",
            text: "As of mid-2026 the support picture is: Firefox since 139, Chrome and Chromium-based browsers since 144, Safari in development (already visible in Technology Preview). Node has the proposal behind a flag in recent versions, and the `@js-temporal/polyfill` package covers everything else. That makes the pragmatic setup a feature-detected polyfill:",
          },
          {
            type: "code",
            language: "js",
            code: "// temporal.js - import this everywhere instead of the global\nimport { Temporal as Polyfill } from \"@js-temporal/polyfill\";\n\nexport const Temporal = globalThis.Temporal ?? Polyfill;",
          },
          {
            type: "p",
            text: "Browsers that ship Temporal natively pay zero bytes for the polyfill path once you code-split it, and everyone else gets identical behavior. When your browser support floor rises, you delete the file and change nothing else.",
          },
          {
            type: "list",
            items: [
              "Migrate the *boundaries* first: parse incoming strings into Temporal types immediately, and only convert to `Date` at the edge of libraries that require it.",
              "Replace date-fns/dayjs call sites opportunistically — most one-liners (add, diff, startOf-style logic) map directly onto Temporal methods.",
              "Keep using `Intl.DateTimeFormat` for display; every Temporal type plugs into `toLocaleString()` the way you would expect.",
            ],
          },
        ],
      },
      {
        heading: "When you still want a library (or plain old Date)",
        blocks: [
          {
            type: "p",
            text: "Temporal is deliberately low-level in places: there is no \"human friendly relative time\" formatter (that is `Intl.RelativeTimeFormat`'s job), no recurrence rules, and no calendar-week helpers beyond `weekOfYear`. Libraries will keep living above it, the way they now live above `Intl`. And if all a module does is stamp `Date.now()` into a log line, there is no prize for rewriting it.",
          },
          {
            type: "p",
            text: "But for everything that made dates in JavaScript miserable — parsing, zones, DST, immutability, arithmetic — the fix is now built into the platform. After nine years of proposal drafts, the boring answer is finally the right one: just use Temporal.",
          },
        ],
      },
    ],
  },
  {
    slug: "react-compiler-adoption-guide",
    title: "React Compiler in Practice: Adopting Automatic Memoization Without Surprises",
    description:
      "React Compiler auto-memoizes your components so you can delete most useMemo/useCallback calls. How it works, how to adopt it incrementally, and where it will not save you.",
    datePublished: "2026-08-04",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "For years, React performance work has meant sprinkling `useMemo`, `useCallback` and `React.memo` around the codebase and hoping you guessed the hot paths right. React Compiler — stable since its 1.0 release in October 2025 — changes the deal: it is a build-time compiler that analyzes your components and inserts fine-grained memoization automatically. You write plain React; the compiler writes the caching code you used to write by hand.",
          },
          {
            type: "p",
            text: "I have now migrated a couple of production apps to it, and the experience is mostly boring in the best way — but 'mostly' is doing some work in that sentence. This post covers how the compiler actually works, a low-risk adoption path, and the cases where it will not help you at all.",
          },
        ],
      },
      {
        heading: "What the compiler actually does",
        blocks: [
          {
            type: "p",
            text: "React Compiler is a Babel plugin that runs over your components and hooks at build time. It analyzes each function, works out which values each piece of JSX and each computation depends on, and rewrites the function so those pieces are cached and only recomputed when their inputs change. Conceptually it is as if every expression in your component got a perfectly-scoped `useMemo` — without you maintaining a single dependency array.",
          },
          {
            type: "p",
            text: "Take an ordinary component like this:",
          },
          {
            type: "code",
            language: "jsx",
            code: "function ProductList({ products, filter, onSelect }) {\n  const visible = products.filter(\n    (p) => p.category === filter\n  );\n\n  return (\n    <ul>\n      {visible.map((p) => (\n        <ProductRow\n          key={p.id}\n          product={p}\n          onSelect={() => onSelect(p.id)}\n        />\n      ))}\n    </ul>\n  );\n}",
          },
          {
            type: "p",
            text: "Without the compiler, every parent re-render re-runs the filter and recreates every arrow function, so every `ProductRow` re-renders even when nothing changed. The hand-written fix is a `useMemo` around `visible`, a `useCallback` per handler, and `React.memo` on the row — three APIs, three chances to get a dependency array wrong. The compiled version gets the same effect automatically: the filter result is reused while `products` and `filter` are stable, and rows stop re-rendering for unrelated state changes. Your source stays exactly as written above.",
          },
          {
            type: "p",
            text: "Two properties make this trustworthy. First, the compiler is conservative: if it cannot prove a memoization is safe — because a function mutates its inputs, or breaks the Rules of React in a way it can detect — it simply skips that component rather than guessing. Second, it only memoizes; it does not reorder your logic or change observable behavior. A component the compiler skips behaves exactly as it does today.",
          },
        ],
      },
      {
        heading: "Adopting it: an incremental path",
        blocks: [
          {
            type: "p",
            text: "The compiler ships as `babel-plugin-react-compiler`, with the lint rules that used to live in a separate package now part of `eslint-plugin-react-hooks`. It targets React 19 by default, and supports React 17 and 18 via a small runtime package and a compilation target option. A sane adoption sequence:",
          },
          {
            type: "list",
            items: [
              "Step 1 — lint first. Enable the compiler-aware lint rules before compiling anything. They flag the code the compiler cannot handle: mutations of props or state, side effects during render, conditional hook calls. Fixing these improves your codebase whether or not you ever ship the compiler.",
              "Step 2 — compile a slice. Use the plugin's directory or opt-in scoping to run the compiler on one feature folder. Verify the app in development — React DevTools badges compiled components with a small 'Memo' marker, so you can confirm it is actually active.",
              "Step 3 — measure something real. Pick an interaction you know is janky — typing in a filter input above a big list is a classic — and profile it before and after. You are looking for re-render counts collapsing on components whose props did not change.",
              "Step 4 — widen to the whole app, then start deleting. Once the compiler runs everywhere, most hand-written `useMemo`/`useCallback` wrappers are dead weight. Delete them gradually as you touch files; the compiler's version is usually more precise than the one you wrote.",
            ],
          },
          {
            type: "p",
            text: "The Babel setup itself is one line in your config — the only rule that matters is that the compiler plugin must run first, before other transforms:",
          },
          {
            type: "code",
            language: "js",
            code: "// babel.config.js\nmodule.exports = {\n  plugins: [\n    [\"babel-plugin-react-compiler\", { target: \"19\" }],\n    // ...other plugins after\n  ],\n};",
          },
          {
            type: "p",
            text: "Next.js, Vite (via the Babel-based React plugin), Remix and Expo all have documented integration points for it now; in Next.js it is a single flag in the config file.",
          },
        ],
      },
      {
        heading: "Where it will not save you",
        blocks: [
          {
            type: "p",
            text: "Automatic memoization eliminates a category of re-render waste. It does not make slow code fast, and a few real-world limits are worth knowing before you promise your team a free performance win:",
          },
          {
            type: "list",
            items: [
              "Genuinely expensive computations are still expensive. If a render does heavy work on a big dataset, the compiler ensures it re-runs less often — but the first run still costs what it costs. Move that work off the render path or into a worker; the compiler cannot.",
              "Unstable values from outside defeat caching. A context whose value is a fresh object every render, or a library hook that returns new references each call, invalidates everything downstream of it. The compiler memoizes within your components; it cannot fix an upstream API that never produces stable inputs.",
              "Rule-breaking code gets skipped, silently doing nothing. Components that mutate props, read refs during render, or rely on render side effects are left uncompiled. If your worst-performing component is also your least disciplined one, the compiler will politely decline to help it — the lint rules tell you why.",
              "It is not a substitute for architecture. Splitting a monolithic component, virtualizing a 5,000-row list, or moving state closer to where it is used still beats any memoization strategy, manual or automatic.",
            ],
          },
        ],
      },
      {
        heading: "Should you switch now?",
        blocks: [
          {
            type: "p",
            text: "For new projects the answer is a clear yes: start with the compiler on and the lint rules enforced, and simply never write `useMemo` boilerplate to begin with. For existing apps, the calculus depends on code health — the compiler rewards codebases that already follow the Rules of React and exposes the ones that do not. Run the lint rules, fix what they surface, then compile incrementally.",
          },
          {
            type: "p",
            text: "The strategic direction is hard to argue with. Manual memoization was always a workaround — performance bookkeeping that humans did badly and forgot to update. React Compiler moves that bookkeeping into the toolchain, where it can be exhaustive and correct. A year from now, a component wrapped in three layers of `useCallback` will read the way a hand-rolled class component reads today: a fossil from an era the tooling has outgrown.",
          },
        ],
      },
    ],
  },
  {
    slug: "popover-api-css-anchor-positioning",
    title:
      "Popover API + CSS Anchor Positioning: Tooltips and Dropdowns Without a Library",
    description:
      "Build accessible tooltips and dropdown menus with the native Popover API and CSS anchor positioning - no Floating UI required - and wire them into React 19.",
    datePublished: "2026-08-05",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "For most of the last decade, putting a tooltip next to a button meant installing a positioning library. Popper.js, then Floating UI, plus a `z-index` scheme, scroll listeners, resize observers and flip logic - all to answer one question: *where should this box go, and what happens when it hits the edge of the screen?* In 2026 the platform finally answers that question itself. The **Popover API** (Baseline since 2024) handles showing, hiding, stacking and light dismiss. **CSS anchor positioning**, which reached all three major engines through the Interop effort, handles placement and edge flipping. Together they replace a surprising amount of JavaScript.",
          },
          {
            type: "p",
            text: "This post builds a dropdown menu and a tooltip with zero positioning JavaScript, then shows how to use both from React 19, which ships first-class support for the popover attributes and events.",
          },
        ],
      },
      {
        heading: "The Popover API in sixty seconds",
        blocks: [
          {
            type: "p",
            text: "A popover is any element with the `popover` attribute. A button points at it with `popovertarget`, and the browser wires up the rest - no click handlers, no state:",
          },
          {
            type: "code",
            language: "html",
            code: '<button popovertarget="filters" id="filters-btn">\n  Filters\n</button>\n\n<div id="filters" popover>\n  <label><input type="checkbox" /> In stock only</label>\n  <label><input type="checkbox" /> On sale</label>\n</div>',
          },
          {
            type: "p",
            text: "That one attribute buys you a lot:",
          },
          {
            type: "list",
            items: [
              "**Top layer rendering.** The popover paints above everything, regardless of `z-index` or `overflow: hidden` ancestors. No portal needed.",
              "**Light dismiss.** The default `popover=\"auto\"` closes on Escape or on a click outside. `popover=\"manual\"` opts out for toast-like UI.",
              "**Toggle without JS.** The same button opens and closes it. `popovertargetaction=\"show\"` or `\"hide\"` pins the direction if you want separate buttons.",
              "**Styling hooks.** `:popover-open` matches while it is open, and `::backdrop` styles the layer behind it.",
            ],
          },
          {
            type: "p",
            text: "When you do need JavaScript, the element exposes `showPopover()`, `hidePopover()` and `togglePopover()`, and fires `beforetoggle` and `toggle` events whose `newState` property is either `\"open\"` or `\"closed\"`. That is the whole API surface.",
          },
        ],
      },
      {
        heading: "Anchoring it to the button",
        blocks: [
          {
            type: "p",
            text: "Out of the box a popover appears centered in the viewport - the UA stylesheet gives it `position: fixed; inset: 0; margin: auto`. Fine for a dialog-ish panel, wrong for a dropdown. CSS anchor positioning fixes that with two properties: the trigger declares an `anchor-name`, and the popover tethers to it with `position-anchor` plus a placement via `position-area`:",
          },
          {
            type: "code",
            language: "css",
            code: '#filters-btn {\n  anchor-name: --filters;\n}\n\n#filters {\n  position-anchor: --filters;\n  position-area: block-end span-inline-end;\n  /* reset the UA centering styles */\n  margin: 0;\n  inset: auto;\n  margin-block-start: 6px; /* gap below the button */\n}',
          },
          {
            type: "p",
            text: "`position-area` places the popover on an imaginary 3x3 grid around the anchor. `block-end` means the row below the button; `span-inline-end` aligns the popover with the button's start edge and lets it grow toward the end. For a classic centered tooltip you would use `position-area: block-start` together with `justify-self: anchor-center`.",
          },
          {
            type: "p",
            text: "Two more tools are worth knowing. The `anchor()` function gives coordinate-level control when the grid is not enough - for example `top: anchor(bottom)` pins the popover's top to the button's bottom. And `anchor-size()` lets a dropdown match its trigger's width, a classic select-menu requirement that used to need a ResizeObserver:",
          },
          {
            type: "code",
            language: "css",
            code: '#filters {\n  min-width: anchor-size(width);\n}',
          },
        ],
      },
      {
        heading: "Staying on screen: position-try-fallbacks",
        blocks: [
          {
            type: "p",
            text: "Flipping near the viewport edge is the reason positioning libraries exist. Declaratively, it is one line: list the fallback placements the browser may try when the preferred one overflows.",
          },
          {
            type: "code",
            language: "css",
            code: '#filters {\n  position-area: block-end span-inline-end;\n  position-try-fallbacks: flip-block, flip-inline,\n    flip-block flip-inline;\n}',
          },
          {
            type: "p",
            text: "If the menu would clip below the fold, the browser flips it above the button; if it would clip at the inline edge, it mirrors horizontally; the combined keyword covers corners. The browser re-evaluates on scroll and resize for free. For placements that need more than a mirror image - say, different offsets when flipped - define a named fallback with `@position-try`:",
          },
          {
            type: "code",
            language: "css",
            code: '@position-try --above {\n  position-area: block-start span-inline-end;\n  margin-block-start: 0;\n  margin-block-end: 6px;\n}\n\n#filters {\n  position-try-fallbacks: --above;\n}',
          },
        ],
      },
      {
        heading: "Wiring it into React 19",
        blocks: [
          {
            type: "p",
            text: "React 19 supports the popover attributes as regular props - `popover`, `popoverTarget`, `popoverTargetAction` - and exposes the toggle events as `onToggle` and `onBeforeToggle`. Because `anchor-name` must be unique per instance, generate it from `useId` (stripping the colons, which are not valid in CSS identifiers):",
          },
          {
            type: "code",
            language: "jsx",
            code: "import { useId } from 'react';\n\nfunction ActionsMenu({ label, onOpen, children }) {\n  const id = 'menu-' + useId().replace(/:/g, '');\n  const anchorName = '--' + id;\n\n  return (\n    <>\n      <button popoverTarget={id} style={{ anchorName }}>\n        {label}\n      </button>\n      <div\n        id={id}\n        popover=\"auto\"\n        className=\"menu\"\n        style={{ positionAnchor: anchorName }}\n        onToggle={(e) => {\n          if (e.newState === 'open' && onOpen) onOpen();\n        }}\n      >\n        {children}\n      </div>\n    </>\n  );\n}",
          },
          {
            type: "p",
            text: "Note what is *not* here: no `useState` for open/closed, no `createPortal`, no outside-click effect, no positioning hook. The `onToggle` handler receives the native `ToggleEvent`, so `e.newState` tells you which way it went - handy for lazy-loading menu contents or analytics. The inline `style` object works because supporting browsers expose the camelCased `anchorName` and `positionAnchor` properties on `CSSStyleDeclaration`.",
          },
          {
            type: "p",
            text: "The shared stylesheet stays tiny:",
          },
          {
            type: "code",
            language: "css",
            code: ".menu {\n  position-area: block-end span-inline-end;\n  position-try-fallbacks: flip-block;\n  margin: 0;\n  inset: auto;\n  margin-block-start: 4px;\n  border: 1px solid #d0d0d0;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}",
          },
          {
            type: "p",
            text: "One forward-looking note: when a popover is opened via `popovertarget`, newer browsers treat the invoking button as an *implicit anchor*, which lets you drop the explicit names entirely. Support for that shorthand is still uneven, so explicit `anchor-name` remains the portable choice today.",
          },
        ],
      },
      {
        heading: "Progressive enhancement and feature detection",
        blocks: [
          {
            type: "p",
            text: "The two features degrade differently, and that matters for your rollout plan. The Popover API is Baseline 2024 and safe to rely on for evergreen-browser audiences; if you must reach older ones, the `@oddbird/popover-polyfill` package patches it, and you can detect support with a one-liner:",
          },
          {
            type: "code",
            language: "js",
            code: "const supportsPopover = 'popover' in HTMLElement.prototype;\nconst supportsAnchor = CSS.supports('anchor-name', '--a');",
          },
          {
            type: "p",
            text: "Anchor positioning is newer. The good news is that its failure mode is gentle: in a non-supporting browser the popover still opens, still light-dismisses, still sits in the top layer - it just appears centered in the viewport instead of attached to the button. For a filter panel that is often acceptable. Where it is not, scope the anchored layout inside `@supports` and provide a simpler fallback outside it:",
          },
          {
            type: "code",
            language: "css",
            code: "@supports not (anchor-name: --a) {\n  .menu {\n    /* fallback: centered panel with a dimmed backdrop */\n    margin: auto;\n    inset: 0;\n  }\n  .menu::backdrop {\n    background: rgba(0, 0, 0, 0.3);\n  }\n}",
          },
        ],
      },
      {
        heading: "When you still want Floating UI",
        blocks: [
          {
            type: "p",
            text: "This is not a funeral for positioning libraries - yet. Reach for Floating UI when you need any of the following:",
          },
          {
            type: "list",
            items: [
              "**Detached or virtual anchors**, like a context menu at the cursor's coordinates - CSS anchors must be real elements.",
              "**Guaranteed identical behavior in older browsers**, where the CSS fallback story above is not acceptable.",
              "**Middleware-style logic** - arrow elements that track the flip, size clamping with custom math, or placement decisions driven by app state.",
            ],
          },
          {
            type: "p",
            text: "For the everyday cases - tooltips, dropdown menus, select-like panels, hover cards - the platform now does the job with a handful of declarations. Ship the native version, keep the bundle bytes, and let the browser handle the geometry.",
          },
        ],
      },
    ],
  },
  {
    "slug": "migrate-create-react-app-to-vite",
    "title": "Migrating from Create React App to Vite: A Practical 2026 Guide",
    "description": "Create React App is dead and Vite is the default. A step-by-step migration guide: index.html, env vars, proxies, Jest to Vitest, and the gotchas nobody mentions.",
    "datePublished": "2026-08-06",
    "readingMinutes": 8,
    "content": [
      {
        "blocks": [
          {
            "type": "p",
            "text": "Create React App had a great run, but it is over. The project is officially sunsetted, the React docs no longer recommend it, and every month it falls further behind on dependencies you actually care about. Meanwhile Vite has become the default answer — dev servers that start in milliseconds, hot module replacement that feels instant, and a plugin ecosystem that is actively maintained."
          },
          {
            "type": "p",
            "text": "The good news: migrating a typical CRA app to Vite is a half-day job, not a rewrite. I have done this migration on several production apps now, and the steps are almost always the same — as are the four or five gotchas that eat people's afternoons. This guide walks the happy path first, then the gotchas."
          }
        ]
      },
      {
        "heading": "Step 1: Swap the dependencies",
        "blocks": [
          {
            "type": "p",
            "text": "Remove `react-scripts`, add Vite and the React plugin. If you use SWC elsewhere, `@vitejs/plugin-react-swc` is the faster option; the Babel-based `@vitejs/plugin-react` is the safe default if you rely on Babel plugins."
          },
          {
            "type": "code",
            "language": "bash",
            "code": "npm uninstall react-scripts\nnpm install --save-dev vite @vitejs/plugin-react"
          },
          {
            "type": "p",
            "text": "Then replace the scripts in `package.json`:"
          },
          {
            "type": "code",
            "language": "json",
            "code": "{\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"preview\": \"vite preview\"\n  }\n}"
          }
        ]
      },
      {
        "heading": "Step 2: Move index.html and add vite.config.js",
        "blocks": [
          {
            "type": "p",
            "text": "Vite treats `index.html` as the entry point of your app, not a template. Move it from `public/index.html` to the project root, delete every `%PUBLIC_URL%` placeholder (plain absolute paths work), and add a script tag pointing at your entry module."
          },
          {
            "type": "code",
            "language": "html",
            "code": "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"/favicon.ico\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>My App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/src/index.jsx\"></script>\n  </body>\n</html>"
          },
          {
            "type": "p",
            "text": "A minimal `vite.config.js` at the root completes the skeleton:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "import { defineConfig } from \"vite\";\nimport react from \"@vitejs/plugin-react\";\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 3000,\n    open: true,\n  },\n  build: {\n    outDir: \"build\",\n  },\n});"
          },
          {
            "type": "p",
            "text": "Setting `outDir` to `build` keeps your deploy pipeline untouched — CRA wrote to `build/`, and now Vite does too."
          }
        ]
      },
      {
        "heading": "Step 3: Environment variables",
        "blocks": [
          {
            "type": "p",
            "text": "This is the change most likely to break things silently. CRA exposed env vars prefixed with `REACT_APP_` on `process.env`. Vite exposes vars prefixed with `VITE_` on `import.meta.env`. Rename the variables in your `.env` files, then update every usage:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "// Before (CRA)\nconst apiUrl = process.env.REACT_APP_API_URL;\n\n// After (Vite)\nconst apiUrl = import.meta.env.VITE_API_URL;"
          },
          {
            "type": "p",
            "text": "Also note the built-ins moved: `process.env.NODE_ENV` becomes `import.meta.env.MODE`, and the boolean shortcuts `import.meta.env.DEV` and `import.meta.env.PROD` replace the usual equality checks. A project-wide grep for `process.env` is the fastest way to be sure you caught everything — in a Vite app, client code should have zero references to it."
          }
        ]
      },
      {
        "heading": "Step 4: The JSX-in-.js gotcha",
        "blocks": [
          {
            "type": "p",
            "text": "CRA happily compiled JSX inside `.js` files. Vite, by default, only parses JSX in `.jsx` and `.tsx` files — so a legacy codebase full of JSX-bearing `.js` files fails immediately with a cryptic parse error. You have two options, and I strongly recommend the first: rename the files. It is a mechanical change, editors handle the import updates, and future tooling will thank you."
          },
          {
            "type": "code",
            "language": "bash",
            "code": "# Rename every .js file under src that contains JSX\ngrep -rlE \"<[A-Z][A-Za-z]*|<[a-z]+ \" src --include=\"*.js\" | while read f; do\n  git mv \"$f\" \"$(echo \"$f\" | sed s/\\\\.js$/.jsx/)\"\ndone"
          },
          {
            "type": "p",
            "text": "If a bulk rename is genuinely impossible right now, you can configure esbuild to treat `.js` as JSX via the `esbuild.loader` option in `vite.config.js` — but treat that as a temporary bridge, not a destination."
          }
        ]
      },
      {
        "heading": "Step 5: Dev-server proxy",
        "blocks": [
          {
            "type": "p",
            "text": "CRA's `proxy` field in `package.json` does nothing under Vite. The equivalent lives in the server config, and it is more capable — per-path rules, rewrites, and websocket support:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "export default defineConfig({\n  plugins: [react()],\n  server: {\n    proxy: {\n      \"/api\": {\n        target: \"http://localhost:8080\",\n        changeOrigin: true,\n      },\n    },\n  },\n});"
          }
        ]
      },
      {
        "heading": "Step 6: Jest to Vitest",
        "blocks": [
          {
            "type": "p",
            "text": "You can keep Jest running alongside Vite, but you will maintain two toolchains forever. Vitest is API-compatible with the majority of Jest usage — `describe`, `it`, `expect`, module mocking — and reuses your Vite config, so imports and aliases behave identically in tests and app code."
          },
          {
            "type": "code",
            "language": "bash",
            "code": "npm install --save-dev vitest @testing-library/react jsdom"
          },
          {
            "type": "code",
            "language": "js",
            "code": "// vite.config.js additions\nexport default defineConfig({\n  plugins: [react()],\n  test: {\n    environment: \"jsdom\",\n    globals: true,\n    setupFiles: \"./src/setupTests.js\",\n  },\n});"
          },
          {
            "type": "p",
            "text": "With `globals: true`, most CRA test suites pass unmodified. The usual stragglers are tests that mock `process.env` (switch them to `import.meta.env` stubs) and snapshot files, which Vitest stores in a slightly different format the first run regenerates."
          }
        ]
      },
      {
        "heading": "The gotchas that eat afternoons",
        "blocks": [
          {
            "type": "list",
            "items": [
              "SVG imports: CRA's ReactComponent SVG import syntax is CRA-specific. Install `vite-plugin-svgr` to keep importing SVGs as components without touching every call site.",
              "Absolute imports: if `jsconfig.json` gave you imports rooted at `src`, mirror them with a `resolve.alias` entry in `vite.config.js` so both the bundler and your editor agree.",
              "Polyfills: Vite does not shim Node globals in the browser. If a dependency expects `global` or `Buffer`, you need an explicit polyfill plugin — or better, check whether the dependency has a modern replacement.",
              "Browserslist: Vite ignores it. Set the `build.target` option instead if you must support older browsers.",
              "index.html asset links: hashed asset filenames are injected automatically; remove any manual references to static JS or CSS bundles left over from older setups."
            ]
          }
        ]
      },
      {
        "heading": "Was it worth it?",
        "blocks": [
          {
            "type": "p",
            "text": "On the last production app I migrated — roughly 300 components — the dev server went from about 25 seconds to cold-start under CRA to well under a second with Vite, and HMR updates became effectively instantaneous. Production builds got faster too, though less dramatically. But the biggest win is quieter: you are back on a toolchain that is actively maintained, which means React 19 features, new browser targets, and security patches arrive as upgrades instead of workarounds."
          },
          {
            "type": "p",
            "text": "If you are staring at a CRA app in 2026, block out an afternoon, follow the steps above in order, and keep the first commit small: dependencies, index.html, config. Everything after that is find-and-replace with a test suite as your safety net. If React 19 features are your next stop after the migration, my guide to React 19 form actions is a good place to put the new toolchain to work."
          }
        ]
      }
    ]
  },
  {
    "slug": "javascript-using-declarations",
    "title": "JavaScript using Declarations: Deterministic Cleanup Without try/finally Pyramids",
    "description": "Explicit Resource Management brings using and await using to JavaScript. How Symbol.dispose, Symbol.asyncDispose and DisposableStack replace nested try/finally - with real code.",
    "datePublished": "2026-08-08",
    "readingMinutes": 8,
    "content": [
      {
        "blocks": [
          {
            "type": "p",
            "text": "Every JavaScript codebase that touches files, sockets, locks, or observers ends up with the same shape of bug: a resource gets acquired, something throws, and the cleanup never runs. The classical defense is `try/finally`, and it works - right up until you hold three resources at once and your function becomes a staircase of nested `finally` blocks."
          },
          {
            "type": "p",
            "text": "The Explicit Resource Management proposal - the `using` and `await using` declarations, backed by `Symbol.dispose` and `Symbol.asyncDispose` - fixes this at the language level, and it has now advanced through TC39 to the final stage and shipped in current V8-based runtimes. TypeScript has supported it since 5.2, so there is a good chance your toolchain already understands it. This post covers how it works, where it genuinely helps, and the sharp edges to know before you adopt it."
          }
        ]
      },
      {
        "heading": "The problem: cleanup is manual and easy to drop",
        "blocks": [
          {
            "type": "p",
            "text": "Here is the honest version of a function that opens a file handle and a stream in Node and cleans up properly:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "async function processUpload(path) {\n  const handle = await fs.open(path);\n  try {\n    const stream = handle.createReadStream();\n    try {\n      await parse(stream);\n    } finally {\n      stream.destroy();\n    }\n  } finally {\n    await handle.close();\n  }\n}"
          },
          {
            "type": "p",
            "text": "Nothing here is wrong - it is just fragile. Each new resource adds a level of nesting, the acquisition and its cleanup drift further apart, and a refactor that adds an early `return` above the wrong line silently leaks. Linters cannot reliably save you, because they cannot know what counts as a resource."
          }
        ]
      },
      {
        "heading": "using: scope-bound cleanup",
        "blocks": [
          {
            "type": "p",
            "text": "A `using` declaration binds a value to the enclosing block, exactly like `const` - with one addition: when the block exits, for any reason, the runtime calls the value's `[Symbol.dispose]()` method. Normal completion, early `return`, `throw`, `break` - the cleanup runs on all of them, in the same deterministic way `finally` would."
          },
          {
            "type": "code",
            "language": "js",
            "code": "class TempDir {\n  constructor() {\n    this.path = fs.mkdtempSync(os.tmpdir() + \"/job-\");\n  }\n\n  [Symbol.dispose]() {\n    fs.rmSync(this.path, { recursive: true, force: true });\n  }\n}\n\nfunction runJob() {\n  using dir = new TempDir();\n  writeArtifacts(dir.path);\n  // dir is disposed here, even if writeArtifacts throws\n}"
          },
          {
            "type": "p",
            "text": "The mental model: **acquisition and cleanup are declared on the same line**. You can no longer forget the cleanup, because the cleanup is not a separate statement you write - it is a protocol the resource carries with it."
          },
          {
            "type": "p",
            "text": "Two rules follow from the `const`-like semantics. First, `using` bindings cannot be reassigned. Second, the declared value must be either `null`, `undefined`, or an object with a `[Symbol.dispose]` method - anything else throws a `TypeError` at declaration time, not at cleanup time. The `null`/`undefined` allowance is deliberate: it lets you write `using lock = maybeAcquire()` and skip cleanup when acquisition legitimately produced nothing."
          }
        ]
      },
      {
        "heading": "await using: async teardown",
        "blocks": [
          {
            "type": "p",
            "text": "Plenty of real teardown is asynchronous: closing a database connection, flushing a write stream, releasing a distributed lock. For those, `await using` calls `[Symbol.asyncDispose]()` and awaits the result before the block truly exits:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "async function withConnection(url) {\n  await using conn = await connect(url);\n  // conn[Symbol.asyncDispose]() runs when this block exits,\n  // and is awaited before execution continues\n  return await conn.query(\"select 1\");\n}"
          },
          {
            "type": "p",
            "text": "Note the two `await`s do different jobs: the first awaits *acquisition* (an ordinary promise), while the `await` in `await using` is about *disposal*. An `await using` declaration is only legal where `await` itself is legal - async functions and module top level."
          }
        ]
      },
      {
        "heading": "It is not just files: DOM and observer cleanup",
        "blocks": [
          {
            "type": "p",
            "text": "The protocol is just a method name, so anything can opt in - including ad-hoc objects wrapping browser APIs that need `disconnect` or `removeEventListener` calls:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "function trackResize(el, onChange) {\n  const observer = new ResizeObserver(onChange);\n  observer.observe(el);\n  return {\n    observer,\n    [Symbol.dispose]() {\n      observer.disconnect();\n    },\n  };\n}\n\nfunction measureOnce(el) {\n  using tracked = trackResize(el, sync);\n  readLayout(el);\n  // observer.disconnect() has run by the time we return\n}"
          },
          {
            "type": "p",
            "text": "This pattern - return an object that carries its own `[Symbol.dispose]` - is the idiomatic bridge for APIs that predate the proposal. Libraries are increasingly shipping it natively, and in Node, several built-ins (timers, file handles, readline interfaces and more) have been growing disposable support since Node 20, with fresh additions landing through the Node 22 and 24 lines."
          }
        ]
      },
      {
        "heading": "DisposableStack: dynamic and conditional resources",
        "blocks": [
          {
            "type": "p",
            "text": "`using` covers the static case - a fixed set of resources known at write time. When you acquire a variable number of resources, or need to hand a bundle of them across a function boundary, reach for `DisposableStack` (and its async twin `AsyncDisposableStack`):"
          },
          {
            "type": "code",
            "language": "js",
            "code": "function acquireAll(paths) {\n  using stack = new DisposableStack();\n  const handles = paths.map(function (p) {\n    return stack.use(openSync(p));\n  });\n  process(handles);\n  // every handle opened so far is closed on exit,\n  // in reverse order, even if one openSync throws halfway\n}"
          },
          {
            "type": "p",
            "text": "The stack itself is disposable, so a single `using stack` line guards everything pushed onto it. It also has `adopt` for values that do not implement the protocol (you supply the cleanup callback), `defer` for bare cleanup functions with no value, and `move` for transferring ownership out of the current scope - the escape hatch for constructors that acquire resources but want to hand them to the instance on success."
          }
        ]
      },
      {
        "heading": "Semantics worth memorizing",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Disposal runs in **reverse declaration order** - last acquired, first released - matching how dependent resources are typically layered.",
              "Errors thrown *during disposal* do not vanish: if the body also threw, both are packaged into a `SuppressedError`, so the original failure is never silently replaced.",
              "Disposal is scope-based, not function-based: a `using` inside an `if` block or a bare `{ }` block disposes at that block's end, which makes tight resource windows trivial to express.",
              "`using` in a `for...of` loop body disposes at the end of **each iteration** - a common source of pleasant surprise in batch-processing code."
            ]
          },
          {
            "type": "code",
            "language": "js",
            "code": "{\n  using a = makeResource(\"a\");\n  using b = makeResource(\"b\");\n  // on block exit: b is disposed first, then a\n}"
          }
        ]
      },
      {
        "heading": "Support and adoption strategy",
        "blocks": [
          {
            "type": "p",
            "text": "As of mid-2026, `using` and `await using` are supported in current Chrome and Edge, in recent Firefox releases, and in Node from the 24 line onward (V8 shipped the feature to stable in 2025); Safari remains the browser to double-check before relying on native support. For anything older, TypeScript 5.2+ and Babel both transpile the syntax down to `try/finally` - you get the ergonomics today and native execution as targets catch up. Check your actual runtime matrix before shipping unpolyfilled syntax to browsers."
          },
          {
            "type": "p",
            "text": "My adoption advice mirrors what worked for [iterator helpers](/blog/javascript-iterator-helpers) and the [Temporal API](/blog/javascript-temporal-api-practical-guide): start in code you fully control. Wrap your two or three most leak-prone resources - the database handle, the temp directory, the file lock - in `Symbol.dispose`, convert their call sites to `using`, and leave the rest of the codebase alone. The wins concentrate exactly where the `try/finally` pyramids used to live."
          },
          {
            "type": "p",
            "text": "`using` will not change how you write a React component. It absolutely changes how you write scripts, servers, tests and tooling - the code where resources leak in the dark. Declare the cleanup on the acquisition line, and a whole category of bug stops being writable."
          }
        ]
      }
    ]
  },
  {
    "slug": "react-activity-component",
    "title": "React's Activity Component: Hide UI Without Losing State",
    "description": "A practical guide to React 19.2's Activity component: hide tabs, modals and routes without losing state, and pre-render the screens users visit next.",
    "datePublished": "2026-08-08",
    "readingMinutes": 8,
    "content": [
      {
        "blocks": [
          {
            "type": "p",
            "text": "Every React app has a version of this problem. A user fills half a form in one tab, clicks over to another tab to check something, comes back - and the form is empty. The component unmounted, so its state died with it. Historically you had three ways out: accept the data loss, hoist everything into a store or context, or hide the inactive tab with CSS and quietly accept that its effects never stop running."
          },
          {
            "type": "p",
            "text": "React 19.2 ships a first-class answer: the `<Activity>` component, imported straight from `react`. It lets you hide part of the tree while React preserves its state and DOM - and, crucially, unmounts its effects while it is hidden. In this post we will build a tab switcher that remembers everything, look closely at what happens to effects, and use hidden activities to pre-render screens the user is about to visit."
          }
        ]
      },
      {
        "heading": "The Two Bad Options Activity Replaces",
        "blocks": [
          {
            "type": "p",
            "text": "Before 19.2, hiding a subtree meant choosing between two flavors of wrong:"
          },
          {
            "type": "code",
            "language": "jsx",
            "code": "// Option A: conditional render - state is destroyed on every switch\n{tab === \"search\" ? <SearchTab /> : <HomeTab />}\n\n// Option B: CSS hiding - state survives, but the component stays fully live\n<div style={{ display: tab === \"search\" ? \"block\" : \"none\" }}>\n  <SearchTab />\n</div>"
          },
          {
            "type": "p",
            "text": "Option A is the default and it throws away everything: input values, scroll positions, expanded rows, in-flight `useState`. Option B keeps state, but the hidden component remains a fully active citizen of your app. Its subscriptions keep firing, its intervals keep ticking, its re-renders compete at full priority with the tab the user is actually looking at. Multiply that by four or five tabs and the hidden parts of your app can cost more than the visible one."
          }
        ]
      },
      {
        "heading": "What Activity Actually Does",
        "blocks": [
          {
            "type": "p",
            "text": "`<Activity>` wraps a subtree and takes a single `mode` prop with two values, `\"visible\"` and `\"hidden\"`:"
          },
          {
            "type": "code",
            "language": "jsx",
            "code": "import { Activity, useState } from \"react\";\n\nfunction App() {\n  const [tab, setTab] = useState(\"home\");\n\n  return (\n    <>\n      <TabBar active={tab} onChange={setTab} />\n\n      <Activity mode={tab === \"home\" ? \"visible\" : \"hidden\"}>\n        <HomeTab />\n      </Activity>\n      <Activity mode={tab === \"search\" ? \"visible\" : \"hidden\"}>\n        <SearchTab />\n      </Activity>\n    </>\n  );\n}"
          },
          {
            "type": "p",
            "text": "Notice the shape: both tabs are always in the JSX. You never conditionally render the `<Activity>` itself - you flip its `mode`. What each mode means:"
          },
          {
            "type": "list",
            "items": [
              "**visible** - children are shown, effects are mounted, updates render normally.",
              "**hidden** - children are visually hidden but stay in the DOM, component state is preserved, effects are *unmounted* (their cleanup functions run), and any updates inside the hidden tree are deferred until React has nothing more urgent to do."
            ]
          },
          {
            "type": "p",
            "text": "That last combination is the whole trick. You get the state preservation of CSS hiding with the resource discipline of unmounting - without either of their downsides."
          }
        ]
      },
      {
        "heading": "A Tab Switcher That Remembers Everything",
        "blocks": [
          {
            "type": "p",
            "text": "Here is a search tab with local state and a fetch effect. No store, no context, no lifting state up:"
          },
          {
            "type": "code",
            "language": "jsx",
            "code": "import { useEffect, useState } from \"react\";\n\nfunction SearchTab() {\n  const [query, setQuery] = useState(\"\");\n  const [results, setResults] = useState([]);\n\n  useEffect(() => {\n    if (!query) return;\n    const controller = new AbortController();\n    const url = \"/api/search?q=\" + encodeURIComponent(query);\n\n    fetch(url, { signal: controller.signal })\n      .then((res) => res.json())\n      .then(setResults)\n      .catch(() => {});\n\n    return () => controller.abort();\n  }, [query]);\n\n  return (\n    <div>\n      <input\n        value={query}\n        onChange={(e) => setQuery(e.target.value)}\n        placeholder=\"Search products\"\n      />\n      <ResultList results={results} />\n    </div>\n  );\n}"
          },
          {
            "type": "p",
            "text": "Wrapped in an `<Activity>` from the previous example, the behavior is exactly what users expect. Type a query, switch to Home, switch back: the input still holds the query, the results are still on screen, the scroll position is intact. When the tab was hidden, the effect's cleanup ran and aborted any in-flight request. When it became visible again, the effect re-ran and refetched with the preserved `query` - so the results are not just remembered, they are fresh."
          }
        ]
      },
      {
        "heading": "Effects Unmount When Hidden - And That Is the Point",
        "blocks": [
          {
            "type": "p",
            "text": "This is the part of the API people trip over, so it is worth staring at directly. Hiding an activity runs your effect cleanups, exactly as if the component had unmounted. Showing it again re-runs the effect setups. State, refs and DOM survive the whole round trip."
          },
          {
            "type": "code",
            "language": "jsx",
            "code": "function LivePrices() {\n  const [prices, setPrices] = useState({});\n\n  useEffect(() => {\n    console.log(\"subscribing\");\n    const socket = new WebSocket(\"wss://example.com/prices\");\n    socket.onmessage = (event) => {\n      setPrices(JSON.parse(event.data));\n    };\n    return () => {\n      console.log(\"unsubscribing\");\n      socket.close();\n    };\n  }, []);\n\n  return <PriceTable prices={prices} />;\n}"
          },
          {
            "type": "p",
            "text": "Put `LivePrices` in a hidden activity and the console shows *unsubscribing*: the socket closes, the browser stops doing work for a screen nobody can see. Reveal it and *subscribing* logs again, the socket reconnects, and - because `prices` was preserved - the table renders the last known data instantly while fresh data streams in. If your effects have symmetric setup and cleanup (which the `StrictMode` double-invoke has been pushing you towards for years), Activity rewards you for free."
          },
          {
            "type": "p",
            "text": "Two things to check in your own code before adopting it:"
          },
          {
            "type": "list",
            "items": [
              "Effects that fire one-shot side effects on mount - analytics page views, autofocus, `open` calls - will fire again every time the activity becomes visible. Guard them with a ref if once-ever really means once-ever.",
              "State updates that happen while a tree is hidden are processed at low priority. Do not build logic that depends on a hidden component re-rendering promptly."
            ]
          }
        ]
      },
      {
        "heading": "Pre-rendering the Screen the User Visits Next",
        "blocks": [
          {
            "type": "p",
            "text": "The second use case flips the feature around. Instead of hiding where the user *was*, you can pre-render where they are *going*. A hidden activity renders at lower priority than everything visible, so React fills it in when there is idle time:"
          },
          {
            "type": "code",
            "language": "jsx",
            "code": "function ProductPage({ productId, nextProductId }) {\n  return (\n    <>\n      <Activity mode=\"visible\">\n        <Product id={productId} />\n      </Activity>\n\n      {nextProductId != null && (\n        <Activity mode=\"hidden\">\n          <Product id={nextProductId} />\n        </Activity>\n      )}\n    </>\n  );\n}"
          },
          {
            "type": "p",
            "text": "When the user clicks through to the next product, the tree is already built - the navigation is a mode flip instead of a cold mount. One important caveat: because effects do not run while hidden, data fetching that lives in `useEffect` will *not* be warmed up by this pattern. Pre-rendering pays off for render-heavy trees, and for data layers that fetch during render through Suspense-enabled libraries. If all your fetching is effect-based, you are pre-building the skeleton, not the data."
          }
        ]
      },
      {
        "heading": "When to Reach for It - and When Not To",
        "blocks": [
          {
            "type": "p",
            "text": "Good fits are anywhere users bounce between stateful views:"
          },
          {
            "type": "list",
            "items": [
              "Tab bars and segmented controls where each tab has forms, filters or scroll state.",
              "Multi-step wizards where *Back* should restore the previous step exactly as the user left it.",
              "Master-detail layouts where closing a detail pane should not forget it.",
              "List-to-detail navigation where returning to the list should keep its scroll position and expanded state."
            ]
          },
          {
            "type": "p",
            "text": "The trade-off is memory. A hidden activity keeps its entire component tree and DOM alive, so wrapping an unbounded number of heavy screens is a leak with extra steps. Keep it to a handful of activities, and prefer hiding the small stateful core of a screen over hiding the whole page when you can."
          },
          {
            "type": "p",
            "text": "You need `react` and `react-dom` at 19.2 or later - `Activity` is a stable export there, no experimental channel required. Like the [form Actions that landed in 19](/blog/react-19-form-actions), it is one of those APIs that deletes code you have been writing forever: every hand-rolled keep-alive wrapper, every store field that exists only because unmounting forgets. Start with your most complained-about tab switcher, wrap each tab in an `<Activity>`, and check your effect cleanups. That is the entire migration."
          }
        ]
      }
    ]
  },
  {
    slug: "building-mcps-typescript-mcp-server-guide",
    title: "Building MCPs: A Practical Guide to Your First MCP Server in TypeScript",
    description:
      "Building MCPs demystified: what an MCP server actually is, how to write one in TypeScript with the official SDK, wire it into Claude, test it, and avoid the classic stdio mistakes.",
    datePublished: "2026-08-09",
    readingMinutes: 9,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every AI assistant conversation about your own systems ends the same way: the model would love to help, but it cannot see your database, your internal API, or your ticket queue. The Model Context Protocol (MCP) is the fix that stuck. It gives models a standard way to discover and call tools you expose - and it has quietly become the integration layer for Claude, IDE agents, and a fast-growing catalogue of servers.",
          },
          {
            type: "p",
            text: "This post is the guide I wish I had when I started building MCPs: what a server actually consists of, a complete working example in TypeScript, how to plug it into a client, and the handful of mistakes that cost every first-time author an afternoon.",
          },
        ],
      },
      {
        heading: "What an MCP server actually is",
        blocks: [
          {
            type: "p",
            text: "Strip away the hype and an MCP server is a small program that answers a fixed set of JSON-RPC messages. A client (Claude Code, Claude Desktop, an IDE, your own agent) connects to it over a transport, asks what can you do?, and gets back declared capabilities in three flavors:",
          },
          {
            type: "list",
            items: [
              "Tools - functions the model may call, each with a name, description, and a typed input schema. This is the workhorse: `search_orders`, `create_ticket`, `run_query`.",
              "Resources - read-only data the client can load as context: files, records, docs.",
              "Prompts - reusable prompt templates the server offers to the client.",
            ],
          },
          {
            type: "p",
            text: "The model never imports your code. It sees tool names, descriptions and schemas - and decides when to call them. Your descriptions are effectively UX copy for a robot: write them the way you would explain the tool to a new teammate, because that text is all the model has.",
          },
        ],
      },
      {
        heading: "Setting up the project",
        blocks: [
          {
            type: "p",
            text: "You need Node 18+ and two dependencies: the official SDK and zod for schemas.",
          },
          {
            type: "code",
            language: "bash",
            code: `mkdir orders-mcp && cd orders-mcp
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D typescript tsx @types/node
npx tsc --init --target es2022 --module nodenext`,
          },
          {
            type: "p",
            text: "One package.json detail matters: MCP servers launched over stdio are plain executables, so add a build that produces a runnable file, and mark the project as ESM with a type field set to module.",
          },
        ],
      },
      {
        heading: "A complete server in sixty lines",
        blocks: [
          {
            type: "p",
            text: "Here is a real, runnable server exposing two tools over stdio. It pretends to wrap an orders API; swap the internals for your own fetch calls and it becomes a production integration.",
          },
          {
            type: "code",
            language: "ts",
            code: `// src/server.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "orders-mcp",
  version: "1.0.0",
});

const ORDERS = [
  { id: "ord_1", customer: "Meena", status: "shipped", total: 4200 },
  { id: "ord_2", customer: "Arjun", status: "pending", total: 1150 },
];

server.registerTool(
  "search_orders",
  {
    title: "Search orders",
    description:
      "Search customer orders by status. Returns id, customer, status and total for each match.",
    inputSchema: {
      status: z.enum(["pending", "shipped", "cancelled"]),
    },
  },
  async ({ status }) => {
    const hits = ORDERS.filter((o) => o.status === status);
    return {
      content: [{ type: "text", text: JSON.stringify(hits, null, 2) }],
    };
  }
);

server.registerTool(
  "get_order",
  {
    title: "Get one order",
    description: "Fetch a single order by its id, e.g. ord_1.",
    inputSchema: { id: z.string() },
  },
  async ({ id }) => {
    const order = ORDERS.find((o) => o.id === id);
    if (!order) {
      return {
        content: [{ type: "text", text: "No order with id " + id }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(order, null, 2) }],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("orders-mcp running on stdio");`,
          },
          {
            type: "p",
            text: "Three things to notice. Tool results are a content array, not a bare return value - text is the common case. Errors you want the model to see and recover from go back as normal results with `isError: true`, not as thrown exceptions. And the startup log goes to `console.error`, which brings us to the mistake everyone makes exactly once.",
          },
        ],
      },
      {
        heading: "The stdio rule: stdout belongs to the protocol",
        blocks: [
          {
            type: "p",
            text: "Over the stdio transport, your process talks JSON-RPC on stdout. That stream is sacred. A single stray `console.log` - yours, or a dependency's - injects garbage between protocol frames, and the client sees a server that connects and then mysteriously dies.",
          },
          {
            type: "list",
            items: [
              "Log to stderr with `console.error`; clients forward it to their debug logs.",
              "Audit dependencies that print banners or progress bars to stdout.",
              "If you must use a logging library, configure its destination explicitly.",
            ],
          },
        ],
      },
      {
        heading: "Wiring it into Claude Code and testing it",
        blocks: [
          {
            type: "p",
            text: "Clients launch stdio servers themselves - you register the command, not a URL. For Claude Code it is one line in a terminal:",
          },
          {
            type: "code",
            language: "bash",
            code: `claude mcp add orders -- npx tsx /absolute/path/to/src/server.ts`,
          },
          {
            type: "p",
            text: "For Claude Desktop, the equivalent JSON entry goes in its config file under mcpServers, with command and args fields. Restart the client and ask it something a tool can answer - list the pending orders - and watch it pick `search_orders` unprompted.",
          },
          {
            type: "p",
            text: "For debugging without a full client, the MCP Inspector gives you a web UI that connects to your server, lists its tools, and lets you invoke them by hand:",
          },
          {
            type: "code",
            language: "bash",
            code: `npx @modelcontextprotocol/inspector npx tsx src/server.ts`,
          },
        ],
      },
      {
        heading: "Design notes from the trenches",
        blocks: [
          {
            type: "p",
            text: "Getting a server running is a morning's work. Making one that a model uses well is the actual craft - the part of building MCPs where an architect's judgement earns its keep.",
          },
          {
            type: "list",
            items: [
              "Fewer, task-shaped tools beat an endpoint-per-tool mirror of your REST API. The model reasons better over `find_customer_orders` than over four chained CRUD calls.",
              "Schemas are guardrails: constrain with enums and descriptions so invalid calls are impossible rather than merely discouraged.",
              "Return compact, structured text. Ten thousand tokens of raw JSON per call will drown the model's context; filter and summarize server-side.",
              "Treat every tool as an attack surface: the model chooses the arguments, so validate and scope permissions exactly as you would for an untrusted caller.",
              "Version from day one - clients cache capabilities, and a renamed tool is a breaking change.",
            ],
          },
        ],
      },
      {
        heading: "Beyond stdio: serving MCPs over HTTP",
        blocks: [
          {
            type: "p",
            text: "Stdio is perfect for local, personal tools. The moment a server needs to be shared - one deployment, many users, real auth - you switch the transport to Streamable HTTP, the protocol's remote transport. The SDK ships a server class for it, your tool code stays identical, and the server becomes an ordinary web service you can put behind normal infrastructure. That symmetry is MCP's best property: the integration you prototype on your laptop over stdio is the same code you deploy for your whole team.",
          },
          {
            type: "p",
            text: "Start small: wrap one internal API you use daily, register it with two tools, and live with it for a week. You will learn more about tool design from watching a model actually use your server than from any spec - and once the first one clicks, you will find yourself building MCPs for everything.",
          },
        ],
      },
    ],
  },
  {
    slug: "mcp-architecture-explained",
    title:
      "MCP Architecture Explained: Hosts, Clients, Servers, and the 2026 Spec",
    description:
      "How the Model Context Protocol actually works — hosts, clients, servers, transports, and primitives — plus what the 2026 spec changes for anyone building MCPs.",
    datePublished: "2026-08-10",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "The Model Context Protocol has gone from an Anthropic announcement to the default way AI applications talk to external tools, with OpenAI, Google DeepMind and Microsoft all adopting it and official SDKs in TypeScript, Python, C#, Java and Swift. Most tutorials jump straight to writing a server. This post does the opposite: it explains the architecture — who talks to whom, over what, and why the protocol is shaped the way it is — because once the architecture clicks, every MCP API feels obvious instead of arbitrary.",
          },
          {
            type: "p",
            text: "If you want the hands-on companion, I have a full walkthrough of building a TypeScript MCP server on this blog; this article is the map that guide assumes.",
          },
        ],
      },
      {
        heading: "The three roles: host, client, server",
        blocks: [
          {
            type: "p",
            text: "MCP is a client-server protocol built on JSON-RPC 2.0, with three distinct roles that people constantly conflate:",
          },
          {
            type: "list",
            items: [
              "The **host** is the AI application the user actually touches — Claude Desktop, an IDE like Cursor, a chat product you built. The host owns the model loop, decides which servers to connect, and enforces permissions.",
              "The **client** lives inside the host. It speaks the protocol: one client maintains one stateful connection to exactly one server. A host that connects to five servers runs five clients.",
              "The **server** exposes capabilities — a database, a filesystem, an internal API — as structured primitives the model can use. Servers know nothing about the model; they answer protocol requests.",
            ],
          },
          {
            type: "p",
            text: "This separation is the protocol's core design bet. Servers stay simple because the hard problems — model prompting, tool-call orchestration, user consent — belong to the host. That is why a weekend-project MCP server can plug into any compliant host and just work.",
          },
        ],
      },
      {
        heading: "The primitives: what a server can offer",
        blocks: [
          {
            type: "p",
            text: "Everything a server exposes falls into three primitives, and choosing the right one is most of MCP design:",
          },
          {
            type: "list",
            items: [
              "**Tools** are model-controlled functions — the model decides to call them, with arguments, and gets results back. Anything with side effects or parameters belongs here.",
              "**Resources** are application-controlled data — documents, table schemas, file contents — identified by URI, meant to be read into context rather than executed.",
              "**Prompts** are user-controlled templates — reusable, parameterized instructions the user explicitly invokes, like slash commands.",
            ],
          },
          {
            type: "p",
            text: "The direction of control matters more than the data. A common design mistake is exposing everything as tools; if the model never needs to decide anything, a resource is cheaper and safer. The protocol also defines client-side primitives — sampling lets a server ask the host's model to complete something, roots tell servers which directories they may touch, and elicitation lets a server ask the user a structured question mid-operation.",
          },
        ],
      },
      {
        heading: "Transports: stdio and Streamable HTTP",
        blocks: [
          {
            type: "p",
            text: "The protocol layer is transport-agnostic JSON-RPC; two transports are standard. For local servers, the host spawns the server as a subprocess and exchanges messages over stdin and stdout — this is the stdio transport, and it is why local MCP configs are just a command line. For remote servers, the current standard is Streamable HTTP: a single endpoint accepting POSTed JSON-RPC messages, with optional server-sent events for streaming and server-initiated messages. It replaced the older HTTP-plus-SSE transport, which required a persistent event stream and made servers painful to scale.",
          },
          {
            type: "p",
            text: "A message crossing the wire is plain JSON-RPC. A tool invocation looks like this:",
          },
          {
            type: "code",
            language: "json",
            code: '{\n  "jsonrpc": "2.0",\n  "id": 42,\n  "method": "tools/call",\n  "params": {\n    "name": "search_flights",\n    "arguments": { "from": "BLR", "to": "BER" }\n  }\n}',
          },
          {
            type: "p",
            text: "Every connection starts with an initialize handshake where client and server exchange protocol versions and declare capabilities — a server that does not advertise tools will never receive a tools/call. Capability negotiation is what lets the protocol evolve without breaking older implementations.",
          },
        ],
      },
      {
        heading: "What the 2026 spec changes",
        blocks: [
          {
            type: "p",
            text: "The specification released as 2026-07-28 is the biggest revision since Streamable HTTP, and its headline theme is statelessness. Until now, servers had to maintain per-session state, which made scaling remote MCP servers behind load balancers awkward — a reconnect could land on a replica that had never seen your session. The new revision standardizes a stateless protocol core with defined session creation, resumption and migration, so restarts and scale-out become invisible to clients.",
          },
          {
            type: "list",
            items: [
              "**Stateless core** — remote servers can run as ordinary horizontally-scaled web services.",
              "**Multi round-trip requests** — a single logical operation can span several exchanges, enabling richer interactions like mid-tool elicitation without hacks.",
              "**Header-based routing and cacheable list results** — infrastructure like gateways and registries can route and cache without parsing message bodies.",
              "**A formal extensions framework** — vendors can ship optional capabilities without forking the spec.",
            ],
          },
          {
            type: "p",
            text: "If you built a server against the 2025 revisions, nothing breaks immediately — hosts negotiate versions — but the direction is clear: remote, stateless, and infrastructure-friendly is the future default, and stdio remains the local development path.",
          },
        ],
      },
      {
        heading: "How the pieces fit: one request, end to end",
        blocks: [
          {
            type: "p",
            text: "Trace a single user message through the stack and the architecture stops being abstract. The user asks the host a question. The host assembles context — including tool definitions previously fetched from each connected server via tools/list — and calls the model. The model responds with a tool call. The host routes it to the right client, the client sends tools/call over its transport, the server executes and returns content, and the host feeds that result back into the model loop, which produces the final answer. The model never talks to a server; the server never sees the conversation. Each role sees exactly what it needs and nothing more.",
          },
          {
            type: "p",
            text: "That narrowness is the architecture. MCP is not trying to be an agent framework — it is the boundary layer that lets any model-facing application and any capability-owning service meet at a well-defined seam. Understand the seam, and both sides of it become straightforward to build. When you are ready to build the server side, the TypeScript MCP server guide on this blog picks up exactly where this article ends.",
          },
        ],
      },
    ],
  },
  {
    slug: "react-viewtransition-activity-guide",
    title: "React ViewTransition and Activity: Smooth UI Transitions the React Way",
    description:
      "A practical guide to React's ViewTransition component and the Activity API: animated navigation, shared element transitions, and state-preserving hidden UI — with code.",
    datePublished: "2026-08-11",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Animating between views has always been one of React's weak spots. The browser eventually solved its half of the problem with the View Transitions API — snapshot the old state, snapshot the new one, cross-fade between them — but wiring that imperative API into React's declarative rendering meant fighting the framework. You had to know exactly when React would commit, intercept it, and hope concurrent rendering did not pull the rug out.",
          },
          {
            type: "p",
            text: "React now has first-class answers: the experimental `<ViewTransition>` component, which coordinates browser view transitions with React's render cycle, and `<Activity>`, which lets you hide UI while preserving its state (and pre-render UI the user has not visited yet). Activity shipped as stable in React 19.2; ViewTransition is still experimental, but it has been testable in the canary channel long enough to get a real feel for it. Together they cover the two hardest parts of app-like UI: moving between views smoothly, and not losing state when you do.",
          },
        ],
      },
      {
        heading: "The problem ViewTransition solves",
        blocks: [
          {
            type: "p",
            text: "The browser's View Transitions API is fundamentally a before/after mechanism: you call `document.startViewTransition(callback)`, the browser screenshots the current page, runs your DOM update, screenshots the result, and animates between the two. The catch in React apps is the callback — React updates the DOM on its own schedule, asynchronously, possibly in interruptible chunks. Calling the browser API by hand around a `setState` is a race you eventually lose.",
          },
          {
            type: "p",
            text: "`<ViewTransition>` removes the race by making React the one who calls the browser. You wrap the part of the tree that should animate, and React triggers the browser transition at the right moment in its own commit — but only for updates it considers transitions:",
          },
          {
            type: "list",
            items: [
              "State updates wrapped in `startTransition`",
              "Updates driven by `useDeferredValue`",
              "A `<Suspense>` boundary swapping fallback for content",
            ],
          },
          {
            type: "p",
            text: "That list is the mental model shift: animation is opt-in per update, not per element. Urgent updates (typing, clicking a checkbox) stay instant; transitions (navigation, filtering, tab switches) animate.",
          },
        ],
      },
      {
        heading: "A minimal animated navigation",
        blocks: [
          {
            type: "p",
            text: "Here is the smallest useful example — a two-page app where switching pages cross-fades:",
          },
          {
            type: "code",
            language: "jsx",
            code: "import { unstable_ViewTransition as ViewTransition, useState, startTransition } from \"react\";\n\nfunction App() {\n  const [page, setPage] = useState(\"home\");\n\n  function navigate(next) {\n    // Only transition-wrapped updates animate\n    startTransition(() => setPage(next));\n  }\n\n  return (\n    <ViewTransition>\n      <div className=\"app\">\n        {page === \"home\" ? <Home onOpen={navigate} /> : <Detail onBack={navigate} />}\n      </div>\n    </ViewTransition>\n  );\n}",
          },
          {
            type: "p",
            text: "Remove the `startTransition` and the update still works — it just snaps instantly. That degradation story also covers old browsers: if the View Transitions API is missing, React skips the animation and applies the update normally. You are layering polish on top of a working app, which is exactly how progressive enhancement should feel.",
          },
        ],
      },
      {
        heading: "Shared element transitions",
        blocks: [
          {
            type: "p",
            text: "The feature that makes people gasp in demos is the shared element transition: a thumbnail in a list appears to fly into place as the hero image on a detail page. In React this falls out of a single prop. Give a `<ViewTransition>` a `name`, and when one tree removes a named element while the next tree adds one with the same name, React pairs them and the browser morphs one into the other:",
          },
          {
            type: "code",
            language: "jsx",
            code: "function ListItem({ video }) {\n  return (\n    <ViewTransition name={\"video-\" + video.id}>\n      <img className=\"thumb\" src={video.thumbUrl} alt={video.title} />\n    </ViewTransition>\n  );\n}\n\nfunction DetailHero({ video }) {\n  return (\n    <ViewTransition name={\"video-\" + video.id}>\n      <img className=\"hero\" src={video.fullUrl} alt={video.title} />\n    </ViewTransition>\n  );\n}",
          },
          {
            type: "p",
            text: "Names must be unique on the page at any moment, so derive them from stable ids. For list-to-detail flows this replaces entire animation libraries: no measuring rects, no portals, no FLIP arithmetic.",
          },
        ],
      },
      {
        heading: "Customizing the animation",
        blocks: [
          {
            type: "p",
            text: "By default you get the browser's cross-fade. Two levers change that. First, CSS: view transitions expose pseudo-elements you can target with normal keyframes, and `<ViewTransition>` accepts a `default` prop naming a CSS class whose transition styles apply. Second, `addTransitionType` lets you tag an update with a semantic label — say navigation-forward versus navigation-back — and vary the animation per type:",
          },
          {
            type: "code",
            language: "jsx",
            code: "import { unstable_addTransitionType as addTransitionType } from \"react\";\n\nfunction goBack() {\n  startTransition(() => {\n    addTransitionType(\"nav-back\");\n    setPage(\"home\");\n  });\n}",
          },
          {
            type: "p",
            text: "Combined with a couple of CSS rules keyed off the type, you get the slide-left/slide-right pattern of native mobile navigation in a few dozen lines total.",
          },
        ],
      },
      {
        heading: "Activity: hide UI without killing it",
        blocks: [
          {
            type: "p",
            text: "The second half of the story is what happens to the view you navigated away from. Unmount it and you lose everything — scroll position, half-typed form fields, loaded data. Keep it mounted with `display: none` and you pay for its effects, subscriptions, and timers forever. `<Activity>`, stable since React 19.2, is the missing third option:",
          },
          {
            type: "code",
            language: "jsx",
            code: "import { Activity } from \"react\";\n\nfunction Tabs({ active }) {\n  return (\n    <>\n      <Activity mode={active === \"feed\" ? \"visible\" : \"hidden\"}>\n        <Feed />\n      </Activity>\n      <Activity mode={active === \"profile\" ? \"visible\" : \"hidden\"}>\n        <Profile />\n      </Activity>\n    </>\n  );\n}",
          },
          {
            type: "p",
            text: "A hidden Activity keeps its component state — that half-typed comment survives — but React unmounts its effects, so subscriptions and timers stop running while the tree is offscreen. Flip it back to visible and state is exactly where the user left it, effects re-fire, and the UI appears instantly because the DOM was already there. Hidden activities also render at lower priority, which makes them a cheap way to pre-render the tab a user is likely to open next.",
          },
          {
            type: "p",
            text: "One consequence worth internalizing: your effects must be resilient to unmounting and remounting while state persists. If you have been following the advice React has given since Strict Mode started double-firing effects in development, you are already fine — Activity is the payoff for writing effects with proper cleanup all along.",
          },
        ],
      },
      {
        heading: "Using them together",
        blocks: [
          {
            type: "p",
            text: "The two APIs compose naturally: Activity decides what exists, ViewTransition decides how the change looks. A tab bar where switching tabs slides content while every tab keeps its scroll position is the canonical pairing — wrap each `<Activity>` in a `<ViewTransition>`, drive the active tab with `startTransition`, and both concerns are handled in a screenful of code.",
          },
        ],
      },
      {
        heading: "Should you use them today?",
        blocks: [
          {
            type: "list",
            items: [
              "`<Activity>`: yes. It is stable, the use cases (tabs, wizards, back navigation, pre-rendering) are everywhere, and adopting it is usually a local refactor.",
              "`<ViewTransition>`: in production, only if you can tolerate an experimental API — it lives behind an `unstable_` prefix for a reason and details may still shift. In side projects and app shells you control end-to-end, it is already delightful.",
              "Either way, structure updates with `startTransition` and `useDeferredValue` now — that work improves responsiveness today and is the exact contract ViewTransition hooks into later.",
            ],
          },
          {
            type: "p",
            text: "React spent years telling us how rendering works and leaving how it looks while changing to userland. These two components close most of that gap — and if you have read my earlier posts on React 19 form actions or the React Compiler, the theme is familiar: the framework keeps absorbing the code we used to hand-roll, and the hand-rolled versions were never as good.",
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-signals-tc39-practical-guide",
    title: "JavaScript Signals: A Practical Guide to the TC39 Proposal",
    description:
      "What the TC39 Signals proposal actually gives you: Signal.State, Signal.Computed, and Watchers explained with runnable code, framework context, and honest caveats.",
    datePublished: "2026-08-12",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every major framework has spent the last few years converging on the same idea from different directions. Vue has `ref`, Solid has `createSignal`, Preact ships `@preact/signals`, Angular rebuilt its change detection around `signal()`. Different APIs, same primitive underneath: a value that knows who depends on it, and dependents that update automatically when it changes.",
          },
          {
            type: "p",
            text: "The TC39 Signals proposal is an attempt to move that shared primitive into JavaScript itself, so that reactive state — the part of your app that is pure logic — stops being welded to whichever framework renders it. Framework authors from Angular, Vue, Solid, Preact and others have been collaborating on the design, and an official polyfill exists today. This post walks through what the proposal actually contains, with code you can run now, and closes with the caveats you should know before using it anywhere serious.",
          },
        ],
      },
      {
        heading: "The core API: State and Computed",
        blocks: [
          {
            type: "p",
            text: "The proposal centres on two building blocks. `Signal.State` holds a writable value. `Signal.Computed` derives a value from other signals — and tracks its dependencies automatically, just by running.",
          },
          {
            type: "code",
            language: "js",
            code: "import { Signal } from 'signal-polyfill';\n\nconst counter = new Signal.State(0);\nconst isEven = new Signal.Computed(\n  () => (counter.get() & 1) === 0\n);\nconst parity = new Signal.Computed(\n  () => (isEven.get() ? 'even' : 'odd')\n);\n\nconsole.log(parity.get()); // 'even'\ncounter.set(counter.get() + 1);\nconsole.log(parity.get()); // 'odd'",
          },
          {
            type: "p",
            text: "Notice what is missing: no dependency arrays, no subscribe calls, no teardown. When `parity` runs, it reads `isEven`, which reads `counter` — and that chain of reads *is* the dependency graph. Change `counter`, and both computeds know they are stale. This is the same auto-tracking trick Vue and Solid users have enjoyed for years, and it eliminates the entire class of forgot-to-update-the-dependency-array bugs React developers know too well.",
          },
        ],
      },
      {
        heading: "Signals are lazy — and that matters",
        blocks: [
          {
            type: "p",
            text: "A crucial design decision: computed signals are *pull-based*. Setting `counter` above does not immediately re-run anything. The computation happens only when someone calls `.get()` — and only if a dependency actually changed since last time (results are cached and invalidated, not eagerly recomputed).",
          },
          {
            type: "list",
            items: [
              "Update storms disappear: setting ten states triggers zero recomputations until something reads a computed.",
              "Diamond dependencies resolve cleanly: if two computeds depend on the same state and a third depends on both, it recomputes once, not twice, and never sees an inconsistent glitch state.",
              "Unused branches cost nothing: a computed nobody reads never runs at all.",
            ],
          },
          {
            type: "p",
            text: "Laziness is also why signals compose so well with rendering: a UI framework can batch reads at paint time and skip every intermediate value your state passed through between frames.",
          },
        ],
      },
      {
        heading: "Watchers: the effect layer (for framework authors)",
        blocks: [
          {
            type: "p",
            text: "If computeds never run until read, how do you build an `effect()` that reacts to changes? The proposal deliberately does *not* ship a user-facing effect API. Instead it provides a low-level primitive, `Signal.subtle.Watcher`, that frameworks build effects on top of. The `subtle` namespace is a hint borrowed from `crypto.subtle`: this layer is easy to misuse, and most application code should never touch it.",
          },
          {
            type: "code",
            language: "js",
            code: "import { Signal } from 'signal-polyfill';\n\nlet needsFlush = false;\nconst watcher = new Signal.subtle.Watcher(() => {\n  if (!needsFlush) {\n    needsFlush = true;\n    queueMicrotask(() => {\n      needsFlush = false;\n      for (const s of watcher.getPending()) s.get();\n      watcher.watch(); // re-arm for the next change\n    });\n  }\n});\n\nfunction effect(fn) {\n  const c = new Signal.Computed(() => fn());\n  watcher.watch(c);\n  c.get(); // run once to establish dependencies\n  return () => watcher.unwatch(c);\n}\n\nconst name = new Signal.State('world');\nconst dispose = effect(\n  () => console.log('hello, ' + name.get())\n);\nname.set('signals'); // logs asynchronously: hello, signals",
          },
          {
            type: "p",
            text: "The watcher's callback fires synchronously when a watched signal *might* have changed, but it is forbidden from reading or writing signals itself — you schedule work (here via `queueMicrotask`) and pull values later. That constraint looks annoying and is actually the point: it forces batching, which is what keeps large signal graphs fast and glitch-free.",
          },
        ],
      },
      {
        heading: "Where React fits into this",
        blocks: [
          {
            type: "p",
            text: "React is the notable non-adopter: the React team has been clear that signals do not match React's render model, and there is no plan to expose them as a React primitive. React's own answer to fine-grained update skipping is the compiler — which I covered in my React Compiler adoption guide — plus derived-state patterns inside the existing hooks model.",
          },
          {
            type: "p",
            text: "That does not make standard signals irrelevant to React developers. Shared business logic — a cart, a form engine, a sync layer — written against the standard signal API becomes portable: renderable in React through a small adapter (subscribing a component to signal changes via `useSyncExternalStore`), and natively in Angular, Vue, Solid or Preact when those align their internals with the standard. Write the logic once; let each framework decide how to repaint.",
          },
        ],
      },
      {
        heading: "Honest caveats before you adopt",
        blocks: [
          {
            type: "list",
            items: [
              "It is still a proposal, not a shipped language feature. The API surface has been iterated on in public and may change again before it reaches browsers — treat the polyfill as a preview, not a foundation.",
              "No user-facing effect API means every app needs a helper like the one above, or a small library that provides one. That gap is intentional but easy to trip over.",
              "The polyfill is production-quality code but a moving target; pin your version and read release notes when bumping.",
              "If you live entirely inside one framework today, its native signals (or React's compiler-optimised hooks) remain the pragmatic choice. The standard pays off at the boundaries: shared packages, framework migrations, and logic you want to outlive your current stack.",
            ],
          },
          {
            type: "p",
            text: "My take: the interesting thing about the Signals proposal is not the API — Vue and Solid users will find it almost boring — but the politics. Rival frameworks agreeing on a common reactive core is the ecosystem quietly admitting that state does not belong to the view layer. Learn the primitive now in a side project; the mental model transfers everywhere, whatever happens to the spec text.",
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-set-methods-union-intersection-difference",
    title:
      "JavaScript Set Methods: union, intersection, difference and Friends, Explained",
    description:
      "JavaScript finally has real set operations: union, intersection, difference, symmetricDifference and the subset checks. How each works, the set-like rules, and where they beat array tricks.",
    datePublished: "2026-08-14",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "For most of JavaScript's life, `Set` was a strangely half-finished tool. It gave us uniqueness and fast `has()` lookups, but the moment you wanted an actual set operation — the union of two sets, the items they share, the items in one but not the other — you were back to spreading into arrays and chaining `filter`. Every codebase grew the same three helper functions, and every one of them quietly ran in quadratic time when someone passed arrays instead of sets.",
          },
          {
            type: "p",
            text: "That era is over. The set methods proposal reached ES2025, and the seven new methods — `union`, `intersection`, `difference`, `symmetricDifference`, `isSubsetOf`, `isSupersetOf` and `isDisjointFrom` — are Baseline available: shipped in Chrome 122, Firefox 127 and Safari 17, and available in Node.js 22. This post walks through what each one does, the slightly surprising rules about what you can pass to them, and the places they genuinely simplify real code.",
          },
        ],
      },
      {
        heading: "The four operations that return a new Set",
        blocks: [
          {
            type: "p",
            text: "The first four methods are the classic Venn-diagram operations. Each returns a new `Set` and leaves both inputs untouched:",
          },
          {
            type: "code",
            language: "js",
            code: "const frontend = new Set([\"alice\", \"bala\", \"chen\", \"divya\"]);\nconst oncall = new Set([\"chen\", \"divya\", \"emil\"]);\n\nfrontend.union(oncall);\n// Set { \"alice\", \"bala\", \"chen\", \"divya\", \"emil\" }\n\nfrontend.intersection(oncall);\n// Set { \"chen\", \"divya\" }\n\nfrontend.difference(oncall);\n// Set { \"alice\", \"bala\" }  (in frontend, not oncall)\n\nfrontend.symmetricDifference(oncall);\n// Set { \"alice\", \"bala\", \"emil\" }  (in exactly one of the two)",
          },
          {
            type: "p",
            text: "Two details worth internalizing. First, `difference` is directional: `a.difference(b)` keeps what is unique to `a`, so swapping the receiver changes the answer. Second, `symmetricDifference` is the one people forget exists — it answers \"what changed between these two snapshots\" in a single call, which previously took two filters and a concat.",
          },
          {
            type: "p",
            text: "Order is preserved in a predictable way: the result iterates in the insertion order of the receiver set first, then (for `union` and `symmetricDifference`) the extra items from the argument in its order. Equality is the usual SameValueZero rule sets always used — objects compare by reference, `NaN` equals `NaN`.",
          },
        ],
      },
      {
        heading: "The three boolean checks",
        blocks: [
          {
            type: "p",
            text: "The remaining three methods answer questions you previously wrote as `every` loops:",
          },
          {
            type: "code",
            language: "js",
            code: "const required = new Set([\"read\", \"write\"]);\nconst granted = new Set([\"read\", \"write\", \"admin\"]);\n\nrequired.isSubsetOf(granted);   // true  - every required perm is granted\ngranted.isSupersetOf(required); // true  - same check, other direction\n\nconst weekend = new Set([\"sat\", \"sun\"]);\nconst workdays = new Set([\"mon\", \"tue\", \"wed\"]);\nweekend.isDisjointFrom(workdays); // true - no overlap at all",
          },
          {
            type: "p",
            text: "`isSubsetOf` reads exactly like the permission checks, feature-flag gates and validation rules it replaces. `isDisjointFrom` is the sleeper hit: \"do these two groups share nothing\" is a common invariant — conflicting CSS class groups, mutually exclusive config options, reserved versus user-chosen names — and expressing it directly makes the intent auditable at a glance. Note the edge cases follow real set theory: an empty set is a subset of everything and disjoint from everything, including itself.",
          },
        ],
      },
      {
        heading: "The set-like rule: what you can actually pass in",
        blocks: [
          {
            type: "p",
            text: "Here is the part that surprises people in code review. The argument to these methods does not need to be a `Set` — but it cannot be a plain array either. The spec requires a **set-like**: an object with a numeric `size` property, a `has()` method and a `keys()` method. Passing an array throws a `TypeError`, because arrays have `length` rather than `size` and no `has`.",
          },
          {
            type: "code",
            language: "js",
            code: "const ids = new Set([1, 2, 3]);\n\nids.union([3, 4]);            // TypeError: not set-like\nids.union(new Set([3, 4]));   // Set { 1, 2, 3, 4 }\n\n// Maps are set-like over their keys - this just works:\nconst prices = new Map([[\"apple\", 120], [\"mango\", 90]]);\nnew Set([\"apple\", \"banana\"]).intersection(prices);\n// Set { \"apple\" }",
          },
          {
            type: "p",
            text: "Why so strict? Performance. Because the method can trust `has()` to be a fast membership check, `intersection` can iterate the smaller of the two collections and probe the larger, giving sub-linear behavior that the old spread-and-filter idiom could never achieve. The array restriction is the API nudging you toward the right data structure: if the data is conceptually a set, keep it in a `Set`, and the conversion cost at the boundary is paid once instead of on every operation.",
          },
          {
            type: "p",
            text: "The set-like rule also means you can hand-roll lazy or virtual collections — an object that answers `has()` from a database index, say — and pass it straight into `difference` without materializing it. That is a genuinely new capability, not just sugar.",
          },
        ],
      },
      {
        heading: "Real-world before and after",
        blocks: [
          {
            type: "p",
            text: "A pattern straight from a React codebase: deciding which tag filters to show as \"active but unavailable\" after the result list narrows. The old version is the kind of code that works and still reads badly:",
          },
          {
            type: "code",
            language: "js",
            code: "// Before: array juggling, O(n * m)\nconst unavailable = selectedTags.filter(\n  (t) => !visibleTags.some((v) => v === t)\n);\n\n// After: one directional difference, intent on the surface\nconst unavailable = selectedTags.difference(visibleTags);",
          },
          {
            type: "p",
            text: "And the diff-two-snapshots pattern, which shows up in cache invalidation, subscription management and sync engines alike:",
          },
          {
            type: "code",
            language: "js",
            code: "const prev = new Set(prevDoc.linkedIds);\nconst next = new Set(nextDoc.linkedIds);\n\nconst added = next.difference(prev);\nconst removed = prev.difference(next);\nconst untouched = next.intersection(prev);\n\nif (!added.isDisjointFrom(archivedIds)) {\n  warn(\"linking to archived documents\");\n}",
          },
          {
            type: "p",
            text: "Every line of that maps one-to-one onto how you would describe the logic out loud, which is the whole point. The array equivalents buried the intent under mechanics.",
          },
        ],
      },
      {
        heading: "Performance notes and one honest caveat",
        blocks: [
          {
            type: "p",
            text: "Engines implement these natively, and the practical wins are real: membership probes instead of nested scans, and `intersection` iterating the smaller side. For the common case — two sets of a few hundred to a few hundred thousand items — they comfortably beat the array idioms, and they allocate less garbage than spread-based versions.",
          },
          {
            type: "list",
            items: [
              "Converting an array to a `Set` costs one pass. If you do multiple operations against the same data, convert once and keep the `Set` around.",
              "These methods return new sets rather than mutating - chaining `a.union(b).difference(c)` allocates an intermediate. Fine almost always; worth knowing in hot paths.",
              "There is no `addAll` or in-place variant. If you genuinely need mutation, a plain `for...of` loop with `add()` is still the tool.",
              "For very old targets (Node 20, Safari 16 and below) you still need a polyfill - core-js covers the whole proposal.",
            ],
          },
          {
            type: "p",
            text: "The honest caveat: these are value-identity sets. Two objects with identical contents are still different members, so `difference` on sets of objects compares references, not shapes. For keyed diffing of objects, a `Map` keyed by id — combined with set operations on the id sets, as in the snapshot example above — remains the right pattern.",
          },
        ],
      },
      {
        heading: "Takeaways",
        blocks: [
          {
            type: "list",
            items: [
              "Seven methods, two families: four constructors of new sets (`union`, `intersection`, `difference`, `symmetricDifference`) and three boolean checks (`isSubsetOf`, `isSupersetOf`, `isDisjointFrom`).",
              "Arguments must be set-like (`size`, `has`, `keys`) - arrays throw, Maps work, custom lazy collections are possible.",
              "`difference` is directional; `symmetricDifference` is the built-in \"what changed\" operation.",
              "Baseline since mid-2024 (Chrome 122, Firefox 127, Safari 17, Node 22) - safe to use in new code today.",
              "Reach for them anywhere you wrote spread-plus-filter set logic; keep `Map` for keyed object diffing.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-using-keyword-explicit-resource-management",
    title:
      "JavaScript's using Keyword: Explicit Resource Management, Explained with Real Code",
    description:
      "ES2026's using and await using declarations auto-dispose resources when a scope exits. How Symbol.dispose, DisposableStack and async disposal work in practice.",
    datePublished: "2026-08-15",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every JavaScript codebase has a graveyard of forgotten cleanup: file handles that never close, event listeners that outlive their element, database connections returned to the pool only on the happy path. The language finally has a first-class answer. Explicit Resource Management — the `using` and `await using` declarations — was approved as part of ES2026, and it does for cleanup what `try/finally` always promised but never made ergonomic.",
          },
          {
            type: "p",
            text: "If you have written C#'s `using` or Python's `with`, the idea will feel familiar. A value declared with `using` gets its `[Symbol.dispose]()` method called automatically when the enclosing scope exits — normally, via `return`, or via a thrown exception. No more nested `finally` pyramids, no more cleanup that only runs when nothing goes wrong.",
          },
        ],
      },
      {
        heading: "The problem using solves",
        blocks: [
          {
            type: "p",
            text: "Here is the code we have all written. Two resources, correct cleanup in reverse order, and error handling that does not leak — it takes surprising effort to get right:",
          },
          {
            type: "code",
            language: "js",
            code: "function processFile(path) {\n  const file = openFile(path);\n  try {\n    const lock = acquireLock(file);\n    try {\n      return parse(file.read());\n    } finally {\n      lock.release();\n    }\n  } finally {\n    file.close();\n  }\n}",
          },
          {
            type: "p",
            text: "With explicit resource management, the same guarantees fit in three lines. Resources are disposed in reverse declaration order — the lock releases before the file closes, exactly like the nested version:",
          },
          {
            type: "code",
            language: "js",
            code: "function processFile(path) {\n  using file = openFile(path);\n  using lock = acquireLock(file);\n  return parse(file.read());\n}",
          },
          {
            type: "p",
            text: "When `processFile` returns — or throws anywhere in the middle — both disposers run. If a disposer itself throws while another error is in flight, the errors are combined into a `SuppressedError`, so nothing is silently swallowed.",
          },
        ],
      },
      {
        heading: "Making your own disposables with Symbol.dispose",
        blocks: [
          {
            type: "p",
            text: "A disposable is any object with a `[Symbol.dispose]()` method. That is the whole contract. Wrapping an existing API takes a few lines:",
          },
          {
            type: "code",
            language: "js",
            code: "function openConnection(url) {\n  const conn = pool.acquire(url);\n  return {\n    query: (sql) => conn.query(sql),\n    [Symbol.dispose]() {\n      pool.release(conn);\n    },\n  };\n}\n\nfunction getUserCount() {\n  using db = openConnection(DB_URL);\n  return db.query(\"SELECT COUNT(*) FROM users\");\n} // pool.release runs here, success or failure",
          },
          {
            type: "p",
            text: "Timers and listeners — the classic sources of leaks in long-lived apps — become one-liner factories:",
          },
          {
            type: "code",
            language: "js",
            code: "function onEvent(target, type, handler) {\n  target.addEventListener(type, handler);\n  return {\n    [Symbol.dispose]: () => target.removeEventListener(type, handler),\n  };\n}\n\nfunction trackResizes() {\n  using listener = onEvent(window, \"resize\", reportSize);\n  // ... do work ...\n} // listener removed automatically",
          },
        ],
      },
      {
        heading: "await using for async resources",
        blocks: [
          {
            type: "p",
            text: "Plenty of real cleanup is asynchronous: flushing a write stream, closing a socket gracefully, committing or rolling back a transaction. For those, objects implement `[Symbol.asyncDispose]()` and you declare them with `await using` inside an async function:",
          },
          {
            type: "code",
            language: "js",
            code: "async function transfer(fromId, toId, amount) {\n  await using tx = await db.beginTransaction();\n  await tx.debit(fromId, amount);\n  await tx.credit(toId, amount);\n  tx.commit();\n} // asyncDispose awaits rollback-if-uncommitted here",
          },
          {
            type: "p",
            text: "The `await` in `await using` is a signal to readers: scope exit may suspend while disposal settles. If the transaction object never had `commit` called, its `[Symbol.asyncDispose]()` can roll back — the failure path writes itself.",
          },
        ],
      },
      {
        heading: "DisposableStack: cleanup as a value",
        blocks: [
          {
            type: "p",
            text: "Sometimes scope-based disposal is not enough — you assemble resources in one place and release them somewhere else, or you adopt APIs that only expose a plain close function. The proposal ships two helper classes for exactly this: `DisposableStack` and its async twin `AsyncDisposableStack`.",
          },
          {
            type: "code",
            language: "js",
            code: "function createSession() {\n  using stack = new DisposableStack();\n  const socket = stack.use(openSocket());      // disposable\n  const timer = stack.adopt(\n    setInterval(ping, 30000),\n    (id) => clearInterval(id)                  // plain value + cleanup fn\n  );\n  stack.defer(() => log(\"session closed\"));   // arbitrary callback\n\n  // hand ownership out of this scope:\n  const owned = stack.move();\n  return { socket, [Symbol.dispose]: () => owned.dispose() };\n}",
          },
          {
            type: "p",
            text: "`use` registers a disposable, `adopt` wraps a non-disposable value with a cleanup function, `defer` queues a callback, and `move` transfers everything to a new stack so the original scope no longer owns it. If anything throws halfway through setup, the stack disposes what was already registered — construction becomes transactional for free.",
          },
        ],
      },
      {
        heading: "Where you can use it today",
        blocks: [
          {
            type: "p",
            text: "As of mid-2026 this is not a future feature — it is shipping across the stack:",
          },
          {
            type: "list",
            items: [
              "ECMAScript: Explicit Resource Management is part of ES2026, approved in June 2026.",
              "Node.js: native support from Node 24 (V8 13.6). Node 18.18+ and 20.4+ expose `Symbol.dispose` and `Symbol.asyncDispose`, but do not parse the `using` syntax.",
              "Browsers: Chrome and Edge since around version 134, Safari since 18.3, and recent Firefox releases.",
              "TypeScript: syntax support since 5.2, and it down-compiles `using` for older targets — so most TS codebases can adopt it regardless of runtime.",
              "Node's own APIs are adopting the contract too — for example, timers and several handles now expose `Symbol.dispose`-based cleanup.",
            ],
          },
          {
            type: "p",
            text: "The pragmatic adoption path: if you are on TypeScript 5.2+, start using `using` now and let the compiler handle older targets. If you ship untranspiled JavaScript, gate on Node 24+ or the browser versions above.",
          },
        ],
      },
      {
        heading: "Habits worth changing",
        blocks: [
          {
            type: "p",
            text: "A few closing rules of thumb from converting real code. First, `using` shines at function scope — resist wrapping huge blocks; declare the resource as close to its use as possible, and remember that a bare block gives you a smaller disposal scope for free. Second, return values, not resources: if a function must hand a live resource to its caller, make the return value itself disposable (the `DisposableStack.move` pattern above) so ownership is explicit. Third, do not reach for `using` when a callback API already scopes the lifetime for you — there is no prize for rewriting `array.map`.",
          },
          {
            type: "p",
            text: "Cleanup code is where bugs hide because it is the code nobody reads. Moving it into the declaration — one keyword at the point a resource is born — is the kind of small language change that quietly deletes whole categories of leaks. If you write anything that opens, locks, subscribes or connects, `using` is worth adopting this year, not eventually.",
          },
        ],
      },
    ],
  },
  {
    slug: "react-server-components-practical-mental-model",
    title:
      "React Server Components in 2026: A Practical Mental Model (Finally)",
    description:
      "React Server Components are now the default for new projects — but the mental model still trips people up. What actually runs where, what 'use client' really marks, and where to draw the boundary.",
    datePublished: "2026-08-16",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "React Server Components have crossed the line from conference topic to default: new Next.js projects get them out of the box, other frameworks have shipped their own takes, and a large share of new React code now runs on a server first. Yet in code reviews I still see the same confusions I saw two years ago — `use client` sprinkled like seasoning, data fetched in effects three levels below a server component that could have fetched it, and whole apps opted out of the model because one library complained.",
          },
          {
            type: "p",
            text: "Most of that pain comes from one missing piece: a correct mental model. RSC is not server-side rendering with new branding, and it is not an all-or-nothing architecture. This post is the explanation I wish someone had given me — what actually runs where, what the `use client` directive really marks, and a practical rule for where the boundary belongs.",
          },
        ],
      },
      {
        heading: "The one-sentence model",
        blocks: [
          {
            type: "p",
            text: "A **server component** is a component whose code *never ships to the browser*. It runs on the server (at request time or build time), its output — not its code — is serialized into a compact description of UI, and the browser receives that description plus the JavaScript for only the interactive islands. That is the entire trick: RSC is a *bundle-splitting architecture* disguised as a rendering feature.",
          },
          {
            type: "p",
            text: "Contrast that with classic SSR, which renders HTML on the server *and then ships the full component code anyway* so the client can hydrate it. With RSC, a thousand-line markdown renderer used in a server component costs the browser zero bytes of JavaScript. The heavier your rendering logic, the bigger the win.",
          },
        ],
      },
      {
        heading: "Data fetching without the useEffect dance",
        blocks: [
          {
            type: "p",
            text: "Server components can be `async` functions. That single fact deletes the loading-state choreography an entire generation of React developers learned by heart:",
          },
          {
            type: "code",
            language: "jsx",
            code: `// app/orders/page.jsx — a server component (no directive needed)
import { db } from "../lib/db";
import OrderRow from "./OrderRow";

export default async function OrdersPage() {
  // Runs on the server. Direct DB access. No API route needed.
  const orders = await db.orders.findRecent(50);

  return (
    <table>
      <tbody>
        {orders.map((o) => (
          <OrderRow key={o.id} order={o} />
        ))}
      </tbody>
    </table>
  );
}`,
          },
          {
            type: "p",
            text: "No `useEffect`, no `useState` for loading flags, no client-side waterfall, no API endpoint whose only job was to feed this one page. The component awaits its data, renders once with data present, and streams to the browser. Secrets stay on the server too — this component can read environment variables and query the database directly, because its code never leaves the building.",
          },
        ],
      },
      {
        heading: "What 'use client' actually marks",
        blocks: [
          {
            type: "p",
            text: "The most common misreading is that `use client` marks a component that *renders in the browser*. It really marks an **entry point into the client bundle** — a door between the two worlds. Everything a client component imports comes along with it into the bundle, which is why one careless directive at the top of a layout can drag half your app back to the client.",
          },
          {
            type: "code",
            language: "jsx",
            code: `// AddToCartButton.jsx — needs state and events, so it is client code
"use client";

import { useState } from "react";

export default function AddToCartButton({ productId }) {
  const [pending, setPending] = useState(false);

  async function add() {
    setPending(true);
    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
    setPending(false);
  }

  return (
    <button onClick={add} disabled={pending}>
      {pending ? "Adding..." : "Add to cart"}
    </button>
  );
}`,
          },
          {
            type: "p",
            text: "Rules of thumb that fall out of this: put `use client` on the *smallest leaf that needs it*, never on a page or layout \"just in case\"; and remember that a server component can render client components freely, but a client component can only receive server-rendered UI through props like `children` — it cannot import a server component directly.",
          },
        ],
      },
      {
        heading: "The composition pattern that makes it click",
        blocks: [
          {
            type: "p",
            text: "That last rule sounds restrictive until you see the pattern that resolves it. Interactive shells accept server content as children:",
          },
          {
            type: "code",
            language: "jsx",
            code: `// Tabs.jsx — client shell: owns which tab is active
"use client";

import { useState } from "react";

export default function Tabs({ labels, children }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div role="tablist">
        {labels.map((label, i) => (
          <button key={label} onClick={() => setActive(i)}>
            {label}
          </button>
        ))}
      </div>
      {children[active]}
    </div>
  );
}

// page.jsx — server component composes server content INTO the client shell
import Tabs from "./Tabs";
import SalesReport from "./SalesReport"; // async server component
import TrafficReport from "./TrafficReport"; // async server component

export default function Dashboard() {
  return (
    <Tabs labels={["Sales", "Traffic"]}>
      <SalesReport />
      <TrafficReport />
    </Tabs>
  );
}`,
          },
          {
            type: "p",
            text: "The tab state lives in the browser; the heavy report rendering stays on the server. The client component never *imports* the server components — it just receives their already-rendered output. Once this pattern is in your muscle memory, ninety percent of \"but my whole tree needs to be client!\" objections dissolve.",
          },
        ],
      },
      {
        heading: "What RSC is not",
        blocks: [
          {
            type: "list",
            items: [
              "**It is not SSR.** SSR produces HTML for a faster first paint, then hydrates with the full bundle. RSC removes code from the bundle entirely. The two compose — server components can be SSR'd — but they solve different problems.",
              "**It is not free.** You take on a server (or a build step that acts like one), streaming infrastructure, and a stricter import discipline. Serialization at the boundary is real: props crossing from server to client must be serializable — no functions, no class instances, no Dates pretending to be strings.",
              "**It is not mandatory.** A Vite SPA with TanStack Query remains a perfectly good architecture in 2026, especially for dashboard-style apps behind a login where bundle size matters less than interaction density. RSC earns its complexity on content-heavy, data-backed, publicly-served surfaces.",
            ],
          },
        ],
      },
      {
        heading: "Should you adopt it this year?",
        blocks: [
          {
            type: "p",
            text: "If you start a new Next.js project, you already have — the App Router makes server components the default, and the practical question is only where to place your `use client` boundaries. My advice after two years of writing and reviewing RSC code: default to server, push interactivity to leaves, use the children pattern before reaching for context, and treat every `use client` in a pull request as something that deserves one sentence of justification.",
          },
          {
            type: "p",
            text: "For existing SPAs, migrate a surface, not the app — the marketing pages, the docs, the read-heavy views. That is where the bundle savings are dramatic and the interactivity demands are lowest. And if you have been putting off understanding the model because the discourse was exhausting: fair. But the model itself is small. Code that renders stays on the server; code that *responds* ships to the browser; children are the bridge. Everything else is detail.",
          },
        ],
      },
    ],
  },
  {
    slug: "abortcontroller-abortsignal-practical-guide",
    title:
      "AbortController in Practice: Cancel Fetch, Add Timeouts, and Auto-Clean Event Listeners",
    description:
      "A practical guide to AbortController and AbortSignal — cancelling fetch requests, AbortSignal.timeout and AbortSignal.any, React useEffect cleanup, and one-line event listener removal.",
    datePublished: "2026-08-17",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every frontend codebase eventually grows the same three bugs: a fetch whose response arrives after the user navigated away and clobbers fresh state, a request that hangs forever because the server never answered, and a pile of event listeners that outlive the component that added them. All three have the same modern fix: `AbortController` and its quiet companion `AbortSignal`.",
          },
          {
            type: "p",
            text: "AbortController has been in every browser since 2019, but the ecosystem around it has grown considerably since — `AbortSignal.timeout()`, `AbortSignal.any()`, and signal support in `addEventListener` turn it from a fetch-only tool into a general cancellation primitive. This post walks through the patterns I actually use in production, from the basics to the ones that replace whole cleanup libraries.",
          },
        ],
      },
      {
        heading: "The 30-second refresher",
        blocks: [
          {
            type: "p",
            text: "An `AbortController` gives you two things: a `signal` you hand to async APIs, and an `abort()` method that flips that signal. Anything listening to the signal gets told to stop:",
          },
          {
            type: "code",
            language: "js",
            code: `const controller = new AbortController();

fetch("/api/search?q=react", { signal: controller.signal })
  .then((res) => res.json())
  .then(renderResults)
  .catch((err) => {
    if (err.name === "AbortError") return; // cancelled on purpose
    showError(err);
  });

// later — user typed another character, cancel the stale request
controller.abort();`,
          },
          {
            type: "p",
            text: "Two details people miss. First, an aborted fetch rejects with a `DOMException` named `AbortError` — you almost always want to swallow it, because a cancelled request is not a failure. Second, a controller is single-use: once aborted, it stays aborted. A new request needs a new controller.",
          },
        ],
      },
      {
        heading: "Timeouts without setTimeout: AbortSignal.timeout()",
        blocks: [
          {
            type: "p",
            text: "The classic fetch-with-timeout recipe wired a `setTimeout` to a controller and remembered to clear it. The platform does this for you now:",
          },
          {
            type: "code",
            language: "js",
            code: `async function getUser(id) {
  const res = await fetch("/api/users/" + id, {
    signal: AbortSignal.timeout(8000), // give up after 8s
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}`,
          },
          {
            type: "p",
            text: "One nuance: a timed-out request rejects with a `TimeoutError`, not an `AbortError`. If you branch on error names, handle both. `AbortSignal.timeout()` is supported in all evergreen browsers and in Node 18+, so it is safe to reach for by default.",
          },
        ],
      },
      {
        heading: "User cancellation AND a timeout: AbortSignal.any()",
        blocks: [
          {
            type: "p",
            text: "Real requests often need two cancellation reasons at once: the user navigated away, or the request took too long. `AbortSignal.any()` merges signals the way `Promise.race` merges promises — whichever aborts first wins:",
          },
          {
            type: "code",
            language: "js",
            code: `function search(query, userSignal) {
  const signal = AbortSignal.any([
    userSignal,                 // caller can cancel
    AbortSignal.timeout(5000),  // and we enforce a deadline
  ]);
  return fetch("/api/search?q=" + encodeURIComponent(query), { signal });
}`,
          },
          {
            type: "p",
            text: "Before `AbortSignal.any()` you had to wire listeners between controllers by hand. If you still support older runtimes, that fallback is a dozen lines — but as of 2026, `any()` is available across modern browsers and Node 20+.",
          },
        ],
      },
      {
        heading: "React: cancelling stale effects properly",
        blocks: [
          {
            type: "p",
            text: "The canonical `useEffect` data-fetching bug is a race: the component re-renders with a new prop, two requests are in flight, and the older one resolves last, overwriting good state. An `AbortController` per effect run fixes it cleanly:",
          },
          {
            type: "code",
            language: "jsx",
            code: `function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/users/" + userId, { signal: controller.signal })
      .then((res) => res.json())
      .then(setUser)
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      });

    return () => controller.abort(); // cancel on unmount OR userId change
  }, [userId]);

  return user ? <Card user={user} /> : <Skeleton />;
}`,
          },
          {
            type: "p",
            text: "The cleanup function runs both on unmount and before the effect re-runs, so stale requests are aborted at exactly the right moments with no `isMounted` flags. Libraries like React Query do this internally — but when you fetch by hand, this is the pattern.",
          },
        ],
      },
      {
        heading: "The underrated one: event listeners with a signal",
        blocks: [
          {
            type: "p",
            text: "`addEventListener` accepts a `signal` option, and aborting it removes the listener. This collapses the add-and-remember-to-remove dance into one line of cleanup — especially valuable when you attach many listeners:",
          },
          {
            type: "code",
            language: "js",
            code: `function enableDragging(el) {
  const controller = new AbortController();
  const { signal } = controller;

  el.addEventListener("pointerdown", onDown, { signal });
  window.addEventListener("pointermove", onMove, { signal });
  window.addEventListener("pointerup", onUp, { signal });
  window.addEventListener("keydown", onEscape, { signal });

  return () => controller.abort(); // removes ALL four listeners
}`,
          },
          {
            type: "p",
            text: "No stored handler references, no mismatched `removeEventListener` calls, no leaks when you forget one. In a React effect, returning that single `abort` call cleans up every listener the effect added.",
          },
        ],
      },
      {
        heading: "Making your own functions abortable",
        blocks: [
          {
            type: "p",
            text: "Cancellation is a contract, not magic — your own async utilities can honour signals too. The convention: accept an options object with a `signal`, check it at the start, and listen for it during long waits:",
          },
          {
            type: "code",
            language: "js",
            code: `function sleep(ms, { signal } = {}) {
  return new Promise((resolve, reject) => {
    signal?.throwIfAborted();

    const t = setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(t);
        reject(signal.reason);
      },
      { once: true },
    );
  });
}

// usage: a polling loop that stops the moment the caller aborts
async function poll(url, { signal }) {
  while (true) {
    const res = await fetch(url, { signal });
    if (res.ok) return res.json();
    await sleep(2000, { signal });
  }
}`,
          },
          {
            type: "p",
            text: "`throwIfAborted()` handles the already-cancelled case, and `signal.reason` propagates whatever the aborter passed to `abort(reason)` — so a timeout, a navigation, or a manual cancel all flow through your code the same way.",
          },
        ],
      },
      {
        heading: "Gotchas worth knowing",
        blocks: [
          {
            type: "list",
            items: [
              "A fetch abort cancels the response body stream too — if you already have the `Response` and are reading it, aborting rejects the in-progress `res.json()` as well.",
              "Aborting does not un-send the request. The server may still process it; abort only stops your code from waiting. Idempotency still matters.",
              "Do not share one controller across unrelated requests unless you want them cancelled together — group deliberately.",
              "In tests, `AbortSignal.abort()` (the static, pre-aborted signal) is handy for asserting your functions respect cancellation immediately.",
              "Node supports the same APIs — `fetch`, `setTimeout` from `timers/promises`, and streams all take signals — so these patterns transfer to server code unchanged.",
            ],
          },
          {
            type: "p",
            text: "Cancellation used to be the messy corner of JavaScript async code. With `AbortController` as the shared primitive across fetch, events, streams and your own utilities, it is now one consistent pattern — learn it once, use it everywhere.",
          },
        ],
      },
    ],
  },
  {
    slug: "navigation-api-practical-guide",
    title: "The Navigation API Is Baseline: A Practical Guide to Replacing History Hacks",
    description:
      "The Navigation API now works in Chrome, Edge, Firefox and Safari. How navigation.navigate, intercept() and entries() replace History API hacks in real SPAs — with code.",
    datePublished: "2026-08-18",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "For fifteen years, client-side routing has been built on an API that was never designed for it. The History API gives you `pushState`, `popstate`, and a shrug: it cannot tell you when a navigation is about to happen, cannot distinguish back from forward, cannot intercept a link click, and stores its state in a place that is awkward to read back. Every SPA router — React Router, Vue Router, all of them — is a pile of clever workarounds on top of that shrug.",
          },
          {
            type: "p",
            text: "The Navigation API is the platform's do-over, and as of early 2026 it finally matters for real projects: with Firefox 147 and Safari 26.2 shipping support, it reached Baseline Newly Available in January — meaning every current major browser has it. This guide walks through the API the way you would actually adopt it: intercepting navigations, reading history entries, driving traversal, and the caveats that still matter.",
          },
        ],
      },
      {
        heading: "The mental model: one navigation object, all navigations",
        blocks: [
          {
            type: "p",
            text: "Everything hangs off a new global, `window.navigation`. Where the History API only fired `popstate` for back/forward, `navigation` sees every same-origin navigation in the window: link clicks, form submissions, `location.href` assignments, back/forward gestures, and calls to its own methods. Each one fires a `navigate` event before anything happens — which is the superpower the History API never had.",
          },
          {
            type: "code",
            language: "js",
            code: `navigation.addEventListener("navigate", (event) => {
  // Fires for EVERY same-origin navigation in this window:
  // link clicks, form posts, location.href = ..., back/forward.
  console.log(event.destination.url, event.navigationType);
});`,
          },
          {
            type: "p",
            text: "The event tells you where the navigation is going (`event.destination`), what kind it is (`push`, `replace`, `traverse` or `reload`), whether the user was involved (`userInitiated`), and whether your code is allowed to take over (`canIntercept`).",
          },
        ],
      },
      {
        heading: "intercept(): the router primitive",
        blocks: [
          {
            type: "p",
            text: "Calling `event.intercept()` converts any navigation into a same-document navigation that you fulfil yourself. The URL updates immediately, and you hand the browser a handler promise that represents your rendering work:",
          },
          {
            type: "code",
            language: "js",
            code: `navigation.addEventListener("navigate", (event) => {
  // Let the browser handle what we shouldn't touch.
  if (!event.canIntercept || event.hashChange ||
      event.downloadRequest !== null) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        renderSpinner();
        const data = await fetchArticle(url.pathname);
        renderArticle(data);
      },
    });
  }
});`,
          },
          {
            type: "p",
            text: "Notice what is absent: no `event.preventDefault()` on every anchor, no delegated click listeners checking for modifier keys, no manual `pushState` call, no custom link component. A plain `<a href>` works, middle-click and cmd-click keep their native behaviour automatically, and the browser knows the page is loading — spinners in the tab, `navigation.currentEntry` and accessibility announcements all behave correctly because the browser, not your router, owns the navigation.",
          },
          {
            type: "p",
            text: "The handler promise also gives you lifecycle for free. While it is pending, the browser shows its loading indicator; when it resolves, the `navigatesuccess` event fires; if it rejects, `navigateerror` fires. Centralised error handling for every route transition is a two-line listener instead of per-route try/catch.",
          },
        ],
      },
      {
        heading: "Scroll and focus: the details routers always get wrong",
        blocks: [
          {
            type: "p",
            text: "Hand-rolled routers notoriously break scroll restoration and keyboard focus. The API bakes both in. `intercept()` accepts a `scroll` option — `\"after-transition\"` (default) restores or resets scroll when your handler settles, `\"manual\"` lets you call `event.scroll()` at the exact moment your content is ready:",
          },
          {
            type: "code",
            language: "js",
            code: `event.intercept({
  scroll: "manual",
  async handler() {
    const data = await fetchArticle(url.pathname);
    renderArticle(data);
    event.scroll(); // now that content exists, restore/reset scroll
    await loadComments(); // keep loading after scroll is settled
  },
});`,
          },
          {
            type: "p",
            text: "Focus works the same way via `focusReset: \"after-transition\"` (move focus to the body or `autofocus` element, as a real page load would) or `\"manual\"` when you want to place focus yourself — the accessible default without writing any focus-management code.",
          },
        ],
      },
      {
        heading: "entries(): history you can finally read",
        blocks: [
          {
            type: "p",
            text: "The second half of the API replaces `history.state` guesswork with an inspectable list. `navigation.entries()` returns the session history entries for your origin that this window can traverse to, each with a stable `key`, an `id`, a `url`, and per-entry state via `getState()`:",
          },
          {
            type: "code",
            language: "js",
            code: `const entries = navigation.entries();
const current = navigation.currentEntry;

console.log(current.index, "of", entries.length - 1);

// Per-entry state, structured-clone friendly:
navigation.updateCurrentEntry({
  state: { scrollpos: window.scrollY, selectedTab: "reviews" },
});
const state = navigation.currentEntry.getState();`,
          },
          {
            type: "p",
            text: "Because entries have stable keys, jumping is explicit instead of arithmetic. No more counting how many `history.go(-n)` steps to unwind a modal:",
          },
          {
            type: "code",
            language: "js",
            code: `// Remember where the user was before opening a flow:
const returnKey = navigation.currentEntry.key;

// ...several pushes later, exit the flow in one hop:
navigation.traverseTo(returnKey);`,
          },
          {
            type: "p",
            text: "`navigation.navigate(url)`, `navigation.back()`, `navigation.forward()` and `navigation.reload()` round out the methods — each returns promises that settle when the navigation commits and finishes, so imperative navigation is finally awaitable.",
          },
        ],
      },
      {
        heading: "A tiny but complete SPA router",
        blocks: [
          {
            type: "p",
            text: "Here is the whole pattern together — a genuinely working micro-router in under forty lines, with loading states, error handling, and correct scroll/focus behaviour:",
          },
          {
            type: "code",
            language: "js",
            code: `const routes = {
  "/": renderHome,
  "/pricing": renderPricing,
  "/articles/:slug": renderArticle,
};

function matchRoute(pathname) {
  for (const [pattern, render] of Object.entries(routes)) {
    const rx = new RegExp(
      "^" + pattern.replace(/:[^/]+/g, "([^/]+)") + "$"
    );
    const m = pathname.match(rx);
    if (m) return { render, params: m.slice(1) };
  }
  return null;
}

navigation.addEventListener("navigate", (event) => {
  if (!event.canIntercept || event.hashChange ||
      event.downloadRequest !== null) return;

  const url = new URL(event.destination.url);
  const match = matchRoute(url.pathname);
  if (!match) return; // full page load for unknown routes

  event.intercept({
    async handler() {
      document.body.dataset.loading = "true";
      try {
        await match.render(...match.params);
      } finally {
        delete document.body.dataset.loading;
      }
    },
  });
});

navigation.addEventListener("navigateerror", () => {
  renderErrorPage();
});`,
          },
        ],
      },
      {
        heading: "Caveats before you ship it",
        blocks: [
          {
            type: "list",
            items: [
              "Baseline Newly Available means every current browser, not every user's browser. For public sites, feature-detect with `if (\"navigation\" in window)` and keep a History-API fallback for older Safari and Firefox versions for a while yet.",
              "Safari 26.2 supports the core API but not yet `precommitHandler` — the newer mechanism for deferring the URL change until your handler commits. Treat the URL as updating immediately everywhere and you will be portable.",
              "The API is window-scoped, not tab-scoped: iframes get their own `navigation`, and you cannot observe cross-origin navigations. That is by design and unlikely to change.",
              "`entries()` only exposes same-origin contiguous history — you cannot see or traverse to the other sites a user visited, which is why `traverseTo()` takes keys rather than arbitrary URLs.",
              "Framework routers are adopting the API incrementally under the hood; if you are on React Router or similar, you mostly benefit automatically. Reaching for the raw API makes sense for custom shells, embedded widgets, and the places where a full router is overkill.",
            ],
          },
          {
            type: "p",
            text: "The History API is not going anywhere — the two coexist and stay in sync. But new interception code has no reason to start from `popstate` in 2026. The platform finally has a routing primitive designed for the job, it works everywhere current, and it deletes some of the most fragile code in any SPA. That is about as good as web platform news gets.",
          },
        ],
      },
    ],
  },
  {
    slug: "react-use-hook-promises-context",
    title: "React's use() Hook: Reading Promises and Context the New Way",
    description:
      "React 19's use() reads promises and context right in render — even conditionally. How it works with Suspense and Server Components, plus the caching gotcha.",
    datePublished: "2026-08-19",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "React 19 shipped an API with the shortest name in the framework and some of the most misunderstood semantics: `use()`. It reads a *resource* — a promise or a context — from inside render, and unlike every hook you know, it is allowed inside conditions and loops. That one exception is not an oversight; it is the whole design.",
          },
          {
            type: "p",
            text: "Used well, `use()` deletes a lot of `useEffect`-plus-`useState` data plumbing and makes Suspense feel like a language feature. Used carelessly, it produces a component that suspends forever while looking perfectly innocent. This guide covers both halves: the patterns worth adopting today, and the one gotcha that bites almost everyone once.",
          },
        ],
      },
      {
        heading: "What use() actually is",
        blocks: [
          {
            type: "p",
            text: "`use(resource)` takes either a promise or a context object and returns its value. Two rules define it: it must be called during render (a component or a custom hook — not in event handlers, not in effects), and within render it may be called *conditionally*. That second rule is exactly what `useContext` and friends forbid, and it exists because `use()` does not occupy a slot in the hook list — React resolves it against the resource you pass, not against call order.",
          },
          {
            type: "p",
            text: "When the resource is a pending promise, the component *suspends*: React pauses that subtree, shows the nearest `<Suspense>` fallback, and replays the render when the promise settles. A rejected promise surfaces at the nearest error boundary. In other words, `use()` is the missing bridge between plain promises and the Suspense machinery React has had for years.",
          },
        ],
      },
      {
        heading: "Reading context — finally, conditionally",
        blocks: [
          {
            type: "p",
            text: "The context half is the easy win. `use(Context)` behaves like `useContext(Context)` except you can call it after early returns and inside branches:",
          },
          {
            type: "code",
            language: "jsx",
            code: "import { use } from \"react\";\n\nfunction StatusDot({ live }) {\n  // Early return BEFORE reading context — illegal with useContext,\n  // perfectly fine with use().\n  if (!live) {\n    return null;\n  }\n  const theme = use(ThemeContext);\n  return <span className={theme.dotClass} />;\n}",
          },
          {
            type: "p",
            text: "No more hoisting a context read above a guard clause just to satisfy the rules of hooks, and no more reading context in components that skip it on 90% of renders. For unconditional reads, `useContext` still works and there is no urgency to migrate — new code simply has one less rule to remember.",
          },
        ],
      },
      {
        heading: "Reading promises: the Server Component handshake",
        blocks: [
          {
            type: "p",
            text: "The promise half shines in one specific shape: a Server Component *starts* a fetch and passes the unawaited promise down; a Client Component *unwraps* it with `use()`. The server does not block on the slow data, the client streams it in, and Suspense handles the waiting state:",
          },
          {
            type: "code",
            language: "jsx",
            code: "// page.jsx — Server Component (no \"use client\")\nimport { Suspense } from \"react\";\nimport { Comments } from \"./comments\";\n\nexport default function PostPage({ postId }) {\n  // Kick off the fetch, do NOT await it here.\n  const commentsPromise = fetchComments(postId);\n\n  return (\n    <article>\n      <PostBody postId={postId} />\n      <Suspense fallback={<CommentsSkeleton />}>\n        <Comments commentsPromise={commentsPromise} />\n      </Suspense>\n    </article>\n  );\n}",
          },
          {
            type: "code",
            language: "jsx",
            code: "// comments.jsx — Client Component\n\"use client\";\nimport { use } from \"react\";\n\nexport function Comments({ commentsPromise }) {\n  // Suspends until the promise resolves; Suspense shows the skeleton.\n  const comments = use(commentsPromise);\n\n  return (\n    <ul>\n      {comments.map((c) => (\n        <li key={c.id}>{c.text}</li>\n      ))}\n    </ul>\n  );\n}",
          },
          {
            type: "p",
            text: "Compare that with the classic client-only version: a `useEffect`, two `useState`s, a loading flag, an ignore-stale-response guard. All of it disappears, and the page body renders immediately while comments stream in behind the skeleton.",
          },
          {
            type: "p",
            text: "If you work in Next.js, you have already met this pattern in the framework itself: since Next 15, `params` and `searchParams` are promises, and the documented way for a client page to read them is `use(params)`. The framework is telling you what it expects idiomatic data flow to look like.",
          },
        ],
      },
      {
        heading: "The gotcha: never create the promise in render",
        blocks: [
          {
            type: "p",
            text: "Here is the mistake everyone makes exactly once. Since `use()` accepts a promise, why not fetch right there?",
          },
          {
            type: "code",
            language: "jsx",
            code: "// BROKEN — do not do this\nfunction Profile({ userId }) {\n  const user = use(fetchUser(userId));\n  return <h1>{user.name}</h1>;\n}",
          },
          {
            type: "p",
            text: "Render calls `fetchUser`, which returns a *new* promise. The component suspends. When the promise resolves, React re-renders — and the re-render calls `fetchUser` again, producing another brand-new pending promise. Suspend, resolve, re-render, repeat: an infinite loading state (and in dev, React warns about an uncached promise). `use()` does not memoize anything for you — it needs to see the *same* promise across renders.",
          },
          {
            type: "p",
            text: "The fix is always some form of caching the promise outside render. The Server Component handshake above is one fix (the promise is created once, on the server). On the pure client, keep a cache keyed by your input:",
          },
          {
            type: "code",
            language: "jsx",
            code: "// A tiny promise cache — module scope, survives re-renders\nconst userCache = new Map();\n\nfunction getUser(userId) {\n  if (!userCache.has(userId)) {\n    userCache.set(userId, fetchUser(userId));\n  }\n  return userCache.get(userId);\n}\n\nfunction Profile({ userId }) {\n  const user = use(getUser(userId)); // same promise every render\n  return <h1>{user.name}</h1>;\n}",
          },
          {
            type: "p",
            text: "That Map is deliberately primitive — no invalidation, no deduping across users, no revalidation. The moment you find yourself extending it, you have rediscovered why data libraries exist.",
          },
        ],
      },
      {
        heading: "Errors: rejected promises meet error boundaries",
        blocks: [
          {
            type: "p",
            text: "When a promise passed to `use()` rejects, the error propagates like a thrown render error: the nearest error boundary catches it. So the full production pattern is a Suspense boundary for the pending state and an error boundary for the failure state, wrapped around the same subtree. If you would rather render a fallback value than an error page, catch on the promise before it reaches `use()` — hand the component a promise that resolves to a default.",
          },
        ],
      },
      {
        heading: "What use() does not replace",
        blocks: [
          {
            type: "list",
            items: [
              "React Query / SWR: caching, revalidation, mutations, optimistic updates — `use()` is a reading primitive, not a data layer. The libraries are themselves adopting `use()` under the hood.",
              "`useEffect` for genuine side effects: subscriptions, analytics, imperative APIs. `use()` reads values; it does not run effects.",
              "Form state: submissions belong to actions and `useActionState` — covered in our React 19 form actions guide.",
              "Event-handler data fetching: `use()` cannot be called there. Fetch in the handler, store the promise in state, read it with `use()` on the next render.",
            ],
          },
          {
            type: "p",
            text: "A reasonable adoption rule for 2026: reach for `use()` when a Server Component can start the fetch and a Client Component needs the value, when you need a conditional context read, or when a framework hands you a promise. Keep your data library for everything with a cache lifetime. The two coexist happily — `use()` is the low-level verb the rest of the ecosystem is being rebuilt on.",
          },
        ],
      },
    ],
  },
  {
    slug: "es2026-array-fromasync-promise-try-regexp-escape",
    title:
      "Array.fromAsync, Promise.try and RegExp.escape: Three ES2026 Features Worth Using Today",
    description:
      "A practical guide to the most useful ES2026 additions — Array.fromAsync for collecting async iterables, Promise.try for unifying sync/async calls, and RegExp.escape for safe dynamic regexes.",
    datePublished: "2026-08-20",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Most JavaScript language updates ship one headline feature and a pile of trivia. ES2026 is the opposite: no single blockbuster, but three small utilities — `Array.fromAsync`, `Promise.try` and `RegExp.escape` — that each delete a helper function you have probably written by hand at some point. This post is a practical tour of all three: what they replace, where they shine, and the edge cases worth knowing before you rely on them.",
          },
        ],
      },
      {
        heading: "Array.fromAsync: collect an async iterable without the loop",
        blocks: [
          {
            type: "p",
            text: "`Array.from` has been the workhorse for turning array-likes and iterables into real arrays since ES2015 — but it is strictly synchronous. The moment your data source is an async iterator (paginated APIs, streams, async generators), you fall back to the same ceremony every time: create an empty array, `for await` over the source, push each item.",
          },
          {
            type: "code",
            language: "js",
            code: "// The pattern we have all written a hundred times\nasync function collect(source) {\n  const items = [];\n  for await (const item of source) {\n    items.push(item);\n  }\n  return items;\n}",
          },
          {
            type: "p",
            text: "`Array.fromAsync` is exactly that function, built into the language:",
          },
          {
            type: "code",
            language: "js",
            code: "async function* fetchPages() {\n  let url = \"/api/items?page=1\";\n  while (url) {\n    const res = await fetch(url);\n    const data = await res.json();\n    yield* data.items;\n    url = data.nextPage;\n  }\n}\n\nconst allItems = await Array.fromAsync(fetchPages());",
          },
          {
            type: "p",
            text: "It mirrors `Array.from` closely: it accepts async iterables, plain iterables, and array-likes, and it takes an optional mapping function as the second argument. Two details matter in practice. First, the mapping function may itself be async — each returned promise is awaited before the value lands in the array. Second, items are awaited sequentially, one at a time. That makes `Array.fromAsync` the right tool for ordered consumption of a stream, and the wrong tool for firing off requests in parallel — for parallelism you still want `Promise.all`:",
          },
          {
            type: "code",
            language: "js",
            code: "// Sequential: each fetch waits for the previous one\nconst users = await Array.fromAsync(ids, (id) => fetchUser(id));\n\n// Parallel: all fetches start immediately\nconst usersFast = await Promise.all(ids.map((id) => fetchUser(id)));",
          },
        ],
      },
      {
        heading: "Promise.try: one entry point for sync and async functions",
        blocks: [
          {
            type: "p",
            text: "Suppose you accept a callback that might be synchronous, might be asynchronous, and might throw synchronously. Wrapping it safely has always been awkward. `Promise.resolve(fn())` looks right but is subtly wrong: if `fn` throws synchronously, the exception escapes before `Promise.resolve` ever runs, so your `.catch` never sees it.",
          },
          {
            type: "code",
            language: "js",
            code: "// Buggy: a synchronous throw in fn() is NOT caught\nPromise.resolve(fn()).catch(handleError);\n\n// The old workaround: an immediately-run async wrapper\n(async () => fn())().catch(handleError);",
          },
          {
            type: "p",
            text: "`Promise.try(fn)` closes the gap. It calls `fn` immediately and synchronously; if `fn` returns a value you get a fulfilled promise, if it returns a promise you get that promise's outcome, and if it throws you get a rejected promise. Every failure mode flows into one channel:",
          },
          {
            type: "code",
            language: "js",
            code: "function runStep(step) {\n  return Promise.try(step)\n    .then((result) => log(\"ok\", result))\n    .catch((err) => log(\"failed\", err));\n}\n\nrunStep(() => JSON.parse(rawInput));   // sync, may throw\nrunStep(() => fetch(\"/api/health\"));  // async\nrunStep(() => 42);                      // plain value",
          },
          {
            type: "p",
            text: "The immediate-execution detail is the point: unlike wrapping in `setTimeout` or an `async` IIFE that defers to the microtask queue, `Promise.try` runs the synchronous part of `fn` right away, preserving ordering guarantees while still normalising the result. It also passes extra arguments through — `Promise.try(fn, a, b)` calls `fn(a, b)` — which avoids allocating a closure in hot paths. If you maintain plugin systems, middleware runners, or anything that executes user-supplied callbacks, this is the cleanest contract available.",
          },
        ],
      },
      {
        heading: "RegExp.escape: the utility everyone hand-rolled, finally standard",
        blocks: [
          {
            type: "p",
            text: "Building a regular expression from user input has been a known footgun forever: any character like `.`, `+`, `(` or `?` in the input changes the pattern's meaning, and in the worst case opens the door to pathological backtracking. Every codebase grew its own `escapeRegExp` helper — famously recommended by MDN itself — with subtly different character sets.",
          },
          {
            type: "code",
            language: "js",
            code: "// Before: the hand-rolled helper in every utils file\nfunction escapeRegExp(str) {\n  return str.replace(/[.*+?^$()|[\\]\\\\{}]/g, \"\\\\$&\");\n}\n\n// After: built in\nconst query = \"price (USD)?\";\nconst re = new RegExp(RegExp.escape(query), \"i\");\n\"What is the price (USD)?\".search(re); // matches literally",
          },
          {
            type: "p",
            text: "`RegExp.escape` returns a string in which every syntax character is escaped so the input matches literally. The standard version is more thorough than most homegrown helpers — it also escapes characters that only matter in edge positions, so the result is safe to concatenate into any part of a pattern. Typical uses: highlight-search-term features, converting user glob input, building dynamic word filters. One niche caveat: it escapes aggressively enough that the output is meant for pattern construction, not for display.",
          },
          {
            type: "p",
            text: "One habit worth keeping even with `RegExp.escape`: if you are matching a plain substring with no flags or boundaries, `String.prototype.includes` is still simpler and faster. Reach for the regex only when you need case-insensitivity, boundaries, or alternation.",
          },
        ],
      },
      {
        heading: "Support and adoption strategy",
        blocks: [
          {
            type: "p",
            text: "Where these stand as of August 2026:",
          },
          {
            type: "list",
            items: [
              "`Array.fromAsync` has the widest support of the three — all evergreen browsers and Node.js 22+.",
              "`Promise.try` and `RegExp.escape` are newer: current evergreen browsers and recent Node releases (Node 24 line) ship both. Check your minimum supported runtime before dropping the fallback.",
              "All three are trivially polyfillable — core-js covers them, and each can also be inlined as a five-line fallback if you avoid polyfill dependencies.",
            ],
          },
          {
            type: "p",
            text: "Adoption advice: these are drop-in replacements for helpers you likely already have, so the migration is mechanical — swap the implementation inside your existing `collect`, `tryFn` and `escapeRegExp` utilities first, keep the call sites, and delete the wrappers once your runtime floor allows it. If you enjoyed this kind of incremental-language-win tour, the same philosophy applies to my earlier posts on `iterator helpers` and the new `Set` methods — ES2026 continues exactly that trend: less boilerplate, fewer utils files, no new mental model required.",
          },
        ],
      },
    ],
  },
  {
    slug: "json-modules-import-attributes",
    title: "JSON Modules and Import Attributes: Import JSON Without fetch or a Bundler",
    description: "JSON modules are Baseline: import JSON directly with the ES2025 with { type: 'json' } syntax in every modern browser, Node 22+ and Deno — and when fetch still wins.",
    datePublished: "2026-08-22",
    readingMinutes: 7,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "For fifteen years, reading a JSON file from JavaScript meant one of two workarounds: a **fetch() call** with its async ceremony, or a bundler quietly doing magic at build time. As of this year the platform finally does it natively: **JSON module scripts are Baseline**, supported in current Chrome, Edge, Firefox and Safari, plus Node.js 22+ and Deno — no configuration, no plugin.",
          },
          {
            type: "p",
            text: "The syntax is one line, and the mechanism behind it — **import attributes**, standardised in ES2025 — is worth understanding because it is also the foundation for CSS module scripts and whatever the platform teaches modules to load next.",
          },
          {
            type: "code",
            language: "js",
            code: "import config from './config.json' with { type: 'json' };\n\nconsole.log(config.apiBaseUrl);",
          },
        ],
      },
      {
        heading: "Why the Extra with { type: 'json' } Is Mandatory",
        blocks: [
          {
            type: "p",
            text: "Your first instinct might be to ask why the import statement alone is not enough — the file ends in .json, after all. The answer is security. A plain import executes its target as a script. If your server were ever tricked into serving that path with a JavaScript MIME type — or an attacker controlled the file — a plain import would run it. The attribute makes your intent part of the syntax: the runtime fetches the file as JSON and fails loudly if what arrives is not application/json. Nothing executes on a mismatch.",
          },
          {
            type: "p",
            text: "That is also why this is an attribute rather than a filename convention: the check happens in the module loader, before evaluation, not after.",
          },
        ],
      },
      {
        heading: "The Rules JSON Modules Play By",
        blocks: [
          {
            type: "list",
            items: [
              "**Default export only.** The parsed JSON arrives as the default export. Named imports like `import { version } from ...` do not work — destructure after importing instead.",
              "**Parsed once, shared everywhere.** Like any ES module, a JSON module is fetched and parsed a single time and cached. Every importer shares one object, so treat it as read-only — a mutation in one corner of the app is visible everywhere.",
              "**Static and dynamic both work.** The attribute syntax fits dynamic import() too, which is where it becomes genuinely useful for lazy-loading data.",
              "**assert is dead.** If you saw `import ... assert { type: 'json' }` in older articles, that was the deprecated experimental syntax. Use `with`.",
            ],
          },
          {
            type: "code",
            language: "js",
            code: "const module = await import('./locales/ta.json', {\n  with: { type: 'json' }\n});\n\nconsole.log(module.default.greeting);",
          },
        ],
      },
      {
        heading: "Three Places JSON Modules Beat fetch()",
        blocks: [
          {
            type: "p",
            text: "This is not just aesthetics. The module system gives you things fetch() never did:",
          },
          {
            type: "list",
            items: [
              "**Config and locale files.** A locale bundle pulled in with dynamic import() is cached, deduplicated and versioned along with your code — no cache-busting query strings, no stale translations.",
              "**No async plumbing at startup.** A static JSON import is resolved before your module body runs. Your app config is simply there — no top-level await, no loading state for something that was never really dynamic.",
              "**Bundler-free tooling.** Small scripts, internal dashboards and Node CLIs can read package.json or fixture data without fs.readFile boilerplate and a JSON.parse call.",
            ],
          },
          {
            type: "code",
            language: "js",
            code: "import pkg from './package.json' with { type: 'json' };\n\nconsole.log('Running ' + pkg.name + ' v' + pkg.version);",
          },
        ],
      },
      {
        heading: "Where fetch() Is Still the Right Call",
        blocks: [
          {
            type: "list",
            items: [
              "The data is truly dynamic — API responses, user content, anything that changes between requests.",
              "You need request control — headers, credentials, retries, an AbortSignal.",
              "The payload is huge and optional. A module import is all-or-nothing at load time, while fetch() can stream and can be cancelled.",
            ],
          },
          {
            type: "p",
            text: "The mental model that sticks: **import is for data that ships with your app; fetch is for data that lives outside it.**",
          },
        ],
      },
      {
        heading: "Support and Safe Adoption",
        blocks: [
          {
            type: "p",
            text: "JSON module scripts reached Baseline Newly available this year: current Chrome, Edge, Firefox and Safari support them, as do Node.js 22 and later and Deno. For anything older, recent versions of the major bundlers — Vite, webpack, esbuild, Rollup — parse the with syntax and simply inline the JSON at build time, so the same source degrades gracefully.",
          },
          {
            type: "p",
            text: "TypeScript understands import attributes in recent versions as well, with module set to a modern target, so the syntax type-checks without ceremony.",
          },
          {
            type: "p",
            text: "Baseline features are the good kind of boring: one less workaround to teach, one less dependency to justify. The next time you reach for fetch() to read a static file that ships with your app, remember the platform now has a one-liner for it.",
          },
        ],
      },
    ],
  },
  {
    slug: 'array-fromasync-complete-guide',
    title: 'Array.fromAsync: The Complete Guide to Collecting Async Iterables',
    description:
      'A practical Array.fromAsync guide: how it works, how it differs from Promise.all and for await, mapping with async functions, pagination, and the gotchas.',
    datePublished: '2026-09-08',
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: 'p',
            text:
              'For years, turning an async iterable into a plain array meant writing the same four lines: make an empty array, loop with **for await**, push each value, return the array. `Array.fromAsync()` collapses that ritual into a one-liner. It reached Baseline availability across all major engines and landed in the ES2026 spec, so you can now use it in production without a polyfill in evergreen browsers and current Node.js runtimes.',
          },
          {
            type: 'p',
            text:
              'I touched on it briefly in my [ES2026 roundup](/blog/es2026-array-fromasync-promise-try-regexp-escape), but Array.fromAsync deserves a full guide: it has more surface area than it first appears, and a couple of behaviors that regularly surprise people. This is everything I know about it after using it in real code.',
          },
        ],
      },
      {
        heading: 'The Basics: What Array.fromAsync Does',
        blocks: [
          {
            type: 'p',
            text:
              'Array.fromAsync is the asynchronous sibling of `Array.from`. It accepts an async iterable (or a sync iterable, or an array-like) and returns a **promise of an array**. Every value the source yields is awaited before it lands in the result.',
          },
          {
            type: 'code',
            language: 'javascript',
            code:
              'async function* generateNumbers() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst numbers = await Array.fromAsync(generateNumbers());\nconsole.log(numbers); // [1, 2, 3]',
          },
          {
            type: 'p',
            text:
              'The old way needed a manual accumulator. Same result, more ceremony, one more variable name to invent:',
          },
          {
            type: 'code',
            language: 'javascript',
            code:
              'const numbers = [];\nfor await (const n of generateNumbers()) {\n  numbers.push(n);\n}',
          },
        ],
      },
      {
        heading: 'Array.fromAsync vs Promise.all: Not the Same Thing',
        blocks: [
          {
            type: 'p',
            text:
              'The most common confusion. Both can turn a collection of promises into an array of values, but they schedule work very differently:',
          },
          {
            type: 'list',
            items: [
              '**Promise.all runs concurrently.** It takes promises that already exist — meaning the work has already started — and waits for all of them together.',
              '**Array.fromAsync awaits sequentially.** It pulls one value at a time from the iterable and awaits each before asking for the next. Later work does not begin until earlier work finishes.',
            ],
          },
          {
            type: 'code',
            language: 'javascript',
            code:
              'const tasks = [fetchUser(1), fetchUser(2), fetchUser(3)];\n\n// Concurrent: total time is roughly the slowest single fetch\nconst a = await Promise.all(tasks);\n\n// Sequential awaiting of an async source, one item at a time\nconst b = await Array.fromAsync(userStream());',
          },
          {
            type: 'p',
            text:
              'Neither is better; they answer different questions. Reach for `Promise.all` when you hold an array of independent promises and want maximum concurrency. Reach for `Array.fromAsync` when the source itself is asynchronous — a stream, a paginated API, an async generator — and produces values over time at its own pace. Passing an array of promises to Array.fromAsync works, but it awaits them one by one in order, which is usually not what you want for independent requests.',
          },
        ],
      },
      {
        heading: 'The mapFn Argument Accepts Async Functions',
        blocks: [
          {
            type: 'p',
            text:
              'Like Array.from, the second argument is a mapping function receiving the value and its index — but here the mapping function may itself be async, and its result is awaited before moving on:',
          },
          {
            type: 'code',
            language: 'javascript',
            code:
              'const ids = [101, 102, 103];\n\nconst users = await Array.fromAsync(ids, async (id) => {\n  const res = await fetch(\'/api/users/\' + id);\n  return res.json();\n});',
          },
          {
            type: 'p',
            text:
              'Note what this implies: the three fetches above run **sequentially**, not in parallel. That is sometimes exactly what you want — polite crawling, rate-limited APIs, order-dependent writes — and sometimes a performance bug. If you want the parallel version, map to promises first and use Promise.all.',
          },
        ],
      },
      {
        heading: 'The Killer Use Case: Draining Paginated APIs',
        blocks: [
          {
            type: 'p',
            text:
              'Where Array.fromAsync genuinely shines is paired with an async generator that hides pagination. The generator encapsulates the cursor logic; fromAsync flattens the whole thing into an array:',
          },
          {
            type: 'code',
            language: 'javascript',
            code:
              'async function* allIssues(repo) {\n  let page = 1;\n  while (true) {\n    const res = await fetch(repo + \'/issues?page=\' + page);\n    const items = await res.json();\n    if (items.length === 0) return;\n    yield* items;\n    page += 1;\n  }\n}\n\nconst issues = await Array.fromAsync(allIssues(apiUrl));',
          },
          {
            type: 'p',
            text:
              'The same pattern drains any async source: rows from a database cursor, entries from a ReadableStream, chunks from a file reader, messages from a queue until it closes. If it implements the async iteration protocol, fromAsync can collect it.',
          },
        ],
      },
      {
        heading: 'Gotchas Worth Knowing',
        blocks: [
          {
            type: 'list',
            items: [
              '**It buffers everything.** By definition you get the whole array at the end. For infinite or huge streams, keep the for await loop (or process in batches) — fromAsync on an endless generator simply never resolves.',
              '**First rejection wins.** If the iterable throws or a value rejects mid-way, the returned promise rejects and values collected so far are discarded. There is no partial result, so wrap it in try/catch when sources are flaky.',
              '**Sync iterables of promises are awaited too.** Handy: an ordinary array mixing plain values and promises comes out fully resolved.',
              '**It works on array-likes.** Anything with a length and indexed properties is accepted, mirroring Array.from — useful for legacy DOM-ish objects in async pipelines.',
            ],
          },
        ],
      },
      {
        heading: 'When to Use What: A Cheat Sheet',
        blocks: [
          {
            type: 'list',
            items: [
              'Async generator or stream, want an array: **Array.fromAsync(source)**.',
              'Array of independent promises, want speed: **Promise.all(promises)**.',
              'Async source, but transform each item first: **Array.fromAsync(source, asyncMapFn)** — remembering it is sequential.',
              'Infinite or memory-heavy source: plain **for await**, process as you go.',
              'Need early exit on a condition: **for await** with break — fromAsync always drains to the end.',
            ],
          },
          {
            type: 'p',
            text:
              'Array.fromAsync is one of those small additions — like the [iterator helpers](/blog/javascript-iterator-helpers) and the [new Set methods](/blog/javascript-set-methods-union-intersection-difference) — that removes a private helper function from every codebase you touch. The four-line accumulator loop served us well. It will not be missed.',
          },
        ],
      },
    ],
  },
  {
    slug: "import-defer-lazy-module-evaluation",
    title:
      "import defer: Lazy Module Evaluation in JavaScript and TypeScript 5.9",
    description:
      "How the TC39 import defer proposal delays module evaluation until first use — the semantics, what TypeScript 5.9 does with it, runtime support in Deno and Bun, and where it actually helps startup time.",
    datePublished: "2026-09-09",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every static import in your entry file runs code. Not just loads it — runs it. Import a heavy charting module on line 3 and its top-level initialization executes before your app renders anything, whether or not the user ever opens a chart. The classic fix is dynamic `import()`, but that turns clean synchronous code into async plumbing and pushes awaits into places that never wanted them.",
          },
          {
            type: "p",
            text: "`import defer` is TC39's answer: keep the static import syntax, keep synchronous access, but postpone the expensive part — evaluation — until the moment the module is first used. TypeScript 5.9 ships the syntax, Deno and Bun run it natively today, and Chrome has it behind a flag. Here is how it works and when to reach for it.",
          },
        ],
      },
      {
        heading: "The problem: eager evaluation at startup",
        blocks: [
          {
            type: "p",
            text: "When a module graph loads, JavaScript evaluates every module in it, depth-first, before your entry file's first statement runs. Evaluation means executing all top-level code: building lookup tables, instantiating classes, running side effects. For big dependency trees this is a real, measurable chunk of startup time — and much of it is spent initializing modules for features the user may never touch in this session.",
          },
          {
            type: "code",
            language: "js",
            code: "// analytics.js\nconsole.log(\"analytics init\"); // runs at startup, always\nexport function track(event) { /* ... */ }\n\n// main.js\nimport { track } from \"./analytics.js\";\n// \"analytics init\" has already printed before this line",
          },
          {
            type: "p",
            text: "Dynamic `import()` avoids this, but it is async by design. Sometimes that is exactly right — code-splitting a route, for instance. But for a synchronous utility that is only needed on some code paths, wrapping every call site in `await` is a heavy price for lazy loading.",
          },
        ],
      },
      {
        heading: "What import defer does",
        blocks: [
          {
            type: "p",
            text: "The syntax accepts only a namespace import, and the semantics are precise: the module and its dependencies are still **loaded and parsed** eagerly, but **evaluation** is skipped. The first time you read a property off the deferred namespace, the module (and any of its not-yet-evaluated dependencies) evaluates synchronously, right then.",
          },
          {
            type: "code",
            language: "js",
            code: "import defer * as analytics from \"./analytics.js\";\n\n// nothing has evaluated yet - no \"analytics init\" log\n\nbutton.addEventListener(\"click\", () => {\n  // first property access triggers evaluation, synchronously\n  analytics.track(\"clicked\");\n});",
          },
          {
            type: "list",
            items: [
              "Only `import defer * as ns` is allowed. Named imports like `import defer { track }` are a syntax error — a named binding would have to be readable immediately, which defeats deferral.",
              "Loading is still eager, so errors like a missing file surface at startup, not at first use. Only the execution cost moves.",
              "Evaluation triggers on first property access — including `Object.keys(ns)` or spreading — not on merely holding the namespace object.",
              "Modules that use top-level await cannot be deferred synchronously, so any async subtree is evaluated eagerly; only the synchronous parts wait.",
            ],
          },
        ],
      },
      {
        heading: "TypeScript 5.9: syntax in, transform out",
        blocks: [
          {
            type: "p",
            text: "TypeScript 5.9 added support for `import defer`, with an important caveat: the compiler type-checks it but never downlevels it. There is no emitted helper that fakes deferral — the syntax passes through untouched, so it only works when your runtime or bundler actually implements the semantics. That means module targets of esnext or preserve, and a toolchain that understands the syntax end to end.",
          },
          {
            type: "code",
            language: "ts",
            code: "// tsconfig.json (relevant bits)\n{\n  \"compilerOptions\": {\n    \"module\": \"preserve\",\n    \"target\": \"esnext\"\n  }\n}\n\n// feature.ts\nimport defer * as heavy from \"./heavy-parser.js\";\n\nexport function parseIfNeeded(input: string) {\n  if (!input.startsWith(\"@\")) return null;\n  return heavy.parse(input); // evaluated here, first time only\n}",
          },
          {
            type: "p",
            text: "This mirrors how TypeScript handled other late-stage proposals like `using` declarations: the type system arrives first, the runtime story is delegated to the platforms.",
          },
        ],
      },
      {
        heading: "Where you can run it today",
        blocks: [
          {
            type: "list",
            items: [
              "Deno and Bun ship `import defer` natively — you can use it in server code right now.",
              "Chrome implements it behind a flag; no browser has it on by default yet.",
              "Babel has a transform plugin, and bundler support is arriving unevenly — check your bundler's release notes before adopting it in app code.",
              "The proposal itself (proposal-defer-import-eval) sits at the final stages of TC39 with its design effectively complete, so the semantics above are stable enough to learn.",
            ],
          },
        ],
      },
      {
        heading: "When to use it (and when not to)",
        blocks: [
          {
            type: "p",
            text: "`import defer` shines for synchronous, occasionally-used dependencies with expensive initialization: parsers, formatters, validation engines, SDK clients, anything that builds big tables at module scope. CLI tools and servers see the clearest wins, since startup latency is pure overhead there and the runtimes already support the syntax.",
          },
          {
            type: "p",
            text: "It is the wrong tool when you want to avoid downloading code — deferral skips evaluation, not fetching, so route-level code splitting still belongs to dynamic `import()`. Be careful with modules whose side effects are the point (polyfills, global registrations): deferring those changes program behavior, not just timing. And if a deferred module throws during evaluation, that error now surfaces at first property access, deep inside your app, instead of at startup — worth a deliberate try/catch at the access boundary.",
          },
          {
            type: "p",
            text: "If lazy evaluation is becoming a theme in your codebase, this pairs nicely with the resource-management patterns from the `using` keyword and the streaming patterns in `Array.fromAsync` — different corners of the same idea: pay for work exactly when, and only when, it is needed.",
          },
        ],
      },
    ],
  },
  {
    slug: "hire-an-ai-engineer-mcp-specialist-and-ai-trainer",
    title:
      "Work With Me: AI Engineering, MCP Architecture, AI Enablement and Training",
    description:
      "I build MCP architectures, ship agentic AI in production, and train teams to actually use it. Here is exactly what I do, how engagements run, and how to hire me or book training.",
    datePublished: "2026-09-10",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Most companies I talk to are not short on AI ambition. They are short on the layer between the model and their own systems. They have licences for Claude or Copilot, a few teams running experiments, a proof of concept that impressed everyone in a demo — and almost nothing that a support agent, an ops lead or a product manager uses on a Tuesday afternoon to get real work done.",
          },
          {
            type: "p",
            text: "That gap is what I work on. I am **Vilva Athiban P B**, a Lead AI Engineer at Omio. I single-handedly built the MCP-first backend of Omio.ai, I ship agentic AI in production, and I have taught more than **20,000 developers** across **50+ talks in 7 countries**. This post is the honest version of what I do, who it is for, and how to start — whether you want to *hire* me for an engagement or get your team *trained*.",
          },
        ],
      },
      {
        heading: "The four things I actually get hired for",
        blocks: [
          {
            type: "p",
            text: "Different companies use different words — AI engineer, MCP specialist, AI enablement lead, corporate AI trainer — but the work falls into four buckets.",
          },
          {
            type: "list",
            items: [
              "**MCP architecture.** Not one server and a handshake — a swarm of in-house MCPs, plugins and skills that plug AI into your internal tools, with auth, role-based access and audit logging built in from day one. Delivered in [one month](/services/mcp-architecture), fixed-scope and fixed-price after a discovery call.",
              "**AI engineering and delivery efficiency.** Embedding AI across the software delivery lifecycle so teams ship faster without raising rework — measured against your DORA and developer-experience metrics, not vibes. Details on [that engagement here](/services/ai-engineering-efficiency).",
              "**EU AI Act technical controls.** The engineering half of compliance: logging and traceability, human oversight, transparency and content labelling, evals, and Annex IV documentation tooling — built into your systems, run under your legal team's direction. The [deadline is 2 August 2026](/services/eu-ai-act).",
              "**Training and enablement.** Workshops and hands-on programmes that leave your engineers able to build MCPs, agents and AI-assisted workflows themselves, instead of depending on a vendor forever.",
            ],
          },
        ],
      },
      {
        heading: "Why MCP is the piece most teams are missing",
        blocks: [
          {
            type: "p",
            text: "The Model Context Protocol is a standard way for an AI client — Claude, an IDE, an internal agent — to discover and call tools, read resources and follow prompts exposed by a server you control. In plain terms: it is how you stop pasting context into a chat box and start letting the model talk to your logging stack, your CRM, your warehouse, your ticketing system.",
          },
          {
            type: "p",
            text: "The reason it matters commercially is not elegance, it is **queue removal**. Consider the single most common example I show in discovery calls: a customer service agent has a broken booking. Today they raise a ticket, an engineer eventually greps the logs, and the customer waits. With an MCP wired to your observability tools and scoped to what support is allowed to see, the agent asks the AI and gets the exact failed step and likely root cause in seconds. Now multiply that across ops, product, sales and data.",
          },
          {
            type: "p",
            text: "Prototyping one MCP server is genuinely easy — a weekend, if you are comfortable in TypeScript. I have written the [practical build guide](/blog/building-mcps-typescript-mcp-server-guide) and the [architecture explainer](/blog/mcp-architecture-explained) for exactly that reason. What is hard, and what companies actually pay for, is the governed multi-team version: dozens of servers, non-technical users, live production data, and an audit trail that survives a security review.",
          },
        ],
      },
      {
        heading: "How I work",
        blocks: [
          {
            type: "p",
            text: "A few things are consistent across every engagement, and they are worth stating up front because they filter out bad fits early.",
          },
          {
            type: "list",
            items: [
              "**Fixed scope, fixed price, fixed date.** After a short discovery call you get a number and a deliverables list. No open-ended day-rate drift.",
              "**Your codebase, your infrastructure.** I build inside your systems with your stack and your review process. There is no black box to renew a licence for.",
              "**Handover is a deliverable, not an afterthought.** Every engagement ends with your team able to extend the pattern without me. Documented, demoed, and usually taught in a workshop as part of the work.",
              "**Non-technical teams are first-class users.** The biggest efficiency gains I have measured are rarely in engineering. They are in support, ops and product finally self-serving instead of queuing behind the tech team.",
              "**Security is designed in, not bolted on.** Authentication and authorization, role-based access, audit logging, data isolation, schema validation, failure recovery, plus evals and monitoring so you can trust what agents do on live data.",
            ],
          },
        ],
      },
      {
        heading: "If you want training rather than a build",
        blocks: [
          {
            type: "p",
            text: "Plenty of teams do not need me to build anything — they need their own engineers to stop guessing. Training engagements run as focused, hands-on sessions rather than slide decks, and the most requested ones right now are:",
          },
          {
            type: "list",
            items: [
              "**Building MCP servers in TypeScript** — tools, resources, prompts, transports, auth, testing, and the failure modes nobody warns you about.",
              "**Agentic AI patterns in production** — orchestration, tool design, evals, guardrails, cost control and observability.",
              "**AI in the delivery lifecycle** — how to get real velocity from AI-assisted development without shipping rework.",
              "**AI for non-technical teams** — enabling support, ops and product to use internal AI tooling safely and confidently.",
            ],
          },
          {
            type: "p",
            text: "Formats range from a half-day team session to a multi-week programme, remote or on-site. Past [talks](/talks) and [workshops](/workshop) give a sense of how I teach: practical, code-first, and aimed at people who have to ship on Monday.",
          },
        ],
      },
      {
        heading: "Who this is a good fit for",
        blocks: [
          {
            type: "list",
            items: [
              "Companies with real internal systems — logs, APIs, databases, CRMs, warehouses — and AI that cannot currently reach any of them.",
              "Engineering organisations where AI adoption stalled after the pilot, and leadership wants measurable delivery improvement rather than another tool.",
              "Teams facing the EU AI Act deadline who have the legal analysis but not the technical controls.",
              "Companies that want capability transferred to their own engineers, not a permanent dependency.",
            ],
          },
          {
            type: "p",
            text: "It is a poor fit if you want a chatbot on a marketing site, an unbounded staff-augmentation contract, or someone to sign off on compliance claims — I build the technical controls, your legal and compliance team owns the position.",
          },
        ],
      },
      {
        heading: "How to start",
        blocks: [
          {
            type: "p",
            text: "One [30-minute call](https://cal.com/vilva-athiban/30min) is enough to tell whether there is a project here. Bring the systems you wish your AI could reach and the team that is currently queuing for answers; you will leave with a scoped recommendation either way, and I will say so plainly if the answer is that you do not need me yet.",
          },
          {
            type: "p",
            text: "You can also browse the [full list of services](/services), read the [technical writing](/blog) to see how I think, or reach me directly if you would rather start with an email than a calendar link. For training enquiries, mention team size, current experience level and whether you want remote or on-site — that is usually enough for me to come back with a concrete format and price.",
          },
        ],
      },
    ],
  },
  {
    "slug": "import-json-in-nodejs",
    "title": "Importing JSON in Node.js: require, Import Attributes, and TypeScript",
    "description": "How to import JSON in Node.js in 2026 - require vs import attributes vs fs.readFile, why `with { type: 'json' }` is mandatory, and how to make TypeScript agree with you.",
    "datePublished": "2026-09-11",
    "readingMinutes": 8,
    "content": [
      {
        "blocks": [
          {
            "type": "p",
            "text": "Importing a JSON file used to be the single most boring line in a Node codebase. You wrote `const config = require('./config.json')` and got on with your life. Then ESM arrived, that line stopped working, and a task with no conceptual content at all became something you have to look up."
          },
          {
            "type": "p",
            "text": "The good news is that it has settled. As of Node 22 and later, there is a proper, stable, standards-based way to import JSON in ES modules, and it is a one-liner. The bad news is that the one-liner has a mandatory piece of syntax nobody remembers, TypeScript needs convincing separately, and there is a real trade-off nobody mentions about whether you should be importing JSON at all."
          }
        ]
      },
      {
        "heading": "The short answer",
        "blocks": [
          {
            "type": "p",
            "text": "In an ES module, on Node 22 or newer:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "import config from './config.json' with { type: 'json' }\n\nconsole.log(config.name)"
          },
          {
            "type": "p",
            "text": "That is it. The `with { type: 'json' }` part is called an import attribute, it is not optional, and leaving it off produces an error rather than a warning. Import attributes reached TC39 stage 4 and were marked stable in Node - they are no longer behind an experimental flag."
          },
          {
            "type": "p",
            "text": "One detail that surprises people: a JSON module only ever exposes a default export. There are no named exports, even though the file is full of top-level keys."
          },
          {
            "type": "code",
            "language": "js",
            "code": "// works\nimport pkg from './package.json' with { type: 'json' }\nconsole.log(pkg.version)\n\n// does NOT work - SyntaxError\n// import { version } from './package.json' with { type: 'json' }"
          }
        ]
      },
      {
        "heading": "Why the attribute is mandatory",
        "blocks": [
          {
            "type": "p",
            "text": "This looks like bureaucracy until you know what it is defending against. Without the attribute, the runtime would have to decide how to interpret a module based on its file extension or, worse, on the content type a server sent back. That is a security problem: a server could serve something that looks like JSON on one request and JavaScript on the next, and the importing code would have executed it."
          },
          {
            "type": "p",
            "text": "By making the expected type part of the import statement itself, the check moves to the consumer. You declare what you are expecting; if the module is not that, the import fails rather than silently executing. The same mechanism is what powers CSS module imports in browsers."
          },
          {
            "type": "p",
            "text": "This is also why the syntax changed once during standardisation - you may still find older articles and Stack Overflow answers using `assert { type: 'json' }` instead of `with`. The `assert` keyword was the earlier proposal spelling and is deprecated. Use `with`."
          }
        ]
      },
      {
        "heading": "Dynamic import, and the case for it",
        "blocks": [
          {
            "type": "p",
            "text": "The dynamic form takes the attributes in an options object, and note the doubled `with` - one for the option name, one for the attribute bag:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "const data = await import('./data.json', { with: { type: 'json' } })\nconsole.log(data.default.items.length)"
          },
          {
            "type": "p",
            "text": "The extra `.default` catches everyone at least once. A dynamic import resolves to the module namespace object, not to the default export, so the payload is one level deeper than with a static import."
          },
          {
            "type": "p",
            "text": "Dynamic import is the right tool when the path is computed at runtime - loading a locale file, a theme, a plugin manifest. If the path is a literal, prefer the static form: it is analysable by bundlers and it fails at load time rather than halfway through a request."
          }
        ]
      },
      {
        "heading": "CommonJS is still fine",
        "blocks": [
          {
            "type": "p",
            "text": "If your file is CommonJS, nothing has changed and nothing needs to. `require` of a `.json` file has worked since forever, returns the parsed object directly, and caches it."
          },
          {
            "type": "code",
            "language": "js",
            "code": "const config = require('./config.json')"
          },
          {
            "type": "p",
            "text": "There is no reason to migrate a working CommonJS file to ESM purely to modernise a JSON import. The upgrade pressure should come from somewhere else - top-level await, or a dependency that ships ESM only."
          }
        ]
      },
      {
        "heading": "The TypeScript half of the problem",
        "blocks": [
          {
            "type": "p",
            "text": "A large share of searches for `import type json` are really people whose runtime is happy and whose compiler is not. TypeScript has its own gate: the `resolveJsonModule` compiler option. With it off, TypeScript does not consider a `.json` file to be a module at all and will tell you it cannot find one."
          },
          {
            "type": "code",
            "language": "json",
            "code": "{\n  \"compilerOptions\": {\n    \"resolveJsonModule\": true,\n    \"module\": \"nodenext\",\n    \"moduleResolution\": \"nodenext\"\n  }\n}"
          },
          {
            "type": "p",
            "text": "With `resolveJsonModule` enabled, TypeScript reads the JSON file at compile time and infers a structural type from its literal contents. That is genuinely useful - you get autocompletion on the keys for free - but it has a sharp edge worth knowing about."
          },
          {
            "type": "p",
            "text": "The inferred type describes the file as it exists on your machine right now. If the JSON is configuration that varies between environments, or a fixture that someone will edit, your types are quietly asserting facts about data you do not control. An optional field that happens to be present in the committed file will be typed as required."
          },
          {
            "type": "p",
            "text": "Where that matters, do not import the JSON as a typed module. Read it, parse it, and validate it against a schema at the boundary - the resulting type is one you actually wrote down and can defend."
          }
        ]
      },
      {
        "heading": "When not to import JSON at all",
        "blocks": [
          {
            "type": "p",
            "text": "This is the part most guides skip. `import` is not always the right way to get JSON into your program, and the difference is not stylistic."
          },
          {
            "type": "list",
            "items": [
              "**An imported JSON module is frozen at load time.** It is parsed once and cached for the life of the process. If the file changes on disk, your program will not notice. For anything you expect to be edited while running, use `fs.readFile` and parse it yourself.",
              "**It is loaded eagerly and kept in memory.** A large fixture imported at the top of a module is parsed on startup whether or not any request needs it. For big files, lazy-load them.",
              "**The path is resolved like a module, not like a file.** It is relative to the importing file, not to the process working directory - which is usually what you want, but it means you cannot point it at a user-supplied path.",
              "**Secrets do not belong in it.** An imported config file is bundled and shipped by most build tools. Environment variables exist for a reason."
            ]
          },
          {
            "type": "p",
            "text": "The honest rule: import JSON when it is static data that ships with your code, and read it from the filesystem when it is state that lives independently of your code. Most bugs in this area come from treating the second case as the first."
          }
        ]
      },
      {
        "heading": "Reading it the boring way",
        "blocks": [
          {
            "type": "p",
            "text": "For completeness, the version that has no caveats at all and works on every Node version anyone still runs:"
          },
          {
            "type": "code",
            "language": "js",
            "code": "import { readFile } from 'node:fs/promises'\n\nconst raw = await readFile(new URL('./config.json', import.meta.url), 'utf8')\nconst config = JSON.parse(raw)"
          },
          {
            "type": "p",
            "text": "Using `new URL` with `import.meta.url` keeps the path relative to the module rather than to the working directory, which is the ESM equivalent of the old dirname trick. It is three lines instead of one, and in exchange you get fresh data on every read and a parse error you can catch."
          }
        ]
      },
      {
        "heading": "Picking one",
        "blocks": [
          {
            "type": "p",
            "text": "Static import with `with { type: 'json' }` for package version strings, locale bundles, static lookup tables - anything that is genuinely part of the build. `fs.readFile` plus a schema check for configuration, user data, or anything that can change under you. `require` if you are in CommonJS and it already works."
          },
          {
            "type": "p",
            "text": "The syntax was the annoying part and it is now settled. The interesting question was always the one underneath it: is this file code, or is it data? Answer that first and the right mechanism follows."
          }
        ]
      }
    ]
  },
  {
    slug: "tc39-type-annotations-types-as-comments-status",
    title: "TC39 Type Annotations: What 'Types as Comments' Actually Proposes, and Where It Stands",
    description:
      "The proposal to put type syntax in JavaScript is still Stage 1 — while Node quietly shipped type stripping anyway. What is in scope, what is not, and what to do today.",
    datePublished: "2026-09-12",
    readingMinutes: 9,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every few months a post goes around claiming that JavaScript is about to get types. It is usually wrong in an interesting way: the claim is not that TypeScript is being standardised, and the proposal it points at has moved considerably less than the surrounding ecosystem has.",
          },
          {
            type: "p",
            text: "The **Type Annotations** proposal — often called *types as comments* — has been at **Stage 1** since 2022. Meanwhile Node.js went ahead and shipped the practical half of the idea anyway. That gap between the standards track and the runtime reality is the genuinely useful thing to understand here, because it changes how you should write TypeScript today.",
          },
        ],
      },
      {
        heading: "What the proposal actually says",
        blocks: [
          {
            type: "p",
            text: "The core idea is deliberately small. JavaScript engines would learn to *parse* type annotation syntax and then completely ignore it. Not check it, not evaluate it, not expose it at runtime — treat it exactly like a comment.",
          },
          {
            type: "code",
            language: "ts",
            code: "// Under the proposal, this is valid JavaScript.\n// The engine parses the annotations and discards them.\n\nlet x: string;\n\nfunction equals(a: number, b: number): boolean {\n  return a === b;\n}\n\ninterface Person {\n  name: string;\n  age: number;\n}\n\ntype CoolBool = boolean;",
          },
          {
            type: "p",
            text: "Nothing in there has runtime semantics. Assigning a number to x would not throw. The interface body is skipped entirely. The goal is stated plainly in the proposal: let developers run programs written in TypeScript, Flow and similar supersets without transpilation, provided they stay inside a reasonably large subset.",
          },
          {
            type: "p",
            text: "That framing matters. This is not a type system for JavaScript. TC39 explicitly declined that, on the reasoning that a standardised checker would make improved type analysis a breaking change for end users rather than for developers, and that type system innovation would then become close to impossible.",
          },
        ],
      },
      {
        heading: "The status everyone gets wrong",
        blocks: [
          {
            type: "p",
            text: "Stage 1. Not Stage 3, not \"shipping in ES2027\". Stage 1 means the committee has agreed the problem is worth exploring, and very little more than that.",
          },
          {
            type: "p",
            text: "The proposal README itself carries a warning that it has not been updated regularly, and points readers at TC39 meeting notes from 2022 and 2023 for the current state. The champions include Daniel Rosenwasser from the TypeScript team, Romulo Cintra, and Rob Palmer — so this is not a fringe effort. It is simply a genuinely hard one that has not found its next step.",
          },
          {
            type: "p",
            text: "If you want a comparison for how the pipeline normally looks when something is actually close, look at the features that shipped in ES2026 — iterator helpers, explicit resource management with [the using keyword](/blog/javascript-using-keyword-explicit-resource-management), and the rest. Those spent years at Stage 3 with implementations landing in engines. Type annotations has none of that.",
          },
        ],
      },
      {
        heading: "What is deliberately left out",
        blocks: [
          {
            type: "p",
            text: "The proposal draws a hard line: anything that *generates code* is out of scope, because the whole model is erasure. That excludes three TypeScript features people use constantly.",
          },
          {
            type: "code",
            language: "ts",
            code: "// All three of these are OUT of scope --\n// they emit real JavaScript, so they cannot be comments.\n\nenum Direction {\n  Up,\n  Down,\n}\n\nnamespace Utils {\n  export const x = 1;\n}\n\nclass Point {\n  // parameter properties: this assigns this.x\n  constructor(private x: number) {}\n}",
          },
          {
            type: "p",
            text: "JSX is also excluded, on the grounds that it is orthogonal to static typing and expands into meaningful JavaScript rather than being erased. A few things sit in an explicitly undecided bucket — ambient declare declarations, overload signatures, and class modifiers such as public, readonly and abstract.",
          },
          {
            type: "p",
            text: "Crucially, the proposal is clear that existing TypeScript codebases would not need to change. TypeScript would continue to exist alongside a narrower standard syntax. You would simply gain the *option* of restricting yourself to the subset that runs without a build step.",
          },
        ],
      },
      {
        heading: "The hard problem: where does a type end?",
        blocks: [
          {
            type: "p",
            text: "The reason this has not advanced is not politics. It is grammar. To skip a type, the engine has to know where the type stops, without understanding what the type means — and type systems keep inventing new syntax.",
          },
          {
            type: "p",
            text: "Matching brackets get you a long way. Anything inside a balanced pair can be skipped wholesale. Beyond that it gets genuinely difficult, and one case is a clean illustration:",
          },
          {
            type: "code",
            language: "ts",
            code: "// Ambiguous: is this a generic call, or two comparisons?\nadd<number>(4, 5);\n\n// Parsed as JavaScript today, it is:\n//   (add < number) > (4, 5)\n\n// One sketched option in the proposal is a prefix sigil:\nadd::<number>(4, 5);\nnew Point::<bigint>(4n, 5n);",
          },
          {
            type: "p",
            text: "The double-colon form is presented as an example rather than a decision, but it shows the shape of the trade-off. Making type syntax standard means either breaking existing valid JavaScript or asking TypeScript users to write something new. Neither is free, and that tension is roughly where the proposal has been sitting.",
          },
        ],
      },
      {
        heading: "Meanwhile, the runtimes solved it anyway",
        blocks: [
          {
            type: "p",
            text: "Here is the part that actually affects your week. While the standard stalled, Node.js shipped **type stripping** — it can run a .ts file directly by erasing the annotations, using an internal stripper rather than a full TypeScript compiler. It started behind a flag and has since become the default behaviour in current versions.",
          },
          {
            type: "code",
            language: "bash",
            code: "# Current Node: just run it.\nnode ./server.ts\n\n# Older versions needed the flag explicitly:\nnode --experimental-strip-types ./server.ts",
          },
          {
            type: "p",
            text: "The catch is exactly the catch the TC39 proposal predicted. Stripping can only remove things; it cannot generate code. So enums, namespaces and parameter properties — the same three features listed above — do not work. You get an error rather than silent weirdness, which is the right call, but it means a large TypeScript codebase will not simply run.",
          },
          {
            type: "p",
            text: "TypeScript added a compiler flag precisely for this, so you can find out at type-check time instead of at runtime:",
          },
          {
            type: "code",
            language: "json",
            code: "{\n  \"compilerOptions\": {\n    \"erasableSyntaxOnly\": true,\n    \"verbatimModuleSyntax\": true\n  }\n}",
          },
          {
            type: "p",
            text: "With erasableSyntaxOnly on, the compiler rejects any syntax that would need emitting. Turn it on in a new project and you are effectively writing the TC39 subset, whether or not the proposal ever advances.",
          },
        ],
      },
      {
        heading: "The import type detail worth knowing",
        blocks: [
          {
            type: "p",
            text: "One piece of this has a runtime consequence that surprises people, and it is worth internalising because it bites in both the stripping and the standards world.",
          },
          {
            type: "code",
            language: "ts",
            code: "// Fully erased. The module is never loaded.\nimport type { SourceFile } from './parser';\n\n// NOT erased. The import statement remains,\n// so './parser' is still evaluated at runtime.\nimport { type SourceFile } from './parser';",
          },
          {
            type: "p",
            text: "A statement-level import type disappears entirely. Inline type specifiers only mark individual bindings as type-only — the import itself is retained, and any side effects in that module still run. If you rely on tree-shaking or care about module evaluation order, that distinction is not cosmetic. It pairs directly with [import defer and lazy module evaluation](/blog/import-defer-lazy-module-evaluation), which is the other half of controlling when a module's body actually executes.",
          },
        ],
      },
      {
        heading: "What to do today",
        blocks: [
          {
            type: "p",
            text: "Treat the proposal as a direction of travel rather than a roadmap item. Practically:",
          },
          {
            type: "list",
            items: [
              "Turn on erasableSyntaxOnly in new projects. It costs nothing and keeps the no-build-step option open.",
              "Replace enums with union types or a const object plus a derived type. This is the single highest-value change and it is good practice independently.",
              "Drop parameter properties. Assigning fields explicitly in the constructor is two extra lines and removes a whole category of tooling friction.",
              "Prefer statement-level import type when you want the module gone entirely, and know that the inline form does not do that.",
              "Do not restructure anything on the assumption that this reaches Stage 4. Four years at Stage 1 is a real signal.",
            ],
          },
        ],
      },
      {
        heading: "Does the proposal still matter?",
        blocks: [
          {
            type: "p",
            text: "Less than it did, and that is arguably a success rather than a failure. The stated motivation was to remove the mandatory build step for type-annotated code. Node achieved that unilaterally, and other runtimes have done similar. The pressure that made the proposal urgent has largely been released.",
          },
          {
            type: "p",
            text: "What a standard would still buy is agreement. Right now every runtime and bundler implements its own approximately-compatible stripper, with its own edge cases, which is precisely the fragmentation TC39 processes exist to prevent. A specified grammar would turn a pile of conventions into one shared rule.",
          },
          {
            type: "p",
            text: "But the honest reading of the current state is this: the ecosystem routed around the standard, and the standard has not yet caught up. If you write in the erasable subset now, you are compatible with both outcomes — which is a comfortable place to be, and it costs you almost nothing.",
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-deep-copy-structuredclone-vs-json",
    title: "Deep Copying in JavaScript: structuredClone, JSON Round-Tripping, and What Each One Quietly Breaks",
    description: "structuredClone is in every modern browser and Node 17+. Here is exactly what it copies, what it throws on, and why JSON.parse(JSON.stringify(x)) silently corrupts data.",
    datePublished: "2026-09-13",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Deep copying is one of those problems that looks solved from a distance and turns out to be a stack of trade-offs up close. For years the community answer was `JSON.parse(JSON.stringify(value))` — one line, no dependency, works on the object in front of you. It also silently destroys several common data types, and the destruction is quiet enough that you usually discover it in production.",
          },
          {
            type: "p",
            text: "The platform now ships a real answer. **structuredClone** is a global function available in every modern browser and in Node.js 17 and later, and it implements the structured clone algorithm — the same machinery the platform already used to send data to a Web Worker or into IndexedDB.",
          },
          {
            type: "code",
            language: "js",
            code: "const original = {\n  when: new Date(),\n  tags: new Set(['a', 'b']),\n  lookup: new Map([[1, 'one']]),\n};\n\nconst copy = structuredClone(original);\n\ncopy.when instanceof Date;  // true\ncopy.tags instanceof Set;   // true\ncopy.tags === original.tags; // false — a real copy",
          },
          {
            type: "p",
            text: "That single example already shows three types the JSON round-trip gets wrong. It is worth going through the whole list properly, because the choice between these two approaches is not about elegance — it is about which failures you can live with.",
          },
        ],
      },
      {
        heading: "What JSON Round-Tripping Actually Does to Your Data",
        blocks: [
          {
            type: "p",
            text: "`JSON.parse(JSON.stringify(value))` is a serialisation round trip through a format that has six types. Anything outside those six has to be approximated or dropped, and JSON.stringify does this without complaint.",
          },
          {
            type: "list",
            items: [
              "**Dates become strings.** `new Date()` serialises to an ISO string and parses back as a string. Every subsequent `.getTime()` throws.",
              "**Map and Set become empty objects.** Neither has enumerable own properties, so both serialise to `{}` and the contents are gone.",
              "**undefined disappears.** Object properties holding `undefined` are omitted entirely; in arrays they become `null`, which changes the length semantics.",
              "**Functions and Symbols are dropped**, the same way as undefined.",
              "**NaN and Infinity become null.** JSON has no representation for them.",
              "**BigInt throws.** This is the one failure JSON.stringify is loud about.",
              "**Class instances lose their prototype**, arriving as plain objects with no methods.",
              "**Circular references throw** a TypeError.",
            ],
          },
          {
            type: "p",
            text: "Only the last two are noisy. The first six are silent, which is what makes the pattern genuinely dangerous — the bug surfaces far from the copy, usually as a method call on something that is no longer the type you think it is.",
          },
        ],
      },
      {
        heading: "What structuredClone Handles",
        blocks: [
          {
            type: "p",
            text: "The structured clone algorithm covers a substantially wider set of types, and — importantly — it handles graphs rather than trees.",
          },
          {
            type: "list",
            items: [
              "Primitives, including **BigInt**, plus `undefined`, `NaN` and `Infinity` preserved correctly.",
              "Plain objects and arrays, including sparse arrays.",
              "**Date**, **RegExp**, **Map**, **Set**, and **Error** objects.",
              "**ArrayBuffer**, typed arrays and **DataView**.",
              "**Blob**, **File** and **FileList** in browsers.",
              "**Circular and shared references** — an object referenced twice in the source is the same object twice in the copy, not two copies.",
            ],
          },
          {
            type: "p",
            text: "That last point is the one people underestimate. If your source graph has two properties pointing at the same node, structuredClone preserves that identity. A hand-rolled recursive copy almost never does, and neither does JSON.",
          },
          {
            type: "code",
            language: "js",
            code: "const shared = { id: 1 };\nconst graph = { left: shared, right: shared };\ngraph.self = graph; // circular\n\nconst copy = structuredClone(graph);\n\ncopy.left === copy.right; // true — identity preserved\ncopy.self === copy;       // true — cycle preserved\ncopy.left === shared;     // false — genuinely a copy",
          },
        ],
      },
      {
        heading: "What structuredClone Refuses to Do",
        blocks: [
          {
            type: "p",
            text: "structuredClone is not a universal deep copy, and the places it stops are deliberate. When it cannot clone something, it throws a **DataCloneError** rather than guessing — which is exactly the behaviour you want, and the opposite of the JSON approach.",
          },
          {
            type: "list",
            items: [
              "**Functions throw.** There is no meaningful way to serialise a closure, so it does not try.",
              "**Symbols throw**, both as values and as keys.",
              "**DOM nodes throw** (with the exception of a few specifically cloneable interfaces).",
              "**Prototypes are not preserved.** A class instance clones into a plain object with the same own properties. The data survives; the methods do not.",
              "**Property descriptors are not preserved.** Getters and setters are invoked and their current values copied as plain data. Non-enumerable and non-writable flags are lost.",
            ],
          },
          {
            type: "p",
            text: "The prototype rule is the one that catches people migrating away from a library like lodash's cloneDeep, which does walk prototypes. If you are copying class instances and expect `copy instanceof Thing` to hold, structuredClone is the wrong tool and you need a `clone()` method on the class instead.",
          },
          {
            type: "code",
            language: "js",
            code: "class Point {\n  constructor(x, y) { this.x = x; this.y = y; }\n  get length() { return Math.hypot(this.x, this.y); }\n}\n\nconst p = new Point(3, 4);\nconst c = structuredClone(p);\n\nc.x;                  // 3 — data survives\nc instanceof Point;   // false\nc.length;             // 5, but frozen as plain data, not a getter",
          },
        ],
      },
      {
        heading: "Choosing Between Them",
        blocks: [
          {
            type: "p",
            text: "A short decision procedure that covers nearly every real case:",
          },
          {
            type: "list",
            items: [
              "Copying data you control that contains only JSON types, and you want it fast? Either works; JSON is fine and marginally quicker on small plain objects.",
              "Copying anything containing Dates, Maps, Sets, typed arrays, or cycles? **structuredClone**, always.",
              "Copying class instances and needing methods afterwards? Neither — write an explicit clone method.",
              "Copying something that might contain a function and you want to know about it? **structuredClone**, because it throws instead of silently deleting.",
              "Needing to copy in a hot loop over very large plain objects? Measure. structuredClone crosses into the platform and is not always the faster option.",
            ],
          },
          {
            type: "p",
            text: "The performance point deserves a caveat: the numbers move between engines and between versions, and they depend heavily on shape and size. Both approaches are slower than not copying. The fastest deep copy remains the one you avoid by not mutating the original.",
          },
        ],
      },
      {
        heading: "The Structural Alternative: Stop Copying",
        blocks: [
          {
            type: "p",
            text: "Most deep copies in application code exist to defend against mutation — you hand an object to something and you do not trust it to leave the object alone. That is a real problem, but copying is an expensive answer to it.",
          },
          {
            type: "p",
            text: "`Object.freeze` costs nothing at copy time and turns a silent mutation into a loud one in strict mode. For nested data, a shallow freeze at each level as you build it is usually enough, because the mutation you are defending against is almost always one level deep.",
          },
          {
            type: "p",
            text: "And where the object genuinely needs to be handed to a different execution context — a Worker, IndexedDB, `postMessage` — you do not need to call structuredClone at all. Those boundaries run the structured clone algorithm for you, with the same rules and the same DataCloneError. Calling structuredClone first just does the work twice.",
          },
        ],
      },
      {
        heading: "The Short Version",
        blocks: [
          {
            type: "p",
            text: "Use **structuredClone** as the default. It is a global, it needs no import, it handles the types your data actually contains, it preserves reference identity, and when it cannot do the job it says so instead of handing you quietly corrupted data.",
          },
          {
            type: "p",
            text: "Reach past it only for class instances with methods, or when profiling has actually told you the copy is the bottleneck. And reach for `JSON.parse(JSON.stringify(x))` essentially never — its only genuine advantage is that it works on objects containing functions by deleting them, which is not an advantage.",
          },
        ],
      },
    ],
  },
  {
    slug: "es2026-error-iserror-map-getorinsert-uint8array-base64",
    title:
      "Five Small ES2026 APIs That Delete Utility Code You Have Been Writing for Years",
    description:
      "Error.isError, Map.getOrInsert, Uint8Array base64 and hex, Math.sumPrecise and Iterator.concat \u2014 the unglamorous half of ES2026, and the helper functions each one retires.",
    datePublished: "2026-09-14",
    readingMinutes: 9,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every ECMAScript edition has two halves. There is the half that gets the conference talks \u2014 this year that was Array.fromAsync, Promise.try and explicit resource management \u2014 and there is the half that quietly deletes forty lines from your shared utils file and never gets mentioned again.",
          },
          {
            type: "p",
            text: "ECMAScript 2026 was approved by Ecma International on 30 June 2026, and its second half is unusually good. Five additions, none of them syntax, all of them replacing a workaround that most codebases have written at least once: Error.isError, the getOrInsert family on Map and WeakMap, base64 and hex methods on Uint8Array, Math.sumPrecise, and Iterator.concat from the iterator sequencing proposal.",
          },
          {
            type: "p",
            text: "Here is what each one actually replaces, and where each one still has a sharp edge.",
          },
        ],
      },
      {
        heading: "Error.isError, and why instanceof was never enough",
        blocks: [
          {
            type: "p",
            text: "Checking whether a value is an Error is one of those problems that looks solved until you hit a realm boundary. An error thrown inside an iframe, a worker, or a Node vm context fails an instanceof Error check in the parent realm, because it is an instance of a different Error constructor entirely.",
          },
          {
            type: "p",
            text: "The workaround everyone converged on was a Object.prototype.toString brand check, which is both ugly and wrong \u2014 it can be spoofed with Symbol.toStringTag:",
          },
          {
            type: "code",
            language: "js",
            code: "// the old workaround\nconst looksLikeError = (v) =>\n  Object.prototype.toString.call(v) === '[object Error]'\n\n// which this defeats\nconst liar = { [Symbol.toStringTag]: 'Error' }\nlooksLikeError(liar) // true. it is not an error.",
          },
          {
            type: "code",
            language: "js",
            code: "// ES2026\nError.isError(new Error('boom'))        // true\nError.isError(new TypeError('boom'))    // true\nError.isError(liar)                     // false\nError.isError({ message: 'boom' })      // false",
          },
          {
            type: "p",
            text: "Error.isError inspects the internal slot that only genuine error objects have, so it is realm-independent and cannot be faked. If you maintain a library that normalises thrown values \u2014 a logger, an error reporter, a retry wrapper \u2014 this is the one to adopt first, because the old check was silently wrong in exactly the environments where errors matter most.",
          },
          {
            type: "p",
            text: "One thing it does not do: it is a check for error objects, not for thrown values. Code can throw a string, a number, or undefined, and Error.isError will correctly say false for all of them. Your normalisation layer still needs an else branch.",
          },
        ],
      },
      {
        heading: "Map.getOrInsert, and the end of the double lookup",
        blocks: [
          {
            type: "p",
            text: "The grouping pattern is probably the single most-written snippet in JavaScript. You want a Map of arrays, and every insert needs the same three lines:",
          },
          {
            type: "code",
            language: "js",
            code: "// before\nfor (const user of users) {\n  if (!byCity.has(user.city)) byCity.set(user.city, [])\n  byCity.get(user.city).push(user)\n}",
          },
          {
            type: "p",
            text: "That is two hash lookups on the miss path and two on the hit path, plus a conditional you have to read every time. ES2026 adds getOrInsert and getOrInsertComputed to both Map.prototype and WeakMap.prototype:",
          },
          {
            type: "code",
            language: "js",
            code: "// after\nfor (const user of users) {\n  byCity.getOrInsert(user.city, []).push(user)\n}",
          },
          {
            type: "p",
            text: "There is a trap in that line, and it is worth being explicit about it. getOrInsert takes a value, and that value is evaluated on every iteration whether or not it gets used. For an empty array literal that is cheap and harmless. For anything expensive \u2014 a fresh database connection, a compiled regex, a parsed config \u2014 you want the lazy variant instead:",
          },
          {
            type: "code",
            language: "js",
            code: "// eager: makeClient() runs on every call, even on a hit\nclients.getOrInsert(region, makeClient(region))\n\n// lazy: the callback runs only when the key is missing\nclients.getOrInsertComputed(region, () => makeClient(region))",
          },
          {
            type: "p",
            text: "The rule of thumb: literal defaults use getOrInsert, constructed defaults use getOrInsertComputed. Both return the stored value, so they chain cleanly, and both work on WeakMap, which is where the memoisation use case lives.",
          },
        ],
      },
      {
        heading: "Uint8Array to and from base64, without the round trip through strings",
        blocks: [
          {
            type: "p",
            text: "Encoding binary data as base64 in JavaScript has been embarrassing for as long as JavaScript has had binary data. The browser route goes through btoa, which only accepts a string of code units below 256, so you first have to build a binary string one byte at a time:",
          },
          {
            type: "code",
            language: "js",
            code: "// the old browser dance\nconst toBase64 = (bytes) => {\n  let binary = ''\n  for (const byte of bytes) binary += String.fromCharCode(byte)\n  return btoa(binary)\n}",
          },
          {
            type: "p",
            text: "That allocates a string roughly the size of your data, blows the call stack if you try to shortcut it with apply on a large array, and has no counterpart in the other direction that is any nicer. Node users reached for Buffer instead, which is not portable. ES2026 puts the methods where they belong:",
          },
          {
            type: "code",
            language: "js",
            code: "const bytes = new Uint8Array([72, 101, 108, 108, 111])\n\nbytes.toBase64()   // 'SGVsbG8='\nbytes.toHex()      // '48656c6c6f'\n\nUint8Array.fromBase64('SGVsbG8=')   // Uint8Array(5)\nUint8Array.fromHex('48656c6c6f')    // Uint8Array(5)",
          },
          {
            type: "p",
            text: "There is an options bag for the URL-safe alphabet, which is what you want for anything that travels in a query string or a JWT segment:",
          },
          {
            type: "code",
            language: "js",
            code: "bytes.toBase64({ alphabet: 'base64url' })\nUint8Array.fromBase64(token, { alphabet: 'base64url' })",
          },
          {
            type: "p",
            text: "This is the one in the list with the most uneven support history \u2014 it reached stage 4 in July 2025 and landed in the non-V8 engines well before V8, so check current support for your target runtimes rather than assuming. It is also the easiest to polyfill safely, since the semantics are fully specified and there is no syntax involved.",
          },
        ],
      },
      {
        heading: "Math.sumPrecise, for when floating point embarrasses you",
        blocks: [
          {
            type: "p",
            text: "Everyone knows the 0.1 plus 0.2 example. What people underestimate is how fast the error compounds once you are summing a long array, and how order-dependent the result becomes:",
          },
          {
            type: "code",
            language: "js",
            code: "const xs = [1e20, 0.1, -1e20]\n\nxs.reduce((a, b) => a + b, 0)   // 0\nMath.sumPrecise(xs)             // 0.1",
          },
          {
            type: "p",
            text: "The reduce loses the 0.1 entirely, because adding it to 1e20 cannot be represented and the value is simply discarded before the subtraction brings the magnitude back down. Math.sumPrecise takes an iterable and computes the correctly-rounded sum, so the answer does not depend on the order of the input.",
          },
          {
            type: "p",
            text: "Where this matters in ordinary application code: summing a column of currency amounts, aggregating measurements of wildly different magnitudes, or anything where a user is going to compare your total against one computed elsewhere. Where it does not matter: adding up three numbers, or anything you were going to round to two decimal places anyway. It is slower than a naive loop by construction, so reach for it when correctness is the point.",
          },
          {
            type: "p",
            text: "Note that it takes an iterable rather than being a variadic function, so it is Math.sumPrecise(array), not Math.sumPrecise(...array) \u2014 which is a feature, since the spread version would hit the argument-count limit on large arrays.",
          },
        ],
      },
      {
        heading: "Iterator.concat, the missing piece of iterator helpers",
        blocks: [
          {
            type: "p",
            text: "Iterator helpers shipped a set of lazy operations \u2014 map, filter, take, drop, flatMap \u2014 and most people noticed the gap immediately: there was no lazy way to run several iterators one after another. You could spread them all into an array, which defeats the laziness, or write a generator, which is three lines of ceremony for something that should be an expression.",
          },
          {
            type: "code",
            language: "js",
            code: "// before\nfunction* chain(...its) {\n  for (const it of its) yield* it\n}\n\n// after\nIterator.concat(recentLogs(), archivedLogs(), remoteLogs())\n  .filter((l) => l.level === 'error')\n  .take(20)\n  .toArray()",
          },
          {
            type: "p",
            text: "The laziness is the entire point here. In that example, archivedLogs and remoteLogs are never touched if the first twenty errors all come from recentLogs \u2014 which is exactly the behaviour you want when the later sources are expensive. If you are new to the helper methods, the [iterator helpers guide](/blog/javascript-iterator-helpers) covers the rest of the surface.",
          },
        ],
      },
      {
        heading: "What to adopt now, and what to wait on",
        blocks: [
          {
            type: "p",
            text: "These five are not equally ready, and treating them as one batch is how you end up shipping a runtime error to an older browser. A rough ordering:",
          },
          {
            type: "list",
            items: [
              "Error.isError \u2014 adopt immediately in library code, behind a tiny fallback if you support old targets. The correctness win over instanceof is real.",
              "getOrInsert and getOrInsertComputed \u2014 trivially polyfillable, and the readability gain is immediate. Just keep the eager-versus-lazy distinction straight.",
              "Uint8Array base64 and hex \u2014 high value, most uneven support. Feature-detect, or pull in a polyfill that matches the spec options bag.",
              "Math.sumPrecise \u2014 adopt where accuracy is load-bearing, ignore everywhere else. It is not a general replacement for reduce.",
              "Iterator.concat \u2014 the newest of the group, so check your runtime baseline before leaning on it.",
            ],
          },
          {
            type: "p",
            text: "None of these change how JavaScript reads, which is why they do not make the highlight reels. They just remove five small opportunities to be subtly wrong, and a codebase is mostly made of those.",
          },
          {
            type: "p",
            text: "If you want the louder half of the same release, the write-up on [Array.fromAsync, Promise.try and RegExp.escape](/blog/es2026-array-fromasync-promise-try-regexp-escape) covers it, and [explicit resource management with the using keyword](/blog/javascript-using-keyword-explicit-resource-management) is the one that actually changes how you write cleanup code.",
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-object-groupby-map-groupby-guide",
    title: "Object.groupBy and Map.groupBy: Grouping Arrays Without reduce()",
    description: "ES2024 gave JavaScript native array grouping. How Object.groupBy and Map.groupBy work, the null-prototype and key-coercion details, and when reduce is still the right call.",
    datePublished: "2026-09-15",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Grouping a list by some property is one of the most common things anyone does with an array, and until recently JavaScript had no built-in way to do it. Everyone wrote the same **reduce** by hand, got it slightly wrong the first time, and eventually pulled in lodash just for *groupBy*.",
          },
          {
            type: "p",
            text: "ES2024 added **Object.groupBy** and **Map.groupBy**, and they reached Baseline in March 2024. Both are boring in the best way - they do exactly the obvious thing. But there are three details that will bite you if you skip the spec, so this goes through them.",
          },
        ],
      },
      {
        heading: "The reduce you have written a hundred times",
        blocks: [
          {
            type: "p",
            text: "Here is the pattern, for reference. Given a list of tasks, group them by status:",
          },
          {
            type: "code",
            language: "javascript",
            code: "const tasks = [\n  { id: 1, status: 'done', owner: 'ana' },\n  { id: 2, status: 'open', owner: 'ben' },\n  { id: 3, status: 'done', owner: 'ana' },\n];\n\nconst byStatus = tasks.reduce((acc, task) => {\n  (acc[task.status] ||= []).push(task);\n  return acc;\n}, {});",
          },
          {
            type: "p",
            text: "It works. It is also four lines of ceremony around one idea, it mutates an accumulator, and the *||=* trick is the bit people get wrong.",
          },
        ],
      },
      {
        heading: "Object.groupBy",
        blocks: [
          {
            type: "p",
            text: "The replacement is a static method that takes the iterable first and the key-selecting callback second:",
          },
          {
            type: "code",
            language: "javascript",
            code: "const byStatus = Object.groupBy(tasks, (task) => task.status);\n\n// {\n//   done: [{ id: 1, ... }, { id: 3, ... }],\n//   open: [{ id: 2, ... }],\n// }",
          },
          {
            type: "p",
            text: "Note that it is **Object.groupBy(items, fn)** and not *items.groupBy(fn)*. That was deliberate. An earlier version of this proposal did add *Array.prototype.group*, and it had to be pulled because adding a *group* property to every array broke real websites - notably older versions of Sencha Ext JS, which relied on the name being absent. Moving the method to a static on Object and Map sidestepped the whole problem.",
          },
          {
            type: "p",
            text: "The callback also receives the index as a second argument, which is occasionally useful:",
          },
          {
            type: "code",
            language: "javascript",
            code: "const halves = Object.groupBy(items, (item, index) =>\n  index < items.length / 2 ? 'first' : 'second'\n);",
          },
        ],
      },
      {
        heading: "Detail one: the result has a null prototype",
        blocks: [
          {
            type: "p",
            text: "This is the detail that surprises people. **Object.groupBy returns an object with a null prototype**, not a plain object literal. That means it has no inherited methods at all:",
          },
          {
            type: "code",
            language: "javascript",
            code: "const groups = Object.groupBy(tasks, (t) => t.status);\n\nObject.getPrototypeOf(groups); // null\ngroups.hasOwnProperty('done'); // TypeError: not a function\ngroups.toString(); // TypeError: not a function",
          },
          {
            type: "p",
            text: "This is a feature rather than an oversight. Because there is no prototype chain, a group key of *toString* or *constructor* or *__proto__* is just an ordinary key and cannot collide with anything inherited. The hand-rolled reduce version has a genuine bug here - grouping user-supplied data by a field whose value happens to be *__proto__* does something you did not intend.",
          },
          {
            type: "p",
            text: "In practice you rarely notice, because reading properties, spreading, *Object.keys*, *Object.entries* and *for...in* all work normally. But if you pass the result somewhere that calls a method on it, use **Object.hasOwn(groups, key)** instead of *groups.hasOwnProperty(key)*, and be aware that *structuredClone* and some deep-equality helpers treat null-prototype objects differently.",
          },
        ],
      },
      {
        heading: "Detail two: keys are coerced to strings",
        blocks: [
          {
            type: "p",
            text: "Object keys can only be strings or symbols, so whatever your callback returns gets coerced. Most of the time this is invisible. Occasionally it collapses groups you wanted kept apart:",
          },
          {
            type: "code",
            language: "javascript",
            code: "const values = [1, '1', true, 'true', null, undefined];\n\nObject.groupBy(values, (v) => v);\n// keys: '1', 'true', 'null', 'undefined'\n// the number 1 and the string '1' land in the SAME group",
          },
          {
            type: "p",
            text: "If your grouping key is a number, a boolean, a Date, or an object, that coercion is a real risk. Which is what the second method is for.",
          },
        ],
      },
      {
        heading: "Map.groupBy, for keys that are not strings",
        blocks: [
          {
            type: "p",
            text: "**Map.groupBy** is identical in shape but returns a **Map**, so keys keep their type and are compared with SameValueZero - the same rule Map itself uses.",
          },
          {
            type: "code",
            language: "javascript",
            code: "const byTeam = Map.groupBy(people, (person) => person.team);\n// keys are the actual team objects, not '[object Object]'\n\nbyTeam.get(engineering); // works by reference\n\nconst byYear = Map.groupBy(orders, (order) => order.placedAt.getFullYear());\nbyYear.get(2026); // number key, not '2026'",
          },
          {
            type: "p",
            text: "Use **Map.groupBy** when the key is an object, a number you will look up by number, or anything where *String(key)* would lose information. Use **Object.groupBy** when the key is genuinely a string and you want something that spreads, serialises to JSON, and destructures naturally.",
          },
          {
            type: "p",
            text: "One thing worth remembering: grouping by an object reference only works if you have the same reference. Two structurally identical objects are different Map keys. If you are grouping by a value object, key on a stable primitive instead - an id, or a string you build yourself.",
          },
        ],
      },
      {
        heading: "Detail three: order is insertion order, and empty groups do not exist",
        blocks: [
          {
            type: "p",
            text: "Groups appear in the order their first member was encountered, not sorted. And a group with no members simply is not in the result - there is no way to pre-declare the set of keys you expect.",
          },
          {
            type: "p",
            text: "That second point catches people building UI. If you are rendering a column per status and one status has no items today, the key is absent and your loop silently renders three columns instead of four. Seed the shape yourself when the set of keys is known:",
          },
          {
            type: "code",
            language: "javascript",
            code: "const STATUSES = ['open', 'in-progress', 'done'];\nconst grouped = Object.groupBy(tasks, (t) => t.status);\n\nconst columns = STATUSES.map((status) => ({\n  status,\n  tasks: grouped[status] ?? [],\n}));",
          },
        ],
      },
      {
        heading: "Where you can use it",
        blocks: [
          {
            type: "p",
            text: "Both methods are Baseline since March 2024, which means they work across current browsers and are safe for most production targets now:",
          },
          {
            type: "list",
            items: [
              "Chrome and Edge 117+",
              "Firefox 119+",
              "Safari 17.4+",
              "Node.js 21+",
              "Deno 1.38+ and Bun 1.1+",
            ],
          },
          {
            type: "p",
            text: "The practical constraint is usually your Node floor rather than your browser floor. Node 20 is the version that trips teams up - it is still widely deployed and does not have either method. Check before you ship server code that assumes them, because the failure mode is a *TypeError* at runtime rather than anything your bundler will warn you about.",
          },
        ],
      },
      {
        heading: "When reduce is still the right answer",
        blocks: [
          {
            type: "p",
            text: "These methods do one thing: partition a list into buckets. They deliberately do not aggregate, and that limit matters more often than you would expect.",
          },
          {
            type: "p",
            text: "If what you actually want is a count per key, a sum per key, or a single representative per key, **groupBy builds intermediate arrays you are about to throw away**. For a few hundred items that is irrelevant. For a hot path over a large list it is real work:",
          },
          {
            type: "code",
            language: "javascript",
            code: "// wasteful: builds arrays, then discards them\nconst counts = Object.fromEntries(\n  Object.entries(Object.groupBy(rows, (r) => r.type))\n    .map(([k, v]) => [k, v.length])\n);\n\n// direct\nconst counts2 = rows.reduce((acc, r) => {\n  acc[r.type] = (acc[r.type] ?? 0) + 1;\n  return acc;\n}, {});",
          },
          {
            type: "p",
            text: "Nested grouping is the other gap. There is no built-in way to group by two keys, so you end up mapping over the first result and grouping again - readable, but no longer obviously nicer than doing it by hand.",
          },
          {
            type: "p",
            text: "The honest summary: reach for **Object.groupBy** when you want the buckets themselves, which is most of the time, and keep **reduce** for the cases where the buckets are only a means to a number. If you are already using the other recent additions to the language, the [iterator helpers](/blog/javascript-iterator-helpers) compose well with grouping, and the [Set methods](/blog/javascript-set-methods-union-intersection-difference) landed in the same wave of quality-of-life work.",
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-decorators-stage-3-practical-guide",
    title: "JavaScript Decorators in 2026: The Stage 3 API, and Why Your Old Ones Still Work",
    description:
      "Standard decorators shipped in TypeScript 5.0 with a completely different API from experimentalDecorators. What changed, what you lose, and whether to migrate.",
    datePublished: "2026-09-17",
    readingMinutes: 9,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Decorators have been Stage 3 at TC39 since 2022, which makes them one of the longest-running near-misses in the language. In the meantime almost everyone has been using them anyway - through Angular, NestJS, MobX, TypeORM and a dozen other frameworks - via a TypeScript flag called `experimentalDecorators`.",
          },
          {
            type: "p",
            text: "The catch is that the thing behind that flag is **not the same feature**. It is a Stage 2 draft from years ago, with a different API, different capabilities, and no path to the standard beyond a rewrite. TypeScript 5.0 shipped the real Stage 3 implementation alongside it, and the two cannot be mixed.",
          },
          {
            type: "p",
            text: "So if you write TypeScript, you now have two decorator systems, one flag that switches between them, and a legitimate question about which to use. Here is the practical answer.",
          },
        ],
      },
      {
        heading: "The flag decides which language you are writing",
        blocks: [
          {
            type: "p",
            text: "This is the single most important thing to internalise, and it trips people up constantly because the syntax is identical.",
          },
          {
            type: "p",
            text: "With `experimentalDecorators: true` in your tsconfig, the compiler emits the legacy form. Without it - and that is the default in TypeScript 5 and later - it emits the standard Stage 3 form. The `@` syntax at the call site looks the same either way. What changes is the signature of the function being called, which means a decorator written for one mode silently does the wrong thing in the other, or fails to compile.",
          },
          {
            type: "p",
            text: "There is no gradual migration inside a single compilation unit. The flag is per-project, so a project either speaks legacy or standard.",
          },
        ],
      },
      {
        heading: "The API, concretely",
        blocks: [
          {
            type: "p",
            text: "Legacy decorators receive positional arguments describing the thing being decorated - roughly `target`, `propertyKey` and a property descriptor, varying by what you attached them to.",
          },
          {
            type: "p",
            text: "Standard decorators take exactly two arguments, always: the **value** being decorated, and a **context object** describing it.",
          },
          {
            type: "code",
            language: "javascript",
            code: "function logged(value, context) {\n  if (context.kind !== 'method') return value;\n\n  return function (...args) {\n    console.log('calling', context.name, 'with', args);\n    const result = value.call(this, ...args);\n    console.log('returned', result);\n    return result;\n  };\n}\n\nclass Repo {\n  @logged\n  find(id) {\n    return { id };\n  }\n}\n\nnew Repo().find(7);",
          },
          {
            type: "p",
            text: "The shape is much easier to reason about. A method decorator receives the method and returns a replacement. A getter decorator receives the getter and returns a replacement. The return value replaces the thing, and if you return nothing, the original stands.",
          },
          {
            type: "p",
            text: "The context object carries what you need to be generic:",
          },
          {
            type: "list",
            items: [
              "`context.kind` - one of `class`, `method`, `getter`, `setter`, `field`, `accessor`. This is how one decorator handles several placements.",
              "`context.name` - the member name, or a symbol.",
              "`context.static` and `context.private` - booleans, which used to be awkward to determine.",
              "`context.access` - an object with `get` and `set` functions that work even on private members, which is genuinely new capability.",
              "`context.addInitializer(fn)` - registers a function to run at construction, the standard way to do per-instance setup.",
            ],
          },
        ],
      },
      {
        heading: "Field decorators work differently, and it matters",
        blocks: [
          {
            type: "p",
            text: "A field has no value at decoration time, so a field decorator receives `undefined` and returns an **initializer function**. That function is called with the field's initial value and returns the value the field will actually hold.",
          },
          {
            type: "code",
            language: "javascript",
            code: "function clamp(min, max) {\n  return function (_value, context) {\n    if (context.kind !== 'field') {\n      throw new Error('@clamp only applies to fields');\n    }\n    return function (initial) {\n      return Math.min(max, Math.max(min, initial));\n    };\n  };\n}\n\nclass Volume {\n  @clamp(0, 100) level = 250;\n}\n\nconsole.log(new Volume().level);",
          },
          {
            type: "p",
            text: "Note that this runs once, at initialisation. If you want to clamp on every assignment, a field decorator is the wrong tool - you want `accessor`.",
          },
        ],
      },
      {
        heading: "The accessor keyword is the piece people miss",
        blocks: [
          {
            type: "p",
            text: "Standard decorators introduced a companion feature: the `accessor` keyword, which turns a class field into an auto-generated getter/setter pair over a private backing slot. Decorating it gives you a hook on every read and write.",
          },
          {
            type: "code",
            language: "javascript",
            code: "function tracked(value, context) {\n  return {\n    get() {\n      return value.get.call(this);\n    },\n    set(next) {\n      console.log(String(context.name), 'changed to', next);\n      value.set.call(this, next);\n    },\n    init(initial) {\n      return initial;\n    },\n  };\n}\n\nclass Model {\n  @tracked accessor title = 'untitled';\n}\n\nconst m = new Model();\nm.title = 'draft';",
          },
          {
            type: "p",
            text: "This is the intended replacement for a large category of legacy decorator tricks - observable properties, validation on write, change tracking - that previously required rewriting a field into a getter/setter by hand. Reactivity libraries are the obvious consumer, and it composes naturally with the [signals proposal](/blog/javascript-signals-tc39-practical-guide) if that lands.",
          },
        ],
      },
      {
        heading: "What you lose by moving to standard decorators",
        blocks: [
          {
            type: "p",
            text: "This is the section that decides most migrations, and it is worth being blunt about.",
          },
          {
            type: "list",
            items: [
              "**Parameter decorators do not exist.** The standard proposal does not include them. If your codebase uses constructor-parameter injection - which is the entire dependency injection story in NestJS and Angular - there is no direct equivalent.",
              "**`emitDecoratorMetadata` is legacy-only.** The standard emits no `design:type`, `design:paramtypes` or `design:returntype` metadata. Any library that reads parameter types at runtime to wire things up depends on this.",
              "**A decorator cannot change the kind of a member.** You cannot turn a field into a method or a method into an accessor. Legacy decorators were looser here, and a few libraries relied on it.",
            ],
          },
          {
            type: "p",
            text: "Together these explain why the legacy flag has not gone anywhere. Frameworks built on runtime type metadata cannot simply switch, and the standard is not going to grow those features quickly, because reflecting parameter types is a TypeScript capability rather than a JavaScript one.",
          },
        ],
      },
      {
        heading: "What you gain",
        blocks: [
          {
            type: "list",
            items: [
              "**It is the actual language.** Once engines ship it natively, decorators stop being a compile-time transform. Your build output stops containing a helper shim.",
              "**Private member access.** `context.access` lets a decorator read and write `#private` fields, which the legacy API could not do at all.",
              "**A single coherent signature.** One shape for every placement, with `kind` to discriminate, instead of memorising which arguments arrive for which target.",
              "**Portability.** A standard decorator is plain JavaScript. It does not require TypeScript, a specific tsconfig, or Babel plugin ordering to behave correctly.",
            ],
          },
        ],
      },
      {
        heading: "So which should you use?",
        blocks: [
          {
            type: "p",
            text: "The guidance is less exciting than a clean answer, but it holds up:",
          },
          {
            type: "list",
            items: [
              "**New project, no framework demanding otherwise** - use the standard. Do not set `experimentalDecorators`. You are writing JavaScript that will keep working.",
              "**Existing NestJS, Angular or TypeORM codebase** - stay on legacy. The flag is supported, the metadata story works, and migrating is a rewrite of your DI layer for no user-visible benefit. This is not technical debt; it is the only option the framework offers.",
              "**Writing a library that others consume** - standard, and say so clearly in the README. Consumers on legacy cannot use your decorators, and they will find out at runtime otherwise.",
              "**Mixed monorepo** - the flag is per-tsconfig, so packages can differ. What cannot differ is a single package, and a decorator crossing that boundary will not work.",
            ],
          },
        ],
      },
      {
        heading: "The honest state of things",
        blocks: [
          {
            type: "p",
            text: "Decorators are still Stage 3 after four years, and the reasons are not trivial - class field initialisation order and the separate metadata proposal have both been genuinely hard. Native engine support is not something you can currently assume, so in practice you are still compiling them.",
          },
          {
            type: "p",
            text: "What has changed is the destination. Before TypeScript 5.0, everyone using decorators was using a draft that was never going to be standardised. Now there is a real target, and new code can be written against it. That is worth something even while the transform is still in your build.",
          },
          {
            type: "p",
            text: "If you are working through the recent additions to the language more broadly, the [`using` keyword](/blog/javascript-using-keyword-explicit-resource-management) is the other Stage 3 feature that changes how classes are written, and [ES2026's shipped set](/blog/es2026-array-fromasync-promise-try-regexp-escape) covers what has already landed rather than what is still pending.",
          },
        ],
      },
    ],
  },
  {
    slug: "abortsignal-timeout-any-request-timeouts",
    title:
      "AbortSignal.timeout() and AbortSignal.any(): Request Timeouts Without the setTimeout Dance",
    description:
      "Stop hand-rolling AbortController timeouts. How AbortSignal.timeout() and AbortSignal.any() work, how to tell a timeout from a user cancel, and what to watch for in Node.",
    datePublished: "2026-09-21",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Almost every codebase has this function in it somewhere. Someone needed a fetch with a timeout, discovered that `fetch` does not have one, found `AbortController`, and wrote the obvious thing:",
          },
          {
            type: "code",
            language: "js",
            code: "async function fetchWithTimeout(url, ms) {\n  const controller = new AbortController()\n  const timer = setTimeout(() => controller.abort(), ms)\n  try {\n    return await fetch(url, { signal: controller.signal })\n  } finally {\n    clearTimeout(timer)\n  }\n}",
          },
          {
            type: "p",
            text: "It works. It is also four moving parts to express one idea, it leaks a timer if you forget the `finally`, and the error it throws is indistinguishable from a user pressing cancel. All three of those have had a platform fix for a while now, and a surprising number of codebases have not picked it up.",
          },
        ],
      },
      {
        heading: "AbortSignal.timeout() is the whole thing",
        blocks: [
          {
            type: "p",
            text: "`AbortSignal.timeout(ms)` is a static method that hands you a signal which aborts itself after `ms` milliseconds. No controller, no timer variable, no cleanup.",
          },
          {
            type: "code",
            language: "js",
            code: "const res = await fetch(url, { signal: AbortSignal.timeout(5000) })",
          },
          {
            type: "p",
            text: "That is the entire replacement for the function above. It has been available in Node since **17.3**, and it is supported across current browsers.",
          },
          {
            type: "p",
            text: "Two details make it better than the hand-rolled version rather than merely shorter. First, there is no timer for you to leak: the signal owns its own timer and the platform cleans it up. In Node specifically, that timer does not hold the event loop open, so a script whose only pending work is an unfired timeout signal still exits cleanly. Second, and more usefully, it aborts with a different error.",
          },
        ],
      },
      {
        heading: "TimeoutError vs AbortError: the part people miss",
        blocks: [
          {
            type: "p",
            text: "When you call `controller.abort()` yourself, the rejection is a `DOMException` whose `name` is `\"AbortError\"`. When a timeout signal fires, the name is `\"TimeoutError\"`. That distinction is free, and it is the difference between a useful error path and a useless one.",
          },
          {
            type: "code",
            language: "js",
            code: "try {\n  const res = await fetch(url, { signal: AbortSignal.timeout(5000) })\n  return await res.json()\n} catch (err) {\n  if (err.name === 'TimeoutError') {\n    // the server was too slow - retry, or degrade\n    return null\n  }\n  if (err.name === 'AbortError') {\n    // the user navigated away - say nothing, do nothing\n    return null\n  }\n  throw err\n}",
          },
          {
            type: "p",
            text: "In the hand-rolled version both cases arrive as `AbortError`, which is why so many apps show a *Something went wrong* toast to users who simply clicked the back button. If you take one thing from this post, take this: stop swallowing every abort identically.",
          },
        ],
      },
      {
        heading: "AbortSignal.any() composes signals",
        blocks: [
          {
            type: "p",
            text: "Real requests usually have more than one reason to stop. A timeout, *and* a cancel button, *and* a React effect cleanup when the component unmounts. Before `AbortSignal.any()` you either nested controllers or wired `abort` listeners by hand.",
          },
          {
            type: "p",
            text: "`AbortSignal.any(iterable)` takes any iterable of signals and returns one signal that aborts as soon as the first of them does. The `reason` on the combined signal is the reason of whichever signal won, so the `err.name` check above still works unchanged.",
          },
          {
            type: "code",
            language: "js",
            code: "function load(url, userSignal) {\n  const signal = AbortSignal.any([\n    userSignal,\n    AbortSignal.timeout(10_000),\n  ])\n  return fetch(url, { signal })\n}",
          },
          {
            type: "p",
            text: "It became newly available across browsers in **Baseline 2024**, and landed in Node **20**. In React that gives you a clean effect:",
          },
          {
            type: "code",
            language: "jsx",
            code: "useEffect(() => {\n  const controller = new AbortController()\n  const signal = AbortSignal.any([\n    controller.signal,\n    AbortSignal.timeout(8000),\n  ])\n\n  fetch('/api/items', { signal })\n    .then((r) => r.json())\n    .then(setItems)\n    .catch((err) => {\n      if (err.name === 'TimeoutError') setError('The server took too long.')\n      // AbortError here means unmount - deliberately ignored\n    })\n\n  return () => controller.abort()\n}, [])",
          },
        ],
      },
      {
        heading: "The sharp edges",
        blocks: [
          {
            type: "p",
            text: "Three things are worth knowing before you put `AbortSignal.any()` on a hot path.",
          },
          {
            type: "list",
            items: [
              "**There is no way to unsubscribe.** A combined signal cannot be detached from its inputs. Aborting the combined signal does not abort the inputs or cancel their timeouts either - the composition is one-directional.",
              "**Listeners still need removing.** The spec links combined signals to their sources through weak references, but a non-aborted combined signal is kept alive while it has source signals and registered `abort` listeners. If you attach your own listener to a combined signal, remove it when the operation finishes, exactly as you would for any other signal.",
              "**Creating one per request in a tight loop is real work.** For a handful of concurrent requests this is irrelevant. For thousands, hoist the long-lived signals and only build the per-request timeout.",
            ],
          },
          {
            type: "p",
            text: "There is also one genuine reason to keep the old pattern: if you need to *extend* or *reset* the deadline while the request is in flight - a heartbeat-style idle timeout rather than a total-duration timeout - `AbortSignal.timeout()` cannot help you. Its clock starts when the signal is created and cannot be restarted. That is a case for a controller and a timer you own.",
          },
        ],
      },
      {
        heading: "It is not only for fetch",
        blocks: [
          {
            type: "p",
            text: "Both methods return a plain `AbortSignal`, so anything that accepts one accepts these. In the browser that includes `addEventListener` - passing a signal in the options object removes the listener when the signal aborts, which is the tidiest way to clean up a group of listeners at once.",
          },
          {
            type: "code",
            language: "js",
            code: "const signal = AbortSignal.timeout(30_000)\nwindow.addEventListener('scroll', onScroll, { signal })\nwindow.addEventListener('resize', onResize, { signal })\n// both listeners detach automatically after 30 seconds",
          },
          {
            type: "p",
            text: "In Node, most of the async APIs that can be cancelled take a `signal` option too - `fs/promises` reads, `readline`, `child_process`, stream helpers, timers promises. The same signal can gate all of them.",
          },
        ],
      },
      {
        heading: "What to change today",
        blocks: [
          {
            type: "list",
            items: [
              "Grep for `new AbortController()` followed by a `setTimeout`. Nearly all of those are one-line replacements.",
              "Grep for `err.name === 'AbortError'` and check whether the branch is really meant to catch timeouts too. Split it.",
              "Where a request has more than one cancellation source, compose with `AbortSignal.any()` instead of threading controllers through call signatures.",
              "Keep a hand-rolled controller only where you need to move the deadline after the fact.",
            ],
          },
          {
            type: "p",
            text: "If you want the broader picture of how signals, reasons and `throwIfAborted()` fit together, the [practical guide to AbortController and AbortSignal](/blog/abortcontroller-abortsignal-practical-guide) covers the fundamentals this post builds on.",
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-compare-sets-equality-subset-superset",
    title:
      "Comparing Two Sets in JavaScript: Equality, Subset, Superset and Disjoint",
    description:
      "JavaScript has isSubsetOf, isSupersetOf and isDisjointFrom but no equals. How to test set equality correctly, what set-like means, and the gotchas that bite.",
    datePublished: "2026-09-21",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "The 2024 Set methods gave JavaScript real set algebra: `union`, `intersection`, `difference` and `symmetricDifference` produce new sets, and `isSubsetOf`, `isSupersetOf` and `isDisjointFrom` answer yes-or-no questions about the relationship between two sets. They have been Baseline since June 2024 and are available in every current browser engine and in Node 22 and later.",
          },
          {
            type: "p",
            text: "There is one obvious question the proposal deliberately did not answer: are these two sets *equal*? There is no `Set.prototype.equals`. This post covers how to answer it correctly, the three comparison predicates that do exist, and the handful of things about these methods that surprise people the first time.",
          },
        ],
      },
      {
        heading: "The three comparison methods you do have",
        blocks: [
          {
            type: "p",
            text: "All three return a boolean and none of them mutates anything.",
          },
          {
            type: "code",
            language: "js",
            code: "const a = new Set([1, 2, 3]);\nconst b = new Set([1, 2, 3, 4, 5]);\nconst c = new Set([9, 10]);\n\na.isSubsetOf(b);     // true  - every member of a is in b\nb.isSupersetOf(a);   // true  - the same relation, read the other way\na.isDisjointFrom(c); // true  - they share nothing\na.isDisjointFrom(b); // false - they share 1, 2 and 3",
          },
          {
            type: "p",
            text: "Two properties of these worth internalising, because they are the source of most confusion:",
          },
          {
            type: "list",
            items: [
              "**Subset is not strict.** A set is a subset of itself. `a.isSubsetOf(a)` is `true`. There is no built-in strict-subset check - you compose one, which we will do below.",
              "**The empty set is a subset of everything** and is disjoint from everything, including itself. `new Set().isDisjointFrom(new Set())` is `true`. This is mathematically correct and it will still surprise you in a test at some point.",
            ],
          },
        ],
      },
      {
        heading: "Set equality: two correct ways",
        blocks: [
          {
            type: "p",
            text: "Two sets are equal when each is a subset of the other. That is the definition, and it is also a perfectly good implementation:",
          },
          {
            type: "code",
            language: "js",
            code: "const setsEqual = (a, b) => a.isSubsetOf(b) && b.isSubsetOf(a);",
          },
          {
            type: "p",
            text: "It is correct and it reads like the maths. It is also doing more work than it needs to, because each call walks a whole set. The faster version uses the fact that for two sets, equal size plus one-way containment is enough:",
          },
          {
            type: "code",
            language: "js",
            code: "const setsEqual = (a, b) => a.size === b.size && a.isSubsetOf(b);",
          },
          {
            type: "p",
            text: "The size check is an O(1) early exit that rejects most unequal pairs immediately, and when the sizes do match, a one-way subset test is sufficient. This is the version to reach for.",
          },
          {
            type: "p",
            text: "If you are stuck on an older runtime without the Set methods, the hand-rolled equivalent is short:",
          },
          {
            type: "code",
            language: "js",
            code: "const setsEqual = (a, b) => {\n  if (a.size !== b.size) return false;\n  for (const value of a) {\n    if (!b.has(value)) return false;\n  }\n  return true;\n};",
          },
        ],
      },
      {
        heading: "Strict subset and strict superset",
        blocks: [
          {
            type: "p",
            text: "Strict (or proper) subset means every member of `a` is in `b` **and** `b` has something `a` does not. Compose it from the size:",
          },
          {
            type: "code",
            language: "js",
            code: "const isStrictSubset = (a, b) => a.size < b.size && a.isSubsetOf(b);\nconst isStrictSuperset = (a, b) => a.size > b.size && a.isSupersetOf(b);\n\nconst x = new Set([1, 2]);\nconst y = new Set([1, 2, 3]);\n\nisStrictSubset(x, y); // true\nisStrictSubset(x, x); // false",
          },
        ],
      },
      {
        heading: "The argument has to be set-like, not merely iterable",
        blocks: [
          {
            type: "p",
            text: "This is the single most common runtime error with these methods, and it is easy to get wrong because it reads like it should work:",
          },
          {
            type: "code",
            language: "js",
            code: "const a = new Set([1, 2, 3]);\n\na.isSubsetOf([1, 2, 3, 4]);\n// TypeError: object is not set-like",
          },
          {
            type: "p",
            text: "Every one of the new methods requires a **set-like** argument: an object with a numeric `size` property, a callable `has` method, and a callable `keys` method that returns an iterator. An array has none of those. A plain iterable has none of those.",
          },
          {
            type: "p",
            text: "So arrays need wrapping, and the wrap is cheap enough not to think about:",
          },
          {
            type: "code",
            language: "js",
            code: "a.isSubsetOf(new Set([1, 2, 3, 4])); // true",
          },
          {
            type: "p",
            text: "The pleasant consequence of the set-like contract is that a `Map` satisfies it - `size`, `has` and `keys` are all there - so you can compare a Set against a Map's keys directly without materialising them:",
          },
          {
            type: "code",
            language: "js",
            code: "const required = new Set([\"id\", \"email\"]);\nconst record = new Map([\n  [\"id\", 7],\n  [\"email\", \"a@b.c\"],\n  [\"name\", \"Ada\"],\n]);\n\nrequired.isSubsetOf(record); // true - compares against record's keys",
          },
          {
            type: "p",
            text: "Any object you write yourself with those three members works too, which is the intended extension point for custom collection types.",
          },
        ],
      },
      {
        heading: "How values are compared",
        blocks: [
          {
            type: "p",
            text: "Set membership uses SameValueZero, the same algorithm `Set` and `Map` have always used. Practically:",
          },
          {
            type: "list",
            items: [
              "`NaN` equals `NaN`, so a set containing `NaN` behaves sanely.",
              "`0` and `-0` are the same member.",
              "Everything else is strict equality, which means **objects compare by identity**.",
            ],
          },
          {
            type: "p",
            text: "That last point is the one that quietly ruins comparisons of sets of objects:",
          },
          {
            type: "code",
            language: "js",
            code: "const a = new Set([{ id: 1 }]);\nconst b = new Set([{ id: 1 }]);\n\nsetsEqual(a, b); // false - two distinct object references",
          },
          {
            type: "p",
            text: "There is no built-in structural comparison, and adding one is not a small ask - you would need a canonical key per value. The pragmatic approach is to compare sets of primitive keys and keep the objects in a `Map` beside them:",
          },
          {
            type: "code",
            language: "js",
            code: "const byId = new Map(users.map((u) => [u.id, u]));\nconst incoming = new Set(payload.map((u) => u.id));\nconst existing = new Set(byId.keys());\n\nconst added = incoming.difference(existing);\nconst removed = existing.difference(incoming);\nconst unchanged = incoming.intersection(existing);",
          },
          {
            type: "p",
            text: "That diff-by-id shape is by far the most common real use of these methods, and it sidesteps identity comparison entirely.",
          },
        ],
      },
      {
        heading: "One asymmetry worth knowing",
        blocks: [
          {
            type: "p",
            text: "`union`, `intersection` and the rest return a new `Set` whose insertion order follows the receiver first, then the argument. That matters if you iterate the result, and it means `a.union(b)` and `b.union(a)` contain the same members in a different order. Set equality, being order-independent, is unaffected - but `JSON.stringify([...a])` comparisons are not, which is one more reason not to use stringification as an equality test.",
          },
        ],
      },
      {
        heading: "The short version",
        blocks: [
          {
            type: "list",
            items: [
              "Equality: `a.size === b.size && a.isSubsetOf(b)`. There is no built-in `equals`.",
              "Strict subset: `a.size < b.size && a.isSubsetOf(b)`.",
              "Arguments must be set-like (`size`, `has`, `keys`) - arrays throw, `Map` works.",
              "Membership is SameValueZero, so objects compare by reference. Diff by id instead.",
              "Baseline since June 2024; Node 22+.",
            ],
          },
          {
            type: "p",
            text: "If you want the producing half of this - union, intersection, difference and symmetricDifference with the performance notes - that is in the [guide to the JavaScript Set methods](/blog/javascript-set-methods-union-intersection-difference).",
          },
        ],
      },
    ],
  },
  {
    slug: "promise-withresolvers-practical-guide",
    title: "Promise.withResolvers(): The Escape Hatch for Promises You Resolve Later",
    description:
      "Promise.withResolvers() is now widely available. A practical guide to what it replaces, where it genuinely helps, and the two places it will quietly hurt you.",
    datePublished: "2026-09-22",
    readingMinutes: 9,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "There is a pattern almost every JavaScript codebase has a version of: you need a promise now, but the thing that settles it happens somewhere else entirely — an event listener, a message handler, a callback from a library you do not control.",
          },
          {
            type: "p",
            text: "For years the only way to write that was the *deferred* trick: declare two variables, construct a promise, and reach into the executor to smuggle `resolve` and `reject` back out. `Promise.withResolvers()` is the standard version of that trick, and as of September 2026 it has crossed into *widely available* on the Baseline scale — supported since Chrome 119, Edge 119, Firefox 121 and Safari 17.4.",
          },
        ],
      },
      {
        heading: "The pattern it replaces",
        blocks: [
          {
            type: "p",
            text: "Here is the shape you have almost certainly written:",
          },
          {
            type: "code",
            language: "javascript",
            code: "let resolve;\nlet reject;\n\nconst promise = new Promise((res, rej) => {\n  resolve = res;\n  reject = rej;\n});\n\n// ...somewhere far away\nsocket.addEventListener('message', (e) => resolve(e.data));",
          },
          {
            type: "p",
            text: "It works, but it is genuinely awkward. The two variables are declared with `let` because they must be, so they are mutable forever. They are typed as possibly-undefined in TypeScript even though you know the executor runs synchronously. And the whole thing takes six lines to express one idea.",
          },
          {
            type: "p",
            text: "The replacement is one line:",
          },
          {
            type: "code",
            language: "javascript",
            code: "const { promise, resolve, reject } = Promise.withResolvers();\n\nsocket.addEventListener('message', (e) => resolve(e.data));",
          },
          {
            type: "p",
            text: "Three `const` bindings, no mutation, no undefined-until-proven-otherwise. `Promise.withResolvers()` returns a plain object with exactly those three properties. That is the entire API.",
          },
        ],
      },
      {
        heading: "Where it actually earns its place",
        blocks: [
          {
            type: "p",
            text: "The method is small enough that the interesting question is not how it works but when reaching for it is the right call. Four cases come up repeatedly.",
          },
          {
            type: "p",
            text: "**Bridging an event-based API to async/await.** Anything where the resolution arrives through a listener rather than a return value — WebSockets, `postMessage`, a legacy library that takes a callback.",
          },
          {
            type: "code",
            language: "javascript",
            code: "function waitForWorkerReady(worker) {\n  const { promise, resolve, reject } = Promise.withResolvers();\n\n  worker.addEventListener('message', function onMessage(e) {\n    if (e.data?.type === 'ready') {\n      worker.removeEventListener('message', onMessage);\n      resolve(e.data.payload);\n    }\n  }, { once: false });\n\n  worker.addEventListener('error', reject, { once: true });\n\n  return promise;\n}",
          },
          {
            type: "p",
            text: "**A queue of pending requests keyed by id.** This is where it shines most, because the resolver has to survive in a data structure until a matching response arrives — exactly the case the old deferred pattern handled worst.",
          },
          {
            type: "code",
            language: "javascript",
            code: "const pending = new Map();\n\nexport function request(method, params) {\n  const id = crypto.randomUUID();\n  const { promise, resolve, reject } = Promise.withResolvers();\n\n  pending.set(id, { resolve, reject });\n  socket.send(JSON.stringify({ id, method, params }));\n\n  return promise;\n}\n\nsocket.addEventListener('message', (e) => {\n  const msg = JSON.parse(e.data);\n  const entry = pending.get(msg.id);\n  if (!entry) return;\n\n  pending.delete(msg.id);\n  if (msg.error) entry.reject(new Error(msg.error));\n  else entry.resolve(msg.result);\n});",
          },
          {
            type: "p",
            text: "**A one-shot latch.** Something that many callers await and one caller opens — a config load, an auth handshake, a feature-flag fetch.",
          },
          {
            type: "code",
            language: "javascript",
            code: "const ready = Promise.withResolvers();\n\nexport const whenReady = () => ready.promise;\nexport const markReady = (value) => ready.resolve(value);",
          },
          {
            type: "p",
            text: "Note that calling `resolve` a second time is a harmless no-op — a promise settles once and ignores everything after — so a latch built this way is naturally idempotent without any guard of your own.",
          },
          {
            type: "p",
            text: "**Tests that need to control timing.** Being able to hold a promise open, assert on the loading state, and then resolve it on your own schedule is far cleaner than racing a timer.",
          },
        ],
      },
      {
        heading: "Two places it will quietly hurt you",
        blocks: [
          {
            type: "p",
            text: "This is the part most introductions skip, and both problems come from the same root cause: the promise and the code that settles it are no longer in the same place.",
          },
          {
            type: "p",
            text: "**Unhandled rejections get harder to trace.** With `new Promise(executor)`, a throw inside the executor automatically rejects the promise. With `withResolvers()` there is no executor, so a throw in your surrounding code does *not* reject anything — it propagates normally and leaves the promise pending forever. Any caller awaiting it hangs silently, with no error, no timeout and no stack trace pointing at the cause.",
          },
          {
            type: "code",
            language: "javascript",
            code: "// The bug: setup throws, the promise is never settled,\n// and every awaiting caller hangs forever.\nfunction connect() {\n  const { promise, resolve, reject } = Promise.withResolvers();\n\n  const socket = openSocket();   // throws\n  socket.onopen = () => resolve(socket);\n\n  return promise;\n}\n\n// The fix: settle it yourself.\nfunction connectSafely() {\n  const { promise, resolve, reject } = Promise.withResolvers();\n\n  try {\n    const socket = openSocket();\n    socket.onopen = () => resolve(socket);\n    socket.onerror = () => reject(new Error('socket failed'));\n  } catch (err) {\n    reject(err);\n  }\n\n  return promise;\n}",
          },
          {
            type: "p",
            text: "**Nobody owns the timeout.** A deferred promise has no inherent lifetime. In the request-queue example above, if a response never arrives, that entry sits in the `Map` forever and the caller waits forever. The old executor pattern had the same flaw, but the ergonomics of `withResolvers()` make the pattern attractive enough that you will use it in more places — so the leak shows up in more places too.",
          },
          {
            type: "p",
            text: "The fix is to give every deferred promise an owner and a deadline. `AbortSignal.timeout()` pairs with this well:",
          },
          {
            type: "code",
            language: "javascript",
            code: "function requestWithTimeout(method, params, ms = 10000) {\n  const { promise, resolve, reject } = Promise.withResolvers();\n  const id = crypto.randomUUID();\n  const signal = AbortSignal.timeout(ms);\n\n  signal.addEventListener('abort', () => {\n    pending.delete(id);\n    reject(signal.reason);\n  }, { once: true });\n\n  pending.set(id, { resolve, reject });\n  socket.send(JSON.stringify({ id, method, params }));\n\n  return promise;\n}",
          },
          {
            type: "p",
            text: "I wrote about the signal side of this separately in the guides on [AbortController and AbortSignal](/blog/abortcontroller-abortsignal-practical-guide) and [AbortSignal.timeout and AbortSignal.any](/blog/abortsignal-timeout-any-request-timeouts).",
          },
        ],
      },
      {
        heading: "When not to use it",
        blocks: [
          {
            type: "p",
            text: "The honest trade-off: `Promise.withResolvers()` makes a pattern more pleasant to write, and that pattern is one you should mostly be avoiding.",
          },
          {
            type: "p",
            text: "If the async work is already promise-shaped, `new Promise()` with a real executor is *better*, not worse — it keeps creation and settlement in one lexically scoped place, and it converts throws into rejections for free. If you are wrapping a callback API in a function that returns immediately, the executor form is still the right answer:",
          },
          {
            type: "code",
            language: "javascript",
            code: "// Still the better shape — don't 'upgrade' this.\nconst readFile = (path) =>\n  new Promise((resolve, reject) => {\n    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)));\n  });",
          },
          {
            type: "p",
            text: "`withResolvers()` is for the genuinely harder case where the resolver must outlive the function that created it. Used there it is a clear improvement. Used as a blanket replacement for `new Promise()`, it scatters your settlement logic across a file and throws away the automatic error handling the executor gave you.",
          },
        ],
      },
      {
        heading: "Support and fallback",
        blocks: [
          {
            type: "p",
            text: "Baseline-wise it went newly available in March 2024 and reached widely available in September 2026, which means it is now safe in ordinary browser code without a polyfill for most audiences. Node has supported it since v22.",
          },
          {
            type: "p",
            text: "If you still need to support something older, the polyfill is four lines and needs no feature detection beyond the existence check:",
          },
          {
            type: "code",
            language: "javascript",
            code: "if (typeof Promise.withResolvers !== 'function') {\n  Promise.withResolvers = function withResolvers() {\n    let resolve, reject;\n    const promise = new this((res, rej) => {\n      resolve = res;\n      reject = rej;\n    });\n    return { promise, resolve, reject };\n  };\n}",
          },
          {
            type: "p",
            text: "Note the `new this(...)` rather than `new Promise(...)` — that is what the spec does, and it keeps the method working on Promise subclasses.",
          },
        ],
      },
      {
        heading: "The short version",
        blocks: [
          {
            type: "p",
            text: "Use `Promise.withResolvers()` when the thing that settles the promise lives somewhere the executor cannot reach — an event listener, a message router, a map of pending requests. Keep `new Promise()` when it can.",
          },
          {
            type: "p",
            text: "And whenever you reach for it, write down two things at the same time: what rejects this, and what times it out. The method removes the boilerplate; it does not remove the responsibility that the boilerplate was hiding.",
          },
        ],
      },
    ],
  },
  {
    slug: "import-text-modules-javascript",
    title: "Import Text: Loading Text Files as Modules in JavaScript",
    description:
      "The TC39 import-text proposal reached Stage 3. What it does, how it differs from JSON modules and bundler loaders, and why it is a smaller feature than it looks.",
    datePublished: "2026-09-23",
    readingMinutes: 8,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every JavaScript project eventually accumulates a folder of text that is not code. SQL queries. GraphQL documents. Shader source. Prompt templates. Email bodies. License headers. None of it is JavaScript, all of it needs to end up in a JavaScript string, and the ways we currently get it there are all slightly unsatisfying.",
          },
          {
            type: "p",
            text: "The **import text** proposal, which advanced to Stage 3 in 2026, gives the language a standard answer. It is a small feature with an outsized effect on a very specific kind of daily friction, and it is worth understanding precisely because it is easy to overestimate what it does.",
          },
        ],
      },
      {
        heading: "What we do today, and why each option annoys us",
        blocks: [
          {
            type: "p",
            text: "There are roughly four existing approaches, and each one trades away something you would rather keep.",
          },
          {
            type: "list",
            items: [
              "**Inline template literals.** Zero tooling, but you lose syntax highlighting, formatting, and any chance of a linter understanding the embedded language. A 200-line SQL query inside a `.js` file is nobody's idea of maintainable.",
              "**Bundler loaders.** Webpack's `raw-loader`, Vite's `?raw` suffix, esbuild's `text` loader. They work well, but they are bundler-specific syntax inside your source files, which means the same file cannot be run by Node or a different bundler without changes.",
              "**Runtime file reads.** `readFileSync` gets you the string, but it is synchronous I/O at module scope, it needs path resolution relative to the module, and it does not work in a browser at all.",
              "**A build step that generates JS.** Reliable, and the worst developer experience of the four: an extra pipeline stage between editing a file and seeing the change.",
            ],
          },
          {
            type: "p",
            text: "What all four have in common is that the language itself has no opinion. Each ecosystem invented its own convention, and the conventions do not travel.",
          },
        ],
      },
      {
        heading: "What import text actually does",
        blocks: [
          {
            type: "p",
            text: "It builds on import attributes, the same mechanism that powers JSON modules. You declare the type of the thing you are importing, and the host gives you back a module whose default export is a string.",
          },
          {
            type: "code",
            language: "javascript",
            code: 'import query from "./queries/active-users.sql" with { type: "text" };\n\nconsole.log(typeof query); // "string"',
          },
          {
            type: "p",
            text: "And the dynamic form, which is the one you are more likely to reach for in practice, since text assets are frequently optional or lazily needed:",
          },
          {
            type: "code",
            language: "javascript",
            code: 'const { default: template } = await import("./templates/welcome.txt", {\n  with: { type: "text" },\n});',
          },
          {
            type: "p",
            text: "That is essentially the whole feature. The file contents become a string, decoded as UTF-8, exposed as the default export. There are no named exports, no parsing, no interpretation of the content whatsoever.",
          },
        ],
      },
      {
        heading: "Why the attribute is mandatory",
        blocks: [
          {
            type: "p",
            text: "The `with { type: \"text\" }` clause is not optional syntax sugar, and the reason is the same security argument that shaped JSON modules.",
          },
          {
            type: "p",
            text: "Without it, the interpretation of an imported file would depend on the server's `Content-Type` response header. A server that started returning `text/javascript` for something you expected to be inert text would turn a data import into code execution. Requiring the importer to state the expected type up front means the check runs on your side: if the host cannot honour the declared type, the import fails rather than quietly doing something else.",
          },
          {
            type: "p",
            text: "This is the same design I covered when writing about [JSON modules and import attributes](/blog/json-modules-import-attributes) — the attribute is a caller-side assertion, not a hint.",
          },
        ],
      },
      {
        heading: "The part people get wrong: this is not a replacement for loaders",
        blocks: [
          {
            type: "p",
            text: "It is tempting to read this as \"bundler text loaders are now obsolete\". They are not, and the gap is worth being precise about.",
          },
          {
            type: "p",
            text: "A bundler loader is a transformation pipeline. It can minify the text, strip comments, run a preprocessor, inline other files, or emit the content as a separate asset with a hashed URL. Import text does none of that. It hands you bytes decoded as UTF-8 and stops.",
          },
          {
            type: "p",
            text: "What it genuinely replaces is the *trivial* case — the one where you were reaching for `?raw` purely to get a string, with no transformation. That is a large share of real usage, but not all of it. If your loader configuration does anything beyond reading the file, it stays.",
          },
        ],
      },
      {
        heading: "Encoding and the edge cases worth knowing",
        blocks: [
          {
            type: "p",
            text: "A few practical details that will save you a confusing afternoon.",
          },
          {
            type: "list",
            items: [
              "The content is decoded as **UTF-8**. There is no encoding option. A Latin-1 file will import, and it will be wrong.",
              "Binary files are not a use case. If the bytes are not valid UTF-8 you get replacement characters, not an error you can act on.",
              "There is exactly one export, the default. You cannot destructure named exports out of a text module, because there is nothing to name.",
              "Module caching applies as it does everywhere else — importing the same text file from ten modules reads it once.",
              "Line endings come through as they are in the file. If you check in CRLF and your assertions expect LF, that is now a runtime concern rather than a build-time one.",
            ],
          },
        ],
      },
      {
        heading: "Where it fits with the rest of the module story",
        blocks: [
          {
            type: "p",
            text: "Import text is the third piece of a pattern that has been assembling for a few years. Import attributes gave us a way to declare intent. JSON modules used that to make structured data importable. Import text does the same for unstructured data. The same machinery is what makes [deferred module evaluation](/blog/import-defer-lazy-module-evaluation) composable with these — you can defer a module that pulls in a large text asset and pay the cost only when it is first touched.",
          },
          {
            type: "p",
            text: "The direction is clear enough: the module system is slowly absorbing the jobs that build tooling took on because the language had nothing to say. That does not eliminate build tooling, but it does shrink the surface area where every project has to make its own choices.",
          },
        ],
      },
      {
        heading: "Should you use it yet?",
        blocks: [
          {
            type: "p",
            text: "Stage 3 means the specification is considered complete and implementations are expected, not that it is available everywhere today. Check your target runtimes before adopting it in production, and remember that bundlers may need to understand the syntax even if the runtime does.",
          },
          {
            type: "p",
            text: "Where it is worth planning for: anywhere you currently have bundler-specific import syntax purely to load a string. Migrating that to `with { type: \"text\" }` makes the file portable across runtimes and bundlers, which is the actual win here — not saving a character, but removing a build-tool dependency from your source code.",
          },
          {
            type: "p",
            text: "Where it is not worth chasing: if your text loading already works and is confined to one bundler you have no intention of leaving, this changes nothing for you. It is a standardisation win, not a capability win, and there is no shame in waiting for it to become boring.",
          },
        ],
      },
    ],
  },
  ...appPosts,
];

export const getAllPosts = () =>
  posts
    .slice()
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export const getPostBySlug = (slug) =>
  posts.find((p) => p.slug === slug) || null;
