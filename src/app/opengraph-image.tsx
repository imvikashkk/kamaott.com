import { ImageResponse } from "next/og";

export const alt = "KamaOTT: Coming Soon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const folds = "repeating-linear-gradient(90deg, #36040e 0, #7c0f22 20px, #bf1a34 34px, #8a1126 50px, #36040e 68px)";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        color: "#f7efe2",
        backgroundColor: "#12060a",
        backgroundImage: "radial-gradient(ellipse at center, #5a3320, #12060a 62%)",
      }}
    >
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 200, backgroundImage: folds }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 200, backgroundImage: folds }} />
      <div style={{ fontSize: 40, letterSpacing: 12, color: "#eec477", fontWeight: 700 }}>KAMA OTT</div>
      <div style={{ fontSize: 112, fontWeight: 700, marginTop: 20 }}>Coming Soon</div>
    </div>,
    size,
  );
}
