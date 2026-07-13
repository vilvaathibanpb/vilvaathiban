import Head from "next/head";
import styled from 'styled-components';
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export const Container = styled.div`
  .bg-plight;
  .min-h-screen;
  .w-screen;
`;

export default function AboutPage() {
  return (
    <Container>
      <Head>
        <title> About Vilva Athiban P B | Lead AI Engineer, Educator & Speaker</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3AAFA8" />
        <meta property="og:site_name" content="vilvaathiban.com" />
        <meta property="og:site" content="vilvaathiban.com" />
        <meta
          property="og:title"
          content="Vilva Athiban · Lead AI Engineer · Shipping Agentic AI in production"
        />
        <meta
          property="og:description"
          content="Vilva Athiban is a Lead AI Engineer at Omio who single-handedly built the MCP-first backend of Omio.ai. He builds Agentic AI in production — LLM orchestration, RAG, multi-agent systems and MCP — and takes company engagements: building a production MCP architecture in one month and improving engineering & delivery efficiency with AI. Speaker (50+ talks, 7 countries) and educator."
        />
        <meta property="og:type" content="portfolio" />

        <meta
          name="description"
          content="Vilva Athiban is a Lead AI Engineer at Omio who single-handedly built the MCP-first backend of Omio.ai. He builds Agentic AI in production — LLM orchestration, RAG, multi-agent systems and MCP — and takes company engagements: building a production MCP architecture in one month and improving engineering & delivery efficiency with AI. Speaker (50+ talks, 7 countries) and educator."
        />
        <meta
          name="keywords"
          content="ai engineer, agentic ai, llm, mcp, model context protocol, rag, multi agent, openai, anthropic, claude, ai workshop, react, javascript, typescript, graphql, nodejs, training, mentor, speaker"
        />
      </Head>
      <Header />
      <About />
      <Footer />
    </Container>
  );
}
