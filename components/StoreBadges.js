import styled from "styled-components";

// The one place store badges are drawn. Both SVGs share a 40-unit frame, so
// fixing the height (and letting width follow) keeps them the same size and
// on one baseline at every breakpoint. Pass `soon` for a platform that is
// planned but not live yet; a platform with neither a url nor `soon` is skipped.
// Large badges drop to 44px under 420px wide: at 52px the pair (156 + 176px)
// would wrap onto two lines on a 360px phone.

const APP_STORE = { src: "/apps/app-store-badge.svg", ratio: 119.664 / 40 };
const PLAY = { src: "/apps/google-play-badge.svg", ratio: 135 / 40 };

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${(p) => (p.$h >= 48 ? 14 : 10)}px;
  a {
    display: block;
    line-height: 0;
    border: 0;
    border-radius: 7px;
  }
  a:focus-visible { outline: 2px solid #2563eb; outline-offset: 2px; }
  img {
    display: block;
    height: ${(p) => p.$h}px;
    width: auto;
    max-width: none;
  }
  @media (max-width: 420px) {
    gap: 10px;
    img {
      height: ${(p) => Math.min(p.$h, 44)}px;
    }
    > span {
      height: ${(p) => Math.min(p.$h, 44)}px;
    }
  }
`;

const Soon = styled.span`
  display: inline-flex;
  align-items: center;
  height: ${(p) => p.$h}px;
  padding: 0 14px;
  border: 1px dashed #cbd5e1;
  border-radius: 7px;
  color: #64748b;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: ${(p) => (p.$h >= 48 ? 13 : 12)}px;
  font-weight: 600;
  white-space: nowrap;
`;

const Badge = ({ href, badge, alt, label, h }) => (
  <a href={href} aria-label={label} rel="noopener">
    <img src={badge.src} alt={alt} height={h} width={Math.round(h * badge.ratio)} loading="lazy" />
  </a>
);

export default function StoreBadges({
  ios,
  play,
  iosSoon,
  playSoon,
  name,
  size = "sm",
  labels = {},
  className,
}) {
  const h = size === "lg" ? 52 : 40;
  const l = {
    appStore: "Download on the App Store",
    play: "Get it on Google Play",
    appStoreSoon: "Coming soon to the App Store",
    playSoon: "Coming soon to Google Play",
    ...labels,
  };
  if (!ios && !play && !iosSoon && !playSoon) return null;
  return (
    <Row $h={h} className={className}>
      {ios ? (
        <Badge href={ios} badge={APP_STORE} alt={l.appStore} label={`${l.appStore}: ${name}`} h={h} />
      ) : iosSoon ? (
        <Soon $h={h}>{l.appStoreSoon}</Soon>
      ) : null}
      {play ? (
        <Badge href={play} badge={PLAY} alt={l.play} label={`${l.play}: ${name}`} h={h} />
      ) : playSoon ? (
        <Soon $h={h}>{l.playSoon}</Soon>
      ) : null}
    </Row>
  );
}
