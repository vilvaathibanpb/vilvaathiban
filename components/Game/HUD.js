import { useEffect, useRef, useState } from "react";
import { useGameStore } from "./state";
import { LANDMARKS } from "./config";
import { audioTracks } from "../../data/audio";

const FONT = "system-ui, -apple-system, Segoe UI, Roboto, sans-serif";

const panel = {
  background: "rgba(12, 8, 36, 0.72)",
  border: "1px solid rgba(122, 108, 255, 0.35)",
  borderRadius: 12,
  backdropFilter: "blur(10px)",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
  color: "#ece6ff",
  fontFamily: FONT,
};

const panelPadding = { padding: "10px 14px" };

const label = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 1.4,
  color: "#a78bfa",
  textTransform: "uppercase",
};

const wrap = {
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 10,
  color: "#fff",
  fontFamily: FONT,
};

const topBar = {
  position: "absolute",
  top: 20,
  left: 20,
  right: 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
  pointerEvents: "auto",
};

const kbd = {
  display: "inline-block",
  padding: "1px 7px",
  margin: "0 4px",
  borderRadius: 4,
  background: "rgba(122, 108, 255, 0.14)",
  border: "1px solid rgba(122, 108, 255, 0.45)",
  color: "#d5ccff",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: 11,
  letterSpacing: 0.3,
};

const hint = (color, isMobile) => ({
  position: "absolute",
  ...(isMobile
    ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
    : { bottom: 40, left: "50%", transform: "translateX(-50%)" }),
  ...panel,
  borderColor: color,
  boxShadow: `0 0 20px ${color}`,
  padding: "10px 20px",
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: 0.4,
  pointerEvents: "none",
  color: "#fff",
  textAlign: "center",
});

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return mobile;
}

