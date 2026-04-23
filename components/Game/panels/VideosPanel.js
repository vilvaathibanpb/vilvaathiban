import { useState } from "react";
import { videos } from "../../../data/videos";

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: 16,
};

const card = {
  background: "rgba(106, 92, 255, 0.07)",
  border: "1px solid rgba(106, 92, 255, 0.25)",
  borderRadius: 12,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "border-color 160ms ease, transform 160ms ease",
};

const mediaWrap = {
  position: "relative",
  paddingTop: "56%",
  background: "#0a0620",
  cursor: "pointer",
  overflow: "hidden",
};

const thumb = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const playBadge = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(180deg, rgba(5,1,15,0) 0%, rgba(5,1,15,0.55) 100%)",
  transition: "background 160ms ease",
};

const playCircle = {
  width: 54,
  height: 54,
  borderRadius: "50%",
  background: "rgba(0, 224, 255, 0.95)",
  color: "#05010f",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 22,
  boxShadow: "0 6px 20px rgba(0, 224, 255, 0.45)",
};

const seriesBadge = {
  position: "absolute",
  top: 10,
  left: 10,
  fontSize: 11,
  letterSpacing: 0.5,
  fontWeight: 700,
  padding: "3px 8px",
  borderRadius: 999,
  background: "rgba(167, 139, 250, 0.18)",
  border: "1px solid rgba(167, 139, 250, 0.5)",
  color: "#e4d9ff",
};

function getVideoId(embed) {
  if (!embed) return null;
  const m = embed.match(/\/embed\/([^/?]+)/);
  if (!m || m[1] === "videoseries") return null;
  return m[1];
}

function VideoCard({ v }) {
  const [playing, setPlaying] = useState(false);
  const videoId = getVideoId(v.embed);
  const isPlaylist = !videoId;
  const thumbUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

  const iframeSrc = playing || isPlaylist
    ? (videoId ? `${v.embed}?autoplay=1&rel=0` : v.embed)
    : null;

  return (
    <div style={card}>
      <div
        style={mediaWrap}
        onClick={() => !isPlaylist && setPlaying(true)}
        role={isPlaylist ? undefined : "button"}
        aria-label={isPlaylist ? undefined : `Play ${v.title}`}
      >
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title={v.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img src={thumbUrl} alt={v.title} style={thumb} loading="lazy" />
            <div style={playBadge}>
              <div style={playCircle}>▶</div>
            </div>
          </>
        )}
        {isPlaylist && <div style={seriesBadge}>SERIES</div>}
      </div>
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.35 }}>{v.title}</div>
        <div style={{ fontSize: 12, color: "#a78bfa" }}>{v.date}</div>
        {v.desc && (
          <div
            style={{
              fontSize: 12.5,
              color: "#cfc8f2",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {v.desc}
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideosPanel() {
  const list = [...videos].reverse();
  return (
    <div>
      <div style={{ marginBottom: 14, fontSize: 13, color: "#a78bfa" }}>{list.length} videos</div>
      <div style={grid}>
        {list.map((v) => (
          <VideoCard key={v.order} v={v} />
        ))}
      </div>
    </div>
  );
}
