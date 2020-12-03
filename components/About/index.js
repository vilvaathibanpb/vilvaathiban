import styled from "styled-components";

const AboutContainer = styled.div`
  .px-4;
  .lg: px-24;
  .py-8;
  .text-2xl;
  .text-pwhite;
  
`;

const About = () => {
  return (
    <AboutContainer>
      Hola! I'm Vilva Athiban, the JS Jockey 👋.
      <br />
      <br />I am a FullStack JavaScript developer. I am from India, living in
      Berlin. I am a electrical engineer by qualification and self taught
      programmer by profession. When not coding or attending meetings at work,
      you can find me travelling (8 countries so far), painting or watching
      movies.
      <br />
      <br /> I am also planning an International Flower. Curious? I collect soil
      from every country/region I visit and when I cross 15 countries mark, I
      will seed a flower plant in it. And the flower that blooms from the plant
      will become the first International plant.
      <br />
      <br /> When it comes to daily work, I play a lot with JavaScript, React,
      Redux, GraphQL, Typescript and React Native. I have also worked with
      NodeJS (Hapi and Express). I built highly scalable products for 5 years
      and for past 1 year I am building tools and libraries that makes Developer
      life easier. Currently trying to master Docker & Kubernetes.
      <br />
      <br /> When it comes to Open Source, I have built few tools and
      contriubuted to few famous libraries. Few of the tools I built are,
      Styled-wind with babel plugin version, hql-tag and a Cli, A Storybook
      addon listed on official Storybook docs, A VS code extension for
      graphql-codegen. Currently building OSSPuppy - a Open source tool for Open
      source developers.
      <br />
      <br /> I am a regular tech speaker and I have spoken in 15+ International
      conference and meetups across 7 countries. Interested in my talks?
      checkout here.
      <br />
      <br /> I am a seasonal blogger and Youtuber. You can checkout my articles
      here and my videos here.
    </AboutContainer>
  );
};

export default About;
