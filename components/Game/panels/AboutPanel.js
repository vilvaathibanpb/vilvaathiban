import { socials } from "../../../data/social";

const row = { display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" };
const photo = {
  width: 180,
  height: 180,
  borderRadius: 16,
  objectFit: "cover",
  border: "2px solid rgba(106, 92, 255, 0.6)",
  flexShrink: 0,
};
const p = { lineHeight: 1.7, marginBottom: 14, fontSize: 15 };
const hl = { color: "#00e0ff", fontWeight: 700 };

const socialBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "8px 14px",
  borderRadius: 20,
  background: "rgba(106, 92, 255, 0.15)",
  border: "1px solid rgba(106, 92, 255, 0.5)",
  color: "#e9e6ff",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 600,
};

export default function AboutPanel() {
  return (
    <div>
      <div style={row}>
        <img src="/intro.jpg" alt="Vilva Athiban" style={photo} />
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={p}>
            Hola! I'm <span style={hl}>Vilva Athiban</span>, the AI Jockey. I'm a{" "}
            <span style={hl}>Lead AI Engineer at Omio</span>, one of Europe's leading travel
            platforms, where I architect and ship <span style={hl}>Agentic AI systems in
            production</span>.
          </p>
          <p style={p}>
            My work spans LLM orchestration, RAG pipelines, multi-agent systems, MCP (Model
            Context Protocol), prompt engineering and applied ML. I ship omio.ai — an internal
            LLM platform adopted across Omio — and MCP integrations that connect AI agents to
            live business systems.
          </p>
          <p style={p}>
            I've been teaching developers since 2017 across JavaScript, Python and Agentic AI.
            My community has grown to <span style={hl}>14,000+ across platforms</span>, and I
            have delivered <span style={hl}>50+ talks across 7 countries</span>.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
            {Object.keys(socials).map((k) => (
              <a key={k} href={socials[k]} target="_blank" rel="noopener noreferrer" style={socialBtn}>
                {k}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
