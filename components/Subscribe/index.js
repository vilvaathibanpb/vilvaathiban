import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 760px;
  margin: 40px auto 0;
  padding: 28px 24px;
  background: #ffffff;
  border: 1px solid #ececea;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  text-align: left;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
`;

const Copy = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: #1f2937;
  max-width: 520px;
`;

export const SubscribeButton = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: inline-block;
  background: #111827;
  color: #fafaf7;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 160ms ease;
  &:hover { background: #475569; }
`;

const Subscribe = () => {
  return (
    <Wrap>
      <Copy>
        Be informed about new content, courses, and upcoming paid or free workshops.
      </Copy>
      <a href="http://eepurl.com/hoFrmf" target="_blank" rel="noopener noreferrer">
        <SubscribeButton>Subscribe</SubscribeButton>
      </a>
    </Wrap>
  );
};

export default Subscribe;
