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
  overflow:hidden;
  border-radius: 50%;
  border: 5px solid #fff;
`;

const Photo = styled.img`
border-radius: 50%;
  max-height: 100%;
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
        <Photo src="/photo.jpeg" alt="Vilva Athiban P B, The JS Jockey" />
      </PhotoContainer>
      <Intro>
        I am <Span>Vilva</Span>, a JavaScript developer, International tech
        Speaker, Open Source Contributor, Seasonal Blogger and YouTuber.
        <br />
        <br />I love building <Span>Products and Devtools</Span> and have a
        passion to <Span>teach </Span>Web in depth
      </Intro>
    </HomeContainer>
  );
};

export default Home;
