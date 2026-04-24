import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0B1929",
          position: "relative",
          padding: "68px 84px",
          fontFamily: "serif",
        }}
      >
        {/* Dawn amber glow — top right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 85% 18%, rgba(230,169,64,0.22), transparent 52%)",
            display: "flex",
          }}
        />
        {/* Zenith cyan glow — bottom left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 12% 88%, rgba(94,175,201,0.14), transparent 55%)",
            display: "flex",
          }}
        />

        {/* Top strip — dateline in monospace */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#E6A940",
            position: "relative",
          }}
        >
          <span>{SITE.protocolLogPrefix}</span>
          <span style={{ color: "#1E3047" }}>·</span>
          <span style={{ color: "#6B7A8A" }}>{SITE.issue}</span>
          <span style={{ color: "#1E3047" }}>·</span>
          <span style={{ color: "#6B7A8A" }}>The Launch Edition</span>
        </div>

        {/* Middle — wordmark + headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 34,
            position: "relative",
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 0,
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: "serif",
                fontSize: 108,
                fontWeight: 500,
                color: "#E8E4D9",
                letterSpacing: "-0.018em",
              }}
            >
              Circadian
            </span>
            <span
              style={{
                fontFamily: "serif",
                fontSize: 108,
                fontWeight: 500,
                color: "#E6A940",
                letterSpacing: "-0.018em",
              }}
            >
              Stack
            </span>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#E6A940",
                marginLeft: 14,
                marginBottom: 14,
                alignSelf: "flex-end",
                display: "flex",
                boxShadow: "0 0 28px rgba(230,169,64,0.55)",
              }}
            />
          </div>

          {/* Monospace tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            <div
              style={{
                width: 56,
                height: 2,
                background: "#E6A940",
                display: "flex",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 38,
                color: "#E6A940",
                letterSpacing: "-0.005em",
              }}
            >
              {SITE.tagline}
            </span>
          </div>
        </div>

        {/* Decorative rule — thin hairline above the footer */}
        <div
          style={{
            position: "absolute",
            left: 84,
            right: 84,
            bottom: 120,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              width: 36,
              height: 1,
              background: "#E6A940",
              display: "flex",
            }}
          />
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#E6A940",
              display: "flex",
            }}
          />
          <span
            style={{
              flex: 1,
              height: 1,
              background: "#1E3047",
              display: "flex",
            }}
          />
        </div>

        {/* Bottom dateline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#E6A940",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <span>{SITE.protocolLogPrefix}</span>
            <span style={{ color: "#1E3047" }}>·</span>
            <span>{SITE.issue}</span>
            <span style={{ color: "#1E3047" }}>·</span>
            <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
          </div>
          <span style={{ color: "#6B7A8A" }}>{SITE.shortTagline}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
