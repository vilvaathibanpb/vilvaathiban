import { videos } from "../../../data/videos";

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 16,
};

const card = {
  background: "rgba(106, 92, 255, 0.08)",
  border: "1px solid rgba(106, 92, 255, 0.3)",
  borderRadius: 12,
  overflow: "hidden",
};

export default function VideosPanel() {
  const list = [...videos].reverse();
  return (
    <div>
      <div style={{ marginBottom: 14, fontSize: 13, color: "#a78bfa" }}>{list.length} videos</div>
      <div style={grid}>
        {list.map((v) => (
          <div key={v.order} style={card}>
            <div style={{ position: "relative", paddingTop: "56%" }}>
              <iframe
                src={v.embed}
                title={v.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                allowFullScreen
              />
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{v.title}</div>
              <div className="gp-meta">{v.date}</div>
              {v.desc && <div style={{ marginTop: 6, fontSize: 13, color: "#d4ceff" }}>{v.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
