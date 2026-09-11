import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ToolBox, Row, Btn, BtnGhost, Drop } from "../toolPage";

// Batch audio conversion in the browser.
//
// This used to run ffmpeg.wasm. It no longer does, for two reasons. The engine
// is a 32 MB WebAssembly download, which is a heavy price on a page whose whole
// job is to rank and load fast. And it builds its Worker from a cross-origin
// script URL, which browsers refuse outright.
//
// Instead the browser's own decoder does the hard part: decodeAudioData handles
// Ogg Opus, M4A, MP3, WAV, FLAC and friends natively and instantly. We only have
// to encode the result, which is a small pure-JS MP3 encoder plus a WAV header
// we write ourselves. No wasm, no worker, no CDN, nothing to go wrong offline.
//
// The trade is that we can no longer *encode* to M4A or Opus, which needs codecs
// the browser does not expose. MP3 and WAV cover what this page is for.

const COLOR = "#c2410c";

// Sample rates the MP3 encoder accepts. Anything else is resampled to 48 kHz
// first, which only comes up on unusual hardware.
const MP3_RATES = [8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000];

const FORMATS = {
  mp3: { mime: "audio/mpeg", label: "MP3" },
  wav: { mime: "audio/wav", label: "WAV (uncompressed)" },
};

const AUDIO_RE = /\.(opus|ogg|oga|mp3|m4a|m4b|aac|wav|amr|caf|aif|aiff|flac|3gp|mp4|weba|webm)$/i;

const List = styled.ul`
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  font-size: 14.5px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    margin-bottom: 8px;
    background: #fff;
  }

  .nm {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #111827;
  }

  .st {
    flex-shrink: 0;
    font-weight: 700;
    font-size: 13px;
    color: #64748b;
  }

  .st.done a {
    color: #c2410c;
  }

  .st.error {
    color: #b91c1c;
  }
`;

// The percentage is published as a custom property at the top level, because an
// interpolation inside the nested `span` block would be stripped by the build.
const Bar = styled.div`
  --pct: ${(p) => p.pct}%;
  margin-top: 14px;
  height: 6px;
  border-radius: 999px;
  background: #f1f5f9;
  overflow: hidden;

  span {
    display: block;
    height: 100%;
    width: var(--pct);
    background: #c2410c;
    transition: width 0.2s ease;
  }
`;

