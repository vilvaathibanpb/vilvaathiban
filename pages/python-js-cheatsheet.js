import Head from "next/head";
import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { SECTIONS, FAQS, TOTAL_ROWS } from "../data/jsPythonCheatsheet";

const URL = "https://vilvaathiban.com/python-js-cheatsheet";

const COURSE_URL =
  "https://www.udemy.com/course/python-for-javascript-developers-become-an-ai-engineer-/?referralCode=EB10E216AF4BB05E1B62";

// ---------------------------------------------------------------- structured data

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline:
      "JavaScript to Python Cheatsheet — Searchable Side-by-Side Equivalents",
    description:
      "A searchable JavaScript → Python cheatsheet with side-by-side code equivalents for syntax, strings, arrays, dicts, classes, async, errors, tooling and the whole standard library.",
    url: URL,
    inLanguage: "en",
    keywords:
      "javascript to python cheatsheet, python for javascript developers, js vs python syntax, python equivalent of javascript",
    proficiencyLevel: "Beginner",
    author: {
      "@type": "Person",
      name: "Vilva Athiban P B",
      jobTitle: "Lead AI Engineer",
      url: "https://vilvaathiban.com/about",
    },
    publisher: {
      "@type": "Person",
      name: "Vilva Athiban P B",
      url: "https://vilvaathiban.com",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "JavaScript to Python cheatsheet sections",
    itemListElement: SECTIONS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${URL}#${s.id}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://vilvaathiban.com",
    name: "vilvaathiban.com",
    potentialAction: {
      "@type": "SearchAction",
      target: `${URL}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
];

const META_DESCRIPTION = `Searchable JavaScript → Python cheatsheet: ${TOTAL_ROWS} side-by-side equivalents across ${SECTIONS.length} groups — syntax, strings, arrays vs lists, objects vs dicts, classes, async/await, errors, npm vs uv and the standard library. Built for JavaScript developers learning Python.`;

const META_KEYWORDS = [
  "javascript to python cheatsheet",
  "python cheat sheet for javascript developers",
  "js to python",
  "python vs javascript syntax",
  "javascript python comparison",
  "python equivalent of javascript",
  "learn python from javascript",
  "python for js developers",
  "console.log in python",
  "javascript array methods in python",
  "map filter reduce python equivalent",
  "javascript object to python dictionary",
  "python f-string vs template literal",
  "async await python vs javascript",
  "npm equivalent in python",
  "javascript developer learning python",
  "python syntax cheat sheet",
  "js vs python side by side",
].join(", ");

// ---------------------------------------------------------------- search helpers

const normalise = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();

const scrollBehaviour = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

function useDebounced(value, ms) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return v;
}

// ---------------------------------------------------------------- page

export default function PythonJsCheatsheet() {
  const [rawQuery, setRawQuery] = useState("");
  const query = useDebounced(rawQuery, 120);
  const [copied, setCopied] = useState("");
  const inputRef = useRef(null);
  const barRef = useRef(null);
  const resultsRef = useRef(null);

  // Keyboard: "/" focuses search, Escape clears it.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setRawQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Deep-linkable search: /python-js-cheatsheet?q=reduce
  const hydrated = useRef(false);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setRawQuery(q);
    hydrated.current = true;
  }, []);

  // Keep ?q= in sync so a search is shareable, without adding history entries.
  useEffect(() => {
    if (!hydrated.current) return;
    const url = query
      ? `${window.location.pathname}?q=${encodeURIComponent(query)}`
      : window.location.pathname;
    window.history.replaceState(null, "", url + window.location.hash);
  }, [query]);

  // Puts the first match directly under the sticky search box. The bar is
  // measured rather than hardcoded because it grows by the match-count row.
  const scrollToResults = useCallback(() => {
    const anchor = resultsRef.current;
    if (!anchor) return;
    const barHeight = barRef.current?.offsetHeight || 0;
    const top = Math.max(
      0,
      window.scrollY + anchor.getBoundingClientRect().top - barHeight - 12
    );
    // Only pull the page down to the results; never yank a reader who has
    // already scrolled past them back up.
    if (window.scrollY >= top - 2) return;
    window.scrollTo({ top, behavior: scrollBehaviour() });
  }, []);

  // The cue floats above the page, so it has to retire once you have actually
  // reached the rows — otherwise it just covers them.
  const [cueHidden, setCueHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const anchor = resultsRef.current;
      if (!anchor) return;
      setCueHidden(anchor.getBoundingClientRect().top <= window.innerHeight / 2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Searching should put the results under the search box — otherwise the
  // intro and the course card sit between the query and its matches. The
  // filtered DOM and the match-count row are already committed here, so the
  // measurements above are correct.
  const prevQuery = useRef("");
  useEffect(() => {
    const had = prevQuery.current;
    prevQuery.current = query;
    if (!hydrated.current) return;
    // Clearing the search takes you back to the whole sheet.
    if (!query) {
      if (had) window.scrollTo({ top: 0, behavior: scrollBehaviour() });
      return;
    }
    scrollToResults();
  }, [query, scrollToResults]);

  const terms = useMemo(
    () => normalise(query).split(" ").filter(Boolean),
    [query]
  );

  const results = useMemo(() => {
    if (!terms.length) return SECTIONS;
    return SECTIONS.map((section) => {
      const sectionHay = normalise(`${section.title} ${section.blurb}`);
      const rows = section.rows.filter((row) => {
        const hay = normalise(`${row[0]} ${row[1]} ${row[2] || ""}`);
        return terms.every((t) => hay.includes(t) || sectionHay.includes(t));
      });
      return { ...section, rows };
    }).filter((s) => s.rows.length);
  }, [terms]);

  const matchCount = results.reduce((n, s) => n + s.rows.length, 0);

  const copy = useCallback((text) => {
    navigator.clipboard?.writeText(text).then(
      () => {
        setCopied(text);
        setTimeout(() => setCopied(""), 1200);
      },
      () => {}
    );
  }, []);

  return (
    <Page>
      <Head>
        <title>
          JavaScript to Python Cheatsheet — Searchable Side-by-Side Equivalents
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={URL} />
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content={META_KEYWORDS} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Vilva Athiban P B" />
        <meta name="theme-color" content="#111827" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="vilvaathiban.com" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={URL} />
        <meta
          property="og:title"
          content="JavaScript to Python Cheatsheet — Searchable Side-by-Side Equivalents"
        />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JavaScript to Python Cheatsheet — Searchable"
        />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
        />
      </Head>

      <Bar ref={barRef}>
        <BarInner>
          <BarText>
            <BarTitle>JavaScript → Python cheatsheet</BarTitle>
            <BarSub>
              {TOTAL_ROWS} side-by-side equivalents across {SECTIONS.length}{" "}
              groups
            </BarSub>
          </BarText>
          <SearchWrap>
            <SearchIcon aria-hidden="true">⌕</SearchIcon>
            <SearchInput
              ref={inputRef}
              type="search"
              value={rawQuery}
              onChange={(e) => setRawQuery(e.target.value)}
              placeholder="Search — try map, JSON.stringify, class, await…"
              aria-label="Search JavaScript to Python equivalents"
              autoComplete="off"
              spellCheck="false"
            />
            <Kbd aria-hidden="true">/</Kbd>
          </SearchWrap>
        </BarInner>
        {rawQuery ? (
          <Count aria-live="polite">
            {matchCount
              ? `${matchCount} match${matchCount === 1 ? "" : "es"} in ${
                  results.length
                } group${results.length === 1 ? "" : "s"}`
              : "No matches — try a shorter term like “map”, “dict” or “async”"}
          </Count>
        ) : null}
      </Bar>

      <Layout>
        <Sidebar aria-label="Cheatsheet sections">
          <SidebarTitle>Groups</SidebarTitle>
          <SideList>
            {results.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span>{s.title}</span>
                  <em>{s.rows.length}</em>
                </a>
              </li>
            ))}
          </SideList>
        </Sidebar>

        <Main>
          <Intro>
            <h1>JavaScript to Python cheatsheet</h1>
            <p>
              Everything a JavaScript developer needs to write Python, as
              side-by-side code. Search for any JavaScript concept —{" "}
              <code>map</code>, <code>Object.keys</code>,{" "}
              <code>JSON.stringify</code>, <code>Promise.all</code>,{" "}
              <code>try/catch</code> — and get the Python equivalent with the
              gotcha that comes with it.
            </p>
            <Rule>
              <strong>The golden rule:</strong> JavaScript is permissive and
              coerces types aggressively. Python is strict and refuses to guess
              — you convert explicitly. Indentation is real syntax; there are no
              braces.
            </Rule>
          </Intro>

          <Pitch>
            <PitchFace>
              <img
                src="/vilva.png"
                alt="Vilva Athiban P B"
                width="64"
                height="64"
              />
            </PitchFace>
            <PitchBody>
              <PitchKicker>From the person who wrote this sheet</PitchKicker>
              <h2>
                A cheatsheet makes you read Python. The course makes you build
                with it.
              </h2>
              <p>
                I&apos;m Vilva — I built this page out of the notes I use to
                teach JavaScript developers Python for AI work. The full course,{" "}
                <em>Python for JavaScript Developers: Become an AI Engineer</em>
                , takes the same JS-first route: every idea mapped from what you
                already know, then straight into writing real AI systems in
                Python.
              </p>
              <PitchActions>
                <PitchCta href={COURSE_URL} target="_blank" rel="noopener">
                  Take the course on Udemy
                  <PitchArrow aria-hidden="true">→</PitchArrow>
                </PitchCta>
                <PitchMeta>Self-paced · lifetime access</PitchMeta>
              </PitchActions>
            </PitchBody>
          </Pitch>

          <ResultsAnchor ref={resultsRef} aria-hidden="true" />

          {results.map((section) => (
            <Section key={section.id} id={section.id}>
              <SectionHead>
                <h2>
                  <a href={`#${section.id}`} aria-label={section.title}>
                    {section.title}
                  </a>
                </h2>
                <p>{section.blurb}</p>
              </SectionHead>

              <Table>
                <thead>
                  <tr>
                    <th scope="col">JavaScript</th>
                    <th scope="col">Python</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, i) => (
                    <tr key={`${section.id}-${i}`}>
                      <td data-label="JavaScript">
                        <Code
                          onClick={() => copy(row[0])}
                          title="Click to copy"
                          $copied={copied === row[0]}
                        >
                          {row[0]}
                        </Code>
                      </td>
                      <td data-label="Python">
                        <Code
                          $py
                          onClick={() => copy(row[1])}
                          title="Click to copy"
                          $copied={copied === row[1]}
                        >
                          {row[1]}
                        </Code>
                      </td>
                      <td data-label="Notes">
                        <Note>{row[2]}</Note>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Section>
          ))}

          {!results.length ? (
            <Empty>
              <h2>Nothing matched “{rawQuery}”</h2>
              <p>
                Try a shorter or more general term — <code>map</code>,{" "}
                <code>dict</code>, <code>async</code>, <code>class</code>,{" "}
                <code>import</code>, <code>string</code>.
              </p>
            </Empty>
          ) : null}

          <EndCta>
            <div>
              <h2>You&apos;ve got the syntax. Now build something with it.</h2>
              <p>
                Python for JavaScript Developers: Become an AI Engineer — the
                course this cheatsheet came out of.
              </p>
            </div>
            <PitchCta href={COURSE_URL} target="_blank" rel="noopener">
              Take the course on Udemy
              <PitchArrow aria-hidden="true">→</PitchArrow>
            </PitchCta>
          </EndCta>

          <Faq id="faq">
            <h2>JavaScript to Python — frequently asked questions</h2>
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Faq>

          <Foot>
            <p>
              Written by Vilva Athiban P B, Lead AI Engineer — from teaching
              JavaScript developers Python for AI and data work. Press{" "}
              <Kbd as="span" $inline>/</Kbd> to search, <Kbd as="span" $inline>Esc</Kbd> to
              clear, and click any snippet to copy it.
            </p>
          </Foot>
        </Main>
      </Layout>

      <CueMotion />
      <CueDock data-hidden={cueHidden ? "true" : "false"}>
        <Cue
          type="button"
          onClick={scrollToResults}
          aria-label={`Jump to the ${TOTAL_ROWS} equivalents`}
        >
          <CueLabel>
            Straight to the {TOTAL_ROWS} equivalents — free, no signup
          </CueLabel>
          <CueChevron aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CueChevron>
        </Cue>
      </CueDock>
    </Page>
  );
}

