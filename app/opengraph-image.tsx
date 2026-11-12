import { ImageResponse } from "next/og";

export const alt = "VWO Technologies: real-world problems in, working systems out";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pill = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  border: "2px solid #b9c7bf",
  borderRadius: 999,
  padding: "12px 24px",
  fontSize: 28,
  background: "#ffffff",
} as const;

const dot = (color: string) => ({ width: 14, height: 14, borderRadius: 7, background: color });

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f6f3",
          color: "#0f1f1a",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 34, fontWeight: 700 }}>
          <div style={dot("#ff7a1a")} />
          VWO Technologies
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -3,
          }}
        >
          <span>Real-world problems in.</span>
          <span style={{ color: "#0e4d3a" }}>Working systems out.</span>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <div style={pill}>
            <div style={dot("#ff7a1a")} />
            ReachOut · Live
          </div>
          <div style={pill}>
            <div style={dot("#0e4d3a")} />
            Anywrk · Onboarding artisans
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}