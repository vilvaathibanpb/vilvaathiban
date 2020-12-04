import Head from "next/head";
import styled from 'styled-components';
import Header from "../components/Header";
import HomePage from "../components/Home";
import Footer from "../components/Footer";

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
        <meta name="theme-color" content="#3AAFA8" />
      </Head>
      <Header />
      <HomePage />
      <Footer />
    </Container>
  );
}
