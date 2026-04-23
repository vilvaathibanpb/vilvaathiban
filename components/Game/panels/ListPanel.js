const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: 14,
};

const card = (accent) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "16px 18px",
  borderRadius: 12,
  background: "rgba(106, 92, 255, 0.07)",
  border: "1px solid rgba(106, 92, 255, 0.25)",
  transition: "border-color 160ms ease, transform 160ms ease",
  textDecoration: "none",
  color: "inherit",
  height: "100%",
});

const titleStyle = {
  fontWeight: 700,
  fontSize: 15,
  lineHeight: 1.4,
  color: "#e9e6ff",
};

const metaStyle = {
  fontSize: 12,
  color: "#a78bfa",
  letterSpacing: 0.2,
};

const descStyle = {
  fontSize: 13,
  color: "#cfc8f2",
  lineHeight: 1.5,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const chipRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  marginTop: "auto",
  paddingTop: 6,
};

const chip = {
  fontSize: 11,
  padding: "3px 9px",
  borderRadius: 999,
  background: "rgba(0, 224, 255, 0.1)",
  border: "1px solid rgba(0, 224, 255, 0.35)",
  color: "#9feaff",
  textDecoration: "none",
  letterSpacing: 0.3,
};

function Item({ data, kind, accent }) {
  const primaryUrl =
    data.url || data.video || data.demo_url || data.repo || data.npm || data.slides || data.code || "";
  const hostLabel = data.mirrors && data.mirrors.length > 1
    ? data.mirrors.map((m) => m.host).join(" · ")
    : data.host;
  const sub = [hostLabel, data.date].filter(Boolean).join(" · ");

  const extras = [];
  if (data.mirrors && data.mirrors.length > 1) {
    data.mirrors.forEach((m) => extras.push({ label: m.host, href: m.url }));
  }
  if (data.repo) extras.push({ label: "repo", href: data.repo });
  if (data.npm) extras.push({ label: "npm", href: data.npm });
  if (data.docs) extras.push({ label: "docs", href: data.docs });
  if (data.demo_url) extras.push({ label: "demo", href: data.demo_url });
  if (data.slides) extras.push({ label: "slides", href: data.slides });
  if (data.video) extras.push({ label: "video", href: data.video });
  if (data.code && kind === "talk") extras.push({ label: "code", href: data.code });

  const hoverIn = (e) => {
    e.currentTarget.style.borderColor = "rgba(106, 92, 255, 0.7)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const hoverOut = (e) => {
    e.currentTarget.style.borderColor = "rgba(106, 92, 255, 0.25)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const inner = (
    <>
      <div style={titleStyle}>{data.title}</div>
      {sub && <div style={metaStyle}>{sub}</div>}
      {data.desc && <div style={descStyle}>{data.desc}</div>}
      {extras.length > 0 && (
        <div style={chipRow}>
          {extras.map((x) => (
            <a
              key={x.label}
              href={x.href}
              target="_blank"
              rel="noopener noreferrer"
              style={chip}
              onClick={(e) => e.stopPropagation()}
            >
              {x.label}
            </a>
          ))}
        </div>
      )}
    </>
  );

  if (primaryUrl) {
    return (
      <a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={card(accent)}
        onMouseOver={hoverIn}
        onMouseOut={hoverOut}
      >
        {inner}
      </a>
    );
  }
  return <div style={card(accent)}>{inner}</div>;
}

export default function ListPanel({ items, kind, accent }) {
  return (
    <div>
      <div style={{ marginBottom: 14, fontSize: 13, color: "#a78bfa" }}>
        {items.length} {kind}{items.length === 1 ? "" : "s"}
      </div>
      <div style={grid}>
        {items.map((it) => (
          <Item key={it.order ?? it.title} data={it} kind={kind} accent={accent} />
        ))}
      </div>
    </div>
  );
}
