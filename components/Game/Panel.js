import { useEffect } from "react";
import { useGameStore } from "./state";
import { LANDMARKS } from "./config";
import AboutPanel from "./panels/AboutPanel";
import ListPanel from "./panels/ListPanel";
import VideosPanel from "./panels/VideosPanel";
import WorkshopPanel from "./panels/WorkshopPanel";
import ReviewsPanel from "./panels/ReviewsPanel";
import SocialsPanel from "./panels/SocialsPanel";
import { blogs } from "../../data/blogs";
import { talks } from "../../data/talks";
import { projects } from "../../data/projects";

const overlay = {
  position: "fixed",
  inset: 0,
  background: "radial-gradient(ellipse at center, rgba(10,6,32,0.6), rgba(5,1,15,0.92))",
  backdropFilter: "blur(8px)",
  zIndex: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  animation: "gameFadeIn 200ms ease-out",
};

const card = (color) => ({
  width: "min(980px, 100%)",
  maxHeight: "88vh",
  background: "rgba(12, 7, 36, 0.95)",
  border: `2px solid ${color}`,
  borderRadius: 16,
  boxShadow: `0 0 40px ${color}60, inset 0 0 40px rgba(0,0,0,0.4)`,
  color: "#e9e6ff",
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

const header = (color) => ({
  padding: "18px 24px",
  borderBottom: `1px solid ${color}55`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: `linear-gradient(90deg, ${color}22, transparent)`,
});

const title = { fontSize: 22, fontWeight: 800, letterSpacing: 1 };
const subtitle = { fontSize: 13, color: "#a78bfa", marginTop: 2 };
const body = { padding: 24, overflowY: "auto" };
const closeBtn = (color) => ({
  background: "transparent",
  border: `1px solid ${color}`,
  color: "#fff",
  borderRadius: 8,
  padding: "6px 14px",
  cursor: "pointer",
  fontWeight: 600,
});

export default function Panel() {
  const openSection = useGameStore((s) => s.openSection);
  const close = useGameStore((s) => s.close);
  const lm = LANDMARKS.find((l) => l.id === openSection);

  useEffect(() => {
    if (openSection) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openSection]);

  if (!lm) return null;

  return (
    <div style={overlay} onClick={close}>
      <style>{`
        @keyframes gameFadeIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        .gp-link { color: #00e0ff; text-decoration: none; border-bottom: 1px dashed rgba(0,224,255,0.5); }
        .gp-link:hover { border-bottom-style: solid; }
        .gp-item { padding: 14px 16px; margin-bottom: 10px; border-radius: 10px; background: rgba(106,92,255,0.08); border: 1px solid rgba(106,92,255,0.2); transition: border-color 160ms; }
        .gp-item:hover { border-color: rgba(106,92,255,0.6); }
        .gp-meta { font-size: 12px; color: #a78bfa; margin-top: 4px; }
      `}</style>
      <div style={card(lm.color)} onClick={(e) => e.stopPropagation()}>
        <div style={header(lm.color)}>
          <div>
            <div style={title}>
              {lm.icon} {lm.title}
            </div>
            <div style={subtitle}>{lm.subtitle}</div>
          </div>
          <button style={closeBtn(lm.color)} onClick={close}>
            CLOSE · ESC
          </button>
        </div>
        <div style={body}>
          {openSection === "about" && <AboutPanel />}
          {openSection === "talks" && <ListPanel items={[...talks].reverse()} kind="talk" accent={lm.color} />}
          {openSection === "blogs" && <ListPanel items={[...blogs].reverse()} kind="blog" accent={lm.color} />}
          {openSection === "videos" && <VideosPanel />}
          {openSection === "projects" && <ListPanel items={projects} kind="project" accent={lm.color} />}
          {openSection === "workshop" && <WorkshopPanel />}
          {openSection === "reviews" && <ReviewsPanel />}
          {openSection === "socials" && <SocialsPanel />}
        </div>
      </div>
    </div>
  );
}
