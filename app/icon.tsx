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
          background: "#0B1929",
          position: "relative",
        }}
      >
        {/* Faint amber glow — morning-light nod */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 72% 28%, rgba(230,169,64,0.42), transparent 60%)",
            display: "flex",
          }}
        />
        {/* Monogram "C" */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: 24,
            fontWeight: 500,
            color: "#E8E4D9",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 2,
          }}
        >
          C
        </div>
        {/* Amber dot — morning-light window indicator */}
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            width: 4,
            height: 4,
            borderRadius: 999,
            background: "#E6A940",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
