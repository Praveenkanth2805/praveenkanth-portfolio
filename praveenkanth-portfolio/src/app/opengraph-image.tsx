import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Praveenkanth | Software Developer & AI-Assisted Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #020617 0%, #1e1b4b 50%, #020617 100%)",
          fontFamily: "Inter, sans-serif",
          color: "#e2e8f0",
        }}
      >
        <div style={{ color: "#818cf8", fontSize: 32, fontWeight: 600 }}>PK · Portfolio</div>
        <div style={{ marginTop: 24, fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
          Praveenkanth
        </div>
        <div style={{ marginTop: 16, fontSize: 36, color: "#a5b4fc" }}>
          Software Developer & AI-Assisted Developer
        </div>
        <div style={{ marginTop: 12, fontSize: 24, color: "#94a3b8", fontFamily: "monospace" }}>
          $ React · Laravel · Python · Flutter · REST APIs
        </div>
      </div>
    ),
    { ...size },
  );
}