const Hint = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 10px 0 0;
`;

const floatTo16 = (f32) => {
  const out = new Int16Array(f32.length);
  for (let i = 0; i < f32.length; i++) {
    const s = f32[i] < -1 ? -1 : f32[i] > 1 ? 1 : f32[i];
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return out;
};

async function decodeFile(file) {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  const ctx = new Ctx();
  let audio;
  try {
    audio = await ctx.decodeAudioData(await file.arrayBuffer());
  } finally {
    ctx.close();
  }
  if (!MP3_RATES.includes(audio.sampleRate)) {
    const rate = 48000;
    const off = new OfflineAudioContext(
      audio.numberOfChannels,
      Math.ceil(audio.duration * rate),
      rate
    );
    const src = off.createBufferSource();
    src.buffer = audio;
    src.connect(off.destination);
    src.start();
    audio = await off.startRendering();
  }
  return audio;
}

async function toMp3(audio, onTick) {
  const { Mp3Encoder } = await import("@breezystack/lamejs");
  const channels = Math.min(2, audio.numberOfChannels);
  const encoder = new Mp3Encoder(channels, audio.sampleRate, 128);
  const left = floatTo16(audio.getChannelData(0));
  const right = channels > 1 ? floatTo16(audio.getChannelData(1)) : null;
  const chunks = [];
  const BLOCK = 1152; // one MP3 frame

  for (let i = 0; i < left.length; i += BLOCK) {
    const l = left.subarray(i, i + BLOCK);
    const buf = right
      ? encoder.encodeBuffer(l, right.subarray(i, i + BLOCK))
      : encoder.encodeBuffer(l);
    if (buf.length) chunks.push(new Uint8Array(buf));
    // Encoding is synchronous, so hand the main thread back every so often or a
    // long recording freezes the page.
    if ((i / BLOCK) % 512 === 0) {
      if (onTick) onTick(i / left.length);
      await new Promise((r) => setTimeout(r, 0));
    }
  }
  const end = encoder.flush();
  if (end.length) chunks.push(new Uint8Array(end));
  return new Blob(chunks, { type: "audio/mpeg" });
}

function toWav(audio) {
  const channels = Math.min(2, audio.numberOfChannels);
  const frames = audio.length;
  const data = new Int16Array(frames * channels);
  const chans = [];
  for (let c = 0; c < channels; c++) chans.push(audio.getChannelData(c));
  for (let i = 0; i < frames; i++) {
    for (let c = 0; c < channels; c++) {
      const s = chans[c][i] < -1 ? -1 : chans[c][i] > 1 ? 1 : chans[c][i];
      data[i * channels + c] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }
  }
  const bytes = data.length * 2;
  const buf = new ArrayBuffer(44 + bytes);
  const v = new DataView(buf);
  const put = (off, str) => {
    for (let i = 0; i < str.length; i++) v.setUint8(off + i, str.charCodeAt(i));
  };
  put(0, "RIFF");
  v.setUint32(4, 36 + bytes, true);
  put(8, "WAVE");
  put(12, "fmt ");
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true);
  v.setUint16(22, channels, true);
  v.setUint32(24, audio.sampleRate, true);
  v.setUint32(28, audio.sampleRate * channels * 2, true);
  v.setUint16(32, channels * 2, true);
  v.setUint16(34, 16, true);
  put(36, "data");
  v.setUint32(40, bytes, true);
  new Int16Array(buf, 44).set(data);
  return new Blob([buf], { type: "audio/wav" });
}

export default function OpusTool() {
  const [files, setFiles] = useState([]);
  const [fmt, setFmt] = useState("mp3");
  const [busy, setBusy] = useState(false);
  const [pct, setPct] = useState(0);
  const [over, setOver] = useState(false);
  const [err, setErr] = useState("");
  const fileRef = useRef(null);
  const urlsRef = useRef([]);

  // Blob URLs outlive the component unless we let them go.
  useEffect(
    () => () => {
      urlsRef.current.forEach((u) => URL.revokeObjectURL(u));
    },
    []
  );

  const add = (list) => {
    const audio = [...list].filter((f) => AUDIO_RE.test(f.name));
    if (!audio.length) {
      setErr("Those files did not look like audio. Try .opus, .ogg, .m4a, .mp3 or .wav.");
      return;
    }
    setErr("");
    setFiles((fs) => [...fs, ...audio.map((file) => ({ file, status: "ready" }))]);
  };

  const convertAll = async () => {
    setBusy(true);
    setErr("");
    setPct(0);
    const todo = files.filter((f) => f.status !== "done").length;
    let done = 0;
    let failed = 0;

    for (let i = 0; i < files.length; i++) {
      if (files[i].status === "done") continue;
      setFiles((fs) => fs.map((f, j) => (j === i ? { ...f, status: "converting" } : f)));
      const niceName = `${files[i].file.name.replace(/\.\w+$/, "")}.${fmt}`;
      try {
        const audio = await decodeFile(files[i].file);
        const blob = fmt === "mp3" ? await toMp3(audio) : toWav(audio);
        const url = URL.createObjectURL(blob);
        urlsRef.current.push(url);
        setFiles((fs) =>
          fs.map((f, j) => (j === i ? { ...f, status: "done", url, outName: niceName } : f))
        );
      } catch (e) {
        failed += 1;
        setFiles((fs) => fs.map((f, j) => (j === i ? { ...f, status: "error" } : f)));
      }
      done += 1;
      setPct(Math.round((done / todo) * 100));
    }

    if (failed) {
      setErr(
        failed === 1
          ? "One file could not be decoded. It may be incomplete, or in a format this browser does not support."
          : `${failed} files could not be decoded. They may be incomplete, or in a format this browser does not support.`
      );
    }
    setBusy(false);
  };

  const downloadAll = () =>
    files
      .filter((f) => f.url)
      .forEach((f) => {
        const a = document.createElement("a");
        a.download = f.outName;
        a.href = f.url;
        a.click();
      });

  const readyCount = files.filter((f) => f.status !== "done").length;
  const doneCount = files.filter((f) => f.url).length;

  return (
    <ToolBox color={COLOR}>
      <Drop
        color={COLOR}
        over={over}
        role="button"
        tabIndex={0}
        onClick={() => fileRef.current && fileRef.current.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") fileRef.current.click();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          add(e.dataTransfer.files);
        }}
      >
        Drop voice notes or audio files here, or click to choose. Several at once is fine.
        <input
          ref={fileRef}
          type="file"
          accept=".opus,.ogg,.oga,.mp3,.m4a,.aac,.wav,.amr,.caf,.flac,audio/*"
          multiple
          hidden
          onChange={(e) => add(e.target.files)}
        />
      </Drop>

      <label htmlFor="fmt">Convert to</label>
      <select id="fmt" value={fmt} onChange={(e) => setFmt(e.target.value)}>
        {Object.entries(FORMATS).map(([k, v]) => (
          <option key={k} value={k}>
            {v.label}
          </option>
        ))}
      </select>

      <Row>
        <Btn color={COLOR} type="button" disabled={busy || !readyCount} onClick={convertAll}>
          {busy ? "Converting" : `Convert ${readyCount || ""} file${readyCount === 1 ? "" : "s"}`}
        </Btn>
        {doneCount > 1 && (
          <BtnGhost color={COLOR} type="button" onClick={downloadAll}>
            Download all {doneCount}
          </BtnGhost>
        )}
      </Row>

      {busy && (
        <Bar pct={pct}>
          <span />
        </Bar>
      )}
      {err && <Hint style={{ color: "#b91c1c" }}>{err}</Hint>}

      {files.length > 0 && (
        <List>
          {files.map((f, i) => (
            <li key={`${f.file.name}-${i}`}>
              <span className="nm">{f.file.name}</span>
              <span className={`st ${f.status}`}>
                {f.status === "done" ? (
                  <a href={f.url} download={f.outName}>
                    Download
                  </a>
                ) : f.status === "error" ? (
                  "Could not convert"
                ) : (
                  f.status
                )}
              </span>
            </li>
          ))}
        </List>
      )}
    </ToolBox>
  );
}
