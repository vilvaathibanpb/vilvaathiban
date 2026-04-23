import { socials } from "../../../data/social";

const META = {
  linkedin: { label: "LinkedIn", blurb: "Work + AI engineering threads" },
  twitter: { label: "Twitter / X", blurb: "Short thoughts & talk announcements" },
  youtube: { label: "YouTube", blurb: "Talks, tutorials, deep dives" },
  medium: { label: "Medium", blurb: "Long-form writing" },
  devto: { label: "dev.to", blurb: "Technical articles" },
  github: { label: "GitHub", blurb: "Open source & experiments" },
  instagram: { label: "Instagram", blurb: "Life beyond code" },
  discord: { label: "Discord", blurb: "Community chat" },
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 14,
};

const card = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  padding: "16px 18px",
  borderRadius: 12,
  background: "rgba(74, 179, 228, 0.08)",
  border: "1px solid rgba(74, 179, 228, 0.3)",
  textDecoration: "none",
  color: "inherit",
  transition: "border-color 160ms ease, transform 160ms ease",
  minWidth: 0,
  overflow: "hidden",
};

export default function SocialsPanel() {
  const keys = Object.keys(socials);
  return (
    <div>
      <div style={{ marginBottom: 14, fontSize: 13, color: "#a78bfa" }}>
        {keys.length} places to find me
      </div>
      <div style={grid}>
        {keys.map((key) => {
          const m = META[key] || { label: key, blurb: "" };
          return (
            <a
              key={key}
              href={socials[key]}
              target="_blank"
              rel="noopener noreferrer"
              style={card}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(74, 179, 228, 0.8)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(74, 179, 228, 0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  src={`/social/${key}.svg`}
                  alt={m.label}
                  style={{ width: 22, height: 22 }}
                />
                <div style={{ fontWeight: 700, fontSize: 15 }}>{m.label}</div>
              </div>
              {m.blurb && (
                <div style={{ fontSize: 13, color: "#d4ceff" }}>{m.blurb}</div>
              )}
              <div
                style={{
                  fontSize: 12,
                  color: "#4ab3e4",
                  marginTop: 4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  minWidth: 0,
                }}
                title={socials[key]}
              >
                {socials[key].replace(/^https?:\/\//, "")}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
