function Item({ data, kind, accent }) {
  const title = data.title;
  const primaryUrl =
    data.url || data.video || data.demo_url || data.repo || data.npm || data.slides || data.code || "";
  const sub = [data.host, data.date].filter(Boolean).join(" · ");

  return (
    <div className="gp-item">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
        <div style={{ fontWeight: 700, fontSize: 16 }}>
          {primaryUrl ? (
            <a className="gp-link" href={primaryUrl} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </div>
        {sub && <div className="gp-meta" style={{ whiteSpace: "nowrap" }}>{sub}</div>}
      </div>
      {data.desc && <div style={{ marginTop: 6, fontSize: 14, color: "#d4ceff" }}>{data.desc}</div>}
      {(data.repo || data.npm || data.docs || data.demo_url || data.slides || data.video || data.code) && (
        <div style={{ marginTop: 8, display: "flex", gap: 12, flexWrap: "wrap" }}>
          {data.repo && <a className="gp-link" href={data.repo} target="_blank" rel="noopener noreferrer">repo</a>}
          {data.npm && <a className="gp-link" href={data.npm} target="_blank" rel="noopener noreferrer">npm</a>}
          {data.docs && <a className="gp-link" href={data.docs} target="_blank" rel="noopener noreferrer">docs</a>}
          {data.demo_url && <a className="gp-link" href={data.demo_url} target="_blank" rel="noopener noreferrer">demo</a>}
          {data.slides && <a className="gp-link" href={data.slides} target="_blank" rel="noopener noreferrer">slides</a>}
          {data.video && <a className="gp-link" href={data.video} target="_blank" rel="noopener noreferrer">video</a>}
          {data.code && kind === "talk" && <a className="gp-link" href={data.code} target="_blank" rel="noopener noreferrer">code</a>}
        </div>
      )}
    </div>
  );
}

export default function ListPanel({ items, kind, accent }) {
  return (
    <div>
      <div style={{ marginBottom: 14, fontSize: 13, color: "#a78bfa" }}>
        {items.length} {kind}{items.length === 1 ? "" : "s"}
      </div>
      {items.map((it) => (
        <Item key={it.order ?? it.title} data={it} kind={kind} accent={accent} />
      ))}
    </div>
  );
}
