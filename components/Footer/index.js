import styled from "styled-components";
import NextLink from "next/link";
import { socials } from "../../data/social";
import { CookieSettingsLink } from "../CookieConsent";

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

const Legal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  font-size: 13px;
  color: #cbd5e1;

  a {
    color: #cbd5e1;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  a:hover { color: #ffffff; }
`;

// "More from Vilva": identical cross-link block on all 8 domains (this site
// omits its own /apps entry). Plain links, same tab, UTM-tagged.
const UTM = "utm_source=vilvaathiban.com&utm_medium=footer&utm_campaign=crosslink";
const withUtm = (url) => `${url}${url.includes("?") ? "&" : "?"}${UTM}`;
const MORE = [
  { name: "AI Done Now", blurb: "Mac notifier for Claude Code, Cursor, Codex & Gemini", url: "https://aidonenow.com" },
  { name: "NotchFit", blurb: "Notch workouts while Claude codes", url: "https://aidonenow.com/notchfit" },
  { name: "VibeLock", blurb: "Lock your Mac, keep the terminal visible", url: "https://vibelock.site" },
  { name: "FinalSaying", blurb: "Messages delivered after you're gone", url: "https://finalsaying.com" },
  { name: "SafeRoutes", blurb: "Safe flight routes around closed airspace", url: "https://saferoutes.online" },
  { name: "Hodolist", blurb: "City guides & Germany visa help", url: "https://hodolist.com" },
  { name: "CountingUS", blurb: "Days-together counter with a QR surprise", url: "https://countingus.com" },
];

const More = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px 24px;
  width: 100%;
  text-align: left;
  font-size: 13px;
  color: #94a3b8;
  a { color: #fafaf7; font-weight: 600; text-decoration: none; }
  a:hover { text-decoration: underline; }
`;

export default function Footer() {
  return (
    <Box>
      <Inner>
        <Title>More from Vilva</Title>
        <More>
          {MORE.map((m) => (
            <li key={m.name}>
              <a href={withUtm(m.url)}>{m.name}</a> — {m.blurb}
            </li>
          ))}
        </More>
        <Title>Get in touch</Title>
        <Links>
          {Object.keys(socials).map((key) => (
            <Link key={key} href={socials[key]} target="_blank" rel="noopener noreferrer">
              {key === "devto" ? "dev.to" : key}
            </Link>
          ))}
        </Links>
        <Legal>
          <NextLink href="/privacy">Privacy</NextLink>
          <NextLink href="/impressum">Impressum</NextLink>
          <CookieSettingsLink style={{ color: "#cbd5e1" }} />
        </Legal>
        <Meta>© {new Date().getFullYear()} Vilva Athiban P B</Meta>
      </Inner>
    </Box>
  );
}
