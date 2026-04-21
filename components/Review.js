import React from "react";
import styled from "styled-components";
import { reviews } from "../data/reviews";

const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 24px 96px;

  @media (max-width: 768px) {
    padding: 40px 18px 64px;
  }
`;

const Eyebrow = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: #475569;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const Heading = styled.h1`
  font-size: clamp(28px, 4vw, 40px);
  color: #111827;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
  font-family: ui-serif, Georgia, serif;
`;

const Intro = styled.p`
  color: #475569;
  font-size: 17px;
  max-width: 640px;
  margin-bottom: 36px;
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #ececea;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 160ms ease;
  &:hover { border-color: #111827; }
`;

const Quote = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: #1f2937;
  margin: 0;
`;

const Footer = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding-top: 10px;
  border-top: 1px solid #ececea;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.div`
  font-size: 13.5px;
  font-weight: 600;
  color: #111827;
`;

const Sub = styled.div`
  font-size: 12px;
  color: #475569;
`;

const Review = () => {
  const list = [...reviews].reverse();
  return (
    <Wrap>
      <Eyebrow>Reviews</Eyebrow>
      <Heading>What past workshop students say</Heading>
      <Intro>
        A small selection of unedited feedback from engineers who have taken the Webpack, Web Performance, and Web Tooling workshops.
      </Intro>
      <Grid>
        {list.map(({ name, company, course, review }, i) => (
          <Card key={i}>
            <Quote>“{review}”</Quote>
            <Footer>
              <Name>{name}</Name>
              <Sub>
                {company || "Independent"} · {course}
              </Sub>
            </Footer>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
};

export default Review;
