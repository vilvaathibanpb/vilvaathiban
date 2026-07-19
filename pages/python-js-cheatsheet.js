import Head from "next/head";
import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { SECTIONS, FAQS, TOTAL_ROWS } from "../data/jsPythonCheatsheet";

const URL = "https://vilvaathiban.com/python-js-cheatsheet";

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

      <Bar>
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
