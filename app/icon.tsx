import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

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
          backgroundColor: "#070707",
          color: "#d4b06d",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        DMA
      </div>
    ),
    {
      ...size,
    }
  );
}