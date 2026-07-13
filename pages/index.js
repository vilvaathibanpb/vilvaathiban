import Head from "next/head";
import dynamic from "next/dynamic";

const Game = dynamic(() => import("../components/Game"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "linear-gradient(180deg, #bde7ff 0%, #dff3ff 45%, #c8e8c0 100%)",
        color: "#4a2a10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        letterSpacing: 2,
        fontWeight: 700,
      }}
    >
      <img
        src="/vilva.png"
        alt="Vilva Athiban P B"
        style={{
          width: 130,
          height: 130,
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #fff",
          boxShadow: "0 8px 20px rgba(74, 42, 16, 0.25)",
        }}
      />
      LOADING THE VILLAGE…
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Vilva Athiban P B | Lead AI Engineer, Educator & Speaker</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#05010f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta property="og:site_name" content="vilvaathiban.com" />
        <meta property="og:site" content="vilvaathiban.com" />
        <meta
          property="og:title"
          content="Vilva Athiban · Lead AI Engineer · Shipping Agentic AI in production"
        />
        <meta
          property="og:description"
          content="An interactive 3D portfolio. Vilva Athiban — Lead AI Engineer at Omio who drove AI adoption across the organisation and built its shared MCP services, and single-handedly built the MCP-first backend of Omio.ai. Builder and coach: he implements an MCP architecture (in-house MCPs, plugins & skills) in one month so every team uses AI to the fullest, and coaches teams to improve engineering & delivery efficiency with AI. Explore talks, blogs, videos, workshops and projects."
        />
        <meta property="og:type" content="portfolio" />
        <meta
          name="description"
          content="An interactive 3D portfolio. Vilva Athiban — Lead AI Engineer at Omio who drove AI adoption across the organisation and built its shared MCP services, and single-handedly built the MCP-first backend of Omio.ai. Builder and coach: he implements an MCP architecture (in-house MCPs, plugins & skills) in one month so every team uses AI to the fullest, and coaches teams to improve engineering & delivery efficiency with AI. Explore talks, blogs, videos, workshops and projects."
        />
        <meta
          name="keywords"
          content="ai engineer, agentic ai, llm, mcp, model context protocol, rag, multi agent, openai, anthropic, claude, ai workshop, react, javascript, typescript, graphql, nodejs, training, mentor, speaker, three.js, react three fiber, portfolio"
        />
      </Head>
      <Game />
    </>
  );
}
