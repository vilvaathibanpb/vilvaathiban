import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ToolBox, Row, Btn, BtnGhost } from "../toolPage";

// wa.me click-to-chat link + QR code. Everything is derived from two inputs, so
// there is no "generate" button — the result updates as you type.

const COLOR = "#0f766e";

const Result = styled.div`
  margin-top: 16px;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  background: #f8fafc;
  word-break: break-all;
  font-size: 15px;

  a {
    color: #0f766e;
    font-weight: 600;
  }
`;

const QrWrap = styled.div`
  margin-top: 16px;
  display: ${(p) => (p.show ? "block" : "none")};

  canvas {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #fff;
  }
`;

const Hint = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 6px 0 0;
`;

export default function LinkQrTool() {
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef(null);

  // wa.me wants digits only: no +, no spaces, no dashes.
  const digits = phone.replace(/\D/g, "");
  const link = digits
    ? `https://wa.me/${digits}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`
    : "";
  // Shortest valid international numbers are 7 digits; longest are 15 (E.164).
  const looksShort = digits.length > 0 && digits.length < 7;

  useEffect(() => {
    let cancelled = false;
    if (!link || !canvasRef.current) return undefined;
    (async () => {
      const QRCode = (await import("qrcode")).default;
      if (cancelled || !canvasRef.current) return;
      QRCode.toCanvas(canvasRef.current, link, {
        width: 240,
        margin: 1,
        errorCorrectionLevel: "M",
        color: { dark: "#0b3b36", light: "#ffffff" },
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [link]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      // Clipboard needs a secure context and permission; fall back to select-all.
      const el = document.createElement("textarea");
      el.value = link;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  const downloadQr = () => {
    const a = document.createElement("a");
    a.download = `chat-qr-${digits}.png`;
    a.href = canvasRef.current.toDataURL("image/png");
    a.click();
  };

  return (
    <ToolBox color={COLOR}>
      <label htmlFor="wa-phone">Phone number, including country code</label>
      <input
        id="wa-phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="e.g. 14155550100 or +44 7700 900123"
      />
      <Hint>
        Country code first, no leading zero, no plus sign needed. Spaces and dashes are
        stripped for you.
      </Hint>

      <label htmlFor="wa-msg">Message to pre-fill (optional)</label>
      <textarea
        id="wa-msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Hi! I saw your menu and would like to order."
      />

      {link && (
        <>
          <Result>
            <a href={link} target="_blank" rel="noreferrer noopener">
              {link}
            </a>
          </Result>
          {looksShort && (
            <Hint>
              That looks short for an international number. Check you included the country
              code.
            </Hint>
          )}
          <Row>
            <Btn color={COLOR} type="button" onClick={copy}>
              {copied ? "Copied" : "Copy link"}
            </Btn>
            <BtnGhost color={COLOR} type="button" onClick={downloadQr}>
              Download QR code
            </BtnGhost>
            <BtnGhost
              as="a"
              color={COLOR}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              Test it
            </BtnGhost>
          </Row>
        </>
      )}

      <QrWrap show={!!link}>
        <canvas ref={canvasRef} aria-label="QR code for your chat link" />
      </QrWrap>
    </ToolBox>
  );
}
