import styled from "styled-components";
import Head from "next/head";
import { Container } from "./about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { videos } from "../data/videos";
import EntityComponent from "../components/EntityComponent";
import { ItemsContainer } from "../components/common";

export default function VideosPage() {
  return (
    <Container>
      <Head>
        <title>
          Videos of Vilva Athiban P B | JavaScript developer & Trainer
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3AAFA8" />
      </Head>
      <Header />
      <ItemsContainer>
        {videos.reverse().map(video => {
          return <EntityComponent data={video} key={video.order} />;
        })}
      </ItemsContainer>
      <Footer />
    </Container>
  );
}
