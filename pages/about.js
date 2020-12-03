import Head from "next/head";
import styled from 'styled-components';
import Header from "../components/Header";
import About from "../components/About";

export const Container = styled.div`
  .bg-plight;
  .min-h-screen;
  .w-screen;
`;

export const Intro = styled.div`
  width: 100vw;
  .flex;
  .justify-center;
  .text-sdark;
  .text-2xl;
  .mt-8;
  .text-center;
  font-weight: 700;
`;

const IconContainer = styled.div`
    .flex;
    .w-full;
    .justify-center;
    .flex-wrap;
    .mt-6;
    .pb-8;
`;

const Icon = styled.img`
    .mx-4;
    .my-1;
`;

export default function AboutPage() {
  return (
    <Container>
      <Head>
        <title> About Vilva Athiban P B | JavaScript developer & Trainer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Intro>Get in Touch</Intro>
      <IconContainer>
          <Icon src="/li.svg" alt="Vilva's Linkedin Account" />
          <Icon src="/twitter.svg" alt="Vilva's Twitter Account" />
          <Icon src="/youtube.svg" alt="Vilva's Youtube Account" />
          <Icon src="/medium.svg" alt="Vilva's Medium Account" />
          <Icon src="/github.svg" alt="Vilva's Github Account" />
          <Icon src="/insta.svg" alt="Vilva's Instagram Account" />
          <Icon src="/discord.svg" alt="Vilva's Discord Account" />
          <Icon src="/gmail.svg" alt="Vilva's Gmail Account" />
      </IconContainer>
    </Container>
  );
}
