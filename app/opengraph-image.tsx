import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Deft Launch — missed-call recovery for trades | Greater Manchester";

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
          background: "#f3efe7",
          color: "#1b1a17",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            DEFT
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 20,
              color: "#6a655e",
            }}
          >
            Stop losing jobs to voicemail.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              maxWidth: 920,
            }}
          >
            Recover the jobs you miss when you’re already on a job.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              color: "#2c5364",
              maxWidth: 820,
            }}
          >
            £497 setup on acceptance · £79/month from go-live · WhatsApp only
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
