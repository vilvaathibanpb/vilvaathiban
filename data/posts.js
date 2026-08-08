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
// 2. Add a <url> entry for https://vilvaathiban.com/blog/<slug> to public/sitemap.xml.
// No other changes are needed — /blog and /blog/[slug] pick posts up statically.

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
];

export const getAllPosts = () =>
  posts
    .slice()
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export const getPostBySlug = (slug) =>
  posts.find((p) => p.slug === slug) || null;
