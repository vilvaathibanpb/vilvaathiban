import styled from "styled-components";
import { socials } from "../../data/social";

const Box = styled.footer`
  background: #111827;
  color: #fafaf7;
  padding: 48px 24px 36px;
  margin-top: 40px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #cbd5e1;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #fafaf7;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  text-transform: capitalize;
  transition: border-color 160ms ease, background 160ms ease;
  &:hover { border-color: #ffffff; background: rgba(255, 255, 255, 0.06); }
`;

const Meta = styled.div`
  font-size: 12px;
  color: #94a3b8;
  margin-top: 8px;
`;

export default function Footer() {
  return (
    <Box>
      <Inner>
        <Title>Get in touch</Title>
        <Links>
          {Object.keys(socials).map((key) => (
            <Link key={key} href={socials[key]} target="_blank" rel="noopener noreferrer">
              {key === "devto" ? "dev.to" : key}
            </Link>
          ))}
        </Links>
        <Meta>© {new Date().getFullYear()} Vilva Athiban P B</Meta>
      </Inner>
    </Box>
  );
}
