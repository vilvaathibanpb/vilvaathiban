import styled from "styled-components";
import { socials } from "../../data/social";

const AboutContainer = styled.div`
  .px-4;
  .lg: px-24;
  .py-8;
  .text-2xl;
  .text-pwhite;
`;

const Span = styled.span`
  .text-pdark;
  .text-bold;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  .flex;
  .justify-center;
`;

const Image = styled.img`
  height: 250px;
  border-radius: 25px;
  .m-4;
  .hidden;
  .lg: block;
`;

const Container = styled.div`
  .flex;
  .items-center;
`;

const Break = styled.br`
  .lg:hidden;
`;

const About = () => {
  return (
    <AboutContainer>
      <Container>
        <div>
          Hola! I'm <Span>Vilva Athiban</Span>, the JS Jockey 👋.
        </div>
      </Container>
      <Break />
      <Break />
      <Container>
        <div>
          I am a <Span>FullStack JavaScript developer</Span>. I am from India,
          living in Berlin. I am a electrical engineer by qualification and self
          taught programmer by profession. When not coding or attending meetings
          at work, you can find me <Span>travelling (countries so far: 🇮🇳🇩🇪🇵🇱🇦🇹🇧🇪🇩🇰🇮🇹🇻🇦🇨🇿)</Span>,
          painting or watching movies.
        </div>
        <ImageContainer>
          <Image src="/about/2.jpeg" />
        </ImageContainer>
      </Container>
      <Break />
      <Break />
      <Container>
        <ImageContainer>
          <Image src="/about/3.jpeg" />
        </ImageContainer>
        <div>
          I am also planning an <Span>International Flower</Span>. Curious? I
          collect soil from every country/region I visit and when I cross 15
          countries mark, I will seed a flower plant in it. And the flower that
          blooms from the plant will become the first International plant.
        </div>
      </Container>
      <Break />
      <Break />
      <Container>
        <div>
          When it comes to daily work, I play a lot with
          <Span>
            JavaScript, React, Redux, GraphQL, Typescript and React Native
          </Span>
          . I have also worked with NodeJS (Hapi and Express). I built highly
          scalable products for 5 years and for past 1 year I am building tools
          and libraries that makes Developer life easier. Currently trying to
          master Docker & Kubernetes.
        </div>
        <ImageContainer>
          <Image src="/about/4.jpeg" />
        </ImageContainer>
      </Container>
      <Break />
      <Break />
      <Container>
      <ImageContainer>
          <Image src="/about/7.jpeg" />
        </ImageContainer>
        <div>
          When it comes to <Span>Open Source</Span>, I have built few tools and
          contriubuted to few famous libraries. Few of the tools I built are,
          Styled-wind with babel plugin version, hql-tag and a Cli, A Storybook
          addon listed on official Storybook docs, A VS code extension for
          graphql-codegen. Currently building OSSPuppy - a Open source tool for
          Open source developers.
        </div>
      </Container>
      <Break />
      <Break />
      <Container>
        <div>
          I am a regular tech speaker and I have spoken in
          <Span>
            {" "}
            25+ International conference and meetups across 6 countries
          </Span>
          . Interested in my talks? checkout here.
        </div>
        <ImageContainer>
          <Image src="/about/5.jpeg" />
        </ImageContainer>
      </Container>
      <Break />
      <Break />
      <Container>
        <ImageContainer>
          <Image src="/about/6.jpeg" />
        </ImageContainer>
        <div>
          I am a seasonal blogger and Youtuber. You can checkout my articles
          <Span>
            {" "}
            <a href={socials.medium} target="_blank" rel="noopener noreferrer">
              here
            </a>{" "}
          </Span>
          and my videos
          <Span>
            {" "}
            <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </Span>
          .
        </div>
      </Container>
    </AboutContainer>
  );
};

export default About;
