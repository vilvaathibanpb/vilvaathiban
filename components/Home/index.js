import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 80px 24px 120px;

  @media (max-width: 768px) {
    padding: 48px 20px 80px;
  }
`;

const Eyebrow = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: #475569;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const Headline = styled.h1`
  font-size: clamp(36px, 5.5vw, 64px);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: #111827;
  font-weight: 700;
  margin-bottom: 32px;
  font-family: ui-serif, Georgia, "Iowan Old Style", serif;
`;

const Lede = styled.p`
  font-size: 20px;
  line-height: 1.65;
  color: #1f2937;
  max-width: 680px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 56px;
  padding-top: 32px;
  border-top: 1px solid #ececea;
`;

const Stat = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.01em;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: #475569;
  margin-top: 2px;
`;

const Links = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const Primary = styled.a`
  display: inline-block;
  background: #111827;
  color: #fafaf7;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 160ms ease;
  &:hover { background: #475569; }
`;

const Secondary = styled.a`
  display: inline-block;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  border: 1px solid #c9c9c1;
  cursor: pointer;
  transition: border-color 160ms ease;
  &:hover { border-color: #111827; }
`;

const Home = () => {
  return (
    <Container>
      <Eyebrow>Lead AI Engineer · Educator · Speaker</Eyebrow>
      <Headline>
        Building Agentic AI in production, and teaching developers how to ship it.
      </Headline>
      <Lede>
        I'm Vilva Athiban — a Lead AI Engineer at Omio, one of Europe's largest travel platforms, where I architect and deliver Agentic AI systems that solve real business problems at scale.
      </Lede>
      <Lede>
        My work spans LLM orchestration, Retrieval-Augmented Generation, multi-agent workflows, and Model Context Protocol integrations. Outside of Omio, I run hands-on workshops and speak at conferences to help engineers bridge the gap from traditional software into production AI.
      </Lede>
      <Meta>
        <Stat>
          <StatValue>50+</StatValue>
          <StatLabel>Talks delivered</StatLabel>
        </Stat>
        <Stat>
          <StatValue>7</StatValue>
          <StatLabel>Countries spoken in</StatLabel>
        </Stat>
        <Stat>
          <StatValue>14k+</StatValue>
          <StatLabel>Community reach</StatLabel>
        </Stat>
        <Stat>
          <StatValue>2017</StatValue>
          <StatLabel>Teaching since</StatLabel>
        </Stat>
      </Meta>
      <Links>
        <Link href="/about" passHref legacyBehavior><Primary>Read more about me</Primary></Link>
        <Link href="/talks" passHref legacyBehavior><Secondary>Recent talks</Secondary></Link>
        <Link href="/workshop" passHref legacyBehavior><Secondary>Workshops</Secondary></Link>
      </Links>
    </Container>
  );
};

export default Home;
