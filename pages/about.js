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
        <title> About Vilva Athiban P B | JavaScript developer & Trainer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3AAFA8" />
      </Head>
      <Header />
      <About />
      <Footer />
    </Container>
  );
}
