import styled from "styled-components";
import Head from "next/head";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { talks } from "../data/talks";
import EntityComponent from "../components/EntityComponent";
import { ItemsContainer } from "../components/common";

export default function TalksPage() {
  return (
    <Container>
      <Head>
        <title>
          Tech Talks of Vilva Athiban P B | JavaScript developer & Trainer
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3AAFA8" />
      </Head>
      <Header />
      <ItemsContainer>
        {talks.reverse().map(talk => {
          return <EntityComponent data={talk} key={talk.order} />;
        })}
      </ItemsContainer>
      <Footer />
    </Container>
  );
}
