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
];

export const getAllPosts = () =>
  posts
    .slice()
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export const getPostBySlug = (slug) =>
  posts.find((p) => p.slug === slug) || null;
