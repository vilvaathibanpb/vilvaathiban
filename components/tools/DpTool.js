import { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import { ToolBox, Row, Btn, Drop } from "../toolPage";

// Pads a photo onto a square canvas so a profile picture crop does not cut the
// subject off. The original Vite version redrew only on file pick, so changing
// the background option after choosing a photo did nothing. Here the decoded
// image is kept in a ref and every option change triggers a redraw.

const COLOR = "#0f766e";

const Canvas = styled.canvas`
  margin-top: 16px;
  width: 100%;
  max-width: 340px;
  height: auto;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  display: ${(p) => (p.show ? "block" : "none")};
`;

const Opts = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 14px;
  font-size: 14.5px;
  color: #334155;

  label {
    display: inline-flex !important;
    align-items: center;
    gap: 7px;
    margin: 0 !important;
    font-weight: 600 !important;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 17px;
    height: 17px;
    accent-color: ${COLOR};
  }

  input[type="color"] {
    width: 44px;
    height: 30px;
    padding: 0;
    border: 1px solid #d1d5db;
    border-radius: 7px;
    background: none;
    cursor: pointer;
  }
`;

const SIZE = 1024; // Comfortably above what any profile picture crop asks for.

export default function DpTool() {
  const [hasImage, setHasImage] = useState(false);
  const [bg, setBg] = useState("#ffffff");
  const [blurBg, setBlurBg] = useState(true);
  const [over, setOver] = useState(false);
  const [name, setName] = useState("");
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const fileRef = useRef(null);

  const draw = useCallback(() => {
    const img = imgRef.current;
    const c = canvasRef.current;
    if (!img || !c) return;
    c.width = SIZE;
    c.height = SIZE;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, SIZE, SIZE);

    if (blurBg) {
      // A zoomed, blurred copy of the photo fills the padding, which reads far
      // better than flat bars on a photo with a busy background.
      const s = Math.max(SIZE / img.width, SIZE / img.height) * 1.25;
      ctx.filter = "blur(28px)";
      ctx.drawImage(
        img,
        (SIZE - img.width * s) / 2,
        (SIZE - img.height * s) / 2,
        img.width * s,
        img.height * s
      );
      ctx.filter = "none";
    } else {
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, SIZE, SIZE);
    }

    const scale = Math.min(SIZE / img.width, SIZE / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    ctx.drawImage(img, (SIZE - w) / 2, (SIZE - h) / 2, w, h);
  }, [blurBg, bg]);

  useEffect(() => {
    if (hasImage) draw();
  }, [hasImage, draw]);

  const onFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      setName(file.name.replace(/\.\w+$/, ""));
      setHasImage(true);
      URL.revokeObjectURL(url);
    };
    img.onerror = () => URL.revokeObjectURL(url);
    img.src = url;
  };

  const download = () => {
    const a = document.createElement("a");
    a.download = `${name || "profile-picture"}-square.jpg`;
    a.href = canvasRef.current.toDataURL("image/jpeg", 0.95);
    a.click();
  };

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
          onFile(e.dataTransfer.files[0]);
        }}
      >
        {hasImage ? "Photo loaded. Drop another to replace it." : "Drop a photo here, or click to choose one"}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => onFile(e.target.files[0])}
        />
      </Drop>

      <Opts>
        <label>
          <input
            type="checkbox"
            checked={blurBg}
            onChange={(e) => setBlurBg(e.target.checked)}
          />
          Blurred background
        </label>
        {!blurBg && (
          <label>
            Fill colour
            <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} />
          </label>
        )}
      </Opts>

      <Canvas ref={canvasRef} show={hasImage} aria-label="Square version of your photo" />

      {hasImage && (
        <Row>
          <Btn color={COLOR} type="button" onClick={download}>
            Download square photo
          </Btn>
        </Row>
      )}
    </ToolBox>
  );
}
