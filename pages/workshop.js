import styled from "styled-components";
import Head from "next/head";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { workshop } from "../data/workshop";
import EntityComponent from "../components/EntityComponent";
import { ItemsContainer } from "../components/common";

export default function BlogsPage() {
  return (
    <Container>
      <Head>
        <title>
          Workshops conducted by Vilva Athiban P B | JavaScript developer & Trainer
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ItemsContainer>
        {workshop.reverse().map(workshop => {
          return <EntityComponent data={workshop} key={workshop.order} />;
        })}
      </ItemsContainer>
      <Footer />
    </Container>
  );
}