export default function HUD() {
  const nearby = useGameStore((s) => s.nearby);
  const openSection = useGameStore((s) => s.openSection);
  const night = useGameStore((s) => s.night);
  const toggleNight = useGameStore((s) => s.toggleNight);
  const visited = useGameStore((s) => s.visited);
  const nearLm = LANDMARKS.find((l) => l.id === nearby);
  const [toast, setToast] = useState(null);
  const [controlsOpen, setControlsOpen] = useState(false);
  const isMobile = useIsMobile();
  const prevVisited = useRef(0);

  useEffect(() => {
    if (visited.size > prevVisited.current) {
      if (visited.size === LANDMARKS.length) {
        setToast("✨ You visited every signpost!");
      } else {
        setToast(`Signpost ${visited.size} of ${LANDMARKS.length} discovered`);
      }
      const id = setTimeout(() => setToast(null), 2600);
      prevVisited.current = visited.size;
      return () => clearTimeout(id);
    }
  }, [visited]);

  return (
    <div style={wrap}>
      <div
        style={{
          ...topBar,
          justifyContent: isMobile ? "flex-start" : "space-between",
        }}
        data-no-orbit
      >
        {!isMobile && (
          <div style={{ ...panel, ...panelPadding, maxWidth: 280 }}>
            <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: 0.6 }}>
              VILVA ATHIBAN
            </div>
            <div style={{ fontSize: 12, color: "#a78bfa", marginTop: 2 }}>
              Lead AI Engineer · Portfolio
            </div>
            <a
              href="/about"
              style={{
                display: "inline-block",
                marginTop: 10,
                fontSize: 12,
                fontWeight: 600,
                color: "#d5ccff",
                background: "rgba(122, 108, 255, 0.14)",
                border: "1px solid rgba(122, 108, 255, 0.45)",
                padding: "5px 12px",
                borderRadius: 999,
                textDecoration: "none",
                letterSpacing: 0.3,
              }}
            >
              View the classic site →
            </a>
          </div>
        )}
        {isMobile ? (
          <button
            onClick={() => setControlsOpen(true)}
            style={{
              ...panel,
              padding: "8px 18px",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 0.8,
              cursor: "pointer",
              pointerEvents: "auto",
              borderRadius: 999,
              lineHeight: 1.4,
            }}
          >
            Controls
          </button>
        ) : (
          <div style={{ ...panel, ...panelPadding, maxWidth: 260 }}>
            <div style={{ ...label, marginBottom: 8 }}>Controls</div>
            <Row>
              <span style={kbd}>W</span><span style={kbd}>S</span>
              <span style={muted}>forward / back</span>
            </Row>
            <Row>
              <span style={kbd}>A</span><span style={kbd}>D</span>
              <span style={muted}>turn</span>
            </Row>
            <Row>
              <span style={kbd}>E</span>
              <span style={muted}>enter portal</span>
            </Row>
            <Row>
              <span style={kbd}>Space</span>
              <span style={muted}>jump</span>
              <span style={kbd}>Shift</span>
              <span style={muted}>sprint</span>
            </Row>
            <Row>
              <span style={kbd}>drag</span>
              <span style={muted}>orbit</span>
              <span style={kbd}>wheel</span>
              <span style={muted}>zoom</span>
            </Row>
            <Row>
              <span style={kbd}>X</span>
              <span style={muted}>dance</span>
              <span style={kbd}>1-4</span>
              <span style={muted}>emotes</span>
            </Row>
            <div style={{ fontSize: 11, color: "#8a7fcb", marginTop: 6 }}>
              Mobile: joystick + portal button
            </div>
          </div>
        )}
      </div>
      {isMobile && controlsOpen && (
        <div
          onClick={() => setControlsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(5, 1, 15, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            pointerEvents: "auto",
            zIndex: 30,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              ...panel,
              padding: "18px 20px",
              width: "100%",
              maxWidth: 320,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <div style={label}>Controls</div>
              <button
                onClick={() => setControlsOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#d5ccff",
                  fontSize: 20,
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
            <Row>
              <span style={kbd}>W</span><span style={kbd}>S</span>
              <span style={muted}>forward / back</span>
            </Row>
            <Row>
              <span style={kbd}>A</span><span style={kbd}>D</span>
              <span style={muted}>turn</span>
            </Row>
            <Row>
              <span style={kbd}>E</span>
              <span style={muted}>enter portal</span>
            </Row>
            <Row>
              <span style={kbd}>Space</span>
              <span style={muted}>jump</span>
              <span style={kbd}>Shift</span>
              <span style={muted}>sprint</span>
            </Row>
            <Row>
              <span style={kbd}>drag</span>
              <span style={muted}>orbit</span>
              <span style={kbd}>wheel</span>
              <span style={muted}>zoom</span>
            </Row>
            <Row>
              <span style={kbd}>X</span>
              <span style={muted}>dance</span>
              <span style={kbd}>1-4</span>
              <span style={muted}>emotes</span>
            </Row>
            <div style={{ fontSize: 11, color: "#8a7fcb", marginTop: 8 }}>
              Mobile: joystick + portal button
            </div>
          </div>
        </div>
      )}
      <PillButton
        onClick={toggleNight}
        active={night}
        style={{ top: 20, left: "50%", transform: "translateX(-50%)" }}
      >
        {night ? "☀  Day" : "🌙  Night"}
      </PillButton>
      {!isMobile && <Progress visited={visited.size} total={LANDMARKS.length} />}
      <AudioToggle isMobile={isMobile} />
      {toast && (
        <div
          style={{
            position: "absolute",
            top: 76,
            left: "50%",
            transform: "translateX(-50%)",
            ...panel,
            padding: "10px 20px",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: 0.3,
            pointerEvents: "none",
            borderColor: "rgba(255, 209, 102, 0.6)",
            boxShadow: "0 0 20px rgba(255, 209, 102, 0.3)",
          }}
        >
          {toast}
        </div>
      )}
      {nearLm && !openSection && (
        <div style={hint(nearLm.color, isMobile)}>
          {nearLm.icon} {nearLm.title.toUpperCase()} — press <span style={kbd}>E</span> or click
        </div>
      )}
      {!isMobile && <Minimap />}
    </div>
  );
}

const muted = { color: "#cdc5f2", fontSize: 12 };

function Row({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
        marginBottom: 4,
      }}
    >
      {children}
    </div>
  );
}

