import { ImageResponse } from "next/og";

import { APP_NAME, APP_TAGLINE } from "@/constants/platform";

export const runtime = "edge";
export const alt = APP_NAME;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #070707 0%, #0b0907 58%, #2b2011 100%)",
          color: "#ffffff",
          padding: "64px",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "36px",
            padding: "52px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))"
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#d4b06d"
            }}
          >
            <div
              style={{
                display: "flex",
                height: 52,
                width: 52,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "#f8f0e4",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.22em"
              }}
            >
              DMA
            </div>
            Dumbe | KwaZulu-Natal | South Africa
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: 860 }}>
            <div
              style={{
                fontSize: 78,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.06em"
              }}
            >
              {APP_NAME}
            </div>
            <div
              style={{
                maxWidth: 760,
                fontSize: 32,
                lineHeight: 1.35,
                color: "rgba(255,255,255,0.8)"
              }}
            >
              Celebrating talent, honouring legacy, and elevating the voices shaping Dumbe and its surrounding communities.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px"
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)"
              }}
            >
              {APP_TAGLINE}
            </div>
            <div
              style={{
                padding: "14px 22px",
                borderRadius: "999px",
                background: "#d4b06d",
                color: "#17120b",
                fontSize: 22,
                fontWeight: 700
              }}
            >
              Cultural platform
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
