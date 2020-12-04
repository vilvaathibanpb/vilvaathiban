import styled from "styled-components";
import Head from "next/head";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import EntityComponent from "../components/EntityComponent";
import { ItemsContainer } from "../components/common";

export default function Page() {
  return (
    <Container>
      <Head>
        <title>
          Open source Projects by Vilva Athiban P B | JavaScript developer & Trainer
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3AAFA8" />
      </Head>
      <Header />
      <ItemsContainer>
        {projects.reverse().map(project => {
          return <EntityComponent data={project} key={project.order} />;
        })}
      </ItemsContainer>
      <Footer />
    </Container>
  );
}
