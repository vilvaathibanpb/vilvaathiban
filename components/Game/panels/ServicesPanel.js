import Link from "next/link";

const CAL = "https://cal.com/vilva-athiban/30min";
const ACCENT = "#ffcf33";

const SERVICES = [
  {
    href: "/services/mcp-architecture",
    tag: "For companies · 1 month",
    title: "Implement an MCP architecture",
    blurb:
      "A swarm of in-house MCPs, plugins and skills that plug AI into your internal tools — so every team, tech and non-tech, uses AI to the fullest. E.g. support sees a broken booking without waiting on engineering.",
  },
  {
    href: "/services/ai-engineering-efficiency",
    tag: "For tech organisations",
    title: "Improve engineering efficiency with AI",
    blurb:
      "Embed AI across your software delivery lifecycle to streamline delivery, remove bottlenecks and move your DORA and developer-experience metrics — without raising rework.",
  },
];

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 14,
};

const card = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "18px 20px",
  borderRadius: 12,
  background: "rgba(255, 207, 51, 0.08)",
  border: "1px solid rgba(255, 207, 51, 0.32)",
  textDecoration: "none",
  color: "inherit",
  transition: "border-color 160ms ease, transform 160ms ease",
  minWidth: 0,
};

export default function ServicesPanel() {
  return (
    <div>
      <div style={{ marginBottom: 16, fontSize: 14, color: "#d4ceff" }}>
        Two ways I help companies turn AI from experiment into production leverage.
      </div>

      <div style={grid}>
        {SERVICES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            style={card}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 207, 51, 0.85)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 207, 51, 0.32)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: ACCENT,
              }}
            >
              {s.tag}
            </div>
            <div style={{ fontWeight: 800, fontSize: 17 }}>{s.title}</div>
            <div style={{ fontSize: 13.5, color: "#d4ceff", lineHeight: 1.55 }}>
              {s.blurb}
            </div>
            <div style={{ fontSize: 13, color: ACCENT, marginTop: 2, fontWeight: 600 }}>
              Learn more →
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          marginTop: 22,
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
        }}
      >
        <a
          href={CAL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: ACCENT,
            color: "#1a1400",
            fontWeight: 800,
            fontSize: 14,
            padding: "12px 22px",
            borderRadius: 999,
            textDecoration: "none",
          }}
        >
          Book a discovery call
        </a>
        <Link
          href="/services"
          style={{
            fontSize: 13,
            color: ACCENT,
            textDecoration: "none",
            borderBottom: "1px dashed rgba(255,207,51,0.5)",
          }}
        >
          See the full services page →
        </Link>
      </div>
    </div>
  );
}
