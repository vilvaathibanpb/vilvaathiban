import styled from "styled-components";
import { AUTHOR_BIO, AUTHOR_LINKS, PERSON } from "../lib/person";

const SANS = `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

const Box = styled.aside`
  display: flex;
  gap: 18px;
  align-items: flex-start;
  margin-top: 48px;
  padding: 22px;
  border: 1px solid #ececea;
  border-radius: 14px;
  background: #fafaf7;
  font-family: ${SANS};

  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`;

const Bio = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: #334155;
  margin: 6px 0 10px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  font-size: 13.5px;
  a {
    color: #111827;
    font-weight: 600;
    border-bottom: 1px solid #cbd5e1;
  }
  a:hover { border-color: #111827; }
`;

const Updated = styled.div`
  margin-top: 10px;
  font-size: 12.5px;
  color: #64748b;
`;

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

// Author box for blog posts and guides: photo, name, bio, profile links and
// (when the page has one) the last-updated date.
export default function AuthorBox({ updated }) {
  return (
    <Box aria-label="About the author">
      <img src="/vilva.png" alt={PERSON.name} width="72" height="72" loading="lazy" />
      <div>
        <Name>{PERSON.name}</Name>
        <Bio>{AUTHOR_BIO}</Bio>
        <Links>
          {AUTHOR_LINKS.map((l) => (
            <a key={l.label} href={l.href} rel="author noopener" target="_blank">
              {l.label}
            </a>
          ))}
        </Links>
        {updated ? <Updated>Last updated {formatDate(updated)}</Updated> : null}
      </div>
    </Box>
  );
}