function PillButton({ onClick, active, children, style }) {
  return (
    <button
      onClick={onClick}
      data-no-orbit
      style={{
        position: "absolute",
        ...panel,
        padding: "8px 18px",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: 0.8,
        lineHeight: 1.4,
        cursor: "pointer",
        pointerEvents: "auto",
        borderRadius: 999,
        borderColor: active
          ? "rgba(245, 231, 184, 0.8)"
          : "rgba(122, 108, 255, 0.45)",
        boxShadow: active
          ? "0 0 18px rgba(245, 231, 184, 0.35)"
          : "0 6px 20px rgba(0, 0, 0, 0.25)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function Progress({ visited, total }) {
  const pct = Math.round((visited / total) * 100);
  return (
    <div
      data-no-orbit
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        ...panel,
        padding: "10px 14px",
        fontSize: 13,
        pointerEvents: "auto",
        minWidth: 180,
      }}
    >
      <div style={label}>Signposts</div>
      <div style={{ fontWeight: 700, fontSize: 16, marginTop: 2 }}>
        {visited} / {total} discovered
      </div>
      <div
        style={{
          marginTop: 8,
          height: 4,
          borderRadius: 999,
          background: "rgba(122, 108, 255, 0.18)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "linear-gradient(90deg, #a78bfa, #ffd166)",
            transition: "width 240ms ease",
          }}
        />
      </div>
    </div>
  );
}

function AudioToggle({ isMobile }) {
  const [on, setOn] = useState(true);
  const night = useGameStore((s) => s.night);
  const track = night ? audioTracks.night : audioTracks.day;

  const embedSrc = on
    ? `https://www.youtube.com/embed/${track.id}?autoplay=1&loop=1&playlist=${track.id}&controls=0&modestbranding=1&iv_load_policy=3&rel=0`
    : "about:blank";

  const positionStyle = isMobile
    ? { top: 20, right: 20 }
    : { bottom: 20, right: 200 };

  return (
    <>
      <iframe
        title="ambient-audio"
        src={embedSrc}
        allow="autoplay"
        style={{
          position: "fixed",
          bottom: -80,
          right: -80,
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
          border: 0,
        }}
      />
      <button
        data-no-orbit
        onClick={() => setOn((v) => !v)}
        title={track.title}
        style={{
          position: "absolute",
          ...positionStyle,
          ...panel,
          padding: isMobile ? "8px 18px" : "10px 14px",
          fontSize: 13,
          fontWeight: isMobile ? 700 : 600,
          letterSpacing: isMobile ? 0.8 : 0,
          lineHeight: 1.4,
          cursor: "pointer",
          pointerEvents: "auto",
          borderRadius: 999,
          borderColor: on
            ? "rgba(134, 239, 172, 0.7)"
            : "rgba(122, 108, 255, 0.45)",
          boxShadow: on
            ? "0 0 18px rgba(134, 239, 172, 0.35)"
            : "0 6px 20px rgba(0, 0, 0, 0.25)",
        }}
      >
        {on ? "🔊 Ambient" : "🔈 Ambient"}
      </button>
    </>
  );
}

function Minimap() {
  const nearby = useGameStore((s) => s.nearby);
  const visited = useGameStore((s) => s.visited);
  const playerPos = useGameStore((s) => s.playerPos);
  const heading = useGameStore((s) => s.playerHeading);
  const px = playerPos.x;
  const pz = playerPos.z;
  const dirX = Math.sin(heading) * 3.2;
  const dirZ = Math.cos(heading) * 3.2;
  return (
    <div
      data-no-orbit
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 160,
        height: 160,
        borderRadius: "50%",
        ...panel,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg viewBox="-40 -40 80 80" width="100%" height="100%">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#2a1d66" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="0.8" fill="rgba(122, 108, 255, 0.5)" />
        {LANDMARKS.map((lm) => (
          <g key={lm.id}>
            <circle
              cx={lm.position.x}
              cy={lm.position.z}
              r={nearby === lm.id ? 2.6 : 2.0}
              fill={visited.has(lm.id) ? lm.color : "#555"}
              stroke={nearby === lm.id ? "#fff" : "none"}
              strokeWidth={0.5}
              opacity={nearby === lm.id ? 1 : visited.has(lm.id) ? 0.95 : 0.55}
            />
          </g>
        ))}
        <line
          x1={px}
          y1={pz}
          x2={px + dirX}
          y2={pz + dirZ}
          stroke="#ffd166"
          strokeWidth={0.8}
          strokeLinecap="round"
        />
        <circle cx={px} cy={pz} r="2.2" fill="#ffd166" stroke="#fff" strokeWidth={0.6} />
      </svg>
    </div>
  );
}
