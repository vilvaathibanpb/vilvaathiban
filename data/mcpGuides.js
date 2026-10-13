// MCP guides built around Weft (https://vilvaathibanpb.github.io/weft/) — turning websites you're
// logged into into local MCP servers. Same shape as `posts` in ./posts.js, plus the optional
// `image` (OG image, site-relative) and `faq` ([{ q, a }] → visible FAQ + FAQPage JSON-LD) fields
// and `{ type: "image", src, alt, width, height, caption }` blocks.

const WEFT = "https://vilvaathibanpb.github.io/weft/";
const WEFT_DOCS = "https://vilvaathibanpb.github.io/weft/docs.html";
const WEFT_GH = "https://github.com/vilvaathibanpb/weft";
const WEFT_DEMO = "https://youtu.be/nOrxH0BQnvU";
const OG = "/blog/weft/og.png";

const shot = (name, alt, caption) => ({
  type: "image",
  src: `/blog/weft/${name}.png`,
  alt,
  width: 1600,
  height: 900,
  caption,
});

export const mcpGuides = [
  {
    slug: "convert-any-website-to-mcp-server",
    title: "How to Turn Any Website Into an MCP Server (No API Key Needed)",
    description:
      "Convert any website you're logged into into an MCP server that Claude Code, Claude Desktop, Codex or Cursor can use — no API key, no OAuth app, no scraping. A step-by-step guide with Weft.",
    datePublished: "2026-10-13",
    readingMinutes: 9,
    image: OG,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Most of the tools I use every day have no public API. Some have one that's locked behind an enterprise plan, and some have an API that simply doesn't expose the thing I want — like my own Medium stats. But every one of them has a web app I'm already logged into, and that web app talks to a perfectly good JSON or GraphQL API behind the scenes.",
          },
          {
            type: "p",
            text: "So the obvious question for anyone using Claude Code or Cursor in 2026: *can I turn that website into an MCP server, so my AI can use it the way I do?* Yes. This guide shows how to convert any website into an MCP server with [Weft](" + WEFT + "), a free, open-source tool I built for exactly this — and explains what's happening under the hood so you can judge when it's the right approach.",
          },
          {
            type: "list",
            items: [
              "**Time:** about two minutes to install, then about a minute per site.",
              "**You need:** Chrome (or Edge, Brave, Arc), Node.js 20+, and an MCP client — Claude Code, Claude Desktop, Codex or Cursor.",
              "**Cost:** free and open source (MIT). Everything runs on your machine.",
            ],
          },
        ],
      },
      {
        heading: "What \"website to MCP server\" actually means",
        blocks: [
          {
            type: "p",
            text: "An MCP server is a program that exposes *tools* to an AI client over the Model Context Protocol. (If MCP is new to you, start with [MCP Architecture Explained](/blog/mcp-architecture-explained).) Usually someone writes that server by hand against an official API — see [Building MCPs in TypeScript](/blog/building-mcps-typescript-mcp-server-guide) for that path.",
          },
          {
            type: "p",
            text: "Converting a *website* into an MCP server skips the hand-written part. Instead of reading API docs, you let a tool watch the requests the site's own front end makes while you use it, then expose those requests as MCP tools. When your AI calls a tool, the request is made the same way the website makes it — with your existing login.",
          },
          {
            type: "p",
            text: "That's different from scraping (parsing HTML) and from browser automation (clicking through pages). You're calling the same API the page calls, so responses come back as clean JSON. I compare the three approaches in [Website to MCP: Weft vs Playwright MCP vs scraping](/blog/website-to-mcp-weft-vs-playwright-mcp-vs-scraping).",
          },
        ],
      },
      {
        heading: "Step 1: Install the Weft app",
        blocks: [
          {
            type: "p",
            text: "Weft has two parts: a small desktop app (the local MCP server) and a Chrome extension (the button). Download the app from the [latest release](" + WEFT_GH + "/releases/latest):",
          },
          {
            type: "list",
            items: [
              "**macOS:** `Weft-macOS.dmg` — universal (Apple Silicon and Intel), signed and notarized, so it opens normally.",
              "**Windows:** the `Weft_…_x64-setup.exe` installer or the `.msi`.",
              "**Linux:** `.AppImage`, `.deb` or `.rpm`.",
            ],
          },
          {
            type: "p",
            text: "Open Weft and leave it running. It only listens on `127.0.0.1` — nothing is reachable from outside your machine.",
          },
        ],
      },
      {
        heading: "Step 2: Add the Chrome extension",
        blocks: [
          {
            type: "p",
            text: "The extension installs from a zip — about 30 seconds:",
          },
          {
            type: "list",
            items: [
              "Download [weft-extension.zip](" + WEFT_GH + "/releases/latest/download/weft-extension.zip) and unzip it.",
              "Open `chrome://extensions` and switch on **Developer mode** (top right).",
              "Click **Load unpacked** and select the unzipped `weft-extension` folder.",
              "Pin **Weft** from the puzzle-piece menu.",
            ],
          },
          {
            type: "p",
            text: "Open the popup — the footer should say *connected to Weft app*.",
          },
        ],
      },
      {
        heading: "Step 3: Convert the website",
        blocks: [
          {
            type: "p",
            text: "Open the site you want your AI to use, make sure you're logged in, click the Weft button and choose **Convert this site to MCP**. Chrome asks once for permission to access that site, then shows a *\"Weft started debugging this browser\"* bar. That bar is expected — it's how Weft sees the site's API calls. Leave it open while you capture.",
          },
          shot(
            "extension",
            "The Weft Chrome extension popup on medium.com with the Convert this site to MCP button",
            "One button per site. Weft only captures sites you explicitly convert."
          ),
        ],
      },
      {
        heading: "Step 4: Use the site once",
        blocks: [
          {
            type: "p",
            text: "Weft maps what it sees. Reload the tab, then open the pages and run the actions you want your AI to reach. Each API call becomes an endpoint: numeric IDs and UUIDs in paths collapse into templates like `/api/issues/{id}`, and query parameters and status codes are recorded. The first endpoint flips the site from *Capturing* to *Ready*.",
          },
          shot(
            "detail",
            "Weft's site detail panel listing the endpoints it learned for Medium, including POST /_/graphql",
            "The endpoints Weft learned from one pass through Medium's stats pages."
          ),
          {
            type: "p",
            text: "You only do this once per site. Weft saves its map locally and remembers it across restarts.",
          },
        ],
      },
      {
        heading: "Step 5: Connect Claude Code, Claude Desktop, Codex or Cursor",
        blocks: [
          {
            type: "p",
            text: "On a ready site, click **Open in client** and pick your client. Weft writes one `weft` entry into that client's MCP config — nothing else is touched — then restart the client. The full list of config file locations (and how to add it by hand) is in [How to add an MCP server to Claude Code, Claude Desktop, Cursor and Codex](/blog/how-to-add-mcp-server-to-claude-code-claude-desktop-cursor-codex).",
          },
          shot(
            "picker",
            "Weft's Open in client picker with Claude Code added",
            "One click per client. Re-adding is safe."
          ),
        ],
      },
      {
        heading: "Step 6: Ask your AI",
        blocks: [
          {
            type: "p",
            text: "Start a new session and ask in plain English. Your AI discovers what Weft knows with `list_sites` and `list_endpoints`, then calls the site with `call_endpoint`. Here's Claude Code answering *\"Using Weft, which of my Medium stories got the most views?\"* from my real account:",
          },
          shot(
            "claude",
            "Claude Code answering which Medium story has the most views using Weft",
            "Claude Code reading Medium stats through Weft — no Medium API key involved."
          ),
          {
            type: "p",
            text: "The full Medium walkthrough is in [Medium MCP server: get your Medium stats in Claude](/blog/medium-mcp-server-stats-in-claude), and there's a two-minute [video demo](" + WEFT_DEMO + ").",
          },
        ],
      },
      {
        heading: "The tools Weft exposes",
        blocks: [
          {
            type: "list",
            items: [
              "`list_sites` and `status` — which sites you've converted and whether each is Ready, Needs login, Outdated or Not possible.",
              "`list_endpoints`, `get_endpoint`, `search_endpoints` — methods, path templates, query params and status codes.",
              "`get_openapi` — an OpenAPI 3.1 spec synthesized only from observed traffic.",
              "`get_auth_context` — cookie names, storage keys and auth header names (never values).",
              "`call_endpoint` — make a request through your browser session. Anything other than `GET` needs `confirm: true`.",
              "`recent_requests` — the live feed of captured calls.",
            ],
          },
        ],
      },
      {
        heading: "Which websites can be converted?",
        blocks: [
          {
            type: "p",
            text: "Any site that loads its data from a JSON or GraphQL API in the browser — which is most modern web apps: content platforms like Medium, issue trackers, admin panels, analytics dashboards, internal tools. Sites that log in with cookies work out of the box; sites whose JavaScript sends an `Authorization: Bearer` token or a CSRF header work too (Weft adds those inside the browser — details in [MCP server without an API key](/blog/mcp-server-without-api-key-cookies-bearer-tokens)).",
          },
          {
            type: "p",
            text: "What won't work: sites that sign every request with a per-request secret, sites that only stream data over WebSockets, and anything behind DRM or CAPTCHA walls. Weft marks those *Not possible* instead of trying to defeat them.",
          },
        ],
      },
      {
        heading: "Is it safe?",
        blocks: [
          {
            type: "list",
            items: [
              "Everything runs on `127.0.0.1`. No account, no cloud, no telemetry.",
              "Only sites you explicitly convert are captured.",
              "The extension forwards only each request's method, URL and status to the app — no headers, no bodies.",
              "Cookie and token values never leave the browser. Requests run inside your own tab.",
              "Writes are gated: non-`GET` calls are refused unless your AI passes `confirm: true`, and Claude Code shows you the call before it runs.",
            ],
          },
          {
            type: "p",
            text: "Treat a converted site like an API key you've handed your AI: convert what you need, and pause or delete sites you're not using. And respect each site's terms — use it for your own data and workflows, not for scraping.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Can I convert a website to an MCP server without an API key?",
        a: "Yes. Weft uses the session you're already logged into in Chrome. It learns the site's own API from your browsing and replays requests inside your browser tab, so no API key or OAuth app is needed.",
      },
      {
        q: "Does it work with Claude Code and Claude Desktop?",
        a: "Yes — and with Codex, Cursor and any other MCP client. Weft adds itself to Claude Code, Claude Desktop, Codex and Cursor in one click; other clients can point at the bundled connector manually.",
      },
      {
        q: "Is Weft free?",
        a: "Yes. Weft is free and open source under the MIT license, with installers for macOS, Windows and Linux.",
      },
      {
        q: "Does my AI see my password or cookies?",
        a: "No. Your AI sees endpoint descriptions and JSON responses. Cookie and token values stay in Chrome; Weft only reports their names.",
      },
    ],
  },

  {
    slug: "how-to-add-mcp-server-to-claude-code-claude-desktop-cursor-codex",
    title:
      "How to Add an MCP Server to Claude Code, Claude Desktop, Cursor and Codex (Config Files Explained)",
    description:
      "Where each AI client keeps its MCP config — claude_desktop_config.json, ~/.claude.json, ~/.cursor/mcp.json and Codex's config.toml — with copy-paste examples, the claude mcp add command, and fixes for servers that won't load.",
    datePublished: "2026-10-13",
    readingMinutes: 8,
    image: OG,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "Every MCP client stores its servers in a different file with a slightly different shape, and almost every \"my MCP server doesn't show up\" problem comes down to one of three things: the wrong file, a broken JSON comma, or a `node` that the client can't find. This guide is the reference I wish I'd had: where each client keeps its config, what the entry looks like, and how to debug it.",
          },
          {
            type: "p",
            text: "I'll use [Weft](" + WEFT + ") as the running example — it turns websites you're logged into into an MCP server — but every snippet works for any stdio MCP server: swap the command and arguments for your own.",
          },
        ],
      },
      {
        heading: "The anatomy of an MCP server entry",
        blocks: [
          {
            type: "p",
            text: "A local (stdio) MCP server is just a command the client starts and talks to over stdin/stdout. Every config boils down to three things: a **name**, a **command**, and its **arguments** (plus optional environment variables):",
          },
          {
            type: "code",
            language: "json",
            code: `{
  "mcpServers": {
    "weft": {
      "command": "node",
      "args": ["/Applications/Weft.app/Contents/Resources/mcp-shim/index.js"]
    }
  }
}`,
          },
          {
            type: "p",
            text: "Remote servers (Streamable HTTP) use a `url` instead of a command; how the protocol's transports differ is covered in [MCP Architecture Explained](/blog/mcp-architecture-explained).",
          },
        ],
      },
      {
        heading: "Add an MCP server to Claude Code",
        blocks: [
          {
            type: "p",
            text: "The quickest way is the CLI. `--scope user` makes the server available in every project; without it, it's added to the current project only:",
          },
          {
            type: "code",
            language: "bash",
            code: `claude mcp add --scope user weft -- node /Applications/Weft.app/Contents/Resources/mcp-shim/index.js

# check it
claude mcp list`,
          },
          {
            type: "p",
            text: "User-scope servers live in `~/.claude.json` under `mcpServers`, in the same shape as above. Project-scope servers you want to share with your team go in a `.mcp.json` file at the repo root. Inside a session, run `/mcp` to see each server's connection status and tools. MCP servers load when a session starts, so start a new session after adding one.",
          },
        ],
      },
      {
        heading: "Add an MCP server to Claude Desktop (claude_desktop_config.json)",
        blocks: [
          {
            type: "p",
            text: "Claude Desktop reads `claude_desktop_config.json`. You can open it from **Settings → Developer → Edit Config**, or directly:",
          },
          {
            type: "list",
            items: [
              "**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`",
              "**Windows:** `%APPDATA%\\Claude\\claude_desktop_config.json`",
            ],
          },
          {
            type: "p",
            text: "Add your server under `mcpServers` (create the file with `{ \"mcpServers\": {} }` if it doesn't exist), then **fully quit** Claude Desktop — from the menu bar on macOS, the system tray on Windows — and reopen it. Closing the window isn't enough; the config is only read at startup.",
          },
        ],
      },
      {
        heading: "Add an MCP server to Cursor (~/.cursor/mcp.json)",
        blocks: [
          {
            type: "p",
            text: "Cursor reads `~/.cursor/mcp.json` for global servers and `.cursor/mcp.json` inside a project for project-only ones. Same `mcpServers` shape as Claude Desktop. After saving, open the MCP section of Cursor Settings: each server shows a status indicator and its tool list.",
          },
        ],
      },
      {
        heading: "Add an MCP server to Codex (~/.codex/config.toml)",
        blocks: [
          {
            type: "p",
            text: "Codex uses TOML. Each server is a `[mcp_servers.<name>]` table:",
          },
          {
            type: "code",
            language: "toml",
            code: `[mcp_servers.weft]
command = "node"
args = ["/Applications/Weft.app/Contents/Resources/mcp-shim/index.js"]`,
          },
        ],
      },
      {
        heading: "Or skip the config files entirely",
        blocks: [
          {
            type: "p",
            text: "If the server you're adding is Weft, you don't need any of the above: on a ready site, click **Open in client** and pick Claude Code, Claude Desktop, Codex or Cursor. Weft reads the existing config, adds or updates only its own `weft` entry, writes it back, and opens the client if it's a desktop app.",
          },
          shot(
            "picker",
            "Weft's Open in client picker listing Claude Code, Claude Desktop, Codex and Cursor",
            "Weft writes its own entry into each client's config — non-destructively."
          ),
        ],
      },
      {
        heading: "MCP server not showing up? Fix list",
        blocks: [
          {
            type: "list",
            items: [
              "**Restart properly.** Every client reads MCP config at startup. Claude Code: new session. Claude Desktop and Cursor: quit from the menu bar/tray and reopen.",
              "**Validate the JSON.** One trailing comma breaks the whole file. Run `python3 -m json.tool < claude_desktop_config.json` to find it.",
              "**Use an absolute path to `node`.** Desktop apps don't inherit your shell's `PATH`, so a `node` installed by nvm, fnm or Volta often isn't found. Use the full path from `which node`. (Weft's one-click install does this for you.)",
              "**Use absolute paths in `args`.** There's no reliable working directory for a server started by a GUI app.",
              "**Never print to stdout in a stdio server.** stdout is the protocol channel; logs belong on stderr. It's the most common bug when you write your own — see [Building MCPs in TypeScript](/blog/building-mcps-typescript-mcp-server-guide).",
              "**Check the logs.** Claude Desktop writes per-server logs (on macOS under `~/Library/Logs/Claude/`); Claude Code shows errors in `/mcp`.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Where is claude_desktop_config.json?",
        a: "On macOS it's ~/Library/Application Support/Claude/claude_desktop_config.json, and on Windows %APPDATA%\\Claude\\claude_desktop_config.json. You can also open it from Claude Desktop's Settings → Developer → Edit Config.",
      },
      {
        q: "How do I add an MCP server to Claude Code?",
        a: "Run `claude mcp add --scope user <name> -- <command> <args>`, for example `claude mcp add --scope user weft -- node /path/to/index.js`, then start a new session and check it with /mcp.",
      },
      {
        q: "Why doesn't my MCP server appear after editing the config?",
        a: "Usually the client wasn't fully restarted, the JSON has a syntax error, or the client can't find `node` because desktop apps don't inherit your shell PATH. Use absolute paths and fully quit and reopen the client.",
      },
      {
        q: "Can one MCP server be used by several clients at once?",
        a: "Yes. Each client starts its own copy of a stdio server. With Weft, every client's copy connects to the same running Weft app, so they share one endpoint map and one browser session.",
      },
    ],
  },

  {
    slug: "medium-mcp-server-stats-in-claude",
    title: "Medium MCP Server: Get Your Medium Stats in Claude Without an API",
    description:
      "Medium has no public stats API. Here's how I turned medium.com into an MCP server with Weft so Claude Code can answer \"which of my stories got the most views?\" from my real account — in about two minutes.",
    datePublished: "2026-10-13",
    readingMinutes: 6,
    image: OG,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "I write on Medium, and I wanted to ask Claude simple questions about my own numbers: which stories are still pulling views, which ones people actually read, how this month compares. Medium doesn't offer an API for any of that — its official API only ever covered publishing and is no longer maintained — so a \"Medium MCP server\" has to come from somewhere else.",
          },
          {
            type: "p",
            text: "The Medium web app, though, loads all of those numbers from its own GraphQL API at `medium.com/_/graphql`, authenticated by the session cookie you already have. So I pointed [Weft](" + WEFT + ") at it. Here's the whole thing, start to finish.",
          },
        ],
      },
      {
        heading: "1. Convert medium.com",
        blocks: [
          {
            type: "p",
            text: "With the Weft app running and the extension installed (setup is in [How to turn any website into an MCP server](/blog/convert-any-website-to-mcp-server)), I opened `medium.com/me/stats`, clicked the Weft button and chose **Convert this site to MCP**.",
          },
          shot(
            "extension",
            "Weft extension popup over Medium's stats page with Convert this site to MCP",
            "Converting Medium from its stats page."
          ),
        ],
      },
      {
        heading: "2. Use the stats pages once",
        blocks: [
          {
            type: "p",
            text: "I reloaded the tab and clicked between the **Stories** and **Audience** tabs. Weft recorded what Medium's front end called — most importantly `POST /_/graphql`, the endpoint that carries the stats queries. Cloudflare's bot-check and analytics beacons (`/cdn-cgi/…`) are filtered out automatically.",
          },
          shot(
            "detail",
            "Weft showing Medium's captured endpoints: POST /_/graphql, GET /me/stats",
            "Medium's GraphQL endpoint, learned from one pass through the stats pages."
          ),
        ],
      },
      {
        heading: "3. Connect Claude Code",
        blocks: [
          {
            type: "p",
            text: "**Open in client → Claude Code** adds the `weft` entry to `~/.claude.json`. Then a new Claude Code session picks it up.",
          },
        ],
      },
      {
        heading: "4. Ask about your Medium stats",
        blocks: [
          {
            type: "p",
            text: "I asked: *\"Using Weft, which of my Medium stories got the most views? Keep it short.\"* Claude listed the sites Weft knows, looked at the Medium endpoints, and — because Weft doesn't store request bodies — wrote its own read-only GraphQL query against `/_/graphql`.",
          },
          {
            type: "p",
            text: "GraphQL sends even read-only queries as `POST`, and Weft treats every non-`GET` request as a potential write. So the call needs `confirm: true`, and Claude Code shows the exact query for approval before anything runs:",
          },
          shot(
            "claude-confirm",
            "Claude Code asking approval for a POST to medium.com/_/graphql with confirm: true and the query visible",
            "You see the exact GraphQL query before it runs. A `query` reads; a `mutation` would change data."
          ),
          {
            type: "p",
            text: "A few seconds later:",
          },
          shot(
            "claude",
            "Claude Code reporting the most-viewed Medium story with 42,195 views and 23,043 reads",
            "Lifetime totals across all 13 of my stories, read through my logged-in session."
          ),
          {
            type: "p",
            text: "My most-viewed story — a Next.js server-side rendering tutorial — still leads with 42,195 views and 23,043 reads. Nothing was scraped, no cookie was copied anywhere, and the request ran inside my own Chrome tab. You can watch the whole run in the [two-minute demo](" + WEFT_DEMO + ").",
          },
        ],
      },
      {
        heading: "Questions worth asking next",
        blocks: [
          {
            type: "list",
            items: [
              "\"Which story has the best read ratio (reads ÷ views)?\"",
              "\"Compare my views this month to last month.\"",
              "\"Which older stories are still getting views — what do they have in common?\"",
              "\"Draft three title ideas in the style of my best-performing stories.\"",
            ],
          },
        ],
      },
      {
        heading: "Limits to know",
        blocks: [
          {
            type: "list",
            items: [
              "**Keep a Medium tab open.** Weft runs requests inside a tab of the site so your session applies.",
              "**It's your data.** Use it for your own account and workflows; don't use it to bulk-download other people's content.",
              "**Medium can change its API.** If queries start failing, re-capture the site in Weft — it'll flag the site as *Outdated* when the endpoints drift.",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Is there an official Medium MCP server?",
        a: "Medium doesn't publish an MCP server or a stats API. Weft builds one from the Medium web app you're logged into, so Claude can query your own stats through Medium's GraphQL endpoint.",
      },
      {
        q: "Can Claude read my Medium stats without an API key?",
        a: "Yes. With Weft, requests run inside your logged-in Medium tab, so your existing session is used — no API key or integration token is needed.",
      },
      {
        q: "Why does Claude ask to confirm a Medium query?",
        a: "Medium uses GraphQL, which sends queries as POST requests. Weft requires explicit confirmation for every non-GET request, so you can check that it's a read-only query before it runs.",
      },
    ],
  },

  {
    slug: "mcp-server-without-api-key-cookies-bearer-tokens",
    title:
      "MCP Server Without an API Key: How Logged-In Sessions, Cookies and Bearer Tokens Work (Safely)",
    description:
      "How an MCP server can use a website without an API key: cookie sessions vs bearer tokens vs CSRF headers, why requests should run inside your browser, and the safety rules Weft follows so credentials never reach your AI.",
    datePublished: "2026-10-13",
    readingMinutes: 7,
    image: OG,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "\"MCP server without an API key\" sounds like a hack. It isn't, if it's done right: you already have a perfectly valid credential for the site — your logged-in browser session. The engineering question is how to let an AI use that session *without* ever handing the AI (or any other process) the credential itself.",
          },
          {
            type: "p",
            text: "This post explains how websites actually authenticate their own API calls, how [Weft](" + WEFT + ") reuses each kind safely, and where the line is.",
          },
        ],
      },
      {
        heading: "How websites authenticate their own API calls",
        blocks: [
          {
            type: "p",
            text: "When a web app loads your data, its JavaScript calls an API on the same site. That call is authenticated in one of three ways — often a mix:",
          },
          {
            type: "list",
            items: [
              "**Session cookies.** After you log in, the server sets a cookie (often `HttpOnly`, so page JavaScript can't even read it). The browser attaches it to every request to that site automatically. Medium, GitHub and most classic web apps work this way.",
              "**Bearer tokens.** The app keeps an access token (in memory or `localStorage`) and its JavaScript adds `Authorization: Bearer …` to each request. Common in single-page apps built on OAuth/OIDC.",
              "**CSRF and custom headers.** Cookie-based apps often also require a header such as `X-CSRF-Token` on state-changing requests, so another site can't forge them. Some APIs use `x-api-key`-style headers.",
            ],
          },
        ],
      },
      {
        heading: "The wrong way: copy the cookie into your MCP server",
        blocks: [
          {
            type: "p",
            text: "The quick hack is to copy your session cookie or token out of DevTools into an `.env` file and have a script send it. It works until it doesn't: the credential now lives in plain text on disk, in your shell history, maybe in a repo; it expires and silently breaks; and any process that can read the file can impersonate you. If an AI agent can run shell commands, it can read it too.",
          },
        ],
      },
      {
        heading: "The right way: run requests inside the browser",
        blocks: [
          {
            type: "p",
            text: "Weft never takes the session out of the browser. When your AI calls `call_endpoint`, the Weft app asks the extension to perform the request *inside your open tab of that site*, using `fetch` with `credentials: \"include\"`. The browser attaches the session cookies itself — the same way it does when you click around — and only the response travels back to your AI.",
          },
          {
            type: "p",
            text: "That handles cookie-based sites completely. For sites that authenticate with headers, the extension does one more thing:",
          },
          {
            type: "list",
            items: [
              "While a site is being captured, it notices auth-like headers the site's own JavaScript sends — `Authorization`, `X-CSRF-Token`/`X-XSRF-Token`, `x-…-token`, API-key headers.",
              "It keeps the latest value of each in `chrome.storage.session`: in memory, readable only by the extension, cleared when the browser closes.",
              "When your AI makes a call, it adds those headers to the request inside the tab — for that same site only. A header your AI passes explicitly wins.",
              "The Weft app and your AI only ever see the header **names** (`get_auth_context` → `authHeaderNames`), never the values.",
            ],
          },
        ],
      },
      {
        heading: "What the AI can and can't see",
        blocks: [
          {
            type: "list",
            items: [
              "**Can see:** which sites you converted, their endpoints (method, path template, query params, status codes), cookie *names*, storage *keys*, auth header *names*, and the JSON responses to calls it makes.",
              "**Can't see:** cookie values, token values, your password, or any site you didn't convert.",
              "**Can't do silently:** anything other than a `GET`. Non-`GET` calls are refused unless the call includes `confirm: true` — and clients like Claude Code show that call, with its arguments, for your approval.",
            ],
          },
          shot(
            "claude-confirm",
            "Claude Code showing a POST call with confirm: true for user approval",
            "Non-GET calls are visible and gated."
          ),
        ],
      },
      {
        heading: "When a token expires",
        blocks: [
          {
            type: "p",
            text: "Cookie sessions usually last days or weeks, and the browser refreshes them as you use the site. Bearer tokens are often short-lived. If calls start returning `401`, reload the site's tab while it's being captured (or click **Re-capture** in Weft) so the extension sees a fresh token; after a browser restart, use the site once again. If your browser session itself has expired, Weft marks the site *Needs login* — click **Refresh & log in**.",
          },
        ],
      },
      {
        heading: "Where the line is",
        blocks: [
          {
            type: "p",
            text: "Using your own session for your own data, at human scale, is the same thing your browser does. Weft deliberately doesn't go further: it won't bypass CAPTCHAs, bot detection, request signing or DRM — sites like that are marked *Not possible*. And each site's terms still apply. Convert what you need, pause what you don't, and treat a converted site like an API key you've given your AI.",
          },
          {
            type: "p",
            text: "The full threat model is in Weft's [SECURITY.md](" + WEFT_GH + "/blob/main/SECURITY.md); the setup guide is [How to turn any website into an MCP server](/blog/convert-any-website-to-mcp-server).",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Can an MCP server use a website without an API key?",
        a: "Yes, by reusing your logged-in browser session. Weft runs each request inside your browser tab, so the site's own cookies and auth headers are applied there and never handed to the AI.",
      },
      {
        q: "Does Weft work with sites that use Authorization: Bearer tokens?",
        a: "Yes. The extension keeps the latest auth header values in browser memory while capturing and adds them to requests inside the tab. Only the header names reach the Weft app and your AI.",
      },
      {
        q: "Is it safe to give an AI access to my logged-in websites?",
        a: "It's as safe as the boundaries around it. With Weft, credential values stay in the browser, only sites you convert are reachable, every non-GET call needs explicit confirmation, and everything runs locally on 127.0.0.1.",
      },
    ],
  },

  {
    slug: "website-to-mcp-weft-vs-playwright-mcp-vs-scraping",
    title: "Website to MCP: Weft vs Playwright MCP vs Scraping — Which Should You Use?",
    description:
      "Three ways to give Claude or Cursor access to a website: call the site's own API with Weft, drive a browser with Playwright MCP, or scrape HTML. How each works, what it costs in tokens and reliability, and when to pick which.",
    datePublished: "2026-10-13",
    readingMinutes: 7,
    image: OG,
    content: [
      {
        blocks: [
          {
            type: "p",
            text: "\"Give my AI access to this website\" can mean three very different architectures. Picking the wrong one is why so many website-to-MCP setups feel slow, flaky or expensive. Here's how the three main approaches compare — including the one I built, [Weft](" + WEFT + ") — and an honest take on when each wins.",
          },
        ],
      },
      {
        heading: "Approach 1: Call the site's own API (Weft)",
        blocks: [
          {
            type: "p",
            text: "Weft learns the JSON/GraphQL endpoints a website's front end calls while you use it, then exposes them as MCP tools. Calls run inside your logged-in browser tab, so the response is the same structured data the page renders from.",
          },
          {
            type: "list",
            items: [
              "**Output:** clean JSON — cheap in tokens, easy for the model to reason over.",
              "**Speed:** one HTTP request per question, no page rendering.",
              "**Auth:** your existing session; credential values never leave the browser.",
              "**Breaks when:** the site changes its internal API (Weft flags the site *Outdated*; re-capture fixes it).",
              "**Can't do:** sites with signed requests, WebSocket-only data, or purely visual tasks.",
            ],
          },
        ],
      },
      {
        heading: "Approach 2: Drive a browser (Playwright MCP)",
        blocks: [
          {
            type: "p",
            text: "Microsoft's Playwright MCP gives the model a real browser. It reads pages through accessibility snapshots and acts by clicking, typing and navigating — like a very fast intern.",
          },
          {
            type: "list",
            items: [
              "**Output:** page snapshots — far more tokens per step than a JSON response.",
              "**Speed:** several steps per task, each rendering a page.",
              "**Strength:** works on anything a human can do in the UI, including multi-step flows and sites with no usable API.",
              "**Breaks when:** layouts change, or the model clicks the wrong thing.",
            ],
          },
        ],
      },
      {
        heading: "Approach 3: Scrape the HTML",
        blocks: [
          {
            type: "p",
            text: "Fetch pages and parse the HTML, either with a hand-written scraper or a generic \"fetch URL\" MCP tool. Fine for public, static content; poor for logged-in apps, because the data you want is usually rendered by JavaScript from an API call — which is exactly what approach 1 calls directly.",
          },
        ],
      },
      {
        heading: "Side by side",
        blocks: [
          {
            type: "list",
            items: [
              "**Read your own data from a logged-in web app** (stats, issues, orders): Weft.",
              "**Complete a multi-step UI flow** (fill a form, click through a wizard): Playwright MCP.",
              "**Read public articles or docs pages:** a fetch/scrape tool.",
              "**The site has an official API and MCP server:** use that — it's the supported path.",
              "**You're building a product on top of a site's data:** use the official API; reusing a personal session is for personal workflows.",
            ],
          },
        ],
      },
      {
        heading: "They combine well",
        blocks: [
          {
            type: "p",
            text: "These aren't exclusive. A practical setup is Weft for fast, structured reads across the tools you live in, plus Playwright MCP for the occasional task that really needs clicking. Because MCP clients can load several servers at once, the model picks the right tool per step — cheap JSON when it exists, a browser when it doesn't.",
          },
          {
            type: "p",
            text: "To try the API-first approach, follow [How to turn any website into an MCP server](/blog/convert-any-website-to-mcp-server), or watch the [two-minute demo](" + WEFT_DEMO + ") with Medium and Claude Code.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "What's the difference between Weft and Playwright MCP?",
        a: "Weft calls a website's own JSON/GraphQL API through your logged-in browser session and returns structured data. Playwright MCP drives a real browser by clicking and reading page snapshots. Weft is faster and cheaper for reading data; Playwright is better for multi-step UI tasks.",
      },
      {
        q: "Is scraping a good way to connect a website to MCP?",
        a: "Only for public, static pages. Logged-in web apps usually render data from an API call, so calling that API directly (as Weft does) is more reliable than parsing the HTML.",
      },
      {
        q: "Can I use Weft and Playwright MCP together?",
        a: "Yes. MCP clients like Claude Code and Cursor can load several servers at once, so the model can use Weft for structured reads and Playwright MCP for UI flows.",
      },
    ],
  },
];
