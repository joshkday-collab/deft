import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090d",
          color: "#efd7a0",
          fontSize: 20,
          fontWeight: 600,
          border: "2px solid #d4b06a",
          borderRadius: 8,
        }}
      >
        D
      </div>
    ),
    { ...size },
  );
}
