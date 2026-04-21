import styled from "styled-components";
import Link from "next/link";
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
  .lg: hidden;
`;

const About = () => {
  return (
    <AboutContainer>
      <Container>
        <div>
          Hola! I'm <Span>Vilva Athiban</Span>, the AI Jockey 👋. I'm a <Span>Lead AI Engineer at Omio</Span>, one of Europe's leading travel platforms, where I architect and ship <Span>Agentic AI systems in production</Span>. I am passionate about building AI products that solve real business problems and love to <Span>teach technology to others in depth</Span>. I design and run hands-on <Span>AI Workshops</Span> — helping engineers, PMs and non-technical stakeholders move from AI curiosity to practical application. Know more about it{" "}
          <Span>
            {" "}
            <Link href="/workshop">here.</Link>
          </Span>
        </div>
      </Container>
      <Break />
      <Break />
      <Container>
        <div>
          I am a <Span>Lead AI Engineer</Span> with a full-stack JavaScript background. I am from India,
          living in Berlin. I am an electrical engineer by qualification and a self
          taught programmer by profession. When not coding or attending meetings
          at work, you can find me{" "}
          <Span>travelling (7 countries delivered talks in so far 🇮🇳🇩🇪🇵🇱🇦🇹🇧🇪🇮🇹🇺🇦)</Span>,
          painting or watching movies.
        </div>
        <ImageContainer>
          <Image src="/about/21.jpeg" />
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
            LLM orchestration, RAG pipelines, multi-agent systems, MCP (Model Context Protocol), prompt engineering and applied ML
          </Span>
          . I ship production Agentic AI — including omio.ai (an internal LLM-powered platform adopted across Omio) and MCP integrations that connect AI agents to live business systems. Before AI, I spent a decade building scalable products with <Span>JavaScript, React, GraphQL, TypeScript, Node and React Native</Span>.
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
          Open source developers. Check out my open source projects{" "}
          <Span>
            {" "}
            <Link href="/projects">here.</Link>
          </Span>
        </div>
      </Container>
      <Break />
      <Break />
      <Container>
        <div>
          I am a regular tech speaker and I have delivered
          <Span>
            {" "}
            50+ talks across 7 countries
          </Span>{" "}
          — from JavaScript &amp; GraphQL to Agentic AI, MCP and LLM systems. I've been teaching developers since 2017, and my community has grown to <Span>14,000+ across platforms</Span>. Interested in my talks? checkout{" "}
          <Span>
            {" "}
            <Link href="/talks">here.</Link>
          </Span>
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
          I am a seasoned blogger and YouTuber, writing on{" "}
          <Span>
            <a href="https://blog.logrocket.com/author/vilvaathibanpb/" target="_blank" rel="noopener noreferrer">LogRocket</a>
          </Span>
          ,{" "}
          <Span>
            <a href={socials.medium} target="_blank" rel="noopener noreferrer">Medium</a>
          </Span>{" "}
          and{" "}
          <Span>
            <a href={socials.devto} target="_blank" rel="noopener noreferrer">dev.to</a>
          </Span>{" "}
          about JavaScript, React and now AI engineering — including agentic systems, MCP and Claude Code internals. You can checkout my articles
          <Span>
            {" "}
            <Link href="/blogs">here</Link>{" "}
          </Span>
          and my videos
          <Span>
            {" "}
            <Link href="/videos">here</Link>
          </Span>
          .
        </div>
      </Container>
    </AboutContainer>
  );
};

export default About;
