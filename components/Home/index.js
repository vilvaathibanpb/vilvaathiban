import styled from "styled-components";

const HomeContainer = styled.div`
  .py-8;
  .flex;
  .pt-0;
  .lg: pt-8;
  .items-center;
  .justify-center;
  .flex-col;
  .text-pwhite;
`;
const PhotoContainer = styled.div`
  .mt-4;
  height: 35vh;
  width: 35vh;
  .p-4;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #fff;
`;

const Photo = styled.img`
  border-radius: 50%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

const Intro = styled.div`
  width: 70vw;
  .text-2xl;
  .mt-8;
  .text-center;
`;

const Span = styled.span`
  .text-pdark;
  .text-bold;
  font-weight: 700;
`;

const Home = () => {
  return (
    <HomeContainer>
      <PhotoContainer>
        <Photo src="/intro.jpg" alt="Vilva Athiban P B, The AI Jockey" />
      </PhotoContainer>
      <Intro>
        I am <Span>Vilva</Span>, a Lead AI Engineer <Span>@ Omio</Span>, building <Span>Agentic AI in production</Span>. International tech Speaker, Educator, Open Source Contributor, Blogger and YouTuber.
        <br />
        <br />I architect <Span>LLM orchestration, RAG pipelines, multi-agent systems and MCP-based applications</Span>, and love <Span>helping JS devs break into AI</Span>.
      </Intro>
    </HomeContainer>
  );
};

export default Home;
