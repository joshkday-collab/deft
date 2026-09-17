import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Deft — Recover the jobs you already paid to win.";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090d",
          color: "#f3eee4",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#d4b06a",
          }}
        >
          Deft
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Recover the jobs
          </div>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#efd7a0",
            }}
          >
            you already paid to win.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#b7b0a3",
              maxWidth: 780,
            }}
          >
            Deft Launch — missed calls to WhatsApp. £497 setup. £79 a month.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
