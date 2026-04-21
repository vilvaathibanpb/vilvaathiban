import styled from "styled-components";
import Link from "next/link";
import { socials } from "../../data/social";

const Wrap = styled.article`
  max-width: 760px;
  margin: 0 auto;
  padding: 80px 24px 120px;
  color: #111827;
  font-size: 18px;
  line-height: 1.75;

  @media (max-width: 768px) {
    padding: 48px 20px 80px;
    font-size: 16.5px;
  }
`;

const Eyebrow = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: #475569;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const Title = styled.h1`
  font-size: clamp(32px, 4.5vw, 48px);
  letter-spacing: -0.02em;
  color: #111827;
  font-weight: 700;
  margin-bottom: 32px;
  font-family: ui-serif, Georgia, serif;
`;

const Section = styled.section`
  margin-top: 40px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }

  p {
    margin: 0 0 16px;
  }

  p a {
    color: #111827;
    border-bottom: 1px solid #cbd5e1;
    transition: border-color 120ms ease;
  }
  p a:hover { border-color: #111827; }
`;

const Portrait = styled.img`
  width: 100%;
  max-width: 460px;
  border-radius: 8px;
  display: block;
  margin: 24px 0 36px;
`;

const Socials = styled.div`
  margin-top: 56px;
  padding-top: 28px;
  border-top: 1px solid #ececea;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const SocialLink = styled.a`
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #475569;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #d6d6cf;
  cursor: pointer;
  text-transform: capitalize;
  transition: border-color 160ms ease, color 160ms ease;
  &:hover { border-color: #111827; color: #111827; }
`;

const About = () => {
  return (
    <Wrap>
      <Eyebrow>About</Eyebrow>
      <Title>Vilva Athiban P B</Title>
      <Portrait src="/intro.jpg" alt="Vilva Athiban P B" />

      <Section>
        <p>
          I'm a Lead AI Engineer at Omio, one of Europe's leading travel platforms, where I architect and ship Agentic AI systems that solve real business problems at scale. My work ranges from internal LLM platforms adopted across the organisation to Model Context Protocol integrations that connect AI agents to live company systems.
        </p>
        <p>
          Before AI took the seat, I spent a decade building web and mobile products — JavaScript, React, GraphQL, TypeScript, Node — most recently leading UI and Core Platform work at Omio. That engineering background is what keeps my AI work grounded in real production constraints.
        </p>
      </Section>

      <Section>
        <h2>What I work on</h2>
        <p>
          LLM orchestration, Retrieval-Augmented Generation, multi-agent workflows, MCP (Model Context Protocol) architecture, prompt engineering, and applied ML. I collaborate with product, data, and engineering teams at Omio to identify where AI creates the most value — and then build it.
        </p>
      </Section>

      <Section>
        <h2>Teaching &amp; speaking</h2>
        <p>
          I've been teaching developers since 2017 across JavaScript, Python, and Agentic AI. My community has grown to 14,000+ across platforms, and I've delivered 50+ talks across 7 countries. I also design and run <Link href="/workshop">hands-on workshops</Link> for engineers, product managers, and non-technical stakeholders who want to move from AI curiosity to practical application.
        </p>
        <p>
          Beyond that, I write for <a href="https://blog.logrocket.com/author/vilvaathibanpb/" target="_blank" rel="noopener noreferrer">LogRocket</a>, <a href={socials.medium} target="_blank" rel="noopener noreferrer">Medium</a>, and <a href={socials.devto} target="_blank" rel="noopener noreferrer">dev.to</a>. Recent pieces have been about Agentic AI, MCP, and how tools like Claude Code use React under the hood.
        </p>
      </Section>

      <Section>
        <h2>Outside of work</h2>
        <p>
          I'm originally from India, living in Berlin. I paint when I need a break from screens, travel whenever I can, and spend plenty of time on movies and meals with friends.
        </p>
      </Section>

      <Section>
        <h2>The International Flower</h2>
        <p>
          One long-running side project: I collect a small amount of soil from every country and region I visit. When I cross the 25-country mark, I'll mix it all together and seed a flower plant in it — so the flower that blooms will have grown from soil gathered around the world. A tiny, slow-motion piece of travel made living.
        </p>
      </Section>

      <Socials>
        {Object.keys(socials).map((k) => (
          <SocialLink key={k} href={socials[k]} target="_blank" rel="noopener noreferrer">
            {k === "devto" ? "dev.to" : k}
          </SocialLink>
        ))}
      </Socials>
    </Wrap>
  );
};

export default About;
