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
];

export const getAllPosts = () =>
  posts
    .slice()
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export const getPostBySlug = (slug) =>
  posts.find((p) => p.slug === slug) || null;
