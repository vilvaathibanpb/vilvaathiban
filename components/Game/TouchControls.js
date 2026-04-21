import { useEffect, useRef, useState } from "react";
import { useGameStore } from "./state";

const baseStyle = {
  position: "fixed",
  left: 24,
  bottom: 24,
  width: 140,
  height: 140,
  borderRadius: "50%",
  background: "rgba(10, 6, 32, 0.55)",
  border: "2px solid rgba(106, 92, 255, 0.6)",
  touchAction: "none",
  zIndex: 20,
};

const knobStyle = (x, y) => ({
  position: "absolute",
  left: 70 + x * 50 - 28,
  top: 70 + y * 50 - 28,
  width: 56,
  height: 56,
  borderRadius: "50%",
  background: "rgba(106, 92, 255, 0.9)",
  boxShadow: "0 0 16px #6a5cff",
  pointerEvents: "none",
});

const actionStyle = (active) => ({
  position: "fixed",
  right: 24,
  bottom: 40,
  width: 90,
  height: 90,
  borderRadius: "50%",
  background: active ? "#00e0ff" : "rgba(0, 224, 255, 0.25)",
  border: "2px solid #00e0ff",
  boxShadow: active ? "0 0 24px #00e0ff" : "0 0 12px rgba(0, 224, 255, 0.6)",
  color: "#05010f",
  fontWeight: 800,
  fontSize: 14,
  letterSpacing: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  touchAction: "none",
  zIndex: 20,
});

function isTouch() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export default function TouchControls() {
  const [visible, setVisible] = useState(false);
  const [knob, setKnob] = useState({ x: 0, y: 0 });
  const active = useRef(false);
  const padRef = useRef(null);
  const nearby = useGameStore((s) => s.nearby);
  const openSection = useGameStore((s) => s.openSection);
  const open = useGameStore((s) => s.open);
  const close = useGameStore((s) => s.close);
  const setInput = useGameStore((s) => s.setInput);

  useEffect(() => {
    setVisible(isTouch());
  }, []);

  useEffect(() => {
    if (!visible) return;
    const pad = padRef.current;
    if (!pad) return;

    const rect = () => pad.getBoundingClientRect();

    const start = (e) => {
      e.preventDefault();
      active.current = true;
      move(e);
    };
    const move = (e) => {
      if (!active.current) return;
      const t = e.touches?.[0] || e;
      const r = rect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (t.clientX - cx) / (r.width / 2);
      const dy = (t.clientY - cy) / (r.height / 2);
      const mag = Math.hypot(dx, dy);
      const clamp = mag > 1 ? 1 / mag : 1;
      const nx = dx * clamp;
      const ny = dy * clamp;
      setKnob({ x: nx, y: ny });
      setInput({ x: nx, y: ny });
    };
    const end = () => {
      active.current = false;
      setKnob({ x: 0, y: 0 });
      setInput({ x: 0, y: 0 });
    };

    pad.addEventListener("touchstart", start, { passive: false });
    pad.addEventListener("touchmove", move, { passive: false });
    pad.addEventListener("touchend", end);
    pad.addEventListener("touchcancel", end);
    return () => {
      pad.removeEventListener("touchstart", start);
      pad.removeEventListener("touchmove", move);
      pad.removeEventListener("touchend", end);
      pad.removeEventListener("touchcancel", end);
    };
  }, [visible, setInput]);

  if (!visible) return null;

  const onAction = () => {
    if (openSection) close();
    else if (nearby) open(nearby);
  };

  return (
    <>
      <div ref={padRef} style={baseStyle}>
        <div style={knobStyle(knob.x, knob.y)} />
      </div>
      <div
        style={actionStyle(!!nearby || !!openSection)}
        onTouchStart={(e) => {
          e.preventDefault();
          onAction();
        }}
        onClick={onAction}
      >
        {openSection ? "EXIT" : nearby ? "ENTER" : "·"}
      </div>
    </>
  );
}
