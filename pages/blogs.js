import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogs, mergeByTitle } from "../data/blogs";
import EntityComponent from "../components/EntityComponent";
import { ItemsContainer } from "../components/common";

const OnSiteBanner = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  width: min(1100px, calc(100% - 32px));
  margin: 28px auto 0;
  padding: 14px 20px;
  border: 1px solid #ececea;
  border-radius: 10px;
  background: #ffffff;
  font-size: 14.5px;
  color: #374151;
  text-align: center;

  a {
    color: #111827;
    font-weight: 600;
    border-bottom: 1px solid #cbd5e1;
    cursor: pointer;
    transition: border-color 120ms ease;
  }
  a:hover {
    border-color: #111827;
  }
`;

export default function BlogsPage() {
  return (
    <Container>
      <Head>
        <title>
          Tech Blogs of Vilva Athiban P B | Lead AI Engineer, Educator & Speaker
        </title>
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
          content="Vilva Athiban is a Lead AI Engineer at Omio building Agentic AI in production — LLM orchestration, RAG, multi-agent systems and MCP. Speaker (50+ talks, 7 countries), educator and community builder helping JS devs break into AI."
        />
        <meta property="og:type" content="portfolio" />

        <meta
          name="description"
          content="Vilva Athiban is a Lead AI Engineer at Omio building Agentic AI in production — LLM orchestration, RAG, multi-agent systems and MCP. Speaker (50+ talks, 7 countries), educator and community builder helping JS devs break into AI."
        />
        <meta
          name="keywords"
          content="ai engineer, agentic ai, llm, mcp, model context protocol, rag, multi agent, openai, anthropic, claude, ai workshop, react, javascript, typescript, graphql, nodejs, training, mentor, speaker"
        />
      </Head>
      <Header />
      <OnSiteBanner>
        New: long-form articles hosted on this site —{" "}
        <Link href="/blog" passHref legacyBehavior>
          <a>read them here →</a>
        </Link>
      </OnSiteBanner>
      <ItemsContainer>
        {mergeByTitle(blogs).slice().reverse().map(blog => {
          return <EntityComponent data={blog} key={blog.order} />;
        })}
      </ItemsContainer>
      <Footer />
    </Container>
  );
}
