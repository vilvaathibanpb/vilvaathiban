import Head from "next/head";
import styled from 'styled-components';
import Header from "../components/Header";
import HomePage from "../components/Home";

const Container = styled.div`
  .bg-plight;
  .min-h-screen;
  .w-screen;
  
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vilva Athiban P B | JavaScript developer & Trainer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePage />
    </Container>
  );
}