// ---------------------------------------------------------------- styles

const SANS = `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
const MONO = `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`;

const Page = styled.div`
  background: #fafaf7;
  min-height: 100vh;
  color: #111827;
  font-family: ${SANS};
`;

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(250, 250, 247, 0.94);
  backdrop-filter: saturate(180%) blur(8px);
  border-bottom: 1px solid #ececea;
`;

const BarInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 12px 16px;
  }
`;

const BarText = styled.div`
  flex: 0 0 auto;
`;

const BarTitle = styled.div`
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
`;

const BarSub = styled.div`
  font-size: 12px;
  color: #475569;
`;

const SearchWrap = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 14px;
  font-size: 17px;
  color: #94a3b8;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  font-family: ${SANS};
  font-size: 15px;
  color: #111827;
  background: #ffffff;
  border: 1px solid #e2e2df;
  border-radius: 999px;
  padding: 11px 46px 11px 38px;
  outline: none;
  transition: border-color 140ms ease, box-shadow 140ms ease;

  &::placeholder {
    color: #94a3b8;
  }
  &:focus {
    border-color: #111827;
    box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.08);
  }
  &::-webkit-search-cancel-button {
    cursor: pointer;
  }
`;

const Kbd = styled.kbd`
  position: ${(p) => (p.$inline ? "static" : "absolute")};
  right: 12px;
  font-family: ${MONO};
  font-size: 11px;
  color: #64748b;
  background: #f1f1ee;
  border: 1px solid #e2e2df;
  border-bottom-width: 2px;
  border-radius: 5px;
  padding: 2px 6px;
  line-height: 1.4;
`;

