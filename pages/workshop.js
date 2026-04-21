import styled from "styled-components";
import Head from "next/head";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { workshop } from "../data/workshop";
import EntityComponent from "../components/EntityComponent";
import { ItemsContainer } from "../components/common";
import Subscribe from "../components/Subscribe";

export default function BlogsPage() {
  return (
    <Container>
      <Head>
        <title>
          Workshops conducted by Vilva Athiban P B | Lead AI Engineer, Educator & Speaker
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
      <Subscribe />
      <ItemsContainer>
        {workshop.reverse().map(workshop => {
          return <EntityComponent data={workshop} key={workshop.order} />;
        })}
      </ItemsContainer>
      <Footer />
    </Container>
  );
}
