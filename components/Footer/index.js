import styled from "styled-components";
import { socials } from "../../data/social";

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

const Box = styled.div`
  .bg-pwhite;
  .pt-4;
`;

export default function Footer() {
  return (
    <Box>
      <Intro>Get in Touch</Intro>
      <IconContainer>
          {
              Object.keys(socials).map((key, i) => {
                  return (<a key={i} href={socials[key]} target="_blank" rel="noopener noreferrer"><Icon src={`/social/${key}.svg`} alt={`Vilva's ${key} Account`} /></a>)
              })
          }
      </IconContainer>
    </Box>
  );
}