const Count = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px 10px;
  font-size: 12.5px;
  color: #475569;

  @media (max-width: 860px) {
    padding: 0 16px 10px;
  }
`;

const Layout = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px 96px;
  display: grid;
  grid-template-columns: 244px minmax(0, 1fr);
  gap: 40px;
  align-items: start;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0 16px 72px;
  }
`;

const Sidebar = styled.nav`
  position: sticky;
  top: 92px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  padding: 28px 0;

  @media (max-width: 1000px) {
    position: static;
    max-height: none;
    overflow: visible;
    padding: 18px 0 4px;
  }
`;

const SidebarTitle = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 10px;
`;

const SideList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border-radius: 8px;
    font-size: 13.5px;
    color: #475569;
    text-decoration: none;
    transition: background 120ms ease, color 120ms ease;
  }
  a:hover {
    background: #f1f1ee;
    color: #111827;
  }
  em {
    font-style: normal;
    font-size: 11px;
    color: #94a3b8;
    font-family: ${MONO};
  }

  @media (max-width: 1000px) {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding-bottom: 6px;
    -webkit-overflow-scrolling: touch;

    li {
      flex: 0 0 auto;
    }
    a {
      border: 1px solid #ececea;
      background: #fff;
      white-space: nowrap;
    }
    em {
      display: none;
    }
  }
`;

