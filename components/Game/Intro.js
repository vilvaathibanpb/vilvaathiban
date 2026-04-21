import { useGameStore } from "./state";

const overlay = {
  position: "fixed",
  inset: 0,
  background:
    "linear-gradient(180deg, #bde7ff 0%, #dff3ff 45%, #c8e8c0 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  zIndex: 40,
  color: "#4a2a10",
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  textAlign: "center",
  padding: 24,
  overflow: "hidden",
};

const clouds = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  opacity: 0.7,
  backgroundImage:
    "radial-gradient(ellipse 220px 80px at 15% 22%, #ffffff 40%, transparent 70%), radial-gradient(ellipse 260px 90px at 85% 30%, #ffffff 40%, transparent 72%), radial-gradient(ellipse 180px 60px at 40% 12%, #ffffff 55%, transparent 75%)",
};

const card = {
  position: "relative",
  zIndex: 1,
  background: "rgba(255, 250, 235, 0.92)",
  border: "2px solid rgba(122, 83, 48, 0.35)",
  borderRadius: 20,
  padding: "36px 40px",
  boxShadow: "0 24px 60px rgba(74, 42, 16, 0.18)",
  maxWidth: 620,
};

const headline = {
  fontSize: "clamp(32px, 6vw, 56px)",
  fontWeight: 900,
  letterSpacing: 1.5,
  background: "linear-gradient(90deg, #e08a5c, #c94f3d, #6d538c)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: 6,
};

const sub = {
  fontSize: "clamp(13px, 1.8vw, 16px)",
  color: "#7a5330",
  letterSpacing: 2,
  fontWeight: 700,
  textTransform: "uppercase",
};

const tagline = {
  marginTop: 18,
  fontSize: 15,
  lineHeight: 1.65,
  color: "#4a2a10",
};

const button = {
  marginTop: 28,
  padding: "14px 36px",
  background: "linear-gradient(90deg, #ffb347, #e08a5c, #c94f3d)",
  color: "#fff",
  border: 0,
  borderRadius: 999,
  fontWeight: 800,
  fontSize: 16,
  letterSpacing: 2,
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(201, 79, 61, 0.35)",
};

const fallback = {
  marginTop: 20,
  fontSize: 13,
  color: "#7a5330",
};

const fbLink = {
  color: "#c94f3d",
  textDecoration: "none",
  margin: "0 6px",
  fontWeight: 600,
};

export default function Intro() {
  const start = useGameStore((s) => s.start);
  return (
    <div style={overlay}>
      <div style={clouds} />
      <div style={card}>
        <div style={headline}>VILVA ATHIBAN</div>
        <div style={sub}>The AI Jockey · Portfolio Village</div>
        <div style={tagline}>
          Welcome, traveler. Walk the little robot around a cozy village where eight
          painted signposts tell the story of Vilva's work as a Lead AI Engineer,
          speaker and educator. Built with Three.js, React Three Fiber, and a bit
          of sunshine.
        </div>
        <button style={button} onClick={start}>
          ▶ ENTER THE VILLAGE
        </button>
        <div style={fallback}>
          Prefer a classic site?
          <a href="/about" style={fbLink}>About</a>·
          <a href="/talks" style={fbLink}>Talks</a>·
          <a href="/blogs" style={fbLink}>Blogs</a>·
          <a href="/videos" style={fbLink}>Videos</a>·
          <a href="/projects" style={fbLink}>Projects</a>·
          <a href="/workshop" style={fbLink}>Workshops</a>·
          <a href="/reviews" style={fbLink}>Reviews</a>
        </div>
      </div>
    </div>
  );
}
