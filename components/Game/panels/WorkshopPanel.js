import { workshop } from "../../../data/workshop";

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
};

const card = {
  background: "rgba(106, 92, 255, 0.08)",
  border: "1px solid rgba(106, 92, 255, 0.3)",
  borderRadius: 12,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

const thumb = {
  width: "100%",
  height: 140,
  objectFit: "cover",
};

const badge = {
  display: "inline-block",
  fontSize: 11,
  fontWeight: 700,
  padding: "2px 8px",
  borderRadius: 999,
  background: "#1d0d4d",
  border: "1px solid #6a5cff",
  color: "#c7bdff",
  marginTop: 4,
};

export default function WorkshopPanel() {
  return (
    <div>
      <div style={{ marginBottom: 14, fontSize: 13, color: "#a78bfa" }}>
        {workshop.length} workshops · hands-on, small cohort
      </div>
      <div style={grid}>
        {workshop.map((w) => (
          <div key={w.order} style={card}>
            {w.thumbnail && <img src={w.thumbnail} alt={w.title} style={thumb} />}
            <div style={{ padding: 14, flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{w.title}</div>
              <span style={badge}>{w.date}</span>
              <div style={{ marginTop: 8, fontSize: 13, color: "#d4ceff", flex: 1 }}>{w.desc}</div>
              {(w.knowMore || w.buy) && (
                <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
                  {w.knowMore && (
                    <a className="gp-link" href={w.knowMore}>
                      know more
                    </a>
                  )}
                  {w.buy && (
                    <a className="gp-link" href={w.buy}>
                      enroll
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