const Main = styled.main`
  padding: 28px 0 0;
  min-width: 0;
`;

const Intro = styled.div`
  margin-bottom: 36px;

  h1 {
    font-family: ui-serif, Georgia, serif;
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 14px;
  }
  p {
    font-size: 17px;
    line-height: 1.7;
    color: #334155;
    margin: 0 0 16px;
    max-width: 74ch;
  }
  code {
    font-family: ${MONO};
    font-size: 14px;
    background: #f1f1ee;
    border: 1px solid #ececea;
    border-radius: 5px;
    padding: 1px 5px;
    color: #111827;
  }
`;

const Rule = styled.div`
  border-left: 3px solid #111827;
  background: #f4f4f1;
  border-radius: 0 8px 8px 0;
  padding: 14px 18px;
  font-size: 15.5px;
  line-height: 1.65;
  color: #334155;
  max-width: 74ch;
`;

// The course pitch is deliberately *not* banner-shaped: no full-bleed strip,
// no dark ad bar. It sits in the reading column in the page's own paper
// styling, led by a face and a first-person voice, so it reads as the author
// talking rather than an ad slot the eye has learned to skip.
const Pitch = styled.aside`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin: 0 0 44px;
  padding: 26px 28px;
  max-width: 74ch;
  background: linear-gradient(180deg, #fffdf6 0%, #fdf8ec 100%);
  border: 1px solid #ecdfc4;
  border-radius: 14px;
  box-shadow: 0 1px 0 rgba(17, 24, 39, 0.02),
    0 12px 28px -22px rgba(124, 45, 18, 0.45);

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 14px;
    padding: 22px 20px;
  }
`;

