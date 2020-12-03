import styled from "styled-components";

const HomeContainer = styled.div`
  .py-8;
  .flex;
  .pt-0;
  .lg:pt-8;
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
  .cursor-pointer;
  border-radius: 50%;
  border: 5px solid #fff;
`;

const Photo = styled.img`
.cursor-pointer;
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

export const IconContainer = styled.div`
    .flex;
    .w-full;
    .justify-center;
    .flex-wrap;
    .mt-6;
    
`;

export const Icon = styled.img`
    .mx-4;
    .my-1;
`;

export const GetInTouch = styled(Intro)`
.text-sdark;
font-weight: 700;
`

const Home = () => {
  return (
    <HomeContainer>
      <PhotoContainer>
        <Photo src="/logo.png" alt="Vilva Athiban P B, The JS Jockey" />
      </PhotoContainer>
      <Intro>
        I am <Span>Vilva</Span>, a JavaScript developer, International tech
        Speaker, Open Source Contributor, Seasonal Blogger and YouTuber. 
        
        <br /><br />I love building <Span>Products and Devtools</Span> and have a passion to <Span>teach Web</Span> in depth
      </Intro>
      <GetInTouch>Get in Touch</GetInTouch>
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

    </HomeContainer>
  );
};

export default Home;
