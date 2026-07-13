import styled from "styled-components";

// Shared building blocks for the long-form, SEO-first Services pages.
// Styling mirrors the About page so the Services board feels native to the site.

export const Wrap = styled.article`
  max-width: 820px;
  margin: 0 auto;
  padding: 72px 24px 120px;
  color: #111827;
  font-size: 18px;
  line-height: 1.75;

  @media (max-width: 768px) {
    padding: 44px 20px 80px;
    font-size: 16.5px;
  }
`;

export const Eyebrow = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: #475569;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

export const Title = styled.h1`
  font-size: clamp(30px, 4.4vw, 46px);
  letter-spacing: -0.02em;
  color: #111827;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: ui-serif, Georgia, serif;
`;

export const Lead = styled.p`
  font-size: clamp(18px, 2.2vw, 21px);
  color: #334155;
  margin: 0 0 8px;
`;

export const Section = styled.section`
  margin-top: 44px;

  h2 {
    font-size: 23px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 14px;
    letter-spacing: -0.01em;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    margin: 22px 0 8px;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  p { margin: 0 0 16px; }

  ul, ol { margin: 0 0 18px; padding-left: 22px; }
  li { margin-bottom: 8px; }

  a {
    color: #111827;
    border-bottom: 1px solid #cbd5e1;
    transition: border-color 120ms ease;
  }
  a:hover { border-color: #111827; }
`;

// Numbered timeline / week-by-week plan
export const Steps = styled.ol`
  list-style: none;
  counter-reset: step;
  padding: 0;
  margin: 24px 0 0;

  li {
    counter-increment: step;
    position: relative;
    padding: 18px 0 18px 58px;
    border-top: 1px solid #ececea;
  }
  li:last-child { border-bottom: 1px solid #ececea; }

  li::before {
    content: counter(step);
    position: absolute;
    left: 0;
    top: 16px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #111827;
    color: #fafaf7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-weight: 700;
    font-size: 15px;
  }

  li strong { display: block; font-size: 16px; margin-bottom: 2px; }
  li span { color: #475569; font-size: 16px; }
`;

// A grid of outcome / deliverable cards
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 14px;
  margin-top: 20px;
`;

export const Card = styled.div`
  border: 1px solid #ececea;
  border-radius: 10px;
  padding: 20px;
  background: #ffffff;

  h3 { margin: 0 0 6px; font-size: 16px; font-weight: 700; color: #111827; }
  p { margin: 0; font-size: 15px; color: #475569; line-height: 1.6; }
`;

// Visible FAQ block (paired with FAQPage JSON-LD for rich results / LLM answers)
export const Faq = styled.div`
  margin-top: 20px;

  details {
    border-top: 1px solid #ececea;
    padding: 6px 0;
  }
  details:last-child { border-bottom: 1px solid #ececea; }

  summary {
    cursor: pointer;
    list-style: none;
    padding: 16px 0;
    font-weight: 600;
    font-size: 17px;
    color: #111827;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  summary::-webkit-details-marker { display: none; }
  summary::after { content: "+"; color: #475569; font-weight: 400; font-size: 22px; }
  details[open] summary::after { content: "–"; }

  details p {
    margin: 0 0 16px;
    color: #334155;
    font-size: 16.5px;
    line-height: 1.7;
  }
`;

export const CtaRow = styled.div`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid #ececea;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

export const Cta = styled.a`
  display: inline-block;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fafaf7;
  background: #111827;
  padding: 12px 22px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 160ms ease;
  &:hover { background: #475569; }
`;

export const CtaGhost = styled(Cta)`
  color: #111827;
  background: transparent;
  border: 1px solid #111827;
  &:hover { background: #111827; color: #fafaf7; }
`;

// Inline JSON-LD structured data so Google + LLMs can parse and cite the page.
export const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
