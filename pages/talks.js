import styled from "styled-components";
import Head from "next/head";
import { Container, Intro } from "./about";
import Header from "../components/Header";
import { IconContainer, Icon } from "../components/Home";

const ItemsContainer = styled.div`
  .flex;
  .flex-wrap;
  .p-4;
  .lg:p-8;
  .justify-center;
`;

const Item = styled.div`
  .bg-pwhite;
  .w-full;
  .lg: w-3/12;
  box-sizing: border-box;
  .p-4;
  .shadow;
  .mx-2;
  .my-4;
`;

const Image = styled.img`
  height: 100px;
  max-height: 100px;
`;

export default function TalksPage() {
  return (
    <Container>
      <Head>
        <title>
          Tech Talks of Vilva Athiban P B | JavaScript developer & Trainer
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ItemsContainer>
        <Item>
          <Image src="/logo.png" />
          <h1>Title of the blog or talk and the location it is published</h1>
          <div>
            <span>date</span>
            <span>actions</span>
          </div>
        </Item>
        <Item>
          <Image src="/logo.png" />
          <h1>Title of the blog or </h1>
          <div>
            <span>date</span>
            <span>actions</span>
          </div>
        </Item>
        <Item>
          <Image src="/logo.png" />
          <h1>Title of the blog or talk and the location it is published</h1>
          <div>
            <span>date</span>
            <span>actions</span>
          </div>
        </Item>
        <Item>
          <Image src="/logo.png" />
          <h1>Title of the blog or talk and the location it is published</h1>
          <div>
            <span>date</span>
            <span>actions</span>
          </div>
        </Item>
      </ItemsContainer>
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