const PitchFace = styled.div`
  flex: 0 0 auto;

  img {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
    box-shadow: 0 0 0 1px #ecdfc4;
  }
`;

const PitchBody = styled.div`
  min-width: 0;

  h2 {
    font-family: ui-serif, Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 1.3;
    margin: 0 0 10px;
    color: #111827;
  }
  p {
    margin: 0 0 18px;
    font-size: 15.5px;
    line-height: 1.7;
    color: #3f3a32;
  }
  em {
    font-style: normal;
    font-weight: 600;
    color: #7c2d12;
  }
`;

const PitchKicker = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #a16207;
  margin-bottom: 8px;
`;

// Hover styling for these nested bits is keyed off a data attribute rather
// than an interpolated component: this project's Babel/styled-components
// setup flattens `&:hover ${Component}` into a plain descendant selector,
// which silently pins the element into its hover state.
const PitchArrow = styled.span.attrs({ "data-arrow": "" })`
  display: inline-block;
  transition: transform 160ms ease;
`;

const PitchCta = styled.a`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(180deg, #c2410c 0%, #9a3412 100%);
  border-radius: 10px;
  padding: 12px 20px;
  box-shadow: 0 10px 18px -10px rgba(154, 52, 18, 0.7);
  transition: transform 140ms ease, box-shadow 140ms ease, filter 140ms ease;

  &:hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
    box-shadow: 0 14px 22px -10px rgba(154, 52, 18, 0.75);
  }
  &:hover [data-arrow] {
    transform: translateX(3px);
  }
  &:active {
    transform: translateY(0);
  }
  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 3px;
  }
`;

const PitchActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const PitchMeta = styled.span`
  font-size: 13px;
  color: #8a7a5e;
`;

// Scroll target for a search: everything above it is intro, everything below
// it is matches.
const ResultsAnchor = styled.div`
  height: 0;
`;

// The course card is the loudest thing in the first viewport, which risks the
// page reading as a landing page rather than a reference. This cue says the
// real content is one click away, and the motion is what makes it register.
//
// Declared globally with a literal name instead of the `keyframes` helper:
// babel-plugin-styled-wind rewrites these template literals and mangles
// interpolated values, which breaks `animation: ${name} ...` silently.
const CueMotion = createGlobalStyle`
  @keyframes cheatsheet-cue-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(3px); }
  }
`;

const CueDock = styled.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 15;
  transition: opacity 220ms ease, transform 220ms ease, visibility 220ms;

  &[data-hidden="true"] {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%) translateY(8px);
  }

  @media (max-width: 640px) {
    bottom: 18px;
  }
`;

const CueLabel = styled.span`
  @media (max-width: 640px) {
    display: none;
  }
`;

const CueChevron = styled.span.attrs({ "data-chevron": "" })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #111827;
  background: #ecece7;
  animation: cheatsheet-cue-bob 1.6s ease-in-out infinite;
  transition: background 140ms ease, color 140ms ease;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Cue = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: inherit;
  font-size: 13.5px;
  font-weight: 600;
  color: #475569;
  background: #fff;
  border: 1px solid #e2e2df;
  border-radius: 999px;
  padding: 7px 8px 7px 18px;
  cursor: pointer;
  box-shadow: 0 10px 24px -14px rgba(17, 24, 39, 0.65);
  transition: border-color 140ms ease, color 140ms ease, box-shadow 140ms ease;

  &:hover {
    color: #111827;
    border-color: #cbd5e1;
    box-shadow: 0 14px 26px -14px rgba(17, 24, 39, 0.7);
  }

  /* Chevron only on phones — the label costs more width than it earns. */
  @media (max-width: 640px) {
    width: 46px;
    height: 46px;
    padding: 0;
    justify-content: center;
    border-radius: 50%;
  }
  &:hover [data-chevron] {
    background: #111827;
    color: #fff;
  }
  &:focus-visible {
    outline: 2px solid #111827;
    outline-offset: 3px;
  }
