import { reviews } from "../../../data/reviews";

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 14,
};

const card = {
  padding: 16,
  borderRadius: 12,
  background: "rgba(106, 92, 255, 0.08)",
  border: "1px solid rgba(106, 92, 255, 0.3)",
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const quote = {
  fontSize: 13,
  lineHeight: 1.6,
  color: "#d4ceff",
  maxHeight: 160,
  overflow: "hidden",
  position: "relative",
};

const fade = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: 40,
  background: "linear-gradient(transparent, rgba(12,7,36,0.95))",
};

const name = { fontWeight: 700, fontSize: 14 };
const sub = { fontSize: 12, color: "#a78bfa" };

export default function ReviewsPanel() {
  return (
    <div>
      <div style={{ marginBottom: 14, fontSize: 13, color: "#a78bfa" }}>
        {reviews.length} reviews from workshop participants
      </div>
      <div style={grid}>
        {reviews.map((r, i) => (
          <div key={i} style={card}>
            <div style={quote}>
              “{r.review}”
              <div style={fade} />
            </div>
            <div>
              <div style={name}>{r.name}</div>
              <div style={sub}>
                {r.company || "—"} · {r.course}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
