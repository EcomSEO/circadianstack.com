import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1929",
          position: "relative",
        }}
      >
        {/* Dawn amber glow — top right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 78% 22%, rgba(230,169,64,0.3), transparent 55%)",
            display: "flex",
          }}
        />
        {/* Zenith cyan glow — bottom left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 18% 82%, rgba(94,175,201,0.16), transparent 55%)",
            display: "flex",
          }}
        />

        {/* Thin rule framing the monogram */}
        <div
          style={{
            position: "absolute",
            left: 18,
            right: 18,
            top: 18,
            bottom: 18,
            border: "1px solid #1E3047",
            borderRadius: 22,
            display: "flex",
          }}
        />

        {/* Monogram "C" */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: 128,
            fontWeight: 500,
            color: "#E8E4D9",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 10,
          }}
        >
          C
        </div>

        {/* Amber dot — morning-light window indicator */}
        <div
          style={{
            position: "absolute",
            top: 44,
            right: 44,
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "#E6A940",
            boxShadow: "0 0 18px rgba(230,169,64,0.55)",
            display: "flex",
          }}
        />

        {/* Monospace wordmark stub at the bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 22,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "monospace",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6B7A8A",
          }}
        >
          CircadianStack
        </div>
      </div>
    ),
    { ...size }
  );
}