`;

// Second ask, for readers who scrolled the whole sheet — by then the card at
// the top is long gone, and these are the warmest readers on the page.
const EndCta = styled.section`
  margin-top: 56px;
  padding: 26px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: linear-gradient(180deg, #fffdf6 0%, #fdf8ec 100%);
  border: 1px solid #ecdfc4;
  border-radius: 14px;

  h2 {
    font-family: ui-serif, Georgia, serif;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.015em;
    margin: 0 0 6px;
  }
  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: #3f3a32;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 22px 20px;
  }
`;

const Section = styled.section`
  scroll-margin-top: 110px;
  margin-bottom: 44px;
`;

const SectionHead = styled.div`
  margin-bottom: 12px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0 0 4px;
  }
  h2 a {
    color: #111827;
    text-decoration: none;
  }
  h2 a:hover::after {
    content: " #";
    color: #cbd5e1;
  }
  p {
    margin: 0;
    font-size: 14.5px;
    color: #64748b;
    line-height: 1.6;
    max-width: 78ch;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #ffffff;
  border: 1px solid #ececea;
  border-radius: 10px;
  overflow: hidden;
  table-layout: fixed;

  th {
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #94a3b8;
    background: #fbfbf9;
    padding: 10px 16px;
    border-bottom: 1px solid #ececea;
  }
  th:nth-child(1),
  th:nth-child(2) {
    width: 31%;
  }

  td {
    padding: 10px 16px;
    vertical-align: top;
    border-bottom: 1px solid #f4f4f1;
    word-break: break-word;
  }
  tr:last-child td {
    border-bottom: none;
  }
  tbody tr:hover td {
    background: #fcfcfa;
  }

  @media (max-width: 720px) {
    table-layout: auto;
    display: block;

    thead {
      display: none;
    }
    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }
    tr {
      border-bottom: 1px solid #ececea;
      padding: 8px 0;
    }
    tr:last-child {
      border-bottom: none;
    }
    td {
      border-bottom: none;
      padding: 4px 14px;
    }
    td::before {
      content: attr(data-label);
      display: block;
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #b6b6b0;
      margin-bottom: 2px;
    }
    td:empty {
      display: none;
    }
  }
`;

const Code = styled.code`
  display: inline-block;
  font-family: ${MONO};
  font-size: 13px;
  line-height: 1.55;
  white-space: pre-wrap;
  cursor: pointer;
  border-radius: 6px;
  padding: 3px 7px;
  border: 1px solid ${(p) => (p.$copied ? "#111827" : "transparent")};
  background: ${(p) =>
    p.$copied ? "#eef2ff" : p.$py ? "#f2f6f2" : "#f6f3ee"};
  color: ${(p) => (p.$py ? "#14532d" : "#7c2d12")};
  transition: border-color 120ms ease, background 120ms ease;

  &:hover {
    border-color: #cbd5e1;
  }
`;

const Note = styled.span`
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.6;
`;

const Empty = styled.div`
  padding: 48px 0;

  h2 {
    font-size: 20px;
    margin: 0 0 8px;
  }
  p {
    color: #64748b;
    font-size: 15px;
  }
  code {
    font-family: ${MONO};
    background: #f1f1ee;
    border-radius: 5px;
    padding: 1px 5px;
    font-size: 13px;
  }
`;

const Faq = styled.section`
  scroll-margin-top: 110px;
  margin-top: 56px;
  border-top: 1px solid #ececea;
  padding-top: 32px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 10px;
  }
  details {
    border-bottom: 1px solid #ececea;
  }
  summary {
    cursor: pointer;
    list-style: none;
    padding: 15px 0;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::after {
    content: "+";
    color: #94a3b8;
    font-weight: 400;
    font-size: 20px;
  }
  details[open] summary::after {
    content: "–";
  }
  details p {
    margin: 0 0 16px;
    color: #334155;
    font-size: 15.5px;
    line-height: 1.7;
    max-width: 76ch;
  }
`;

const Foot = styled.footer`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #ececea;
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.7;
`;
