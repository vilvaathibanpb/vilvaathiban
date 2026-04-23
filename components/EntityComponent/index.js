import styled from "styled-components";
import { SubscribeButton } from "../Subscribe";

const Item = styled.div`
  background: #ffffff;
  border: 1px solid #ececea;
  border-radius: 10px;
  padding: 22px;
  margin: 10px;
  box-sizing: border-box;
  width: 100%;
  max-width: 340px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 160ms ease, transform 160ms ease;

  &:hover {
    border-color: #111827;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  max-height: 160px;
  object-fit: cover;
  border-radius: 6px;
`;

const Embed = styled.embed`
  width: 100%;
  height: 200px;
  border-radius: 6px;
`;

const Title = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #111827;
  line-height: 1.35;
  letter-spacing: -0.01em;
`;

const Meta = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  color: #475569;
  letter-spacing: 0.02em;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Dot = styled.span`
  color: #cbd5e1;
`;

const Desc = styled.div`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  color: #374151;
  line-height: 1.55;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 6px;
`;

const Chip = styled.a`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #475569;
  background: #f6f6f1;
  border: 1px solid #ececea;
  padding: 5px 10px;
  border-radius: 999px;
  cursor: pointer;
  transition: color 120ms ease, border-color 120ms ease, background 120ms ease;
  &:hover {
    color: #111827;
    border-color: #111827;
    background: #ffffff;
  }
`;

const KnowMore = styled.a`
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: inline-block;
  align-self: flex-start;
  font-size: 13px;
  font-weight: 600;
  color: #fafaf7;
  background: #111827;
  padding: 8px 16px;
  border-radius: 999px;
  margin-top: 8px;
  cursor: pointer;
  transition: background 160ms ease;
  &:hover { background: #475569; }
`;

const SubscribeButtonWithoutMargin = styled(SubscribeButton)`
  margin: 0;
`;

const EntityComponent = ({ data }) => {
  const {
    title,
    host,
    date,
    desc,
    slides,
    video,
    code,
    url,
    embed,
    knowMore,
    thumbnail,
    repo,
    docs,
    npm,
    demo_url,
    mirrors,
  } = data;

  const hostLabel = mirrors && mirrors.length > 1
    ? mirrors.map((m) => m.host).join(" · ")
    : host;
  const meta = [hostLabel, date && date !== "Coming soon" ? date : null].filter(Boolean);

  return (
    <Item>
      {embed && <Embed src={embed} />}
      {!embed && thumbnail && <Thumbnail src={thumbnail} alt={title} />}
      <Title>{title}</Title>
      {meta.length > 0 && (
        <Meta>
          {meta.map((m, i) => (
            <span key={i}>
              {i > 0 && <Dot> · </Dot>}
              {m}
            </span>
          ))}
        </Meta>
      )}
      {desc && <Desc>{desc}</Desc>}
      {date === "Coming soon" && (
        <a href="http://eepurl.com/hoFrmf" target="_blank" rel="noopener noreferrer">
          <SubscribeButtonWithoutMargin>Subscribe for updates</SubscribeButtonWithoutMargin>
        </a>
      )}
      <Links>
        {slides && <Chip href={slides} target="_blank" rel="noopener noreferrer">Slides</Chip>}
        {repo && <Chip href={repo} target="_blank" rel="noopener noreferrer">Repo</Chip>}
        {docs && <Chip href={docs} target="_blank" rel="noopener noreferrer">Docs</Chip>}
        {demo_url && <Chip href={demo_url} target="_blank" rel="noopener noreferrer">Demo</Chip>}
        {npm && <Chip href={npm} target="_blank" rel="noopener noreferrer">npm</Chip>}
        {video && <Chip href={video} target="_blank" rel="noopener noreferrer">Video</Chip>}
        {code && <Chip href={code} target="_blank" rel="noopener noreferrer">Code</Chip>}
        {mirrors && mirrors.length > 1
          ? mirrors.map((m) => (
              <Chip key={m.url} href={m.url} target="_blank" rel="noopener noreferrer">
                Read on {m.host}
              </Chip>
            ))
          : url && <Chip href={url} target="_blank" rel="noopener noreferrer">Read</Chip>}
      </Links>
      {knowMore && (
        <KnowMore href={knowMore} target="_blank" rel="noopener noreferrer">
          Know more →
        </KnowMore>
      )}
    </Item>
  );
};

export default EntityComponent;
